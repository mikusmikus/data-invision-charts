export interface Config {
  config: object;
  gloabals: object;
  seriesIndex: number;
  dataPointIndex: number;
}

export interface Metrics {
  importance: number[];
  names: string[];
}

export interface ImportanceOptions {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    title: {
      text: string;
    };
    colors: string[];
    chart: {
      type: string;
      height?: number;
      events: {
        click: (event: MouseEvent, chartContext: object, config: Config) => void;
      };
    };
    plotOptions: {
      bar: {
        horizontal: boolean;
        distributed: boolean;
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    legend: {
      show: boolean;
    };
    xaxis: {
      tickAmount: number;
      categories: string[];
      labels: {
        show: boolean;
      };
      axisBorder: {
        show: boolean;
      };
    };
    yaxis: {
      labels: {
        showForNullSeries: boolean;
        align: string;
        trim: boolean;
        maxWidth: number;
        minWidth: number;
        style: {
          fontSize: string;
        };
      };
    };
    grid: {
      xaxis: {
        lines: {
          show: boolean;
        };
      };
      yaxis: {
        lines: {
          show: boolean;
        };
      };
    };
    responsive: {
      breakpoint: number;
      options: {
        yaxis: {
          labels: {
            maxWidth: number;
            style: {
              fontSize: string;
            };
          };
        };
        legend?: {
          show?: boolean;
        };
        xaxis?: {
          labels?: {
            maxWidth?: number;
          };
        };
      };
    }[];
  };
}
