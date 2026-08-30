# Numbers

## Ints and Floats

Numbers in Python come in two main forms: **ints** (integers, aka whole numbers)
and **floats** (floating-point numbers, aka numbers with decimal points).

```py
speed_limit = 35    # An int (a whole number)
temperature = 98.6  # A float (a number with a decimal point)
```

- **Ints**: whole numbers.
- **Floats**: numbers with decimal points.

## Math Operators

| Symbol | Operation      |
| ------ | -------------- |
| `+`    | Addition       |
| `-`    | Subtraction    |
| `*`    | Multiplication |
| `/`    | Division       |
| `//`   | Floor division |
| `**`   | Exponentiation |
| `%`    | Modulo         |

These operators work on ints, floats, or a combination of both.

```py
1 + 2      # 3
1.2 + 5.5  # 6.7
-4 + 0.01  # -3.99
```

## Operator Precedence

These operators follow standard math order of operations, with parentheses used
for grouping.

```py
1 + 2 * 3    # 7
(1 + 2) * 3  # 9
```

## Addition

What value does this expression produce?

```py
7 + 2
```

...

```
9
```

## Subtraction

What value does this expression produce?

```py
7.1 - 2.5
```

...

```
4.6
```

## Multiplication

What value does this expression produce?

```py
7.1 * -2
```

...

```
-14.2
```

## Division

What value does this expression produce?

```py
7 / 2
```

...

```
3.5
```

---

What value does this expression produce?

```py
7 / 7
```

...

Division produces a float!

```
1.0
```

## Floor Division

What value does this expression produce?

```py
7 // 7
```

...

Floor division rounds down to the nearest integer.

```
1
```

---

What value does this expression produce?

```py
7 // 2
```

...

```
3
```

---

What value does this expression produce?

```py
-7 // 2
```

...

Remember that float division rounds _down_, not _towards zero_.

```
-4
```

## Exponentiation

What value does this expression produce?

```py
7**2
```

...

```
49
```

## Modulo

What value does this expression produce?

```py
11 % 2
```

...

The modulo operator in Python computes the remainder using
[floored division](https://en.wikipedia.org/wiki/Modulo#Variants_of_the_definition).

```
1
```

---

What value does this expression produce?

```py
14 % 1
```

...

```
0
```

---

What value does this expression produce?

```py
14 % 2
```

...

```
0
```

---

What value does this expression produce?

```py
14 % 5
```

...

```
4
```

---

What value does this expression produce?

```py
14 % 14
```

...

```
0
```

---

What value does this expression produce?

```py
14 % 20
```

...

```
14
```

## Type Errors

What's the issue?

```py
3 / "4"
```

...

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for /: 'int' and 'str'
```

The division operator expects two numbers, not a number and a string. We're
trying to do division on the wrong **type** of value, and getting a **type
error**.

- **Type**: the kind of value something is (int, float, string, etc).

- **Type Error**: an error caused by using a value of the wrong type.

## Numeric Variables

We can store numbers in variables, and use these variables with math operators.

```py
x = 5
```

What value does this expression produce?

```py
x * 4
```

...

```
20
```

---

```py
x = 5
y = 6
```

What value does this expression produce?

```py
x * y
```

...

```
30
```

## Variables From Variables

We can use existing variables to define new variables.

What will this code print out?

```py
score = 58
bonus = 3
print(score + bonus)
```

...

```
61
```

---

A variable can even be defined using its own old value. Python computes the
right hand side first, then stores the result back in the variable.

What will this code print out?

```py
score = 92
score = score + 5
print(score)
```

...

```
97
```

---

What will this code print out?

```py
x = 2
y = x * 3
print(y)
x = 10
print(y)
```

...

```
6
6
```

Changing `x` after we've defined `y` doesn't change the value of `y`.

## Compound Assignment

Python provides a shorthand for updating a variable based on it's current value.
The two lines below are equivalent.

```py
score = score + 5
score += 5
```

Each math operator has a matching compound assignment operator.

| Symbol | Meaning      |
| ------ | ------------ |
| `+=`   | `x = x + y`  |
| `-=`   | `x = x - y`  |
| `*=`   | `x = x * y`  |
| `/=`   | `x = x / y`  |
| `//=`  | `x = x // y` |
| `**=`  | `x = x ** y` |
| `%=`   | `x = x % y`  |

---

What will this code print out?

```py
count = 3
count += 1
count *= 10
print(count)
```

...

```
40
```

## Numeric Functions

Python provides functions for common numeric tasks.

| Function   | Operation                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| `round(x)` | Round to the nearest whole number (using [banker's rounding](https://en.wikipedia.org/wiki/Rounding#Rounding_half_to_even)) |
| `abs(x)`   | Absolute value (convert negatives to positives)                                                                             |

```py
round(3.7)  # 4
abs(-8)     # 8
```

## Numeric Input

What's the issue with this code?

```py
x = input("x: ")
print(x / 2)
```

```
x: 10
```

...

Issue: `input` always gives us a string, even when the user types digits.

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for /: 'str' and 'int'
```

## Converting Input

The `int` and `float` functions convert a string into a number.

```py
int("12")     # 12
float("1.5")  # 1.5
```

So we wrap our call to `input` in a call to `int`.

```py
x = input("x: ")
print(x / 2)
```

```
x: 10
```

```
5.0
```
