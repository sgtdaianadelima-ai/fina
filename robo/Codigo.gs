// =====================================================================
// Robô da Fina — finanças da família Assis
// Fica na planilha FAMÍLIA ASSIS (Extensões > Apps Script).
// O app (https://sgtdaianadelima-ai.github.io/fina/) conversa com este robô.
//
// Para ligar: cole este arquivo e faça Implantar > Nova implantação > App da Web
// (Executar como: Eu · Quem pode acessar: Qualquer pessoa). Só isso.
// O resto se arruma sozinho no primeiro acesso:
//   CODIGO_FAMILIA  o primeiro código digitado no app vira o código da família
//   GEMINI_KEY      chave grátis do Gemini — a Daiana cola pelo app (Ajustes > IA)
// =====================================================================
const TZ = 'America/Sao_Paulo';
const APP_URL = 'https://sgtdaianadelima-ai.github.io/fina/';
const PASTA_PRINTS = 'Fina – Comprovantes';
const FORMAS_FIXAS = ['Pix/Débito', 'Dinheiro', 'Vale-alimentação'];

const ss_ = () => SpreadsheetApp.getActiveSpreadsheet();
const aba_ = n => ss_().getSheetByName(n);
const props_ = () => PropertiesService.getScriptProperties();
const json_ = o => ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
const novoId_ = p => p + Utilities.getUuid().replace(/-/g, '').slice(0, 10);
const ymd_ = d => Utilities.formatDate(d, TZ, 'yyyy-MM-dd');
const ym_ = d => Utilities.formatDate(d, TZ, 'yyyy-MM');
const num_ = v => typeof v === 'number' ? v : (Number(String(v || '').replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.')) || 0);
function paraData_(v) {               // aceita Date, 'aaaa-mm-dd', 'aaaa-mm', 'dd/mm/aaaa', 'mm/aaaa'
  if (v instanceof Date) return v;
  const s = String(v || '').trim(); let m;
  if ((m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/))) return new Date(+m[1], +m[2] - 1, +m[3], 12);
  if ((m = s.match(/^(\d{4})-(\d{2})$/))) return new Date(+m[1], +m[2] - 1, 1, 12);
  if ((m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})$/))) return new Date(+m[3], +m[2] - 1, +m[1], 12);
  if ((m = s.match(/^(\d{2})\/(\d{4})$/))) return new Date(+m[2], +m[1] - 1, 1, 12);
  return null;
}
const textoData_ = (v, mes) => { const d = paraData_(v); return d ? (mes ? ym_(d) : ymd_(d)) : ''; };

// ---------- abas e colunas ----------
// Lançamentos: A Data | B Valor | C Categoria | D Quem | E Forma | F Descrição | G (fórmula) | H ID | I Comprovante | J Criado por | K Criado em
// Parcelas:    A Descrição | B Categoria | C Valor | D Nº | E Mês 1ª | F Forma | G Quem | H,I (fórmulas) | J ID
// Entradas:    A Mês | B Quem | C Tipo | D Valor | E Descrição | F ID
const TAB = {
  gasto:   {aba: 'Lançamentos', idCol: 8, prefixo: 'g'},
  parcela: {aba: 'Parcelas',    idCol: 10, prefixo: 'p'},
  entrada: {aba: 'Entradas',    idCol: 6, prefixo: 'e'},
};
function ultimaLinha_(sh) {           // última linha com algo na coluna A (ignora fórmulas que se espalham)
  const v = sh.getRange(1, 1, Math.max(sh.getLastRow(), 1), 1).getValues();
  for (let i = v.length - 1; i >= 0; i--) if (String(v[i][0]).trim() !== '') return i + 1;
  return 1;
}
function linhas_(tipo) {
  const t = TAB[tipo], sh = aba_(t.aba), last = ultimaLinha_(sh);
  if (last < 2) return [];
  const larg = Math.max(t.idCol, tipo === 'gasto' ? 11 : t.idCol);
  const vals = sh.getRange(2, 1, last - 1, larg).getValues();
  const out = []; const faltaId = [];
  vals.forEach((r, i) => {
    if (String(r[0]).trim() === '') return;
    let id = String(r[t.idCol - 1] || '').trim();
    if (!id) { id = novoId_(t.prefixo); faltaId.push([i + 2, id]); }
    out.push({row: r, id: id, linha: i + 2});
  });
  if (faltaId.length) {                 // grava todos os IDs de uma vez (rápido mesmo com muitas linhas)
    const col = vals.map(r => [r[t.idCol - 1]]);
    faltaId.forEach(([l, id]) => { col[l - 2][0] = id; });
    sh.getRange(2, t.idCol, col.length, 1).setValues(col);
  }
  return out;
}
function lerGastos_() {
  return linhas_('gasto').map(({row: r, id}) => ({id, data: textoData_(r[0]), valor: num_(r[1]), categoria: String(r[2] || ''), quem: String(r[3] || ''),
    forma: String(r[4] || ''), descricao: String(r[5] || ''), comprovante: String(r[8] || ''), criadoPor: String(r[9] || '')}));
}
function lerParcelas_() {
  return linhas_('parcela').map(({row: r, id}) => ({id, descricao: String(r[0] || ''), categoria: String(r[1] || ''), valor: num_(r[2]), n: Number(r[3]) || 1,
    inicio: textoData_(r[4], true), forma: String(r[5] || ''), quem: String(r[6] || '')}));
}
function lerEntradas_() {
  return linhas_('entrada').map(({row: r, id}) => ({id, mes: textoData_(r[0], true), quem: String(r[1] || ''), tipo: String(r[2] || ''), valor: num_(r[3]), descricao: String(r[4] || '')}));
}
function lerLista_(sh, a1, colunas) {
  return sh.getRange(a1).getValues().filter(r => String(r[0]).trim() !== '').map(r => colunas(r));
}
function lerConfig_() {
  const sh = aba_('Config');
  const categorias = lerLista_(sh, 'A3:B40', r => ({nome: String(r[0]), orcamento: num_(r[1])}));
  const fixas = lerLista_(sh, 'D3:E40', r => ({nome: String(r[0]), valor: num_(r[1])}));
  const cartoes = lerLista_(sh, 'N14:P40', r => ({nome: String(r[0]), fecha: Number(r[1]) || '', vence: Number(r[2]) || ''}));
  const m = sh.getRange('O3:O5').getValues().map(r => num_(r[0]));
  const pct = v => v > 1 ? v / 100 : v;
  const res = sh.getRange('O8:O10').getValues();
  return {categorias, fixas, cartoes,
    metas: {dizimo: pct(m[0]), reserva: pct(m[1]), investimentos: pct(m[2])},
    reserva: {saldo: num_(res[0][0]), meses: Number(res[1][0]) || 6, atualizado: textoData_(res[2][0])}};
}
function lerApp_() {
  let sh = aba_('App');
  if (!sh) return {};
  try { return JSON.parse(sh.getRange('A1').getValue() || '{}'); } catch (e) { return {}; }
}
function gravarApp_(patch) {
  let sh = aba_('App');
  if (!sh) { sh = ss_().insertSheet('App'); sh.hideSheet(); }
  const atual = lerApp_();
  const juntar = (a, b) => { const o = Object.assign({}, a); Object.keys(b || {}).forEach(k => { o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k] && typeof a[k] === 'object') ? juntar(a[k], b[k]) : b[k]; }); return o; };
  const novo = juntar(atual, patch);
  sh.getRange('A1').setValue(JSON.stringify(novo));
  return novo;
}
function dados_() {
  return {ok: true, temIA: !!props_().getProperty('GEMINI_KEY'), config: lerConfig_(), app: lerApp_(), gastos: lerGastos_(), parcelas: lerParcelas_(), entradas: lerEntradas_(),
          atualizado: new Date().toISOString()};
}

// ---------- gravar ----------
function salvar_(tipo, it) {
  const t = TAB[tipo]; if (!t) throw new Error('tipo inválido');
  const sh = aba_(t.aba);
  let linha = 0;
  if (String(it.id || '').indexOf('tmp-') === 0) it.id = '';   // criado sem internet no celular
  if (it.id) {
    const last = ultimaLinha_(sh);
    if (last >= 2) {
      const ids = sh.getRange(2, t.idCol, last - 1, 1).getValues();
      const i = ids.findIndex(r => String(r[0]) === String(it.id));
      if (i >= 0) linha = i + 2;
    }
  }
  const id = it.id || novoId_(t.prefixo);
  if (!linha) linha = ultimaLinha_(sh) + 1;
  if (tipo === 'gasto') {
    sh.getRange(linha, 1, 1, 6).setValues([[paraData_(it.data) || new Date(), num_(it.valor), it.categoria || '', it.quem || '', it.forma || '', it.descricao || '']]);
    sh.getRange(linha, 8, 1, 4).setValues([[id, it.comprovante || '', it.criadoPor || '', it.criadoEm ? new Date(it.criadoEm) : new Date()]]);
    sh.getRange(linha, 1).setNumberFormat('dd/mm/yyyy'); sh.getRange(linha, 2).setNumberFormat('"R$" #,##0.00');
  } else if (tipo === 'parcela') {
    sh.getRange(linha, 1, 1, 7).setValues([[it.descricao || '', it.categoria || '', num_(it.valor), Number(it.n) || 1, paraData_(it.inicio) || new Date(), it.forma || '', it.quem || '']]);
    sh.getRange(linha, 10).setValue(id);
    sh.getRange(linha, 3).setNumberFormat('"R$" #,##0.00'); sh.getRange(linha, 5).setNumberFormat('mm/yyyy');
  } else {
    sh.getRange(linha, 1, 1, 6).setValues([[paraData_(it.mes) || new Date(), it.quem || 'Casal', it.tipo || 'Renda extra', num_(it.valor), it.descricao || '', id]]);
    sh.getRange(linha, 1).setNumberFormat('mm/yyyy'); sh.getRange(linha, 4).setNumberFormat('"R$" #,##0.00');
  }
  return id;
}
function apagar_(tipo, id) {
  const t = TAB[tipo], sh = aba_(t.aba), last = ultimaLinha_(sh);
  if (last < 2) return false;
  const ids = sh.getRange(2, t.idCol, last - 1, 1).getValues();
  const i = ids.findIndex(r => String(r[0]) === String(id));
  if (i < 0) return false;
  sh.deleteRow(i + 2);
  return true;
}
function gravarConfig_(c) {
  const sh = aba_('Config');
  const escreve = (a1Inicio, linhas, larg, maxLinhas) => {
    const r = sh.getRange(a1Inicio); sh.getRange(r.getRow(), r.getColumn(), maxLinhas, larg).clearContent();
    if (linhas.length) sh.getRange(r.getRow(), r.getColumn(), linhas.length, larg).setValues(linhas);
  };
  if (c.categorias) escreve('A3', c.categorias.map(k => [k.nome, num_(k.orcamento)]), 2, 38);
  if (c.fixas) escreve('D3', c.fixas.map(k => [k.nome, num_(k.valor)]), 2, 38);
  if (c.cartoes) {
    escreve('N14', c.cartoes.map(k => [k.nome, k.fecha || '', k.vence || '']), 3, 27);
    escreve('J3', c.cartoes.map(k => [k.nome]).concat(FORMAS_FIXAS.map(f => [f])), 1, 18);
  }
  if (c.metas) sh.getRange('O3:O5').setValues([[c.metas.dizimo], [c.metas.reserva], [c.metas.investimentos]]);
  if (c.reserva) sh.getRange('O8:O10').setValues([[num_(c.reserva.saldo)], [Number(c.reserva.meses) || 6], [paraData_(c.reserva.atualizado) || '']]);
}

// ---------- prints no Drive ----------
function pasta_() {
  const p = props_(); const id = p.getProperty('PASTA_ID');
  if (id) { try { return DriveApp.getFolderById(id); } catch (e) {} }
  const it = DriveApp.getFoldersByName(PASTA_PRINTS);
  const f = it.hasNext() ? it.next() : DriveApp.createFolder(PASTA_PRINTS);
  p.setProperty('PASTA_ID', f.getId());
  return f;
}
function salvarFoto_(b64, mime, nome) {
  const f = pasta_().createFile(Utilities.newBlob(Utilities.base64Decode(b64), mime || 'image/jpeg', nome || ('print-' + Date.now() + '.jpg')));
  return {id: f.getId(), url: f.getUrl()};
}

// ---------- Gemini ----------
function modeloGemini_(key) {
  const p = props_(); const salvo = p.getProperty('GEMINI_MODELO');
  if (salvo) return salvo;
  let nomes = [];
  try {
    const r = UrlFetchApp.fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=200', {headers: {'x-goog-api-key': key}, muteHttpExceptions: true});
    nomes = (JSON.parse(r.getContentText()).models || []).filter(m => (m.supportedGenerationMethods || []).indexOf('generateContent') >= 0).map(m => m.name.replace('models/', ''));
  } catch (e) {}
  const versao = n => { const m = n.match(/(\d+(\.\d+)?)/); return m ? parseFloat(m[1]) : 0; };
  const bons = nomes.filter(n => /flash/.test(n) && !/lite|image|tts|live|audio|exp|thinking|embed|8b/.test(n));
  bons.sort((a, b) => (versao(b) - versao(a)) || (a.indexOf('preview') - b.indexOf('preview')));
  const m = bons[0] || nomes.find(n => /flash/.test(n)) || 'gemini-2.5-flash';
  p.setProperty('GEMINI_MODELO', m);
  return m;
}
function ia_(prompt, imagens) {
  const key = props_().getProperty('GEMINI_KEY');
  if (!key) return {ok: false, erro: 'sem_chave'};
  const modelo = modeloGemini_(key);
  const parts = [{text: prompt}].concat((imagens || []).map(im => ({inline_data: {mime_type: im.mime || 'image/jpeg', data: im.data}})));
  const body = {contents: [{role: 'user', parts}], generationConfig: {temperature: 0.2, responseMimeType: 'application/json'}};
  const r = UrlFetchApp.fetch('https://generativelanguage.googleapis.com/v1beta/models/' + modelo + ':generateContent',
    {method: 'post', contentType: 'application/json', headers: {'x-goog-api-key': key}, payload: JSON.stringify(body), muteHttpExceptions: true});
  const cod = r.getResponseCode();
  if (cod !== 200) {
    if (cod === 404) props_().deleteProperty('GEMINI_MODELO');
    return {ok: false, erro: cod === 429 ? 'limite' : 'ia_' + cod};
  }
  const j = JSON.parse(r.getContentText());
  const c = ((j.candidates || [])[0] || {}).content;
  return {ok: true, texto: c && c.parts ? c.parts.map(p => p.text || '').join('').trim() : ''};
}

// ---------- entrada do app ----------
function confere_(c) {
  const p = props_(); const dado = String(c || '').trim().toLowerCase();
  let ok = p.getProperty('CODIGO_FAMILIA');
  if (!ok && dado.length >= 8) {        // primeiro acesso: o código digitado vira o da família
    const lock = LockService.getScriptLock(); lock.waitLock(25000);
    try { ok = p.getProperty('CODIGO_FAMILIA'); if (!ok) { p.setProperty('CODIGO_FAMILIA', dado); ok = dado; } } finally { lock.releaseLock(); }
  }
  if (!ok || dado !== ok.trim().toLowerCase()) return false;
  if (!p.getProperty('PRONTO')) { try { configurar(); p.setProperty('PRONTO', '1'); } catch (err) { console.error(err); } }
  return true;
}
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.a === 'ping') return json_({ok: true, fina: true});
  if (!confere_(p.c)) return json_({ok: false, erro: 'codigo'});
  try { return json_(dados_()); } catch (err) { return json_({ok: false, erro: String(err)}); }
}
function doPost(e) {
  let q = {};
  try { q = JSON.parse(e.postData.contents || '{}'); } catch (err) { return json_({ok: false, erro: 'json'}); }
  if (!confere_(q.c)) return json_({ok: false, erro: 'codigo'});
  if (q.a === 'ia') return json_(ia_(q.prompt, q.imagens));
  if (q.a === 'foto') return json_(Object.assign({ok: true}, salvarFoto_(q.base64, q.mime, q.nome)));
  if (q.a === 'chave') {                 // a Daiana cola a chave do Gemini pelo app (fica só no Google)
    const k = String(q.chave || '').trim();
    if (k === '__apagar__') props_().deleteProperty('GEMINI_KEY'); else if (k) { props_().setProperty('GEMINI_KEY', k); props_().deleteProperty('GEMINI_MODELO'); }
    return json_({ok: true, temIA: !!props_().getProperty('GEMINI_KEY')});
  }
  const lock = LockService.getScriptLock(); lock.waitLock(25000);
  try {
    if (q.a === 'lote') {
      const res = (q.ops || []).map(op => {
        if (op.a === 'salvar') return {ok: true, ref: op.ref, id: salvar_(op.tipo, op.item)};
        if (op.a === 'apagar') return {ok: true, ref: op.ref, apagado: apagar_(op.tipo, op.id)};
        if (op.a === 'config') { gravarConfig_(op.config); return {ok: true, ref: op.ref}; }
        if (op.a === 'app') { gravarApp_(op.app); return {ok: true, ref: op.ref}; }
        return {ok: false, ref: op.ref, erro: 'acao'};
      });
      SpreadsheetApp.flush();
      return json_({ok: true, res: res, dados: q.devolver ? dados_() : undefined});
    }
    return json_({ok: false, erro: 'acao'});
  } catch (err) { return json_({ok: false, erro: String(err)}); }
  finally { lock.releaseLock(); }
}

// ---------- avisos no celular (app grátis ntfy) ----------
function mesQueConta_(g, cartoes) {
  const d = paraData_(g.data); if (!d) return '';
  const c = cartoes.find(x => x.nome === g.forma); const f = Number(c && c.fecha);
  if (!f) return ym_(d);
  const fecha = new Date(d.getFullYear(), d.getMonth() + (d.getDate() >= f ? 1 : 0), f, 12);
  fecha.setDate(fecha.getDate() - 1);
  return ym_(fecha);
}
function resumoMes_(D, ym) {
  const dif = (a, b) => { const [ay, am] = a.split('-').map(Number), [by, bm] = b.split('-').map(Number); return (by - ay) * 12 + (bm - am); };
  const gastos = D.gastos.filter(g => mesQueConta_(g, D.config.cartoes) === ym);
  const parc = D.parcelas.filter(p => { const k = dif(p.inicio, ym); return k >= 0 && k < p.n; });
  const entrou = D.entradas.filter(x => x.mes === ym).reduce((s, x) => s + x.valor, 0);
  const m = D.config.metas; const sep = entrou * (m.dizimo + m.reserva + m.investimentos);
  const fixas = D.config.fixas.reduce((s, x) => s + x.valor, 0);
  const dia = gastos.reduce((s, x) => s + x.valor, 0), pa = parc.reduce((s, x) => s + x.valor, 0);
  const cats = D.config.categorias.map(k => ({nome: k.nome, orc: k.orcamento,
    total: gastos.filter(g => g.categoria === k.nome).reduce((s, x) => s + x.valor, 0) + parc.filter(p => p.categoria === k.nome).reduce((s, x) => s + x.valor, 0)}));
  return {ainda: entrou - sep - fixas - dia - pa, cats};
}
function avisar_(topico, titulo, texto, tag) {
  if (!topico) return;
  UrlFetchApp.fetch('https://ntfy.sh/' + encodeURIComponent(topico), {method: 'post', payload: texto, muteHttpExceptions: true,
    headers: {Title: titulo, Tags: tag || 'moneybag', Click: APP_URL}});
}
function avisosDiarios() {
  const D = dados_(); const app = D.app || {}; const perfis = app.perfis || {};
  const hoje = new Date(); const ym = ym_(hoje); const R = resumoMes_(D, ym);
  const BRL = v => 'R$ ' + Math.round(v).toLocaleString('pt-BR');
  const amanha = new Date(hoje.getTime() + 864e5).getDate();
  const fechandoAmanha = D.config.cartoes.filter(c => Number(c.fecha) === amanha).map(c => c.nome);
  const p = props_();
  Object.keys(perfis).forEach(nome => {
    const av = perfis[nome].avisos || {}; if (!av.ativo || !av.topico) return;
    if (av.fechamento !== false && fechandoAmanha.length)
      avisar_(av.topico, 'Fatura fecha amanhã', fechandoAmanha.join(', ') + ' fecha amanhã. Depois manda o print pra Fina conferir.', 'credit_card');
    if (av.orcamento !== false) {
      const passou = [], quase = [];
      R.cats.forEach(c => {
        if (!c.orc) return;
        const nivel = c.total > c.orc ? 'passou' : c.total >= 0.8 * c.orc ? '80' : '';
        if (!nivel) return;
        const chave = ['AV', nome, c.nome, ym, nivel].join('|');
        if (p.getProperty(chave)) return;
        p.setProperty(chave, '1');
        (nivel === 'passou' ? passou : quase).push(c.nome + ' (' + BRL(c.total) + ' de ' + BRL(c.orc) + ')');
      });
      if (passou.length || quase.length)
        avisar_(av.topico, passou.length ? 'Orçamento: ' + passou.length + ' categoria(s) passaram' : 'Orçamento chegando no limite',
          (passou.length ? 'Passaram: ' + passou.join(', ') + '. ' : '') + (quase.length ? 'Em 80%: ' + quase.join(', ') + '.' : ''), passou.length ? 'warning' : 'eyes');
    }
    if (av.semanal !== false && hoje.getDay() === 0)
      avisar_(av.topico, 'Resumo da semana', (R.ainda < 0 ? 'O mês passou do limite em ' : 'Ainda dá pra gastar ') + BRL(Math.abs(R.ainda)) + ' este mês.', 'bar_chart');
  });
}

// ---------- roda sozinho no primeiro acesso (pode rodar à mão também) ----------
function configurar() {
  pasta_();
  if (!aba_('App')) { const sh = ss_().insertSheet('App'); sh.getRange('A1').setValue('{}'); sh.hideSheet(); }
  aba_('Lançamentos').getRange('H1:K1').setValues([['ID', 'Comprovante', 'Criado por', 'Criado em']]);
  aba_('Parcelas').getRange('J1').setValue('ID');
  aba_('Entradas').getRange('F1').setValue('ID');
  ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'avisosDiarios').forEach(t => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('avisosDiarios').timeBased().everyDays(1).atHour(9).inTimezone(TZ).create();
  linhas_('gasto'); linhas_('parcela'); linhas_('entrada');   // dá ID para o que ainda não tem
  Logger.log('Pronto. Pasta dos prints: ' + pasta_().getUrl());
}
function testeGemini() { Logger.log(JSON.stringify(ia_('Responda só com {"ok": true}', []))); }
