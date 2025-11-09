# python3 part-1.py
from functools import reduce

with open('input-1.txt', 'r') as file:
    data = file.read()
    boxes = data.split(",")
    boxes_int = list(map(int, boxes))
    boxes_int.sort()
    deduplicated_boxes = list(set(boxes_int))
    answer = reduce(lambda x, y: x + y, deduplicated_boxes)
    print(answer)
