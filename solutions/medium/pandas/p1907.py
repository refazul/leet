import pandas as pd

def count_salary_categories(accounts: pd.DataFrame) -> pd.DataFrame:
    bins = [-float('inf'), 19999, 50000, float('inf')]
    labels = ['Low Salary', 'Average Salary', 'High Salary']
    
    accounts['category'] = pd.cut(accounts['income'], bins=bins, labels=labels)

    result = accounts.groupby('category')['account_id'].count().reset_index()
    result.rename(columns = {'account_id': 'accounts_count'}, inplace = True)
    return result