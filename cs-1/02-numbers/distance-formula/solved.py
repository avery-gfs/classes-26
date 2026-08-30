# Write a program that gets the coordinates of two points as input from the
# user, and calculates the distance between them.
#
# The distance between two points is:
#
# distance = sqrt((x₂ - x₁)² + (y₂ - y₁)²)
#
# Note: you can get the square root of a number by raising it to the power
# of 0.5
#
# Example:
#
# x1: 1
# y1: 2
# x2: 4
# y2: 6
# Distance: 5.0

x1 = float(input("x1: "))
y1 = float(input("y1: "))
x2 = float(input("x2: "))
y2 = float(input("y2: "))

dx = x2 - x1
dy = y2 - y1
distance = (dx**2 + dy**2) ** 0.5

print(f"Distance: {distance}")
