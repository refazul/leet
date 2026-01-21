import pandas as pd

def count_unique_subjects(teacher: pd.DataFrame) -> pd.DataFrame:
    df = teacher.groupby('teacher_id').agg(
        teacher_id = ('teacher_id', 'first'),
        cnt = ('subject_id', 'nunique')
    )
    return df