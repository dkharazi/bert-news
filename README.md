# bert-news

### Notes
- Evaluated clusters based on number of unclassified clusters and number of clusters created
	- Personally, wanted to find a number of clusters producing specific enough clusters that were interesting, but broad enough clusters to still represent a generalized topic
	- Personally, found that 20-30 clusters was the *sweet spot*
	- Used GridSearch to find the hyper-parameters between the UMAP dimensionality reduction method and the HDBSCAN density-based clustering method that gave me this *sweet spot*, while still clustering enough articles 
- Experimented with stemming, removing stop words, and removing punctuation marks in the articles before tokenization
	- Stemming didn't seem to make any difference in reducing the number of unclassified articles
	- Removing stop words and punctuation marks seemed to make a difference
- Experimented with standardizing tokenized, dimensionality-reduced articles
	- This seemed to reduce the number of unclassified articles
- Used SMOTE for oversampling and undersampling of imbalanced classes
	- A better way may have been to manually go through each of the unclassified articles and assign them to a cluster myself
	- However, it would have taken a lot of time to do this, so I justed synthetically did this using SMOTE
	- [Here's a resource for other possible sampling techniques](https://towardsdatascience.com/how-i-handled-imbalanced-text-data-ba9b757ab1d8)
- Evaluated model with SMOTEN data and model without SMOTEN data
	- Both had about 90% accuracy
	- So, kept model with SMOTEN data

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
- [Unsupervised Clustering on Media Data](https://www.kaggle.com/miguelniblock/predict-the-author-unsupervised-nlp-lsa-and-bow)
- [Kaggle Analysis for Dimensionality Reduction using uMAP and tSNE](https://www.kaggle.com/vinayshanbhag/dimensionality-reduction-tsne-umap)
- [Example of using kMeans with SBERT](https://github.com/UKPLab/sentence-transformers/blob/master/examples/applications/clustering/kmeans.py)

Topic Modeling References
- [Example of Topic Modeling with BERT](https://towardsdatascience.com/topic-modeling-with-bert-779f7db187e6)
- [Topic Modeling using S-BERT](https://www.sbert.net/examples/applications/clustering/README.html#topic-modeling)
