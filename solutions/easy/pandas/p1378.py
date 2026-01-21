import pandas as pd

def replace_employee_id(employees: pd.DataFrame, employee_uni: pd.DataFrame) -> pd.DataFrame:
    joint = employees.merge(employee_uni, how = 'left')

    return joint[['unique_id', 'name']]