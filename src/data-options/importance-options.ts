import { Config, ImportanceOptions } from '../types/ImportanceOptions';

export const importanceOptions = (
  seriesData: number[],
  namesData: string[],
  title: string,
  colors: string[],
  onFeatureClick: (index: number) => void
): ImportanceOptions => {
  return {
    series: [
      {
        name: 'importance',
        data: seriesData,
      },
    ],
    options: {
      title: {
        text: title,
      },
      colors,
      chart: {
        type: 'bar',
        events: {
          click: (event: MouseEvent, chartContext: object, config: Config) => {
            onFeatureClick(config.dataPointIndex);
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      yaxis: {
        labels: {
          showForNullSeries: false,
          align: 'right',
          trim: true,
          maxWidth: 900,
          minWidth: 0,
          style: {
            fontSize: '12',
          },
        },
      },
      xaxis: {
        tickAmount: 2,
        categories: namesData,
        labels: {
          show: true,
        },
        axisBorder: {
          show: false,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      responsive: [
        {
          breakpoint: 1260,
          options: {
            yaxis: {
              labels: {
                maxWidth: 800,
                style: {
                  fontSize: '11',
                },
              },
            },
            xaxis: {
              labels: {
                maxWidth: 200,
              },
            },
          },
        },
        {
          breakpoint: 1040,
          options: {
            yaxis: {
              labels: {
                maxWidth: 600,
                style: {
                  fontSize: '10',
                },
              },
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            yaxis: {
              labels: {
                maxWidth: 400,
                style: {
                  fontSize: '10',
                },
              },
            },
          },
        },
        {
          breakpoint: 700,
          options: {
            yaxis: {
              labels: {
                maxWidth: 400,
                style: {
                  fontSize: '9',
                },
              },
            },
          },
        },
        {
          breakpoint: 600,
          options: {
            yaxis: {
              labels: {
                maxWidth: 300,
                style: {
                  fontSize: '9',
                },
              },
            },
          },
        },
        {
          breakpoint: 500,
          options: {
            yaxis: {
              labels: {
                maxWidth: 200,
                style: {
                  fontSize: '9',
                },
              },
            },
          },
        },
      ],
    },
  };
};
