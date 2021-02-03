import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { importanceOptions } from './data-options/importance-options';
import feature_importance from './data/feature_importance.json';
import feature_stability from './data/feature_stability.json';
import { ImportanceOptions, Metrics } from './types/ImportanceOptions';
import StabilityChart from './components/stability-chart';
import { ParameterStability, Stability } from './types/StabilityOptions';
import { handleColors } from './helper-functions/bar-colors';

const { names, importance }: Metrics = feature_importance.data.featureImportance.metrics;
const stability: ParameterStability =
  feature_stability.data.productionModelMetrics.parameterStability;

const App = () => {
  const [importanceData, setImportanceData] = useState<ImportanceOptions>();
  const [stabilityChart, setStabilityChart] = useState<Stability>();
  const [nanStabilityChart, setNanStabilityChart] = useState<Stability>();

  useEffect(() => {
    setImportanceData(
      importanceOptions(
        importance,
        names,
        'Feature importance',
        handleColors(names, stability),
        onFeatureClick
      )
    );
  }, []);

  const onFeatureClick = (featureIndex: number) => {
    const clickedFeature = names[featureIndex];
    if (clickedFeature) {
      setStabilityChart(stability[clickedFeature].stabilityAnalysis);
      setNanStabilityChart(stability[clickedFeature].nanStabilityAnalysis);
    }
  };

  return (
    <div>
      <div className="container container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            {importanceData && (
              <Chart
                options={importanceData.options}
                series={importanceData.series}
                type="bar"
                height="800"
              />
            )}
          </div>
        </div>
        {stabilityChart && <StabilityChart stabilityData={stabilityChart} height={600} type='line' title='Stability' />}
        {nanStabilityChart && <StabilityChart stabilityData={nanStabilityChart} height={400} width='60%' title='Non Stability' />}
      </div>
    </div>
  );
};

export default App;
