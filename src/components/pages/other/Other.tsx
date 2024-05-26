import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const Other: FC = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Other
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum body2. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae
        rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Box>
  );
};
