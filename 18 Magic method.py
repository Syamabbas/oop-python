class Mangga:

    #magic method
    def __init__(self,nama,jumlah):
        self.nama = nama
        self.jumlah = jumlah
    
    # repr sama dengan str
    def __repr__(self):
        return "Debug: {} dengan jumlah: {}".format(self.nama,self.jumlah)
    
    def __str__(self):
        return "Mangga: {} dengan jumlah: {}".format(self.nama,self.jumlah)
    
    # add (aritmatik) ada multiple, pengurangan dll
    def __add__(self,objek):
        return self.jumlah + objek.jumlah
    
    # dict (harus pakai @property)
    @property
    def __dict__(self):
        return "Objek ini mempunyai nama dan jumlah"

belanja1 = Mangga("arumanis",10)
belanja2 = Mangga("mana lagi",5)
print(repr(belanja1))
print(belanja2)
print(belanja1 + belanja2)
print(belanja1.__dict__)
