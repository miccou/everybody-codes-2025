# python3 part-2.py
from functools import reduce

with open('input-2.txt', 'r') as file:
    rotations = 10000000000000
    gears = list(map(int,file.read().split("\n")))
    ratios = [current/_next for current,_next in zip(gears,gears[1:])]
    final_ratio = reduce(lambda x, y: x * y, ratios)
    print(rotations / final_ratio)
