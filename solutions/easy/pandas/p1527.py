import pandas as pd

def find_patients(patients: pd.DataFrame) -> pd.DataFrame:
    filter_1 = patients[patients['conditions'].str.contains(r'(^| )DIAB1')]

    return filter_1
    