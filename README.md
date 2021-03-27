# bert-news

1. Download [All the News data](https://www.kaggle.com/snapcrack/all-the-news) from Kaggle
    - Consists of news articles for a given publications
2. Serialize data into parquet files
3. Assign a political party to each news source
    - The political party is based on the average audience placement
    - Average audience placement based on [this recent Pew survey](https://www.journalism.org/2020/01/24/americans-are-divided-by-party-in-the-sources-they-turn-to-for-political-news/)
4. Import BERT for classifying publication


Clustering on BERT Word Embeddings
- [Code Example of K-Means Clustering on Embeddings](https://www.sbert.net/examples/applications/clustering/README.html#topic-modeling)
- [How to Get Sentence Embeddings using BERT](https://datascience.stackexchange.com/a/65165/93566)

Topic Modeling References
- [Example of Topic Modeling with BERT](https://towardsdatascience.com/topic-modeling-with-bert-779f7db187e6)
- [Topic Modeling using S-BERT](https://www.sbert.net/examples/applications/clustering/README.html#topic-modeling)
