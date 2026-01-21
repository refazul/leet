import pandas as pd

def big_countries(world: pd.DataFrame) -> pd.DataFrame:
    mask = (world['area'] >= 3000000) | (world['population'] >= 25000000)
    big_countries = world[mask]

    return big_countries[['name', 'population', 'area']]