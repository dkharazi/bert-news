import tooltipStyles from '../styles/tooltip.module.css'

const Tooltip = ({ input, chartType }) => {

	// Format topic as CSS class name
	let colorName = input.node.data[chartType];
	colorName = colorName.toLowerCase();
	colorName = colorName.split('.').join('');
	colorName = colorName.split(' ').join('-');

	// Assign tooltip based on chart type
	let chartJsx;
	if (chartType === "cluster") {
		chartJsx = (
			<div className={tooltipStyles.tooltip}>
				<div className={tooltipStyles.text}>
					<div className={`${tooltipStyles.topic}`}>
						<div className={`${tooltipStyles.block} ${tooltipStyles[colorName]}`} />
						<div className={tooltipStyles.topicText}>{input.node.data[chartType]}</div>
					</div>
					<div className={tooltipStyles.break} />
					<div className={tooltipStyles.line}>Publication: {input.node.data.publication}</div>
					<div className={tooltipStyles.break} />
					<div className={tooltipStyles.line}>Party: {input.node.data.party}</div>
				</div>
			</div>
		);
	} else {
		chartJsx = (
			<div className={tooltipStyles.tooltip}>
                <div className={tooltipStyles.text}>
                    <div className={`${tooltipStyles.topic}`}>
                        <div className={`${tooltipStyles.block} ${tooltipStyles[colorName]}`} />
                        <div className={tooltipStyles.topicText}>{input.node.data[chartType]}</div>
                    </div>
                </div>
            </div>
		);
	}

	return chartJsx;
}

export default Tooltip;