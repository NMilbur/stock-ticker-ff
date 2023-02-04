import { Box, Card, CardContent, Typography } from "@mui/material";
import { COLORS } from "utils/styles";

const getCardColor = (value: number) => value < 0 ? COLORS.NEGATIVE : COLORS.POSITIVE;;

interface StockProps {
  longName: string;
  percentChange: number;
  price: number;
  symbol: string;
}

const Stock = ({ longName, symbol, percentChange = 0, price = 0 }: StockProps) => (
  <Card
    style={{
      height: "100%",
      background: percentChange !== 0 ? getCardColor(percentChange) : undefined
    }}
  >
    <CardContent style={{ display: "flex", flexDirection: "column", gridRowGap: 20, justifyContent: "space-between", height: "100%" }}>
        <Box display="flex" columnGap={5} justifyContent="space-between">
          <Typography variant="h5">
            {longName}
          </Typography>
          <Typography variant="h6">
            ({symbol})
          </Typography>
        </Box>
        
        <Box display="flex" columnGap={5} alignItems="flex-end">
          <Typography variant="h4">
            {price}
          </Typography>
          <Typography variant="h5">
            {percentChange}
          </Typography>
        </Box>
    </CardContent>
  </Card>
);

export default Stock;
