const API_BASE = "https://api.coingecko.com/api/v3/simple/price";

document.getElementById("getPrice").addEventListener("click", async () => {
    const cryptoId = document.getElementById("cryptoSelect").value;
    const fiatId = document.getElementById("fiatSelect").value;
    const resultDiv = document.getElementById("result");

    try {
        const response = await fetch(`${API_BASE}?ids=${cryptoId}&vs_currencies=${fiatId}`);
        if (!response.ok) {
            throw new Error("Erro na resposta da API");
        }

        const data = await response.json();

        if (data[cryptoId] && data[cryptoId][fiatId]) {
            const value = data[cryptoId][fiatId];

            let formattedValue;
            if (fiatId === "usd") {
                formattedValue = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(value);
            } else if (fiatId === "brl") {
                formattedValue = new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(value);
            } else {
                formattedValue = `${value} ${fiatId.toUpperCase()}`;
            }

            resultDiv.textContent = `1 ${cryptoId.toUpperCase()} = ${formattedValue}`;
        } else {
            resultDiv.textContent = "Cotação não encontrada.";
        }
    } catch (error) {
        console.error(error);
        resultDiv.textContent = "Erro ao buscar cotação.";
    }
});
