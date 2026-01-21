import pandas as pd

def game_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    df = activity.groupby('player_id').agg(
        player_id = ('player_id', 'first'),
        first_login = ('event_date', lambda x: min(x))
    )
    return df