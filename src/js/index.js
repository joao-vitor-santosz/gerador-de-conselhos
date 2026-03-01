document.getElementById('btn').addEventListener('click', async function() {
    pegarConselhoAleatorio()
})

async function geradorDeConselhos() {
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url);
    return await resposta.json();
    if (!resposta.ok) {
        throw new Error('Erro ao obter o conselho');
    }
}

async function pegarConselhos(id) {
    const url = `https://api.adviceslip.com/advice/${id}`;
    const resposta = await fetch(url);
    return await resposta.json();
    if (!resposta.ok) {
        throw new Error('Erro ao obter o conselho');
    }
}

async function pegarConselhoAleatorio() {

    try {
    const conselhoApi = await geradorDeConselhos();
    const conselho = await pegarConselhos(conselhoApi.slip.id);
    document.getElementById('conselho').innerText = conselho.slip.advice;
    } catch (error) {
        console.error('Erro ao obter conselho:', error);
        alert('Desculpe, não foi possível obter um novo conselho no momento.');
    }
}

pegarConselhoAleatorio()