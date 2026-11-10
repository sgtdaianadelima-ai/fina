
/* ---------- ícones ---------- */
const VERSAO_APP = 21;   // igual ao número do sw.js
const I = {
  olho:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`,
  olhoFechado:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.1A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7c1.8 0 3.4-.5 4.8-1.3"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>`,
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>',
  list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3.5" cy="6" r="1"/><circle cx="3.5" cy="12" r="1"/><circle cx="3.5" cy="18" r="1"/></svg>',
  goal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  cam:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  clip:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5l-8.6 8.6a5 5 0 0 1-7.1-7.1l8.6-8.6a3.3 3.3 0 0 1 4.7 4.7l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4l7.9-7.9"/></svg>',
  mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  spk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9a4 4 0 0 1 0 6"/></svg>',
  stop:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  left:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
  right:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
};
const BOT = `<svg class="botsvg" viewBox="0 0 48 48" aria-hidden="true">
  <line class="ant" x1="24" y1="6" x2="24" y2="11" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
  <path class="ant" d="M24 8.5s-3.6-2.2-4.6-4.4C18.7 2.5 19.7 1 21.3 1c1 0 1.9.6 2.7 1.4C24.8 1.6 25.7 1 26.7 1c1.6 0 2.6 1.5 1.9 3.1C27.6 6.3 24 8.5 24 8.5z" fill="var(--accent)"/>
  <rect x="7" y="11" width="34" height="30" rx="13" fill="var(--accent)"/>
  <rect x="12" y="17" width="24" height="16" rx="7" fill="var(--surface)"/>
  <circle class="eye" cx="19" cy="24" r="2.6" fill="var(--ink)"/>
  <circle class="eye" cx="29" cy="24" r="2.6" fill="var(--ink)"/>
  <path class="mouth" d="M20.5 29.2q3.5 2.6 7 0" stroke="var(--ink)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <circle cx="15.5" cy="28" r="1.6" fill="var(--accent)" opacity=".35"/><circle cx="32.5" cy="28" r="1.6" fill="var(--accent)" opacity=".35"/>
</svg>`;

/* ---------- utilidades ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const BRL = new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});
const BRL0 = new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0});
const money = v => BRL.format(Number(v)||0);
const money0 = v => BRL0.format(Math.round(Number(v)||0));
const pad = n => String(n).padStart(2,"0");
const ymOf = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}`;
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; };
const addM = (ym,k) => { const [y,m] = ym.split("-").map(Number); return ymOf(new Date(y, m-1+k, 1)); };
const mDiff = (a,b) => { const [ay,am]=a.split("-").map(Number), [by,bm]=b.split("-").map(Number); return (by-ay)*12 + (bm-am); };
const mLabel = ym => { const [y,m] = ym.split("-").map(Number); return new Date(y,m-1,1).toLocaleDateString("pt-BR",{month:"long",year:"numeric"}); };
const mTitle = ym => { const t = mLabel(ym); return t.charAt(0).toUpperCase() + t.slice(1); };
const dLabel = s => { const [y,m,d] = s.split("-").map(Number); return new Date(y,m-1,d).toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"short"}); };
const num = v => { if (typeof v === "number") return v; const s = String(v??"").replace(/[^\d,.-]/g,""); const n = s.includes(",") ? Number(s.replace(/\./g,"").replace(",",".")) : Number(s); return isFinite(n) ? n : 0; };
const ls = { get(k,d){ try{ const v = localStorage.getItem("fina:"+k); return v==null ? d : JSON.parse(v); }catch{ return d; } }, set(k,v){ try{ localStorage.setItem("fina:"+k, JSON.stringify(v)); }catch{} } };
function toast(t, ms=2600){ const el = document.createElement("div"); el.className="toast"; el.textContent=t; document.body.append(el); setTimeout(()=>el.remove(), ms); }
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,8);

const PAY_FIXED = ["Pix/Débito","Dinheiro","Vale-alimentação"];
const ENTRY_TYPES = ["Salário","Vale-alimentação","Vale-transporte","Renda extra","Diárias","13º / férias / PLR","Outros"];
const CAT_COLORS = ["#0E7A57","#C98A1B","#3D6FB6","#B24C7C","#6A5ACD","#2E8B8B","#C8442F","#7A8F2B","#8B5E3C","#5B7083","#D07A2D","#4F6D4A"];

/* ---------- estado ---------- */
const S = {
  tab: ["inicio","gastos","assistente","metas","ajustes"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "inicio",
  mes: ymOf(new Date()),
  config: null, gastos: [], parcelas: [], entradas: [], separados: [],
  loaded: {config:false, gastos:false, parcelas:false, entradas:false},
  listSeg: "gastos", fCat: "", fQuem: "",
  chat: [],
  pendingImgs: [],
  busy: false, ctl: null,
  speakOn: false,
  me: ls.get("me", ""),
  voiceName: "",
  online: navigator.onLine, sync: "", fila: [], erro: "",
  imgOK: true,
};
const DEFAULT_REGRAS = "Nubank e Inter: Gustavo. Santander: Daiana. Itaú e Porto: o titular é o Gustavo e a Daiana usa cartão adicional; quando o print não deixar claro de quem é, deixe vazio.";
const DEFAULT_CONFIG = {
  nomeAssistente: "Fina",
  pessoas: ["Daiana","Gustavo"],
  categorias: [], fixas: [], cartoes: [], fontes: [],
  metas: {dizimo:.10, reserva:.03, investimentos:.02},
  reserva: {saldo:0, meses:6, atualizado:""},
  regrasQuem: "",
};
const cfg = () => ({...DEFAULT_CONFIG, ...(S.config||{})});
const CONFIG_KEYS = ["categorias","fixas","cartoes","metas","reserva","fontes"];   // ficam nas abas da planilha; o resto fica no App!A1
/* de quais entradas sai cada porcentagem (dízimo, reserva, investimentos).
   Fica na planilha (Config, colunas R a V, com caixinhas). Entrada que não está na tabela conta em tudo. */
const METAS = [["dizimo","Dízimo / doação"],["reserva","Reserva de emergência"],["investimentos","Investimentos"]];
const fonteKey = e => `${e.quem||"Casal"}|${e.tipo||"Outros"}`;
const fonteNome = k => { const [q,t] = k.split("|"); return `${t} · ${q}`; };
function fontes(){
  const set = new Set();
  cfg().pessoas.forEach(p => ["Salário","Renda extra"].forEach(t => set.add(`${p}|${t}`)));
  (cfg().fontes||[]).forEach(f => set.add(`${f.quem}|${f.tipo}`));
  S.entradas.forEach(e => set.add(fonteKey(e)));
  const ord = k => { const [q,t] = k.split("|"); const i = ENTRY_TYPES.indexOf(t); return [i<0?99:i, q]; };
  return [...set].sort((a,b)=>{ const [ia,qa] = ord(a), [ib,qb] = ord(b); return ia-ib || qa.localeCompare(qb); });
}
function marcado(k, fonte){
  const linha = (cfg().fontes||[]).find(f => `${f.quem}|${f.tipo}` === fonte);
  if (linha) return linha[k] !== false;
  const antigo = cfg().bases?.[k];                       // escolha antiga, guardada só no app
  return Array.isArray(antigo) ? antigo.includes(fonte) : true;
}
const baseEscolhida = k => fontes().some(f => !marcado(k, f));
function resumoFontes(k){ const todas = fontes(), sim = todas.filter(f => marcado(k, f)); return sim.length === todas.length ? "todas as entradas" : sim.length ? sim.map(fonteNome).join(", ") : "nenhuma entrada"; }
/* bloco que abre e fecha com uma setinha (lembra se estava aberto) */
function dobra(id, titulo, conteudo){ return `<details class="dobra" data-dobra="${id}" ${S.dobras?.[id] ? "open" : ""}><summary><span>${esc(titulo)}</span><svg class="seta" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></summary><div class="dobra-in">${conteudo}</div></details>`; }
document.addEventListener("toggle", ev => { const d = ev.target; if (d.dataset?.dobra){ S.dobras = {...(S.dobras||{}), [d.dataset.dobra]: d.open}; } }, true);
const formas = () => [...cfg().cartoes.map(c=>c.nome), ...PAY_FIXED];
const listaDe = k => ({gasto:S.gastos, parcela:S.parcelas, entrada:S.entradas, separado:S.separados})[k] || [];
const nomeMeta = k => (METAS.find(([x])=>x===k)||[k,k])[1];
const catNames = () => cfg().categorias.map(c=>c.nome);
const catColor = n => CAT_COLORS[Math.max(0,catNames().indexOf(n)) % CAT_COLORS.length];

/* mês em que o gasto conta: cartão pelo fechamento da fatura; o resto pela data */
function compMonth(g){
  if (!g.data) return "";
  const c = cfg().cartoes.find(x => x.nome === g.forma);
  const f = Number(c?.fecha);
  const [y,m,d] = g.data.split("-").map(Number);
  if (!c || !f) return `${y}-${pad(m)}`;
  const close = new Date(y, m-1 + (d>=f?1:0), f);
  close.setDate(close.getDate()-1);
  return ymOf(close);
}
const parcelaInfo = (p, ym) => { const k = mDiff(p.inicio, ym); return (k>=0 && k < Number(p.n)) ? k+1 : 0; };
const fimParcela = p => addM(p.inicio, Number(p.n)-1);

function month(ym){
  const c = cfg();
  const gastos = S.gastos.filter(g => compMonth(g) === ym);
  const parcelas = S.parcelas.filter(p => parcelaInfo(p, ym));
  const entradas = S.entradas.filter(e => e.mes === ym);
  const entrou = entradas.reduce((s,e)=>s+num(e.valor),0);
  const base = {};
  for (const [k] of METAS) base[k] = entradas.filter(e => marcado(k, fonteKey(e))).reduce((s,e)=>s+num(e.valor),0);
  const sep = {dizimo: base.dizimo*num(c.metas.dizimo), reserva: base.reserva*num(c.metas.reserva), investimentos: base.investimentos*num(c.metas.investimentos)};
  const separado = sep.dizimo+sep.reserva+sep.investimentos;
  const registros = S.separados.filter(x => x.mes === ym);
  const feito = Object.fromEntries(METAS.map(([k]) => [k, registros.filter(x=>x.para===k).reduce((s,x)=>s+num(x.valor),0)]));
  const fixas = c.fixas.reduce((s,f)=>s+num(f.valor),0);
  const dia = gastos.reduce((s,g)=>s+num(g.valor),0);
  const parc = parcelas.reduce((s,p)=>s+num(p.valor),0);
  const ainda = entrou - separado - fixas - dia - parc;
  const cats = c.categorias.map(k => {
    const d = gastos.filter(g=>g.categoria===k.nome).reduce((s,g)=>s+num(g.valor),0);
    const p = parcelas.filter(x=>x.categoria===k.nome).reduce((s,x)=>s+num(x.valor),0);
    return {nome:k.nome, orc:num(k.orcamento), dia:d, parc:p, total:d+p};
  });
  const pessoas = {};
  for (const e of entradas) pessoas[e.quem||"Casal"] = (pessoas[e.quem||"Casal"]||0) + num(e.valor);
  return {gastos, parcelas, entradas, entrou, base, sep, separado, registros, feito, fixas, dia, parc, ainda, cats, pessoas};
}


/* ---------- temas ---------- */
const FONTS = ["Quicksand","Nunito","Outfit","Manrope","Lexend","DM Sans","Comfortaa","Poppins","Figtree","Bricolage Grotesque","Fraunces","Playfair Display","Caveat"];
const PAL = (bg,surface,surface2,line,ink,ink2,ink3,accent,gold,bad,ok,track) => ({bg,surface,surface2,line,ink,ink2,ink3,accent,gold,bad,ok,track});
const THEMES = {
  nos:     {nome:"Nós dois", fd:"Quicksand", fb:"Nunito",
            light:PAL("#FBF7F9","#FFFFFF","#F5EDF1","#EADDE4","#2B2030","#5E5063","#93859A","#B4507A","#D49A3A","#C94A3D","#3E8E5E","#EFE4EA"),
            dark: PAL("#171217","#211A21","#2A212A","#3A2E39","#F3EAF0","#C8B8C3","#8F7F8B","#E58AB0","#E9B45A","#F08576","#7FCB98","#332832")},
  salvia:  {nome:"Sálvia", fd:"Outfit", fb:"Outfit",
            light:PAL("#F4F7F2","#FFFFFF","#EAF0E7","#DCE5D8","#1E2A22","#4D5D52","#84928A","#4F8A65","#C9963A","#C0503F","#4F8A65","#E3EADF"),
            dark: PAL("#111712","#18211A","#202B23","#2D3A30","#E7EFE9","#B3C2B7","#7E8E83","#7FC79A","#E2B565","#EE8A79","#7FC79A","#26322A")},
  ceu:     {nome:"Céu de domingo", fd:"Manrope", fb:"Manrope",
            light:PAL("#F5F8FC","#FFFFFF","#EBF0F8","#DCE4F0","#1A2233","#4C5770","#8590A6","#3F6FD1","#D8A23E","#CF4B44","#2F8F63","#E2E8F2"),
            dark: PAL("#0F141C","#161D28","#1E2734","#2B3647","#E6ECF6","#AAB6CB","#7987A0","#8EAEF5","#EBC06A","#F28B83","#6FCB9C","#232D3C")},
  lavanda: {nome:"Lavanda", fd:"Lexend", fb:"Lexend",
            light:PAL("#F8F6FC","#FFFFFF","#EFEBF8","#E2DCF0","#251E36","#5A5072","#8F86A6","#7457C4","#D29A3B","#C94C52","#3F8C66","#ECE7F6"),
            dark: PAL("#14111C","#1C1826","#252031","#342D44","#EEEAF7","#BDB4D2","#8A81A0","#B49CF0","#E8B85F","#F08A8E","#7BCB9F","#2A2437")},
  pessego: {nome:"Pêssego", fd:"Comfortaa", fb:"Nunito",
            light:PAL("#FFF8F4","#FFFFFF","#FBEDE6","#F1DDD2","#33231C","#6B5247","#9E877C","#D9694A","#CF9A35","#C7433A","#4A8A5C","#F6E6DD"),
            dark: PAL("#1A1310","#231A16","#2D221D","#3D2F28","#F6EAE4","#CDB7AC","#998378","#F29C7F","#E8B95E","#F2867A","#86C99A","#33261F")},
  grafite: {nome:"Grafite", fd:"DM Sans", fb:"DM Sans",
            light:PAL("#F7F7F5","#FFFFFF","#EFEFEC","#E2E2DE","#18191A","#55585B","#8C8F92","#2F3437","#B8862F","#C0443A","#3D8A5A","#E8E8E5"),
            dark: PAL("#111213","#18191B","#202224","#2E3033","#EDEDEA","#B4B6B8","#7F8285","#E8E8E6","#E1B35E","#EE8378","#79C694","#25272A")},
  verde:   {nome:"Verde original", fd:"Bricolage Grotesque", fb:"Figtree",
            light:PAL("#F4F6F1","#FFFFFF","#EBEFE7","#D9DFD3","#16231D","#4E5D55","#7D8A83","#0E7A57","#C98A1B","#C8442F","#1F8A4C","#E3E8DF"),
            dark: PAL("#0F1613","#17211C","#1E2A24","#2B3A32","#E8EFEA","#A9B8AF","#7A8A81","#3CC593","#E6B04B","#F0806B","#5AD08C","#26342D")},
};
const SWATCHES = ["#B4507A","#D9694A","#E0A33A","#4F8A65","#2E8B8B","#3F6FD1","#7457C4","#C2185B","#8D6E63","#2F3437"];
const HOME_SECTIONS = [["quadro","Nosso Quadro"],["atencao","Pedem sua atenção"],["stats","Números do mês"],["saude","Saúde do mês (50-30-20)"],["atalhos","Atalhos (fatura e falar)"],["contas","Contas do mês (paguei)"],["categorias","Categorias"],["separado","Separado antes de gastar"],["reserva","Reserva de emergência"],["fechamentos","Faturas dos cartões"],["renda","Renda de cada um"]];
const THEME_DEFAULT = {preset:"nos", modo:"auto", accent:"", fd:"", fb:"", tamanho:"m", cantos:"suaves", cartoes:"plano", secoes:Object.fromEntries(HOME_SECTIONS.map(([k])=>[k,true]))};
function personTheme(nome){ const t = (S.config && S.config.perfis && S.config.perfis[nome] && S.config.perfis[nome].tema) || {}; return {...THEME_DEFAULT, ...t, secoes:{...THEME_DEFAULT.secoes, ...(t.secoes||{})}}; }
function themeNow(){ return personTheme(S.me); }
let themeTimer = null;
function setLocalTheme(patch, replace){
  if (!S.me) return;
  const cur = replace ? {} : ((S.config?.perfis?.[S.me]?.tema) || {});
  const tema = {...cur, ...patch};
  S.config = {...cfg(), perfis:{...(cfg().perfis||{}), [S.me]:{...(cfg().perfis?.[S.me]||{}), tema}}};
  applyTheme(); render();
  clearTimeout(themeTimer);
  themeTimer = setTimeout(()=>{ enfileirar({a:"app", app:{perfis:{[S.me]:{tema}}}}, "tema:"+S.me); guardarLocal(); enviar(); }, 600);
}
const loadedFonts = new Set(["Quicksand","Nunito"]);
function loadFont(n){ if (!n || loadedFonts.has(n)) return; loadedFonts.add(n); const l = document.createElement("link"); l.rel = "stylesheet"; l.href = `https://fonts.googleapis.com/css2?family=${n.replace(/ /g,"+")}:wght@400;600;700&display=swap`; document.head.append(l); }
function hexLum(h){ const m = /^#?([\da-f]{6})$/i.exec(h||""); if (!m) return .5; const n = parseInt(m[1],16); const c = [n>>16,(n>>8)&255,n&255].map(v=>{v/=255; return v<=.03928? v/12.92 : Math.pow((v+.055)/1.055,2.4);}); return .2126*c[0]+.7152*c[1]+.0722*c[2]; }
function applyTheme(){
  const t = themeNow(); const th = THEMES[t.preset] || THEMES.nos;
  const dark = t.modo==="escuro" || (t.modo==="auto" && matchMedia("(prefers-color-scheme: dark)").matches);
  const p = {...(dark ? th.dark : th.light)};
  if (t.accent) p.accent = t.accent;
  const r = document.documentElement, st = r.style;
  r.setAttribute("data-theme", dark ? "dark" : "light");
  const set = (k,v) => st.setProperty(k,v);
  set("--bg",p.bg); set("--surface",p.surface); set("--surface-2",p.surface2); set("--line",p.line);
  set("--ink",p.ink); set("--ink-2",p.ink2); set("--ink-3",p.ink3); set("--accent",p.accent);
  set("--accent-ink", hexLum(p.accent) > .45 ? "#1A1A1A" : "#FFFFFF");
  set("--accent-soft", `color-mix(in srgb, ${p.accent} ${dark?22:13}%, ${p.bg})`);
  set("--gold",p.gold); set("--gold-soft",`color-mix(in srgb, ${p.gold} ${dark?22:18}%, ${p.bg})`);
  set("--bad",p.bad); set("--bad-soft",`color-mix(in srgb, ${p.bad} ${dark?22:14}%, ${p.bg})`);
  set("--ok",p.ok); set("--track",p.track);
  const fd = t.fd || th.fd, fb = t.fb || th.fb; loadFont(fd); loadFont(fb);
  set("--f-display", `"${fd}", system-ui, sans-serif`); set("--f-body", `"${fb}", system-ui, sans-serif`);
  set("--fs", {p:"14px", m:"15px", g:"17px"}[t.tamanho] || "15px");
  const rad = {retos:[6,5,4], suaves:[22,16,10], redondos:[32,24,16]}[t.cantos] || [22,16,10];
  set("--r-lg",rad[0]+"px"); set("--r-md",rad[1]+"px"); set("--r-sm",rad[2]+"px");
  set("--card-border", t.cartoes==="borda" ? `1px solid ${p.line}` : "1px solid transparent");
  set("--card-shadow", t.cartoes==="sombra" ? (dark ? "0 1px 2px rgba(0,0,0,.35), 0 10px 28px rgba(0,0,0,.3)" : "0 1px 2px rgba(0,0,0,.04), 0 10px 28px rgba(0,0,0,.07)") : "none");
}
try{ matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ()=>applyTheme()); }catch{}
function renderAparencia(){
  const t = themeNow(), th = THEMES[t.preset] || THEMES.nos;
  const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([v,l])=>`<button data-theme-set="${key}:${v}" aria-pressed="${t[key]===v}">${l}</button>`).join("")}</div>`;
  return `<section class="card" style="grid-column:1/-1"><div class="head"><h2>Aparência de ${esc(S.me)}</h2><span class="sub">acompanha ${esc(S.me)} em qualquer aparelho</span></div>
    <div class="form">
      <div class="flabel">Temas prontos</div>
      <div class="themes">${Object.entries(THEMES).map(([k,v])=>{ const pl = v.light; loadFont(v.fd);
        return `<button class="theme" data-theme-preset="${k}" aria-pressed="${t.preset===k}" style="background:${pl.bg};color:${pl.ink}"><span class="sw"><i style="background:${pl.accent}"></i><i style="background:${pl.surface2}"></i><i style="background:${pl.gold}"></i></span><b style="font-family:'${v.fd}',system-ui">${v.nome}</b></button>`; }).join("")}</div>
      <div class="flabel">Claro ou escuro</div>${seg("modo",[["auto","Igual ao aparelho"],["claro","Claro"],["escuro","Escuro"]])}
      <div class="flabel">Cor principal</div>
      <div class="swatches"><button data-accent="" aria-pressed="${!t.accent}" style="background:${th.light.accent}" aria-label="Cor do tema"></button>${SWATCHES.map(c=>`<button data-accent="${c}" aria-pressed="${t.accent===c}" style="background:${c}" aria-label="Cor ${c}"></button>`).join("")}<input type="color" id="accentPick" value="${t.accent || th.light.accent}" aria-label="Escolher outra cor"></div>
      <div class="settings" style="gap:10px">
        <label class="form"><span class="flabel">Fonte dos títulos</span><select id="fd">${["",...FONTS].map(f=>`<option value="${f}" ${t.fd===f?"selected":""}>${f||"Do tema ("+th.fd+")"}</option>`).join("")}</select></label>
        <label class="form"><span class="flabel">Fonte do texto</span><select id="fb">${["",...FONTS].map(f=>`<option value="${f}" ${t.fb===f?"selected":""}>${f||"Do tema ("+th.fb+")"}</option>`).join("")}</select></label>
      </div>
      <div class="flabel">Tamanho do texto</div>${seg("tamanho",[["p","Pequeno"],["m","Médio"],["g","Grande"]])}
      <div class="flabel">Cantos</div>${seg("cantos",[["retos","Retos"],["suaves","Suaves"],["redondos","Bem redondos"]])}
      <div class="flabel">Cartões</div>${seg("cartoes",[["plano","Planos"],["borda","Com borda"],["sombra","Com sombra"]])}
      ${dobra("secoes", `O que aparece no Início (${HOME_SECTIONS.filter(([k])=>t.secoes[k]!==false).length} de ${HOME_SECTIONS.length})`, `<div class="checks">${HOME_SECTIONS.map(([k,l])=>`<label><input type="checkbox" data-secao="${k}" ${t.secoes[k]!==false?"checked":""}> ${l}</label>`).join("")}</div>`)}
      ${(()=>{ const v = month(S.mes).ainda; return `<div class="preview"><span class="sub">Prévia</span><br><b class="num">${money0(Math.abs(v))}</b><div class="sub">${v<0?"passou do limite em":"ainda dá pra gastar em"} ${esc(mLabel(S.mes).split(" ")[0])}</div></div>`; })()}
      <div class="toolbar"><button class="btn ghost" data-act="themeReset">Voltar ao padrão</button>${cfg().pessoas.filter(n=>n!==S.me).map(n=>`<button class="btn ghost" data-act="themeCopy">Copiar o visual de ${esc(n)}</button>`).join("")}</div>
    </div></section>`;
}

/* ---------- navegação ---------- */
const TABS = [
  {id:"inicio", t:"Início", i:I.home},
  {id:"gastos", t:"Gastos", i:I.list},
  {id:"assistente", t:"Fina", i:I.cam, fab:true},
  {id:"metas", t:"Metas", i:I.goal},
  {id:"ajustes", t:"Ajustes", i:I.gear},
];
function renderNav(){
  const name = esc(cfg().nomeAssistente);
  $("#tabbar").innerHTML = TABS.map(t => t.fab
    ? `<button class="tab fab" data-go="${t.id}" ${S.tab===t.id?'aria-current="page"':''}><span class="bubble">${BOT}</span>${name}</button>`
    : `<button class="tab" data-go="${t.id}" ${S.tab===t.id?'aria-current="page"':''}>${t.i}${t.t}</button>`).join("");
  $("#rail").innerHTML = `<div class="brand">${BOT}<b>${name}</b></div>` + TABS.map(t =>
    `<button data-go="${t.id}" ${S.tab===t.id?'aria-current="page"':''}>${t.fab?I.cam:t.i}${t.fab?"Assistente":t.t}</button>`).join("");
}
function go(tab){ S.tab = tab; try{ history.replaceState(null,"","#"+tab); }catch{} render(); window.scrollTo(0,0); }

function monthSwitch(){
  return `<div class="month" role="group" aria-label="Mês"><button data-m="-1" aria-label="Mês anterior">${I.left}</button><span>${esc(mTitle(S.mes))}</span><button data-m="1" aria-label="Próximo mês">${I.right}</button></div>`;
}

/* ---------- telas ---------- */
function render(){
  renderNav();
  const v = $("#view");
  const ready = Object.values(S.loaded).every(Boolean);
  if (!codigo()){ renderGate(); return; }
  if (!S.config && S.erro){ v.innerHTML = `<div class="card"><h2>Não consegui abrir os dados</h2><p class="sub">${esc(S.erro)}</p><button class="btn" data-act="recarregar">Tentar de novo</button></div>`; return; }
  if (!ready && S.tab !== "assistente"){ v.innerHTML = `<div class="card"><p class="sub">Carregando suas finanças…</p></div>`; return; }
  if (!S.me || !S.desbloqueado) { renderPerfil(); return; }
  ({inicio:renderInicio, gastos:renderGastos, assistente:renderAssistente, metas:renderMetas, ajustes:renderAjustes})[S.tab]();
}

function renderInicio(){
  const M = month(S.mes), c = cfg();
  const usado = M.entrou ? Math.min(1, (M.entrou - Math.max(M.ainda,0)) / M.entrou) : 0;
  const over = M.cats.filter(x => x.orc && x.total > x.orc).sort((a,b)=>(b.total-b.orc)-(a.total-a.orc));
  const near = M.cats.filter(x => x.orc && x.total <= x.orc && x.total >= .8*x.orc);
  const cats = [...M.cats].filter(x=>x.orc||x.total).sort((a,b)=> (b.orc? b.total/b.orc : 9) - (a.orc? a.total/a.orc : 9));
  const hello = `Oi, ${esc(S.me)}`;
  const metaReserva = num(c.reserva.meses) * (M.fixas + c.categorias.reduce((s,k)=>s+num(k.orcamento),0));
  const saldoRes = num(c.reserva.saldo);
  const closings = c.cartoes.filter(k=>Number(k.fecha)).map(k=>{
    const now = new Date(); now.setHours(0,0,0,0);
    let d = new Date(now.getFullYear(), now.getMonth(), Number(k.fecha));
    if (d < now) d = new Date(now.getFullYear(), now.getMonth()+1, Number(k.fecha));
    return {nome:k.nome, d, dias: Math.round((d-now)/864e5)};
  }).sort((a,b)=>a.d-b.d);
  const seen = new Set(); const closingsU = closings.filter(x => { const k = x.d.toDateString()+x.nome.split(" ")[0]; if (seen.has(k)) return false; seen.add(k); return true; });

  const sec = themeNow().secoes, on = k => sec[k] !== false;
  const mv = v => S.ver ? money0(v) : "R$ •••••";          // valores escondidos até tocar no olhinho
  const salario = M.entradas.filter(e=>e.tipo==="Salário").reduce((s,e)=>s+num(e.valor),0);
  $("#view").innerHTML = `
  <div class="top"><div class="hello"><small>${esc(c.nomeAssistente)} · finanças da família</small><h1>${hello}</h1>${netBadge()}</div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button class="me-btn" data-act="switchPerson" aria-label="Trocar de pessoa">${avatarHTML(S.me, 26)}Trocar</button>${monthSwitch()}</div></div>
  <section class="card hero ${M.ainda<0?'neg':''}" aria-label="Quanto ainda dá pra gastar">
    <button class="olho" data-act="olho" aria-pressed="${!!S.ver}" aria-label="${S.ver?"Esconder valores":"Mostrar valores"}">${S.ver?I.olho:I.olhoFechado}</button>
    <div class="lbl">${M.ainda<0 ? "Passou do limite em" : "Ainda dá pra gastar"}</div>
    <div class="big num">${mv(Math.abs(M.ainda))}</div>
    ${hojeDa(M, mv)}
    <div class="meter" aria-hidden="true"><i style="width:${(usado*100).toFixed(1)}%"></i></div>
    <div class="legend num"><span>${Math.round(usado*100)}% da renda já comprometida</span><span>entrou ${mv(M.entrou)}</span></div>
  </section>
  ${on("quadro") ? cardQuadroInicio() : ""}
  ${on("atencao") ? cardAtencao(M, mv) : ""}
  ${on("stats")?`<div class="stats">
    <div class="stat s-entrou"><small>Entrou no mês</small><b class="num">${mv(M.entrou)}</b><span>${S.ver ? `${money0(salario)} de salário` : "salários, vales e extras"}</span></div>
    <div class="stat s-sep"><small>Separado primeiro</small><b class="num">${mv(M.separado)}</b><span>dízimo, reserva e investimentos</span></div>
    <div class="stat s-fixas"><small>Contas fixas</small><b class="num">${mv(M.fixas)}</b><span>${c.fixas.length} contas do mês</span></div>
    <div class="stat s-gasto"><small>Gasto no mês</small><b class="num">${mv(M.dia+M.parc)}</b><span>dia a dia e parcelas</span></div>
  </div>`:""}
  ${on("saude") ? cardSaude(M) : ""}
  ${on("contas") && c.fixas.length ? cardContas(M, mv) : ""}
  ${on("atalhos")?`<div class="quick">
    <button class="qbtn" data-act="print">${I.cam}<span>Mandar fatura<small>foto, print ou PDF</small></span></button>
    <button class="qbtn" data-act="falar">${I.mic}<span>Falar um gasto<small>“gastei 70 de gasolina”</small></span></button>
  </div>`:""}
  <div class="grid2">
    ${on("categorias")?`<section class="card"><div class="head"><h2>Como está cada categoria</h2><span class="sub num">${S.ver ? `${money0(M.cats.reduce((s,x)=>s+x.total,0))} de ${money0(M.cats.reduce((s,x)=>s+x.orc,0))}` : `${over.length} passaram do orçado`}</span></div>
      <div class="cats">${cats.map(x=>{
        const p = x.orc ? x.total/x.orc : 1; const cls = p>1 ? "bad" : p>=.8 ? "warn" : "";
        return `<div class="cat"><div class="row"><b>${esc(x.nome)}</b><span class="num">${S.ver ? `${money0(x.total)} <span class="muted">/ ${x.orc?money0(x.orc):"sem orçamento"}</span>` : x.orc ? `<span class="muted">${Math.round(x.total/x.orc*100)}%</span>` : ""}</span></div><div class="bar"><i class="${cls}" style="width:${Math.min(100,p*100).toFixed(1)}%"></i></div></div>`;}).join("") || `<p class="empty">Nenhuma categoria ainda. Crie em Ajustes.</p>`}</div>
    </section>`:""}
    <div class="wrap" style="gap:16px">
      ${on("separado")?`<section class="card"><div class="head"><h2>Separado antes de gastar</h2></div>
        <div class="split num">
          <div class="line"><span>Dízimo / doação · ${Math.round(num(c.metas.dizimo)*100)}%${baseEscolhida("dizimo") ? ` <small class="muted">de ${mv(M.base.dizimo)}</small>` : ""}</span><b>${mv(M.sep.dizimo)}${M.feito.dizimo ? `<small class="muted feito-mini">feito ${mv(M.feito.dizimo)}</small>` : ""}</b></div>
          <div class="line"><span>Reserva de emergência · ${Math.round(num(c.metas.reserva)*100)}%${baseEscolhida("reserva") ? ` <small class="muted">de ${mv(M.base.reserva)}</small>` : ""}</span><b>${mv(M.sep.reserva)}${M.feito.reserva ? `<small class="muted feito-mini">feito ${mv(M.feito.reserva)}</small>` : ""}</b></div>
          <div class="line"><span>Investimentos · ${Math.round(num(c.metas.investimentos)*100)}%${baseEscolhida("investimentos") ? ` <small class="muted">de ${mv(M.base.investimentos)}</small>` : ""}</span><b>${mv(M.sep.investimentos)}${M.feito.investimentos ? `<small class="muted feito-mini">feito ${mv(M.feito.investimentos)}</small>` : ""}</b></div>
        </div></section>`:""}
      ${on("reserva")?`<section class="card"><div class="head"><h2>Reserva de emergência</h2><span class="sub">meta de ${esc(c.reserva.meses)} meses</span></div>
        <div class="split num"><div class="line"><span>${saldoRes ? "Guardado" : "Saldo ainda não informado"}</span><b>${saldoRes?mv(saldoRes):"—"} / ${mv(metaReserva)}</b></div>
        <div class="bar"><i style="width:${metaReserva?Math.min(100,saldoRes/metaReserva*100).toFixed(1):0}%"></i></div></div></section>`:""}
      ${on("fechamentos") ? cardFaturas(M, mv) : ""}
    </div>
  </div>
  ${on("renda")?`<section class="card"><div class="head"><h2>Quem trouxe o quê</h2><span class="sub num">${mv(M.entrou)}</span></div>
    <div class="split num">${Object.entries(M.pessoas).map(([k,v])=>`<div class="line"><span>${esc(k)}</span><b>${mv(v)}</b></div>`).join("") || `<p class="sub">Nenhuma entrada lançada neste mês.</p>`}</div></section>`:""}`;
}

function renderGastos(){
  const M = month(S.mes), c = cfg();
  let body = "";
  if (S.listSeg === "gastos"){
    let rows = M.gastos.filter(g => (!S.fCat || g.categoria===S.fCat) && (!S.fQuem || (S.fQuem==="__none" ? !g.quem : g.quem===S.fQuem)));
    rows.sort((a,b)=> b.data.localeCompare(a.data));
    const byDay = {}; rows.forEach(g => (byDay[g.data] ||= []).push(g));
    body = `<div class="filters"><select id="fCat" aria-label="Filtrar categoria"><option value="">Todas as categorias</option>${catNames().map(n=>`<option ${S.fCat===n?"selected":""}>${esc(n)}</option>`).join("")}</select>
      <select id="fQuem" aria-label="Filtrar pessoa"><option value="">Todas as pessoas</option>${[...c.pessoas,"Casal"].map(n=>`<option ${S.fQuem===n?"selected":""}>${esc(n)}</option>`).join("")}<option value="__none" ${S.fQuem==="__none"?"selected":""}>Sem nome</option></select></div>
      ${Object.keys(byDay).map(d => `<div class="day">${esc(dLabel(d))}</div>` + byDay[d].map(g => itemRow("gasto", g, g.descricao, `${g.categoria} · ${g.forma||"sem forma"}${g.quem?" · "+g.quem:""}${compMonth(g)!==g.data.slice(0,7)?" · conta em "+mLabel(compMonth(g)).split(" ")[0]:""}`, g.valor)).join("")).join("") || `<p class="empty">Nenhum gasto neste mês. Mande um print ou fale com a ${esc(c.nomeAssistente)}.</p>`}
      <div class="total num"><span>Total</span><span>${money(rows.reduce((s,g)=>s+num(g.valor),0))}</span></div>`;
  } else if (S.listSeg === "parcelas"){
    const rows = [...M.parcelas].sort((a,b)=>num(b.valor)-num(a.valor));
    body = rows.map(p => itemRow("parcela", p, p.descricao, `${p.categoria} · ${p.forma||""} · ${parcelaInfo(p,S.mes)}/${p.n} · termina em ${mLabel(fimParcela(p))}`, p.valor)).join("") || `<p class="empty">Nenhuma parcela neste mês.</p>`;
    body += `<div class="total num"><span>Parcelas do mês</span><span>${money(M.parc)}</span></div>`;
  } else {
    const rows = [...M.entradas].sort((a,b)=>num(b.valor)-num(a.valor));
    body = rows.map(e => itemRow("entrada", e, `${e.tipo}${e.descricao?" · "+e.descricao:""}`, e.quem||"Casal", e.valor, true)).join("") || `<p class="empty">Nenhuma entrada neste mês.</p>`;
    body += `<div class="total num"><span>Entrou no mês</span><span>${money(M.entrou)}</span></div>`;
  }
  $("#view").innerHTML = `
  <div class="top"><div class="hello"><small>Tudo que foi lançado</small><h1>Gastos e entradas</h1></div>${monthSwitch()}</div>
  <div class="toolbar"><div class="seg" role="group" aria-label="Tipo">${[["gastos","Gastos"],["parcelas","Parcelas"],["entradas","Entradas"]].map(([k,t])=>`<button data-seg="${k}" aria-pressed="${S.listSeg===k}">${t}</button>`).join("")}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ghost" data-act="print">${I.cam}Mandar fatura</button><button class="btn" data-new="${S.listSeg==="gastos"?"gasto":S.listSeg==="parcelas"?"parcela":"entrada"}">${I.plus}Adicionar</button></div></div>
  <section class="card">${body}</section>`;
}
function itemRow(kind, o, title, sub, valor, income){
  const letter = (kind==="entrada" ? (o.quem||"C") : kind==="separado" ? nomeMeta(o.para) : (o.categoria||"?"))[0];
  const col = kind==="entrada" || kind==="separado" ? "var(--accent)" : catColor(o.categoria);
  return `<button class="item" data-edit="${kind}" data-id="${esc(o.id)}"><span class="dot" style="background:color-mix(in srgb, ${col} 18%, transparent);color:${col}">${esc(letter)}</span><span class="t"><b>${esc(title||"Sem descrição")}</b><span>${esc(sub)}</span></span><span class="v num ${num(valor)<0||income?"neg":""}">${income?"+":""}${money(valor)}</span></button>`;
}

function renderMetas(){
  const c = cfg(); const M = month(S.mes);
  const months = Array.from({length:6},(_,i)=>addM(S.mes,i-5)).map(ym => ({ym, ...month(ym)}));
  const maxV = Math.max(1, ...months.map(x=>Math.max(x.entrou, x.fixas+x.dia+x.parc+x.separado)));
  const W = 560, H = 220, padL = 8, bw = (W-padL*2)/months.length;
  const bars = months.map((x,i)=>{
    const segs = [["var(--ink-3)",x.fixas],["var(--gold)",x.parc],["var(--accent)",x.dia],["var(--line)",x.separado]];
    let y = H-28; const xs = padL + i*bw + bw*.22, w = bw*.56;
    const rects = segs.map(([col,v])=>{ const h = v/maxV*(H-48); y -= h; return `<rect x="${xs}" y="${y}" width="${w}" height="${Math.max(0,h)}" fill="${col}" rx="3"/>`; }).join("");
    const iy = H-28 - x.entrou/maxV*(H-48);
    return rects + (x.entrou?`<line x1="${xs-4}" x2="${xs+w+4}" y1="${iy}" y2="${iy}" stroke="var(--ink)" stroke-width="2"/>`:"") + `<text x="${xs+w/2}" y="${H-8}" text-anchor="middle" font-size="12" fill="var(--ink-2)">${mLabel(x.ym).slice(0,3)}</text>`;
  }).join("");
  const segMetas = `<div class="seg aj-abas" role="tablist" aria-label="Metas ou investir">${[["quadro","Quadro"],["metas","Metas"],["futuro","Futuro"],["investir","Investir"],["milhas","Milhas"],["dividas","Dívidas"]].map(([k,t])=>`<button role="tab" data-metaseg="${k}" aria-pressed="${(S.metaSeg||"quadro")===k}">${t}</button>`).join("")}</div>`;
  if (!S.metaSeg || S.metaSeg === "quadro"){ $("#view").innerHTML = `<div class="top"><div class="hello"><small>${esc(cfg().pessoas.join(" e "))}</small><h1>Nosso Quadro</h1></div><button class="btn" data-act="novaMetaVida">${I.plus}Meta</button></div>${segMetas}${renderQuadro()}`; return; }
  if (S.metaSeg === "investir"){ $("#view").innerHTML = `<div class="top"><div class="hello"><small>Seu dinheiro trabalhando</small><h1>Investir</h1></div></div>${segMetas}${renderInvestir()}`; return; }
  if (S.metaSeg === "milhas"){ $("#view").innerHTML = `<div class="top"><div class="hello"><small>Pontos que viram viagem</small><h1>Milhas</h1></div>${monthSwitch()}</div>${segMetas}${renderMilhas()}`; return; }
  if (S.metaSeg === "dividas"){ $("#view").innerHTML = `<div class="top"><div class="hello"><small>Para ficar livre de juros</small><h1>Dívidas</h1></div></div>${segMetas}${renderDividas()}`; return; }
  if (S.metaSeg === "futuro"){ $("#view").innerHTML = `<div class="top"><div class="hello"><small>O que já está comprometido</small><h1>Próximos meses</h1></div></div>${segMetas}${renderFuturo()}`; return; }
  $("#view").innerHTML = `
  <div class="top"><div class="hello"><small>Para onde vai o dinheiro</small><h1>Metas e evolução</h1></div>${monthSwitch()}</div>
  ${segMetas}
  <section class="card"><div class="head"><h2>Últimos 6 meses</h2><span class="sub">linha preta = quanto entrou</span></div>
    <div style="overflow-x:auto"><svg viewBox="0 0 ${W} ${H}" width="100%" style="min-width:420px;display:block" role="img" aria-label="Gastos dos últimos 6 meses">${bars}</svg></div>
    <div class="chips" style="margin-top:8px"><span class="chip"><i style="width:10px;height:10px;border-radius:3px;background:var(--ink-3)"></i>Contas fixas</span><span class="chip"><i style="width:10px;height:10px;border-radius:3px;background:var(--gold)"></i>Parcelas</span><span class="chip"><i style="width:10px;height:10px;border-radius:3px;background:var(--accent)"></i>Dia a dia</span><span class="chip"><i style="width:10px;height:10px;border-radius:3px;background:var(--line)"></i>Separado</span></div>
  </section>
  <div class="settings">
    <section class="card"><div class="head"><h2>Quanto separar e de onde</h2></div>
      <div class="form">
        <p class="sub">Escolha a porcentagem e marque sobre quais entradas ela vale. Na planilha fica na aba Config, colunas R a V.</p>
        ${METAS.map(([k,t])=>`<div class="meta-bloco">
          <label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,96px)"><span><b>${t}</b></span><input id="meta-${k}" type="number" step="1" min="0" max="100" value="${Math.round(num(c.metas[k])*100)}" aria-label="${t} em %"></label>
          ${dobra("meta-"+k, `Sobre: ${resumoFontes(k)}`, `<div class="fontes" role="group" aria-label="${t}: sobre quais entradas">${fontes().map(f=>`<label class="fonte"><input type="checkbox" data-base="${k}" value="${esc(f)}" ${marcado(k, f) ? "checked" : ""}><span>${esc(fonteNome(f))}</span></label>`).join("")}</div>`)}
          <p class="sub num">${Math.round(num(c.metas[k])*100)}% de ${money0(M.base[k])} = <b>${money0(M.sep[k])}</b> em ${esc(mLabel(S.mes).split(" ")[0])}</p></div>`).join("")}
        <p class="sub">Total separado em ${esc(mLabel(S.mes))}: <b>${money(M.separado)}</b> (entrou ${money(M.entrou)}).</p>
        <button class="btn" data-save="metas">Salvar porcentagens</button>
      </div></section>
    <section class="card"><div class="head"><h2>Feito de verdade</h2><span class="sub">${esc(mLabel(S.mes))}</span></div>
      <div class="form">
        <div class="split num">${METAS.map(([k,t]) => { const pl = M.sep[k], fe = M.feito[k], ok = pl > 0 && fe >= pl - 0.5;
          return `<div class="feito-linha"><div class="line"><span>${t}</span><b>${money0(fe)} <span class="muted">de ${money0(pl)}</span></b></div><div class="bar"><i class="${ok?"":"warn"}" style="width:${pl?Math.min(100,fe/pl*100).toFixed(1):0}%"></i></div></div>`; }).join("")}</div>
        ${M.registros.length ? `<div>${[...M.registros].reverse().map(x => itemRow("separado", x, nomeMeta(x.para), `${x.quem||"Casal"}${x.descricao?" · "+x.descricao:""}`, x.valor)).join("")}</div>` : `<p class="sub">Nada registrado em ${esc(mLabel(S.mes).split(" ")[0])} ainda. Quando der o dízimo, guardar na reserva ou investir, registre aqui ou fale com a ${esc(c.nomeAssistente)}.</p>`}
        <button class="btn" data-new="separado">${I.plus}Registrar o que foi feito</button>
      </div></section>
    ${cardFechamento(M)}
    <section class="card"><div class="head"><h2>Reserva de emergência</h2></div>
      <div class="form">
        <label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,130px)"><span>Saldo guardado hoje (R$)</span><input id="res-saldo" inputmode="decimal" value="${num(c.reserva.saldo)?num(c.reserva.saldo).toFixed(2).replace(".",","):""}" placeholder="0,00"></label>
        <label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,130px)"><span>Meta em meses de gastos</span><input id="res-meses" type="number" min="1" max="24" value="${esc(c.reserva.meses)}"></label>
        <p class="sub">${c.reserva.atualizado?`Saldo atualizado em ${esc(c.reserva.atualizado.split("-").reverse().join("/"))}.`:"Informe o saldo para acompanhar o progresso."}</p>
        <button class="btn" data-save="reserva">Salvar reserva</button>
      </div></section>
  </div>`;
}

const AJ_ABAS = [["visual","Visual"],["perfil","Perfil"],["fina","Fina"],["financas","Finanças"],["dados","Dados"]];
function renderAjustes(){
  const c = cfg();
  const voices = (window.speechSynthesis?.getVoices?.()||[]).filter(v=>/^pt/i.test(v.lang));
  const aba = AJ_ABAS.some(([k])=>k===S.ajTab) ? S.ajTab : "visual";
  let corpo = "";
  if (aba === "visual") corpo = renderAparencia();
  if (aba === "perfil") corpo = `${renderSeguranca()}${renderAvatarCard()}
    <section class="card"><div class="head"><h2>Do seu jeito</h2><span class="sub">vale só para ${esc(S.me)}</span></div><div class="form">
      <div class="flabel">Quem está usando</div>
      <button class="me-btn" data-act="switchPerson">${avatarHTML(S.me, 26)}${esc(S.me)} · trocar</button>
      <label class="flabel" for="voice">Voz da ${esc(c.nomeAssistente)}</label>
      <select id="voice"><option value="">Voz padrão do aparelho</option>${voices.map(v=>`<option value="${esc(v.name)}" ${S.voiceName===v.name?"selected":""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("")}</select>
      <button class="btn ghost" data-act="testvoice">${I.spk}Ouvir um teste</button>
    </div></section>
    ${renderAvisos()}`;
  if (aba === "fina") corpo = `${renderIA()}
    <section class="card"><div class="head"><h2>Assistente</h2></div><div class="form">
      <label class="flabel" for="nomeA">Nome</label><input id="nomeA" value="${esc(c.nomeAssistente)}">
      <label class="flabel" for="regras">Como saber de quem é cada gasto</label>
      <textarea id="regras">${esc(c.regrasQuem)}</textarea>
      <button class="btn" data-save="assistente">Salvar</button>
    </div></section>
`;
  if (aba === "financas") corpo = `
    <section class="card"><div class="head"><h2>Orçamento por categoria</h2><span class="sub num">${money0(c.categorias.reduce((s,k)=>s+num(k.orcamento),0))}/mês</span></div><div class="form" id="catsForm">
      ${c.categorias.map((k,i)=>`<div class="frow"><input data-cat-n="${i}" value="${esc(k.nome)}" aria-label="Categoria"><input data-cat-v="${i}" inputmode="decimal" value="${num(k.orcamento)}" aria-label="Orçamento"><button class="x" data-del-cat="${i}" aria-label="Remover">×</button></div>`).join("")}
      <div class="toolbar"><button class="btn ghost" data-add="cat">${I.plus}Categoria</button><button class="btn" data-save="cats">Salvar orçamentos</button></div>
      ${dobra("tipoCat", "Necessidade ou estilo de vida (Saúde do mês)", `${c.categorias.map(k => `<label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,150px)"><span>${esc(k.nome)}</span><select data-tipocat="${esc(k.nome)}"><option value="nec" ${tipoCat(k.nome)==="nec"?"selected":""}>Necessidade</option><option value="est" ${tipoCat(k.nome)==="est"?"selected":""}>Estilo de vida</option></select></label>`).join("")}`)}
    </div></section>
    ${cardRecorrentes()}
    <section class="card"><div class="head"><h2>Contas fixas</h2><span class="sub num">${money0(c.fixas.reduce((s,k)=>s+num(k.valor),0))}/mês</span></div><div class="form" id="fixForm">
      <p class="sub">Conta · valor · dia que vence</p>
      ${c.fixas.map((k,i)=>`<div class="frow c3x"><input data-fix-n="${i}" value="${esc(k.nome)}" aria-label="Conta"><input data-fix-v="${i}" inputmode="decimal" value="${num(k.valor)}" aria-label="Valor"><input data-fix-d="${i}" type="number" min="1" max="31" value="${esc(c.fixasDia?.[k.nome]??"")}" aria-label="Dia que vence" placeholder="dia"><button class="x" data-del-fix="${i}" aria-label="Remover">×</button></div>`).join("")}
      <div class="toolbar"><button class="btn ghost" data-add="fix">${I.plus}Conta</button><button class="btn" data-save="fixas">Salvar contas</button></div>
    </div></section>
    <section class="card"><div class="head"><h2>Cartões</h2><span class="sub">fecha · vence (dia)</span></div><div class="form" id="cardForm">
      ${c.cartoes.map((k,i)=>`<div class="frow c3x"><input data-card-n="${i}" value="${esc(k.nome)}" aria-label="Cartão"><input data-card-f="${i}" type="number" min="1" max="31" value="${esc(k.fecha??"")}" aria-label="Dia de fechamento" placeholder="fecha"><input data-card-v="${i}" type="number" min="1" max="31" value="${esc(k.vence??"")}" aria-label="Dia de vencimento" placeholder="vence"><button class="x" data-del-card="${i}" aria-label="Remover">×</button></div>`).join("")}
      <p class="sub">Compras feitas a partir do dia de fechamento contam no mês seguinte.</p>
      ${dobra("limites", "Limite de cada cartão", `${c.cartoes.map(k => `<label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,130px)"><span>${esc(k.nome)}</span><input data-limite="${esc(k.nome)}" inputmode="decimal" value="${num(c.limites?.[k.nome]) || ""}" placeholder="limite R$"></label>`).join("")}<button class="btn ghost" type="button" data-act="salvarLimites">Salvar limites</button>`)}
      <div class="toolbar"><button class="btn ghost" data-add="card">${I.plus}Cartão</button><button class="btn" data-save="cartoes">Salvar cartões</button></div>
    </div></section>
`;
  if (aba === "dados") corpo = `
    <section class="card"><div class="head"><h2>Seus dados</h2></div><div class="form">
      <p class="sub">${S.gastos.length} gastos, ${S.parcelas.length} parcelas e ${S.entradas.length} entradas guardados no app.</p>
      <p class="sub">Versão do app: ${VERSAO_APP}</p>
      <button class="btn ghost" data-act="export">Baixar tudo em planilha (CSV)</button>
      <p class="sub">Tudo fica na planilha FAMÍLIA ASSIS, no Google Drive, e os prints na pasta "Fina – Comprovantes".</p>
      <a class="btn ghost" href="manual.html">Abrir o manual</a>
      <button class="btn ghost" data-act="sair">Sair deste aparelho</button>
    </div></section>

`;
  $("#view").innerHTML = `
  <div class="top"><div class="hello"><small>Personalize</small><h1>Ajustes</h1></div></div>
  <div class="seg aj-abas" role="tablist" aria-label="Partes dos ajustes">${AJ_ABAS.map(([k,t])=>`<button role="tab" data-ajtab="${k}" aria-pressed="${aba===k}" aria-selected="${aba===k}">${t}</button>`).join("")}</div>
  <div class="settings">${corpo}</div>`;
}

/* ---------- assistente ---------- */
function renderAssistente(){
  const c = cfg();
  const sugest = ["Quanto ainda posso gastar este mês?","Quanto gastei de mercado?","Gastei 45 reais na farmácia no Pix","Quais parcelas acabam este ano?"];
  $("#view").innerHTML = `
  <div class="chatwrap ${S.busy?"thinking":""}" id="chatwrap">
    <div class="bot-head"><div class="bot-id">${BOT}<div><h1>${esc(c.nomeAssistente)}</h1><span class="sub">${navigator.onLine?"Mande print, fale ou pergunte":"Sem internet: a conversa volta quando conectar"}</span></div></div>
      <label class="toggle"><input type="checkbox" id="speakOn" ${S.speakOn?"checked":""}> Falar respostas em voz alta</label></div>
    <div class="msgs" id="msgs" aria-live="polite">
      ${S.chat.length ? "" : `<div class="msg bot"><div class="b">Oi${S.me?", "+esc(S.me):""}! Eu sou a ${esc(c.nomeAssistente)}. Me mande prints de fatura ou comprovantes, diga um gasto (“gastei 70 de gasolina no Pix”) ou pergunte sobre o mês. Antes de salvar, eu sempre mostro o que entendi pra você conferir.</div></div><div class="suggest">${sugest.map(s=>`<button data-sug="${esc(s)}">${esc(s)}</button>`).join("")}</div>`}
      ${S.chat.map((m,i)=>msgHTML(m,i)).join("")}
      ${S.busy?`<div class="msg bot"><div class="b muted">${esc(S.lendo || "Pensando…")}</div></div>`:""}
    </div>
    <div class="composer">
      ${S.pendingImgs.length?`<div class="pending-imgs">${S.pendingImgs.map((f,i)=>`<span class="pi">${f.file.type==="application/pdf" ? `<span class="pdf">PDF</span>` : /\.ofx$/i.test(f.file.name||"") ? `<span class="pdf">OFX</span>` : `<img src="${f.url}" alt="Print ${i+1}">`}<button data-rmimg="${i}" aria-label="Remover print">×</button></span>`).join("")}</div>`:""}
      <div class="row">
        ${S.imgOK?`<button class="iconbtn" data-act="print" aria-label="Anexar foto, print ou PDF">${I.clip}</button>`:""}
        <textarea id="ask" rows="1" placeholder="Escreva ou fale…" aria-label="Mensagem">${esc(ls.get("draft",""))}</textarea>
        <button class="iconbtn" id="micBtn" data-act="mic" aria-label="Falar">${I.mic}</button>
        ${S.busy?`<button class="iconbtn" data-act="stop" aria-label="Parar">${I.stop}</button>`:`<button class="iconbtn send" data-act="send" aria-label="Enviar">${I.send}</button>`}
      </div>
      <div class="hint" id="hint" hidden></div>
    </div>
  </div>`;
  const box = $("#msgs"); box.scrollTop = box.scrollHeight;
  window.scrollTo(0, document.body.scrollHeight);
}
function msgHTML(m, i){
  if (m.role === "user") return `<div class="msg me">${m.imgs?`<div class="thumbs">${Array.from({length:m.imgs},()=>`<span class="chip">anexo</span>`).join("")}</div>`:""}${m.text?`<div class="b">${esc(m.text)}</div>`:""}</div>`;
  const props = m.items?.length ? proposalHTML(m, i) : "";
  return `<div class="msg bot"><div class="b">${esc(m.text)}</div>${props}<div class="meta"><button class="speak" data-speak="${i}">${I.spk}Ouvir</button>${m.semIA && m._orig && !m.saved ? `<button class="speak" data-comia="${i}">Ler com a IA</button>` : ""}${m.saved?`<span>Salvo</span>`:""}</div></div>`;
}
function opts(list, val, allowEmpty=true){ return (allowEmpty?`<option value="">—</option>`:"") + list.map(x=>`<option ${x===val?"selected":""}>${esc(x)}</option>`).join("") + (val && !list.includes(val) ? `<option selected>${esc(val)}</option>` : ""); }
function proposalHTML(m, i){
  const c = cfg();
  const rows = m.items.map((it,j)=>{
    const dup = !m.saved && !it.existe && isDuplicate(it);
    const fix = !m.saved && it.corrigir ? `<div class="warnline">Já está na planilha, mas com o número da parcela errado (lá começa em ${esc(mLabel(it.corrigir.de))}; pela fatura, em ${esc(mLabel(it.corrigir.para))}). Marque "salvar" para eu corrigir.</div>` : (!m.saved && it.existe ? `<div class="warnline ok">Já está na planilha certinha.</div>` : "");
    const id = `p${i}-${j}`;
    const common = it.tipo==="separado" ? `
      <label class="c2">Para quê<select id="${id}-para">${METAS.map(([k,t])=>`<option value="${k}" ${it.para===k?"selected":""}>${t}</option>`).join("")}</select></label>
      <label class="c2">Valor<input id="${id}-valor" inputmode="decimal" value="${esc(String(it.valor).replace(".",","))}"></label>
      <label class="c2">Do dinheiro de<input type="month" id="${id}-mes" value="${esc(it.mes||S.mes)}"></label>
      <label class="c2">Quem<select id="${id}-quem">${opts([...c.pessoas,"Casal"], it.quem)}</select></label>
      <label class="c3">Descrição<input id="${id}-descricao" value="${esc(it.descricao)}"></label>` : it.tipo==="entrada" ? `
      <label class="c2">Mês<input type="month" id="${id}-mes" value="${esc(it.mes||S.mes)}"></label>
      <label class="c2">Valor<input id="${id}-valor" inputmode="decimal" value="${esc(String(it.valor).replace(".",","))}"></label>
      <label class="c2">Quem<select id="${id}-quem">${opts([...c.pessoas,"Casal"], it.quem)}</select></label>
      <label class="c3">Tipo<select id="${id}-tipo_entrada">${opts(ENTRY_TYPES, it.tipo_entrada, false)}</select></label>
      <label class="c3">Descrição<input id="${id}-descricao" value="${esc(it.descricao)}"></label>` : `
      <label class="c2">Data<input type="date" id="${id}-data" value="${esc(it.data)}"></label>
      <label class="c2">Valor${it.tipo==="parcela"?" da parcela":""}<input id="${id}-valor" inputmode="decimal" value="${esc(String(it.valor).replace(".",","))}"></label>
      <label class="c2">Categoria<select id="${id}-categoria">${opts(catNames(), it.categoria)}</select></label>
      <label class="c2">Forma<select id="${id}-forma">${opts(formas(), it.forma)}</select></label>
      <label class="c2">Quem<select id="${id}-quem">${opts([...c.pessoas,"Casal"], it.quem)}</select></label>
      <label class="c2">Descrição<input id="${id}-descricao" value="${esc(it.descricao)}"></label>
      ${it.tipo==="parcela"?`<label class="c2">Parcela atual<input type="number" min="1" id="${id}-parcela_atual" value="${esc(it.parcela_atual||1)}"></label><label class="c2">Total de parcelas<input type="number" min="1" id="${id}-total_parcelas" value="${esc(it.total_parcelas||1)}"></label><label class="c2">1ª parcela em<input type="month" id="${id}-inicio" value="${esc(it.inicio||inicioPadrao(it))}"></label>`:""}`;
    return `<div class="prop ${it.skip?"off":""}"><div class="kind"><span>${it.tipo==="gasto"?"Gasto":it.tipo==="parcela"?"Compra parcelada":it.tipo==="separado"?"Dízimo, reserva ou investimento":"Entrada de dinheiro"}</span>${m.saved?"":`<label style="display:flex;gap:6px;align-items:center;font-size:12px;color:var(--ink-2)"><input type="checkbox" data-skip="${i}-${j}" ${it.skip?"":"checked"} style="width:auto"> salvar</label>`}</div>${common}${dup?`<div class="warnline">Parece que já está lançado, por isso veio desmarcado. Marque se não for repetido.</div>`:""}${fix}</div>`;
  }).join("");
  const fat = m.fatura ? (() => { const soma = m.items.reduce((s,x)=>s+num(x.valor),0); const dif = Math.round((m.fatura.total - soma)*100)/100;
    return `<div class="conferencia ${Math.abs(dif)<0.05?"ok":"warn"}"><b>Conferência da fatura${m.fatura.cartao?" · "+esc(m.fatura.cartao):""}</b><br>Total da fatura ${money(m.fatura.total)} · itens lidos somam ${money(soma)}${Math.abs(dif)<0.05 ? " · bate certinho ✓" : ` · diferença de ${money(dif)}. Pode ter faltado algum item no print ou ter algum item de outra fatura.`}</div>`; })() : "";
  return `<div class="proposal">${fat}${rows}${m.saved?"":`<div class="toolbar"><button class="btn ghost" data-discard="${i}">Descartar</button><button class="btn" data-confirm="${i}">Salvar ${m.items.filter(x=>!x.skip).length} ${m.items.filter(x=>!x.skip).length===1?"item":"itens"}</button></div>`}</div>`;
}
function inicioPadrao(it){
  const comp = compMonth({data: it.data || today(), forma: it.forma}) || S.mes;
  return addM(comp, -((Number(it.parcela_atual)||1)-1));
}
function isDuplicate(it){
  const v = num(it.valor);
  if (it.tipo==="gasto") return S.gastos.some(g => g.data===it.data && Math.abs(num(g.valor)-v)<0.01 && (!it.forma || g.forma===it.forma));
  if (it.tipo==="parcela") return S.parcelas.some(p => Math.abs(num(p.valor)-v)<0.01 && Number(p.n)===Number(it.total_parcelas) && (!it.forma || p.forma===it.forma));
  if (it.tipo==="separado") return S.separados.some(e => e.mes===it.mes && e.para===it.para && Math.abs(num(e.valor)-v)<0.01);
  return S.entradas.some(e => e.mes===it.mes && Math.abs(num(e.valor)-v)<0.01 && (e.quem||"")===(it.quem||""));
}

function buildPrompt(text, nImgs){
  const c = cfg(); const M = month(S.mes);
  const leve = nImgs > 0 && !/\?/.test(text||"");      // só ler fatura: manda o mínimo (gasta menos do limite grátis)
  const ctx = leve ? {hoje: today(), mes_em_foco: S.mes, enviado_por: S.me || "não informado", categorias: catNames(), formas_de_pagamento: formas(), pessoas: c.pessoas, regras_de_quem: c.regrasQuem, cartoes: c.cartoes.map(k=>({nome:k.nome, fecha_dia:k.fecha}))} : {
    hoje: today(), mes_em_foco: S.mes, enviado_por: S.me || "não informado",
    categorias: catNames(), formas_de_pagamento: formas(), pessoas: c.pessoas,
    regras_de_quem: c.regrasQuem,
    cartoes: c.cartoes.map(k=>({nome:k.nome, fecha_dia:k.fecha, vence_dia:k.vence})),
    resumo_do_mes: { entrou: +M.entrou.toFixed(2), separado: {dizimo:+M.sep.dizimo.toFixed(2), reserva:+M.sep.reserva.toFixed(2), investimentos:+M.sep.investimentos.toFixed(2)}, contas_fixas:+M.fixas.toFixed(2), gastos_dia_a_dia:+M.dia.toFixed(2), parcelas:+M.parc.toFixed(2), ainda_da_pra_gastar:+M.ainda.toFixed(2),
      categorias: M.cats.map(x=>({nome:x.nome, orcamento:x.orc, gasto:+x.total.toFixed(2)})), entradas_por_pessoa: M.pessoas },
    contas_fixas: c.fixas,
    gastos_do_mes: M.gastos.slice(-220).map(g=>[g.data, +num(g.valor).toFixed(2), g.categoria, g.quem||"", g.forma||"", g.descricao||""]),
    parcelas_ativas: M.parcelas.map(p=>[p.descricao, +num(p.valor).toFixed(2), `${parcelaInfo(p,S.mes)}/${p.n}`, "termina "+fimParcela(p), p.forma||"", p.categoria]),
    reserva: {saldo: num(c.reserva.saldo), meta_meses: c.reserva.meses},
    proximos_meses: Array.from({length:6},(_,k)=>addM(ymOf(new Date()),k)).map(ym => { const x = month(ym); return {mes: ym, entra:+x.entrou.toFixed(2), comprometido:+(x.separado+x.fixas+x.parc).toFixed(2), sobra_para_dia_a_dia:+(x.entrou-x.separado-x.fixas-x.parc).toFixed(2), ja_gasto:+x.dia.toFixed(2)}; }),
    taxas_de_hoje: cfg().taxas || null,
    objetivos: objetivosTodos().map(o => ({nome:o.nome, tipo:o.tipo, meta:o.meta, ja_tem:o.jaTem, data:o.data})),
    metas_da_vida: quadroItens().map(i => ({area: areaDe(i.area)[1], meta: i.texto, detalhe: i.obs||"", quem: i.quem||"os dois", prazo: i.prazo||"", habito: freqTxt(i.freq), prioridade: i.prio||"", feito: !!i.feito})),
    perfil_investidor: cfg().perfilInvest?.perfil || "não respondido",
    saude_do_mes: saudeDoMes(M),
    milhas: {cartoes: resumoPontos(M).linhas.map(x => ({cartao:x.nome, programa:x.programa, gasto_mes:+x.total.toFixed(2), pontos_mes:Math.round(x.pontos)})), saldos: (cfg().milhas?.saldos||[]), promocoes_ativas: (ls.get("radar", {}).itens||[]).filter(x=>x.tipo==="transferencia").slice(0,8).map(x=>`${x.data}: ${x.titulo}`), regras:"Pontos do banco valem mais transferidos com bônus de 80%+ para companhia aérea, com viagem em mente. Trocar por produto ou dinheiro costuma valer pouco (abaixo de R$ 20 por mil pontos). Nunca gastar a mais para pontuar."},
    dividas: (cfg().dividas||[]).map(d => ({nome:d.nome, saldo:d.saldo, parcela:d.parcela, juros_mes:d.juros, quita_em_meses: quitacao(d).meses})),
    separar_no_mes: {planejado: {dizimo:+M.sep.dizimo.toFixed(2), reserva:+M.sep.reserva.toFixed(2), investimentos:+M.sep.investimentos.toFixed(2)}, feito: M.feito},
  };
  const hist = S.chat.slice(-8).map(m => `${m.role==="user"?"Usuária":"Assistente"}: ${m.text||"(prints)"}`).join("\n");
  return `Você é ${c.nomeAssistente}, a assistente de finanças da família de ${c.pessoas.join(" e ")}. Fale em português do Brasil, de forma curta, clara e gentil, como alguém da família que entende de dinheiro. Valores sempre em reais (R$ 1.234,56).

O que fazer com a mensagem${nImgs?` e os ${nImgs} print(s) anexados`:""}:
1. Se trouxer gastos, compras parceladas ou dinheiro recebido, extraia cada um como um item (regras abaixo).
2. Se for pergunta ou pedido de análise, responda usando SÓ os dados abaixo. Se faltar dado, diga o que falta.
3. Pode fazer as duas coisas na mesma resposta.

Regras de extração:
- Fatura ou extrato: cada compra é um item. Ignore pagamento de fatura, "pagamento com saldo", limite, totais e saldos.
- "Parcela X de Y": tipo "parcela", com parcela_atual X, total_parcelas Y e o valor DA PARCELA.
- Desconto ligado a uma compra (ex.: "Desc ShellBox"): desconte do valor da compra, não crie item separado.
- Estorno ou cancelamento: valor negativo, tipo "gasto". Se no mesmo print o cancelamento zera uma compra que também aparece, não crie nenhum dos dois e avise na resposta.
- Datas no formato AAAA-MM-DD. Se o print não mostrar o ano, use o ano de hoje (ou o anterior, se a data cairia no futuro).
- categoria: exatamente um nome da lista. forma: exatamente um nome da lista; reconheça o cartão pelo nome ou final; se não der, "". quem: use regras_de_quem; se não der, "".
- descricao: nome legível da loja ou do motivo (ex.: "Atacadão", "Uber", "Drogaria Raia").
- Dinheiro que entrou (salário, Pix recebido, renda extra, reembolso, BlaBlaCar): tipo "entrada", com mes AAAA-MM, quem (${c.pessoas.join(", ")} ou "Casal") e tipo_entrada (${ENTRY_TYPES.join(", ")}).
- Dízimo, oferta, dinheiro guardado na reserva de emergência e aplicação em investimento NÃO são gastos: use tipo "separado", com para ("dizimo", "reserva" ou "investimentos"), valor, mes AAAA-MM (de qual mês é o dinheiro; se não disser, use mes_em_foco; se disser "do mês passado", o mês anterior), quem e descricao.
- Nunca invente valores. Se algo estiver ilegível, diga na resposta.
- Nunca diga que salvou: a usuária ainda vai conferir e tocar em Salvar.

Fatura de cartão: além dos itens, informe "fatura": {"cartao": nome da lista de formas, "total": total da fatura em R$ (o "total a pagar" ou "total desta fatura"; se não aparecer, null)}. Liste TODAS as compras e parcelas da fatura, mesmo as que já parecem lançadas: o app confere sozinho o que é repetido.
Perguntas do tipo "posso comprar X?": use proximos_meses (quanto sobra para o dia a dia em cada mês) e diga com clareza se cabe, mês a mês, sem enrolar. Se for parcelado, some a parcela em cada mês.
Perguntas sobre milhas e pontos: use "milhas" dos dados. Diga se vale a pena com contas simples (R$ por mil pontos ou milhas), cite a promoção ativa se houver e lembre de não gastar a mais para pontuar.
Perguntas sobre investimentos: seja educativa. Use taxas_de_hoje e objetivos. Diga o TIPO de investimento que costuma servir (ex.: "Tesouro Selic ou CDB com liquidez diária que pague 100% do CDI ou mais, com FGC") e mostre contas de rendimento. Nunca indique banco, corretora, fundo, ação ou cripto específicos, nem prometa rentabilidade. Lembre que a reserva de emergência vem antes de bolsa.

Responda SOMENTE com JSON neste formato:
{"resposta": "texto para a usuária (até 4 frases; se extraiu itens, diga quantos e peça para conferir)",
 "fatura": null,
 "itens": [
  {"tipo":"gasto","data":"2026-10-17","valor":191.46,"categoria":"Mercado","quem":"Gustavo","forma":"Porto 7115","descricao":"Atacadão"},
  {"tipo":"parcela","data":"2026-10-11","valor":64.78,"parcela_atual":1,"total_parcelas":7,"categoria":"Compras","quem":"","forma":"Itaú Platinum 8018","descricao":"Shopee"},
  {"tipo":"entrada","mes":"2026-10","valor":212,"quem":"Daiana","tipo_entrada":"Renda extra","descricao":"BlaBlaCar"},
  {"tipo":"separado","mes":"2026-10","valor":1000,"para":"dizimo","quem":"Casal","descricao":"Dízimo"}
 ]}
Se não houver itens, use "itens": [].

DADOS DO APP (JSON):
${JSON.stringify(ctx)}

${hist?`Conversa recente:\n${hist}\n\n`:""}Nova mensagem${S.me?` de ${S.me}`:""}: ${text || "(só os prints anexados)"}`;
}

/* ---------- IA: o aparelho fala direto com o Gemini (rápido); se não der, vai pelo robô ---------- */
async function chaveIA(){
  const k = ls.get("gkey", ""); if (k) return k;
  try{ const r = await api({a:"chaveIA"}); if (r.ok && r.chave){ ls.set("gkey", r.chave); return r.chave; } }catch{}
  return "";
}
/* escolhe sozinha o modelo "flash" mais novo que a chave pode usar; se o Google aposentar um, passa para o próximo */
async function modelosIA(key){
  const salvo = ls.get("gmodelos", null); if (salvo && salvo.t > Date.now() - 864e5 && salvo.lista?.length) return salvo.lista;
  let nomes = [];
  try{ const j = await (await fetch("https://generativelanguage.googleapis.com/v1beta/models?pageSize=200", {headers:{"x-goog-api-key":key}})).json();
    nomes = (j.models||[]).filter(m=>(m.supportedGenerationMethods||[]).includes("generateContent")).map(m=>m.name.replace("models/","")); }catch{}
  const versao = n => { const m = n.match(/gemini-(\d+(?:\.\d+)?)/); return m ? parseFloat(m[1]) : 0; };
  const bons = nomes.filter(n => /flash/.test(n) && !/image|tts|live|audio|embed|8b|thinking|exp/.test(n));
  bons.sort((a,b) => (versao(b)-versao(a)) || (/lite/.test(a)-/lite/.test(b)) || (/preview/.test(a)-/preview/.test(b)) || (/latest/.test(b)-/latest/.test(a)));
  const lista = bons.length ? bons : ["gemini-flash-latest"];
  ls.set("gmodelos", {t: Date.now(), lista});
  return lista;
}
async function perguntarIA(prompt, anexos, signal){
  const key = await chaveIA();
  if (!key){ const r = await api({a:"ia", prompt, imagens: anexos}, signal); if (!r.ok) throw {code:r.erro}; return r.texto; }
  const ruins = new Set(ls.get("gruins", []));
  let modelos = (await modelosIA(key)).filter(m => !ruins.has(m));
  if (anexos.length) modelos = [...modelos.filter(m => /lite/.test(m)), ...modelos.filter(m => !/lite/.test(m))];   // ler fatura: o modelo leve basta e tem limite maior
  if (!modelos.length){ ls.set("gruins", []); ls.set("gmodelos", null); throw {code:"ia_sem_modelo"}; }
  let ultimo = null;
  for (const modelo of modelos.slice(0, 4)){
    const body = {contents:[{role:"user", parts:[{text:prompt}, ...anexos.map(a=>({inline_data:{mime_type:a.mime, data:a.data}}))]}],
      generationConfig:{temperature:.2, responseMimeType:"application/json"}};
    for (let tent = 0; tent < 2; tent++){
      const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${modelo}:generateContent`, {method:"POST", headers:{"Content-Type":"application/json", "x-goog-api-key":key}, body:JSON.stringify(body), signal});
      if (r.ok){ const j = await r.json(); return (j.candidates?.[0]?.content?.parts||[]).map(p=>p.text||"").join("").trim(); }
      const t = await r.text().catch(()=>"");
      if ((r.status === 400 && /api.?key/i.test(t)) || r.status === 401 || (r.status === 403 && /api.?key|permission/i.test(t))){ ls.set("gkey", ""); throw {code:"chave_ruim"}; }
      ultimo = {code:"ia_"+r.status, detalhe:t.replace(/\s+/g," ").slice(0,160)};
      if (r.status === 404 || r.status === 400){ ruins.add(modelo); ls.set("gruins", [...ruins]); break; }   // modelo aposentado: tenta o próximo
      if (r.status === 429) throw {code:"limite"};                                                           // limite grátis: para e avisa (não fica tentando)
      if (r.status >= 500 && tent === 0){ await new Promise(ok=>setTimeout(ok, 2000)); continue; }          // Google ocupado: espera e tenta
      break;
    }
  }
  throw ultimo || {code:"ia_erro"};
}
function lerBase64(file){ return new Promise((ok, erro) => { const fr = new FileReader(); fr.onload = () => ok(String(fr.result).split(",")[1]); fr.onerror = () => erro(fr.error); fr.readAsDataURL(file); }); }
async function anexosDe(files){
  return Promise.all(files.map(async f => {
    if (f.type === "application/pdf") return {mime:"application/pdf", data: await lerBase64(f)};
    if (/\.ofx$/i.test(f.name||"") || /ofx/i.test(f.type||"")) return {mime:"text/plain", data: btoa(unescape(encodeURIComponent(ofxParaTexto(await f.text()))))};
    try{ return {mime:"image/jpeg", data: await imgBase64(f, 1600, .82)}; }
    catch{ return {mime: f.type || "image/jpeg", data: await lerBase64(f)}; }   // ex.: foto HEIC do iPhone
  }));
}
/* sem internet (ou conexão caiu): guarda o pedido e lê sozinha quando a internet voltar */
function guardarParaDepois(item){
  const fila = ls.get("filaIA", []); fila.push(item);
  try{ localStorage.setItem("fina:filaIA", JSON.stringify(fila)); return true; }catch{ return false; }
}
let lendoFila = false;
async function processarFilaIA(){
  if (lendoFila || S.busy || !navigator.onLine || !codigo()) return;
  const fila = ls.get("filaIA", []); if (!fila.length) return;
  lendoFila = true;
  try{
    while (navigator.onLine){
      const atual = ls.get("filaIA", []); if (!atual.length) break;
      const it = atual[0];
      const ok = await rodarIA(it.text, it.anexos, it.prompt, null, true);
      if (!ok) break;
      ls.set("filaIA", atual.slice(1));
    }
  } finally { lendoFila = false; }
}
async function sendMsg(){
  if (S.busy) return;
  const box = $("#ask"); const text = (box?.value||"").trim();
  if (!text && !S.pendingImgs.length) return;
  const files = S.pendingImgs.map(p=>p.file);
  S.chat.push({role:"user", text, imgs: files.length});
  const prompt = buildPrompt(text, files.length);
  ls.set("draft",""); S.pendingImgs.forEach(p=>URL.revokeObjectURL(p.url)); S.pendingImgs = [];
  S.busy = true; render();
  // 1º: ler sem IA (arquivo do banco, PDF, print/foto, ou frase simples). Sem limite e sem internet.
  if (!S.forcarIA){
    try{
      const r = files.length ? await lerSemIA(files) : lerFraseSemIA(text);
      if (r && r.itens.length){
        const items = r.itens.map(normItem);
        const msg = {role:"assistant", text: `Li ${items.length} ${items.length===1?"item":"itens"} ${r.metodo} sem usar a IA. Confira e toque em Salvar.${r.fatura && !r.fatura.total ? "" : ""}`, items, fatura: r.fatura || null, semIA: true};
        msg._orig = {text, files}; if (files.length) msg._f = files.filter(f => f.type.startsWith("image/"));
        S.busy = false; S.chat.push(msg); saveChat(); render(); if (S.speakOn) speak(msg.text); return;
      }
    }catch(e){ console.warn("leitura sem IA", e); S.lendo = ""; }
  }
  S.forcarIA = false;
  let anexos = [];
  try{ anexos = await anexosDe(files); }catch{ S.busy = false; S.chat.push({role:"assistant", text:"Não consegui abrir esse arquivo. Tente uma foto ou um PDF.", items:[]}); saveChat(); return render(); }
  if (!navigator.onLine && !anexos.length){
    const it = lancamentoRapido(text);
    if (it){ S.busy = false; S.chat.push({role:"assistant", text:"Sem internet, mas entendi assim. Confira e toque em Salvar:", items:[normItem(it)]}); saveChat(); return render(); }
  }
  if (!navigator.onLine){
    S.busy = false;
    const ok = guardarParaDepois({text, anexos, prompt, quando: Date.now()});
    S.chat.push({role:"assistant", text: ok ? "Estou sem internet agora. Guardei e leio sozinha assim que a internet voltar." : "Estou sem internet e o arquivo é grande demais para guardar. Mande de novo quando a internet voltar.", items:[]});
    saveChat(); return render();
  }
  await rodarIA(text, anexos, prompt, files, false);
}
/* devolve false só quando a conexão falhou (para tentar de novo depois) */
async function rodarIA(text, anexos, prompt, files, daFila){
  S.busy = true; S.ctl = new AbortController(); render();
  let deuCerto = true;
  try{
    const texto = await perguntarIA(prompt, anexos, S.ctl.signal);
    const out = lerJSON(texto);
    if (!out) throw {code:"invalid_json"};
    const items = Array.isArray(out?.itens) ? out.itens.filter(x=>x && ["gasto","parcela","entrada","separado"].includes(x.tipo)).map(normItem) : [];
    const fatura = out?.fatura && num(out.fatura.total) ? {cartao: String(out.fatura.cartao||""), total: num(out.fatura.total)} : null;
    const msg = {role:"assistant", text: (daFila ? "(Li o que você mandou sem internet.) " : "") + String(out?.resposta || (items.length?`Encontrei ${items.length} itens. Confira e toque em Salvar.`:"Não encontrei nada para lançar.")), items, fatura};
    if (items.length && files?.length) msg._f = files.filter(f => f.type !== "application/pdf"); // prints guardados ao salvar
    S.chat.push(msg);
    if (S.speakOn) speak(msg.text);
  }catch(e){
    const code = e?.name==="AbortError" ? "cancelled" : e?.code;
    const caiu = !code && (e instanceof TypeError || !navigator.onLine);     // a conexão falhou no meio
    if (caiu){
      deuCerto = false;
      if (!daFila){ const ok = guardarParaDepois({text, anexos, prompt, quando: Date.now()}); S.chat.push({role:"assistant", text: ok ? "A conexão falhou no meio. Guardei e tento de novo sozinha daqui a pouco." : "A conexão falhou e o arquivo é grande demais para guardar. Mande de novo, por favor.", items:[]}); }
      setTimeout(processarFilaIA, 30000);
    } else {
      const t = code==="cancelled" ? "Parei." : code==="sem_chave" ? "Falta a chave da IA. Cole em Ajustes → Fina → Inteligência da Fina." : code==="chave_ruim" ? "A chave da IA não funcionou. Cole de novo em Ajustes → Fina → Inteligência da Fina." : code==="limite" ? "Usei todo o limite grátis da IA por agora. Tente de novo daqui a pouco ou lance pelo botão Adicionar." : /^ia_5\d\d$/.test(code||"") ? "A IA do Google está sobrecarregada agora. Tente de novo em um minutinho." : code==="invalid_json" ? "Me confundi com a resposta. Pode mandar de novo?" : code==="codigo" ? "A senha da família mudou. Entre de novo." : `Não consegui ler agora (${code||"erro"}${e?.detalhe ? ": "+e.detalhe : ""}). Tente de novo.`;
      S.chat.push({role:"assistant", text:t, items:[]});
    }
  }finally{
    S.busy = false; S.ctl = null; S.chat = S.chat.slice(-60); saveChat(); render();
  }
  return deuCerto;
}
function normItem(x){
  const it = {...x, valor: num(x.valor), descricao: String(x.descricao||"").slice(0,120)};
  if (it.tipo!=="entrada" && it.tipo!=="separado"){ it.data = /^\d{4}-\d{2}-\d{2}$/.test(it.data||"") ? it.data : today(); if (!catNames().includes(it.categoria)) it.categoria = catNames().includes("Serviços/Outros") ? "Serviços/Outros" : (catNames()[0]||""); if (it.forma && !formas().includes(it.forma)) it.forma = ""; }
  if (it.tipo==="parcela"){ it.parcela_atual = Math.max(1, parseInt(it.parcela_atual)||1); it.total_parcelas = Math.max(it.parcela_atual, parseInt(it.total_parcelas)||1); it.inicio = inicioPadrao(it);
    const igual = S.parcelas.find(p => Math.abs(num(p.valor)-it.valor) <= 0.05 && Number(p.n) === it.total_parcelas && (!it.forma || !p.forma || p.forma === it.forma));
    if (igual){ it.existe = igual.id; if (igual.inicio !== it.inicio) it.corrigir = {id: igual.id, de: igual.inicio, para: it.inicio}; } }
  if (it.tipo==="entrada"){ it.mes = /^\d{4}-\d{2}$/.test(it.mes||"") ? it.mes : S.mes; if (!ENTRY_TYPES.includes(it.tipo_entrada)) it.tipo_entrada = "Renda extra"; }
  if (it.tipo==="separado"){ it.mes = /^\d{4}-\d{2}$/.test(it.mes||"") ? it.mes : S.mes; if (!METAS.some(([k])=>k===it.para)) it.para = "dizimo"; it.quem = it.quem || "Casal"; }
  it.skip = !!(it.existe ? !it.corrigir : isDuplicate(it));   // o que já está lançado vem desmarcado
  return it;
}
function saveChat(){ if (S.me) ls.set("chat:"+S.me, S.chat.map(({_f, ...m})=>m)); }
function loadPerson(){ S.chat = S.me ? ls.get("chat:"+S.me, []) : []; S.speakOn = S.me ? ls.get("speakOn:"+S.me, false) : false; S.voiceName = S.me ? ls.get("voice:"+S.me, "") : ""; }
function pickPerson(nome){ S.me = nome; ls.set("me", nome); loadPerson(); applyTheme(); go("inicio"); }
const AV_EMOJIS = ["🌸","🌷","🌻","🦋","🐱","🐶","🐻","🐼","🦊","🐰","🐧","🦁","⚽","🎮","☕","🍕","🎧","📚","💪","✈️","💜","💚","💙","⭐"];
function avatarOf(nome){ return (S.config?.perfis?.[nome]?.avatar) || {tipo:"letra"}; }
function avatarHTML(nome, size=26, color){
  const a = avatarOf(nome); const t = personTheme(nome); const col = color || t.accent || (THEMES[t.preset]||THEMES.nos).light.accent;
  const inner = a.tipo==="foto" && a.valor ? `<img src="${esc(a.valor)}" alt="">` : a.tipo==="emoji" && a.valor ? `<span style="font-size:${Math.round(size*.55)}px;line-height:1">${esc(a.valor)}</span>` : `<span style="font-size:${Math.round(size*.45)}px">${esc((nome||"?")[0])}</span>`;
  return `<span class="av" style="width:${size}px;height:${size}px;background:${a.tipo==="emoji"?"color-mix(in srgb, "+col+" 22%, var(--surface))":col}" aria-hidden="true">${inner}</span>`;
}
async function setAvatar(av){
  if (!S.me) return;
  S.config = {...cfg(), perfis:{...(cfg().perfis||{}), [S.me]:{...(cfg().perfis?.[S.me]||{}), avatar:av}}};
  render(); enfileirar({a:"app", app:{perfis:{[S.me]:{avatar:av}}}}, "avatar:"+S.me); guardarLocal(); enviar(); toast("Avatar atualizado");
}
function renderAvatarCard(){
  const a = avatarOf(S.me);
  return `<section class="card"><div class="head"><h2>Seu avatar</h2><span class="sub">aparece para os dois</span></div><div class="form">
    <div class="avrow">${avatarHTML(S.me, 64)}<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn ghost" data-act="avatarPhoto">${I.cam}Usar uma foto</button><button class="btn ghost" data-act="avatarLetter">Usar a inicial</button></div></div>
    <div class="flabel">Ou escolha um</div>
    <div class="emojis">${AV_EMOJIS.map(e=>`<button data-emoji="${e}" aria-pressed="${a.tipo==="emoji"&&a.valor===e}" aria-label="Avatar ${e}">${e}</button>`).join("")}</div>
  </div></section>`;
}
function renderPerfil(){
  const c = cfg(); $("#tabbar").innerHTML = ""; $("#rail").innerHTML = "";
  const quem = S.lockPessoa;
  if (quem){ renderLogin(quem); return; }
  $("#view").innerHTML = `<div class="who"><div class="who-in">${BOT}<h1>Quem está usando?</h1><p class="sub">Cada um entra com a sua senha, a digital ou o rosto. As finanças são as mesmas para os dois.</p>
    <div class="people">${c.pessoas.map(n=>{ const t = personTheme(n); const th = THEMES[t.preset]||THEMES.nos; const col = t.accent || th.light.accent;
      return `<button class="person" data-person="${esc(n)}">${avatarHTML(n, 76, col)}<b>${esc(n)}</b><small>${temSenha(n) ? "🔒 com senha" : "criar senha"}</small></button>`; }).join("")}</div></div></div>`;
}
/* ---------- login de cada pessoa: senha (o navegador salva) e digital/rosto (WebAuthn) ---------- */
const temSenha = n => !!cfg().perfis?.[n]?.senha?.hash;
async function hashSenha(senha, sal){ const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(sal + ":" + senha)); return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join(""); }
const b64u = buf => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
const deB64u = s => Uint8Array.from(atob(s.replace(/-/g,"+").replace(/_/g,"/")), c => c.charCodeAt(0));
const bioId = n => ls.get("bio:" + n, "");
async function bioDisponivel(){ try{ return !!(window.PublicKeyCredential && await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()); }catch{ return false; } }
function renderLogin(n){
  const novo = !temSenha(n), bio = !novo && bioId(n);
  $("#view").innerHTML = `<div class="who"><form class="who-in login" id="loginForm" autocomplete="on">${avatarHTML(n, 76)}<h1>${novo ? "Crie sua senha" : "Oi, " + esc(n) + "!"}</h1>
    <p class="sub">${novo ? "Só você vai usar. Pelo menos 4 letras ou números. Depois dá para entrar com a digital ou o rosto." : "Digite sua senha" + (bio ? " ou use a digital/rosto." : ".")}</p>
    <input type="text" name="username" autocomplete="username" value="${esc(n)}" style="display:none" tabindex="-1" aria-hidden="true">
    <input id="loginSenha" name="password" type="password" autocomplete="${novo ? "new-password" : "current-password"}" autocapitalize="none" placeholder="${novo ? "nova senha" : "sua senha"}" aria-label="Senha de ${esc(n)}">
    ${novo ? `<input id="loginSenha2" type="password" autocomplete="new-password" autocapitalize="none" placeholder="repita a senha" aria-label="Repita a senha">` : ""}
    <button class="btn" type="submit" style="width:100%;justify-content:center">${novo ? "Criar e entrar" : "Entrar"}</button>
    ${bio ? `<button class="btn ghost" type="button" data-act="bioEntrar" style="width:100%;justify-content:center">Entrar com digital ou rosto</button>` : ""}
    ${S.loginMsg ? `<p class="sub" style="color:var(--bad)">${esc(S.loginMsg)}</p>` : ""}
    <button class="btn ghost" type="button" data-act="voltarPessoas">Não sou ${esc(n)}</button></form></div>`;
  if (bio && !S.bioTentado){ S.bioTentado = true; setTimeout(entrarBio, 300); }
}
async function enviarLogin(){
  const n = S.lockPessoa, a = $("#loginSenha")?.value || "";
  if (!temSenha(n)){
    const b = $("#loginSenha2")?.value || "";
    if (a.length < 4){ S.loginMsg = "A senha precisa ter pelo menos 4 letras ou números."; return render(); }
    if (a !== b){ S.loginMsg = "As duas senhas não estão iguais."; return render(); }
    await gravarSenhaPessoa(n, a); desbloquear(n);
    if (await bioDisponivel()) setTimeout(() => { if (confirmarTela) confirmarTela("Quer entrar com a digital ou o rosto neste aparelho?", "Ativar", ativarBio); }, 400);
    return;
  }
  const sh = cfg().perfis[n].senha;
  if (await hashSenha(a, sh.sal) === sh.hash) desbloquear(n);
  else { S.loginMsg = "Senha errada. Tente de novo."; render(); }
}
async function gravarSenhaPessoa(n, senha){
  const sal = uid() + uid(); const hash = await hashSenha(senha, sal);
  const patch = {perfis:{[n]:{senha:{sal, hash}}}};
  S.config = juntar(cfg(), patch); enfileirar({a:"app", app:patch}, "senha:" + n); guardarLocal(); enviar();
  try{ if (window.PasswordCredential) navigator.credentials.store(new PasswordCredential({id:n, password:senha, name:n})).catch(()=>{}); }catch{}
}
function desbloquear(n){ S.desbloqueado = true; S.loginMsg = ""; S.lockPessoa = ""; S.bioTentado = false; S.saiuEm = 0; pickPerson(n); }
async function ativarBio(){
  const n = S.me;
  try{
    const cred = await navigator.credentials.create({publicKey:{challenge: crypto.getRandomValues(new Uint8Array(32)), rp:{name:"Fina"},
      user:{id: new TextEncoder().encode(n + "-" + uid()), name:n, displayName:n},
      pubKeyCredParams:[{type:"public-key", alg:-7},{type:"public-key", alg:-257}],
      authenticatorSelection:{authenticatorAttachment:"platform", userVerification:"required", residentKey:"discouraged"}, timeout:60000}});
    ls.set("bio:" + n, b64u(cred.rawId)); toast("Pronto! Da próxima vez é só a digital ou o rosto."); render();
  }catch{ toast("Não deu para ativar agora. Tente de novo em Ajustes → Perfil."); }
}
async function entrarBio(){
  const n = S.lockPessoa, id = bioId(n); if (!id) return;
  try{
    await navigator.credentials.get({publicKey:{challenge: crypto.getRandomValues(new Uint8Array(32)), allowCredentials:[{type:"public-key", id: deB64u(id)}], userVerification:"required", timeout:60000}});
    desbloquear(n);
  }catch{ /* cancelou: fica a senha */ }
}
/* tela de confirmação simples (o app não usa confirm do navegador) */
function confirmarTela(texto, botao, acao){
  $("#modalRoot").innerHTML = `<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(texto)}"><h2>${esc(texto)}</h2><div class="acts"><button class="btn ghost" data-close="1">Agora não</button><button class="btn" id="confirmarSim">${esc(botao)}</button></div></div></div>`;
  $("#confirmarSim").onclick = () => { $("#modalRoot").innerHTML = ""; acao(); };
}
function renderSeguranca(){
  const n = S.me, bio = bioId(n);
  return `<section class="card"><div class="head"><h2>Senha e digital</h2><span class="sub">só para ${esc(n)}</span></div><form class="form" id="trocaSenhaForm" autocomplete="on">
    <p class="sub">A ${esc(cfg().nomeAssistente)} pede sua senha (ou digital/rosto) ao abrir e quando fica mais de 5 minutos fechada.</p>
    <input type="text" name="username" autocomplete="username" value="${esc(n)}" style="display:none" tabindex="-1" aria-hidden="true">
    ${dobra("trocaSenha", "Trocar minha senha", `<input id="minhaNova" type="password" autocomplete="new-password" placeholder="nova senha" aria-label="Nova senha"><input id="minhaNova2" type="password" autocomplete="new-password" placeholder="repita" aria-label="Repita a senha"><button class="btn" type="submit">Trocar senha</button>`)}
    ${bio ? `<button class="btn ghost" type="button" data-act="bioDesligar">Desligar digital/rosto neste aparelho</button>` : `<button class="btn ghost" type="button" data-act="bioLigar">Entrar com digital ou rosto neste aparelho</button>`}
  </form></section>`;
}


function readProposal(i){
  const m = S.chat[i];
  m.items.forEach((it,j)=>{
    const id = `p${i}-${j}`;
    for (const f of ["data","valor","categoria","forma","quem","descricao","parcela_atual","total_parcelas","inicio","mes","tipo_entrada","para"]){
      const el = document.getElementById(`${id}-${f}`); if (el) it[f] = f==="valor" ? num(el.value) : el.value;
    }
  });
}
async function confirmItems(i){
  readProposal(i);
  const m = S.chat[i]; const sel = m.items.filter(x=>!x.skip);
  let comprovante = "";
  const files = m._f;
  if (files?.length && navigator.onLine){
    toast("Guardando o print no Drive…");
    try{
      const urls = [];
      for (const f of files){ const r = await api({a:"foto", base64: await imgBase64(f, 2000, .85), mime:"image/jpeg", nome:`print-${today()}-${uid()}.jpg`}); if (r.ok) urls.push(r.url); }
      comprovante = urls.join(" ");
    }catch{}
  }
  const base = {criadoPor: S.me||"", criadoEm: new Date().toISOString(), comprovante};
  for (const it of sel){
    if (it.tipo==="gasto") mudar("salvar","gasto",{...base, data:it.data, valor:num(it.valor), categoria:it.categoria, quem:it.quem||"", forma:it.forma||"", descricao:it.descricao||""});
    else if (it.tipo==="parcela" && it.existe){ const p = S.parcelas.find(x => x.id === it.existe); if (p) mudar("salvar","parcela",{...p, inicio: it.inicio || it.corrigir?.para || p.inicio}); }
    else if (it.tipo==="parcela") mudar("salvar","parcela",{descricao:it.descricao||"", categoria:it.categoria, valor:num(it.valor), n:Number(it.total_parcelas)||1, inicio:it.inicio||inicioPadrao(it), forma:it.forma||"", quem:it.quem||""});
    else if (it.tipo==="separado") mudar("salvar","separado",{mes:it.mes, para:it.para, quem:it.quem||"Casal", valor:num(it.valor), descricao:it.descricao||""});
    else mudar("salvar","entrada",{mes:it.mes, quem:it.quem||"Casal", tipo:it.tipo_entrada||"Renda extra", valor:num(it.valor), descricao:it.descricao||""});
  }
  m.saved = true; saveChat(); dicaPontos(sel.map(x=>x.descricao).join(" "));
  const M = month(S.mes);
  const t = `Pronto, salvei ${sel.length} ${sel.length===1?"item":"itens"}. Ainda dá pra gastar ${money0(M.ainda)} em ${mLabel(S.mes).split(" ")[0]}.`;
  S.chat.push({role:"assistant", text:t, items:[]}); saveChat(); render();
  if (S.speakOn) speak(t);
}

/* ---------- voz ---------- */
function speak(text){
  const ss = window.speechSynthesis; if (!ss) { toast("Este aparelho não tem leitura em voz alta."); return; }
  ss.cancel();
  const u = new SpeechSynthesisUtterance(String(text).replace(/R\$\s?/g,"").slice(0,800));
  u.lang = "pt-BR"; u.rate = 1.02;
  const v = ss.getVoices().find(x=>x.name===S.voiceName) || ss.getVoices().find(x=>/pt[-_]BR/i.test(x.lang));
  if (v) u.voice = v;
  const w = $("#chatwrap"); u.onstart = ()=>w?.classList.add("speaking"); u.onend = u.onerror = ()=>$("#chatwrap")?.classList.remove("speaking");
  ss.speak(u);
}
let rec = null;
function startMic(){
  const hint = $("#hint");
  const showTip = msg => { if (hint){ hint.hidden = false; hint.textContent = msg; } $("#ask")?.focus(); };
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (rec){ try{ rec.stop(); }catch{} return; }
  if (!SR){ showTip("Toque no microfone do teclado do celular e fale o gasto. Depois toque em enviar."); return; }
  try{
    rec = new SR(); rec.lang = "pt-BR"; rec.interimResults = true; rec.continuous = false;
    const btn = $("#micBtn"); btn?.classList.add("rec");
    let finalText = "";
    rec.onresult = ev => { let t = ""; for (const r of ev.results) t += r[0].transcript; finalText = t; const a = $("#ask"); if (a) a.value = t; };
    rec.onerror = () => showTip("O microfone do app não está liberado aqui. Use o microfone do teclado do celular.");
    rec.onend = () => { $("#micBtn")?.classList.remove("rec"); rec = null; if (finalText.trim()) sendMsg(); };
    rec.start();
  }catch{ rec = null; showTip("Use o microfone do teclado do celular para falar."); }
}

/* ---------- modal de edição ---------- */
function openEditor(kind, id, para){
  const c = cfg();
  const list = listaDe(kind);
  const o = id ? list.find(x=>x.id===id) : (kind==="gasto" ? {data:today(), quem:S.me} : kind==="parcela" ? {inicio:S.mes, n:2, quem:S.me} : kind==="separado" ? {mes:S.mes, quem:"Casal", para:para||"dizimo"} : {mes:S.mes, quem:S.me, tipo:"Renda extra"});
  if (!o) return;
  const title = {gasto:"Gasto", parcela:"Compra parcelada", entrada:"Entrada de dinheiro", separado:"Dízimo, reserva ou investimento feito"}[kind];
  let fields = "";
  if (kind==="gasto") fields = `
    <label>Data<input type="date" id="e-data" value="${esc(o.data)}"></label>
    <label>Valor (R$)<input id="e-valor" inputmode="decimal" value="${o.valor!=null?String(o.valor).replace(".",","):""}"></label>
    <label>Categoria<select id="e-categoria">${opts(catNames(), o.categoria)}</select></label>
    <label>Forma de pagamento<select id="e-forma">${opts(formas(), o.forma)}</select></label>
    <label>Quem<select id="e-quem">${opts([...c.pessoas,"Casal"], o.quem)}</select></label>
    <label>Descrição<input id="e-descricao" value="${esc(o.descricao)}"></label>`;
  else if (kind==="parcela") fields = `
    <label class="full">Descrição<input id="e-descricao" value="${esc(o.descricao)}"></label>
    <label>Valor da parcela<input id="e-valor" inputmode="decimal" value="${o.valor!=null?String(o.valor).replace(".",","):""}"></label>
    <label>Nº de parcelas<input id="e-n" type="number" min="1" value="${esc(o.n)}"></label>
    <label>1ª parcela em<input type="month" id="e-inicio" value="${esc(o.inicio)}"></label>
    <label>Categoria<select id="e-categoria">${opts(catNames(), o.categoria)}</select></label>
    <label>Forma de pagamento<select id="e-forma">${opts(formas(), o.forma)}</select></label>
    <label>Quem<select id="e-quem">${opts([...c.pessoas,"Casal"], o.quem)}</select></label>`;
  else if (kind==="separado") fields = `
    <label>Para quê<select id="e-para">${METAS.map(([k,t])=>`<option value="${k}" ${o.para===k?"selected":""}>${t}</option>`).join("")}</select></label>
    <label>Valor (R$)<input id="e-valor" inputmode="decimal" value="${o.valor!=null?String(o.valor).replace(".",","):""}"></label>
    <label>Do dinheiro de<input type="month" id="e-mes" value="${esc(o.mes)}"></label>
    <label>Quem<select id="e-quem">${opts([...c.pessoas,"Casal"], o.quem)}</select></label>
    <label class="full">Descrição<input id="e-descricao" value="${esc(o.descricao)}" placeholder="ex.: dízimo na igreja, Caixinha Nubank"></label>
    <p class="sub full">Guardou na reserva? O saldo da reserva sobe junto.</p>`;
  else fields = `
    <label>Mês<input type="month" id="e-mes" value="${esc(o.mes)}"></label>
    <label>Valor (R$)<input id="e-valor" inputmode="decimal" value="${o.valor!=null?String(o.valor).replace(".",","):""}"></label>
    <label>Quem<select id="e-quem">${opts([...c.pessoas,"Casal"], o.quem)}</select></label>
    <label>Tipo<select id="e-tipo">${opts(ENTRY_TYPES, o.tipo, false)}</select></label>
    <label class="full">Descrição<input id="e-descricao" value="${esc(o.descricao)}"></label>`;
  const anexos = String(o.comprovante||"").split(/\s+/).filter(Boolean).map((u,k)=>`<a class="btn ghost" href="${esc(u)}" target="_blank" rel="noopener">Ver print ${k+1} no Drive</a>`).join("");
  $("#modalRoot").innerHTML = `<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="${title}">
    <h2>${id?"Editar":"Novo"}: ${title.toLowerCase()}</h2>
    <div class="fgrid">${fields}</div>
    ${anexos?`<div class="toolbar" style="justify-content:flex-start">${anexos}</div>`:""}
    <div class="acts">${id?`<button class="btn danger" data-delete="${kind}:${esc(id)}">Apagar</button>`:"<span></span>"}<span style="display:flex;gap:8px"><button class="btn ghost" data-close="1">Cancelar</button><button class="btn" data-store="${kind}:${esc(id||"")}">Salvar</button></span></div>
  </div></div>`;
}
async function storeEdit(kind, id){
  const g = f => document.getElementById("e-"+f)?.value ?? "";
  let body;
  if (kind==="gasto") body = {data:g("data"), valor:num(g("valor")), categoria:g("categoria"), forma:g("forma"), quem:g("quem"), descricao:g("descricao")};
  else if (kind==="parcela") body = {descricao:g("descricao"), valor:num(g("valor")), n:Number(g("n"))||1, inicio:g("inicio"), categoria:g("categoria"), forma:g("forma"), quem:g("quem")};
  else if (kind==="separado") body = {mes:g("mes"), para:g("para"), valor:num(g("valor")), quem:g("quem")||"Casal", descricao:g("descricao")};
  else body = {mes:g("mes"), valor:num(g("valor")), quem:g("quem")||"Casal", tipo:g("tipo"), descricao:g("descricao")};
  if (!body.valor){ toast("Informe o valor."); return; }
  const list = listaDe(kind);
  const old = id ? list.find(x=>x.id===id) : null;
  mudar("salvar", kind, id ? {...old, ...body, id} : {...body, criadoPor:S.me||"", criadoEm:new Date().toISOString()});
  $("#modalRoot").innerHTML = ""; toast(navigator.onLine ? "Salvo" : "Salvo no celular. Sobe quando a internet voltar."); if (kind === "gasto" && !id) setTimeout(() => dicaPontos(body.descricao), 2800);
}
async function deleteItem(kind, id){
  const btn = document.querySelector(`[data-delete="${kind}:${id}"]`);
  if (btn && !btn.dataset.sure){ btn.dataset.sure = "1"; btn.textContent = "Toque de novo para apagar"; return; }
  mudar("apagar", kind, {id}); $("#modalRoot").innerHTML = ""; toast("Apagado");
}

/* ---------- salvar configurações ---------- */
async function saveConfig(patch){
  S.config = {...cfg(), ...patch};
  const conf = {}, app = {};
  for (const [k,v] of Object.entries(patch)) (CONFIG_KEYS.includes(k) ? conf : app)[k] = v;
  if (Object.keys(conf).length) enfileirar({a:"config", config:conf});
  if (Object.keys(app).length) enfileirar({a:"app", app});
  guardarLocal(); render(); toast("Salvo"); enviar();
}
function keepForms(){
  const c = cfg(); const patch = {};
  if (document.querySelector("[data-cat-n]")) patch.categorias = [...document.querySelectorAll("[data-cat-n]")].map(el=>({nome:el.value, orcamento:num(document.querySelector(`[data-cat-v="${el.dataset.catN}"]`)?.value)}));
  if (document.querySelector("[data-fix-n]")){ patch.fixas = [...document.querySelectorAll("[data-fix-n]")].map(el=>({nome:el.value, valor:num(document.querySelector(`[data-fix-v="${el.dataset.fixN}"]`)?.value)})); patch.fixasDia = {...(c.fixasDia||{})}; document.querySelectorAll("[data-fix-n]").forEach(el => { const v = Number(document.querySelector(`[data-fix-d="${el.dataset.fixN}"]`)?.value); if (el.value) patch.fixasDia[el.value] = v||null; }); }
  if (document.querySelector("[data-card-n]")) patch.cartoes = [...document.querySelectorAll("[data-card-n]")].map(el=>({nome:el.value, fecha:Number(document.querySelector(`[data-card-f="${el.dataset.cardN}"]`)?.value)||"", vence:Number(document.querySelector(`[data-card-v="${el.dataset.cardN}"]`)?.value)||""}));
  S.config = {...c, ...patch};
}
function collectRows(prefixN, prefixV, numericV=true){
  const out = []; document.querySelectorAll(`[data-${prefixN}]`).forEach(el=>{ const i = el.getAttribute(`data-${prefixN}`); const v = document.querySelector(`[data-${prefixV}="${i}"]`)?.value; if (el.value.trim()) out.push([el.value.trim(), numericV ? num(v) : v, i]); }); return out;
}

/* ---------- exportar ---------- */
async function exportCSV(){
  const q = s => `"${String(s??"").replace(/"/g,'""')}"`;
  const lines = [["tipo","data/mes","mes que conta","valor","categoria/tipo","quem","forma","descricao","parcelas"].join(";")];
  S.gastos.forEach(g=>lines.push(["gasto",g.data,compMonth(g),String(num(g.valor)).replace(".",","),g.categoria,g.quem,g.forma,g.descricao,""].map(q).join(";")));
  S.parcelas.forEach(p=>lines.push(["parcela",p.inicio,p.inicio,String(num(p.valor)).replace(".",","),p.categoria,p.quem,p.forma,p.descricao,p.n].map(q).join(";")));
  S.entradas.forEach(e=>lines.push(["entrada",e.mes,e.mes,String(num(e.valor)).replace(".",","),e.tipo,e.quem,"",e.descricao,""].map(q).join(";")));
  const blob = new Blob(["\ufeff"+lines.join("\n")], {type:"text/csv;charset=utf-8"});
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `financas-${today()}.csv`; document.body.append(a); a.click(); setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}

/* ---------- eventos ---------- */
document.addEventListener("click", async ev => {
  const t = ev.target.closest("button, .overlay"); if (!t) return;
  const d = t.dataset;
  if (d.go) return go(d.go);
  if (d.themePreset) return setLocalTheme({preset:d.themePreset, accent:"", fd:"", fb:""});
  if (d.themeSet){ const [k,v] = d.themeSet.split(":"); return setLocalTheme({[k]:v}); }
  if (d.accent!=null) return setLocalTheme({accent:d.accent});
  if (d.act==="themeReset") return setLocalTheme({}, true);
  if (d.act==="themeCopy"){ const other = cfg().pessoas.find(n=>n!==S.me); if (!other) return; const tema = cfg().perfis?.[other]?.tema || {}; toast(`Visual de ${other} copiado`); return setLocalTheme(JSON.parse(JSON.stringify(tema)), true); }
  if (d.act==="switchPerson"){ S.desbloqueado = false; S.lockPessoa = ""; applyTheme(); return render(); }
  if (d.gatequem){ S.gateQuem = d.gatequem; S.gateMsg = ""; tentouAuto = false; return render(); }
  if (d.act==="gateVoltar"){ S.gateQuem = ""; S.gateFamilia = false; S.gateMsg = ""; return render(); }
  if (d.act==="gateFamilia"){ S.gateFamilia = true; S.gateMsg = ""; return render(); }
  if (d.act==="voltarPessoas"){ S.lockPessoa = ""; S.loginMsg = ""; S.bioTentado = false; return render(); }
  if (d.act==="bioEntrar") return entrarBio();
  if (d.act==="bioLigar"){ if (!(await bioDisponivel())) return toast("Este aparelho não tem digital ou rosto liberados para o navegador."); return ativarBio(); }
  if (d.act==="bioDesligar"){ ls.set("bio:" + S.me, ""); toast("Digital/rosto desligados neste aparelho."); return render(); }
  if (d.person){ S.lockPessoa = d.person; S.loginMsg = ""; S.bioTentado = false; return render(); }
  if (d.emoji) return setAvatar({tipo:"emoji", valor:d.emoji});
  if (d.act==="avatarLetter") return setAvatar({tipo:"letra"});
  if (d.act==="avatarPhoto") return $("#avatarPick").click();
  if (d.m){ S.mes = addM(S.mes, Number(d.m)); return render(); }
  if (d.seg){ S.listSeg = d.seg; return render(); }
  if (d.metaseg){ S.metaSeg = d.metaseg; render(); return window.scrollTo(0,0); }
  if (d.ajtab){ S.ajTab = d.ajtab; ls.set("ajTab", d.ajtab); render(); return window.scrollTo(0,0); }
  if (d.new) return openEditor(d.new, null, d.para);
  if (d.edit) return openEditor(d.edit, d.id);
  if (d.close && (t.classList.contains("btn") || ev.target === t)) { $("#modalRoot").innerHTML = ""; return; }
  if (d.store){ const [k,id] = d.store.split(":"); return storeEdit(k, id); }
  if (d.delete){ const [k,id] = d.delete.split(":"); return deleteItem(k, id); }
  if (d.sug){ if (S.tab!=="assistente") go("assistente"); const a = $("#ask"); if (a){ a.value = d.sug; } return sendMsg(); }
  if (d.speak) return speak(S.chat[Number(d.speak)]?.text||"");
  if (d.comia != null){ const m = S.chat[Number(d.comia)]; if (!m?._orig) return; if (!navigator.onLine) return toast("Precisa de internet para usar a IA."); m.items = []; m.text += "\n(Pedi para a IA ler de novo.)"; S.forcarIA = true; const {text, files} = m._orig; m._orig = null;
    S.pendingImgs = files.map(f => ({file:f, url:URL.createObjectURL(f)})); const box = $("#ask"); if (box) box.value = text; else ls.set("draft", text); return sendMsg(); }
  if (d.rmimg){ const p = S.pendingImgs.splice(Number(d.rmimg),1)[0]; if (p) URL.revokeObjectURL(p.url); return render(); }
  if (d.confirm) return confirmItems(Number(d.confirm));
  if (d.discard){ const m = S.chat[Number(d.discard)]; m.items = []; m.text += "\n(Descartado)"; saveChat(); return render(); }
  if (d.add || d.delCat!=null || d.delFix!=null || d.delCard!=null) keepForms();
  if (d.add){ const c = cfg();
    if (d.add==="cat") S.config = {...c, categorias:[...c.categorias,{nome:"",orcamento:0}]};
    if (d.add==="fix") S.config = {...c, fixas:[...c.fixas,{nome:"",valor:0}]};
    if (d.add==="card") S.config = {...c, cartoes:[...c.cartoes,{nome:"",fecha:"",vence:""}]};
    return render(); }
  if (d.delCat!=null){ const c = cfg(); S.config = {...c, categorias:c.categorias.filter((_,i)=>i!=d.delCat)}; return render(); }
  if (d.delFix!=null){ const c = cfg(); S.config = {...c, fixas:c.fixas.filter((_,i)=>i!=d.delFix)}; return render(); }
  if (d.delCard!=null){ const c = cfg(); S.config = {...c, cartoes:c.cartoes.filter((_,i)=>i!=d.delCard)}; return render(); }
  if (d.save){
    const c = cfg();
    if (d.save==="metas"){
      const marc = k => new Set([...document.querySelectorAll(`[data-base="${k}"]:checked`)].map(x=>x.value));
      const M = Object.fromEntries(METAS.map(([k]) => [k, marc(k)]));
      const lista = fontes().map(f => { const [quem, tipo] = f.split("|"); return {quem, tipo, dizimo:M.dizimo.has(f), reserva:M.reserva.has(f), investimentos:M.investimentos.has(f)}; });
      return saveConfig({metas:{dizimo:num($("#meta-dizimo").value)/100, reserva:num($("#meta-reserva").value)/100, investimentos:num($("#meta-investimentos").value)/100}, fontes:lista, bases:null});
    }
    if (d.save==="reserva") return saveConfig({reserva:{saldo:num($("#res-saldo").value), meses:Number($("#res-meses").value)||6, atualizado:today()}});
    if (d.save==="assistente") return saveConfig({nomeAssistente:$("#nomeA").value.trim()||"Fina", regrasQuem:$("#regras").value});
    if (d.save==="cats") return saveConfig({categorias: collectRows("cat-n","cat-v").map(([n,v])=>({nome:n, orcamento:v}))});
    if (d.save==="fixas"){ const rows = collectRows("fix-n","fix-v"); const dias = {}; rows.forEach(([n,,i]) => { const v = Number(document.querySelector(`[data-fix-d="${i}"]`)?.value); dias[n] = v>=1 && v<=31 ? v : null; }); return saveConfig({fixas: rows.map(([n,v])=>({nome:n, valor:v})), fixasDia: dias}); }
    if (d.save==="cartoes") return saveConfig({cartoes: collectRows("card-n","card-f",false).map(([n,f,i])=>({nome:n, fecha:Number(f)||"", vence:Number(document.querySelector(`[data-card-v="${i}"]`)?.value)||""}))});
  }
  if (d.act==="olho"){ S.ver = !S.ver; return render(); }
  if (d.act==="print"){ if (S.tab!=="assistente") go("assistente"); return $("#filePick").click(); }
  if (d.act==="falar"){ go("assistente"); return startMic(); }
  if (d.act==="mic") return startMic();
  if (d.act==="send") return sendMsg();
  if (d.act==="stop"){ S.ctl?.abort(); return; }
  if (d.act==="testvoice") return speak(`Oi! Eu sou a ${cfg().nomeAssistente}. Ainda dá pra gastar ${money0(month(S.mes).ainda)} este mês.`);
  if (d.act==="export") return exportCSV();
  if (d.act==="taxas"){ toast("Buscando as taxas…"); return atualizarTaxas(true).then(()=>render()); }
  if (d.act==="novoObjetivo") return editarObjetivo(null);
  if (d.act==="radar"){ toast("Buscando promoções…"); return atualizarRadar(true).then(()=>render()); }
  if (d.act==="novoSaldo") return editarSaldo(null);
  if (d.saldoedit) return editarSaldo(d.saldoedit);
  if (d.saldosave != null) return salvarSaldo(d.saldosave);
  if (d.saldodel){ const btn = document.querySelector(`[data-saldodel="${d.saldodel}"]`); if (btn && !btn.dataset.sure){ btn.dataset.sure = "1"; btn.textContent = "Toque de novo para apagar"; return; } $("#modalRoot").innerHTML = ""; return saveConfig({milhas:{...(cfg().milhas||{}), saldos:(cfg().milhas?.saldos||[]).filter(x=>x.id!==d.saldodel)}}); }
  if (d.calc){ S.calcModo = d.calc; return render(); }
  if (d.act==="salvarProgCartoes"){ const cs = {}; document.querySelectorAll("[data-progcard]").forEach(el => { const n = el.dataset.progcard; cs[n] = {programa: el.value, pts: num(document.querySelector(`[data-ptscard="${n}"]`)?.value)}; }); return saveConfig({milhas:{...(cfg().milhas||{}), cartoes: cs}}); }
  if (d.act==="salvarLimites"){ const l = {}; document.querySelectorAll("[data-limite]").forEach(el => l[el.dataset.limite] = num(el.value) || null); return saveConfig({limites: l}); }
  if (d.act==="novaDivida") return editarDivida(null);
  if (d.divedit) return editarDivida(d.divedit);
  if (d.divsave != null) return salvarDivida(d.divsave);
  if (d.divdel) return apagarLista("dividas", d.divdel, "divdel");
  if (d.act==="novoBem") return editarBem(null);
  if (d.bemedit) return editarBem(d.bemedit);
  if (d.bemsave != null) return salvarBem(d.bemsave);
  if (d.bemdel) return apagarLista("bens", d.bemdel, "bemdel");
  if (d.act==="novaRep") return editarRep(null);
  if (d.repedit) return editarRep(d.repedit);
  if (d.repsave != null) return salvarRep(d.repsave);
  if (d.repdel) return apagarLista("recorrentes", d.repdel, "repdel");
  if (d.act==="salvarNota"){ return saveConfig({notas:{...(cfg().notas||{}), [S.mes]: ($("#notaMes")?.value||"").trim()}}); }
  if (d.atencao){ const [acao, arg] = d.atencao.split("|"); if (acao === "metas"){ S.metaSeg = "metas"; if (arg) S.mes = arg; return go("metas"); } if (acao === "contas"){ S.dobras = {...(S.dobras||{}), contas:true}; return render(); } if (acao === "fila") return processarFilaIA(); if (acao === "milhas"){ S.metaSeg = "milhas"; return go("metas"); } }
  if (d.act==="colarQuadro") return colarQuadro();
  if (d.act==="novaMetaVida") return editarMetaVida(null);
  if (d.mvedit) return editarMetaVida(d.mvedit);
  if (d.mvsave != null) return salvarMetaVida(d.mvsave);
  if (d.mvdel){ const btn = document.querySelector(`[data-mvdel="${d.mvdel}"]`); if (btn && !btn.dataset.sure){ btn.dataset.sure = "1"; btn.textContent = "Toque de novo para apagar"; return; } $("#modalRoot").innerHTML = ""; return saveConfig({quadro:{...(cfg().quadro||{}), itens: quadroItens().filter(x => x.id !== d.mvdel)}}); }
  if (d.mvfeito) return marcarMetaVida(d.mvfeito);
  if (d.hab) return marcarHabito(...d.hab.split("|"));
  if (d.qmodo){ S.quadroModo = d.qmodo; return render(); }
  if (d.qarea != null){ S.quadroArea = d.qarea; return render(); }
  if (d.act==="abrirQuadro"){ S.metaSeg = "quadro"; return go("metas"); }
  if (d.objedit) return editarObjetivo(d.objedit);
  if (d.objsave != null) return salvarObjetivo(d.objsave);
  if (d.objdel) return apagarObjetivo(d.objdel);
  if (d.act==="salvarPerfil"){ const r = {...(cfg().perfilInvest?.resp||{}), ...(S.perfilResp||{})}; if (Object.keys(r).length < PERFIL_Q.length) return toast("Responda as 4 perguntas."); return saveConfig({perfilInvest:{perfil: perfilDe(r), resp: r, data: today()}}); }
});
document.addEventListener("change", ev => {
  const t = ev.target;
  if (t.dataset.pago != null){ marcarPago(t.dataset.pago, t.checked); return; }
  if (t.dataset.tipocat != null){ saveConfig({tipoCat:{...(cfg().tipoCat||{}), [t.dataset.tipocat]: t.value}}); return; }
  if (t.dataset.mg != null){ const v = {...(cfg().consignado||{}), [t.dataset.mg]: num(t.value)}; saveConfig({consignado: v}); return; }
  if (t.dataset.perfilq != null){ S.perfilResp = {...(S.perfilResp||{}), [t.dataset.perfilq]: Number(t.value)}; return; }
  if (t.dataset.calcin != null){ S.calc = {...(S.calc||{}), [t.dataset.calcin]: t.type === "number" || t.inputMode === "decimal" ? num(t.value) : t.value}; render(); return; }
  if (t.id === "simValor" || t.id === "simAporte" || t.id === "simMeses"){ S.sim = {valor:num($("#simValor")?.value), aporte:num($("#simAporte")?.value), meses:Number($("#simMeses")?.value)||12}; render(); return; }
  if (t.id==="fCat"){ S.fCat = t.value; render(); }
  if (t.id==="fQuem"){ S.fQuem = t.value; render(); }
  if (t.id==="speakOn"){ S.speakOn = t.checked; if (S.me) ls.set("speakOn:"+S.me, S.speakOn); if (!t.checked) window.speechSynthesis?.cancel(); }
  if (t.id==="voice"){ S.voiceName = t.value; if (S.me) ls.set("voice:"+S.me, S.voiceName); }
  if (t.id==="fd"){ setLocalTheme({fd:t.value}); }
  if (t.id==="fb"){ setLocalTheme({fb:t.value}); }
  if (t.id==="accentPick"){ setLocalTheme({accent:t.value}); }
  if (t.dataset.secao){ const cur = themeNow().secoes; setLocalTheme({secoes:{...cur, [t.dataset.secao]:t.checked}}); }
  if (t.dataset.skip){ const [i,j] = t.dataset.skip.split("-").map(Number); readProposal(i); S.chat[i].items[j].skip = !t.checked; render(); }
  if (t.id==="avatarPick" && t.files[0]){
    const f = t.files[0]; t.value = "";
    (async()=>{ try{ const b = await imgBase64(f, 160, .8); await setAvatar({tipo:"foto", valor:"data:image/jpeg;base64,"+b}); }catch{ toast("Não consegui usar essa foto."); } })();
  }
  if (t.id==="filePick"){
    for (const f of t.files) S.pendingImgs.push({file:f, url:URL.createObjectURL(f)});
    t.value = ""; render(); $("#ask")?.focus();
  }
});
document.addEventListener("input", ev => { if (ev.target.id==="ask") ls.set("draft", ev.target.value); });
document.addEventListener("keydown", ev => {
  if (ev.target.id==="ask" && ev.key==="Enter" && !ev.shiftKey && !matchMedia("(pointer:coarse)").matches){ ev.preventDefault(); sendMsg(); }
  if (ev.key==="Escape" && $("#modalRoot").innerHTML) $("#modalRoot").innerHTML = "";
});
document.addEventListener("paste", ev => {
  if (S.tab!=="assistente" || !S.imgOK) return;
  const files = [...(ev.clipboardData?.files||[])].filter(f=>f.type.startsWith("image/"));
  if (files.length){ files.forEach(f=>S.pendingImgs.push({file:f, url:URL.createObjectURL(f)})); render(); }
});
window.speechSynthesis?.addEventListener?.("voiceschanged", ()=>{ if (S.tab==="ajustes") render(); });



/* ---------- Início: quanto dá por dia ---------- */
function hojeDa(M, mv){
  const agora = new Date(); if (S.mes !== ymOf(agora)) return "";
  const fim = new Date(agora.getFullYear(), agora.getMonth()+1, 0).getDate();
  const dias = fim - agora.getDate() + 1;
  if (M.ainda <= 0) return `<div class="hoje">Segura os gastos: o mês já passou do limite.</div>`;
  return `<div class="hoje">Hoje dá <b class="num">${mv(M.ainda/dias)}</b> por dia · faltam ${dias} ${dias===1?"dia":"dias"}</div>`;
}
/* ---------- contas fixas do mês com "paguei" ---------- */
function pagosDoMes(ym){ return cfg().pagos?.[ym] || {}; }
function marcarPago(nome, v){
  const patch = {pagos:{[S.mes]:{[nome]:v}}};
  S.config = juntar(cfg(), patch); enfileirar({a:"app", app:patch}, `pago:${S.mes}:${nome}`); guardarLocal(); render(); enviar();
  toast(v ? `${nome}: paga ✓` : `${nome}: desmarcada`);
}
function cardContas(M, mv){
  const c = cfg(), pg = pagosDoMes(S.mes), dias = c.fixasDia || {};
  const lista = [...c.fixas].sort((a,b) => (dias[a.nome]||99) - (dias[b.nome]||99));
  const pagas = lista.filter(f => pg[f.nome]), falta = lista.filter(f => !pg[f.nome]).reduce((s,f)=>s+num(f.valor),0);
  const hoje = new Date(), atual = S.mes === ymOf(hoje);
  const linhas = lista.map(f => { const d = dias[f.nome]; const atras = atual && d && !pg[f.nome] && d < hoje.getDate(); const logo = atual && d && !pg[f.nome] && d >= hoje.getDate() && d - hoje.getDate() <= 3;
    return `<label class="conta ${pg[f.nome]?"paga":""}"><input type="checkbox" data-pago="${esc(f.nome)}" ${pg[f.nome]?"checked":""}><span class="t"><b>${esc(f.nome)}</b><small class="${atras?"bad":logo?"warn":""}">${d ? (atras ? `venceu dia ${d}` : `vence dia ${d}`) : "sem dia definido"}</small></span><span class="num">${mv(f.valor)}</span></label>`; }).join("");
  return `<section class="card"><div class="head"><h2>Contas do mês</h2><span class="sub num">${pagas.length} de ${lista.length} pagas</span></div>
    <div class="bar" style="margin-bottom:10px"><i style="width:${lista.length?(pagas.length/lista.length*100).toFixed(1):0}%"></i></div>
    ${dobra("contas", falta ? `Falta pagar ${mv(falta)}` : "Tudo pago este mês ✓", `<div class="contas">${linhas}</div><p class="sub">O dia de cada conta fica em Ajustes → Finanças → Contas fixas.</p>`)}</section>`;
}
/* ---------- faturas dos cartões no mês ---------- */
function cardFaturas(M, mv){
  const c = cfg(), hoje = new Date(); hoje.setHours(0,0,0,0);
  const [y,m] = S.mes.split("-").map(Number);
  const cards = c.cartoes.map(k => {
    const total = M.gastos.filter(g => g.forma === k.nome).reduce((s,g)=>s+num(g.valor),0) + M.parcelas.filter(p => p.forma === k.nome).reduce((s,p)=>s+num(p.valor),0);
    const f = Number(k.fecha), v = Number(k.vence);
    const fecha = f ? new Date(y, m-1, f) : null;                         // a fatura do mês fecha neste mês
    const vence = v ? new Date(y, m-1 + (v <= f ? 1 : 0), v) : null;      // e vence depois do fechamento
    const lim = num(c.limites?.[k.nome]); const livre = lim ? lim - usoCartao(k.nome) : null;
    return {nome:k.nome, total, fecha, vence, livre};
  }).filter(x => x.total || x.fecha);
  const quando = d => { if (!d) return ""; const n = Math.round((d - hoje)/864e5); return n === 0 ? "hoje" : n === 1 ? "amanhã" : n > 1 ? `em ${n} dias` : `${d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}`; };
  const totalGeral = cards.reduce((s,x)=>s+x.total,0);
  return `<section class="card"><div class="head"><h2>Faturas dos cartões</h2><span class="sub num">${mv(totalGeral)}</span></div>
    ${dobra("faturas", `${cards.length} cartões em ${mLabel(S.mes).split(" ")[0]}`, `<div class="closings">${cards.map(x => `<div class="closing"><span><b>${esc(x.nome)}</b><br><small class="sub">${x.fecha?`fecha ${quando(x.fecha)}`:""}${x.vence?` · vence ${quando(x.vence)}`:""}${x.livre!=null?` · limite livre ${mv(x.livre)}`:""}</small></span><span class="num">${mv(x.total)}</span></div>`).join("") || `<p class="sub">Nenhum cartão com gasto neste mês.</p>`}</div><p class="sub">Dia que fecha, que vence e limite ficam em Ajustes → Finanças → Cartões.</p>`)}</section>`;
}
/* ---------- próximos meses ---------- */
function renderFuturo(){
  const base = ymOf(new Date());
  const meses = Array.from({length:7},(_,k)=>addM(base,k)).map(ym => {
    const x = month(ym); const acabam = S.parcelas.filter(p => fimParcela(p) === addM(ym,-1));
    return {ym, x, sobra: x.entrou - x.separado - x.fixas - x.parc, liberou: acabam.reduce((s,p)=>s+num(p.valor),0), acabam};
  });
  const max = Math.max(1, ...meses.map(z => z.x.entrou));
  return `<section class="card"><div class="head"><h2>Quanto sobra para o dia a dia</h2></div>
    <p class="sub">Entradas lançadas menos o que já está comprometido: separado, contas fixas e parcelas. Não conta os gastos do dia a dia que ainda vão acontecer.</p>
    <div class="futuro">${meses.map(z => `<div class="fmes">
      <div class="line"><b>${esc(mTitle(z.ym))}</b><b class="num ${z.sobra<0?"neg":""}">${money0(z.sobra)}</b></div>
      <div class="fbar" aria-hidden="true"><i class="c1" style="width:${(z.x.separado/max*100).toFixed(1)}%"></i><i class="c2" style="width:${(z.x.fixas/max*100).toFixed(1)}%"></i><i class="c3" style="width:${(z.x.parc/max*100).toFixed(1)}%"></i><i class="c4" style="width:${(Math.max(0,z.sobra)/max*100).toFixed(1)}%"></i></div>
      <small class="sub num">entra ${money0(z.x.entrou)} · parcelas ${money0(z.x.parc)}${z.x.dia ? ` · já gasto ${money0(z.x.dia)}` : ""}</small>
      ${z.acabam.length ? `<small class="sub">Acabaram no mês anterior: ${z.acabam.map(p=>esc(p.descricao)).join(", ")} <b>(+${money0(z.liberou)} livres)</b></small>` : ""}
    </div>`).join("")}</div>
    <div class="chips" style="margin-top:8px"><span class="chip"><i class="lg c1"></i>Separado</span><span class="chip"><i class="lg c2"></i>Contas fixas</span><span class="chip"><i class="lg c3"></i>Parcelas</span><span class="chip"><i class="lg c4"></i>Sobra</span></div>
    <p class="sub">Quer saber se cabe uma compra? Pergunte para a ${esc(cfg().nomeAssistente)}: “posso comprar um tênis de 300 em 3x?”</p></section>`;
}

/* ---------- investir: taxas do dia, objetivos, simulador ---------- */
const IR = dias => dias <= 180 ? .225 : dias <= 360 ? .20 : dias <= 720 ? .175 : .15;
async function atualizarTaxas(forcar){
  const t = cfg().taxas; if (!forcar && t?.quando && Date.now() - t.quando < 6*36e5) return;
  let novas = null;
  try{ const r = await api({a:"taxas"}); if (r.ok && r.selic) novas = r; }catch{}
  if (!novas){   // robô antigo: tenta direto no Banco Central
    try{
      const ult = async cod => { const j = await (await fetch(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.${cod}/dados/ultimos/1?formato=json`)).json(); return {v: num(j[0].valor), d: j[0].data}; };
      const [sel, cdi, ipca] = await Promise.all([ult(432), ult(4389), ult(13522)]);
      let dol = null; try{ dol = (await ult(1)).v; }catch{}
      novas = {selic: sel.v, cdi: cdi.v, ipca12: ipca.v, dolar: dol, data: sel.d};
    }catch{}
  }
  if (novas){ S.config = {...cfg(), taxas: {selic:novas.selic, cdi:novas.cdi, ipca12:novas.ipca12, dolar:novas.dolar, data:novas.data, quando: Date.now()}}; guardarLocal(); if (S.tab === "metas") render(); }
}
function taxasAgora(){ const t = cfg().taxas || {}; const selic = num(t.selic), cdi = num(t.cdi) || (selic ? selic - 0.1 : 0);
  const poup = selic > 8.5 ? (Math.pow(1.005, 12) - 1) * 100 : selic * 0.7;   // 0,5% ao mês + TR, ou 70% da Selic
  return {selic, cdi, ipca: num(t.ipca12), poup, data: t.data || "", ok: !!selic}; }
const mensal = aa => Math.pow(1 + aa/100, 1/12) - 1;
/* cresce mês a mês; imposto (quando tem) sobre o ganho, pela tabela do prazo total */
function simular(valor, aporte, meses, aa, temIR){
  const i = mensal(aa); let saldo = valor;
  for (let k = 0; k < meses; k++) saldo = saldo * (1 + i) + (k < meses ? aporte : 0);
  const investido = valor + aporte * meses, ganho = saldo - investido;
  const imposto = temIR && ganho > 0 ? ganho * IR(meses * 30) : 0;
  return {final: saldo - imposto, ganho: ganho - imposto, investido};
}
function opcoesInvest(){
  const t = taxasAgora();
  return [
    {nome:"Poupança", aa:t.poup, ir:false, liquidez:"a qualquer hora", obs:"Rende pouco; só vale para valores bem pequenos."},
    {nome:"Tesouro Selic", aa:t.selic, ir:true, liquidez:"no dia seguinte", obs:"Título do governo; o mais seguro do país. Taxa de custódia da B3 só acima de R$ 10 mil."},
    {nome:"CDB 100% do CDI, liquidez diária", aa:t.cdi, ir:true, liquidez:"a qualquer hora", obs:"Escolha banco com garantia do FGC (até R$ 250 mil por banco)."},
    {nome:"LCI/LCA 90% do CDI", aa:t.cdi*0.9, ir:false, liquidez:"só no vencimento ou após a carência", obs:"Não paga imposto; bom para objetivos com data marcada."},
  ];
}
function objetivosTodos(){
  const c = cfg(), M = month(ymOf(new Date()));
  const metaRes = num(c.reserva.meses) * (M.fixas + c.categorias.reduce((s,k)=>s+num(k.orcamento),0));
  const reserva = {id:"reserva", nome:"Reserva de emergência", tipo:"reserva", meta: Math.round(metaRes), jaTem: num(c.reserva.saldo), data:"", fixo:true};
  return [reserva, ...(c.objetivos || [])];
}
const TIPOS_OBJ = [["reserva","Reserva (dinheiro para imprevistos)"],["curto","Até 1 ano"],["medio","De 1 a 5 anos"],["aposentadoria","Aposentadoria"],["bolsa","Bolsa (longo prazo, aceita sobe e desce)"]];
function guiaObjetivo(tipo){
  return ({
    reserva: "Precisa poder tirar no mesmo dia e não pode cair. Tesouro Selic ou CDB com liquidez diária que pague 100% do CDI ou mais, com FGC. Nada de poupança (rende menos) nem bolsa.",
    curto: "Pouco tempo: segurança e liquidez. Tesouro Selic, CDB com liquidez diária ou CDB/LCI/LCA que vença antes da data do objetivo.",
    medio: "Pode travar até a data: CDB, LCI ou LCA com vencimento perto da data (LCI/LCA não pagam imposto), ou Tesouro prefixado/IPCA+ que vença no prazo.",
    aposentadoria: "Longo prazo e proteção contra a inflação: Tesouro IPCA+ com vencimento perto da aposentadoria. Previdência (PGBL) só compensa para quem faz a declaração completa do IR.",
    bolsa: "Só com a reserva completa. Uma parte pequena, por ETFs (fundos que já compram várias empresas de uma vez), aportes todo mês e paciência de anos. Evite ações da moda, day trade, cripto e robôs que prometem ganho.",
  })[tipo] || "";
}
function taxaObjetivo(tipo){ const t = taxasAgora(); return tipo === "medio" ? {aa: t.cdi*0.9, ir:false} : {aa: tipo === "bolsa" ? t.cdi : t.cdi, ir: true}; }
function aporteNecessario(o){
  if (!o.data) return null; const meses = Math.max(1, mDiff(ymOf(new Date()), o.data.slice(0,7)));
  const {aa, ir} = taxaObjetivo(o.tipo); const i = mensal(aa) * (ir ? 1 - IR(meses*30) : 1);
  const fv = num(o.jaTem) * Math.pow(1+i, meses); const falta = num(o.meta) - fv; if (falta <= 0) return {meses, valor:0};
  return {meses, valor: i ? falta * i / (Math.pow(1+i, meses) - 1) : falta / meses};
}
const PERFIL_Q = [
  ["Se o investimento caísse 10% em um mês, vocês…", ["Tirariam tudo na hora", "Ficariam preocupados, mas esperariam", "Aproveitariam para colocar mais"]],
  ["Por quanto tempo podem deixar o dinheiro sem mexer?", ["Menos de 1 ano", "De 1 a 5 anos", "Mais de 5 anos"]],
  ["A reserva de emergência está completa?", ["Ainda não", "Mais da metade", "Sim, completa"]],
  ["Já investiram em algo além de poupança?", ["Não", "Em renda fixa (CDB, Tesouro)", "Também em bolsa"]],
];
function perfilDe(resp){ const s = PERFIL_Q.reduce((t,_,i)=>t + (resp[i] ?? 0), 0); return s <= 2 ? "Conservador" : s <= 5 ? "Moderado" : "Arrojado"; }
function renderInvestir(){
  atualizarTaxas();
  const t = taxasAgora(), c = cfg(), objs = objetivosTodos();
  const patrimonio = objs.reduce((s,o)=>s+num(o.jaTem),0);
  const sim = S.sim || {valor: num(c.reserva.saldo) || 1000, aporte: 300, meses: 12};
  const perfil = c.perfilInvest?.perfil;
  const taxasCard = `<section class="card"><div class="head"><h2>Taxas de hoje</h2><span class="sub">${t.ok ? "Banco Central · " + esc(t.data) : "buscando…"}</span></div>
    ${t.ok ? `<div class="taxas"><div><small>Selic</small><b class="num">${t.selic.toFixed(2).replace(".",",")}%</b><span>ao ano</span></div><div><small>CDI</small><b class="num">${t.cdi.toFixed(2).replace(".",",")}%</b><span>ao ano</span></div><div><small>Inflação (IPCA)</small><b class="num">${t.ipca.toFixed(2).replace(".",",")}%</b><span>em 12 meses</span></div><div><small>Poupança</small><b class="num">${t.poup.toFixed(2).replace(".",",")}%</b><span>ao ano</span></div></div>
    <p class="sub">Com a inflação em ${t.ipca.toFixed(1).replace(".",",")}%, o que rende mais que isso faz o dinheiro crescer de verdade. A poupança está rendendo ${(t.poup - t.ipca).toFixed(1).replace(".",",")} ponto(s) acima da inflação; o CDI, ${(t.cdi - t.ipca).toFixed(1).replace(".",",")}.</p>`
    : `<p class="sub">Ainda não consegui as taxas do Banco Central. Confira a internet. Se continuar, falta atualizar o robô da planilha.</p>`}
    <button class="btn ghost" data-act="taxas">Atualizar taxas</button></section>`;
  const objCard = `<section class="card"><div class="head"><h2>Objetivos</h2><span class="sub num">guardado: ${money0(patrimonio)}</span></div>
    <div class="objs">${objs.map(o => { const ap = aporteNecessario(o); const p = o.meta ? Math.min(100, num(o.jaTem)/num(o.meta)*100) : 0; const {aa, ir} = taxaObjetivo(o.tipo); const rend = num(o.jaTem) * mensal(aa) * (ir ? 1 - IR(365) : 1);
      return `<div class="obj"><button class="obj-head" ${o.fixo ? "" : `data-objedit="${esc(o.id)}"`}><b>${esc(o.nome)}</b><span class="num">${money0(o.jaTem)} de ${money0(o.meta)}</span></button>
        <div class="bar"><i style="width:${p.toFixed(1)}%"></i></div>
        <small class="sub">${o.data ? `até ${esc(mLabel(o.data.slice(0,7)))} · ` : ""}${ap ? (ap.valor ? `guardar <b>${money0(ap.valor)}/mês</b> para chegar lá` : "já chega lá com o que tem ✓") : (o.tipo === "reserva" ? `faltam ${money0(Math.max(0, o.meta - o.jaTem))}` : "")}${t.ok && o.jaTem ? ` · rende uns ${money0(rend)}/mês` : ""}</small>
        ${dobra("obj-"+o.id, "Onde costuma ficar", `<p class="sub">${esc(guiaObjetivo(o.tipo))}</p>`)}</div>`; }).join("")}</div>
    <button class="btn" data-act="novoObjetivo">${I.plus}Novo objetivo</button>
    <p class="sub">O saldo da reserva vem de Metas. O "já tem" de cada objetivo você atualiza tocando nele.</p></section>`;
  const linhasSim = opcoesInvest().map(o => ({o, r: simular(sim.valor, sim.aporte, sim.meses, o.aa, o.ir)}));
  const melhor = Math.max(...linhasSim.map(x => x.r.final));
  const simCard = `<section class="card"><div class="head"><h2>Quanto rende</h2><span class="sub">já sem o imposto</span></div>
    <div class="simin"><label>Tenho hoje (R$)<input id="simValor" inputmode="decimal" value="${String(Math.round(sim.valor))}"></label><label>Guardo por mês (R$)<input id="simAporte" inputmode="decimal" value="${String(Math.round(sim.aporte))}"></label><label>Por quantos meses<input id="simMeses" type="number" min="1" max="480" value="${sim.meses}"></label></div>
    ${t.ok ? `<div class="simres">${linhasSim.map(({o,r}) => `<div class="simrow ${r.final===melhor?"top":""}"><span><b>${esc(o.nome)}</b><small class="sub">resgate: ${esc(o.liquidez)}${o.ir?"":" · sem imposto"}</small></span><span class="num"><b>${money0(r.final)}</b><small class="sub">+${money0(r.ganho)}</small></span></div>`).join("")}</div>
    <p class="sub">Você colocaria ${money0(sim.valor + sim.aporte*sim.meses)} no total. Contas aproximadas com as taxas de hoje, que mudam.</p>` : `<p class="sub">Aparece quando as taxas chegarem.</p>`}</section>`;
  const resp = S.perfilResp || c.perfilInvest?.resp || {};
  const perfilCard = `<section class="card"><div class="head"><h2>Perfil de vocês</h2><span class="sub">${perfil ? esc(perfil) : "não respondido"}</span></div>
    ${dobra("perfil", perfil ? "Refazer o questionário" : "Responder (4 perguntas)", `${PERFIL_Q.map(([q, ops], qi) => `<fieldset class="pq"><legend>${esc(q)}</legend>${ops.map((o, oi) => `<label><input type="radio" name="pq${qi}" data-perfilq="${qi}" value="${oi}" ${resp[qi]===oi?"checked":""}> ${esc(o)}</label>`).join("")}</fieldset>`).join("")}<button class="btn" data-act="salvarPerfil">Ver nosso perfil</button>`)}
    ${perfil ? `<p class="sub">${perfil === "Conservador" ? "Segurança em primeiro lugar: renda fixa com liquidez e títulos do governo." : perfil === "Moderado" ? "Base em renda fixa, com uma parte pequena em investimentos que oscilam, depois da reserva completa." : "Aceitam oscilar em troca de mais retorno no longo prazo, sempre com a reserva completa antes."}</p>` : ""}</section>`;
  const guia = `<section class="card"><div class="head"><h2>Antes de investir</h2></div>
    ${dobra("guia", "O que fazer e o que evitar", `<ul class="guia"><li><b>Ordem certa:</b> 1º reserva de emergência completa, 2º objetivos com data, 3º aposentadoria, 4º bolsa.</li><li><b>FGC:</b> CDB, LCI e LCA têm garantia de até R$ 250 mil por banco. Tesouro é garantido pelo governo.</li><li><b>Liquidez:</b> dinheiro da reserva tem que sair no mesmo dia.</li><li><b>Evite:</b> promessas de ganho alto e rápido, pirâmides, "robôs" de day trade, investir com dinheiro que vai precisar logo, e produtos que você não entende.</li><li><b>Taxas:</b> prefira opções sem taxa de administração alta.</li></ul>`)}
    <p class="sub">A ${esc(c.nomeAssistente)} é educativa: mostra tipos de investimento, regras para escolher e contas. Ela não indica banco, corretora, fundo ou ação específicos; recomendação personalizada é serviço de consultor registrado na CVM.</p></section>`;
  return `<div class="settings">${cardPatrimonio()}${taxasCard}${objCard}${simCard}${perfilCard}${guia}</div>`;
}
function editarObjetivo(id){
  const o = id ? (cfg().objetivos||[]).find(x => x.id === id) : {nome:"", tipo:"medio", meta:"", jaTem:"", data:""};
  if (!o) return;
  $("#modalRoot").innerHTML = `<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="Objetivo">
    <h2>${id?"Editar":"Novo"} objetivo</h2>
    <div class="fgrid"><label class="full">Nome<input id="o-nome" value="${esc(o.nome)}" placeholder="ex.: viagem, trocar o carro"></label>
    <label class="full">Tipo<select id="o-tipo">${TIPOS_OBJ.map(([k,t])=>`<option value="${k}" ${o.tipo===k?"selected":""}>${t}</option>`).join("")}</select></label>
    <label>Quanto precisa (R$)<input id="o-meta" inputmode="decimal" value="${o.meta!==""?String(o.meta).replace(".",","):""}"></label>
    <label>Já tem (R$)<input id="o-ja" inputmode="decimal" value="${o.jaTem!==""?String(o.jaTem).replace(".",","):""}"></label>
    <label class="full">Até quando<input type="month" id="o-data" value="${esc((o.data||"").slice(0,7))}"></label></div>
    <div class="acts">${id?`<button class="btn danger" data-objdel="${esc(id)}">Apagar</button>`:"<span></span>"}<span style="display:flex;gap:8px"><button class="btn ghost" data-close="1">Cancelar</button><button class="btn" data-objsave="${esc(id||"")}">Salvar</button></span></div>
  </div></div>`;
}
function salvarObjetivo(id){
  const g = f => document.getElementById(f)?.value ?? "";
  const o = {id: id || ("o" + uid()), nome: g("o-nome").trim(), tipo: g("o-tipo"), meta: num(g("o-meta")), jaTem: num(g("o-ja")), data: g("o-data")};
  if (!o.nome || !o.meta) return toast("Dê um nome e quanto precisa.");
  const lista = (cfg().objetivos || []).filter(x => x.id !== o.id); lista.push(o);
  $("#modalRoot").innerHTML = ""; saveConfig({objetivos: lista});
}
function apagarObjetivo(id){
  const btn = document.querySelector(`[data-objdel="${id}"]`);
  if (btn && !btn.dataset.sure){ btn.dataset.sure = "1"; btn.textContent = "Toque de novo para apagar"; return; }
  $("#modalRoot").innerHTML = ""; saveConfig({objetivos: (cfg().objetivos || []).filter(x => x.id !== id)});
}
/* ---------- Nosso Quadro: metas da vida do casal (fica no App!A1 da planilha, chave "quadro") ----------
   item: {id, area, texto, obs, quem, prazo ("2027" ou "2027-03"), freq ("" meta | "dia" | "0".."6" dia da semana), prio (1-3), sonho (frase do mural), feito (data)}
   quadroDias: {"2026-11-09": [ids dos hábitos feitos nesse dia]} */
const AREAS_VIDA = [["pro","Profissional","#3F6FB5","Crescer na carreira"],["emo","Emocional","#C2456E","Cuidar de nós"],["esp","Espiritual","#7A5BB0","Deus no centro"],["fin","Financeira","#2F8A5F","Dinheiro em ordem"],["sau","Saúde","#D07A2D","Corpo e mente"],["fam","Família","#2E8B8B","Nossa família"],["laz","Lazer","#C98A1B","Viver bem"]];
const DIAS_SEM = ["domingo","segunda","terça","quarta","quinta","sexta","sábado"];
const MESES_C = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const areaDe = k => AREAS_VIDA.find(a => a[0] === k) || AREAS_VIDA[0];
const quadroItens = () => cfg().quadro?.itens || [];
const ehHabito = i => !!i.freq;
const freqTxt = f => !f ? "" : f === "dia" ? "todo dia" : "toda " + DIAS_SEM[Number(f)];
const prazoTxt = p => { if (!p) return ""; const [y,m] = String(p).split("-"); return m ? `${MESES_C[Number(m)-1]}/${y}` : y; };
const prazoFim = p => { const [y,m] = String(p).split("-"); return `${y}-${m || "12"}`; };
function faltaTxt(p){
  if (!p) return ""; const k = mDiff(ymOf(new Date()), prazoFim(p));
  return k < 0 ? "prazo passou" : k === 0 ? "é este mês!" : k === 1 ? "falta 1 mês" : `faltam ${k} meses`;
}
const corSoft = c => `color-mix(in srgb, ${c} 16%, var(--surface))`;
function semanaAtual(){ const d = new Date(); d.setHours(12,0,0,0); d.setDate(d.getDate() - d.getDay()); return Array.from({length:7}, (_,k) => { const x = new Date(d); x.setDate(d.getDate()+k); return `${x.getFullYear()}-${pad(x.getMonth()+1)}-${pad(x.getDate())}`; }); }
const habFeito = (id, dia) => (cfg().quadroDias?.[dia] || []).includes(id);

function marcarHabito(id, dia){
  if (dia > today()) return toast("Esse dia ainda não chegou.");
  const lista = new Set(cfg().quadroDias?.[dia] || []);
  lista.has(id) ? lista.delete(id) : lista.add(id);
  const arr = [...lista];
  S.config = {...cfg(), quadroDias: {...(cfg().quadroDias||{}), [dia]: arr}};
  enfileirar({a:"app", app:{quadroDias:{[dia]: arr}}}, "qd:" + dia); guardarLocal(); render(); enviar();
}
function marcarMetaVida(id){
  const itens = quadroItens().map(x => x.id === id ? {...x, feito: x.feito ? "" : today()} : x);
  const it = itens.find(x => x.id === id);
  saveConfig({quadro: {...(cfg().quadro||{}), itens}});
  if (it?.feito){ document.querySelectorAll(".toast").forEach(e => e.remove()); toast("Conquista! 🎉 Parabéns, vocês dois.", 3200); }
}
function linhaMetaVida(i){
  const a = areaDe(i.area);
  const pill = (t, extra="") => `<span class="mv-pill" style="background:${corSoft(a[2])};color:${a[2]}">${esc(t)}${extra}</span>`;
  return `<div class="mv-item ${i.feito ? "feito" : ""}">
    <button class="mv-box" data-mvfeito="${esc(i.id)}" aria-pressed="${!!i.feito}" aria-label="${i.feito ? "Desmarcar" : "Marcar como feita"}: ${esc(i.texto)}">${i.feito ? "✓" : ""}</button>
    <button class="mv-txt" data-mvedit="${esc(i.id)}">
      ${i.quem ? `<span class="mv-quem">${esc(i.quem)}</span>` : ""}
      <span class="mv-t">${esc(i.texto)}</span>
      ${i.obs ? `<small>${esc(i.obs)}</small>` : ""}
      ${i.prazo || i.freq ? `<span class="mv-pills">${i.prazo ? pill(prazoTxt(i.prazo), i.feito ? "" : " · " + faltaTxt(i.prazo)) : ""}${i.freq ? pill(freqTxt(i.freq)) : ""}</span>` : ""}
    </button></div>`;
}
function renderQuadro(){
  const todos = quadroItens(), modo = S.quadroModo || "lista";
  const seg = `<div class="seg" role="group" aria-label="Ver como"><button data-qmodo="lista" aria-pressed="${modo==="lista"}">Lista</button><button data-qmodo="mural" aria-pressed="${modo==="mural"}">Mural dos sonhos</button></div>`;
  const colar = `<div class="form"><p class="sub">Recebeu as metas prontas num texto? Copie tudo e cole aqui.</p><textarea id="mv-colar" rows="4" placeholder="cole o texto aqui" aria-label="Metas prontas"></textarea><button class="btn ghost" data-act="colarQuadro">Colar no quadro</button></div>`;
  if (!todos.length) return `${seg}<section class="card"><div class="empty"><p><b>O quadro está vazio.</b></p><p>Toque em <b>+ Meta</b> para colocar o primeiro sonho de vocês.</p></div>${colar}</section>`;
  if (modo === "mural") return seg + renderMural(todos);
  const areasUsadas = AREAS_VIDA.filter(a => todos.some(i => i.area === a[0]));
  const filtro = S.quadroArea || "";
  const chips = `<div class="chips mv-chips" role="group" aria-label="Áreas"><button class="chip" data-qarea="" aria-pressed="${!filtro}">Todas</button>${areasUsadas.map(a => `<button class="chip" data-qarea="${a[0]}" aria-pressed="${filtro===a[0]}"><i class="mv-dot" style="background:${a[2]}"></i>${a[1]}</button>`).join("")}</div>`;
  const prios = todos.filter(i => i.prio && !i.feito).sort((a,b) => a.prio - b.prio);
  const prioCard = prios.length && !filtro ? `<section class="card mv-prio"><div class="head"><h2>⭐ Prioridades</h2><span class="sub">nesta ordem</span></div><ol>${prios.map(i => `<li><span class="n">${i.prio}</span><button class="mv-txt" data-mvedit="${esc(i.id)}"><span class="mv-t">${esc(i.texto)}</span></button><span class="sub">${esc(prazoTxt(i.prazo))}</span></li>`).join("")}</ol></section>` : "";
  const semana = semanaAtual(), hoje = today();
  const habs = todos.filter(i => ehHabito(i) && (!filtro || i.area === filtro));
  const habCard = habs.length ? `<section class="card"><div class="head"><h2>Combinados desta semana</h2><span class="sub">toque no dia que fizeram</span></div><div class="mv-habs">${habs.map(i => {
      const dias = i.freq === "dia" ? semana : [semana[Number(i.freq)]];
      return `<div class="mv-hab"><button class="mv-txt" data-mvedit="${esc(i.id)}"><span class="mv-t">${esc(i.texto)}</span><small>${esc(freqTxt(i.freq))}${i.quem ? " · " + esc(i.quem) : ""}</small></button><div class="mv-week">${dias.map(dia => { const n = new Date(dia+"T12:00").getDay(); const on = habFeito(i.id, dia);
        return `<button data-hab="${esc(i.id)}|${dia}" class="${on?"on":""} ${dia===hoje?"hoje":""}" aria-pressed="${on}" ${dia>hoje?"disabled":""} aria-label="${DIAS_SEM[n]}${on?" (feito)":""}">${i.freq === "dia" ? DIAS_SEM[n][0].toUpperCase() : DIAS_SEM[n].slice(0,3)}</button>`; }).join("")}</div></div>`; }).join("")}</div></section>` : "";
  const cards = AREAS_VIDA.filter(a => (!filtro || a[0] === filtro) && todos.some(i => i.area === a[0])).map(a => {
    const its = todos.filter(i => i.area === a[0]); const metas = its.filter(i => !ehHabito(i));
    const feitas = metas.filter(i => i.feito).length;
    const ordem = [...its].sort((x,y) => (!!x.feito - !!y.feito) || (ehHabito(x) - ehHabito(y)) || String(prazoFim(x.prazo||"9999")).localeCompare(prazoFim(y.prazo||"9999")));
    return `<section class="card mv-area"><div class="head"><h2><i class="mv-dot" style="background:${a[2]}"></i>${a[1]}</h2><span class="sub num">${metas.length ? `${feitas} de ${metas.length} feitas` : ""}</span></div>
      ${metas.length ? `<div class="bar"><i style="width:${(feitas/metas.length*100).toFixed(0)}%;background:${a[2]}"></i></div>` : ""}
      <div class="mv-lista">${ordem.map(linhaMetaVida).join("")}</div></section>`;
  }).join("");
  return `${seg}${chips}${prioCard}${habCard}<div class="settings">${cards}</div><p class="sub" style="text-align:center">Toque numa meta para editar. Fica guardado na planilha, para os dois.</p>${dobra("colarQuadro", "Colar metas prontas", colar)}`;
}
function renderMural(todos){
  loadFont("Caveat");
  const p = cfg().pessoas, q = cfg().quadro || {};
  const sonhos = todos.filter(i => i.sonho).sort((a,b) => prazoFim(a.prazo||"9999").localeCompare(prazoFim(b.prazo||"9999")));
  const giro = k => [-1.2, .9, -.5, 1.3, -.8, .6, -1][k % 7];
  const notas = AREAS_VIDA.filter(a => todos.some(i => i.area === a[0])).map((a,k) => `<div class="mural-nota" style="--r:${giro(k)}deg;--pin:${a[2]};background:color-mix(in srgb, ${a[2]} 18%, #FFFDF8)">
      <span class="mural-tag">${a[1]}</span><h3>${a[3]}</h3>
      <ul>${todos.filter(i => i.area === a[0]).map(i => `<li class="${i.feito?"feito":""}">${esc(i.texto)}${i.freq ? ` <em>(${esc(freqTxt(i.freq))})</em>` : i.prazo ? ` <em>(${esc(prazoTxt(i.prazo))})</em>` : ""}</li>`).join("")}</ul></div>`).join("");
  return `<section class="mural">
    <div class="mural-topo"><div class="mural-tit">${esc(q.titulo || "Família " + (q.sobrenome || "Assis"))}</div><div class="mural-sub">${esc(q.frase || "o que a gente quer construir juntos")}</div></div>
    ${sonhos.length ? `<div class="mural-sonhos">${sonhos.map((i,k) => `<button class="mural-sonho ${i.feito?"feito":""}" data-mvedit="${esc(i.id)}" style="--r:${giro(k+3)/1.5}deg"><span class="ano">${esc(prazoTxt(i.prazo) || "sempre")}</span><b>${esc(i.sonho)}</b>${i.feito ? `<span class="ok">conquistado ✓</span>` : ""}</button>`).join("")}</div>` : `<p class="sub" style="text-align:center">Dica: ao editar uma meta, escreva uma "frase grande no mural" para ela aparecer em destaque aqui.</p>`}
    <div class="mural-notas">${notas}</div>
    <div class="mural-pe">${esc(p.join(" & "))}</div>
  </section><p class="sub" style="text-align:center">Quer de papel de parede? Tire um print desta tela.</p>`;
}
function cardQuadroInicio(){
  const todos = quadroItens(); if (!todos.length) return "";
  const hoje = today(), dow = String(new Date().getDay());
  const habHoje = todos.filter(i => i.freq && (i.freq === "dia" || i.freq === dow) && (!i.quem || i.quem === S.me || !cfg().pessoas.includes(i.quem)));
  const prox = todos.filter(i => !i.feito && i.prazo && !ehHabito(i)).sort((a,b) => prazoFim(a.prazo).localeCompare(prazoFim(b.prazo)))[0];
  if (!habHoje.length && !prox) return "";
  return `<section class="card mv-inicio"><div class="head"><h2>Nosso Quadro</h2><button class="speak" data-act="abrirQuadro">Abrir</button></div>
    ${prox ? `<div class="line mv-prox"><span>Próxima meta: <b>${esc(prox.texto)}</b></span><span class="sub">${esc(prazoTxt(prox.prazo))} · ${esc(faltaTxt(prox.prazo))}</span></div>` : ""}
    ${habHoje.length ? `<div class="mv-hoje">${habHoje.map(i => { const on = habFeito(i.id, hoje); return `<button class="chip ${on?"ok":""}" data-hab="${esc(i.id)}|${hoje}" aria-pressed="${on}">${on ? "✓ " : "Hoje: "}${esc(i.texto)}</button>`; }).join("")}</div>` : ""}
  </section>`;
}
function editarMetaVida(id){
  const o = id ? quadroItens().find(x => x.id === id) : {area: S.quadroArea || "fin", texto:"", obs:"", quem:"", prazo:"", freq:"", prio:0, sonho:""};
  if (!o) return;
  const [ano, mes] = String(o.prazo || "").split("-");
  $("#modalRoot").innerHTML = `<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="Meta do quadro">
    <h2>${id ? "Editar" : "Nova"} meta</h2>
    <div class="fgrid">
      <label class="full">O quê<input id="mv-texto" value="${esc(o.texto)}" placeholder="ex.: viagem ao exterior"></label>
      <label class="full">Detalhe (opcional)<input id="mv-obs" value="${esc(o.obs)}" placeholder="ex.: 1ª opção Europa"></label>
      <label>Área<select id="mv-area">${AREAS_VIDA.map(a => `<option value="${a[0]}" ${o.area===a[0]?"selected":""}>${a[1]}</option>`).join("")}</select></label>
      <label>De quem<select id="mv-quem"><option value="">Os dois</option>${cfg().pessoas.map(n => `<option ${o.quem===n?"selected":""}>${esc(n)}</option>`).join("")}${o.quem && !cfg().pessoas.includes(o.quem) ? `<option selected>${esc(o.quem)}</option>` : ""}</select></label>
      <label class="full">Tipo<select id="mv-freq"><option value="">Meta (faz uma vez)</option><option value="dia" ${o.freq==="dia"?"selected":""}>Combinado de todo dia</option>${DIAS_SEM.map((d,k) => `<option value="${k}" ${o.freq===String(k)?"selected":""}>Combinado de toda ${d}</option>`).join("")}</select></label>
      <label>Ano do prazo<input id="mv-ano" type="number" min="2024" max="2060" inputmode="numeric" value="${esc(ano||"")}" placeholder="sem prazo"></label>
      <label>Mês<select id="mv-mes"><option value="">o ano todo</option>${MESES_C.map((m,k) => `<option value="${pad(k+1)}" ${mes===pad(k+1)?"selected":""}>${m}</option>`).join("")}</select></label>
      <label>Prioridade<select id="mv-prio"><option value="0">Nenhuma</option>${[1,2,3,4,5].map(n => `<option value="${n}" ${Number(o.prio)===n?"selected":""}>${n}º lugar</option>`).join("")}</select></label>
      <label class="full">Frase grande no mural (opcional)<input id="mv-sonho" value="${esc(o.sonho||"")}" placeholder="ex.: Tenente Daiana"></label>
    </div>
    <div class="acts">${id ? `<button class="btn danger" data-mvdel="${esc(id)}">Apagar</button>` : "<span></span>"}<span style="display:flex;gap:8px"><button class="btn ghost" data-close="1">Cancelar</button><button class="btn" data-mvsave="${esc(id||"")}">Salvar</button></span></div>
  </div></div>`;
}
/* recebe um texto com as metas (JSON: lista de itens ou {itens, titulo, frase}) e junta ao quadro, sem repetir */
function colarQuadro(){
  const t = ($("#mv-colar")?.value || "").trim(); if (!t) return toast("Cole o texto primeiro.");
  let d; try{ d = JSON.parse(t.slice(t.search(/[\[{]/))); }catch{ return toast("Não entendi esse texto. Copie de novo, inteiro."); }
  const novos = (Array.isArray(d) ? d : d.itens || []).filter(i => i && i.texto).map(i => ({id: "q" + uid(), area: areaDe(i.area)[0], texto: String(i.texto), obs: String(i.obs||""), quem: String(i.quem||""), prazo: String(i.prazo||""), freq: String(i.freq ?? ""), prio: Number(i.prio)||0, sonho: String(i.sonho||""), feito: ""}));
  if (!novos.length) return toast("Não achei metas nesse texto.");
  const tem = new Set(quadroItens().map(i => i.texto.toLowerCase()));
  const add = novos.filter(i => !tem.has(i.texto.toLowerCase())), itens = [...quadroItens(), ...add];
  const extra = Array.isArray(d) ? {} : Object.fromEntries(["titulo","frase"].filter(k => d[k]).map(k => [k, String(d[k])]));
  saveConfig({quadro: {...(cfg().quadro||{}), ...extra, itens}});
  document.querySelectorAll(".toast").forEach(e => e.remove()); toast(add.length ? `Pronto! ${add.length} metas no quadro 💜` : "Essas metas já estavam no quadro.", 3200);
}
function salvarMetaVida(id){
  const g = f => (document.getElementById(f)?.value ?? "").trim();
  const ano = g("mv-ano"), antigo = id ? quadroItens().find(x => x.id === id) : null;
  if (ano && !/^\d{4}$/.test(ano)) return toast("Escreva o ano com 4 números, ex.: 2027.");
  const o = {...(antigo||{}), id: id || ("q" + uid()), texto: g("mv-texto"), obs: g("mv-obs"), area: g("mv-area"), quem: g("mv-quem"), freq: g("mv-freq"),
    prazo: ano ? (g("mv-mes") ? `${ano}-${g("mv-mes")}` : ano) : "", prio: Number(g("mv-prio")) || 0, sonho: g("mv-sonho"), feito: antigo?.feito || ""};
  if (!o.texto) return toast("Escreva qual é a meta.");
  const itens = quadroItens().filter(x => x.id !== o.id); itens.push(o);
  $("#modalRoot").innerHTML = ""; saveConfig({quadro: {...(cfg().quadro||{}), itens}});
}
/* OFX (extrato do Nubank e outros): vira texto simples para a IA */
function ofxParaTexto(t){
  const lin = []; const re = /<STMTTRN>([\s\S]*?)<\/STMTTRN>/gi; let m;
  const tag = (b, n) => (b.match(new RegExp("<" + n + ">([^<\\r\\n]*)", "i")) || [,""])[1].trim();
  while ((m = re.exec(t))){ const b = m[1]; const d = tag(b,"DTPOSTED"); lin.push(`${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}; ${tag(b,"TRNAMT")}; ${tag(b,"MEMO") || tag(b,"NAME")}`); }
  const saldo = tag(t, "BALAMT");
  return `Extrato OFX do cartão (data; valor, negativo = compra; descrição).${saldo ? ` Total da fatura: ${Math.abs(num(saldo.replace(".",",")))}.` : ""}\n` + lin.join("\n");
}

/* ---------- Saúde do mês (regra 50-30-20) ---------- */
const NEC_PADRAO = ["Mercado","Combustível","Transporte","Saúde/Farmácia","Casa","Educação"];
const tipoCat = n => cfg().tipoCat?.[n] || (NEC_PADRAO.includes(n) ? "nec" : "est");
const fixasDivida = () => new Set((cfg().dividas||[]).map(d => d.fixa).filter(Boolean));
function saudeDoMes(M){
  const renda = M.entrou; if (!renda) return null;
  const dv = fixasDivida(), c = cfg();
  const fixasNec = c.fixas.filter(f => !dv.has(f.nome)).reduce((s,f)=>s+num(f.valor),0);
  const div = c.fixas.filter(f => dv.has(f.nome)).reduce((s,f)=>s+num(f.valor),0) + (c.dividas||[]).filter(d => !d.fixa).reduce((s,d)=>s+num(d.parcela),0);
  const cat = t => M.cats.filter(x => tipoCat(x.nome) === t).reduce((s,x)=>s+x.total,0);
  const nec = fixasNec + cat("nec"), est = cat("est");
  const futuro = M.sep.reserva + M.sep.investimentos + Math.max(0, M.ainda);
  return {renda, nec, est, div, futuro, doacao: M.sep.dizimo,
    pNec: nec/renda, pEst: est/renda, pDiv: div/renda, pFut: futuro/renda};
}
function cardSaude(M){
  const h = saudeDoMes(M); if (!h) return "";
  const pc = v => Math.round(v*100) + "%";
  const linha = (rot, v, ref, tom, nota) => `<div class="sl ${tom}"><span><b>${rot}</b><small>${ref}${nota ? " · " + nota : ""}</small></span><span class="num">${pc(v)}</span></div>`;
  const tomDiv = h.pDiv > .30 ? "risco" : h.pDiv > .25 ? "alerta" : "bom";
  return `<section class="card"><div class="head"><h2>Saúde do mês</h2><span class="sub">regra 50-30-20</span></div>
    <div class="saude">
      ${linha("Necessidades", h.pNec, "até 50%", h.pNec > .5 ? "alerta" : "bom", "casa, mercado, contas, transporte")}
      ${linha("Estilo de vida", h.pEst, "até 30%", h.pEst > .3 ? "alerta" : "bom", "comer fora, lazer, compras")}
      ${linha("Futuro", h.pFut, "pelo menos 20%", h.pFut < .2 ? "alerta" : "bom", "reserva, investir e o que sobrar")}
      ${linha("Dívidas", h.pDiv, "até 30% da renda", tomDiv, h.div ? "" : "cadastre em Metas → Dívidas")}
    </div>
    ${dobra("saudeInfo", "Como ler", `<p class="sub">A regra 50-30-20 é uma referência simples: metade da renda para o necessário, até 30% para o que é escolha e pelo menos 20% para o futuro. O dízimo (${money0(h.doacao)}) entra à parte. Qual categoria é necessidade ou estilo de vida você escolhe em Ajustes → Finanças.</p>`)}</section>`;
}
/* ---------- Pedem sua atenção ---------- */
function cardAtencao(M, mv){
  const c = cfg(), hoje = new Date(), dia = hoje.getDate(), atual = S.mes === ymOf(hoje), itens = [];
  if (atual){
    const pg = pagosDoMes(S.mes), dias = c.fixasDia || {};
    const vencidas = c.fixas.filter(f => dias[f.nome] && dias[f.nome] < dia && !pg[f.nome]);
    const logo = c.fixas.filter(f => dias[f.nome] && dias[f.nome] >= dia && dias[f.nome] - dia <= 2 && !pg[f.nome]);
    if (vencidas.length) itens.push({tom:"risco", t:`${vencidas.map(f=>f.nome).join(", ")} ${vencidas.length>1?"venceram":"venceu"}`, s:"Se já pagou, marque como paga.", a:"contas", b:"Ver contas"});
    if (logo.length) itens.push({tom:"alerta", t:`${logo.map(f=>f.nome).join(", ")} ${logo.length>1?"vencem":"vence"} em breve`, s:`${mv(logo.reduce((x,f)=>x+num(f.valor),0))} no total.`, a:"contas", b:"Ver contas"});
    for (const k of c.cartoes){ const v = Number(k.vence); if (!v) continue; const n = v - dia; if (n >= 0 && n <= 3){ const tot = M.gastos.filter(g=>g.forma===k.nome).reduce((x,g)=>x+num(g.valor),0) + M.parcelas.filter(p=>p.forma===k.nome).reduce((x,p)=>x+num(p.valor),0); if (tot) itens.push({tom:"alerta", t:`Fatura ${k.nome} vence ${n===0?"hoje":n===1?"amanhã":`em ${n} dias`}`, s:`Fatura do mês: ${mv(tot)}.`}); } }
    const ant = addM(S.mes, -1), Ma = month(ant);
    if (Ma.entrou && !Ma.registros.length) itens.push({tom:"dado", t:`Registrar dízimo e reserva de ${mLabel(ant).split(" ")[0]}?`, s:"Ainda não tem nada registrado como feito.", a:"metas|"+ant, b:"Registrar"});
  }
  const estouradas = M.cats.filter(x => x.orc && x.total > x.orc);
  if (estouradas.length) itens.push({tom:"alerta", t:`${estouradas.length} ${estouradas.length>1?"categorias passaram":"categoria passou"} do orçamento`, s: estouradas.slice(0,3).map(x=>x.nome).join(", ") + (estouradas.length>3?"…":"")});
  for (const d of (c.dividas||[])) if (num(d.juros) && num(d.parcela) <= num(d.saldo)*num(d.juros)/100) itens.push({tom:"risco", t:`${d.nome}: a parcela não cobre os juros`, s:"A dívida cresce todo mês. Vale renegociar.", a:"", b:""});
  for (const x of (c.milhas?.saldos||[])) if (x.validade){ const dd = Math.round((new Date(x.validade) - new Date(today()))/864e5); if (dd >= 0 && dd <= 60) itens.push({tom:"alerta", t:`${x.programa}: ${num(x.saldo).toLocaleString("pt-BR")} vencem em ${dd} dias`, s:"Use ou transfira antes de perder.", a:"milhas", b:"Ver milhas"}); }
  const boa = (ls.get("radar", {}).itens||[]).find(x => x.tipo === "transferencia" && x.bonus >= 80 && x.origens.some(o => (c.milhas?.origens||["Itaú","Livelo","PortoPlus"]).includes(o)) && Date.now() - new Date(x.data).getTime() < 3*864e5);
  if (boa) itens.push({tom:"dado", t:`Milhas: ${boa.bonus}% de bônus${boa.ultimoDia ? " (último dia)" : ""}`, s: boa.titulo, a:"milhas", b:"Ver"});
  const fila = ls.get("filaIA", []).length; if (fila) itens.push({tom:"dado", t:`${fila} ${fila>1?"pedidos esperando":"pedido esperando"} a internet`, s:"A Fina lê assim que conectar.", a:"fila", b:"Tentar agora"});
  if (!itens.length) return "";
  return `<section class="card atencao"><div class="head"><h2>Pedem sua atenção</h2><span class="sub">${itens.length}</span></div>
    ${itens.slice(0,5).map(x => `<div class="at ${x.tom}"><span><b>${esc(x.t)}</b><small>${esc(x.s)}</small></span>${x.a ? `<button class="btn ghost" data-atencao="${esc(x.a)}">${esc(x.b)}</button>` : ""}</div>`).join("")}</section>`;
}
/* ---------- Dívidas ---------- */
function quitacao(d, extra=0){
  let saldo = num(d.saldo), juros = 0, meses = 0; const i = num(d.juros)/100, pmt = num(d.parcela) + extra;
  if (!saldo || !pmt) return {meses:0, juros:0, nunca:false};
  while (saldo > 0.5 && meses < 600){ const j = saldo * i; if (pmt <= j) return {meses, juros, nunca:true}; juros += j; saldo = saldo + j - pmt; meses++; }
  return {meses, juros, nunca: saldo > 0.5};
}
function renderDividas(){
  const c = cfg(), ds = c.dividas || [];
  const ordem = [...ds].sort((a,b) => num(b.juros) - num(a.juros));
  const lista = ds.map(d => { const q = quitacao(d), q2 = quitacao(d, num(d.parcela)*0.2 || 100); const fim = q.meses ? mLabel(addM(ymOf(new Date()), q.meses)) : "";
    return `<div class="obj"><button class="obj-head" data-divedit="${esc(d.id)}"><b>${esc(d.nome)}</b><span class="num">${money0(d.saldo)}</span></button>
      <small class="sub">parcela ${money0(d.parcela)}/mês${num(d.juros) ? ` · juros ${String(d.juros).replace(".",",")}% ao mês` : ""}${d.quem ? " · " + esc(d.quem) : ""}${d.fixa ? ` · está nas contas fixas (${esc(d.fixa)})` : ""}</small>
      ${q.nunca ? `<div class="warnline">A parcela não cobre os juros: assim a dívida não acaba. Vale renegociar.</div>` : q.meses ? `<small class="sub">Acaba em <b>${esc(fim)}</b> (${q.meses} meses)${num(d.juros) ? `, pagando uns ${money0(q.juros)} de juros até lá` : ""}.</small>
      ${num(d.juros) && !q2.nunca ? `<small class="sub">Se adiantar ${money0(num(d.parcela)*0.2 || 100)} por mês: acaba ${q.meses - q2.meses} meses antes e economiza ${money0(q.juros - q2.juros)} de juros.</small>` : ""}` : ""}</div>`; }).join("");
  const mg = c.consignado || {}, rem = num(mg.remuneracao), teto = rem*0.7, res = num(mg.soldo)*0.1, margem = teto - num(mg.obrigatorios) - res - num(mg.autorizados);
  return `<div class="settings">
    <section class="card"><div class="head"><h2>Dívidas e empréstimos</h2><span class="sub num">${money0(ds.reduce((s,d)=>s+num(d.saldo),0))}</span></div>
      ${ds.length ? `<div class="objs">${lista}</div>` : `<p class="sub">Nenhuma dívida cadastrada. Cadastre o empréstimo do carro com quanto ainda falta pagar, a parcela e os juros do contrato.</p>`}
      <button class="btn" data-act="novaDivida">${I.plus}Nova dívida</button>
      ${ordem.length > 1 ? dobra("ordem", "Qual quitar primeiro", `<p class="sub">Para pagar menos juros, coloque o dinheiro extra na de <b>juros mais alto</b>: ${ordem.map(d=>esc(d.nome)).join(" → ")}. Quitar primeiro a de menor saldo paga um pouco mais de juros, mas dá a sensação de progresso mais rápido — também vale.</p>`) : ""}
    </section>
    <section class="card"><div class="head"><h2>Margem consignável do Gustavo</h2><span class="sub">militar de carreira</span></div>
      <div class="form">
        <p class="sub">Quanto ainda cabe de desconto em folha. Pegue os valores no contracheque.</p>
        ${[["remuneracao","Remuneração bruta (ou proventos)"],["soldo","Soldo"],["obrigatorios","Descontos obrigatórios (pensão militar, FUSEx, IR…)"],["autorizados","Descontos autorizados já em folha (consignados, FHE…)"]].map(([k,t]) => `<label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,130px)"><span>${t}</span><input data-mg="${k}" inputmode="decimal" value="${num(mg[k]) ? String(num(mg[k])).replace(".",",") : ""}" placeholder="0,00"></label>`).join("")}
        ${rem ? `<div class="split num"><div class="line"><span>Teto de descontos (70%)</span><b>${money0(teto)}</b></div><div class="line"><span>Reserva de 10% do soldo</span><b>− ${money0(res)}</b></div><div class="line"><span>Já descontado</span><b>− ${money0(num(mg.obrigatorios)+num(mg.autorizados))}</b></div><div class="line"><span><b>Margem livre</b></span><b class="${margem<0?"neg":""}">${money0(margem)}</b></div></div>
        <p class="sub">${margem > 0 ? `Cabe até ${money0(margem)} por mês em novos descontos. Antes de usar, veja se a parcela cabe no "Futuro" (Metas → Futuro).` : "Não há margem: a folha já está no limite."}</p>` : ""}
        <p class="sub" style="font-size:12px">Estimativa pela regra de que o militar recebe ao menos 30% da remuneração (MP 2.215-10/2001, art. 14) e a Nota Informativa CPEx 006/2026 (reserva de 10% do soldo). O valor oficial é o do EBconsig. A Daiana, temporária, fica de fora: o contrato renova todo ano.</p>
      </div></section></div>`;
}
function campoNum(id, rot, v){ return `<label>${rot}<input id="${id}" inputmode="decimal" value="${v!==""&&v!=null&&num(v)?String(v).replace(".",","):""}"></label>`; }
function editarDivida(id){
  const c = cfg(), d = id ? (c.dividas||[]).find(x => x.id === id) : {nome:"", saldo:"", parcela:"", juros:"", quem:"Gustavo", fixa:""};
  if (!d) return;
  $("#modalRoot").innerHTML = `<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="Dívida"><h2>${id?"Editar":"Nova"} dívida</h2>
    <div class="fgrid"><label class="full">Nome<input id="d-nome" value="${esc(d.nome)}" placeholder="ex.: empréstimo do carro"></label>
    ${campoNum("d-saldo","Quanto falta pagar (R$)",d.saldo)}${campoNum("d-parcela","Parcela por mês (R$)",d.parcela)}
    ${campoNum("d-juros","Juros ao mês (%)",d.juros)}
    <label>De quem<select id="d-quem">${opts([...c.pessoas,"Casal"], d.quem)}</select></label>
    <label class="full">Já está nas contas fixas como<select id="d-fixa"><option value="">Não está</option>${c.fixas.map(f=>`<option ${d.fixa===f.nome?"selected":""}>${esc(f.nome)}</option>`).join("")}</select></label>
    <p class="sub full">Os juros estão no contrato (taxa mensal ou CET). Se não souber, deixe em branco.</p></div>
    <div class="acts">${id?`<button class="btn danger" data-divdel="${esc(id)}">Apagar</button>`:"<span></span>"}<span style="display:flex;gap:8px"><button class="btn ghost" data-close="1">Cancelar</button><button class="btn" data-divsave="${esc(id||"")}">Salvar</button></span></div></div></div>`;
}
function salvarDivida(id){
  const g = f => document.getElementById(f)?.value ?? "";
  const d = {id: id || ("d" + uid()), nome: g("d-nome").trim(), saldo: num(g("d-saldo")), parcela: num(g("d-parcela")), juros: num(g("d-juros")), quem: g("d-quem"), fixa: g("d-fixa")};
  if (!d.nome || !d.saldo || !d.parcela) return toast("Preencha nome, quanto falta e a parcela.");
  const l = (cfg().dividas||[]).filter(x => x.id !== d.id); l.push(d); $("#modalRoot").innerHTML = ""; saveConfig({dividas: l});
}
function apagarLista(chave, id, attr){
  const btn = document.querySelector(`[data-${attr}="${id}"]`);
  if (btn && !btn.dataset.sure){ btn.dataset.sure = "1"; btn.textContent = "Toque de novo para apagar"; return; }
  $("#modalRoot").innerHTML = ""; saveConfig({[chave]: (cfg()[chave]||[]).filter(x => x.id !== id)});
}
/* ---------- patrimônio ---------- */
function cardPatrimonio(){
  const c = cfg(), objs = objetivosTodos(), bens = c.bens || [];
  const guardado = objs.reduce((s,o)=>s+num(o.jaTem),0), emBens = bens.reduce((s,b)=>s+num(b.valor),0), dividas = (c.dividas||[]).reduce((s,d)=>s+num(d.saldo),0);
  const liq = guardado + emBens - dividas, ym = ymOf(new Date());
  const hist = {...(c.patrimonio||{})}; if (Math.round(hist[ym]||0) !== Math.round(liq) && (guardado || emBens || dividas)) setTimeout(() => { const patch = {patrimonio:{[ym]: Math.round(liq)}}; S.config = juntar(cfg(), patch); enfileirar({a:"app", app:patch}, "patrimonio:" + ym); guardarLocal(); enviar(); }, 0);
  const meses = Object.keys(hist).sort().slice(-6), ant = meses.filter(m => m < ym).pop();
  return `<section class="card"><div class="head"><h2>Patrimônio da família</h2><span class="sub num">${money0(liq)}</span></div>
    <div class="split num"><div class="line"><span>Guardado (reserva e objetivos)</span><b>${money0(guardado)}</b></div><div class="line"><span>Bens</span><b>${money0(emBens)}</b></div><div class="line"><span>Dívidas</span><b>− ${money0(dividas)}</b></div></div>
    ${ant ? `<p class="sub">Em ${esc(mLabel(ant).split(" ")[0])} era ${money0(hist[ant])}: ${liq >= hist[ant] ? "cresceu" : "diminuiu"} ${money0(Math.abs(liq - hist[ant]))}.</p>` : ""}
    ${dobra("bens", `Bens (${bens.length})`, `${bens.map(b => `<button class="item" data-bemedit="${esc(b.id)}"><span class="t"><b>${esc(b.nome)}</b></span><span class="v num">${money0(b.valor)}</span></button>`).join("") || `<p class="sub">Carro, moto, imóvel… com o valor de hoje.</p>`}<button class="btn ghost" data-act="novoBem">${I.plus}Novo bem</button>`)}</section>`;
}
function editarBem(id){
  const b = id ? (cfg().bens||[]).find(x => x.id === id) : {nome:"", valor:""}; if (!b) return;
  $("#modalRoot").innerHTML = `<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="Bem"><h2>${id?"Editar":"Novo"} bem</h2>
    <div class="fgrid"><label class="full">Nome<input id="b-nome" value="${esc(b.nome)}" placeholder="ex.: carro"></label>${campoNum("b-valor","Valor de hoje (R$)",b.valor)}<p class="sub full">Para carro, use o valor da tabela FIPE.</p></div>
    <div class="acts">${id?`<button class="btn danger" data-bemdel="${esc(id)}">Apagar</button>`:"<span></span>"}<span style="display:flex;gap:8px"><button class="btn ghost" data-close="1">Cancelar</button><button class="btn" data-bemsave="${esc(id||"")}">Salvar</button></span></div></div></div>`;
}
function salvarBem(id){
  const b = {id: id || ("b" + uid()), nome: ($("#b-nome")?.value||"").trim(), valor: num($("#b-valor")?.value)};
  if (!b.nome || !b.valor) return toast("Preencha o nome e o valor.");
  const l = (cfg().bens||[]).filter(x => x.id !== b.id); l.push(b); $("#modalRoot").innerHTML = ""; saveConfig({bens: l});
}
/* ---------- lançamentos que se repetem todo mês ---------- */
function cardRecorrentes(){
  const r = cfg().recorrentes || [];
  return `<section class="card"><div class="head"><h2>Todo mês</h2><span class="sub">entram sozinhos</span></div><div class="form">
    <p class="sub">Assinaturas e gastos que se repetem. No dia certo, a ${esc(cfg().nomeAssistente)} lança sozinha. Se cair no fim de semana, passa para segunda.</p>
    ${r.map(x => `<button class="item" data-repedit="${esc(x.id)}"><span class="t"><b>${esc(x.descricao)}</b><span>dia ${esc(x.dia)} · ${esc(x.categoria)} · ${esc(x.forma||"sem forma")}</span></span><span class="v num">${money(x.valor)}</span></button>`).join("") || ""}
    <button class="btn ghost" data-act="novaRep">${I.plus}Novo gasto que se repete</button></div></section>`;
}
function editarRep(id){
  const c = cfg(), x = id ? (c.recorrentes||[]).find(r => r.id === id) : {descricao:"", valor:"", categoria:"", forma:"", quem:S.me, dia:1}; if (!x) return;
  $("#modalRoot").innerHTML = `<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="Gasto que se repete"><h2>${id?"Editar":"Novo"}: todo mês</h2>
    <div class="fgrid"><label class="full">Descrição<input id="r-desc" value="${esc(x.descricao)}" placeholder="ex.: Spotify"></label>${campoNum("r-valor","Valor (R$)",x.valor)}
    <label>Dia do mês<input id="r-dia" type="number" min="1" max="31" value="${esc(x.dia)}"></label>
    <label>Categoria<select id="r-cat">${opts(catNames(), x.categoria)}</select></label><label>Forma de pagamento<select id="r-forma">${opts(formas(), x.forma)}</select></label>
    <label>Quem<select id="r-quem">${opts([...c.pessoas,"Casal"], x.quem)}</select></label></div>
    <div class="acts">${id?`<button class="btn danger" data-repdel="${esc(id)}">Apagar</button>`:"<span></span>"}<span style="display:flex;gap:8px"><button class="btn ghost" data-close="1">Cancelar</button><button class="btn" data-repsave="${esc(id||"")}">Salvar</button></span></div></div></div>`;
}
function salvarRep(id){
  const g = f => document.getElementById(f)?.value ?? "";
  const x = {id: id || ("r" + uid()), descricao: g("r-desc").trim(), valor: num(g("r-valor")), dia: Math.min(31, Math.max(1, Number(g("r-dia"))||1)), categoria: g("r-cat"), forma: g("r-forma"), quem: g("r-quem"), desde: ymOf(new Date())};
  if (!x.descricao || !x.valor) return toast("Preencha a descrição e o valor.");
  const l = (cfg().recorrentes||[]).filter(r => r.id !== x.id); l.push(x); $("#modalRoot").innerHTML = ""; saveConfig({recorrentes: l}); setTimeout(gerarRecorrentes, 500);
}
function diaUtil(ym, dia){ const [y,m] = ym.split("-").map(Number); const ult = new Date(y, m, 0).getDate(); const d = new Date(y, m-1, Math.min(dia, ult)); const w = d.getDay(); if (w === 6) d.setDate(d.getDate()+2); if (w === 0) d.setDate(d.getDate()+1); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function gerarRecorrentes(){
  const c = cfg(); if (!c.recorrentes?.length || !S.loaded.gastos) return;
  const ym = ymOf(new Date()), hj = today(), feitos = c.recGerados?.[ym] || {};
  for (const r of c.recorrentes){
    if (feitos[r.id] || (r.desde && r.desde > ym)) continue;
    const data = diaUtil(ym, Number(r.dia)||1); if (data > hj) continue;
    const ja = S.gastos.some(g => g.descricao === r.descricao && Math.abs(num(g.valor)-num(r.valor)) < 0.01 && g.data.slice(0,7) === data.slice(0,7));
    const patch = {recGerados:{[ym]:{[r.id]:true}}}; S.config = juntar(cfg(), patch); enfileirar({a:"app", app:patch}, `rec:${ym}:${r.id}`);
    if (!ja) mudar("salvar", "gasto", {data, valor:num(r.valor), categoria:r.categoria, quem:r.quem||"", forma:r.forma||"", descricao:r.descricao, criadoPor:"Todo mês", criadoEm:new Date().toISOString()});
  }
  guardarLocal(); enviar();
}
/* ---------- fechamento do mês: previsto x realizado e anotação ---------- */
function cardFechamento(M){
  const c = cfg(), linhas = M.cats.filter(x => x.orc || x.total);
  const orc = linhas.reduce((s,x)=>s+x.orc,0), gasto = linhas.reduce((s,x)=>s+x.total,0);
  return `<section class="card"><div class="head"><h2>Fechamento de ${esc(mLabel(S.mes).split(" ")[0])}</h2><span class="sub num">${money0(gasto)} de ${money0(orc)}</span></div>
    ${dobra("fech-"+S.mes, "Previsto x realizado", `<div class="split num">${linhas.map(x => `<div class="line"><span>${esc(x.nome)}</span><b class="${x.orc && x.total > x.orc ? "neg" : ""}">${money0(x.total)} <span class="muted">/ ${x.orc?money0(x.orc):"—"}</span></b></div>`).join("")}</div>`)}
    <label class="flabel" for="notaMes">Anotação do mês</label><textarea id="notaMes" placeholder="ex.: mês do aniversário, gastamos mais com presentes">${esc(c.notas?.[S.mes]||"")}</textarea>
    <button class="btn ghost" data-act="salvarNota">Salvar anotação</button></section>`;
}
/* ---------- limite livre do cartão ---------- */
function usoCartao(nome){
  const atual = ymOf(new Date());
  const abertas = S.gastos.filter(g => g.forma === nome && compMonth(g) >= atual).reduce((s,g)=>s+num(g.valor),0);
  const parc = S.parcelas.filter(p => p.forma === nome).reduce((s,p) => { const restam = Math.max(0, Math.min(Number(p.n), Number(p.n) - mDiff(p.inicio, atual))); return s + restam * num(p.valor); }, 0);
  return abertas + parc;
}
/* ---------- lançamento rápido sem internet: "mercado 82,50 ontem nubank" ---------- */
function lancamentoRapido(txt){
  const t = " " + txt.toLowerCase() + " ";
  const mv = t.match(/(\d{1,6}(?:[.,]\d{1,2})?)/); if (!mv) return null;
  const valor = num(mv[1].replace(".", ",")); if (!valor) return null;
  const d = new Date(); if (/\banteontem\b/.test(t)) d.setDate(d.getDate()-2); else if (/\bontem\b/.test(t)) d.setDate(d.getDate()-1);
  const dm = t.match(/\b(\d{1,2})\/(\d{1,2})\b/); if (dm){ d.setMonth(Number(dm[2])-1); d.setDate(Number(dm[1])); }
  const data = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  const forma = formas().find(f => t.includes(f.toLowerCase().split(" ")[0].replace("/débito","")) ) || (/\bpix\b|d[eé]bito/.test(t) ? "Pix/Débito" : /dinheiro/.test(t) ? "Dinheiro" : "");
  const PALAVRAS = [["Mercado",/mercado|padaria|feira|a[cç]ougue|atacad|assa[ií]/],["Combustível",/gasolina|combust|posto|etanol|diesel/],["Transporte",/uber|\b99\b|ped[aá]gio|estacion|zona azul|[oô]nibus|metr[oô]|oficina/],["Saúde/Farmácia",/farm[aá]cia|drogaria|rem[eé]dio|m[eé]dico|consulta/],["Alimentação fora",/restaurante|lanche|ifood|pizza|a[cç]a[ií]|sorvete|caf[eé]|almo[cç]o|jantar/],["Lazer",/cinema|passeio|show|parque|hotel/],["Presentes",/presente/],["Casa",/casa|limpeza|material/]];
  const cat = (catNames().find(n => t.includes(n.toLowerCase())) || (PALAVRAS.find(([n,re]) => re.test(t) && catNames().includes(n))||[])[0] || "");
  const desc = txt.replace(mv[1], "").replace(/\b(gastei|paguei|no|na|de|em|reais|r\$|ontem|anteontem|hoje|pix|d[eé]bito|cr[eé]dito)\b/gi, " ").replace(/\d{1,2}\/\d{1,2}/, "").replace(/\s+/g, " ").trim();
  return {tipo:"gasto", data, valor, categoria: cat, forma, quem: S.me, descricao: desc ? desc.charAt(0).toUpperCase() + desc.slice(1) : (cat || "Gasto")};
}

/* ================= MILHAS ================= */
const PROGRAMAS = ["Itaú Pontos","PortoPlus","Esfera","Livelo","Átomos (C6)","Nubank","Inter Loop","Azul Fidelidade","Smiles","LATAM Pass","TAP Miles&Go","Premmia","Stix","Mastercard Surpreenda","Outro"];
const VALOR_REF = {"Itaú Pontos":25,"PortoPlus":22,"Esfera":25,"Livelo":28,"Átomos (C6)":25,"Nubank":20,"Inter Loop":10,"Azul Fidelidade":14,"Smiles":16,"LATAM Pass":25,"TAP Miles&Go":20,"Premmia":10,"Stix":5,"Mastercard Surpreenda":0,"Outro":15};   // R$ por mil, referência aproximada de mercado
function progPadrao(n){
  if (/ita[uú]/i.test(n)) return {programa:"Itaú Pontos", pts:2.5};
  if (/porto/i.test(n)) return {programa:"PortoPlus", pts:1.5};
  if (/santander/i.test(n)) return {programa:"Esfera", pts:0};
  if (/nubank/i.test(n)) return {programa:"Nubank", pts:0};
  if (/inter/i.test(n)) return {programa:"Inter Loop", pts:0};
  return {programa:"Outro", pts:0};
}
const progCartao = n => ({...progPadrao(n), ...(cfg().milhas?.cartoes?.[n]||{})});
const dolarHoje = () => num(cfg().taxas?.dolar) || 5.35;
function resumoPontos(M){
  const c = cfg(), dol = dolarHoje();
  const linhas = c.cartoes.map(k => {
    const total = M.gastos.filter(g => g.forma === k.nome).reduce((s,g)=>s+num(g.valor),0) + M.parcelas.filter(p => p.forma === k.nome).reduce((s,p)=>s+num(p.valor),0);
    const pr = progCartao(k.nome); let pts = num(pr.pts);
    if (pr.programa === "Itaú Pontos" && pts === 2.5 && total < 4000) pts = 2;        // Uniclass Black: 2,5 só com fatura de R$ 4 mil ou mais
    return {nome:k.nome, programa:pr.programa, pts, total, pontos: total / dol * pts};
  }).filter(x => x.total > 0);
  const melhor = Math.max(2.5, ...linhas.map(x => x.pts));
  const perdidos = linhas.filter(x => x.programa !== "Itaú Pontos" && x.pts < melhor).reduce((s,x)=>s + x.total/dol*(melhor - x.pts), 0);   // o que outros cartões deixaram de render
  return {linhas, pontos: linhas.reduce((s,x)=>s+x.pontos,0), perdidos, melhor, dol};
}
const valorPontos = (prog, qtd) => qtd * (num(cfg().milhas?.valores?.[prog]) || VALOR_REF[prog] || 15) / 1000;
async function atualizarRadar(forcar){
  const r0 = ls.get("radar", null); if (!forcar && r0 && Date.now() - r0.quando < 3*36e5) return;
  try{ const r = await api({a:"promos", forcar: !!forcar}); if (r.ok){ ls.set("radar", {quando: Date.now(), itens: r.itens || [], ok:true}); if (S.metaSeg === "milhas" && S.tab === "metas") render(); return; } ls.set("radar", {quando: Date.now(), itens: r0?.itens || [], ok:false, erro: r.erro}); }catch{}
}
function veredito(rPorMil, bom, ok){ return rPorMil >= bom ? ["bom","Vale a pena"] : rPorMil >= ok ? ["alerta","Mais ou menos"] : ["risco","Não vale"]; }
function renderMilhas(){
  atualizarTaxas(); atualizarRadar();
  const c = cfg(), M = month(S.mes), R = resumoPontos(M), mil = c.milhas || {};
  const itau = c.cartoes.find(k => /ita[uú]/i.test(k.nome)); const gItau = itau ? (R.linhas.find(x => x.nome === itau.nome)?.total || 0) : 0;
  const metaIsencao = num(mil.metaIsencao) || 8000;
  // 1. este mês
  const cardMes = `<section class="card"><div class="head"><h2>Pontos de ${esc(mLabel(S.mes).split(" ")[0])}</h2><span class="sub num">${Math.round(R.pontos).toLocaleString("pt-BR")} pontos</span></div>
    <div class="split num">${R.linhas.map(x => `<div class="line"><span>${esc(x.nome)}<small class="muted" style="display:block">${x.pts ? `${String(x.pts).replace(".",",")} ponto(s) por dólar · ${esc(x.programa)}` : "não ganha pontos"}</small></span><b>${x.pts ? Math.round(x.pontos).toLocaleString("pt-BR") : "0"}<small class="muted" style="display:block">${money0(x.total)}</small></b></div>`).join("") || `<p class="sub">Nenhum gasto no cartão neste mês.</p>`}</div>
    ${R.perdidos > 50 ? `<div class="warnline">Gastos em cartões que pontuam pouco deixaram de render uns <b>${Math.round(R.perdidos).toLocaleString("pt-BR")} pontos</b> (≈ ${money0(valorPontos("Itaú Pontos", R.perdidos))}). Passe essas compras para o ${esc(itau?.nome || "cartão principal")}.</div>` : ""}
    <p class="sub">Com o dólar a ${money(R.dol)}. Em um ano, nesse ritmo: <b>~${Math.round(R.pontos*12/1000)} mil pontos</b>, que com 100% de bônus viram ~${Math.round(R.pontos*24/1000)} mil milhas.</p></section>`;
  // 2. meta do Itaú
  const cardMeta = itau ? `<section class="card"><div class="head"><h2>Meta do ${esc(itau.nome)}</h2><span class="sub num">${money0(gItau)} de ${money0(metaIsencao)}</span></div>
    <div class="bar"><i class="${gItau >= metaIsencao ? "" : "warn"}" style="width:${Math.min(100, gItau/metaIsencao*100).toFixed(1)}%"></i></div>
    <p class="sub">${gItau >= metaIsencao ? "Bateu a meta: anuidade de graça neste mês ✓" : `Faltam ${money0(metaIsencao - gItau)} para a anuidade sair de graça.`} ${gItau >= 4000 ? "Já está ganhando 2,5 pontos por dólar." : `Com fatura a partir de R$ 4 mil, os pontos sobem de 2 para 2,5 por dólar (faltam ${money0(4000 - gItau)}).`}</p>
    <p class="sub" style="font-size:12px">Regras do Itaú Uniclass Black em 2026 (confira no app do Itaú, elas mudam). Não vale gastar a mais só para bater a meta: passe para ele os gastos que hoje vão para outros cartões.</p></section>` : "";
  // 3. carteira
  const saldos = mil.saldos || [];
  const hoje = today();
  const cardCarteira = `<section class="card"><div class="head"><h2>Carteira de pontos e milhas</h2><span class="sub num">≈ ${money0(saldos.reduce((s,x)=>s+valorPontos(x.programa, num(x.saldo)),0))}</span></div>
    ${saldos.length ? saldos.map(x => { const dias = x.validade ? Math.round((new Date(x.validade) - new Date(hoje))/864e5) : null;
      return `<button class="item" data-saldoedit="${esc(x.id)}"><span class="t"><b>${esc(x.programa)}${x.quem ? " · " + esc(x.quem) : ""}</b><span class="${dias!=null && dias < 60 ? "neg" : ""}">${num(x.saldo).toLocaleString("pt-BR")} ${/Azul|Smiles|LATAM|TAP/.test(x.programa) ? "milhas" : "pontos"}${dias!=null ? ` · ${dias < 0 ? "venceu" : `vence em ${dias} dias`}` : ""}</span></span><span class="v num">≈ ${money0(valorPontos(x.programa, num(x.saldo)))}</span></button>`; }).join("") : `<p class="sub">Coloque quanto vocês têm em cada programa (veja nos apps: Itaú, Porto, Livelo, Azul, Smiles, LATAM, Premmia…). A Fina avisa antes de vencer.</p>`}
    <button class="btn ghost" data-act="novoSaldo">${I.plus}Adicionar saldo</button>
    <p class="sub" style="font-size:12px">O "≈ R$" é uma referência de mercado para comparar, não é preço oficial.</p></section>`;
  // 4. radar
  const rad = ls.get("radar", {}), its = (rad.itens || []);
  const origens = mil.origens || ["Itaú","Livelo","PortoPlus"];
  const paraVoces = its.filter(x => x.tipo === "transferencia" && x.origens.some(o => origens.includes(o)));
  const outras = its.filter(x => !paraVoces.includes(x)).slice(0, 8);
  const linhaPromo = x => `<a class="promo ${x.bonus >= 80 ? "top" : ""}" href="${esc(x.link)}" target="_blank" rel="noopener"><span class="pct">${x.bonus}%</span><span class="t"><b>${esc(x.titulo)}</b><small>${esc(x.data.split("-").reverse().join("/"))}${x.ultimoDia ? " · último dia" : ""}${x.tipo === "compra" ? " · compra de pontos" : ""}</small></span></a>`;
  const cardRadar = `<section class="card"><div class="head"><h2>Radar de promoções</h2><span class="sub">${rad.quando ? "atualizado " + new Date(rad.quando).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}) : ""}</span></div>
    ${rad.ok === false && !its.length ? `<p class="sub">Falta atualizar o robô da planilha para o radar funcionar.</p>` : ""}
    <div class="flabel">Para os pontos de vocês (${esc(origens.join(", "))})</div>
    ${paraVoces.length ? paraVoces.slice(0,8).map(linhaPromo).join("") : `<p class="sub">Nenhuma transferência com bônus para os pontos de vocês nos últimos dias. Calma: elas aparecem quase todo mês. O robô olha todo dia e avisa no celular quando passar de 80%.</p>`}
    ${outras.length ? dobra("outrasPromos", `Outras promoções (${outras.length})`, outras.map(linhaPromo).join("")) : ""}
    <button class="btn ghost" data-act="radar">Atualizar agora</button>
    <p class="sub" style="font-size:12px">Fontes: Pontos pra Voar, Passageiro de Primeira, Cartões de Crédito.me e Melhores Cartões. Antes de transferir, confira no app e cadastre-se na página da promoção.</p></section>`;
  // 5. calculadora
  const modo = S.calcModo || "produto", k = S.calc || {};
  let calcCorpo = "";
  if (modo === "produto"){ const v = num(k.preco) && num(k.pontos) ? num(k.preco)/num(k.pontos)*1000 : 0; const [tom, txt] = veredito(v, 30, 22);
    calcCorpo = `<div class="simin"><label>Preço do produto em dinheiro (R$)<input data-calcin="preco" inputmode="decimal" value="${num(k.preco)||""}"></label><label>Quantos pontos pedem<input data-calcin="pontos" inputmode="decimal" value="${num(k.pontos)||""}"></label></div>
    ${v ? `<div class="veredito ${tom}"><b>${txt}</b> · cada mil pontos valeriam ${money(v)}. Transferindo com bônus, mil pontos costumam valer uns R$ 25 a R$ 35.</div>` : ""}`; }
  if (modo === "transferir"){ const q = num(k.qtd), b = num(k.bonus), dest = k.destino || "Azul Fidelidade", milhas = q * (1 + b/100), vOrig = valorPontos(k.origem || "Itaú Pontos", q), vDest = valorPontos(dest, milhas);
    calcCorpo = `<div class="simin"><label>Pontos que vai mandar<input data-calcin="qtd" inputmode="decimal" value="${q||""}"></label><label>Bônus da promoção (%)<input data-calcin="bonus" inputmode="decimal" value="${b||""}"></label><label>Para<select data-calcin="destino">${["Azul Fidelidade","Smiles","LATAM Pass","TAP Miles&Go"].map(x=>`<option ${dest===x?"selected":""}>${x}</option>`).join("")}</select></label></div>
    ${q ? `<div class="veredito ${b >= 80 ? "bom" : b >= 50 ? "alerta" : "risco"}"><b>${b >= 80 ? "Bom momento" : b >= 50 ? "Dá para esperar algo melhor" : "Espere uma promoção"}</b> · ${Math.round(q).toLocaleString("pt-BR")} pontos viram <b>${Math.round(milhas).toLocaleString("pt-BR")} milhas</b> na ${esc(dest)} (≈ ${money0(vDest)}). Só transfira se for usar em até 1 ano: milhas vencem.</div>` : ""}`; }
  if (modo === "passagem"){ const pr = num(k.precoPass), mi = num(k.milhasPass), tx = num(k.taxas), v = pr && mi ? (pr - tx)/mi*1000 : 0; const prog = k.progPass || "Azul Fidelidade"; const ref = num(c.milhas?.valores?.[prog]) || VALOR_REF[prog] || 15; const [tom, txt] = veredito(v, ref*1.4, ref);
    calcCorpo = `<div class="simin"><label>Preço da passagem em dinheiro (R$)<input data-calcin="precoPass" inputmode="decimal" value="${pr||""}"></label><label>Milhas que pedem<input data-calcin="milhasPass" inputmode="decimal" value="${mi||""}"></label><label>Taxas pagas em dinheiro (R$)<input data-calcin="taxas" inputmode="decimal" value="${tx||""}"></label><label>Programa<select data-calcin="progPass">${["Azul Fidelidade","Smiles","LATAM Pass","TAP Miles&Go"].map(x=>`<option ${prog===x?"selected":""}>${x}</option>`).join("")}</select></label></div>
    ${v ? `<div class="veredito ${tom}"><b>${txt}</b> · cada mil milhas renderiam ${money(v)} (referência da ${esc(prog)}: ${money(ref)}). ${tom === "bom" ? "Use as milhas." : tom === "risco" ? "Melhor pagar em dinheiro e guardar as milhas." : "Compare outras datas."}</div>` : ""}`; }
  const cardCalc = `<section class="card"><div class="head"><h2>Vale a pena?</h2></div>
    <div class="seg aj-abas">${[["produto","Trocar por produto"],["transferir","Transferir"],["passagem","Emitir passagem"]].map(([m,t]) => `<button data-calc="${m}" aria-pressed="${modo===m}">${t}</button>`).join("")}</div>${calcCorpo}</section>`;
  // 6. onde ganhar pontos
  const desde = addM(ymOf(new Date()), -3), recentes = S.gastos.filter(g => g.data >= desde + "-01");
  const achados = PARCEIROS.map(pc => { const gs = recentes.filter(g => pc.re.test(g.descricao||"")); return {...pc, vezes: gs.length, total: gs.reduce((s,g)=>s+num(g.valor),0)}; });
  const usados = achados.filter(x => x.vezes).sort((a,b)=>b.total-a.total), outros = achados.filter(x => !x.vezes);
  const linhaP = x => `<div class="parc"><span><b>${esc(x.nome)}</b><small>${esc(x.programa)} · ${esc(x.como)}</small></span>${x.vezes ? `<span class="num sub">${x.vezes}x · ${money0(x.total)}</span>` : ""}</div>`;
  const cardOnde = `<section class="card"><div class="head"><h2>Onde ganhar pontos</h2><span class="sub">além do cartão</span></div>
    ${usados.length ? `<div class="flabel">Lugares onde vocês já compram (últimos 3 meses)</div>${usados.map(linhaP).join("")}` : ""}
    ${dobra("outrosParc", "Outros programas que valem em São Paulo", outros.map(linhaP).join(""))}
    <p class="sub">Dá para somar: pagar com o cartão que pontua <b>e</b> usar o app do lugar. Compras pela internet: entre pelo site da Livelo ou da Esfera antes de ir para a loja.</p></section>`;
  // 7. benefícios dos cartões
  const cardBenef = `<section class="card"><div class="head"><h2>Benefícios dos seus cartões</h2></div>
    ${dobra("bItau", "Itaú Uniclass Black (Mastercard Black)", `<ul class="guia"><li><b>Pontos:</b> 2 por dólar, ou 2,5 com fatura a partir de R$ 4 mil. Vão direto para Azul, LATAM, Smiles e TAP (não precisa de Livelo), quase sempre com bônus em promoção.</li><li><b>Anuidade:</b> de graça com R$ 8 mil por mês ou R$ 50 mil investidos no Itaú. Se não bater, peça desconto ao gerente antes de cancelar.</li><li><b>Salas VIP:</b> até 4 acessos por ano para quem bate o gasto mínimo (veja no app do Itaú). Em Guarulhos (T3) há salas Mastercard Black.</li><li><b>Mastercard Surpreenda:</b> cadastre o cartão no site; cada compra vale 1 ponto, e 10 pontos viram "pague 1, leve 2" (cinema, restaurantes).</li><li><b>Seguros:</b> pagando a passagem com o cartão, costuma vir seguro viagem e de bagagem. Emita o bilhete no site da Mastercard antes de viajar.</li></ul>`)}
    ${dobra("bPorto", "Porto Platinum", `<ul class="guia"><li><b>Pontos:</b> 1,5 por dólar no PortoPlus, que <b>vencem em 2 anos</b>. Só transfere a partir de 20 mil pontos (para LATAM, Azul ou TAP, 1 para 1), pelo WhatsApp da Porto.</li><li><b>Plano:</b> vejam o saldo no app da Porto. Se tiver 20 mil ou mais, transfiram numa promoção antes de parar de usar. Se tiver menos, usem no próprio PortoPlus antes de vencer.</li><li><b>Anuidade:</b> uns R$ 708 por ano depois do 1º ano grátis. Sem uso, vale cancelar ou pedir isenção.</li></ul>`)}
    ${dobra("bSant", "Santander Free (Daiana)", `<ul class="guia"><li><b>Não ganha pontos.</b> Serve só de reserva, sem anuidade. Para usar o dia de fechamento diferente sem perder pontos, prefira pedir ao Itaú para mudar o vencimento da fatura.</li></ul>`)}
    ${dobra("bVip", "“Embarque VIP” em Guarulhos: o que é", `<ul class="guia"><li><b>Visa Infinite Fast Pass:</b> fila exclusiva no raio-x do Terminal 3 para cartões Visa Infinite. É o que costuma aparecer como "embarque VIP".</li><li><b>Salas VIP:</b> no T3 há a Visa Infinite Lounge e salas Mastercard Black, entre outras. O acesso grátis depende do banco do cartão.</li><li>O Itaú tem a versão <b>Uniclass Infinite (Visa)</b> com os mesmos pontos: dá para pedir ao gerente a troca de bandeira se quiserem o Fast Pass.</li></ul>`)}
  </section>`;
  // 8. cartões para tentar
  const cardNovos = `<section class="card"><div class="head"><h2>Outros cartões: vale tentar?</h2></div>
    <p class="sub">Revisei a lista que vocês estudaram. Com o gasto de vocês (uns R$ 9 mil por mês), <b>o melhor é um cartão principal</b> com a anuidade de graça. Abrir vários divide o gasto e faz perder isenção.</p>
    ${[["Itaú Uniclass Black","Ficar","Já têm. 2,5 pontos por dólar e anuidade de graça com R$ 8 mil por mês. Correção da anotação: o Itaú não manda para a Livelo, mas manda direto para Azul, LATAM, Smiles e TAP, com bônus frequentes de até 120%. Então compensa, sim."],
      ["Bradesco Visa Infinite","Talvez","2 pontos Livelo por dólar, Visa Infinite (Fast Pass e salas Visa em Guarulhos). Aproveitem quando estiver com 1º ano grátis no app e peçam o adicional junto. Depois, a isenção pede uns R$ 5 mil por mês (não o de R$ 3 mil da anotação): só mantenham se não tirar gasto do Itaú."],
      ["C6 Carbon (Black)","Plano B","2 a 2,5 pontos por dólar (Átomos não vencem e vão para Livelo e companhias). Isenção por gasto entre R$ 4 mil e R$ 8 mil, conforme a versão. Bom se o Itaú deixar de isentar."],
      ["BB Visa Infinite / Platinum","Não agora","Infinite pede R$ 15 mil por mês para isentar. Platinum dá só 1,2 ponto por dólar."],
      ["Sicredi Black","Não agora","Salas VIP sem limite, mas sem isenção da anuidade. Só compensa viajando muito."],
      ["Cartões de companhia (Smiles, Azul, LATAM)","Não agora","Os pontos ficam presos em uma companhia só. O Itaú é mais flexível."],
      ["Pão de Açúcar Black","Não","Anuidade sem vantagem que o Itaú já não dê."],
      ["Nubank Ultravioleta","Não agora","2,2 pontos por dólar, mas pede gasto alto ou dinheiro investido no Nubank: dividiria o gasto com o Itaú."]].map(([n,v,t]) => `<div class="novo"><span><b>${esc(n)}</b><small>${esc(t)}</small></span><span class="tag ${v==="Ficar"?"bom":v==="Talvez"||v==="Plano B"?"alerta":"risco"}">${esc(v)}</span></div>`).join("")}
    <p class="sub" style="font-size:12px">Regras de 2026 tiradas de sites de cartões; mudam com frequência. A aprovação depende de cada banco. Pedir vários cartões de uma vez derruba o score.</p></section>`;
  // 9. como funciona + ajustes
  const cardGuia = `<section class="card"><div class="head"><h2>Como funciona (sem complicação)</h2></div>
    ${dobra("gBasico", "O caminho dos pontos até a viagem", `<ol class="guia"><li><b>Ganhe:</b> concentre os gastos no cartão que mais pontua (Itaú) e use os apps dos lugares (Premmia, Stix…).</li><li><b>Guarde:</b> deixe os pontos no Itaú. Lá eles esperam a promoção certa.</li><li><b>Espere o bônus:</b> o robô avisa quando a Azul, a Smiles ou a LATAM derem 80% ou mais para pontos do Itaú.</li><li><b>Transfira com destino:</b> só mande quando tiver uma viagem em vista (milhas vencem). Antes, cadastre-se na página da promoção.</li><li><b>Emita:</b> use a calculadora "Emitir passagem" para ver se aquela passagem vale as milhas.</li></ol>`)}
    ${dobra("gRegras", "Regras de ouro", `<ul class="guia"><li>Nunca gaste a mais para ganhar pontos. Juros do rotativo comem anos de milhas.</li><li>Pague a fatura inteira, sempre.</li><li>Troca por produto, dinheiro ou "pontos + dinheiro" quase sempre vale pouco.</li><li>Clubes (assinaturas Livelo, Smiles, Azul) só se forem usar: dão bônus maiores, mas custam todo mês.</li><li>Junte as milhas do casal na mesma companhia para emitir mais rápido (cada um transfere para a própria conta e vocês emitem a passagem um para o outro).</li></ul>`)}
    ${dobra("gGloss", "Palavras que aparecem muito", `<ul class="guia"><li><b>Milheiro:</b> mil pontos ou milhas.</li><li><b>Transferência bonificada:</b> mandar pontos com bônus (ex.: 100% = o dobro).</li><li><b>Paridade:</b> quantas milhas cada ponto vira (1 para 1 é o normal).</li><li><b>CPM:</b> custo por milheiro.</li><li><b>Clube:</b> assinatura mensal do programa.</li></ul>`)}
    ${dobra("gAjustes", "Ajustar os cartões", `${c.cartoes.map(kk => { const pr = progCartao(kk.nome); return `<div class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,130px) minmax(0,70px)"><span>${esc(kk.nome)}</span><select data-progcard="${esc(kk.nome)}">${PROGRAMAS.map(x=>`<option ${pr.programa===x?"selected":""}>${x}</option>`).join("")}</select><input data-ptscard="${esc(kk.nome)}" inputmode="decimal" value="${String(pr.pts).replace(".",",")}" aria-label="Pontos por dólar"></div>`; }).join("")}<p class="sub">Programa e pontos por dólar de cada cartão.</p><button class="btn ghost" data-act="salvarProgCartoes">Salvar</button>`)}
  </section>`;
  return `<div class="settings">${cardMes}${cardMeta}${cardRadar}${cardCarteira}${cardCalc}${cardOnde}${cardBenef}${cardNovos}${cardGuia}</div>`;
}
const PARCEIROS = [
  {nome:"Postos Petrobras", re:/premmia|petrobras|\bbr\b|posto/i, programa:"Premmia", como:"use o app Premmia ao abastecer; pontos viram desconto ou vão para LATAM/Smiles em promoção"},
  {nome:"Shell (Shell Box)", re:/shell/i, programa:"Stix", como:"pague pelo app Shell Box e junte Stix"},
  {nome:"Drogaria Raia e Drogasil", re:/raia|drogasil/i, programa:"Stix", como:"informe o CPF e junte Stix; também usam o app da farmácia"},
  {nome:"Pão de Açúcar e Extra", re:/p[aã]o de a[cç][uú]car|\bextra\b/i, programa:"Stix", como:"Stix + app Pão de Açúcar Mais"},
  {nome:"Assaí", re:/assa[ií]/i, programa:"Meu Assaí", como:"app Meu Assaí dá descontos exclusivos (não é ponto, mas economiza)"},
  {nome:"Atacadão", re:/atacad[aã]o/i, programa:"App Atacadão / Carrefour", como:"cupons e preços do app"},
  {nome:"O Boticário", re:/botic[aá]rio/i, programa:"Livelo / Clube Viva", como:"compre online entrando pelo site da Livelo (até 10 a 12 pontos por real em promoção)"},
  {nome:"Centauro e Netshoes", re:/centauro|netshoes/i, programa:"Livelo / Esfera", como:"compre online entrando pelo site da Livelo ou da Esfera"},
  {nome:"Shopee", re:/shopee/i, programa:"Livelo / Esfera (às vezes)", como:"confira se a Shopee está nas lojas parceiras do dia antes de comprar"},
  {nome:"Mercado Livre", re:/mercado ?livre|\bml\b|mercadolivre/i, programa:"Meli+", como:"cupons e frete; veja ofertas do Meli+"},
  {nome:"Uber e 99", re:/uber|\b99\b/i, programa:"Cartão que pontua", como:"cadastre o Itaú Black como pagamento nos apps"},
  {nome:"iFood", re:/ifood/i, programa:"Clube iFood", como:"só compensa se pedirem muito"},
  {nome:"C&A, Riachuelo, Renner", re:/c&a|riachuelo|renner/i, programa:"Livelo / Stix", como:"site da Livelo; C&A também tem Stix"},
  {nome:"Compras com Mastercard", re:/^$/, programa:"Mastercard Surpreenda", como:"cadastre o Itaú Black no site do Surpreenda: cada compra vale 1 ponto, 10 pontos = pague 1 leve 2"},
];
function dicaPontos(txt){
  const p = PARCEIROS.find(x => x.re.source !== "^$" && x.re.test(txt||""));
  if (p && !/Cartão que pontua/.test(p.programa)) toast(`Dica: ${p.nome} → ${p.programa}. ${p.como.charAt(0).toUpperCase() + p.como.slice(1)}.`, 5500);
}
function editarSaldo(id){
  const x = id ? (cfg().milhas?.saldos||[]).find(s => s.id === id) : {programa:"Itaú Pontos", quem:"Casal", saldo:"", validade:""}; if (!x) return;
  $("#modalRoot").innerHTML = `<div class="overlay" data-close="1"><div class="sheet" role="dialog" aria-modal="true" aria-label="Saldo de pontos"><h2>${id?"Editar":"Novo"} saldo</h2>
    <div class="fgrid"><label>Programa<select id="s-prog">${PROGRAMAS.map(p=>`<option ${x.programa===p?"selected":""}>${p}</option>`).join("")}</select></label>
    <label>De quem<select id="s-quem">${opts([...cfg().pessoas,"Casal"], x.quem)}</select></label>
    ${campoNum("s-saldo","Saldo (pontos ou milhas)",x.saldo)}<label>Vencem em (se tiver)<input type="date" id="s-val" value="${esc(x.validade)}"></label></div>
    <div class="acts">${id?`<button class="btn danger" data-saldodel="${esc(id)}">Apagar</button>`:"<span></span>"}<span style="display:flex;gap:8px"><button class="btn ghost" data-close="1">Cancelar</button><button class="btn" data-saldosave="${esc(id||"")}">Salvar</button></span></div></div></div>`;
}
function salvarSaldo(id){
  const x = {id: id || ("m" + uid()), programa: $("#s-prog").value, quem: $("#s-quem").value, saldo: num($("#s-saldo").value), validade: $("#s-val").value};
  const l = (cfg().milhas?.saldos||[]).filter(s => s.id !== x.id); l.push(x); $("#modalRoot").innerHTML = ""; saveConfig({milhas:{...(cfg().milhas||{}), saldos: l}});
}

/* ================= LER SEM IA: OFX, CSV, PDF de fatura, print e foto ================= */
const MESES_ABR = {jan:1,fev:2,mar:3,abr:4,mai:5,jun:6,jul:7,ago:8,set:9,out:10,nov:11,dez:12};
function carregarScript(src){ return new Promise((ok, erro) => { if ([...document.scripts].some(x => x.src === src)) return ok(); const el = document.createElement("script"); el.src = src; el.onload = ok; el.onerror = erro; document.head.append(el); }); }
function anoCerto(d, m){ const h = new Date(); let y = h.getFullYear(); if (new Date(y, m-1, d) > new Date(h.getTime() + 5*864e5)) y--; return `${y}-${pad(m)}-${pad(d)}`; }
function cartaoDoTexto(t){
  const low = t.toLowerCase(), cs = cfg().cartoes.map(k => k.nome);
  const final = cs.find(n => { const f = (n.match(/\d{4}/)||[])[0]; return f && low.includes(f); });
  if (final) return final;
  const marcas = [[/ita[uú]/, /ita/i], [/santander/, /santander/i], [/nubank|nu pagamentos/, /nubank/i], [/banco inter|\binter\b/, /inter/i], [/porto/, /porto/i]];
  for (const [re, nome] of marcas) if (re.test(low)) return cs.find(n => nome.test(n)) || "";
  return "";
}
/* aprende com o histórico: mesma loja, mesma categoria e mesma pessoa de antes */
function categoriaPelaHistoria(desc){
  const chave = String(desc||"").toLowerCase().replace(/[^a-zà-ú0-9 ]/g," ").split(/\s+/).filter(w => w.length > 2 && !/^(pag|com|loja|ltda|sao|paulo|outros)$/.test(w))[0];
  if (chave){ const g = [...S.gastos].reverse().find(x => (x.descricao||"").toLowerCase().includes(chave)); if (g) return {categoria: g.categoria, quem: g.quem}; }
  const PAL = [["Mercado",/mercado|supermerc|padaria|panific|feira|a[cç]ougue|atacad|assa[ií]|hirota|carrefour|sendas|p[aã]o de|emp[oó]rio|hortifruti/i],["Combustível",/posto|gasolina|combust|shell|ipiranga|premmia|petrobras|auto posto/i],["Transporte",/uber|\b99\b|ped[aá]gio|nutag|estacion|zona azul|\bzul\b|1 ?cart[aã]o|metr[oô]|oficina|centro automotivo|seguro auto/i],["Saúde/Farmácia",/farm|drogaria|raia|drogasil|pague menos|m[eé]dic|cl[ií]nica|laborat|rd saude/i],["Alimentação fora",/ifood|restaurante|lanche|burger|hamburg|pizza|sushi|a[cç]a[ií]|sorvete|gelato|caf[eé]|bar |lanchonete|99food|outback|mc ?donald|bk /i],["Lazer",/cinema|ingresso|spotify|netflix|parque|hotel|viagem|show|teatro/i],["Presentes",/presente|botic[aá]rio|natura|cacau show|chocolate/i],["Educação",/curso|escola|livr|papelaria|estudei|qconcurso/i],["Esporte/Academia",/academia|totalpass|gympass|jiu|crossfit|centauro|netshoes|decathlon/i],["Casa",/casa|lava|limpeza|constru|leroy|sodimac|madeira|m[oó]veis|eletro/i],["Compras",/shopee|shein|mercado ?livre|amazon|magalu|tiktok|aliexpress|loja|c&a|renner|riachuelo/i]];
  const hit = PAL.find(([n,re]) => re.test(desc||"") && catNames().includes(n));
  return {categoria: hit ? hit[0] : (catNames().includes("Serviços/Outros") ? "Serviços/Outros" : catNames()[0]), quem: ""};
}
function limparDesc(d){
  d = String(d||"").replace(/\s+/g," ").replace(/\b(outros|sao paulo|são paulo|sp|br|bra)\b\s*$/i,"").replace(/\s{2,}/g," ").trim();
  return d.toLowerCase().replace(/(^|[\s*\-/])([a-zà-ú])/g, (m,a,b) => a + b.toUpperCase()).slice(0, 80);
}
const IGNORAR = /pagamento|pagto|pgto|deb\.? ?autom|saldo anterior|total d|total a pagar|limite|encargos|juros do|cr[eé]dito rotativo|valor total|subtotal|lan[cç]amentos no cart|fatura anterior|recebemos seu pagamento/i;
function montarItem(dia, mes, ano, desc, valor, forma){
  let d = desc, parc = null;
  const m = d.match(/\b(?:parc(?:ela)?\.?\s*)?(\d{1,2})\s*(?:\/|de)\s*(\d{1,2})\b(?!\/)/i);
  if (m && Number(m[2]) >= Number(m[1]) && Number(m[2]) > 1 && Number(m[2]) <= 48){ parc = [Number(m[1]), Number(m[2])]; d = d.replace(m[0], " "); }
  const data = ano ? `${ano.length === 2 ? "20" + ano : ano}-${pad(mes)}-${pad(dia)}` : anoCerto(dia, mes);
  const nome = limparDesc(d); const h = categoriaPelaHistoria(nome);
  const quem = h.quem || (S.gastos.filter(g => g.forma === forma).map(g => g.quem).filter(Boolean).sort((a,b,arr) => 0)[0] || "");
  return parc ? {tipo:"parcela", data, valor, parcela_atual: parc[0], total_parcelas: parc[1], categoria: h.categoria, quem, forma, descricao: nome}
              : {tipo:"gasto", data, valor, categoria: h.categoria, quem, forma, descricao: nome};
}
const RE_VALOR = "(-\\s?)?(?:R\\$\\s?)?(-\\s?)?(\\d{1,3}(?:\\.\\d{3})*,\\d{2})(\\s?-)?";
function valorDe(m1, m2, num_, m4){ const v = num(num_); return (m1 || m2 || m4) ? -v : v; }
/* fatura em texto (PDF ou print com linhas "dd/mm loja valor"), inclusive com duas colunas na mesma linha */
function lerLinhasFatura(linhas, forma){
  const itens = [];
  const re = new RegExp("(\\d{2})\\/(\\d{2})(?:\\/(\\d{2,4}))?\\s+(.+?)\\s+" + RE_VALOR + "(?=\\s+\\d{2}\\/\\d{2}(?:\\/\\d{2,4})?\\s|\\s*$)", "g");
  let pular = false;
  // valor numa linha e "IOF ..." na de baixo (Santander): junta as duas
  linhas = linhas.map((l, i) => {
    const prox = linhas[i+1] || "";
    if (/^\s*\d{1,3}(?:\.\d{3})*,\d{2}\s*$/.test(l) && /^\s*IOF\b/i.test(prox) && !/\d,\d{2}/.test(prox)) return "";
    const ant = linhas[i-1] || "";
    if (/^\s*IOF\b/i.test(l) && !/\d,\d{2}/.test(l) && /^\s*\d{1,3}(?:\.\d{3})*,\d{2}\s*$/.test(ant)) return l.trim() + " " + ant.trim();
    return l;
  });
  for (const l of linhas){
    if (l === "@@coluna"){ pular = false; continue; }
    if (/pr[oó]ximas? faturas|compras parceladas\s*-|parcelas? futuras|lan[cç]amentos futuros/i.test(l)){ pular = true; continue; }   // parcelas que ainda vão vir: não são desta fatura
    if (pular && /limites? de cr[eé]dito|encargos|lan[cç]amentos:|despesas|pagamentos? efetuados|resumo/i.test(l)) pular = false;
    if (pular) continue;
    const iof = l.match(/\b(?:repasse de )?IOF\b(?!.*financ)(?!.*\d{2}\/\d{2}).*?(\d{1,3}(?:\.\d{3})*,\d{2})\s*$/i);
    if (iof && num(iof[1]) > 0 && itens.length){ const u = itens[itens.length-1]; itens.push({...u, tipo:"gasto", valor:num(iof[1]), descricao:"IOF compra internacional", parcela_atual:undefined, total_parcelas:undefined}); continue; }
    re.lastIndex = 0; let m;
    while ((m = re.exec(l))){
      let [, dd, mm, aa, desc, s1, s2, v, s4] = m;
      const dois = desc.match(/^(.*\S)\s+(-?\d{1,3}(?:\.\d{3})*,\d{2})$/);      // compra internacional: "loja 27,05 5,00" → R$ 27,05 (o outro é em dólar)
      if (dois){ desc = dois[1]; v = dois[2].replace("-",""); if (dois[2].startsWith("-")) s1 = "-"; }
      if (Number(mm) < 1 || Number(mm) > 12 || Number(dd) < 1 || Number(dd) > 31 || IGNORAR.test(desc) || (desc.match(/[a-zà-ú]/gi)||[]).length < 3) continue;
      itens.push(montarItem(Number(dd), Number(mm), aa, desc, valorDe(s1, s2, v, s4), forma));
    }
  }
  return itens;
}
/* print de app de banco: data num título ("24 OUT", "3 de novembro"), loja numa linha e "R$ 89,80" em outra */
function lerListaApp(linhas, forma){
  // prints de app de banco: cada compra tem dia/mês, nome e "R$ valor", em ordens diferentes conforme o banco
  const MES = "(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)";
  const RUIDO = /^(pendente|cart[aã]o (f[ií]sico|virtual)|adicional|outros|despesas|ver mais|antecipar|resumo da fatura|dia de vencimento|melhor dia|subtotal|titular|parcelad[oa]|em processamento|\W*$)/i;
  const itens = []; let dia = 0, mes = 0, antes = [], cur = null;
  const maisEhCredito = linhas.some(l => /\+\s?R\$/.test(l));     // Inter: "+R$" é crédito e "-R$" é compra; nos outros, "-R$" é crédito
  const emite = () => {
    if (!cur) return;
    const texto = cur.desc.join(" ").replace(/\s+/g, " ").trim(), m = cur.mes || mes;
    if (cur.dia && m && texto.length > 1 && !IGNORAR.test(texto)){
      const it = montarItem(cur.dia, m, null, texto, cur.credito ? -cur.valor : cur.valor, forma);
      if (cur.parc) Object.assign(it, {tipo:"parcela", parcela_atual: cur.parc[0], total_parcelas: cur.parc[1]});
      itens.push(it);
    }
    cur = null;
  };
  for (const l0 of linhas){
    const l = l0.trim().replace(/^[<>©@«»&"“”']+\s*/, "").replace(/^[O0o]\s+(?=[+\-]?R\$|[A-ZÀ-Ú]{3,})/, "").replace(/\s*[>›]$/, "").trim();
    if (!l) continue;
    const dt = l.match(new RegExp("^(?:[a-zà-ú\\-]+,?\\s+)?(\\d{1,2})\\s*(?:de\\s+)?" + MES + "[a-zç]*\\.?(?:\\s+de\\s+\\d{4})?$", "i"));
    if (dt){ emite(); dia = Number(dt[1]); mes = MESES_ABR[dt[2].toLowerCase()]; antes = []; continue; }
    const mo = l.match(new RegExp("^" + MES + "\\b\\.?\\s*(.*)$", "i"));      // Porto: o mês vem na linha de baixo ("OUT pendente")
    if (mo && cur && !cur.mes){
      cur.mes = MESES_ABR[mo[1].toLowerCase()];
      let resto = mo[2].replace(/pendente/i, "");
      const pm = resto.match(/parcela\s*(\d{1,2})\s*de\s*(\d{1,2})/i); if (pm){ cur.parc = [Number(pm[1]), Number(pm[2])]; resto = resto.slice(0, pm.index); }
      resto = resto.replace(/\s*B\s?R\s*$/i, "").replace(/[^\wà-ú* ]/gi, "").trim();
      if (resto.length > 1 && !/^(recebemos|obrigad)/i.test(resto)) cur.desc.push(resto);
      continue;
    }
    const pv = l.match(/parcela\s+(\d{1,2})\s*de\s*(\d{1,2})/i);
    if (pv){ const par = [Number(pv[1]), Number(pv[2])]; if (cur) cur.parc = par; else if (itens.length && itens[itens.length-1].tipo === "gasto") Object.assign(itens[itens.length-1], {tipo:"parcela", parcela_atual: par[0], total_parcelas: par[1]}); continue; }
    const mv = l.match(new RegExp(RE_VALOR));
    if (mv && /(R\$|^[+\-]?\s?\d{1,3}(\.\d{3})*,\d{2}\s?-?$)/.test(l)){
      emite();
      const txt = l.slice(0, mv.index).replace(/[+\-—–]\s*$/, "").trim();
      const credito = maisEhCredito ? /^\+|\+\s?R\$/.test(l) : (!!(mv[1] || mv[2] || mv[4]) || /\-\s?R\$/.test(l) || /estorno/i.test(txt));
      const valor = num(mv[3]);
      const c1 = txt.match(new RegExp("^(\\d{1,2})\\s*" + MES + "\\w*\\.?\\s+(.+)$", "i"));
      const c2 = txt.match(/^(\d{1,2})\.?\s+[—–\-"“”']*\s*(.*[a-zà-ú].*)$/i);
      if (c1) cur = {dia: Number(c1[1]), mes: MESES_ABR[c1[2].toLowerCase()], desc: [c1[3]], valor, credito};
      else if (c2) cur = {dia: Number(c2[1]), mes: 0, desc: [c2[2]], valor, credito};
      else if ((txt.match(/[a-zà-ú]/gi) || []).length >= 3) cur = {dia, mes, desc: [txt], valor, credito};
      else cur = {dia, mes, desc: antes.slice(-2), valor, credito, depois: !antes.length};
      antes = []; continue;
    }
    if (RUIDO.test(l)) continue;
    if (cur && cur.depois && cur.desc.length < 2) cur.desc.push(l.replace(/\s+[a-z]{2}$/i, ""));   // Inter: o nome vem depois do valor
    else { if (cur && !cur.depois) emite(); antes.push(l.replace(/\s+[a-z]{2}$/i, "")); if (antes.length > 2) antes = antes.slice(-2); }
  }
  emite();
  return itens;
}
function totalDaFatura(t){
  const pats = [/total\s+desta\s+fatura/i, /o total da sua fatura [ée]/i, /saldo desta fatura/i, /total a pagar/i, /valor total da fatura/i, /total da fatura(?!\s+anterior)/i];
  for (const p of pats){ const m = t.match(new RegExp(p.source + "[^\\d\\n-]{0,30}(?:R\\$\\s?)?(\\d{1,3}(?:\\.\\d{3})*,\\d{2})", "i")); if (m) return num(m[1]); }
  return 0;
}
async function textoDoPDF(file){
  await carregarScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js");
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  const pdf = await window.pdfjsLib.getDocument({data: await file.arrayBuffer()}).promise; const linhas = [];
  for (let n = 1; n <= Math.min(pdf.numPages, 15); n++){
    const page = await pdf.getPage(n); const tc = await page.getTextContent(); const larg = page.getViewport({scale:1}).width;
    const its = tc.items.filter(it => it.str.trim());
    const ehData = it => /^\d{2}\/\d{2}\b/.test(it.str.trim());
    const xsDireita = its.filter(it => ehData(it) && it.transform[4] > larg * 0.35).map(it => it.transform[4]);
    const freq = {}; xsDireita.forEach(x => { const k = Math.round(x / 6) * 6; freq[k] = (freq[k]||0) + 1; });
    const xCol = Object.keys(freq).map(Number).sort((a,b) => freq[b] - freq[a])[0];
    const meio = xCol ? xCol - 6 : larg * 0.5;          // a 2ª coluna começa onde fica a maioria das datas da direita
    const duasColunas = its.filter(it => ehData(it) && it.transform[4] < meio).length >= 3 && its.filter(it => ehData(it) && it.transform[4] >= meio).length >= 3;   // faturas em duas colunas (Itaú, Santander)
    const emLinhas = lista => { const porY = {}; for (const it of lista){ const y = Math.round(it.transform[5] / 3) * 3; (porY[y] ||= []).push(it); }
      return Object.keys(porY).map(Number).sort((a,b) => b - a).map(y => porY[y].sort((a,b) => a.transform[4] - b.transform[4]).map(i => i.str.trim()).join(" ")); };
    if (duasColunas){ linhas.push(...emLinhas(its.filter(it => it.transform[4] < meio)), "@@coluna", ...emLinhas(its.filter(it => it.transform[4] >= meio))); }
    else linhas.push(...emLinhas(its));
  }
  return linhas;
}
async function textoDaImagem(file){
  S.lendo = "Lendo o print sem IA… (na 1ª vez demora um pouco)"; render();
  await carregarScript("https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js");
  const r = await window.Tesseract.recognize(file, "por");
  return (r.data.text || "").split("\n").map(x => x.trim()).filter(Boolean);
}
function lerOFX(t){
  const forma = /nu pagamentos|nubank/i.test(t) ? (cfg().cartoes.find(k => /nubank/i.test(k.nome))?.nome || "") : cartaoDoTexto(t);
  const itens = []; const re = /<STMTTRN>([\s\S]*?)<\/STMTTRN>/gi; let m;
  const tag = (b, n) => (b.match(new RegExp("<" + n + ">([^<\\r\\n]*)", "i")) || [,""])[1].trim();
  while ((m = re.exec(t))){
    const b = m[1], v = parseFloat(tag(b,"TRNAMT").replace(",", ".")), dt = tag(b,"DTPOSTED"), memo = tag(b,"MEMO") || tag(b,"NAME");
    if (!v || v > 0 || IGNORAR.test(memo)) continue;                   // só compras (débitos); pagamento da fatura fica de fora
    itens.push(montarItem(Number(dt.slice(6,8)), Number(dt.slice(4,6)), dt.slice(0,4), memo, Math.abs(v), forma));
  }
  const bal = tag(t, "BALAMT"); return {itens, fatura: forma && bal ? {cartao: forma, total: Math.abs(parseFloat(bal.replace(",", ".")))} : null};
}
function lerCSV(t, nomeArq){
  const linhas = t.split(/\r?\n/).filter(x => x.trim()); if (linhas.length < 2) return {itens:[]};
  const sep = (linhas[0].match(/;/g)||[]).length >= (linhas[0].match(/,/g)||[]).length ? ";" : ",";
  const cel = l => l.split(new RegExp(sep + '(?=(?:[^"]*"[^"]*")*[^"]*$)')).map(x => x.replace(/^"|"$/g,"").trim());
  const forma = cartaoDoTexto(nomeArq + " " + linhas[0]);
  const rows = linhas.slice(1).map(cel).map(c => {
    const dc = c.find(x => /^\d{2}\/\d{2}\/\d{4}$|^\d{4}-\d{2}-\d{2}/.test(x)); const vc = [...c].reverse().find(x => /^-?R?\$?\s?-?[\d.]+[,.]\d{2}$/.test(x.replace(/\s/g,"")));
    const desc = c.filter(x => x !== dc && x !== vc).sort((a,b) => b.length - a.length)[0] || "";
    if (!dc || !vc) return null;
    const [y,mo,d] = /^\d{4}/.test(dc) ? dc.slice(0,10).split("-").map(Number) : dc.split("/").reverse().map(Number);
    const v = vc.includes(",") ? num(vc) : parseFloat(vc.replace(/[^\d.-]/g,""));
    return {y, mo, d, desc, v};
  }).filter(Boolean);
  const negs = rows.filter(r => r.v < 0).length, compraNeg = negs > rows.length / 2;   // extrato de conta: compra é negativa
  const itens = rows.filter(r => (compraNeg ? r.v < 0 : r.v > 0) && !IGNORAR.test(r.desc)).map(r => montarItem(r.d, r.mo, String(r.y), r.desc, Math.abs(r.v), forma));
  return {itens};
}
async function lerSemIA(files){
  let itens = [], fatura = null, metodos = new Set();
  for (const f of files){
    const nome = (f.name||"").toLowerCase();
    if (/\.ofx$/.test(nome) || /ofx/.test(f.type)){ const r = lerOFX(await f.text()); itens.push(...r.itens); fatura = fatura || r.fatura; metodos.add("do arquivo do banco"); continue; }
    if (/\.csv$/.test(nome) || /csv/.test(f.type)){ const r = lerCSV(await f.text(), nome); itens.push(...r.itens); metodos.add("da planilha do banco"); continue; }
    let linhas = [];
    if (f.type === "application/pdf"){ S.lendo = "Lendo o PDF sem IA…"; render(); linhas = await textoDoPDF(f); metodos.add("do PDF"); }
    else if (f.type.startsWith("image/")){ linhas = await textoDaImagem(f); metodos.add("do print"); }
    else continue;
    const texto = linhas.join("\n"), forma = cartaoDoTexto(texto);
    let lidos = lerLinhasFatura(linhas, forma);
    if (lidos.length < 2 && f.type.startsWith("image/")) lidos = lerListaApp(linhas, forma);
    itens.push(...lidos);
    const tot = totalDaFatura(texto); if (tot && !fatura) fatura = {cartao: forma, total: tot};
  }
  S.lendo = "";
  return {itens, fatura, metodo: [...metodos].join(" e ")};
}
/* frase simples com um valor: "gastei 45 na farmácia no pix", "recebi 118 do blablacar", "dei 1000 de dízimo" */
function lerFraseSemIA(text){
  const t = String(text||""); if (!t || /\?/.test(t)) return null;
  const valores = t.match(/\d{1,6}(?:[.,]\d{1,2})?/g) || []; if (valores.length !== 1) return null;
  if (/d[ií]zimo|oferta|reserva|investi/i.test(t)){ const v = num(valores[0].replace(".", ",")); return {itens:[{tipo:"separado", mes: /m[eê]s passado/i.test(t) ? addM(ymOf(new Date()), -1) : ymOf(new Date()), valor:v, para: /d[ií]zimo|oferta/i.test(t) ? "dizimo" : /reserva/i.test(t) ? "reserva" : "investimentos", quem: S.me || "Casal", descricao: limparDesc(t.replace(valores[0],""))}], metodo:"da sua mensagem"}; }
  if (/\b(recebi|entrou|ganhei|caiu|sal[aá]rio)\b/i.test(t)){ const v = num(valores[0].replace(".", ",")); return {itens:[{tipo:"entrada", mes: ymOf(new Date()), valor:v, quem: S.me || "Casal", tipo_entrada: /sal[aá]rio/i.test(t) ? "Salário" : "Renda extra", descricao: limparDesc(t.replace(valores[0],"").replace(/\b(recebi|entrou|ganhei|caiu|reais|r\$|de|do|da|no|na)\b/gi," "))}], metodo:"da sua mensagem"}; }
  const it = lancamentoRapido(t); if (!it) return null;
  const h = categoriaPelaHistoria(it.descricao); if (!it.categoria) it.categoria = h.categoria;
  return {itens:[it], metodo:"da sua mensagem"};
}
/* ---------- conexão com a planilha (robô do Google) ---------- */
const ROBO_PADRAO = "https://script.google.com/macros/s/AKfycbymo5cSfuaGS3KsTzaxP8-EY1AKJXcDnoRYGziV5Ley7Mjj-skDiKUggXcylB31lOMq/exec";   // endereço do robô (Implantar > App da Web), preenchido depois da implantação
const robo = () => ROBO_PADRAO || ls.get("robo", "");   // o endereço oficial sempre vence o que foi digitado antes
const codigo = () => ls.get("codigo", "");
let enviando = false;

async function api(body, signal){
  const r = await fetch(robo(), {method:"POST", body: JSON.stringify({...body, c: codigo()}), signal});
  return r.json();
}
function lerJSON(t){
  if (!t) return null;
  try{ return JSON.parse(t); }catch{}
  const m = String(t).replace(/```json|```/g,"").match(/\{[\s\S]*\}/);
  try{ return m ? JSON.parse(m[0]) : null; }catch{ return null; }
}
function imgBase64(file, max, q){
  return new Promise((ok, erro) => {
    const img = new Image(); const url = URL.createObjectURL(file);
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement("canvas"); c.width = Math.round(img.width*k); c.height = Math.round(img.height*k);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
      ok(c.toDataURL("image/jpeg", q).split(",")[1]);
    };
    img.onerror = () => { URL.revokeObjectURL(url); erro(new Error("imagem")); };
    img.src = url;
  });
}

function aplicarDados(d){
  const app = d.app || {};
  S.config = {...DEFAULT_CONFIG, ...app, ...d.config, nomeAssistente: app.nomeAssistente || "Fina", regrasQuem: app.regrasQuem ?? DEFAULT_REGRAS, pessoas: app.pessoas || ["Daiana","Gustavo"], perfis: app.perfis || {}, bases: app.bases || {}};
  S.gastos = d.gastos || []; S.parcelas = d.parcelas || []; S.entradas = d.entradas || []; S.separados = d.separados || S.separados || [];
  S.atualizado = d.atualizado || ""; if (d.temIA !== undefined) S.temIA = d.temIA;
  for (const op of S.fila) aplicarLocal(op);       // o que ainda não subiu continua aparecendo
  Object.keys(S.loaded).forEach(k => S.loaded[k] = true);
}
function guardarLocal(){
  const config = {}, app = {};
  for (const [k,v] of Object.entries(cfg())) (CONFIG_KEYS.includes(k) ? config : app)[k] = v;
  ls.set("dados", {config, app, gastos:S.gastos, parcelas:S.parcelas, entradas:S.entradas, separados:S.separados, atualizado:S.atualizado});
  ls.set("fila", S.fila);
}
const juntar = (a, b) => { const o = {...(a||{})}; for (const k of Object.keys(b||{})) o[k] = (b[k] && typeof b[k]==="object" && !Array.isArray(b[k]) && a && a[k] && typeof a[k]==="object") ? juntar(a[k], b[k]) : b[k]; return o; };
function aplicarLocal(op){
  if (op.a === "app" || op.a === "config"){ S.config = juntar(S.config || DEFAULT_CONFIG, op.app || op.config); return; }
  if (op.a !== "salvar" && op.a !== "apagar") return;
  const key = {gasto:"gastos", parcela:"parcelas", entrada:"entradas", separado:"separados"}[op.tipo];
  const id = op.a === "salvar" ? op.item.id : op.id;
  const list = S[key].filter(x => x.id !== id);
  if (op.a === "salvar") list.push({...op.item});
  S[key] = list;
}
function enfileirar(op, chave){
  if (chave) S.fila = S.fila.filter(o => o._k !== chave);
  S.fila.push({...op, _k: chave || ""});
}
function mudar(acao, tipo, item){
  if (tipo === "separado"){                       // guardou ou tirou da reserva: o saldo da reserva acompanha
    const antes = S.separados.find(x => x.id === item.id);
    const delta = (acao === "salvar" && item.para === "reserva" ? num(item.valor) : 0) - (antes?.para === "reserva" ? num(antes.valor) : 0);
    if (delta){ const r = {...cfg().reserva, saldo: Math.round((num(cfg().reserva.saldo) + delta)*100)/100, atualizado: today()}; S.config = {...cfg(), reserva:r}; enfileirar({a:"config", config:{reserva:r}}, "reserva-saldo"); }
  }
  if (acao === "salvar"){
    const it = {...item, id: item.id || ("tmp-" + uid())};
    const op = {a:"salvar", tipo, item: it};
    enfileirar(op, tipo + ":" + it.id); aplicarLocal(op);
  } else {
    const k = tipo + ":" + item.id;
    if (String(item.id).startsWith("tmp-")) S.fila = S.fila.filter(o => o._k !== k);
    else enfileirar({a:"apagar", tipo, id:item.id}, k);
    aplicarLocal({a:"apagar", tipo, id:item.id});
  }
  guardarLocal(); render(); enviar();
}
async function enviar(){
  if (enviando || !S.fila.length || !navigator.onLine || !robo()) return;
  enviando = true; const lote = S.fila.slice();
  try{
    const r = await api({a:"lote", ops: lote.map(({_k, ...o}) => o), devolver: true});
    if (r.ok){
      S.fila = S.fila.slice(lote.length);
      if (r.dados) aplicarDados(r.dados);
      guardarLocal(); S.erro = "";
    } else if (r.erro === "codigo"){ sair("A senha da família mudou. Digite a nova senha."); }
    else { S.erro = "A planilha recusou uma alteração. Ela continua guardada no celular."; }
  }catch{ /* sem internet: tenta de novo depois */ }
  finally { enviando = false; renderSeguro(); if (S.fila.length && navigator.onLine) setTimeout(enviar, S.erro ? 8000 : 300); }
}
async function carregar(){
  if (!codigo() || !robo()) return;
  try{
    const t = await (await fetch(robo(), {method:"POST", body: JSON.stringify({a:"ler", c: codigo()})})).text();
    let r; try{ r = JSON.parse(t); }catch{ S.erro = "O robô deu erro: " + (t.replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim().slice(0,160) || "resposta vazia"); applyTheme(); renderSeguro(); return; }
    if (r.ok){ aplicarDados(r); guardarLocal(); S.erro = ""; setTimeout(gerarRecorrentes, 200); }
    else if (r.erro === "codigo") return sair("Essa senha não abriu a planilha. Confira e tente de novo.");
    else S.erro = "A planilha não respondeu direito agora" + (r.erro ? " (" + r.erro + ")" : "") + ".";
  }catch{ if (!S.config) S.erro = navigator.onLine ? "Não consegui falar com a planilha. O robô precisa estar publicado com “Quem pode acessar: Qualquer pessoa”." : "Sem internet e ainda sem dados guardados neste aparelho."; }
  applyTheme(); renderSeguro();
  enviar();
}
function renderSeguro(){ if (S.tab === "assistente" && document.activeElement?.closest?.(".composer")) return; if ($("#modalRoot").innerHTML) return; render(); }
function sair(msg){
  ls.set("codigo", ""); try{ localStorage.removeItem("fina:dados"); }catch{}
  S.config = null; S.gastos = []; S.parcelas = []; S.entradas = []; S.separados = []; Object.keys(S.loaded).forEach(k => S.loaded[k] = false);
  S.gateMsg = msg || ""; S.gateQuem = ""; S.gatePessoas = null; render();
}
function renderGate(){
  $("#tabbar").innerHTML = ""; $("#rail").innerHTML = "";
  if (S.gateFamilia || S.gatePessoas === false) return renderGateFamilia();
  if (!S.gatePessoas){ $("#view").innerHTML = `<div class="gate"><div class="gate-in">${BOT}<h1>Oi! Eu sou a Fina.</h1><p class="sub">Abrindo…</p></div></div>`;
    api({a:"pessoas"}).then(r => { S.gatePessoas = r.ok && r.pessoas?.length ? r.pessoas : false; render(); }).catch(() => { S.gatePessoas = false; render(); }); return; }
  const quem = S.gateQuem;
  if (!quem){
    $("#view").innerHTML = `<div class="gate"><div class="gate-in">${BOT}<h1>Oi! Quem está usando?</h1><p class="sub">Cada um entra com a própria senha.</p>
      <div class="people">${S.gatePessoas.map(p => `<button class="person" data-gatequem="${esc(p.nome)}"><span class="av" style="width:76px;height:76px;background:var(--accent)"><span style="font-size:34px">${esc(p.nome[0])}</span></span><b>${esc(p.nome)}</b></button>`).join("")}</div>
      ${S.gateMsg ? `<p class="sub" style="color:var(--bad)">${esc(S.gateMsg)}</p>` : ""}</div></div>`;
    return;
  }
  const p = S.gatePessoas.find(x => x.nome === quem) || {};
  if (!p.temSenha){
    $("#view").innerHTML = `<div class="gate"><div class="gate-in">${BOT}<h1>${esc(quem)} ainda não tem senha</h1>
      <p class="sub">Crie a senha no aparelho onde a Fina já está aberta: entre como ${esc(quem)} lá, e ela pede para criar. Depois volte aqui.</p>
      <button class="btn ghost" data-act="gateVoltar" style="width:100%;justify-content:center">Voltar</button>
      <button class="btn ghost" data-act="gateFamilia" style="width:100%;justify-content:center">Tenho a senha antiga da família</button></div></div>`;
    return;
  }
  $("#view").innerHTML = `<div class="gate"><form class="gate-in" id="gatePessoaForm" autocomplete="on">${BOT}<h1>Oi, ${esc(quem)}!</h1>
    <p class="sub">Digite a sua senha.</p>
    <input type="text" name="username" autocomplete="username" value="${esc(quem)}" style="display:none" tabindex="-1" aria-hidden="true">
    <input id="gateSenha" name="password" type="password" autocomplete="current-password" autocapitalize="none" placeholder="sua senha" aria-label="Senha de ${esc(quem)}">
    <button class="btn" type="submit" style="width:100%;justify-content:center">Entrar</button>
    ${S.gateMsg ? `<p class="sub" style="color:var(--bad)">${esc(S.gateMsg)}</p>` : ""}
    <p class="sub" style="font-size:13px">Quando o navegador perguntar, toque em <b>Salvar senha</b>.</p>
    <button class="btn ghost" type="button" data-act="gateVoltar" style="width:100%;justify-content:center">Não sou ${esc(quem)}</button></form></div>`;
  autoEntrar();
}
async function entrarPessoaGate(){
  const quem = S.gateQuem, senha = $("#gateSenha")?.value || "";
  if (!senha){ S.gateMsg = "Digite a senha."; return render(); }
  $("#view").innerHTML = `<div class="card"><p class="sub">Abrindo…</p></div>`;
  try{
    const r = await api({a:"entrarPessoa", pessoa:quem, senha});
    if (r.ok && r.codigo){ ls.set("codigo", r.codigo); ls.set("me", quem); S.me = quem; S.desbloqueado = true; S.lockPessoa = ""; S.gateMsg = ""; guardarSenhaNoNavegador(quem, senha); loadPerson(); await carregar(); return; }
    S.gateMsg = r.erro === "bloqueado" ? "Muitas tentativas. Espere 15 minutos." : r.erro === "sem_senha" ? "Essa pessoa ainda não criou senha." : "Senha errada. Tente de novo.";
  }catch{ S.gateMsg = "Não consegui falar com a planilha. Confira a internet."; }
  render();
}
/* jeito antigo (senha da família): só se o robô ainda não foi atualizado ou ninguém criou senha */
function renderGateFamilia(){
  $("#view").innerHTML = `<div class="gate"><form class="gate-in" id="gateForm" autocomplete="on">${BOT}<h1>Oi! Eu sou a Fina.</h1>
    <p class="sub">Digite a senha da família (a antiga) para abrir neste aparelho. Depois cada um passa a entrar com a própria senha.</p>
    <input type="text" name="username" autocomplete="username" value="Família Assis" style="display:none" tabindex="-1" aria-hidden="true">
    <input id="gateCode" name="password" type="password" autocomplete="current-password" autocapitalize="none" placeholder="senha da família" aria-label="Senha da família">
    ${robo() ? "" : `<input id="gateRobo" autocomplete="off" placeholder="endereço do robô (https://script.google.com/…)" aria-label="Endereço do robô" style="font-size:13px;letter-spacing:0">`}
    <button class="btn" type="submit" style="width:100%;justify-content:center">Entrar</button>
    ${S.gateMsg ? `<p class="sub" style="color:var(--bad)">${esc(S.gateMsg)}</p>` : ""}
    ${S.gatePessoas ? `<button class="btn ghost" type="button" data-act="gateVoltar" style="width:100%;justify-content:center">Voltar</button>` : ""}</form></div>`;
  autoEntrar();
}
/* o navegador guarda a senha (Chrome entra sozinho; iPhone e Mac preenchem pelo Chaveiro) */
let tentouAuto = false;
async function autoEntrar(){
  if (tentouAuto || !window.PasswordCredential || !navigator.credentials?.get) return; tentouAuto = true;
  try{ const cred = await navigator.credentials.get({password:true, mediation:"optional"}); if (!cred?.password || codigo()) return;
    if (cred.id === "Família Assis"){ const el = $("#gateCode"); if (el){ el.value = cred.password; entrar(); } }
    else if (S.gatePessoas && S.gatePessoas.some(p => p.nome === cred.id && p.temSenha)){ S.gateQuem = cred.id; render(); const el = $("#gateSenha"); if (el){ el.value = cred.password; entrarPessoaGate(); } } }catch{}
}
function guardarSenhaNoNavegador(id, senha){
  if (senha === undefined){ senha = id; id = "Família Assis"; }
  try{ if (window.PasswordCredential && navigator.credentials?.store) navigator.credentials.store(new PasswordCredential({id, password:senha, name:id})).catch(()=>{}); }catch{}
}
async function entrar(){
  const c = $("#gateCode")?.value.trim(); const r = $("#gateRobo")?.value.trim();
  if (r) ls.set("robo", r);
  if (!c){ S.gateMsg = "Digite a senha."; return render(); }
  if (!robo()){ S.gateMsg = "Falta o endereço do robô."; return render(); }
  ls.set("codigo", c); S.gateMsg = ""; $("#view").innerHTML = `<div class="card"><p class="sub">Abrindo a planilha…</p></div>`;
  await carregar();
  if (codigo()) guardarSenhaNoNavegador(c);
}
function netBadge(){
  if (!navigator.onLine) return `<span class="net">Sem internet · ${S.fila.length ? S.fila.length + " alteração(ões) esperando" : "mostrando o que está guardado"}</span>`;
  if (S.fila.length) return `<span class="net">Enviando ${S.fila.length} alteração(ões)…</span>`;
  if (S.erro) return `<span class="net">${esc(S.erro)}</span>`;
  return "";
}

/* ---------- avisos no celular (app ntfy) ---------- */
function meusAvisos(){ return {ativo:false, topico:"", fechamento:true, orcamento:true, semanal:true, contas:true, milhas:true, quadro:true, ...(cfg().perfis?.[S.me]?.avisos || {})}; }
function salvarAvisos(patch){
  const av = {...meusAvisos(), ...patch};
  if (av.ativo && !av.topico) av.topico = "fina-" + Math.random().toString(36).slice(2,12) + "-" + S.me.normalize("NFD").replace(/[^\w]/g,"").toLowerCase();
  S.config = {...cfg(), perfis:{...(cfg().perfis||{}), [S.me]:{...(cfg().perfis?.[S.me]||{}), avisos:av}}};
  enfileirar({a:"app", app:{perfis:{[S.me]:{avisos:av}}}}, "avisos:"+S.me); guardarLocal(); render(); enviar();
}
function renderIA(){
  return `<section class="card"><div class="head"><h2>Inteligência da ${esc(cfg().nomeAssistente)}</h2><span class="sub">${S.temIA ? "ligada" : "falta a chave"}</span></div><div class="form">
    ${S.temIA ? `<p class="sub">A IA está ligada (Gemini, grátis). A chave fica guardada no Google e nos aparelhos de vocês dois, para a Fina ler mais rápido.</p>` :
      `<p class="sub">Para eu ler prints e entender o que você fala, cole aqui uma chave grátis do Gemini. Pode ser a mesma do Daia Studio, ou crie uma em <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> (toque em “Criar chave de API” e copie).</p>`}
    <input id="chaveIA" type="password" autocomplete="off" placeholder="${S.temIA ? "trocar a chave" : "cole a chave aqui"}" aria-label="Chave do Gemini">
    <div class="toolbar"><button class="btn" data-act="salvarChave">Salvar chave</button>${S.temIA?`<button class="btn ghost" data-act="apagarChave">Apagar chave</button>`:""}</div>
  </div></section>`;
}
function renderAvisos(){
  const av = meusAvisos();
  const linha = (k, t, d) => `<label class="checks" style="grid-template-columns:1fr"><label><input type="checkbox" data-aviso="${k}" ${av[k]!==false?"checked":""} ${av.ativo?"":"disabled"}> <span><b>${t}</b><br><span class="sub">${d}</span></span></label></label>`;
  return `<section class="card"><div class="head"><h2>Avisos no celular</h2><span class="sub">só para ${esc(S.me)}</span></div><div class="form">
    <label class="checks" style="grid-template-columns:1fr"><label><input type="checkbox" data-aviso="ativo" ${av.ativo?"checked":""}> <b>Quero receber avisos</b></label></label>
    ${av.ativo ? `<ol class="steps">
      <li>Instale o app grátis <b>ntfy</b> (Play Store ou App Store).</li>
      <li>No ntfy, toque em <b>+</b> e assine este tópico: <span class="code">${esc(av.topico)}</span> <button class="speak" data-act="copiarTopico">Copiar</button></li>
      <li>Toque em <b>Testar aviso</b> aqui embaixo.</li></ol>
      ${dobra("avisos", `Quais avisos (${["fechamento","orcamento","semanal","contas","milhas","quadro"].filter(k=>av[k]!==false).length} de 6 ligados)`, `${linha("fechamento","Fatura fecha amanhã","um dia antes de cada cartão fechar")}
      ${linha("orcamento","Orçamento","quando uma categoria chega a 80% e quando passa")}
      ${linha("semanal","Resumo de domingo","quanto ainda dá pra gastar no mês")}
      ${linha("contas","Conta vence amanhã","contas fixas que ainda não foram marcadas como pagas")}
      ${linha("milhas","Radar de milhas","transferência com 80% de bônus ou mais para os pontos de vocês")}
      ${linha("quadro","Nosso Quadro","combinados do dia (ex.: quinta finanças, sábado encontro) e metas com prazo no mês")}`)}
      <button class="btn ghost" data-act="testarAviso">Testar aviso</button>` : `<p class="sub">Desligado. Ligue para escolher quais avisos quer receber neste celular.</p>`}
  </div></section>`;
}

/* ---------- início ---------- */
document.addEventListener("click", async ev => {
  const t = ev.target.closest("button"); if (!t) return;
  const a = t.dataset.act;
  if (a === "entrar") return entrar();
  if (a === "recarregar"){ S.erro = ""; render(); return carregar(); }
  if (a === "sair") return sair("");
  if (a === "salvarChave" || a === "apagarChave"){
    const k = a === "apagarChave" ? "__apagar__" : ($("#chaveIA")?.value || "").trim();
    if (!k) return toast("Cole a chave primeiro.");
    if (!navigator.onLine) return toast("Precisa de internet para guardar a chave.");
    ls.set("gkey", k === "__apagar__" ? "" : k); ls.set("gmodelos", null); ls.set("gruins", []);
    try{ const r = await api({a:"chave", chave:k}); if (r.ok){ S.temIA = r.temIA; render(); toast(r.temIA ? "IA ligada" : "Chave apagada"); } else toast("Não consegui guardar a chave."); }catch{ toast("Não consegui guardar a chave."); }
    return;
  }
  if (a === "copiarTopico"){ try{ await navigator.clipboard.writeText(meusAvisos().topico); toast("Tópico copiado"); }catch{ toast("Segure o texto para copiar"); } return; }
  if (a === "testarAviso"){
    const av = meusAvisos();
    try{ await fetch("https://ntfy.sh/" + encodeURIComponent(av.topico), {method:"POST", body:`Oi, ${S.me}! Os avisos da Fina estão funcionando.`, headers:{Title:"Fina"}}); toast("Aviso enviado. Olhe o ntfy."); }catch{ toast("Não consegui enviar. Confira a internet."); }
  }
});
document.addEventListener("change", ev => {
  const k = ev.target.dataset?.aviso; if (!k) return;
  salvarAvisos({[k]: ev.target.checked});
});
document.addEventListener("submit", ev => {
  if (ev.target.id === "gateForm"){ ev.preventDefault(); entrar(); }
  if (ev.target.id === "gatePessoaForm"){ ev.preventDefault(); entrarPessoaGate(); }
  if (ev.target.id === "loginForm"){ ev.preventDefault(); enviarLogin(); }
  if (ev.target.id === "trocaSenhaForm"){ ev.preventDefault(); const a = $("#minhaNova")?.value||"", b = $("#minhaNova2")?.value||""; if (a.length < 4) return toast("Pelo menos 4 letras ou números."); if (a !== b) return toast("As duas senhas não estão iguais."); gravarSenhaPessoa(S.me, a).then(() => { render(); toast("Senha trocada."); }); }
  if (ev.target.id === "senhaForm"){ ev.preventDefault(); trocarSenha(); }
});
async function trocarSenha(){
  const a = ($("#senhaNova")?.value||"").trim(), b = ($("#senhaNova2")?.value||"").trim();
  if (a.length < 6) return toast("A senha precisa ter pelo menos 6 letras ou números.");
  if (a !== b) return toast("As duas senhas não estão iguais.");
  if (!navigator.onLine) return toast("Precisa de internet para trocar a senha.");
  try{
    const r = await api({a:"senha", nova:a});
    if (r.ok){ ls.set("codigo", a.toLowerCase()); guardarSenhaNoNavegador(a); render(); toast("Senha trocada! Avise o Gustavo para digitar a nova.", 4500); }
    else toast(r.erro === "acao" ? "Falta atualizar o robô da planilha para trocar a senha." : "Não consegui trocar a senha.");
  }catch{ toast("Não consegui trocar a senha. Confira a internet."); }
}
window.addEventListener("online", () => { renderSeguro(); enviar(); carregar(); processarFilaIA(); });
window.addEventListener("offline", () => renderSeguro());
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden"){ S.saiuEm = Date.now(); return; }
  if (S.desbloqueado && S.saiuEm && Date.now() - S.saiuEm > 5*60e3){ S.desbloqueado = false; S.lockPessoa = S.me; $("#modalRoot").innerHTML = ""; render(); }   // ficou mais de 5 minutos fora: pede a senha de novo
  if (codigo()) carregar();
});
setInterval(() => { if (document.visibilityState === "visible" && codigo() && !S.busy) carregar(); }, 90000);

function boot(){
  try{ navigator.storage?.persist?.(); }catch{}
  S.fila = ls.get("fila", []); S.ajTab = ls.get("ajTab", "visual");
  const d = ls.get("dados", null);
  if (d && codigo()) aplicarDados(d);
  S.lockPessoa = S.me || ""; loadPerson(); applyTheme(); render();
  carregar(); setTimeout(processarFilaIA, 3000);
  /* versão nova publicada: o celular baixa sozinho e recarrega a Fina uma vez */
  if ("serviceWorker" in navigator){
    const tinha = !!navigator.serviceWorker.controller; let recarregou = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => { if (tinha && !recarregou){ recarregou = true; location.reload(); } });
    navigator.serviceWorker.register("sw.js", {updateViaCache: "none"}).then(reg => {
      const checar = () => reg.update().catch(()=>{});
      document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") checar(); });
      setInterval(checar, 30 * 60e3);
    }).catch(()=>{});
  }
}
boot();
