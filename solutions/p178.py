import pandas as pd

def order_scores(scores: pd.DataFrame) -> pd.DataFrame:
    rank = scores.groupby('score').agg(
        scr = ('score', 'first'),
        count = ('id', 'count')
    ).sort_values(by = 'score', ascending = False)

    rank_exapanded = rank.loc[rank.index.repeat(rank['count'])].copy()

    rank_exapanded['rank'] = pd.factorize(rank_exapanded['scr'])[0] + 1

    rank_exapanded.rename(columns = {'scr': 'score'}, inplace = True)
    
    return rank_exapanded[['score', 'rank']]