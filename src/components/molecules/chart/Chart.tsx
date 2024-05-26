import { FC, useState } from "react";

import { DefaultizedPieValueType } from "@mui/x-charts/models";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { Box } from "@mui/material";
import { ChartProps } from "models/chart";
import { CHART_INIT } from "mock/chart";
import { ChartDetails } from "components/atoms/chart-details/ChartDetails";
import { Modal } from "components/atoms/modal/Modal";

const sizing = {
  margin: { right: 5 },
  width: 300,
  height: 300,
  legend: { hidden: true },
};

interface props {
  data: ChartProps[];
}

export const Chart: FC<props> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentData, setContentData] = useState<ChartProps>(CHART_INIT);
  const openModal = (content: ChartProps) => {
    setIsModalOpen(true);
    setContentData(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getArcLabel = ({ value }: Omit<DefaultizedPieValueType, "label">) => {
    const total = data.map((item) => item.value).reduce((a, b) => a + b, 0);
    const percent = value / total;
    return `${(percent * 100).toFixed(0)}%`;
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <PieChart
        series={[
          {
            outerRadius: 120,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 14,
          },
        }}
        onItemClick={(e, { dataIndex }) => openModal(data[dataIndex])}
        {...sizing}
      />
      <Modal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        component={<ChartDetails {...contentData} />}
      />
    </Box>
  );
};
