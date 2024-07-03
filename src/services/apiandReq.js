const BASE_URL = "https://api.coingecko.com";
const KEY = "CG-Qm6QKe2KCfxQvx8t7ZoeQEcP";
const apiAndUrl = (page) =>
	`${BASE_URL}/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&x-cg-pro-api-key=${KEY}`;

export { apiAndUrl };
