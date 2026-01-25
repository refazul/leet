# LeetCode 3451 - Invalid IP Addresses
# https://leetcode.com/problems/invalid-ip-addresses/description/

# Problem
"""
Write a solution to find invalid IP addresses. An IPv4 address is invalid if it meets any of these conditions:

Contains numbers greater than 255 in any octet
Has leading zeros in any octet (like 01.02.03.04)
Has less or more than 4 octets
Return the result table ordered by invalid_count, ip in descending order respectively. 

The result format is in the following example.

 

Example:

Input:

logs table:

+--------+---------------+-------------+
| log_id | ip            | status_code | 
+--------+---------------+-------------+
| 1      | 192.168.1.1   | 200         | 
| 2      | 256.1.2.3     | 404         | 
| 3      | 192.168.001.1 | 200         | 
| 4      | 192.168.1.1   | 200         | 
| 5      | 192.168.1     | 500         | 
| 6      | 256.1.2.3     | 404         | 
| 7      | 192.168.001.1 | 200         | 
+--------+---------------+-------------+
Output:

+---------------+--------------+
| ip            | invalid_count|
+---------------+--------------+
| 256.1.2.3     | 2            |
| 192.168.001.1 | 2            |
| 192.168.1     | 1            |
+---------------+--------------+
Explanation:

256.1.2.3 is invalid because 256 > 255
192.168.001.1 is invalid because of leading zeros
192.168.1 is invalid because it has only 3 octets
The output table is ordered by invalid_count, ip in descending order respectively.
"""

# Solution

import pandas as pd

def find_invalid_ips(logs: pd.DataFrame) -> pd.DataFrame:
    def valid_ip(string: str) -> bool:
        parts = string.split('.')
        if (len(parts) == 4):
            for part in parts:
                if (part.startswith('0') & (len(part) > 1)):
                    return False
                if (int(part) not in range(0, 256)):
                    return False
            return True
        return False
    
    valid_mask = logs['ip'].apply(valid_ip)
    invalid_ips = logs[~valid_mask][['ip']].groupby('ip').agg(
        ip_address = ('ip', 'first'),
        invalid_count = ('ip', 'count')
    ).sort_values(by = ['invalid_count', 'ip'], ascending = False).rename(columns = {'ip_address': 'ip'})
    return invalid_ips