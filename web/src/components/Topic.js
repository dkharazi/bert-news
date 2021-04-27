import { Grid } from '@material-ui/core';
import Chart from './Chart';
import Legend from './Legend';
import Words from './Words';
import layoutStyles from '../styles/layout.module.css';
import topicsJson from '../data/topics.json';


const Topic = ({ topic, handleChangeTopic }) => {
	return(
		<Grid container>
			<Grid item xs={6} container direction="column">
				<Grid item className={layoutStyles.topicChartContainer}>
					<Chart data={topicsJson} chartType="cluster" />
				</Grid>
				<Grid item>
					<Legend
						topic={topic}
						handleChangeTopic={handleChangeTopic}
					/>
				</Grid>
			</Grid>
			<Grid item xs={6}>
				<Words topic={topic} />
			</Grid>
		</Grid>
	);
}

export default Topic;