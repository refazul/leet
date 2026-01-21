import pandas as pd

def total_time(employees: pd.DataFrame) -> pd.DataFrame:
    employees['session_time'] = employees['out_time'] - employees['in_time']

    total_time = employees.groupby(['event_day', 'emp_id'], as_index=False).agg(total_time=('session_time', 'sum')).sort_values(by='event_day')
    return total_time.rename(columns={'event_day': 'day'})