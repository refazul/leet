import pandas as pd

def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    N = 2
    sorted_list = employee.sort_values(by="salary", ascending=False)

    unique_sorted_list = sorted_list.drop_duplicates(subset=['salary'])

    highest_salary = None

    if 1 <= N <= len(unique_sorted_list):
        highest_salary = unique_sorted_list.iloc[N-1]['salary']

    return pd.DataFrame({f'SecondHighestSalary': [highest_salary]})