import { Grid, TextField } from '@material-ui/core';
import Chart from './Chart';
import layoutStyles from '../styles/layout.module.css';


const Classify = () => {
	return(
		<Grid container>
			<Grid item xs={8}>
                <TextField
                    id="outlined-multiline-static"
                    label="Custom Article"
                    multiline
                    rows={24}
                    fullWidth
                    variant="outlined"
                />
			</Grid>
			<Grid item xs={4} className={layoutStyles.topicChartContainer}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
			</Grid>
		</Grid>
	);
}

export default Classify;