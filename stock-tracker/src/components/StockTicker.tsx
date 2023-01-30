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
      <Typography variant="body1">
        {symbol}
      </Typography>
      <Typography variant="body2">
        {price}
      </Typography>
    </CardContent>
  </Card>
);

export default StockTicker;
