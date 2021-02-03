import { StabilityOptions } from '../types/StabilityOptions';

export const stabilityOptions = (
  xLeftEdge: number[],
  yBaseline: number[],
  yProduction: number[],
  title?: string,
  type?: string
): StabilityOptions => {
  return {
    series: [
      {
        name: 'production',
        data: yProduction,
      },
      {
        name: 'baseline',
        data: yBaseline,
      },
    ],
    options: {
      title: {
        text: title || '',
      },
      chart: {
        height: 600,
        type: type || 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        colors: ['#0EDE14', '#FFA110'],
        width: 4,
      },
      legend: {
        show: true,
        markers: {
          fillColors: ['#0EDE14', '#FFA110'],
        },
      },
      colors: ['#0EDE14', '#FFA110'],
      xaxis: {
        categories: xLeftEdge,
        labels: {
          formatter(value: string) {
            return Number(value).toFixed(4);
          },
          show: true,
          rotateAlways: false,
          rotate: -45,
          minHeight: 50,
          offsetY: 5,
          style: {
            fontSize: '9',
          },
        },
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          formatter(value: string) {
            return Number(value).toFixed(4);
          },
          maxWidth: 200,
          minWidth: 0,
          style: {
            fontSize: '12',
          },
        },
      },
    },
  };
};
