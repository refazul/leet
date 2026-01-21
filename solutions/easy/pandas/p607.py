import pandas as pd

def sales_person(sales_person: pd.DataFrame, company: pd.DataFrame, orders: pd.DataFrame) -> pd.DataFrame:
    first_join = orders.merge(company)

    red = first_join[first_join['name'] == 'RED']

    culprits = red.merge(sales_person, how = 'left', left_on = 'sales_id', right_on = 'sales_id')

    innocents = sales_person[~sales_person['name'].isin(culprits['name_y'])]

    return innocents[['name']]