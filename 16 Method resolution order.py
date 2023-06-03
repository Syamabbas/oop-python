# Method resolution order yang akan diambil adalah yg pertama

class A:
    def show(self):
        print("Ini adalah show A")

class B:
    def show(self):
        print("Ini adalah show B")

class C(A,B):
    pass

objek = C()
objek.show()