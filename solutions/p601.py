import pandas as pd

def human_traffic(stadium: pd.DataFrame) -> pd.DataFrame:
    mask = (stadium['people'] >= 100) & (
        (
            (stadium['people'].shift(-1) >= 100) & (stadium['people'].shift(-2) >= 100)
        ) | (
            (stadium['people'].shift(1) >= 100) & (stadium['people'].shift(2) >= 100)
        ) | (
            (stadium['people'].shift(1) >= 100) & (stadium['people'].shift(-1) >= 100)
        )
        )

    result = stadium.loc[mask]

    return result.sort_values(by = 'visit_date')