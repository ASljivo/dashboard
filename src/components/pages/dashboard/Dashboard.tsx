import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { DashboardCharts } from "../../organizams/dashborad-charts/DashboardCharts";

export const Dashboard: FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <DashboardCharts />
    </Box>
  );
};
