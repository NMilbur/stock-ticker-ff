import axios from "axios";
import { BASE_REQUEST_HEADERS, ENDPOINTS } from "./constants";

type RequestOptionsType = {
  method: string;
  url: string;
  params?: any;
  headers: any;
}

const getOptions = (url: string, params: any = {}): RequestOptionsType => ({
  method: "GET",
  url,
  params,
  headers: { ...BASE_REQUEST_HEADERS },
});

const getData = (
  url: string,
  params: any = {},
  callback: (value: any) => void,
) => {
  const options: RequestOptionsType = getOptions(url, params);
  axios.request(options).then((response) => callback(response.data));
};

type getSummaryType = {
  callback: (value: any) => void;
  symbol?: string;
}

export const getSummary = async ({ callback, symbol }: getSummaryType) => 
  getData(symbol ? ENDPOINTS.summaryOne : ENDPOINTS.summaryAll, { region: "US", symbol }, callback);

export const getPopularWatchlists = async (setPopularWatchlists: (value: any) => void) =>
  getData(ENDPOINTS.popularWatchlists, {}, setPopularWatchlists);

export const getWatchListDetail = async (userId: string, pfId: string, setWatchlist: (value: any) => void) =>
  getData(ENDPOINTS.watchlistDetail, { userId, pfId }, setWatchlist);
