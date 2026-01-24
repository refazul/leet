# LeetCode 584. Find Customer Referee
# https://leetcode.com/problems/find-customer-referee/description/

# Problem
'''
Find the names of the customer that are either:

referred by any customer with id != 2.
not referred by any customer.
Return the result table in any order.

The result format is in the following example.

 

Example 1:

Input: 
Customer table:
+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |
+----+------+------------+
Output: 
+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
'''

# Code
import pandas as pd

def find_customer_referee(customer: pd.DataFrame) -> pd.DataFrame:
    mask = (customer['referee_id'] != 2) | (customer['referee_id'].isna())
    filter = customer[mask]

    return filter[['name']]