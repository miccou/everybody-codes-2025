# python3 part-3.py
from functools import reduce

with open('input-3.txt', 'r') as file:
    rotations = 100
    gears = file.read().split("\n")

    previous_gear = []
    ratio = 1.0

    for gear in gears:
        sides = list(map(int,gear.split("|")))
        print(sides)
        if len(sides) == 1:
            if len(previous_gear) != 0: 
                    ratio *= sides[0] / previous_gear[1]
            # else do nothing
        else: # len is 2
            if len(previous_gear) == 1: 
                ratio *= sides[0] / previous_gear[0]
            else:
                 ratio *= sides[0] / previous_gear[1]
        
        previous_gear = sides

    print(rotations / ratio)