import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Paper } from '@material-ui/core';

import NewsBar from './components/NewsBar';
import Topic from './components/Topic';
import Publication from './components/Publication';

import layoutStyles from './styles/layout.module.css';
import './styles/index.css';


const Index = () => {

	// Define state variables
	const [tab, setTab] = React.useState(0);
	const [topic, setTopic] = React.useState('Baseball');
	console.log(tab);

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
			<Grid item xs={12}>
				<Paper className={layoutStyles.topicContainer}>
					{!tab ? <Topic topic={topic} handleChangeTopic={handleChangeTopic} /> : <Publication />}
				</Paper>
			</Grid>
		</Grid>
	);
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);