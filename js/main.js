document.getElementById("getPrice").addEventListener("click", async () => {
    const cryptoId = document.getElementById("cryptoSelect").value; 
    const price = await getCryptoPrice(cryptoId);

    const resultDiv = document.getElementById("result");
    if (price) {
        resultDiv.textContent = `${cryptoId.toUpperCase()} = $${price}`
    } else {
        resultDiv.textContent = "Erro ao buscar cotação"
    }
})