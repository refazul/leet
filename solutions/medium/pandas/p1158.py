import pandas as pd
import numpy as np

pd.set_option("display.max_columns", None)
pd.set_option("display.max_rows", None)
pd.set_option("display.width", None)
pd.set_option("display.max_colwidth", None)


def market_analysis(users: pd.DataFrame, orders: pd.DataFrame, items: pd.DataFrame) -> pd.DataFrame:
    orders["order_date"] = pd.to_datetime(orders["order_date"])
    orders["year"] = orders["order_date"].dt.to_period("Y").astype(str)

    conditions = [orders["year"] == "2019"]

    choices = [1]

    orders["order_in_2019"] = np.select(conditions, choices, default=0)

    orders_in_2019 = orders.groupby("buyer_id", as_index=False).agg(
        orders_in_2019=("order_in_2019", "sum")
    )

    grouped = users.merge(
        orders_in_2019, how="left", left_on="user_id", right_on="buyer_id"
    ).fillna({"orders_in_2019": 0})

    return grouped[["user_id", "join_date", "orders_in_2019"]].rename(columns = {"user_id": "buyer_id"})