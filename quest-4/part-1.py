# python3 part-1.py
from functools import reduce

with open('input-1.txt', 'r') as file:
    rotations = 2025
    gears = list(map(int,file.read().split("\n")))
    ratios = [current/_next for current,_next in zip(gears,gears[1:])]
    final_ratio = reduce(lambda x, y: x * y, ratios)
    print(rotations * final_ratio)
