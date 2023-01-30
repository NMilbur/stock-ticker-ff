import { Box } from "@mui/material";
import StockTicker from "components/StockTicker";
import { useEffect, useState } from "react";
import { getStockTickers } from "utils/helpers";

const Ticker = () => {
  const [data, setData] = useState<any>();
  const [symbols, setSymbols] = useState<string[]>([]);
  const [positions, setPositions] = useState<any[]>([]);

  useEffect(() => {
    getStockTickers({ callback: setData });
  }, []);

  useEffect(() => {
    if (data) {
      setSymbols(data.finance.result[0].portfolios[0].positions.map(({ symbol }: { symbol: string }) => symbol));
      setPositions(symbols.map((symbol) => data.finance.result[0].quotes[symbol]))
    }
  }, [data])

  console.log(positions);

  return (
    <Box display="flex">
      {
        positions.map(
          (position, idx) =>
            <StockTicker key={idx} symbol={position.symbol} price={position.regularMarketPrice} />
        )
      }
    </Box>
  );
};

export default Ticker;
