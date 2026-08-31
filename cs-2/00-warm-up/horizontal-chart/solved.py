# Given a list of integers each greater than zero, generate a horizontal bar
# chart where each number `n` is shown as a row column of `X` characters of
# length `n`.
#
# For the numbers [1, 4, 2, 7, 3, 1] the output should be:
#
# X
# XXXX
# XX
# XXXXXXX
# XXX
# X


numbers = [1, 4, 2, 7, 3, 1]

for n in numbers:
    row = ""

    for j in range(n):
        row += "X"

    print(row)


# Alternatives

# numbers = [1, 4, 2, 7, 3, 1]
#
# for i in range(len(numbers)):
#     row = ""
#
#     for j in range(numbers[i]):
#         row += "X"
#
#     print(row)

# for n in numbers:
#     print("X" * n)

# for n in numbers:
#     for j in range(n):
#         print("X", end="")
#
#     print()
