# Warm Up

## Setup

- Find a partner

- Get ready to run Python code (you can use pickcode.io)!

  ![](/assets/pickcode.png)

- Write and run a test program

  ```py
  print("Hello world!")
  ```

## Relay

- One person can see the referencecode (not allowed to type!)

- One person can type code (not allowed to see reference code!)

- See who can recreate the reference program the fastest!

## What is CS 2?

CS 2: Data Processing and Practical Applications

## Problem: Horizontal Bar Chart

Given a list of integers each greater than zero, generate a horizontal bar chart
where each number `n` is shown as a row column of `X` characters of length `n`.

For the numbers `[1, 4, 2, 7, 3, 1]` the output should be:

```
X
XXXX
XX
XXXXXXX
XXX
X
```

## Solutions

```py
numbers = [1, 4, 2, 7, 3, 1]

for n in numbers:
    row = ""

    for j in range(n):
        row += "X"
   
    print(row)
```

```
X
XXXX
XX
XXXXXXX
XXX
X
```

```py
numbers = [1, 4, 2, 7, 3, 1]

for i in range(len(numbers)):
    row = ""

    for j in range(numbers[i]):
        row += "X"
   
    print(row)
```

```
X
XXXX
XX
XXXXXXX
XXX
X
```

---

```py
numbers = [1, 4, 2, 7, 3, 1]

for n in numbers:
    for j in range(n):
        print("X", end="")
   
    print()
```

```
X
XXXX
XX
XXXXXXX
XXX
X
```

---

```py
numbers = [1, 4, 2, 7, 3, 1]

for n in numbers:
    print("X" * n)
```

```
X
XXXX
XX
XXXXXXX
XXX
X
```

There are many ways to solve this problem; that's what makes CS beautiful!

## Python practice

Language reference:

https://www.w3schools.com/python/python_getstarted.asp

Practice problems:

https://www.w3schools.com/python/python_exercises.asp

## Challenge: Vertical Bar Chart

```
   X
   X
   X
 X X
 X XX
 XXXX
XXXXXX
```
