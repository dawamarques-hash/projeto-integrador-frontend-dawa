# FuteVibe - Loja de Artigos de Futevôlei

Projeto Integrador do curso de Análise e Desenvolvimento de Sistemas (UNIPE).
Autor: Dawã Vitor Marques Santos

**Repositório:** https://github.com/dawamarques-hash/projeto-integrador-frontend-dawa

> **Aviso:** a FuteVibe é uma loja **fictícia**, criada para fins acadêmicos. Produtos, preços, endereço, telefone e e-mail são inventados, e não há venda, pagamento ou envio reais.

## Objetivo

Apresentar, em uma página única, o catálogo de uma loja especializada em futevôlei (bolas, redes, roupas esportivas, acessórios e kits), praticando HTML5 semântico, CSS3 e JavaScript puro.

## Público

Praticantes de futevôlei, frequentadores de praia e entusiastas de esportes de areia, de iniciantes a atletas.

## Principais funcionalidades

- Menu por âncoras e seções semânticas (header, main, footer).
- Filtro de produtos por categoria (JavaScript).
- Catálogo com 12 produtos e tabela resumida.
- **Ofertas da Semana:** o JavaScript calcula o preço final com desconto, classifica os produtos em faixas de preço (Econômico, Intermediário, Premium e Profissional), ordena sem alterar os dados originais e mostra um resumo com total e média.
- Vídeo de demonstração (MP4 e WebM, com poster).
- Gráfico em canvas com texto alternativo.
- Formulários de avaliação e de contato (sem envio real, ver "Decisões éticas").

## Como visualizar

1. Clone o repositório:
   ```bash
   git clone https://github.com/dawamarques-hash/projeto-integrador-frontend-dawa.git
   ```
2. Abra a pasta no VS Code e use a extensão **Live Server** (botão direito em `index.html` > *Open with Live Server*), ou abra o `index.html` diretamente no navegador.

> **[PREENCHER: se publicar no GitHub Pages, coloque aqui o link do site.]**

## Estrutura

```
projeto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── images/
    └── videos/
```

## Créditos e licenças

| Material | Origem | Licença |
|---|---|---|
| Código HTML, CSS e JS | Autoria própria, com apoio de IA (Claude, Anthropic) | Autoria própria |
| Ícones SVG (bola, sol, onda) | Feitos em código no projeto | Autoria própria |
| Fontes Barlow Condensed e DM Sans | [Google Fonts](https://fonts.google.com/) | SIL Open Font License |
| Imagens dos produtos | gerados pelo chatGpt |
| Vídeo e poster | plataforma de videos sem direitos autorais | 

O projeto não usa bibliotecas nem frameworks. O único serviço externo é o Google Fonts.

## Decisões éticas e profissionais (resumo)

- **Privacidade:** o site não armazena nem transmite dados para um backend, e os exemplos usam apenas dados fictícios. Os formulários ainda precisam de correção para não enviar dados pela URL.
- **Necessidade de dados (LGPD, art. 6º, III):** pedir apenas o mínimo necessário; nome e e-mail na avaliação devem ser opcionais.
- **Acessibilidade:** HTML semântico, textos alternativos, rótulos em todos os campos, foco visível por teclado, contraste conferido e respeito a movimento reduzido.
- **Sustentabilidade:** sem dependências, vídeo com `preload="metadata"`, filtro sem novas requisições e animações leves. Melhoria pendente: imagens em WebP com `loading="lazy"`.
- **Uso de IA:** declarado no relatório, com o que foi pedido, aproveitado e conferido.

A análise completa está no relatório em PDF: **[PREENCHER: nome do arquivo, por exemplo `relatorio-futevibe.pdf`]**.