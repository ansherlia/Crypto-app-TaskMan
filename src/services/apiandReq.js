const BASE_URL = "https://api.coingecko.com";
const KEY = "CG-Qm6QKe2KCfxQvx8t7ZoeQEcP";
const apiAndUrl = (page, currency) =>
	`${BASE_URL}/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x-cg-pro-api-key=${KEY}`;
const fetchSearchInput = (query) =>
	`${BASE_URL}/api/v3/search?query=${query}&x-cg-pro-api-key=${KEY}`;
const fetchChartData = (id) =>
	`${BASE_URL}/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7&x-cg-pro-api-key=${KEY}`;
export { apiAndUrl, fetchSearchInput, fetchChartData };
