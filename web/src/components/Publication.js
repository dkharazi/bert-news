import { Grid } from '@material-ui/core';
import Chart from './Chart';
import layoutStyles from '../styles/layout.module.css';

import pubJson from '../data/pub.json';
import partyJson from '../data/party.json';


const Publication = () => {
	return(
		<Grid container>
			<Grid item xs={6} className={layoutStyles.topicChartContainer}>
				<Chart data={pubJson} chartType="publication" />
			</Grid>
			<Grid item xs={6} className={layoutStyles.topicChartContainer}>
				<Chart data={partyJson} chartType="party" />
			</Grid>
		</Grid>
	);
}

export default Publication;