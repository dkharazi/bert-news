import { Tabs } from '@material-ui/core';
import NewsTab from './NewsTab'


const NewsBar = ({ labels, tab, handleChangeTab }) => {
    return (
        <Tabs 
          value={tab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <NewsTab label={labels[0]} />
          <NewsTab label={labels[1]} />
          <NewsTab label={labels[2]} />
        </Tabs>
    );
}

export default NewsBar;