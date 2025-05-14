# 📘 Unit I – Data Warehouse

## ✅ 2 Marks

- ### What is a data warehouse?  
   A data warehouse is a centralized repository for storing large volumes of data from multiple sources, optimized for analysis and reporting.

- ### Define OLAP.  
   OLAP (Online Analytical Processing) allows users to analyze multidimensional data interactively from multiple perspectives.

## ✅ 13 Marks

- ### Explain the architecture of a data warehouse.  
   A typical data warehouse architecture includes:
  - **Data Sources** (operational databases, external files),
  - **ETL (Extract, Transform, Load)** processes,
  - **Data Warehouse Storage** (staging, data marts),
  - **OLAP Servers** (ROLAP/MOLAP),
  - **Front-End Tools** for querying and reporting.

- ### Describe OLAP operations with examples.  
   OLAP operations include:
  - **Roll-up:** Summarizing data (e.g., daily → monthly).
  - **Drill-down:** Viewing detailed data (e.g., year → quarter).
  - **Slice:** Extracting a single layer from a cube.
  - **Dice:** Selecting two or more dimensions.
  - **Pivot:** Rotating data to view different perspectives.

## ✅ 15 Marks

- ### Compare Operational DBMS and Data Warehouses.  
    

  | Feature     | Operational DBMS       | Data Warehouse        |
  |------------|------------------------|------------------------|
  | Purpose     | Transaction processing | Analytical processing  |
  | Data Structure | Normalized         | Denormalized           |
  | Query Type  | Simple read/write     | Complex queries        |
  | Updates     | Frequent              | Infrequent             |
  | Users       | Clerical              | Decision Makers        |


# 📘 Unit II – Data Mining & Preprocessing

## ✅ 2 Marks

- ### What is KDD?  
   Knowledge Discovery in Databases (KDD) is the overall process of discovering useful knowledge from data.

- ### Define data cleaning.  
   Data cleaning is the process of detecting and correcting (or removing) inaccurate records from a dataset.

## ✅ 13 Marks

- ### Explain the steps involved in the KDD process.  
   The steps include:
  - Selection
  - Preprocessing
  - Transformation
  - Data Mining
  - Interpretation/Evaluation

- ### Describe the different techniques of data preprocessing.  
   Techniques include:
  - **Data Cleaning**
  - **Data Integration**
  - **Data Transformation**
  - **Data Reduction**
  - **Data Discretization**
  - **Concept Hierarchy Generation**

## ✅ 15 Marks

- ### Why is data preprocessing important? Explain all major steps with examples.  
   It improves data quality and mining accuracy. Each step ensures the dataset is accurate, integrated, and optimized for analysis.

# 📘 Unit III – Association Rule Mining

## ✅ 2 Marks

- ### What is an association rule?  
   An association rule is an implication expression of the form X ⇒ Y, meaning when X occurs, Y is likely to occur.

- ### What is support and confidence?  
   Support is the frequency of itemset occurrence. Confidence measures the reliability of the inference made by a rule.

## ✅ 13 Marks

- ### Explain the Apriori algorithm with example.  
   Apriori uses level-wise search to find frequent itemsets. It uses a "bottom-up" approach with candidate generation and pruning.

- ### What are constraint-based association rules?  
   These are rules mined based on user-specified constraints like item constraints, rule constraints, or interestingness constraints.

## ✅ 15 Marks

- ### Compare methods of mining frequent itemsets with and without candidate generation.  
    
  - **With candidate generation:** Apriori uses iterative approaches and candidate pruning.
  - **Without candidate generation:** FP-Growth avoids candidate generation using tree structures.

# 📘 Unit IV – Classification & Prediction

## ✅ 2 Marks

- ### Define classification.  
   Classification is the process of identifying which category an observation belongs to based on input features.

- ### What is a lazy learner?  
   A lazy learner delays the generalization process until a query is made (e.g., k-NN).

## ✅ 13 Marks

- ### Describe decision tree classification with an example.  
   Decision trees use tree-like structures to classify data based on feature splits using algorithms like ID3 or C4.5.

- ### Discuss the differences between classification and prediction.  
    
  - **Classification** predicts categorical labels.  
  - **Prediction** forecasts continuous values.

## ✅ 15 Marks

- ### Explain different classification techniques and how accuracy is measured.  
   Includes:
  - Decision Trees
  - Naive Bayes
  - SVM
  - Backpropagation
  - Rule-Based, Ensemble Methods  
  Accuracy is measured using metrics like confusion matrix, precision, recall, and F1 score.

# 📘 Unit V – Clustering

## ✅ 2 Marks

- ### What is clustering?  
   Clustering is the process of grouping data points into clusters based on similarity.

- ### What is an outlier?  
   An outlier is a data point that significantly differs from other observations.

## ✅ 13 Marks

- ### Explain partitioning and hierarchical clustering methods.  
    
  - **Partitioning methods (e.g., k-means):** Divide data into k clusters.
  - **Hierarchical methods (e.g., agglomerative):** Create a tree of clusters.

- ### Write a note on density-based and grid-based clustering.  
    
  - **Density-based (e.g., DBSCAN):** Finds arbitrarily shaped clusters.
  - **Grid-based (e.g., STING):** Quantizes data space into a grid.

## ✅ 15 Marks

- ### Discuss clustering methods in high-dimensional data with examples.  
   Methods include:
  - Subspace clustering
  - CLIQUE
  - Feature selection or transformation before clustering  
  Techniques aim to address the "curse of dimensionality."
