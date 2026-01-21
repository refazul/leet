import pandas as pd

def students_and_examinations(students: pd.DataFrame, subjects: pd.DataFrame, examinations: pd.DataFrame) -> pd.DataFrame:
    all_exam = students.merge(subjects, how = 'cross')

    attended_exams = examinations.groupby(['student_id', 'subject_name']).size().reset_index()

    all_exam = all_exam.merge(attended_exams, how = 'left')

    all_exam = all_exam.rename(columns={0: 'attended_exams'})

    all_exam['attended_exams'] = all_exam['attended_exams'].fillna(0)

    all_exam = all_exam.sort_values(by=['student_id', 'subject_name'])

    return all_exam