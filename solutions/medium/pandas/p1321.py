import pandas as pd

def restaurant_growth(customer: pd.DataFrame) -> pd.DataFrame:
    sales_by_date = customer.groupby('visited_on', as_index = False).agg(
        total_sale = ('amount', 'sum')
    ).sort_values(by = 'visited_on')

    sales_by_date['last_7_days'] = sales_by_date['total_sale'] + sales_by_date['total_sale'].shift(1) + sales_by_date['total_sale'].shift(2) + sales_by_date['total_sale'].shift(3) + sales_by_date['total_sale'].shift(4) + sales_by_date['total_sale'].shift(5) + sales_by_date['total_sale'].shift(6)
    sales_by_date['avg'] = (sales_by_date['last_7_days'] / 7).round(2)

    sales_by_date.rename(columns = {'last_7_days': 'amount', 'avg': 'average_amount'}, inplace = True)

    return sales_by_date[6:][['visited_on', 'amount', 'average_amount']]