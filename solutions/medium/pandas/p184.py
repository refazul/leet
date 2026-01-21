import pandas as pd

def department_highest_salary(employee: pd.DataFrame, department: pd.DataFrame) -> pd.DataFrame:
    joint = pd.merge(employee, department, left_on = 'departmentId', right_on = 'id')

    joint['max'] = joint.groupby('departmentId')['salary'].transform('max')

    top = joint[joint['salary'] == joint['max']]

    top.rename(columns = {'name_y': 'Department', 'name_x': 'Employee', 'salary': 'Salary'}, inplace = True)

    return top[['Department', 'Employee', 'Salary']]