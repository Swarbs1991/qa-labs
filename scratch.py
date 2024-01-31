def makeFullName(firstName, lastName):
    fullName = firstName + " " + lastName
    return fullName

firstName = input("Enter your first name: ")
lastName = input("Enter your last name: ")

print(makeFullName(firstName, lastName))