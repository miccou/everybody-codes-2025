# python3 part-2.py

from functools import reduce

with open('input-2.txt', 'r') as file:
    data = file.read()
    boxes = data.split(",")
    boxes_int = list(map(int, boxes))
    boxes_int.sort()
    deduplicated_boxes = list(set(boxes_int))
    smallest_20 = deduplicated_boxes[0:20]
    answer = reduce(lambda x, y: x + y, smallest_20)
    print(answer)
