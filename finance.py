import tax

pay = int(input("What's your current salary? "))

print(tax.calculateIncomeTax(pay))

"""emp = [100000, 160000, 200000, 420000]

inctax = list(map(tax.calculateIncomeTax, emp))

print(inctax)"""