import pandas as pd

def rising_temperature(weather: pd.DataFrame) -> pd.DataFrame:
    weather = weather.sort_values(by = 'recordDate')
    greater = weather['temperature'] > weather['temperature'].shift(1)
    diff = (pd.to_datetime(weather['recordDate']) - pd.to_datetime(weather['recordDate'].shift(1))) == pd.Timedelta(days = 1)
    highs = weather[greater & diff]
    highs.rename(columns = {'id': 'Id'}, inplace = True)

    return highs[['Id']]