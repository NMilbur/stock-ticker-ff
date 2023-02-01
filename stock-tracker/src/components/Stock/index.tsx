import { Card, CardContent, Typography } from "@mui/material";

interface StockProps {
  symbol?: string;
  price?: number;
}

const Stock = ({ symbol = "GME", price = 0 }: StockProps) => (
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

export default Stock;
