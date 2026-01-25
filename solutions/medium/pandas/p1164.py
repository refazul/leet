# LeetCode 1164. Product Price at a Given Date
# https://leetcode.com/problems/product-price-at-a-given-date/description/
# Problem
"""
Initially, all products have price 10.

Write a solution to find the prices of all products on the date 2019-08-16.

Return the result table in any order.

The result format is in the following example.

 

Example 1:

Input: 
Products table:
+------------+-----------+-------------+
| product_id | new_price | change_date |
+------------+-----------+-------------+
| 1          | 20        | 2019-08-14  |
| 2          | 50        | 2019-08-14  |
| 1          | 30        | 2019-08-15  |
| 1          | 35        | 2019-08-16  |
| 2          | 65        | 2019-08-17  |
| 3          | 20        | 2019-08-18  |
+------------+-----------+-------------+
Output: 
+------------+-------+
| product_id | price |
+------------+-------+
| 2          | 50    |
| 1          | 35    |
| 3          | 10    |
+------------+-------+
"""

# Solution
import pandas as pd

def price_at_given_date(products: pd.DataFrame) -> pd.DataFrame:
    product_ids = products['product_id'].unique()

    print(product_ids)

    product_ids = pd.DataFrame({'product_id': product_ids})

    stripped_table = products[products['change_date'] <= '2019-08-16'].sort_values(by='change_date')

    print(stripped_table)

    latest_prices = stripped_table.groupby('product_id').agg(
        last_price = ('new_price', 'last')
    )

    print(latest_prices)

    joined = pd.merge(product_ids, latest_prices, on='product_id', how='left').fillna({'last_price': 10}).rename(columns={'last_price': 'price'})

    return joined[['product_id', 'price']]