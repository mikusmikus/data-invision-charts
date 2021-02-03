import { ParameterStability } from '../types/StabilityOptions';

export const handleColors = (names: string[], stability: ParameterStability) => {
  const stabilityMaxValues: number[] = names.map((name: string) => {
    return stabilityMaxValue(stability, name);
  });
  const colors: string[] = stabilityMaxValues.map((value) => {
    return barColor(value);
  });
  return colors;
};

const stabilityMaxValue = (stabilityData: ParameterStability, name: string): number => {
  const nanStabilityValue = stabilityData[name].nanStabilityAnalysis.stabilityGroup[0];
  const stabilityValue = stabilityData[name].stabilityAnalysis.stabilityGroup[0];
  return Math.max(nanStabilityValue, stabilityValue);
};

const barColor = (value: number): string => {
  if (value === 1) {
    return '#0EDE14';
  }
  if (value === 2) {
    return '#FFA110';
  }
  return '#FC0303';
};
