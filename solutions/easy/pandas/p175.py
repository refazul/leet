import pandas as pd

def combine_two_tables(person: pd.DataFrame, address: pd.DataFrame) -> pd.DataFrame:
    combined = person.merge(address, how = 'left', on = 'personId')

    return combined[['firstName', 'lastName', 'city', 'state']]