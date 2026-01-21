import pandas as pd

def find_customers(customers: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    joined_df = customers.merge(orders, left_on='id', right_on='customerId', how='left')

    filtered_df = joined_df[joined_df['customerId'].isna()]

    return filtered_df[['name']].rename(columns={'name': 'Customers'})