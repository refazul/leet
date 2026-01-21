import pandas as pd

def valid_emails(users: pd.DataFrame) -> pd.DataFrame:
    filter_1 = users[users['mail'].str.endswith('@leetcode.com')]

    filter_2 = filter_1[filter_1['mail'].str[0].str.isalpha()]

    filter_3 = filter_2[filter_2['mail'].str[:-13].str.replace('[a-zA-Z0-9_.-]', '', regex=True) == '']

    return filter_3