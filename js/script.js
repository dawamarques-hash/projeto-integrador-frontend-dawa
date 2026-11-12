// ==========================================================
// FuteVibe - Ofertas da semana (funções + DOM)
// Atividade: funções, arrays e manipulação do DOM
// ==========================================================

// ---------- 1. DADOS ----------
// desconto é uma fração: 0.1 = 10% de desconto
const catalogoProdutos = [
    { id: 1,  nome: "Bola de Futevôlei Oficial",      categoria: "Bolas de Futevôlei", preco: 149.90, desconto: 0.10 },
    { id: 2,  nome: "Rede de Futevôlei Profissional", categoria: "Redes",              preco: 898.90, desconto: 0.15 },
    { id: 3,  nome: "Camisa Esportiva Dry-Fit",       categoria: "Roupas Esportivas",  preco: 79.90,  desconto: 0 },
    { id: 4,  nome: "Shorts Esportivo Masculino",     categoria: "Roupas Esportivas",  preco: 59.90,  desconto: 0.05 },
    { id: 5,  nome: "Óculos de Sol Esportivo",        categoria: "Acessórios",         preco: 129.90, desconto: 0.10 },
    { id: 6,  nome: "Boné Esportivo",                 categoria: "Acessórios",         preco: 49.90,  desconto: 0 },
    { id: 7,  nome: "Kit Iniciante Futevôlei",        categoria: "Kits de Futevôlei",  preco: 249.90, desconto: 0.20 },
    { id: 8,  nome: "Tornozeleira de Proteção",       categoria: "Acessórios",         preco: 39.90,  desconto: 0 },
    { id: 9,  nome: "Luvas para Treino",              categoria: "Acessórios",         preco: 34.90,  desconto: 0 },
    { id: 10, nome: "Mochila Esportiva",              categoria: "Acessórios",         preco: 159.90, desconto: 0.10 },
    { id: 11, nome: "Garrafa Térmica Esportiva",      categoria: "Acessórios",         preco: 69.90,  desconto: 0 },
    { id: 12, nome: "Toalha Esportiva de Praia",      categoria: "Acessórios",         preco: 44.90,  desconto: 0 }
];

// Classe CSS de cada faixa (o CSS decide a aparência; o JS decide quando vale)
const classePorFaixa = {
    "Econômico": "faixa-economico",
    "Intermediário": "faixa-intermediario",
    "Premium": "faixa-premium",
    "Profissional": "faixa-profissional"
};

// ---------- 2. FUNÇÃO QUE PROCESSA (pura, com parâmetro padrão) ----------
// Devolve o preço final com desconto, arredondado em 2 casas.
// Não altera nada do que recebe: só calcula e devolve (return).
function calcularPrecoFinal(preco, desconto = 0) {
    return Math.round(preco * (1 - desconto) * 100) / 100;
}

// ---------- 3. FUNÇÃO QUE CLASSIFICA (4 faixas, ordem crescente) ----------
function classificarPreco(precoFinal) {
    if (precoFinal < 60) {
        return "Econômico";
    }
    if (precoFinal < 150) {
        return "Intermediário";
    }
    if (precoFinal < 300) {
        return "Premium";
    }
    return "Profissional";
}

// Formata número como moeda brasileira
function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ---------- 5. MÉTODOS DE ARRAY (funções de cálculo, sem tocar na página) ----------

// map: gera uma NOVA lista com o resultado de cada item (original intacto)
function processarCatalogo(lista) {
    return lista.map((item) => {
        const precoFinal = calcularPrecoFinal(item.preco, item.desconto);
        return {
            ...item,
            precoFinal: precoFinal,
            faixa: classificarPreco(precoFinal)
        };
    });
}

// filter: só os itens em promoção
function filtrarEmPromocao(lista) {
    return lista.filter((item) => item.desconto > 0);
}

// sort em CÓPIA ([...lista]) para não alterar o array original
function ordenarPorPrecoFinal(lista) {
    return [...lista].sort((a, b) => a.precoFinal - b.precoFinal);
}

// reduce: total, média e contagem por faixa
function calcularResumo(lista) {
    const total = lista.reduce((soma, item) => soma + item.precoFinal, 0);
    const media = lista.length > 0 ? total / lista.length : 0;
    const contagemPorFaixa = lista.reduce((contagem, item) => {
        contagem[item.faixa] = (contagem[item.faixa] || 0) + 1;
        return contagem;
    }, {});
    return { quantidade: lista.length, total: total, media: media, contagemPorFaixa: contagemPorFaixa };
}

// ---------- 7. FUNÇÃO QUE MONTA O ELEMENTO (textContent, sem innerHTML) ----------
function criarElementoOferta(item) {
    const card = document.createElement("li");
    card.classList.add("oferta-item");
    // ---------- 8. classe por faixa ----------
    card.classList.add(classePorFaixa[item.faixa]);

    const titulo = document.createElement("h3");
    titulo.textContent = item.nome;

    const categoria = document.createElement("p");
    categoria.classList.add("oferta-categoria");
    categoria.textContent = item.categoria;

    const precos = document.createElement("p");
    precos.classList.add("oferta-precos");

    const precoOriginal = document.createElement("span");
    precoOriginal.classList.add("preco-original");
    precoOriginal.textContent = formatarMoeda(item.preco);

    const precoFinal = document.createElement("strong");
    precoFinal.classList.add("preco-final");
    precoFinal.textContent = formatarMoeda(item.precoFinal);

    precos.append(precoOriginal, " ", precoFinal);

    const selo = document.createElement("span");
    selo.classList.add("selo-faixa");
    selo.textContent = item.faixa + " · " + Math.round(item.desconto * 100) + "% OFF";

    card.append(titulo, categoria, precos, selo);
    return card;
}

// ---------- 6 e 7. DOM: seleciona o ponto de inserção e insere ----------
function renderizarOfertas(lista, areaDestino) {
    lista.forEach((item) => {
        areaDestino.append(criarElementoOferta(item));
    });
}

// ---------- 9. RESUMO ----------
function renderizarResumo(resumo, areaResumo) {
    const faixas = Object.entries(resumo.contagemPorFaixa)
        .map(([faixa, quantidade]) => faixa + ": " + quantidade)
        .join(" | ");

    areaResumo.textContent =
        resumo.quantidade + " produtos em oferta | Total: " + formatarMoeda(resumo.total) +
        " | Média: " + formatarMoeda(resumo.media) + " | " + faixas;
}

// ---------- PROGRAMA PRINCIPAL ----------
function iniciarOfertas() {
    const listaOfertas = document.querySelector("#lista-ofertas");
    const resumoOfertas = document.querySelector("#resumo-ofertas");

    // Confirma que os pontos de inserção existem (evita erro com null)
    if (listaOfertas === null || resumoOfertas === null) {
        console.error("FuteVibe: área de ofertas não encontrada no HTML.");
        return;
    }

    const catalogoProcessado = processarCatalogo(catalogoProdutos);
    const emPromocao = filtrarEmPromocao(catalogoProcessado);
    const ordenadas = ordenarPorPrecoFinal(emPromocao);

    renderizarOfertas(ordenadas, listaOfertas);
    renderizarResumo(calcularResumo(ordenadas), resumoOfertas);
}

iniciarOfertas();