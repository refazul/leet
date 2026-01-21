import pandas as pd

def find_classes(courses: pd.DataFrame) -> pd.DataFrame:
    student_count = courses.groupby('class')['student'].count().reset_index()
    classes = student_count[student_count['student'] >= 5]
    return classes[['class']]