import pandas as pd

def queries_stats(queries: pd.DataFrame) -> pd.DataFrame:
    df = queries.assign(ratio = queries['rating'] / queries['position'])
    agg = df.groupby('query_name', as_index = False).agg(
        total = ('ratio', 'sum'),
        total_count = ('ratio', 'count'),
        poor_count = ('rating', lambda x: (x < 3).sum())
    )
    agg['quality'] = (agg['total'] / agg['total_count']).round(2)
    agg['poor_query_percentage'] = ((agg['poor_count'] / agg['total_count']) * 100).round(2)
    agg = queries.merge(agg, how = 'left', left_on = 'query_name', right_on = 'query_name')
    agg = agg.drop_duplicates(subset = ['query_name'])
    
    return agg[['query_name', 'quality', 'poor_query_percentage']]