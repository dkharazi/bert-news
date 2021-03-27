# bert-news

1. Download [All the News data](https://www.kaggle.com/snapcrack/all-the-news) from Kaggle
    - Consists of news articles for a given publications
2. Serialize data into parquet files
3. Assign a political party to each news source
    - The political party is based on the average audience placement
    - Average audience placement based on [this recent Pew survey](https://www.journalism.org/2020/01/24/americans-are-divided-by-party-in-the-sources-they-turn-to-for-political-news/)
4. Import BERT for classifying publication
