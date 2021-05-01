import { AutoSizer } from 'react-virtualized'
import { ScatterPlotCanvas } from '@nivo/scatterplot';
import Tooltip from './Tooltip';
import colorsJson from '../data/colors.json';


const ScatterChart = ({ data, chartType }) => {

    // Helper function for building tooltip
    const buildTooltip = (input) => {
        return <Tooltip input={input} chartType={chartType} />;
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <ScatterPlotCanvas
                    data={data}
                    height={500}
                    width={width}
                    xScale={{ type: 'linear', min: 4, max: 16 }}
                    yScale={{ type: 'linear', min: -5, max: 7 }}
                    enableGridX={false}
                    enableGridY={false}
                    axisLeft={null}
                    axisBottom={null}
                    colors={colorsJson["scheme1"]}
                    isInteractive={true}
                    tooltip={buildTooltip}
                />
            )}
        </AutoSizer>
    );
}

export default ScatterChart;