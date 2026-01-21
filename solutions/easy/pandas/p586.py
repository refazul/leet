import pandas as pd

def largest_orders(orders: pd.DataFrame) -> pd.DataFrame:
    orders['order_count'] = orders.groupby('customer_number')['order_number'].transform('count')
    max_order = orders['order_count'].max()
    return orders.loc[orders['order_count'] == max_order, ['customer_number']].drop_duplicates()