def calculateIncomeTax(salary):
    personalAllowance = 11850
    basic = 50271
    higher = 125140

    if salary <= personalAllowance:
        print("Your salary isn't elligible to be taxed")
        pass
    elif salary > personalAllowance <= basic:
        print("Your salary will be taxed at the basic rate of 20%")
        tax = (salary - personalAllowance) * 0.2
    elif salary > basic <= higher:
        """print("Your salary will be taxed at the higher rate of 40%")"""
        tax = (basic - personalAllowance) * 0.2
        tax += (salary - basic) * 0.4
    else:
        tax = (basic - personalAllowance) * 0.2
        tax += (higher - basic) * 0.4
        tax += (salary - higher) * 0.45
    return tax



