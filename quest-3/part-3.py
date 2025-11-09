# python3 part-3.py

from collections import Counter

# each box set needs to decrease, so the most frequent number should be the minimum number of sets
with open('input-3.txt', 'r') as file:
    print(Counter(list(map(int, file.read().split(",")))).most_common(1))
