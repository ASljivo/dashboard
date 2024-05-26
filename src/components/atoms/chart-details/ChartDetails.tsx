import { FC } from "react";
import "./style.css";
import { ChartProps } from "models/chart";
import { Stack, Typography } from "@mui/material";

export const ChartDetails: FC<ChartProps> = ({ label, value, description }) => {
  return (
    <Stack direction="column" width="100%" textAlign="center" spacing={3}>
      <Typography variant="h3" gutterBottom>
        {label}
      </Typography>

      <Typography variant="h6">Value</Typography>
      <Typography className="body-text" variant="body1" sx={{m:0}} gutterBottom>{value}</Typography>

      <Typography variant="h6">Description</Typography>
       <Typography className="body-text" variant="body1" sx={{m:0}}>{description}</Typography>
    </Stack>
  );
};
