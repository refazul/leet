import pandas as pd

def consecutive_numbers(logs: pd.DataFrame) -> pd.DataFrame:
    logs['change'] = (logs['num'] == logs['num'].shift(1)) & (logs['num'] == logs['num'].shift(-1))

    threes = logs.loc[logs['change']]
    threes.rename(columns = {'num': 'ConsecutiveNums'}, inplace = True)

    return threes[['ConsecutiveNums']].drop_duplicates()