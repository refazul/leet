import pandas as pd

def find_managers(employee: pd.DataFrame) -> pd.DataFrame:
    manager =  employee.groupby('managerId').agg(
        managerId = ('managerId', 'first'),
        report_count = ('name', 'size')
    )
    manager = manager[manager['report_count'] >= 5]

    actual_manager = employee[employee['id'].isin(manager['managerId'])]

    return actual_manager[['name']]