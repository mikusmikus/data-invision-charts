import React, { FC, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { stabilityOptions } from '../data-options/stability-options';
import { ChartType, Stability, StabilityOptions } from '../types/StabilityOptions';

type Props = {
  stabilityData: Stability;
  title?: string;
  height?: number;
  width?: number | string;
  type?: ChartType;
};

const StabilityCharts: FC<Props> = ({
  stabilityData,
  title = '',
  height = 600,
  type = 'bar',
  width = '100%',
}) => {
  const [chartData, setChartData] = useState<StabilityOptions>();

  useEffect(() => {
    setChartData(
      stabilityOptions(
        stabilityData.xLeftEdge,
        stabilityData.yBaseline,
        stabilityData.yProduction,
        title
      )
    );
  }, [stabilityData]);

  return (
    <div className="container container-fluid">
      <div className="row ">
        <div className="col-xs-12">
          {chartData && (
            <Chart
              options={chartData.options}
              series={chartData.series}
              height={height}
              width={width}
              type={type}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StabilityCharts;
