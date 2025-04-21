## Unit I – Introduction to Data Science and Big Data

### 2-Marks Questions

**1. Define Big Data.**  
Big Data refers to extremely large datasets that cannot be managed, processed, or analyzed using traditional data processing tools. It is often characterized by the 3 Vs: Volume, Velocity, and Variety.

**2. What is the role of data science in analytics?**  
Data science plays a crucial role in analytics by using scientific methods, algorithms, and systems to extract insights and knowledge from structured and unstructured data. It supports decision-making through predictive and prescriptive analytics.

**3. Mention any two core analytics tools.**  
- Microsoft Excel  
- SQL (Structured Query Language)

**4. Define Sampling Distribution.**  
A sampling distribution is the probability distribution of a given statistic based on a random sample. It represents how a statistic (like the sample mean) varies from sample to sample.

### 15-Marks Questions

**1. Explain the structure and types of web data with examples.**  
Web data is primarily unstructured or semi-structured and can be classified into:

- **Structured data**: Found in relational databases (e.g., tables on a web dashboard).  
- **Semi-structured data**: Includes HTML, JSON, or XML documents with tags.  
- **Unstructured data**: Includes text, images, audio, and video (e.g., tweets, reviews).

Examples:
- Product reviews on e-commerce websites  
- Social media posts  
- HTML content of a web page

**2. Describe the evolution of analytic scalability and its relevance to Big Data.**  
Analytic scalability evolved from handling MBs of data in the 1970s to managing PBs and EB today. It's relevant to Big Data because as data volume grows, the ability to scale infrastructure and algorithms is essential to process, analyze, and derive insights effectively.

**3. Differentiate between Core Analytics and Advanced Analytics.**  
- **Core Analytics** focuses on descriptive analysis such as historical reporting (e.g., dashboards).  
- **Advanced Analytics** includes predictive and prescriptive models using machine learning and statistical techniques.

**4. Discuss the Data Science Process in detail.**  
The Data Science Process includes:
1. **Problem Framing**: Define the business problem.  
2. **Data Collection**: Acquire data from relevant sources.  
3. **Data Cleaning**: Handle missing values, outliers, and errors.  
4. **Exploratory Data Analysis (EDA)**: Visualize and summarize data.  
5. **Model Building**: Apply machine learning/statistical models.  
6. **Interpretation**: Draw conclusions and insights.  
7. **Deployment**: Implement solutions into production.

### 16-Marks Questions

**1. Write a detailed note on the Data Science Lifecycle. Compare it with traditional analytics models.**  
The Data Science Lifecycle includes:
1. **Business Understanding**  
2. **Data Understanding**  
3. **Data Preparation**  
4. **Modeling**  
5. **Evaluation**  
6. **Deployment**

**Comparison with Traditional Analytics:**  
- Traditional analytics focuses on historical data and fixed reports.  
- Data Science is iterative, includes predictive modeling, and handles diverse data types and larger volumes.

**2. Discuss various modern data analytic tools and their importance in Big Data environments.**  
Modern tools:
- **Apache Hadoop**: Distributed storage and batch processing.  
- **Apache Spark**: In-memory computation for faster processing.  
- **Tableau / Power BI**: Visualization tools.  
- **Python & R**: Programming languages for analysis.  
- **MongoDB**: NoSQL database for semi-structured data.

**Importance**:
- Handle large-scale data efficiently  
- Enable real-time insights  
- Facilitate collaboration and automation in data pipelines

---

## Unit II – Data Analysis using R

### 2-Marks Questions

**1. Define mean and median.**  
- **Mean**: The arithmetic average of a dataset.  
- **Median**: The middle value in a sorted dataset.

**2. What is a bar plot?**  
A bar plot is a chart that represents categorical data with rectangular bars where the height or length of each bar corresponds to the value or frequency of the category.

**3. Mention two functions in R used for regression analysis.**  
- `lm()`  
- `glm()`

**4. What is the purpose of scatter plots?**  
Scatter plots are used to visualize the relationship between two continuous variables and identify correlation patterns or outliers.

### 15-Marks Questions

**1. Explain univariate and bivariate analysis with examples.**  
- **Univariate Analysis**: Analyzes one variable at a time (e.g., mean, median of age).  
- **Bivariate Analysis**: Analyzes two variables to understand relationships (e.g., age vs income).

**2. Describe correlation and regression techniques in R.**  
- **Correlation** measures the linear relationship between two variables. Use `cor()` in R.  
- **Regression** is used to model the relationship. Use `lm()` for linear and `glm()` for logistic regression.

**3. Illustrate multivariate analysis using graphical methods.**  
Use R packages like `ggplot2` or `lattice` to create:
- Scatterplot matrix  
- 3D plots  
- Pairwise correlation heatmaps

### 16-Marks Questions

**1. Discuss the various descriptive statistics methods in R with examples and code.**  
Descriptive statistics help summarize data features. Key methods include:
- **Mean**: `mean(data$var)`
- **Median**: `median(data$var)`
- **Mode** (custom function):
```r
getmode <- function(v) {
  uniqv <- unique(v)
  uniqv[which.max(tabulate(match(v, uniqv)))]
}
getmode(data$var)
```
- **Variance**: `var(data$var)`
- **Standard Deviation**: `sd(data$var)`
- **Summary**: `summary(data)`
These functions help understand data distribution, spread, and central tendency.

**2. Explain linear and logistic regression with syntax and real-life examples.**  
- **Linear Regression**: Used to predict continuous values. Example: predicting house prices.
```r
model <- lm(price ~ size + location, data=house_data)
summary(model)
```
- **Logistic Regression**: Used for binary outcomes. Example: predicting if a customer will buy (yes/no).
```r
model <- glm(purchase ~ age + income, data=customer_data, family=binomial)
summary(model)
```
Both models help in understanding relationships and forecasting future trends.

---

## Unit III – Data Modeling

### 2-Marks Questions

**1. What is the CAP theorem?**  
CAP theorem states that in a distributed database, it is impossible to simultaneously provide all three guarantees: Consistency, Availability, and Partition tolerance. A system can only guarantee two out of the three.

**2. Mention two features of NoSQL.**  
- Schema-less data model  
- Ability to handle large volumes of unstructured data

**3. What is Principal Component Analysis?**  
Principal Component Analysis (PCA) is a dimensionality reduction technique used to emphasize variation and capture strong patterns in a dataset. It transforms data into a set of orthogonal components.

**4. List any two CRUD operations.**  
- Create  
- Read

### 15-Marks Questions

**1. Describe Support Vector Machines (SVM) and their application in data modeling.**  
Support Vector Machines (SVM) are supervised learning models used for classification and regression tasks. They work by finding the hyperplane that best separates classes in the feature space. Applications include image recognition, bioinformatics, and text classification.

**2. Explain MongoDB architecture and data types.**  
MongoDB uses a flexible, document-oriented NoSQL structure. Key components:
- **Documents**: JSON-like format
- **Collections**: Groups of documents
- **Databases**: Contain collections
- **Data Types**: String, Integer, Boolean, Arrays, Date, ObjectId, etc.
MongoDB offers scalability, high performance, and availability.

**3. Differentiate between RDBMS and NoSQL databases.**  
- **RDBMS** uses fixed schema and tables, supports ACID transactions.
- **NoSQL** supports flexible schema, distributed architecture, and is optimized for unstructured data.
Examples: MySQL (RDBMS), MongoDB (NoSQL)

### 16-Marks Questions

**1. Explain Bayesian modeling with real-life use cases in data analytics.**  
Bayesian modeling uses Bayes' Theorem to update probabilities as more data becomes available. It's useful for:
- Spam detection
- Medical diagnosis
- Risk assessment
It combines prior knowledge and new evidence to make predictions or classifications.

**2. Discuss data modeling techniques in HBase and their benefits.**  
HBase is a column-family NoSQL database built on top of HDFS. Modeling techniques include:
- Use of row keys for quick lookup
- Column families for grouping related columns
- Time-based versions for historical data
Benefits:
- High scalability
- Efficient for sparse data
- Real-time read/write access

---

## Unit IV – Data Analytical Frameworks

### 2-Marks Questions

**1. What is HDFS?**  
HDFS (Hadoop Distributed File System) is the primary storage system of Hadoop, designed for storing large files across multiple machines.

**2. Name any two components of Hadoop.**  
- HDFS  
- MapReduce

**3. Define MapReduce.**  
MapReduce is a programming model for processing and generating large datasets with a parallel, distributed algorithm on a cluster.

**4. What is Apache Sqoop?**  
Apache Sqoop is a tool for transferring data between Hadoop and relational databases.

### 15-Marks Questions

**1. Compare RDBMS and Hadoop in terms of data storage and processing.**  
- **RDBMS**: Stores structured data, uses SQL, suitable for transactional systems.
- **Hadoop**: Stores all types of data, scalable, suitable for big data analytics.
RDBMS handles small to medium datasets, while Hadoop excels in distributed storage and processing of huge datasets.

**2. Explain the architecture of HDFS with diagrams.**  
HDFS architecture includes:
- **NameNode**: Manages metadata and file system namespace.
- **DataNodes**: Store actual data blocks.
- **Block**: Files are split into blocks and distributed.
It offers fault-tolerance via data replication.

**3. Describe the MapReduce programming model with an example.**  
MapReduce has two phases:
- **Map**: Processes input and produces key-value pairs.
- **Reduce**: Aggregates and summarizes the intermediate results.
Example: Word count program
```python
Map: (word, 1)
Reduce: (word, total count)
```

### 16-Marks Questions

**1. Write detailed notes on Hadoop ecosystem and its components.**  
The Hadoop ecosystem includes:
- **HDFS**: Distributed storage
- **MapReduce**: Processing engine
- **YARN**: Resource manager
- **Hive**: SQL-like query language
- **Pig**: Scripting language
- **HBase**: NoSQL database
- **Sqoop/Flume**: Data ingestion tools
- **Zookeeper**: Coordination service
- **Oozie**: Workflow scheduler
These tools collectively handle big data storage, processing, analysis, and management.

**2. Explain HBase and its role in Big Data Analytics.**  
HBase is a distributed, column-oriented NoSQL database. It supports:
- Random, real-time read/write access
- Billions of rows and millions of columns
- Integration with Hadoop and MapReduce
Role: Ideal for sparse datasets, provides fast lookup, and is used in time-series analytics, recommendation engines, etc.

---

## Unit V – Stream Analytics

### 2-Marks Questions

**1. What is stream computing?**  
Stream computing is the real-time processing of data in motion, allowing for immediate analysis and insights.

**2. Define a decaying window.**  
A decaying window assigns more weight to recent data while reducing the impact of older data in stream processing.

**3. What is stream filtering?**  
Stream filtering is the process of selecting relevant data from a continuous stream based on specific criteria.

**4. Mention any two challenges in stream data processing.**  
- Handling data velocity  
- Managing incomplete or noisy data

### 15-Marks Questions

**1. Explain stream data models and architecture.**  
Stream data models process data tuples in real-time. Architecture includes:
- **Data sources**: IoT devices, logs, sensors
- **Stream processing engine**: Apache Kafka, Apache Storm
- **Analytics modules**: Apply filters, transformations
- **Storage**: Temporary or long-term data sinks

**2. Describe the concept of sliding window and its applications.**  
A sliding window maintains a subset of data that moves over time. It helps:
- Monitor trends in real-time
- Detect anomalies
Applications include fraud detection and stock market analysis.

**3. Write about filtering and counting techniques in stream data.**  
Techniques include:
- **Bloom filters**: For approximate set membership
- **Counting sketches**: Estimate frequency counts
- **Sampling methods**: Random or reservoir sampling

### 16-Marks Questions

**1. Discuss techniques for analyzing and estimating stream data moments.**  
Techniques:
- **Count-Min Sketch**: Space-efficient way to estimate frequency
- **HyperLogLog**: Estimates cardinality
- **Moment estimation**: Mean, variance, etc., using running calculations
Useful in memory-constrained environments for approximating data statistics.

**2. Explain stream analytics with architecture, data models, and real-world applications.**  
Stream analytics involves:
- **Architecture**: Source → Ingestion → Processing → Sink
- **Models**: Event-time, processing-time models
Applications:
- Fraud detection
- Network monitoring
- Real-time recommendation systems
Tools: Apache Flink, Spark Streaming, Amazon Kinesis

---

