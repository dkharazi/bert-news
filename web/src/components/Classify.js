import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import BarChart from './BarChart';
import ArticleInput from './ArticleInput';
import layoutStyles from '../styles/layout.module.css';


const Classify = ({ error, setError, items, setItems, article, setArticle, submitArticle, submitArticle }) => {

    const API_URL = "https://api-inference.huggingface.co/models/dkhara/bert-news";

    useEffect(() => {
		const reqHeaders = {Authorization: "Bearer api_wHePfPWlFPMPAlDodggDkxUzTPDMjInefI"};
		const reqInit = {method: "POST", headers: reqHeaders, body: submittedArticle};
		if (submittedArticle != null) {
			fetch(API_URL, reqInit)
				.then(res => res.json())
				.then(
					(result) => {
						setItems(result);
					},
					(error) => {
						setError(error);
					}
				)
			}
        }, [submittedArticle]);
	
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (items == null) {
		return (
			<Grid container>
				<ArticleInput article={article} setArticle={setArticle} submitArticle={submitArticle} />
			</Grid>
		);
	} else {
        return (
            <Grid container>
				<ArticleInput article={article} setArticle={setArticle} submitArticle={submitArticle} />
				<Grid item xs={4} className={layoutStyles.topicChartContainer}>
					<BarChart data={items[0]} chartType="bar" />
				</Grid>
			</Grid>
        );
    }
}

export default Classify;