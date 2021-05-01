import { useState } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Paper } from '@material-ui/core';
import NewsBar from './components/NewsBar';
import Topic from './components/Topic';
import Publication from './components/Publication';
import Classify from './components/Classify';
import layoutStyles from './styles/layout.module.css';
import './styles/index.css';
import sampleArticle from './data/article.js';


const Index = () => {

	// Define state variables
	const [tab, setTab] = useState(0);
	const [topic, setTopic] = useState('Baseball');
	const [error, setError] = useState(null);
	const [items, setItems] = useState(null);
	const [article, setArticle] = useState(sampleArticle);
	const [submittedArticle, submitArticle] = useState(null);

	// Define state handlers
	const handleChangeTab = (event, newTab) => { setTab(newTab); };
	const handleChangeTopic = (event, newTopic) => { setTopic(newTopic); };

	// Helper function for returning output depending on tab
	const chooseTab = () => {
		if (!tab) {
			return <Topic topic={topic} handleChangeTopic={handleChangeTopic} />;
		} else if (tab === 1) {
			return <Publication />;
		} else {
			return <Classify error={error} setError={setError} items={items} setItems={setItems} article={article} setArticle={setArticle} submittedArticle={submittedArticle} submitArticle={submitArticle} />;
		}
	}

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
					{chooseTab()}
				</Paper>
			</Grid>
		</Grid>
	);
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);