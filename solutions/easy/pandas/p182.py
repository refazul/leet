import pandas as pd

def duplicate_emails(person: pd.DataFrame) -> pd.DataFrame:
    dupes = person[person.duplicated(subset = ['email'], keep = False)]    
    dupes = dupes.drop_duplicates(subset = ['email'], keep = 'first')
    dupes.rename(columns = {'email': 'Email'}, inplace = True)

    return dupes[['Email']]