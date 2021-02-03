export interface ParameterStability {
  [name: string]: {
    nanStabilityAnalysis: {
      binWidth: number[];
      stabilityGroup: number[];
      xLeftEdge: number[];
      yBaseline: number[];
      yProduction: number[];
    };
    stabilityAnalysis: {
      binWidth: number[];
      stabilityGroup: number[];
      xLeftEdge: number[];
      yBaseline: number[];
      yProduction: number[];
    };
  };
}

export interface Stability {
  binWidth: number[];
  stabilityGroup: number[];
  xLeftEdge: number[];
  yBaseline: number[];
  yProduction: number[];
}

export type ChartType =
  | 'bar'
  | 'line'
  | 'area'
  | 'histogram'
  | 'pie'
  | 'donut'
  | 'rangeBar'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'radar'
  | 'polarArea';

export interface StabilityOptions {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    title: {
      text: string;
    };
    chart: {
      height: number;
      type: string;
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: string;
      colors: string[];
      width: number;
    };
    legend: {
      show: boolean;
      markers: {
        fillColors: string[];
      };
    };
    colors: string[];
    yaxis?: {
      tickAmount?: number;
      labels?: {
        showForNullSeries?: boolean;
        align?: string;
        trim?: boolean;
        maxWidth?: number;
        minWidth?: number;
        formatter?: (value: string) => string;
        style?: {
          fontSize?: string;
        };
      };
    };
    xaxis: {
      type?: string;
      labels: {
        show: boolean;
        rotateAlways: boolean;
        rotate: number;
        minHeight: number;
        offsetY: number;
        formatter?: (value: string) => string;
        style: {
          fontSize: string;
        };
      };
      categories: number[];
    };
  };
}
