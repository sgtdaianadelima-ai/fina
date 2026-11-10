# Fina — finanças da família Assis

App (PWA) de finanças da Daiana e do Gustavo. No ar em https://sgtdaianadelima-ai.github.io/fina/ (GitHub Pages deste repositório).

## Como falar com a Daiana
- Português simples, frases curtas, nome exato dos botões. Ela usa mais o celular (Android).
- Sempre mostrar antes de mudar valores da planilha que não foram pedidos.
- Ela não sabe onde ficam as coisas: **tudo mastigado, sempre**. Toda tarefa que ela precisar fazer vem pronta, em passos numerados, com o caminho exato dos menus e links diretos. Faça você tudo o que der e deixe para ela só o mínimo (ex.: só clicar em Implantar).
- Mudou o robô? Entregue junto uma página (Artifact) com botão "Copiar o código", link direto para a planilha e os passos de colar e implantar. Não mande só "copie o arquivo do GitHub".
- Ela usa celular e computador. Para retomar uma conversa em outro aparelho, o caminho é claude.ai/code (aba Code no app), na mesma conta.

## Este repositório é PÚBLICO
Nada de senha, código da família, chave do Gemini, valores ou nomes de lojas aqui. Os dados ficam só na planilha FAMÍLIA ASSIS (Google Drive). As chaves ficam nas Propriedades do script do Google: CODIGO_FAMILIA (chave interna; ninguém digita: o robô a devolve quando a pessoa entra com a própria senha — `a:"pessoas"` e `a:"entrarPessoa"`, com limite de 8 tentativas a cada 15 min), GEMINI_KEY. Investir é educativo: nunca indicar banco, corretora, fundo ou ação específicos (consultoria é regulada pela CVM).

## Como funciona
- `index.html` + `estilo.css` + `app.js` — o app inteiro (telas Início, Gastos, Fina/assistente, Metas, Ajustes). Funciona offline: guarda os dados no aparelho e uma fila de alterações que sobe quando a internet volta.
- `robo/Codigo.gs` — cópia do robô do Google Apps Script da planilha (o de verdade fica em Extensões > Apps Script da planilha). `doGet` devolve tudo; `doPost` com `a: "lote"` grava; `a: "ia"` chama o Gemini; `a: "foto"` guarda print na pasta "Fina – Comprovantes"; `avisosDiarios` manda avisos pelo ntfy às 9h.
- Planilha: abas Lançamentos (ID na coluna H, G é fórmula — nunca escrever em G), Parcelas (ID na J; H e I são fórmulas), Entradas (ID na F), Config (A categorias, D contas fixas, J formas de pagamento, N14 cartões, O3:O5 metas, O8:O10 reserva, R3:V40 de quais entradas sai cada % com caixinhas — Resumo B7:B9 usa essa tabela) Separado (o que foi dado/guardado de verdade: A Mês | B Para quê | C Valor | D Quem | E Descrição | F ID; Resumo C7:C9 soma) e App (A1: JSON com perfis, temas, avatares, avisos, pagos (contas pagas por mês), fixasDia (dia de vencimento), objetivos, perfilInvest, taxas, perfis[nome].senha {sal, hash SHA-256} — nunca a senha em texto, dividas, consignado (margem do Gustavo), bens, patrimonio, recorrentes, recGerados, limites, tipoCat, notas, milhas {cartoes, saldos, origens, valores}). Radar de milhas: robô `a:"promos"` lê os feeds RSS de sites de milhas (cache 3h) e avisa no ntfy bônus ≥ 80% para Itaú/Livelo/PortoPlus. Valores do Banco Central vêm com ponto decimal: não usar num_ neles. Login por pessoa: senha + digital/rosto (WebAuthn, id da credencial só no aparelho).
- Leitura sem IA (antes de chamar o Gemini): `lerSemIA` lê PDF (pdf.js, separa 2 colunas), OFX, CSV e prints (tesseract.js, `lerListaApp` para apps de banco) e `lerFraseSemIA` lê frases simples. A mensagem tem o botão "Ler com a IA" (`data-comia`) se errar. Bibliotecas vêm do cdnjs/jsdelivr só quando precisa.
- Compra no cartão conta no mês da fatura: compras a partir do dia de fechamento vão para o mês seguinte.
- `sw.js` — guarda o app para abrir offline. **Toda mudança: aumentar `VERSAO`.**

## Ao mudar o app
1. Teste no celular (~390px) e sem erros no console.
2. Aumente o número da versão nos 3 lugares: `VERSAO` no `sw.js`, `VERSAO_APP` no `app.js` e `?v=` no `index.html`. O celular baixa sozinho e recarrega.
3. Se o funcionamento mudou, atualize `manual.html`.
4. Mudou o robô? A Daiana precisa colar no Apps Script e fazer Implantar > Gerenciar implantações > lápis > Nova versão > Implantar.
