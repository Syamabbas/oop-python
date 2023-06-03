class Hero: #template

    def __init__(self, inputName, inputHealth, inputPower, inputArmor):
        # instance variable
        self.name = inputName
        self.health = inputHealth
        self.power = inputPower
        self.armor = inputArmor

hero1 = Hero("Sniper", 100, 10, 4)
hero2 = Hero("Mirana", 100, 15, 1)
hero3 = Hero("ucup", 1000, 100, 0)

print(hero1.__dict__) # munculin semua atribut
print(hero2.name)
print(hero3.armor)