import { Box, MenuItem, TextField, Typography } from "@mui/material";

interface WatchlistSelectProps {
  popularWatchlists: any;
  watchlist: any;
  setWatchlist: (value: any) => void;
}

const WatchlistSelect = ({ popularWatchlists = {}, watchlist, setWatchlist }: WatchlistSelectProps) => (
  <Box display="flex" flexDirection="column" rowGap={2} style={{ width: "100%" }}>
    <TextField
      select
      label="Watchlists"
      onChange={(e) => setWatchlist(e.target.value)}
      style={{ width: "20%" }}
    >
      {popularWatchlists?.finance?.result[0]?.portfolios.map((portfolio: any, idx: number) => (
        <MenuItem key={idx} value={portfolio}>
          {portfolio.name}
        </MenuItem>
      ))}
    </TextField>
    {watchlist && (
      <Typography variant="body1">
        {watchlist.shortDescription}
      </Typography>
    )}
  </Box>
);

export default WatchlistSelect;
