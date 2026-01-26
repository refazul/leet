import pandas as pd

def immediate_food_delivery(delivery: pd.DataFrame) -> pd.DataFrame:
    sorted_orders = delivery.sort_values(by = ['order_date'])
    first_orders = sorted_orders.groupby('customer_id', as_index = False)[['order_date', 'customer_pref_delivery_date']].first()
    
    conditions = [
        (first_orders['order_date'] == first_orders['customer_pref_delivery_date'])
    ]

    choices = [
        'immediate'
    ]

    first_orders['type'] = np.select(conditions, choices, default = "scheduled")

    print(first_orders['type'].value_counts())

    counts = first_orders['type'].value_counts()

    percentage = (counts.get('immediate', 0) / (counts.get('immediate', 0) + counts.get('scheduled', 0)) * 100).round(2)

    print(percentage)

    return pd.DataFrame({'immediate_percentage': [percentage]})