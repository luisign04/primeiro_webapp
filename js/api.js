const API_BASE = "https://api.coingecko.com/api/v3/simple/price";


async function getCryptoPrice(cryptoId) {
    try{
        const response = await fetch(`${API_BASE}?ids=${cryptoId}&vs_currencies=usd`);
        const data = await response.json()
        return data[cryptoId].usd;
    }catch(error){
        console.error("Erro ao buscar dados da API:", error)
        return null;
    }
    
}