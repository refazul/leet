import pandas as pd

# Set pandas display options to show full DataFrame
pd.set_option("display.max_rows", None)
pd.set_option("display.max_columns", None)
pd.set_option("display.width", None)
pd.set_option("display.max_colwidth", None)

def analyze_organization_hierarchy(employees: pd.DataFrame) -> pd.DataFrame:
    # Convert 'null' string to actual NaN
    employees['manager_id'] = employees['manager_id'].replace('null', pd.NA)
    
    level = 1
    levels = pd.DataFrame()
    level_n_1 = employees[employees['manager_id'].isna()].copy()
    level_n_1['level'] = level
    level_n_1['budget'] = level_n_1['salary']
    level_n_1['team_size'] = 1

    levels = pd.concat([levels, level_n_1])
    print('Level %d:' % level)
    print(level_n_1)
    print('--------------------------------')

    level_n = employees[employees['manager_id'].isin(level_n_1['employee_id'])]
    while not level_n.empty:
        level += 1
        level_n['level'] = level
        level_n['budget'] = level_n['salary']
        level_n['team_size'] = 1

        levels = pd.concat([levels, level_n])
        print('Level %d:' % level)
        print(level_n)
        print('--------------------------------')

        level_n_1 = level_n
        level_n = employees[employees['manager_id'].isin(level_n_1['employee_id'])]

    max_level = levels['level'].max()
    current_level = max_level

    print(levels)

    while current_level >= 2:
        print('Current Level %d:' % current_level)
        current_level_employees = levels[levels['level'] == current_level]

        added = current_level_employees.groupby('manager_id').agg(
            budget = ('budget', 'sum'),
            team_size = ('team_size', 'sum')
        )
        print(added)

        for index, row in added.iterrows():
            levels.loc[levels['employee_id'] == index, 'budget'] += row['budget']
            levels.loc[levels['employee_id'] == index, 'team_size'] += row['team_size']
        
        print('Updated Level %d:' % current_level)
        print(levels)
        print('--------------------------------')

        current_level -= 1
    
    levels['team_size'] -= 1

    levels.sort_values(by=['level', 'budget', 'employee_name'], ascending=[True, False, True], inplace=True)
    return levels[['employee_id', 'employee_name', 'level', 'team_size', 'budget']]