import { AutoSizer } from 'react-virtualized'
import { ScatterPlotCanvas } from '@nivo/scatterplot';
import tooltipStyles from '../styles/tooltip.module.css'
import colorsJson from '../data/colors.json';


const TopicChart = ({ topicData }) => {

    // Helper function for building tooltip
    const buildTooltip = (input) => {
        const colorName = input.node.data.cluster.toLowerCase().split('.').join('').split(' ').join('-');
        return (
            <div className={tooltipStyles.tooltip}>
                <div className={tooltipStyles.text}>
                    <div className={`${tooltipStyles.topic}`}>
                        <div className={`${tooltipStyles.block} ${tooltipStyles[colorName]}`} />
                        <div className={tooltipStyles.topicText}>{input.node.data.cluster}</div>
                    </div>
                    <div className={tooltipStyles.break} />
                    <div className={tooltipStyles.line}>Publication: {input.node.data.publication}</div>
                    <div className={tooltipStyles.break} />
                    <div className={tooltipStyles.line}>Party: {input.node.data.party}</div>
                </div>
            </div>
        );
    }

    return (
        <AutoSizer>
            {({ height, width }) => (
                <ScatterPlotCanvas
                    data={topicData}
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

export default TopicChart;