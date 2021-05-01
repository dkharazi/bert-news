import { AutoSizer } from 'react-virtualized';
import { BarCanvas } from '@nivo/bar';
import Tooltip from './Tooltip';
import colorsJson from '../data/colors.json';
import topicsJson from '../data/uniqueTopics.json';


const BarChart = ({ data, chartType }) => {

    // Helper function for mapping clusters with topics
    const labeledData = data.map(t => {
        return ({
            label: topicsJson.labels[t.label],
            score: t.score
        })
    });

    // Helper function for building tooltip
    const buildTooltip = (input) => {
        return <Tooltip input={input} chartType={chartType} />;
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <BarCanvas
                    data={labeledData}
                    height={500}
                    width={width}
                    layout="horizontal"
                    indexBy="label"
                    keys={["score"]}
                    enableGridY={false}
                    colors={colorsJson.scheme1}
                    colorBy="index"
                    tooltip={buildTooltip}
                />
            )}
        </AutoSizer>
    );
}

export default BarChart;