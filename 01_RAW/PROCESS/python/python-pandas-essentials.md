---
id: 5f3d4344-934c-47bc-ad38-a15d658efeb9
title: Python Pandas Essentials
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: []
tags: [implementation]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: []
schema_version: 4
---

Pandas is the undisputed data manipulation workhorse for Machine Learning. Before you can feed data into a neural network or a random forest, you have to load it, clean it, reshape it, and extract features from it. If NumPy is the foundation of numerical computing in Python, Pandas is the scaffolding that makes working with messy, real-world tabular data bearable. Mastering Pandas is non-negotiable for cracking that ML engineering internship—every single project you build will start with `import pandas as pd`. Let's dive in.

## 1. Series & DataFrame Creation

A `Series` is a 1D labeled array (like a column in Excel), and a `DataFrame` is a 2D labeled data structure (like an entire Excel sheet). 

> 🤖 **ML Connection**: You'll constantly convert raw dictionaries (from JSON API responses) or CSVs (from Kaggle) into DataFrames. 

```python
import pandas as pd
import numpy as np

# --- 1. Creating a Series ---
# From a list
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s)
# Output:
# a    10
# b    20
# c    30
# dtype: int64

# --- 2. Creating a DataFrame ---
# From a dictionary of lists (common)
data = {
    'age': [22, 25, 24, np.nan],
    'income': [50000, 60000, 55000, 80000],
    'city': ['Bangalore', 'Mumbai', 'Pune', 'Bangalore']
}
df = pd.DataFrame(data)

# From a list of dictionaries (often from JSON APIs)
list_of_dicts = [{'A': 1, 'B': 2}, {'A': 3, 'B': 4, 'C': 5}]
df_from_list = pd.DataFrame(list_of_dicts)
# Output will have NaN for missing 'C' in the first dict.

# --- 3. Reading from Files ---
# In practice, you'll usually read from files.
# df_csv = pd.read_csv('dataset.csv')
# df_json = pd.read_json('data.json')
# df_excel = pd.read_excel('data.xlsx', sheet_name='Sheet1')
```

## 2. Indexing & Selection

Retrieving specific rows, columns, or cells. This is crucial when separating your features (`X`) from your target variable (`y`).

> 🎯 **Interview Tip**: Know the difference between `loc` (label-based) and `iloc` (integer position-based). Interviewers love asking why your index is messed up after filtering.

```python
# Create a sample DataFrame
df = pd.DataFrame({
    'name': ['Alice', 'Bob', 'Charlie', 'David'],
    'score': [85, 92, 78, 90],
    'passed': [True, True, False, True]
}, index=['row1', 'row2', 'row3', 'row4'])

# --- loc (Label-based indexing) ---
print(df.loc['row2', 'score'])  
# Output: 92

# --- iloc (Position-based indexing) ---
print(df.iloc[1, 1])  
# Output: 92

# --- Boolean Indexing (Filtering) ---
# Find all students who scored > 80
high_scorers = df[df['score'] > 80]

# Combining conditions (Use & for AND, | for OR, ~ for NOT. MUST use parentheses!)
passed_and_high = df[(df['score'] > 80) & (df['passed'] == True)]

# --- query() for readable filtering ---
# Especially useful for complex logical conditions
query_result = df.query('score > 80 and passed == True')

# --- at and iat (Fast scalar access) ---
# Use these when you want exactly ONE cell. It's faster than loc/iloc.
val = df.at['row1', 'score']
val_idx = df.iat[0, 1]
```

## 3. Data Inspection

Before doing any ML, you must look at your data to understand its distribution and structure.

```python
df = pd.DataFrame({'A': range(100), 'B': np.random.randn(100), 'C': ['cat', 'dog'] * 50})

# View top/bottom rows
print(df.head())   # First 5 rows
print(df.tail(3))  # Last 3 rows

# Quick metadata
df.info()          
# Output includes: non-null counts, memory usage, dtypes. Vital for finding missing data.

# Summary statistics for numerical columns
print(df.describe()) 
# Outputs count, mean, std, min, 25%, 50%, 75%, max.

# Shape (rows, columns)
print(df.shape)    
# Output: (100, 3)

# Unique values and frequencies (Extremely useful for categorical data)
print(df['C'].value_counts())
# Output:
# cat    50
# dog    50
# Name: C, dtype: int64

print(df['C'].nunique()) 
# Output: 2
```

## 4. Data Cleaning

Real data is messy. Handling missing values and duplicates is 80% of an ML engineer's job.

> 🤖 **ML Connection**: Models like linear regression or neural networks will crash if you feed them `NaN` (Not a Number) values.

```python
messy_df = pd.DataFrame({
    'A': [1, 2, np.nan, 4, 4],
    'B': ['x', np.nan, 'y', 'z', 'z']
})

# --- Checking for Missing Values ---
print(messy_df.isna().sum()) 
# Output: A: 1, B: 1 (counts NaNs per column)

# --- Dropping Missing Values ---
# Drop any row with at least one NaN
clean_dropped = messy_df.dropna()

# --- Filling Missing Values (Imputation) ---
# Fill NaNs with the mean (for numerical) or a constant (for categorical)
messy_df['A'] = messy_df['A'].fillna(messy_df['A'].mean())
messy_df['B'] = messy_df['B'].fillna('Unknown')

# --- Handling Duplicates ---
# Check which rows are exact duplicates
print(messy_df.duplicated())
# Drop duplicates, keeping the first occurrence
deduped_df = messy_df.drop_duplicates()

# --- Type Conversion ---
# Convert column to a specific type
messy_df['A'] = messy_df['A'].astype(int)
```

## 5. String Operations

Text data needs preprocessing before NLP pipelines (like TF-IDF or embeddings). Pandas' `.str` accessor vectorizes string operations.

```python
text_df = pd.DataFrame({'text': [' Apple ', 'BANANA', 'cherry_pie']})

# Lowercase/Uppercase
text_df['lower'] = text_df['text'].str.lower()
text_df['upper'] = text_df['text'].str.upper()

# Strip whitespace
text_df['stripped'] = text_df['text'].str.strip()

# Contains substring (Boolean mask)
has_pie = text_df['text'].str.contains('pie')

# Replace and Split
text_df['replaced'] = text_df['text'].str.replace('pie', 'tart')
# split() returns a list in each cell. expand=True makes them separate columns.
text_df[['word1', 'word2']] = text_df['text'].str.split('_', expand=True)
```

## 6. GroupBy

Split-Apply-Combine. This is how you aggregate data to understand patterns (e.g., "What's the average purchase value per region?").

```python
sales = pd.DataFrame({
    'store': ['A', 'A', 'B', 'B', 'C'],
    'region': ['North', 'North', 'South', 'South', 'East'],
    'sales': [100, 150, 200, 50, 300],
    'profit': [10, 15, 20, -5, 30]
})

# Basic groupby and mean
print(sales.groupby('store')['sales'].mean())

# Multiple aggregations using agg()
agg_df = sales.groupby('store').agg({
    'sales': ['sum', 'mean'],
    'profit': 'max'
})

# Named aggregations (Cleaner output column names)
named_agg = sales.groupby('store').agg(
    total_sales=pd.NamedAgg(column='sales', aggfunc='sum'),
    max_profit=pd.NamedAgg(column='profit', aggfunc='max')
)

# transform() - Returns a series same size as the original DataFrame.
# Useful for feature engineering (e.g., standardizing within a group)
sales['store_avg_sales'] = sales.groupby('store')['sales'].transform('mean')
sales['sales_diff_from_avg'] = sales['sales'] - sales['store_avg_sales']
```

## 7. Merging & Joining

Combining multiple datasets, just like SQL joins.

```python
df1 = pd.DataFrame({'id': [1, 2, 3], 'name': ['Ali', 'Bob', 'Cam']})
df2 = pd.DataFrame({'id': [2, 3, 4], 'score': [90, 85, 88]})

# --- Merge (Inner join by default) ---
merged_inner = pd.merge(df1, df2, on='id', how='inner')
# Output only has id 2 and 3

# --- Outer Join ---
merged_outer = pd.merge(df1, df2, on='id', how='outer')
# Output has 1, 2, 3, 4 (with NaNs where data is missing)

# Left and Right joins work similarly via how='left' or how='right'

# --- Concat ---
# Stacking DataFrames vertically (axis=0) or horizontally (axis=1)
df3 = pd.DataFrame({'id': [5], 'name': ['Dan']})
stacked = pd.concat([df1, df3], ignore_index=True)

# --- merge_asof ---
# Powerful for time-series: joins on the nearest key rather than exact match.
```

## 8. Pivot & Reshape

Transforming data layout. Long format to wide format and vice versa.

```python
df = pd.DataFrame({
    'date': ['2023-01', '2023-01', '2023-02', '2023-02'],
    'city': ['NY', 'LA', 'NY', 'LA'],
    'temp': [32, 75, 35, 78]
})

# --- Pivot Table ---
# Makes 'date' the index, 'city' the columns, and 'temp' the values.
pivot = df.pivot_table(index='date', columns='city', values='temp', aggfunc='mean')

# --- Melt ---
# "Unpivots" a DataFrame from wide format to long format (useful for visualization)
melted = pivot.reset_index().melt(id_vars=['date'], value_name='temp', var_name='city')

# --- Crosstab ---
# Simple cross-tabulation of two (or more) factors
# pd.crosstab(df['col1'], df['col2'])
```

## 9. Apply & Transform

Applying custom functions to data.

> 🎯 **Interview Tip**: Vectorized operations (e.g., `df['a'] + df['b']`) are implemented in C and are extremely fast. `apply()` iterates in Python and is slow. Always try to vectorize before resorting to `apply`.

```python
df = pd.DataFrame({'A': [1, 2, 3], 'B': [10, 20, 30]})

# apply on a Series (element-wise)
df['A_squared'] = df['A'].apply(lambda x: x**2)

# apply on a DataFrame
# axis=1 applies the function to each row
df['Sum'] = df.apply(lambda row: row['A'] + row['B'], axis=1)

# map is strictly for Series (often for dictionary mapping)
df['A_mapped'] = df['A'].map({1: 'one', 2: 'two', 3: 'three'})

# applymap applies a function to EVERY element in the DataFrame (Note: deprecated in newer Pandas versions, use .map() on DataFrame instead).
# df.map(lambda x: str(x)) # Newer syntax
```

## 10. Sorting & Ranking

```python
df = pd.DataFrame({
    'name': ['A', 'B', 'C', 'D'],
    'score': [90, 80, 95, 80]
})

# Sort by column
sorted_df = df.sort_values(by='score', ascending=False)

# Sort by index
sorted_idx = sorted_df.sort_index()

# Rank elements
# 'min' method gives tied values the same rank (e.g., both 80s get rank 1)
df['rank'] = df['score'].rank(method='min', ascending=False)

# Get top N / bottom N (more efficient than sorting the whole dataframe)
top_2 = df.nlargest(2, 'score')
bottom_2 = df.nsmallest(2, 'score')
```

## 11. Time Series

Handling temporal data (predicting stock prices, weather, sales forecasting).

```python
# Convert strings to datetime objects
dates = pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03'])
ts = pd.Series([10, 20, 30], index=dates)

# Resampling (like groupby for dates)
# 'W' for weekly, 'M' for monthly sum
weekly_sum = ts.resample('W').sum()

# Rolling windows (e.g., 2-day moving average)
rolling_mean = ts.rolling(window=2).mean()

# Shift (lag features for ML)
# Shifting data down by 1 day (yesterday's value is now on today's row)
ts_shifted = ts.shift(1)

# Diff (Difference between current and previous value - useful for stationarity)
ts_diff = ts.diff(1)
```

## 12. Feature Engineering with Pandas

Creating new features from existing ones to give the ML model more predictive power.

```python
df = pd.DataFrame({'age': [15, 25, 35, 65, 80], 'color': ['red', 'blue', 'red', 'green', 'blue']})

# --- Binning (Discretization) ---
# cut: bin into equal-width bins or custom edges
bins = [0, 18, 60, 100]
labels = ['Child', 'Adult', 'Senior']
df['age_group'] = pd.cut(df['age'], bins=bins, labels=labels)

# qcut: bin into equal-frequency bins (quantiles)
df['age_quantile'] = pd.qcut(df['age'], q=3, labels=['Young', 'Middle', 'Old'])

# --- One-Hot Encoding ---
# Converts categorical variables into numerical dummy variables (1s and 0s)
# drop_first=True avoids the dummy variable trap (multicollinearity)
df_encoded = pd.get_dummies(df, columns=['color'], drop_first=True, dtype=int)

# --- Normalization (Min-Max Scaling manually) ---
df['age_scaled'] = (df['age'] - df['age'].min()) / (df['age'].max() - df['age'].min())
```

## 13. Performance Tips

When working with datasets that barely fit in RAM.

> 🤖 **ML Connection**: Out of memory (OOM) errors are the bane of data processing. Knowing how to shrink a DataFrame saves lives.

```python
# 1. Use memory-efficient data types
# Convert objects to 'category' if they have a small number of unique values
df['color'] = df['color'].astype('category')
# Downcast integers/floats (e.g., int64 to int32 or int8)
df['age'] = pd.to_numeric(df['age'], downcast='integer')

# 2. Chunked Reading
# If a CSV is 10GB, read it in chunks of 100k rows
# chunker = pd.read_csv('huge_data.csv', chunksize=100000)
# for chunk in chunker:
#     process(chunk)

# 3. eval() and query() for fast operations on large DataFrames (uses NumExpr backend)
# df.eval('new_col = col1 + col2', inplace=True)
```

---

## 🎯 Practice Problems
1. Create a DataFrame from a dictionary and set a custom index.
2. Filter a DataFrame to find rows where Column A is greater than the mean of Column A.
3. Given a dataset with NaNs, replace numerical NaNs with the column median and categorical NaNs with the mode.
4. Convert a column of strings formatted as "ID-123", "ID-456" into a pure integer column containing `[123, 456]`.
5. Group a sales dataset by `region` and `product_type`, calculating the sum of `revenue` and max of `profit`.
6. Perform a left join between a `Users` DataFrame and an `Orders` DataFrame. Identify users who made no orders.
7. Use `pivot_table` to show the average score of students across different `Subjects` (columns) and `Classes` (index).
8. Write a function to calculate the z-score and apply it to a numeric column using `transform()`.
9. Generate a 30-day time series of random stock prices. Calculate the 7-day moving average and 1-day momentum (difference).
10. Use `pd.get_dummies` to one-hot encode a 'City' column, ensuring you drop the first category to avoid multicollinearity.

## Related Notes
- [[Python NumPy Essentials]]
- [[Python Error Handling and File IO]]
- [[DSA Hashing]]
