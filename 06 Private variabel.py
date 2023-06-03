class Hero:

    # class variabel
    jumlah = 0 

    def __init__(self, name, health):
        self.name = name
        self.health = health

        # variabel instance private
        self.__private = "private"

        # variabel instance protected
        self._protected = "protected"

lina = Hero("lina",100)

print(lina.__dict__)
lina._protected = "testing"
print(lina.__dict__)
