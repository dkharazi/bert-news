import { Grid } from '@material-ui/core';
import ScatterChart from './ScatterChart';
import layoutStyles from '../styles/layout.module.css';

import pubJson from '../data/pub.json';
import partyJson from '../data/party.json';


const Publication = () => {
	return(
		<Grid container>
			<Grid item xs={6} className={layoutStyles.topicChartContainer}>
				<ScatterChart data={pubJson} chartType="publication" />
			</Grid>
			<Grid item xs={6} className={layoutStyles.topicChartContainer}>
				<ScatterChart data={partyJson} chartType="party" />
			</Grid>
		</Grid>
	);
}

export default Publication;