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

## Solutions

```py
numbers = [1, 4, 2, 7, 3, 1]

for n in numbers:
    row = ""

    for i in range(n):
        row += "X"
   
    print(row)
```

---

```py
numbers = [1, 4, 2, 7, 3, 1]

for n in numbers:
    for i in range(n):
        print("X", end="")
   
    print()
```

---

```py
numbers = [1, 4, 2, 7, 3, 1]

for n in numbers:
    print("X" * n)
```

There are many ways to solve this problem; that's what makes CS beautiful!
