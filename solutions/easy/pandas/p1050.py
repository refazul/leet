import pandas as pd

def actors_and_directors(actor_director: pd.DataFrame) -> pd.DataFrame:
    coop = actor_director.groupby(['actor_id', 'director_id']).agg(
        actor_id = ('actor_id', 'first'),
        director_id = ('director_id', 'first'),
        coop_count = ('director_id', 'count')
    )

    at_least_three = coop[coop['coop_count'] >= 3]

    return at_least_three[['actor_id', 'director_id']]