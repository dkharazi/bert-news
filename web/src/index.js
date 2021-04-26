import React from 'react';
import ReactDOM from 'react-dom';

import NewsBar from './components/NewsBar'
import TopicChart from './components/TopicChart';
import TopicLegend from './components/TopicLegend';
import TopicWords from './components/TopicWords';

import { Grid, Paper } from '@material-ui/core';
import layoutStyles from './styles/layout.module.css'
import './styles/index.css';

import newsJson from './data/news.json';


const Index = () => {

	// Define state variables
	const [tab, setTab] = React.useState(0);
	const [topic, setTopic] = React.useState('Baseball');

	// Define state handlers
	const handleChangeTab = (event, newTab) => { setTab(newTab); };
	const handleChangeTopic = (event, newTopic) => { setTopic(newTopic); };

	return (
		<Grid container className={layoutStyles.appContainer} spacing={2}>
			<Grid item xs={12}>
				<header>Media Topic Classification</header>
			</Grid>
			<Grid item xs={12}>
				<NewsBar
					labels={["Cluster", "Publication", "Classifying"]}
					tab={tab}
					handleChangeTab={handleChangeTab}
				/>
			</Grid>
			<Paper className={layoutStyles.topicContainer}>
				<Grid container>
					<Grid item xs={6} container direction="column">
						<Grid item className={layoutStyles.topicChartContainer}>
							<TopicChart topicData={newsJson.topics_data} />
						</Grid>
						<Grid item>
							<TopicLegend
								topic={topic}
								handleChangeTopic={handleChangeTopic}
							/>
						</Grid>
					</Grid>
					<Grid item xs={6}>
						<TopicWords
							tfidfData={newsJson.tfidf_data[topic]}
						/>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
	);
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);