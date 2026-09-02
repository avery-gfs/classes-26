## Recursion

What does this code do?

```py
def hello():
    print("Hello world!")


hello()
```

---

What does this code do?

```py
def hello():
    print("Hello world!")
    hello()


hello()
```

---

What does this code do?

```py
def hello():
    hello()
    print("Hello world!")


hello()
```

---

What does this code do?

```py
def hello(n):
    if n < 10:
        print("Hello world!")
        hello(n + 1)


hello(0)
```

---

What does this code do?

```py
def hello(n):
    if n < 10:
        print("Hello world!")
        hello(n + 1)
    else:
        print("Done")


hello(0)
```

---

What does this code do?

```py
def hello(n):
    if n < 10:
        print("Hello world!")
        hello(n + 1)
        print("Goodbye")


hello(0)
```

## Koan

> To understand recursion, you must first understand recursion.

## Factorial Definition

```txt
factorial(0) = 1
factorial(n) = n * (n - 1) * * 1
```

```txt
factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
```

$n!$ = `factorial(n)`

## Recursive Factorial

```txt
factorial(0) = 1
factorial(n) = n * factorial(n - 1)
```

```txt
factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
```

## Iterative Functions

```py
def factorial(n):
    result = 1

    for i in range(1, n + 1):
        result *= i

    return result


print(factorial(10))  # Prints 3628800
```

## Recursive Functions

```py
def factorial(n):
    if n == 0:
        return 1

    return n * factorial(n - 1)


print(factorial(10))  # Prints 3628800
```

Recursive functions: functions which call themselves

```txt
factorial(10)
10 * factorial(9)
10 * 9 * factorial(8)
10 * 9 * 8 * factorial(7)
10 * 9 * 8 * 7 * factorial(6)
10 * 9 * 8 * 7 * 6 * factorial(5)
10 * 9 * 8 * 7 * 6 * 5 * factorial(4)
10 * 9 * 8 * 7 * 6 * 5 * 4 * factorial(3)
10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * factorial(2)
10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * factorial(1)
10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 * factorial(0)
10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 * 1
```

## Base Case

```py
def factorial(n):
    if n == 0:
        return 1

    return n * factorial(n - 1)


print(factorial(10))  # Prints 3628800
```

Case in which the function doesn't call itself recursively

```txt
0! = 1
```

```py
if n == 0:
    return 1
```

## Recursive Case

```py
def factorial(n):
    if n == 0:
        return 1

    return n * factorial(n - 1)


print(factorial(10))  # Prints 3628800
```

Case in which the function calls itself recursively

```txt
n! = n * (n - 1)!
```

```py
return n * factorial(n - 1)
```

## Visualizing Recursion

https://pythontutor.com/render.html#mode=display

## Recursive Summation

```py
def summation(n):
    if n == 0:
        return 0

    return n + summation(n - 1)


print(summation(10))  # Prints 55
```

```txt
summation(10)
10 + summation(9)
10 + 9 + summation(8)
10 + 9 + 8 + summation(7)
10 + 9 + 8 + 7 + summation(6)
10 + 9 + 8 + 7 + 6 + summation(5)
10 + 9 + 8 + 7 + 6 + 5 + summation(4)
10 + 9 + 8 + 7 + 6 + 5 + 4 + summation(3)
10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + summation(2)
10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + summation(1)
10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + summation(0)
10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0
```

## Fibonacci is Recursive

```txt
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, ...
```

$$
F_0 = 0
$$

$$
F_1 = 1
$$

$$
F_n = F_{n - 1} + F_{n - 2}
$$

![](/assets/fibonacci-tree.png)
