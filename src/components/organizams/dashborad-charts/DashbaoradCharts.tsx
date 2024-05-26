import { Box, Stack, Typography } from "@mui/material";
import { Chart } from "components/molecules/chart/Chart";
import { EMPLOYEES_CHART, PROJECTS_CHART } from "mock/chart";
import { FC } from "react";

export const DashboardCharts: FC = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ mt: 2 }}
      width="100%"
      textAlign="center"
      spacing={3}
    >
      <Box flexGrow={1} sx={{ boxShadow: 2, py: 2, mt: 2 }}>
        <Typography variant="h5" gutterBottom>
          Employess
        </Typography>
        <Chart data={EMPLOYEES_CHART} />
      </Box>
      <Box flexGrow={1} sx={{ boxShadow: 2, py: 2, mt: 2 }}>
        <Typography variant="h5" gutterBottom>
          Projects
        </Typography>
        <Chart data={PROJECTS_CHART} />
      </Box>
    </Stack>
  );
};
