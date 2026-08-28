# CS-1: Output, Variables, and Input

## Comments

Comments start with a hash `#` symbol and are ignored when the code runs.
Comments are used for two purposes:

Adding notes to pieces of code:

```py
speed_limit = 35  # Speed limit in miles per hour
```

Temporarily disabling pieces of code:

```py
# print("Hello!")
print("Bonjour!")
```

## Calling Print

Python code uses **functions**: instructions that tell Python to perform a
certain task.

We can use the `print` function to print out **strings** (pieces of text).

```py
print("Hello world!")  # Prints `Hello world!`
```

When we use a function to perform a task in our code, programmers say that we
**call** the function.

## Multiple Arguments

The values that we give a function when we call it are known as **arguments**.

Some functions like `print` can accept a flexible number of arguments, separated
by commas `,`. Others require a fixed number of arguments.

If we call print `print` with multiple strings, Python will display these string
together, with a space in between.

```py
print("Hello", "Avery")  # Prints `Hello Avery`
```

## No Arguments

What happens if we call `print` with no arguments?

```py
print()
```

---

It prints an empty line.

## Function Calls and Terminology

**Function**: an instruction that tells our program to perform a certain task.

**Calling** a function: writing the name of a function followed by parentheses,
which tells the computer to perform the action associated with that function.

**Arguments**: zero or more values placed between the parentheses when calling a
function, that provide the function with information on how to perform its task.
Multiple arguments require commas in between.

## Errors

When we write code, we inevitably make mistakes that cause **errors**. Let's
look at some of the common mistakes programmers error messages these mistakes
will generate.

|Term | Definition | |-| | Error | An error occurs when a computer receives
instructions that it can't understand | | Syntax Errors | an error caused by
leaving out or adding extra symbols in code| | Name Errors | an error caused by
an incorrect or misspelled name| | Crash | when a computer encounters an error
while running a program, the computer will typically crash (stop running) the
program |

**Error**: an error occurs when a computer receives instructions that it can't
understand.

**Syntax Error**: an error caused by leaving out or adding extra symbols in
code.

**Name Error**: an error caused by an incorrect or misspelled name.

**Crash**: when a computer encounters an error while running a program, the
computer will typically crash (stop running) the program.

### Issue 1

What's the issue?

```py
print "Hello world!"
```

---

Issue: missing parentheses.

```
  File "/tmp/demo.py", line 1
    print "Hello world!"
    ^^^^^^^^^^^^^^^^^^^^
SyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?
```

### Issue 2

What's the issue?

```py
print(Hello world!)
```

---

Issue: missing quotes.

```
  File "/tmp/demo.py", line 1
    print(Hello world!)
          ^^^^^^^^^^^
SyntaxError: invalid syntax. Perhaps you forgot a comma?
```

### Issue 3

What's the issue?

```py
print("Hello world!)
```

---

Issue: missing closing quote.

```
  File "/tmp/demo.py", line 1
    print("Hello world!)
          ^
SyntaxError: unterminated string literal (detected at line 1)
```

### Issue 4

What's the issue?

```py
Print("Hello world!")
```

---

Issue: incorrect name. Programming languages are picky about spelling and
capitalization.

```
Traceback (most recent call last):
  File "/tmp/demo.py", line 1, in <module>
    Print("Hello world!")
    ^^^^^
NameError: name 'Print' is not defined. Did you mean: 'print'?
```

## Variables

**Variables** give us a way to associate a value with a name. Using variables is
integral to programming.

Do define a variable, we put the name of the variable we're defining on the left
hand side of an `=` sign, and the value we're giving the variable on the right
hand side.

```py
name = "Avery"
print("Hello", name)  # Prints `Hello Avery`
```

## Variables

What will this code print out?

```py
time = "morning"
name = "Avery"
print("Good", time, name)
```

---

```
Good morning Avery
```

## Variable Names

Variable names may contain letters, digits, and underscores (`_`), but may not
start with a digit. Names are case sensitive.

```py
first_name = "Avery"  # OK
first name = "Avery"  # ERROR: names may not contain spaces
1stname = "Avery"     # ERROR: names may not start with a digit
```

## Format Strings

What will this code print out?

```py
time = "morning"
name = "Avery"
print("Good", time, ",", name, "!")
```

---

```
Good morning , Avery !
```

## Format Strings

We can use **format strings** (f-strings) to be more precise about how we
display variables.

```py
time = "morning"
name = "Avery"
print(f"Good {time}, {name}!")  # Prints `Good morning, Avery!`
```

- Variable names
- Printing variables
- Printing variables with format strings
- Errors and debugging
- String input

**Problems**

- Hello (name)!
- Citations: Author. (Year). Title of Book. Publisher.
- Madlibs
