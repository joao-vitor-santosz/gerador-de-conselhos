document.getElementById('btn').addEventListener('click', async function() {
    pegarConselhoAleatorio()
})

async function geradorDeConselhos() {
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);
    return await resposta.json();
}

async function pegarConselhos(id) {
    const url = `https://api.adviceslip.com/advice/${id}`;
    const resposta = await fetch(url);
    return await resposta.json();
}

async function pegarConselhoAleatorio() {
    const conselhoApi = await geradorDeConselhos();
    const conselho = await pegarConselhos(conselhoApi.slip.id);
    document.getElementById('conselho').innerText = conselho.slip.advice;
}

pegarConselhoAleatorio()