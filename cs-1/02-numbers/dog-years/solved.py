# Write a program that gets two numbers as input from the user:
#
# - Their birth year
# - Their dog's birth year
#
# And calculates:
#
# - The user's age in years
# - The dog's age in years
# - The dog's age in dog-years
#
# Example:
#
# Enter your birth year: 1996
# Enter your dog's birth year: 2016
# Your age (years): 30
# Your dog's age (years): 10
# Your dog's age (dog-years): 70

birthYear = int(input("Enter your birth year: "))
dogBirthYear = int(input("Enter your dog's birth year: "))

age = 2026 - birthYear
dogAge = 2026 - dogBirthYear

print(f"Your age (years): {age}")
print(f"Your dog's age (years): {dogAge}")
print(f"Your dog's age (dog-years): {dogAge * 7}")
