import pandas as pd

# Set pandas display options to show full DataFrame
pd.set_option('display.max_rows', None)
pd.set_option('display.max_columns', None)
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

def trips_and_users(trips: pd.DataFrame, users: pd.DataFrame) -> pd.DataFrame:
    table1 = trips.merge(users, how = 'left', left_on = 'client_id', right_on = 'users_id')
    table2 = table1.merge(users, how = 'left', left_on = 'driver_id', right_on = 'users_id')

    clean_list = table2[(table2['banned_x'] == 'No') & (table2['banned_y'] == 'No') & (table2['request_at'] >= "2013-10-01") & (table2['request_at'] <= "2013-10-03")]

    agg = clean_list.groupby('request_at').agg(
        day = ('request_at', 'first'),
        total = ('status', 'size'),
        completed = ('status', lambda x: (x == 'completed').sum())
    )
    agg['cancellation_rate'] = ((agg['total'] - agg['completed']) / agg['total']).round(2)
    agg.rename(columns = {'cancellation_rate' : 'Cancellation Rate', 'day': 'Day'}, inplace = True)
        
    return agg[['Day', 'Cancellation Rate']]