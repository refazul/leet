# LeetCode 1193. Monthly Transactions I
# https://leetcode.com/problems/monthly-transactions-i/description/

# Problem
"""
Write an SQL query to find for each month and country, the number of transactions and their total amount, the number of approved transactions and their total amount.

Return the result table in any order.

The query result format is in the following example.

 

Example 1:

Input: 
Transactions table:
+------+---------+----------+--------+------------+
| id   | country | state    | amount | trans_date |
+------+---------+----------+--------+------------+
| 121  | US      | approved | 1000   | 2018-12-18 |
| 122  | US      | declined | 2000   | 2018-12-19 |
| 123  | US      | approved | 2000   | 2019-01-01 |
| 124  | DE      | approved | 2000   | 2019-01-07 |
+------+---------+----------+--------+------------+
Output: 
+----------+---------+-------------+----------------+--------------------+-----------------------+
| month    | country | trans_count | approved_count | trans_total_amount | approved_total_amount |
+----------+---------+-------------+----------------+--------------------+-----------------------+
| 2018-12  | US      | 2           | 1              | 3000               | 1000                  |
| 2019-01  | US      | 1           | 1              | 2000               | 2000                  |
| 2019-01  | DE      | 1           | 1              | 2000               | 2000                  |
+----------+---------+-------------+----------------+--------------------+-----------------------+
"""

# Solution
import pandas as pd

def monthly_transactions(transactions: pd.DataFrame) -> pd.DataFrame:
    transactions["month"] = transactions["trans_date"].dt.to_period("M").astype(str)

    conditions = [
        (transactions["state"] == "approved"),
    ]
    choices = [transactions["amount"]]

    transactions["approved"] = np.select(conditions, choices, default=0)

    grouped = transactions.groupby(
        ["month", "country"], as_index=False, dropna=False
    ).agg(
        trans_count=("id", "count"),
        approved_count=("state", lambda x: (x == "approved").sum()),
        trans_total_amount=("amount", "sum"),
        approved_total_amount=("approved", "sum"),
    )

    return grouped
