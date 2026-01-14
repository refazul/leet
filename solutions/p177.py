import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:
    sorted_list = employee.sort_values(by="salary", ascending=False)

    unique_sorted_list = sorted_list.drop_duplicates(subset=['salary'])

    highest_salary = None

    if 1 <= N <= len(unique_sorted_list):
        highest_salary = unique_sorted_list.iloc[N-1]['salary']

    return pd.DataFrame({f'getNthHighestSalary({N})': [highest_salary]})