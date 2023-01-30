import axios from "axios";
import { BASE_REQUEST_HEADERS, ENDPOINTS } from "./constants";

type RequestOptionsType = {
  method: string;
  url: string;
  params?: any;
  headers: any;
}

type getSummaryType = {
  callback: (value: any) => void;
  symbol?: string;
}

export const getSummary = async ({ callback, symbol }: getSummaryType) => {
  const params = { region: "US", symbol };
 
  const options: RequestOptionsType = {
    method: "GET",
    url: symbol ? ENDPOINTS.summaryOne : ENDPOINTS.summaryAll,
    params,
    headers: { ...BASE_REQUEST_HEADERS },
  };

  axios.request(options).then((response) => callback(response.data));
};

export const getStockTickers = async ({ callback }: { callback: (value: any) => void }) => {
  let options: RequestOptionsType = {
    method: "GET",
    url: ENDPOINTS.popularWatchlists,
    headers: { ...BASE_REQUEST_HEADERS },
  };

  axios.request(options).then((response) => {
    const { userId, pfId } = response.data.finance.result[0].portfolios[0];
    options.params = { userId, pfId };
    options.url = ENDPOINTS.watchlistDetail;

    axios.request(options).then((res) => {
      callback(res.data);
    })
  }); 
}
