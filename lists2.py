joyDivision = ["Ian", "Peter", "Steve", "Bernard"]

print(joyDivision)
print(len(joyDivision))

"""howMany = len(joyDivision)

for n in range(len(howMany)):
    print(n)
    if joyDivision[n] == "Ian":
        del joyDivision[n]
        print(len(joyDivision))
        continue
    print(joyDivision[n])"""

"""for name in joyDivision:
    if name == 'Ian':
        joyDivision.remove(name)
        continue
    print(name)"""
i = 0

while i < len(joyDivision):
    if joyDivision[i] == 'Bernard':
        del joyDivision[i]
        continue
    print(joyDivision[i])
    i += 1


print("+++++++++")
print(joyDivision)