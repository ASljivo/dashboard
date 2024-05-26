import { Box, Typography } from "@mui/material";
import { DashboardCharts } from "components/organizams/dashborad-charts/DashbaoradCharts";
import { FC } from "react";

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
