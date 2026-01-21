import pandas as pd

def find_employees(employee: pd.DataFrame) -> pd.DataFrame:
    merged = employee.merge(employee, how = 'left', left_on = 'managerId', right_on = 'id')
    better = merged[merged['salary_x'] > merged['salary_y']]
    better.rename(columns = {'name_x': 'Employee'}, inplace = True)

    return better[['Employee']]