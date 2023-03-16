export const API_HOST = "yh-finance.p.rapidapi.com";
export const BASE_API_URL = `https://${API_HOST}/`;
export const ENDPOINTS = {
  summaryAll: `${BASE_API_URL}market/v2/get-summary`,
  summaryOne: `${BASE_API_URL}stock/v2/get-summary`,
  popularWatchlists: `${BASE_API_URL}market/get-popular-watchlists`,
  watchlistDetail: `${BASE_API_URL}market/get-watchlist-detail`,
};

export const BASE_REQUEST_HEADERS = {
  "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  "X-RapidAPI-Host": API_HOST,
};