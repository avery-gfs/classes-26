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

```
away_team,away_score,home_team,home_score
Dallas Cowboys,20,Philadelphia Eagles,24
Kansas City Chiefs,21,Los Angeles Chargers,27
Arizona Cardinals,20,New Orleans Saints,13
Pittsburgh Steelers,34,New York Jets,32
Miami Dolphins,8,Indianapolis Colts,33
Tampa Bay Buccaneers,23,Atlanta Falcons,20
New York Giants,6,Washington Commanders,21
Carolina Panthers,10,Jacksonville Jaguars,26
Cincinnati Bengals,17,Cleveland Browns,16
Las Vegas Raiders,20,New England Patriots,13
...
```

---

```
name:                    Philadelphia Eagles
number of games:         17
wins:                    11
losses:                  6
ties:                    0
win percent:             0.647
points scored:           379
points allowed:          325
points scored per game:  22.3
points allowed per game: 19.1

name:                    Dallas Cowboys
number of games:         17
wins:                    7
losses:                  9
ties:                    1
win percent:             0.412
points scored:           471
points allowed:          511
points scored per game:  27.7
points allowed per game: 30.1

...
```

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

---

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
