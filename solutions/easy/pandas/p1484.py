import pandas as pd

def categorize_products(activities: pd.DataFrame) -> pd.DataFrame:
    df = activities.groupby('sell_date').agg(
        sell_date = ('sell_date', 'first'),
        num_sold = ('product', 'nunique'),
        products = ('product', lambda x: ','.join(sorted(set(x)))),
    )
    return df