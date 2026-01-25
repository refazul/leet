# LeetCode 1045. Customers Who Bought All Products
# https://leetcode.com/problems/customers-who-bought-all-products/description/

# Problem
"""
Write a solution to report the customer ids from the Customer table that bought all the products in the Product table.

Return the result table in any order.

The result format is in the following example.

 

Example 1:

Input: 
Customer table:
+-------------+-------------+
| customer_id | product_key |
+-------------+-------------+
| 1           | 5           |
| 2           | 6           |
| 3           | 5           |
| 3           | 6           |
| 1           | 6           |
+-------------+-------------+
Product table:
+-------------+
| product_key |
+-------------+
| 5           |
| 6           |
+-------------+
Output: 
+-------------+
| customer_id |
+-------------+
| 1           |
| 3           |
+-------------+
Explanation: 
The customers who bought all the products (5 and 6) are customers with IDs 1 and 3.
"""

# Solution
import pandas as pd

def find_customers(customer: pd.DataFrame, product: pd.DataFrame) -> pd.DataFrame:
    def purchased_all(x):
        return set(product['product_key'].unique()).issubset(set(x.unique()))
    
    customers = customer.groupby('customer_id', as_index=False).agg(
        all = ('product_key', purchased_all)
    )

    filtered_customers = customers[customers['all'] == True]

    return filtered_customers[['customer_id']]