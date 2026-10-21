
/* ---------- ícones ---------- */
const I = {
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
  config: null, gastos: [], parcelas: [], entradas: [],
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
  categorias: [], fixas: [], cartoes: [],
  metas: {dizimo:.10, reserva:.03, investimentos:.02},
  reserva: {saldo:0, meses:6, atualizado:""},
  regrasQuem: "",
};
const cfg = () => ({...DEFAULT_CONFIG, ...(S.config||{})});
const formas = () => [...cfg().cartoes.map(c=>c.nome), ...PAY_FIXED];
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
  const sep = {dizimo: entrou*num(c.metas.dizimo), reserva: entrou*num(c.metas.reserva), investimentos: entrou*num(c.metas.investimentos)};
  const separado = sep.dizimo+sep.reserva+sep.investimentos;
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
  return {gastos, parcelas, entradas, entrou, sep, separado, fixas, dia, parc, ainda, cats, pessoas};
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
const HOME_SECTIONS = [["stats","Números do mês"],["alertas","Avisos de orçamento"],["atalhos","Atalhos (print e falar)"],["categorias","Categorias"],["separado","Separado antes de gastar"],["reserva","Reserva de emergência"],["fechamentos","Próximos fechamentos"],["renda","Renda de cada um"]];
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
      <div class="flabel">O que aparece no Início</div>
      <div class="checks">${HOME_SECTIONS.map(([k,l])=>`<label><input type="checkbox" data-secao="${k}" ${t.secoes[k]!==false?"checked":""}> ${l}</label>`).join("")}</div>
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
  if (!S.me) { renderPerfil(); return; }
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
  $("#view").innerHTML = `
  <div class="top"><div class="hello"><small>${esc(c.nomeAssistente)} · finanças da família</small><h1>${hello}</h1>${netBadge()}</div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button class="me-btn" data-act="switchPerson" aria-label="Trocar de pessoa">${avatarHTML(S.me, 26)}Trocar</button>${monthSwitch()}</div></div>
  <section class="card hero ${M.ainda<0?'neg':''}" aria-label="Quanto ainda dá pra gastar">
    <svg class="coin" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 5 6.4 5c2 0 3.6 1.2 4.6 2.7C12 6.2 13.6 5 15.6 5 19 5 21.1 8.4 19.6 11.8 17.5 16.4 12 21 12 21z" fill="var(--accent)" opacity=".35"/></svg>
    <div class="lbl">${M.ainda<0 ? "Passou do limite em" : "Ainda dá pra gastar"}</div>
    <div class="big num">${money0(Math.abs(M.ainda))}</div>
    <div class="meter" aria-hidden="true"><i style="width:${(usado*100).toFixed(1)}%"></i></div>
    <div class="legend num"><span>${Math.round(usado*100)}% da renda já comprometida</span><span>entrou ${money0(M.entrou)}</span></div>
  </section>
  ${on("stats")?`<div class="stats">
    <div class="stat"><small>Separado primeiro</small><b class="num">${money0(M.separado)}</b><span>dízimo, reserva e investimentos</span></div>
    <div class="stat"><small>Contas fixas</small><b class="num">${money0(M.fixas)}</b><span>${c.fixas.length} contas do mês</span></div>
    <div class="stat"><small>Gasto no mês</small><b class="num">${money0(M.dia+M.parc)}</b><span>${money0(M.dia)} no dia a dia · ${money0(M.parc)} em parcelas</span></div>
  </div>`:""}
  ${!on("alertas") ? "" : over.length||near.length ? `<div class="chips">${over.map(x=>`<span class="chip bad">${esc(x.nome)} passou ${money0(x.total-x.orc)}</span>`).join("")}${near.map(x=>`<span class="chip warn">${esc(x.nome)} em ${Math.round(x.total/x.orc*100)}%</span>`).join("")}</div>` : `<div class="chips"><span class="chip ok">Tudo dentro do orçamento</span></div>`}
  ${on("atalhos")?`<div class="quick">
    <button class="qbtn" data-act="print">${I.cam}<span>Mandar print<small>fatura, Pix, comprovante</small></span></button>
    <button class="qbtn" data-act="falar">${I.mic}<span>Falar um gasto<small>“gastei 70 de gasolina”</small></span></button>
  </div>`:""}
  <div class="grid2">
    ${on("categorias")?`<section class="card"><div class="head"><h2>Como está cada categoria</h2><span class="sub num">${money0(M.cats.reduce((s,x)=>s+x.total,0))} de ${money0(M.cats.reduce((s,x)=>s+x.orc,0))}</span></div>
      <div class="cats">${cats.map(x=>{
        const p = x.orc ? x.total/x.orc : 1; const cls = p>1 ? "bad" : p>=.8 ? "warn" : "";
        return `<div class="cat"><div class="row"><b>${esc(x.nome)}</b><span class="num">${money0(x.total)} <span class="muted">/ ${x.orc?money0(x.orc):"sem orçamento"}</span></span></div><div class="bar"><i class="${cls}" style="width:${Math.min(100,p*100).toFixed(1)}%"></i></div></div>`;}).join("") || `<p class="empty">Nenhuma categoria ainda. Crie em Ajustes.</p>`}</div>
    </section>`:""}
    <div class="wrap" style="gap:16px">
      ${on("separado")?`<section class="card"><div class="head"><h2>Separado antes de gastar</h2></div>
        <div class="split num">
          <div class="line"><span>Dízimo / doação · ${Math.round(num(c.metas.dizimo)*100)}%</span><b>${money0(M.sep.dizimo)}</b></div>
          <div class="line"><span>Reserva de emergência · ${Math.round(num(c.metas.reserva)*100)}%</span><b>${money0(M.sep.reserva)}</b></div>
          <div class="line"><span>Investimentos · ${Math.round(num(c.metas.investimentos)*100)}%</span><b>${money0(M.sep.investimentos)}</b></div>
        </div></section>`:""}
      ${on("reserva")?`<section class="card"><div class="head"><h2>Reserva de emergência</h2><span class="sub">meta de ${esc(c.reserva.meses)} meses</span></div>
        <div class="split num"><div class="line"><span>${saldoRes ? "Guardado" : "Saldo ainda não informado"}</span><b>${saldoRes?money0(saldoRes):"—"} / ${money0(metaReserva)}</b></div>
        <div class="bar"><i style="width:${metaReserva?Math.min(100,saldoRes/metaReserva*100).toFixed(1):0}%"></i></div></div></section>`:""}
      ${on("fechamentos")?`<section class="card"><div class="head"><h2>Próximos fechamentos</h2></div><div class="closings">${closingsU.slice(0,5).map(x=>`<div class="closing"><span>${esc(x.nome)}</span><span class="sub">${x.dias===0?"hoje":x.dias===1?"amanhã":`em ${x.dias} dias`} · ${x.d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}</span></div>`).join("") || `<p class="sub">Informe os fechamentos em Ajustes.</p>`}</div></section>`:""}
    </div>
  </div>
  ${on("renda")?`<section class="card"><div class="head"><h2>Quem trouxe o quê</h2><span class="sub num">${money0(M.entrou)}</span></div>
    <div class="split num">${Object.entries(M.pessoas).map(([k,v])=>`<div class="line"><span>${esc(k)}</span><b>${money0(v)}</b></div>`).join("") || `<p class="sub">Nenhuma entrada lançada neste mês.</p>`}</div></section>`:""}`;
}

function renderGastos(){
  const M = month(S.mes), c = cfg();
  let body = "";
  if (S.listSeg === "gastos"){
    let rows = M.gastos.filter(g => (!S.fCat || g.categoria===S.fCat) && (!S.fQuem || (S.fQuem==="__none" ? !g.quem : g.quem===S.fQuem)));
    rows.sort((a,b)=> b.data.localeCompare(a.data));
    const byDay = {}; rows.forEach(g => (byDay[g.data] ||= []).push(g));
    body = `<div class="filters"><select id="fCat" aria-label="Filtrar categoria"><option value="">Todas as categorias</option>${catNames().map(n=>`<option ${S.fCat===n?"selected":""}>${esc(n)}</option>`).join("")}</select>
      <select id="fQuem" aria-label="Filtrar pessoa"><option value="">Todas as pessoas</option>${c.pessoas.map(n=>`<option ${S.fQuem===n?"selected":""}>${esc(n)}</option>`).join("")}<option value="__none" ${S.fQuem==="__none"?"selected":""}>Sem nome</option></select></div>
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
    <button class="btn" data-new="${S.listSeg==="gastos"?"gasto":S.listSeg==="parcelas"?"parcela":"entrada"}">${I.plus}Adicionar</button></div>
  <section class="card">${body}</section>`;
}
function itemRow(kind, o, title, sub, valor, income){
  const letter = (kind==="entrada" ? (o.quem||"C") : (o.categoria||"?"))[0];
  const col = kind==="entrada" ? "var(--accent)" : catColor(o.categoria);
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
  $("#view").innerHTML = `
  <div class="top"><div class="hello"><small>Para onde vai o dinheiro</small><h1>Metas e evolução</h1></div>${monthSwitch()}</div>
  <section class="card"><div class="head"><h2>Últimos 6 meses</h2><span class="sub">linha preta = quanto entrou</span></div>
    <div style="overflow-x:auto"><svg viewBox="0 0 ${W} ${H}" width="100%" style="min-width:420px;display:block" role="img" aria-label="Gastos dos últimos 6 meses">${bars}</svg></div>
    <div class="chips" style="margin-top:8px"><span class="chip"><i style="width:10px;height:10px;border-radius:3px;background:var(--ink-3)"></i>Contas fixas</span><span class="chip"><i style="width:10px;height:10px;border-radius:3px;background:var(--gold)"></i>Parcelas</span><span class="chip"><i style="width:10px;height:10px;border-radius:3px;background:var(--accent)"></i>Dia a dia</span><span class="chip"><i style="width:10px;height:10px;border-radius:3px;background:var(--line)"></i>Separado</span></div>
  </section>
  <div class="settings">
    <section class="card"><div class="head"><h2>Quanto separar de cada entrada</h2></div>
      <div class="form">
        ${[["dizimo","Dízimo / doação"],["reserva","Reserva de emergência"],["investimentos","Investimentos"]].map(([k,t])=>`<label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,96px)"><span>${t}</span><input id="meta-${k}" type="number" step="1" min="0" max="100" value="${Math.round(num(c.metas[k])*100)}" aria-label="${t} em %"></label>`).join("")}
        <p class="sub">Em ${esc(mLabel(S.mes))}: ${money(M.separado)} separados de ${money(M.entrou)}.</p>
        <button class="btn" data-save="metas">Salvar porcentagens</button>
      </div></section>
    <section class="card"><div class="head"><h2>Reserva de emergência</h2></div>
      <div class="form">
        <label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,130px)"><span>Saldo guardado hoje (R$)</span><input id="res-saldo" inputmode="decimal" value="${num(c.reserva.saldo)?num(c.reserva.saldo).toFixed(2).replace(".",","):""}" placeholder="0,00"></label>
        <label class="frow" style="grid-template-columns:minmax(0,1fr) minmax(0,130px)"><span>Meta em meses de gastos</span><input id="res-meses" type="number" min="1" max="24" value="${esc(c.reserva.meses)}"></label>
        <p class="sub">${c.reserva.atualizado?`Saldo atualizado em ${esc(c.reserva.atualizado.split("-").reverse().join("/"))}.`:"Informe o saldo para acompanhar o progresso."}</p>
        <button class="btn" data-save="reserva">Salvar reserva</button>
      </div></section>
  </div>`;
}

function renderAjustes(){
  const c = cfg();
  const voices = (window.speechSynthesis?.getVoices?.()||[]).filter(v=>/^pt/i.test(v.lang));
  $("#view").innerHTML = `
  <div class="top"><div class="hello"><small>Personalize</small><h1>Ajustes</h1></div></div>
  <div class="settings">
    ${renderAparencia()}
    ${renderAvatarCard()}
    ${renderAvisos()}
    <section class="card"><div class="head"><h2>Do seu jeito</h2><span class="sub">vale só para ${esc(S.me)}</span></div><div class="form">
      <div class="flabel">Quem está usando</div>
      <button class="me-btn" data-act="switchPerson">${avatarHTML(S.me, 26)}${esc(S.me)} · trocar</button>
      <label class="flabel" for="voice">Voz da ${esc(c.nomeAssistente)}</label>
      <select id="voice"><option value="">Voz padrão do aparelho</option>${voices.map(v=>`<option value="${esc(v.name)}" ${S.voiceName===v.name?"selected":""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("")}</select>
      <button class="btn ghost" data-act="testvoice">${I.spk}Ouvir um teste</button>
    </div></section>
    <section class="card"><div class="head"><h2>Assistente</h2></div><div class="form">
      <label class="flabel" for="nomeA">Nome</label><input id="nomeA" value="${esc(c.nomeAssistente)}">
      <label class="flabel" for="regras">Como saber de quem é cada gasto</label>
      <textarea id="regras">${esc(c.regrasQuem)}</textarea>
      <button class="btn" data-save="assistente">Salvar</button>
    </div></section>
    <section class="card"><div class="head"><h2>Orçamento por categoria</h2><span class="sub num">${money0(c.categorias.reduce((s,k)=>s+num(k.orcamento),0))}/mês</span></div><div class="form" id="catsForm">
      ${c.categorias.map((k,i)=>`<div class="frow"><input data-cat-n="${i}" value="${esc(k.nome)}" aria-label="Categoria"><input data-cat-v="${i}" inputmode="decimal" value="${num(k.orcamento)}" aria-label="Orçamento"><button class="x" data-del-cat="${i}" aria-label="Remover">×</button></div>`).join("")}
      <div class="toolbar"><button class="btn ghost" data-add="cat">${I.plus}Categoria</button><button class="btn" data-save="cats">Salvar orçamentos</button></div>
    </div></section>
    <section class="card"><div class="head"><h2>Contas fixas</h2><span class="sub num">${money0(c.fixas.reduce((s,k)=>s+num(k.valor),0))}/mês</span></div><div class="form" id="fixForm">
      ${c.fixas.map((k,i)=>`<div class="frow"><input data-fix-n="${i}" value="${esc(k.nome)}" aria-label="Conta"><input data-fix-v="${i}" inputmode="decimal" value="${num(k.valor)}" aria-label="Valor"><button class="x" data-del-fix="${i}" aria-label="Remover">×</button></div>`).join("")}
      <div class="toolbar"><button class="btn ghost" data-add="fix">${I.plus}Conta</button><button class="btn" data-save="fixas">Salvar contas</button></div>
    </div></section>
    <section class="card"><div class="head"><h2>Cartões</h2><span class="sub">fecha · vence (dia)</span></div><div class="form" id="cardForm">
      ${c.cartoes.map((k,i)=>`<div class="frow c3x"><input data-card-n="${i}" value="${esc(k.nome)}" aria-label="Cartão"><input data-card-f="${i}" type="number" min="1" max="31" value="${esc(k.fecha??"")}" aria-label="Dia de fechamento" placeholder="fecha"><input data-card-v="${i}" type="number" min="1" max="31" value="${esc(k.vence??"")}" aria-label="Dia de vencimento" placeholder="vence"><button class="x" data-del-card="${i}" aria-label="Remover">×</button></div>`).join("")}
      <p class="sub">Compras feitas a partir do dia de fechamento contam no mês seguinte.</p>
      <div class="toolbar"><button class="btn ghost" data-add="card">${I.plus}Cartão</button><button class="btn" data-save="cartoes">Salvar cartões</button></div>
    </div></section>
    <section class="card"><div class="head"><h2>Seus dados</h2></div><div class="form">
      <p class="sub">${S.gastos.length} gastos, ${S.parcelas.length} parcelas e ${S.entradas.length} entradas guardados no app.</p>
      <button class="btn ghost" data-act="export">Baixar tudo em planilha (CSV)</button>
      <p class="sub">Tudo fica na planilha FAMÍLIA ASSIS, no Google Drive, e os prints na pasta "Fina – Comprovantes".</p>
      <a class="btn ghost" href="manual.html">Abrir o manual</a>
      <button class="btn ghost" data-act="sair">Sair deste aparelho</button>
    </div></section>
  </div>`;
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
      ${S.busy?`<div class="msg bot"><div class="b muted">Pensando…</div></div>`:""}
    </div>
    <div class="composer">
      ${S.pendingImgs.length?`<div class="pending-imgs">${S.pendingImgs.map((f,i)=>`<span class="pi"><img src="${f.url}" alt="Print ${i+1}"><button data-rmimg="${i}" aria-label="Remover print">×</button></span>`).join("")}</div>`:""}
      <div class="row">
        ${S.imgOK?`<button class="iconbtn" data-act="print" aria-label="Anexar prints">${I.clip}</button>`:""}
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
  if (m.role === "user") return `<div class="msg me">${m.imgs?`<div class="thumbs">${Array.from({length:m.imgs},()=>`<span class="chip">print</span>`).join("")}</div>`:""}${m.text?`<div class="b">${esc(m.text)}</div>`:""}</div>`;
  const props = m.items?.length ? proposalHTML(m, i) : "";
  return `<div class="msg bot"><div class="b">${esc(m.text)}</div>${props}<div class="meta"><button class="speak" data-speak="${i}">${I.spk}Ouvir</button>${m.saved?`<span>Salvo</span>`:""}</div></div>`;
}
function opts(list, val, allowEmpty=true){ return (allowEmpty?`<option value="">—</option>`:"") + list.map(x=>`<option ${x===val?"selected":""}>${esc(x)}</option>`).join("") + (val && !list.includes(val) ? `<option selected>${esc(val)}</option>` : ""); }
function proposalHTML(m, i){
  const c = cfg();
  const rows = m.items.map((it,j)=>{
    const dup = !m.saved && isDuplicate(it);
    const id = `p${i}-${j}`;
    const common = it.tipo==="entrada" ? `
      <label class="c2">Mês<input type="month" id="${id}-mes" value="${esc(it.mes||S.mes)}"></label>
      <label class="c2">Valor<input id="${id}-valor" inputmode="decimal" value="${esc(String(it.valor).replace(".",","))}"></label>
      <label class="c2">Quem<select id="${id}-quem">${opts([...c.pessoas,"Casal"], it.quem)}</select></label>
      <label class="c3">Tipo<select id="${id}-tipo_entrada">${opts(ENTRY_TYPES, it.tipo_entrada, false)}</select></label>
      <label class="c3">Descrição<input id="${id}-descricao" value="${esc(it.descricao)}"></label>` : `
      <label class="c2">Data<input type="date" id="${id}-data" value="${esc(it.data)}"></label>
      <label class="c2">Valor${it.tipo==="parcela"?" da parcela":""}<input id="${id}-valor" inputmode="decimal" value="${esc(String(it.valor).replace(".",","))}"></label>
      <label class="c2">Categoria<select id="${id}-categoria">${opts(catNames(), it.categoria)}</select></label>
      <label class="c2">Forma<select id="${id}-forma">${opts(formas(), it.forma)}</select></label>
      <label class="c2">Quem<select id="${id}-quem">${opts(c.pessoas, it.quem)}</select></label>
      <label class="c2">Descrição<input id="${id}-descricao" value="${esc(it.descricao)}"></label>
      ${it.tipo==="parcela"?`<label class="c2">Parcela atual<input type="number" min="1" id="${id}-parcela_atual" value="${esc(it.parcela_atual||1)}"></label><label class="c2">Total de parcelas<input type="number" min="1" id="${id}-total_parcelas" value="${esc(it.total_parcelas||1)}"></label><label class="c2">1ª parcela em<input type="month" id="${id}-inicio" value="${esc(it.inicio||inicioPadrao(it))}"></label>`:""}`;
    return `<div class="prop ${it.skip?"off":""}"><div class="kind"><span>${it.tipo==="gasto"?"Gasto":it.tipo==="parcela"?"Compra parcelada":"Entrada de dinheiro"}</span>${m.saved?"":`<label style="display:flex;gap:6px;align-items:center;font-size:12px;color:var(--ink-2)"><input type="checkbox" data-skip="${i}-${j}" ${it.skip?"":"checked"} style="width:auto"> salvar</label>`}</div>${common}${dup?`<div class="warnline">Parece que já está lançado. Desmarque se for repetido.</div>`:""}</div>`;
  }).join("");
  return `<div class="proposal">${rows}${m.saved?"":`<div class="toolbar"><button class="btn ghost" data-discard="${i}">Descartar</button><button class="btn" data-confirm="${i}">Salvar ${m.items.filter(x=>!x.skip).length} ${m.items.filter(x=>!x.skip).length===1?"item":"itens"}</button></div>`}</div>`;
}
function inicioPadrao(it){
  const comp = compMonth({data: it.data || today(), forma: it.forma}) || S.mes;
  return addM(comp, -((Number(it.parcela_atual)||1)-1));
}
function isDuplicate(it){
  const v = num(it.valor);
  if (it.tipo==="gasto") return S.gastos.some(g => g.data===it.data && Math.abs(num(g.valor)-v)<0.01 && (!it.forma || g.forma===it.forma));
  if (it.tipo==="parcela") return S.parcelas.some(p => Math.abs(num(p.valor)-v)<0.01 && Number(p.n)===Number(it.total_parcelas) && (!it.forma || p.forma===it.forma));
  return S.entradas.some(e => e.mes===it.mes && Math.abs(num(e.valor)-v)<0.01 && (e.quem||"")===(it.quem||""));
}

function buildPrompt(text, nImgs){
  const c = cfg(); const M = month(S.mes);
  const ctx = {
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
- Dízimo, oferta e aplicação em investimento NÃO são gastos: o app já separa esses valores. Não crie item; explique isso.
- Nunca invente valores. Se algo estiver ilegível, diga na resposta.
- Nunca diga que salvou: a usuária ainda vai conferir e tocar em Salvar.

Responda SOMENTE com JSON neste formato:
{"resposta": "texto para a usuária (até 4 frases; se extraiu itens, diga quantos e peça para conferir)",
 "itens": [
  {"tipo":"gasto","data":"2026-10-17","valor":191.46,"categoria":"Mercado","quem":"Gustavo","forma":"Porto 7115","descricao":"Atacadão"},
  {"tipo":"parcela","data":"2026-10-11","valor":64.78,"parcela_atual":1,"total_parcelas":7,"categoria":"Compras","quem":"","forma":"Itaú Platinum 8018","descricao":"Shopee"},
  {"tipo":"entrada","mes":"2026-10","valor":212,"quem":"Daiana","tipo_entrada":"Renda extra","descricao":"BlaBlaCar"}
 ]}
Se não houver itens, use "itens": [].

DADOS DO APP (JSON):
${JSON.stringify(ctx)}

${hist?`Conversa recente:\n${hist}\n\n`:""}Nova mensagem${S.me?` de ${S.me}`:""}: ${text || "(só os prints anexados)"}`;
}

async function sendMsg(){
  if (S.busy) return;
  const box = $("#ask"); const text = (box?.value||"").trim();
  if (!text && !S.pendingImgs.length) return;
  if (!navigator.onLine){ toast("Sem internet agora. Você pode lançar pelo botão Adicionar em Gastos."); return; }
  const files = S.pendingImgs.map(p=>p.file);
  S.chat.push({role:"user", text, imgs: files.length});
  const prompt = buildPrompt(text, files.length);
  ls.set("draft",""); S.pendingImgs.forEach(p=>URL.revokeObjectURL(p.url)); S.pendingImgs = [];
  S.busy = true; S.ctl = new AbortController(); render();
  try{
    const imagens = await Promise.all(files.map(f => imgBase64(f, 1600, .82)));
    const r = await api({a:"ia", prompt, imagens: imagens.map(x=>({mime:"image/jpeg", data:x}))}, S.ctl.signal);
    if (!r.ok) throw {code: r.erro};
    const out = lerJSON(r.texto);
    if (!out) throw {code:"invalid_json"};
    const items = Array.isArray(out?.itens) ? out.itens.filter(x=>x && ["gasto","parcela","entrada"].includes(x.tipo)).map(normItem) : [];
    const msg = {role:"assistant", text: String(out?.resposta || (items.length?`Encontrei ${items.length} itens. Confira e toque em Salvar.`:"Não encontrei nada para lançar.")), items};
    if (items.length && files.length) msg._f = files; // prints guardados ao salvar
    S.chat.push(msg);
    if (S.speakOn) speak(msg.text);
  }catch(e){
    const code = e?.name==="AbortError" ? "cancelled" : e?.code;
    const t = code==="cancelled" ? "Parei." : code==="sem_chave" ? "Falta colar a chave do Gemini no robô do Google. Veja o manual." : code==="limite" ? "Usei todo o limite grátis da IA por agora. Tente de novo mais tarde ou lance pelo botão Adicionar." : code==="invalid_json" ? "Me confundi com a resposta. Pode mandar de novo?" : code==="codigo" ? "O código da família mudou. Entre de novo." : "Não consegui responder agora. Confira a internet e tente de novo.";
    S.chat.push({role:"assistant", text:t, items:[]});
  }finally{
    S.busy = false; S.ctl = null; S.chat = S.chat.slice(-60); saveChat(); render();
  }
}
function normItem(x){
  const it = {...x, valor: num(x.valor), descricao: String(x.descricao||"").slice(0,120)};
  if (it.tipo!=="entrada"){ it.data = /^\d{4}-\d{2}-\d{2}$/.test(it.data||"") ? it.data : today(); if (!catNames().includes(it.categoria)) it.categoria = catNames().includes("Serviços/Outros") ? "Serviços/Outros" : (catNames()[0]||""); if (it.forma && !formas().includes(it.forma)) it.forma = ""; }
  if (it.tipo==="parcela"){ it.parcela_atual = Math.max(1, parseInt(it.parcela_atual)||1); it.total_parcelas = Math.max(it.parcela_atual, parseInt(it.total_parcelas)||1); it.inicio = inicioPadrao(it); }
  if (it.tipo==="entrada"){ it.mes = /^\d{4}-\d{2}$/.test(it.mes||"") ? it.mes : S.mes; if (!ENTRY_TYPES.includes(it.tipo_entrada)) it.tipo_entrada = "Renda extra"; }
  it.skip = false;
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
  const c = cfg();
  $("#view").innerHTML = `<div class="who"><div class="who-in">${BOT}<h1>Quem está usando?</h1><p class="sub">Cada um tem o seu visual e a sua conversa com a ${esc(c.nomeAssistente)}. As finanças são as mesmas para os dois.</p>
    <div class="people">${c.pessoas.map(n=>{ const t = personTheme(n); const th = THEMES[t.preset]||THEMES.nos; const col = t.accent || th.light.accent;
      return `<button class="person" data-person="${esc(n)}">${avatarHTML(n, 76, col)}<b>${esc(n)}</b><small>${th.nome}</small></button>`; }).join("")}</div></div></div>`;
}

function readProposal(i){
  const m = S.chat[i];
  m.items.forEach((it,j)=>{
    const id = `p${i}-${j}`;
    for (const f of ["data","valor","categoria","forma","quem","descricao","parcela_atual","total_parcelas","inicio","mes","tipo_entrada"]){
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
    else if (it.tipo==="parcela") mudar("salvar","parcela",{descricao:it.descricao||"", categoria:it.categoria, valor:num(it.valor), n:Number(it.total_parcelas)||1, inicio:it.inicio||inicioPadrao(it), forma:it.forma||"", quem:it.quem||""});
    else mudar("salvar","entrada",{mes:it.mes, quem:it.quem||"Casal", tipo:it.tipo_entrada||"Renda extra", valor:num(it.valor), descricao:it.descricao||""});
  }
  m.saved = true; saveChat();
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
function openEditor(kind, id){
  const c = cfg();
  const list = kind==="gasto" ? S.gastos : kind==="parcela" ? S.parcelas : S.entradas;
  const o = id ? list.find(x=>x.id===id) : (kind==="gasto" ? {data:today(), quem:S.me} : kind==="parcela" ? {inicio:S.mes, n:2, quem:S.me} : {mes:S.mes, quem:S.me, tipo:"Renda extra"});
  if (!o) return;
  const title = {gasto:"Gasto", parcela:"Compra parcelada", entrada:"Entrada de dinheiro"}[kind];
  let fields = "";
  if (kind==="gasto") fields = `
    <label>Data<input type="date" id="e-data" value="${esc(o.data)}"></label>
    <label>Valor (R$)<input id="e-valor" inputmode="decimal" value="${o.valor!=null?String(o.valor).replace(".",","):""}"></label>
    <label>Categoria<select id="e-categoria">${opts(catNames(), o.categoria)}</select></label>
    <label>Forma de pagamento<select id="e-forma">${opts(formas(), o.forma)}</select></label>
    <label>Quem<select id="e-quem">${opts(c.pessoas, o.quem)}</select></label>
    <label>Descrição<input id="e-descricao" value="${esc(o.descricao)}"></label>`;
  else if (kind==="parcela") fields = `
    <label class="full">Descrição<input id="e-descricao" value="${esc(o.descricao)}"></label>
    <label>Valor da parcela<input id="e-valor" inputmode="decimal" value="${o.valor!=null?String(o.valor).replace(".",","):""}"></label>
    <label>Nº de parcelas<input id="e-n" type="number" min="1" value="${esc(o.n)}"></label>
    <label>1ª parcela em<input type="month" id="e-inicio" value="${esc(o.inicio)}"></label>
    <label>Categoria<select id="e-categoria">${opts(catNames(), o.categoria)}</select></label>
    <label>Forma de pagamento<select id="e-forma">${opts(formas(), o.forma)}</select></label>
    <label>Quem<select id="e-quem">${opts(c.pessoas, o.quem)}</select></label>`;
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
  else body = {mes:g("mes"), valor:num(g("valor")), quem:g("quem")||"Casal", tipo:g("tipo"), descricao:g("descricao")};
  if (!body.valor){ toast("Informe o valor."); return; }
  const list = kind==="gasto" ? S.gastos : kind==="parcela" ? S.parcelas : S.entradas;
  const old = id ? list.find(x=>x.id===id) : null;
  mudar("salvar", kind, id ? {...old, ...body, id} : {...body, criadoPor:S.me||"", criadoEm:new Date().toISOString()});
  $("#modalRoot").innerHTML = ""; toast(navigator.onLine ? "Salvo" : "Salvo no celular. Sobe quando a internet voltar.");
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
  for (const [k,v] of Object.entries(patch)) (["categorias","fixas","cartoes","metas","reserva"].includes(k) ? conf : app)[k] = v;
  if (Object.keys(conf).length) enfileirar({a:"config", config:conf});
  if (Object.keys(app).length) enfileirar({a:"app", app});
  guardarLocal(); render(); toast("Salvo"); enviar();
}
function keepForms(){
  const c = cfg(); const patch = {};
  if (document.querySelector("[data-cat-n]")) patch.categorias = [...document.querySelectorAll("[data-cat-n]")].map(el=>({nome:el.value, orcamento:num(document.querySelector(`[data-cat-v="${el.dataset.catN}"]`)?.value)}));
  if (document.querySelector("[data-fix-n]")) patch.fixas = [...document.querySelectorAll("[data-fix-n]")].map(el=>({nome:el.value, valor:num(document.querySelector(`[data-fix-v="${el.dataset.fixN}"]`)?.value)}));
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
  if (d.act==="switchPerson"){ S.me = ""; ls.set("me",""); applyTheme(); return render(); }
  if (d.person) return pickPerson(d.person);
  if (d.emoji) return setAvatar({tipo:"emoji", valor:d.emoji});
  if (d.act==="avatarLetter") return setAvatar({tipo:"letra"});
  if (d.act==="avatarPhoto") return $("#avatarPick").click();
  if (d.m){ S.mes = addM(S.mes, Number(d.m)); return render(); }
  if (d.seg){ S.listSeg = d.seg; return render(); }
  if (d.new) return openEditor(d.new);
  if (d.edit) return openEditor(d.edit, d.id);
  if (d.close && (t.classList.contains("btn") || ev.target === t)) { $("#modalRoot").innerHTML = ""; return; }
  if (d.store){ const [k,id] = d.store.split(":"); return storeEdit(k, id); }
  if (d.delete){ const [k,id] = d.delete.split(":"); return deleteItem(k, id); }
  if (d.sug){ if (S.tab!=="assistente") go("assistente"); const a = $("#ask"); if (a){ a.value = d.sug; } return sendMsg(); }
  if (d.speak) return speak(S.chat[Number(d.speak)]?.text||"");
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
    if (d.save==="metas") return saveConfig({metas:{dizimo:num($("#meta-dizimo").value)/100, reserva:num($("#meta-reserva").value)/100, investimentos:num($("#meta-investimentos").value)/100}});
    if (d.save==="reserva") return saveConfig({reserva:{saldo:num($("#res-saldo").value), meses:Number($("#res-meses").value)||6, atualizado:today()}});
    if (d.save==="assistente") return saveConfig({nomeAssistente:$("#nomeA").value.trim()||"Fina", regrasQuem:$("#regras").value});
    if (d.save==="cats") return saveConfig({categorias: collectRows("cat-n","cat-v").map(([n,v])=>({nome:n, orcamento:v}))});
    if (d.save==="fixas") return saveConfig({fixas: collectRows("fix-n","fix-v").map(([n,v])=>({nome:n, valor:v}))});
    if (d.save==="cartoes") return saveConfig({cartoes: collectRows("card-n","card-f",false).map(([n,f,i])=>({nome:n, fecha:Number(f)||"", vence:Number(document.querySelector(`[data-card-v="${i}"]`)?.value)||""}))});
  }
  if (d.act==="print"){ if (S.tab!=="assistente") go("assistente"); return $("#filePick").click(); }
  if (d.act==="falar"){ go("assistente"); return startMic(); }
  if (d.act==="mic") return startMic();
  if (d.act==="send") return sendMsg();
  if (d.act==="stop"){ S.ctl?.abort(); return; }
  if (d.act==="testvoice") return speak(`Oi! Eu sou a ${cfg().nomeAssistente}. Ainda dá pra gastar ${money0(month(S.mes).ainda)} este mês.`);
  if (d.act==="export") return exportCSV();
});
document.addEventListener("change", ev => {
  const t = ev.target;
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


/* ---------- conexão com a planilha (robô do Google) ---------- */
const ROBO_PADRAO = "";   // endereço do robô (Implantar > App da Web), preenchido depois da implantação
const robo = () => ls.get("robo", "") || ROBO_PADRAO;
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
  S.config = {...DEFAULT_CONFIG, ...d.config, nomeAssistente: app.nomeAssistente || "Fina", regrasQuem: app.regrasQuem ?? DEFAULT_REGRAS, pessoas: app.pessoas || ["Daiana","Gustavo"], perfis: app.perfis || {}};
  S.gastos = d.gastos || []; S.parcelas = d.parcelas || []; S.entradas = d.entradas || [];
  S.atualizado = d.atualizado || "";
  for (const op of S.fila) aplicarLocal(op);       // o que ainda não subiu continua aparecendo
  Object.keys(S.loaded).forEach(k => S.loaded[k] = true);
}
function guardarLocal(){
  const {perfis, nomeAssistente, regrasQuem, pessoas, ...config} = cfg();
  ls.set("dados", {config, app:{perfis, nomeAssistente, regrasQuem, pessoas}, gastos:S.gastos, parcelas:S.parcelas, entradas:S.entradas, atualizado:S.atualizado});
  ls.set("fila", S.fila);
}
function aplicarLocal(op){
  if (op.a !== "salvar" && op.a !== "apagar") return;
  const key = {gasto:"gastos", parcela:"parcelas", entrada:"entradas"}[op.tipo];
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
    } else if (r.erro === "codigo"){ sair("O código da família mudou. Digite o novo código."); }
    else { S.erro = "A planilha recusou uma alteração. Ela continua guardada no celular."; }
  }catch{ /* sem internet: tenta de novo depois */ }
  finally { enviando = false; renderSeguro(); if (S.fila.length && navigator.onLine) setTimeout(enviar, 4000); }
}
async function carregar(){
  if (!codigo() || !robo()) return;
  try{
    const r = await (await fetch(robo() + "?c=" + encodeURIComponent(codigo()))).json();
    if (r.ok){ aplicarDados(r); guardarLocal(); S.erro = ""; }
    else if (r.erro === "codigo") return sair("Esse código não abriu a planilha. Confira e tente de novo.");
    else S.erro = "A planilha não respondeu direito agora.";
  }catch{ if (!S.config) S.erro = "Sem internet e ainda sem dados guardados neste aparelho."; }
  applyTheme(); renderSeguro();
  enviar();
}
function renderSeguro(){ if (S.tab === "assistente" && document.activeElement?.closest?.(".composer")) return; if ($("#modalRoot").innerHTML) return; render(); }
function sair(msg){
  ls.set("codigo", ""); try{ localStorage.removeItem("fina:dados"); }catch{}
  S.config = null; S.gastos = []; S.parcelas = []; S.entradas = []; Object.keys(S.loaded).forEach(k => S.loaded[k] = false);
  S.gateMsg = msg || ""; render();
}
function renderGate(){
  $("#tabbar").innerHTML = ""; $("#rail").innerHTML = "";
  $("#view").innerHTML = `<div class="gate"><div class="gate-in">${BOT}<h1>Oi! Eu sou a Fina.</h1>
    <p class="sub">Digite o código da família para abrir as finanças da casa neste aparelho. Só precisa fazer isso uma vez.</p>
    <input id="gateCode" autocomplete="off" autocapitalize="none" placeholder="código da família" aria-label="Código da família">
    ${robo() ? "" : `<input id="gateRobo" autocomplete="off" placeholder="endereço do robô (https://script.google.com/…)" aria-label="Endereço do robô" style="font-size:13px;letter-spacing:0">`}
    <button class="btn" data-act="entrar" style="width:100%;justify-content:center">Entrar</button>
    ${S.gateMsg ? `<p class="sub" style="color:var(--bad)">${esc(S.gateMsg)}</p>` : ""}</div></div>`;
}
async function entrar(){
  const c = $("#gateCode")?.value.trim(); const r = $("#gateRobo")?.value.trim();
  if (r) ls.set("robo", r);
  if (!c){ S.gateMsg = "Digite o código."; return render(); }
  if (!robo()){ S.gateMsg = "Falta o endereço do robô."; return render(); }
  ls.set("codigo", c); S.gateMsg = ""; $("#view").innerHTML = `<div class="card"><p class="sub">Abrindo a planilha…</p></div>`;
  await carregar();
}
function netBadge(){
  if (!navigator.onLine) return `<span class="net">Sem internet · ${S.fila.length ? S.fila.length + " alteração(ões) esperando" : "mostrando o que está guardado"}</span>`;
  if (S.fila.length) return `<span class="net">Enviando ${S.fila.length} alteração(ões)…</span>`;
  if (S.erro) return `<span class="net">${esc(S.erro)}</span>`;
  return "";
}

/* ---------- avisos no celular (app ntfy) ---------- */
function meusAvisos(){ return {ativo:false, topico:"", fechamento:true, orcamento:true, semanal:true, ...(cfg().perfis?.[S.me]?.avisos || {})}; }
function salvarAvisos(patch){
  const av = {...meusAvisos(), ...patch};
  if (av.ativo && !av.topico) av.topico = "fina-" + Math.random().toString(36).slice(2,12) + "-" + S.me.normalize("NFD").replace(/[^\w]/g,"").toLowerCase();
  S.config = {...cfg(), perfis:{...(cfg().perfis||{}), [S.me]:{...(cfg().perfis?.[S.me]||{}), avisos:av}}};
  enfileirar({a:"app", app:{perfis:{[S.me]:{avisos:av}}}}, "avisos:"+S.me); guardarLocal(); render(); enviar();
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
      ${linha("fechamento","Fatura fecha amanhã","um dia antes de cada cartão fechar")}
      ${linha("orcamento","Orçamento","quando uma categoria chega a 80% e quando passa")}
      ${linha("semanal","Resumo de domingo","quanto ainda dá pra gastar no mês")}
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
document.addEventListener("keydown", ev => { if (ev.target.id === "gateCode" && ev.key === "Enter") entrar(); });
window.addEventListener("online", () => { renderSeguro(); enviar(); carregar(); });
window.addEventListener("offline", () => renderSeguro());
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && codigo()) carregar(); });
setInterval(() => { if (document.visibilityState === "visible" && codigo() && !S.busy) carregar(); }, 90000);

function boot(){
  S.fila = ls.get("fila", []);
  const d = ls.get("dados", null);
  if (d && codigo()) aplicarDados(d);
  loadPerson(); applyTheme(); render();
  carregar();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
}
boot();
