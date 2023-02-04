import { Box, Grid } from "@mui/material";
import Stock from "components/Stock";
import { useEffect, useState } from "react";
import { getPopularWatchlists, getWatchListDetail } from "utils/helpers";
import WatchlistSelect from "./WatchlistSelect";

const Ticker = () => {
  const [data, setData] = useState<any>();
  const [symbols, setSymbols] = useState<string[]>([]);
  const [popularWatchlists, setPopularWatchLists] = useState<any>();
  const [watchlist, setWatchlist] = useState<any>();
  const [positions, setPositions] = useState<any[]>([]);

  useEffect(() => {
    getPopularWatchlists(setPopularWatchLists);
  }, []);

  useEffect(() => {
    if (watchlist) {
      getWatchListDetail(watchlist.userId, watchlist.pfId, setData)
    }
  }, [watchlist])

  useEffect(() => {
    if (data) {
      setSymbols(data.finance.result[0].portfolios[0].positions.map(({ symbol }: { symbol: string }) => symbol));
      setPositions(symbols.map((symbol) => data.finance.result[0].quotes[symbol]))
    }
  }, [data, symbols])

  return (
    <Box display="flex" flexDirection="column" m={2} rowGap={2}>
      <Box display="flex" columnGap={2} style={{ width: "100%" }}>
        <WatchlistSelect
          popularWatchlists={popularWatchlists}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
        />
      </Box>
      <Grid container>
        {positions &&
          positions.map(({ longName, symbol, regularMarketChangePercent, regularMarketPrice }, idx) =>
            (
              <Grid item xs={3} key={idx}>
                <Stock
                  longName={longName}
                  symbol={symbol}
                  percentChange={regularMarketChangePercent}
                  price={regularMarketPrice}
                />
              </Grid>
            ))
        }
      </Grid>
    </Box>
  );
};

export default Ticker;
