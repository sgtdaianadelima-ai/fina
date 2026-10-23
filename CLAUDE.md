# Fina — finanças da família Assis

App (PWA) de finanças da Daiana e do Gustavo. No ar em https://sgtdaianadelima-ai.github.io/fina/ (GitHub Pages deste repositório).

## Como falar com a Daiana
- Português simples, frases curtas, nome exato dos botões. Ela usa mais o celular (Android).
- Sempre mostrar antes de mudar valores da planilha que não foram pedidos.

## Este repositório é PÚBLICO
Nada de senha, código da família, chave do Gemini, valores ou nomes de lojas aqui. Os dados ficam só na planilha FAMÍLIA ASSIS (Google Drive). As chaves ficam nas Propriedades do script do Google: CODIGO_FAMILIA, GEMINI_KEY.

## Como funciona
- `index.html` + `estilo.css` + `app.js` — o app inteiro (telas Início, Gastos, Fina/assistente, Metas, Ajustes). Funciona offline: guarda os dados no aparelho e uma fila de alterações que sobe quando a internet volta.
- `robo/Codigo.gs` — cópia do robô do Google Apps Script da planilha (o de verdade fica em Extensões > Apps Script da planilha). `doGet` devolve tudo; `doPost` com `a: "lote"` grava; `a: "ia"` chama o Gemini; `a: "foto"` guarda print na pasta "Fina – Comprovantes"; `avisosDiarios` manda avisos pelo ntfy às 9h.
- Planilha: abas Lançamentos (ID na coluna H, G é fórmula — nunca escrever em G), Parcelas (ID na J; H e I são fórmulas), Entradas (ID na F), Config (A categorias, D contas fixas, J formas de pagamento, N14 cartões, O3:O5 metas, O8:O10 reserva, R3:V40 de quais entradas sai cada % com caixinhas — Resumo B7:B9 usa essa tabela) e App (A1: JSON com perfis, temas, avatares, avisos).
- Compra no cartão conta no mês da fatura: compras a partir do dia de fechamento vão para o mês seguinte.
- `sw.js` — guarda o app para abrir offline. **Toda mudança: aumentar `VERSAO`.**

## Ao mudar o app
1. Teste no celular (~390px) e sem erros no console.
2. Aumente o número da versão nos 3 lugares: `VERSAO` no `sw.js`, `VERSAO_APP` no `app.js` e `?v=` no `index.html`. O celular baixa sozinho e recarrega.
3. Se o funcionamento mudou, atualize `manual.html`.
4. Mudou o robô? A Daiana precisa colar no Apps Script e fazer Implantar > Gerenciar implantações > lápis > Nova versão > Implantar.
