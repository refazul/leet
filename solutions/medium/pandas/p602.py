# LeetCode 602. Friend Requests II: Who Has the Most Friends
# https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/

# Problem:
'''
Write a solution to find the people who have the most friends and the most friends number.

The test cases are generated so that only one person has the most friends.

The result format is in the following example.

 

Example 1:

Input: 
RequestAccepted table:
+--------------+-------------+-------------+
| requester_id | accepter_id | accept_date |
+--------------+-------------+-------------+
| 1            | 2           | 2016/06/03  |
| 1            | 3           | 2016/06/08  |
| 2            | 3           | 2016/06/08  |
| 3            | 4           | 2016/06/09  |
+--------------+-------------+-------------+
Output: 
+----+-----+
| id | num |
+----+-----+
| 3  | 3   |
+----+-----+
Explanation: 
The person with id 3 is a friend of people 1, 2, and 4, so he has three friends in total, which is the most number than any others.
 

Follow up: In the real world, multiple people could have the same most number of friends. Could you find all these people in this case?
'''

# Solution:
import pandas as pd

def most_friends(request_accepted: pd.DataFrame) -> pd.DataFrame:
    grouping1 = request_accepted.groupby('requester_id').agg(count = ('accepter_id', 'size'))

    grouping2 = request_accepted.groupby('accepter_id').agg(count = ('requester_id', 'size'))

    g1 = grouping1.reset_index().merge(grouping2, how = 'left', left_on = 'requester_id', right_on = 'accepter_id').fillna(0).assign(num = lambda x: x['count_x'] + x['count_y'])
    g1['id'] = g1['requester_id']
    g1 = g1[['id', 'num']]

    g2 = grouping2.reset_index().merge(grouping1, how = 'left', left_on = 'accepter_id', right_on = 'requester_id').fillna(0).assign(num = lambda x: x['count_x'] + x['count_y'])
    g2['id'] = g2['accepter_id']
    g2 = g2[['id', 'num']]

    g3 = pd.concat([g1, g2]).groupby('id').agg(num = ('num', 'max')).reset_index()
    max_ids = g3[g3['num'] == g3['num'].max()]

    return max_ids