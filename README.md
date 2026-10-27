# Página de vendas — 30 Dias de Conteúdo com IA (V01, demonstração)

Site estático (HTML, CSS e JavaScript), sem dependências e sem build. Compatível com GitHub Pages.

## Arquivos
- `index.html` — página de vendas
- `style.css` — estilos (responsivo, foco visível, respeita "reduzir movimento")
- `script.js` — lê a configuração e ativa os botões
- `config.js` — **único arquivo a editar**: link de checkout, preço, e-mail de suporte, nome do produtor
- `assets/` — capa, 4 prévias de páginas do e-book (imagens reais), favicon e fontes Poppins

## Como ativar a venda
1. Cadastre o produto e a oferta na Kiwify (manualmente, pelo painel) e copie o **link do checkout**.
2. Abra `config.js` e cole o link em `CHECKOUT_URL` (precisa começar com `https://`).
3. Confira se `PRICE_LABEL` é **igual** ao preço da oferta na Kiwify.
4. Preencha `SUPPORT_EMAIL` e `PRODUCER_NAME` se quiser que apareçam no rodapé.
5. Teste o botão de compra no computador e no celular antes de divulgar.
Enquanto `CHECKOUT_URL` estiver vazio, a página é uma **demonstração**: aviso no topo e botão final desativado.

## Publicar no GitHub Pages
1. Crie um repositório e envie estes arquivos na raiz.
2. Em *Settings > Pages*, escolha a branch principal e a pasta raiz.
3. A página ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/` (confira o endereço exato no painel).
4. Depois de publicado, troque o valor de `og:image` em `index.html` pelo endereço absoluto da imagem, se quiser prévia ao compartilhar o link.

## Segurança e privacidade
Sem chaves, senhas ou formulários. O site não coleta dados de pagamento nem usa cookies ou análise de acesso.

## Testes realizados (V01)
Chromium 141 (Playwright), larguras 1280 px e 390 px: página carrega sem erros de console e sem recursos faltando; sem rolagem horizontal; botões desativados sem checkout; botões ativados com URL de teste fictícia (apenas para testar a lógica, não é um checkout real).
**Não testado:** Safari/Firefox, aparelhos reais, Lighthouse, leitor de tela, navegação completa por teclado, contraste medido por ferramenta.
