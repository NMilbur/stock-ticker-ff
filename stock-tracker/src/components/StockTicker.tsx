import { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

interface StockTickerProps {
  symbol?: string;
  price?: number;
}

interface Stock {
  symbol: string;
  price: number;
}

const StockTicker = ({ symbol = "GME", price = 0 }: StockTickerProps) => (
  <Card>
    <CardContent>
      <Typography variant="h5">
        {symbol}
      </Typography>
      <Typography variant="h4">
        {price}
      </Typography>
    </CardContent>
  </Card>
);

export default StockTicker;
