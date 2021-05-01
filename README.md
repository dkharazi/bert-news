# bert-news
The purpose of this project is to classify articles by assigning them a predicted topic. The data used for this project comes from [a Kaggle data set](https://www.kaggle.com/snapcrack/all-the-news), which includes data scraped from various publications, such as New York Times, Breitbart, CNN, Business Insider, the Atlantic, Fox News, Talking Points Memo, Buzzfeed News, National Review, New York Post, the Guardian, NPR, Reuters, Vox, and the Washington Post. Specifically, the data was scraped using the [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) library in Python.

The articles weren't scraped from the entire site. Instead, only the most prominent articles were scraped from the sites of each publication between the years of 2015-2017. In total, there are about 150,000 articles included in further model building.

Then, the articles are encoded into tokens and transformed into hundreds of word embeddings. Specifically, the tokenizer and model derives from [the DistilBERT model](https://huggingface.co/transformers/model_doc/distilbert.html), which is a small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% fewer parameters than `bert-base-uncased`, but runs 60% faster while preserving over 95% of BERT’s performances as measured on the GLUE language understanding benchmark.

Once the word embeddings are generated, the hundreds of embeddings are reduced to 5 features using [UMAP for dimensionality reduction](https://umap-learn.readthedocs.io/en/latest/). In particular, UMAP is a dimension reduction technique that can be useful for visualisation and non-linear dimension reduction, similar to t-SNE. However, UMAP can be used as an effective preprocessing step to boost the performance of density-based clustering (compared to other density-based clustering algorithms).

Next, the reduced dimensions are clustered using density-based clustering. Specifically, [HDBSCAN](https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html) is used as the density-based clustering method. While DBSCAN needs a minimum cluster size and a distance threshold `epsilon` as user-defined input parameters, HDBSCAN is basically a DBSCAN implementation for varying epsilon values and therefore only needs the minimum cluster size as single input parameter. In the end, the most ideal number of clusters for this use-case is 25 distinct clusters. The number of clusters was evaluated based on number of unclassified clusters and the number of distinct clusters created.

Personally, I wanted to find an ideal number of clusters producing specific enough clusters that were *interesting*, but broad enough clusters to still represent a generalized topic. Personally, I found that 20-30 clusters was the *sweet spot*. Also, I used GridSearch to find the hyper-parameters between the UMAP dimensionality reduction method and the HDBSCAN density-based to help find the *sweet spot*.

After tokenizing and clustering each article, I experimented with stemming, removing stop words, and removing punctuation marks in the articles before tokenization. Stemming didn't seem to make any difference in reducing the number of unclassified articles. Removing stop words and punctuation marks seemed to make a difference.

After assigning a topic to its associated article, a separate DistilBERT model is used for classifying articles and assigning them to a cluster or topic. Specifically, articles are encoded into tokens and classified by assigning them to a cluster. Additionally, I experimented with standardizing each tokenized, dimensionality-reduced article. This seemed to reduce the number of unclassified articles.

I also used SMOTE for oversampling and undersampling imbalanced classes. A better way may have been to manually go through each of the unclassified articles and assign them to a cluster myself. However, it would have taken a lot of time to do this, so I just synthetically did this using SMOTE. [Here's a resource for other possible sampling techniques](https://towardsdatascience.com/how-i-handled-imbalanced-text-data-ba9b757ab1d8). The evaluated model with SMOTEN data and the model without SMOTEN data both had about 90% accuracy. So, I decided to just keep the model with SMOTEN data.

The overall analysis can be broken down into the following stages:
1. Download the news articles from Kaggle as CSV files
2. Serialize the articles into Parquet files
3. Assign a political party to each news source
    - The political party is based on the average audience placement of each publication
    - Average audience placement is based on [this recent Pew survey](https://www.journalism.org/2020/01/24/americans-are-divided-by-party-in-the-sources-they-turn-to-for-political-news/)
4. Convert articles to word embeddings using DistilBERT
5. Reduce the dimensions of the word embeddings to 5 features using UMAP
6. Perform density-based clustering on reduced dimensions using HDBSCAN
    - Each cluster represents a topic
    - Assign each article to its cluster
7. Classify articles by assigning them to a cluster (or topic) using DistilBERT

Clustering on BERT Word Embeddings
- [Code Example of K-Means Clustering on Embeddings](https://www.sbert.net/examples/applications/clustering/README.html#topic-modeling)
- [How to Get Sentence Embeddings using BERT](https://datascience.stackexchange.com/a/65165/93566)
- [Unsupervised Clustering on Media Data](https://www.kaggle.com/miguelniblock/predict-the-author-unsupervised-nlp-lsa-and-bow)
- [Kaggle Analysis for Dimensionality Reduction using uMAP and tSNE](https://www.kaggle.com/vinayshanbhag/dimensionality-reduction-tsne-umap)
- [Example of using kMeans with SBERT](https://github.com/UKPLab/sentence-transformers/blob/master/examples/applications/clustering/kmeans.py)

Topic Modeling References
- [Example of Topic Modeling with BERT](https://towardsdatascience.com/topic-modeling-with-bert-779f7db187e6)
- [Topic Modeling using S-BERT](https://www.sbert.net/examples/applications/clustering/README.html#topic-modeling)
