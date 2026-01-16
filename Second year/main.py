
while True:
    x = input("Inserisci l/dp: ")
    if x == "l" :
        a = int(input("Inserisci dp: "))
        b = str(input("Inserisci m/cm: "))
        c = int(a * 2)
        print(f"La dp è di {c} {b}")
        break
    elif x == "dp":
        z = int(input("Inserisci l: "))
        b = str(input("Inserisci m/cm: "))
        w = int(z / 2)
        print(f"La dp è di {w} {b}")
        break
    else:
        print("Input non valido, riprova")