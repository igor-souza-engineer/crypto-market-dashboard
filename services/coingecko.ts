/**
 * =============================================================================
 * CoinGecko Service
 * =============================================================================
 *
 * Responsável por toda comunicação entre nossa aplicação
 * e a API da CoinGecko.
 *
 * Responsabilidades:
 *
 * - Buscar dados de mercado
 * - Buscar moedas
 * - Buscar tendências
 * - Buscar dados globais
 *
 * Este arquivo NÃO possui responsabilidade de:
 *
 * - Renderizar componentes
 * - Manipular estado do React
 * - Criar interface
 *
 * =============================================================================
 */

import type { Coin } from "@/types/coin";

const BASE_URL = "https://api.coingecko.com/api/v3";

export async function getCoinsMarkets(): Promise<Coin[]> {
    const endpoint = "/coins/markets";
    const queryParams = "?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";

    const url = `${BASE_URL}${endpoint}${queryParams}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error ("failed to fetch coins markets");
    }

    const data = await response.json();

    return data
}