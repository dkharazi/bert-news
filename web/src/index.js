import React from 'react';
import ReactDOM from 'react-dom';
import NewsTab from './components/NewsTab'
import chartsStyles from './styles/charts.module.css'
import './styles/index.css';

import { AutoSizer } from 'react-virtualized'
import { Grid, Tabs, Paper } from '@material-ui/core';
import { List, ListSubheader, ListItem, ListItemText } from '@material-ui/core';
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { ScatterPlotCanvas } from '@nivo/scatterplot';

import newsJson from './data/news.json';
import topicsJson from './data/topics.json';
import colorsJson from './data/colors.json';

const Index = () => {

  const [tab, setTab] = React.useState(0);
  const [topic, setTopic] = React.useState('Baseball');

  const handleChangeTab = (event, newTab) => { setTab(newTab); };
  const handleChangeTopic = (event, newTopic) => { setTopic(newTopic); };

  const topicButtons = topicsJson.topics.map((t, idx) => {
    const colorName = t.toLowerCase().split('.').join('').split(' ').join('-');
    return (
      <FormControlLabel key={t} value={t} control={<Radio className={`${chartsStyles[colorName]}`} />} label={t} />
    );
  });

  const top20Words = newsJson.tfidf_data[topic].map((w, idx) =>
    <ListItem key={w.word} button>
      <Grid item xs={1}>
        <ListItemText primary={idx+1} />
      </Grid>
      <Grid item xs={6}>
        <ListItemText primary={`${w.word.charAt(0).toUpperCase() + w.word.slice(1)}`} />
      </Grid>
      <Grid item xs={3} className={`${chartsStyles.tfidf}`}>
        <ListItemText primary={`${w.tfidf.toFixed(3)}`} />
      </Grid>
    </ListItem>
  );

  return (
    <Grid container className={`container`} spacing={2}>
      <Grid item xs={12}>
        <header>Media Topic Classification</header>
      </Grid>
      <Grid item xs={12}>
        <Tabs 
          value={tab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <NewsTab label="Clustering" />
          <NewsTab label="Publication" />
          <NewsTab label="Classifying" />
        </Tabs>
      </Grid>
      <Paper className={`${chartsStyles.container}`}>
        <Grid container>
          <Grid item xs={6} container direction="column">
            <Grid item className={`${chartsStyles.chart}`}>
              <AutoSizer>
                {({ height, width }) => (
                  <ScatterPlotCanvas
                    data={newsJson.topics_data}
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
                  />
                )}
              </AutoSizer>
            </Grid>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Topic</FormLabel>
                <RadioGroup aria-label="topic" name="topic" value={topic} onChange={handleChangeTopic}>
                  {topicButtons}
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <List
              className={`${chartsStyles.container}`}
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={`${chartsStyles.subheader}`}
                >
                  Top 20 Words
                </ListSubheader>
              }
            >
              <Grid item xs={12} container direction="row">
                {top20Words}
              </Grid>
            </List>
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