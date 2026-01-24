import pandas as pd

def find_investments(insurance: pd.DataFrame) -> pd.DataFrame:
    insurance['count'] = insurance.groupby(['lat', 'lon'])['lat'].transform('size')

    filter1 = insurance[insurance.duplicated(subset = ['tiv_2015'], keep = False)]

    tiv_2016 = filter1.loc[filter1['count'] == 1, 'tiv_2016'].sum().round(2)

    return pd.DataFrame({
        'tiv_2016': [tiv_2016]
    })