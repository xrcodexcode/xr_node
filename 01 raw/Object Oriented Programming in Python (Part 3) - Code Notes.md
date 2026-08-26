# Object Oriented Programming in Python (Part 3) - Exhaustive Code Notes

## Chapter 16: Classes & Objects

### Basic Class Definition & Object Creation

```python
# Blueprint Analogy: Class is a blueprint (like a shoe design), Object is the actual product

class Shoes:
    pass

# Creating object (instance)
nike = Shoes()
puma = Shoes()

print(type(nike))  # <class '__main__.Shoes'>
```

### Class with Attributes

```python
class Shoes:
    brand = "Nike"
    color = "White"
    price = 2000

nike = Shoes()
print(nike.brand)   # Nike
print(nike.color)   # White
print(nike.price)   # 2000

puma = Shoes()
puma.brand = "Puma"
puma.color = "Black"
puma.price = 1500

print(puma.brand)   # Puma
print(puma.color)   # Black
print(puma.price)   # 1500

# Nike still has original values
print(nike.brand)   # Nike
print(nike.color)   # White
```

### Class with Methods

```python
class Shoes:
    brand = "Nike"
    color = "White"

    def show_details(self):
        print(f"Brand: {self.brand}")
        print(f"Color: {self.color}")

nike = Shoes()
nike.show_details()
# Brand: Nike
# Color: White

puma = Shoes()
puma.brand = "Puma"
puma.color = "Black"
puma.show_details()
# Brand: Puma
# Color: Black
```

---

## Chapter 17: Constructors (`__init__` & `self`)

### Basic Constructor

```python
class Student:
    def __init__(self):
        self.name = "Akarsh"
        self.age = 24
        self.roll = 1

s1 = Student()
print(s1.name)   # Akarsh
print(s1.age)    # 24
print(s1.roll)   # 1
```

### Constructor with Parameters

```python
class Student:
    def __init__(self, name, age, roll):
        self.name = name
        self.age = age
        self.roll = roll

s1 = Student("Akarsh", 24, 1)
s2 = Student("Harsh", 25, 2)

print(s1.name)    # Akarsh
print(s1.age)     # 24
print(s2.name)    # Harsh
print(s2.age)     # 25
```

### Methods with Constructor Data

```python
class Student:
    def __init__(self, name, age, roll):
        self.name = name
        self.age = age
        self.roll = roll

    def show_details(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Roll: {self.roll}")

s1 = Student("Akarsh", 24, 1)
s1.show_details()

# Output:
# Name: Akarsh
# Age: 24
# Roll: 1
```

### Multiple Objects from Same Class

```python
class Student:
    def __init__(self, name, age, roll):
        self.name = name
        self.age = age
        self.roll = roll

    def show_details(self):
        print(f"Name: {self.name}, Age: {self.age}, Roll: {self.roll}")

s1 = Student("Akarsh", 24, 1)
s2 = Student("Harsh", 25, 2)
s3 = Student("Sarthak", 23, 3)

s1.show_details()  # Name: Akarsh, Age: 24, Roll: 1
s2.show_details()  # Name: Harsh, Age: 25, Roll: 2
s3.show_details()  # Name: Sarthak, Age: 23, Roll: 3
```

### Saving Objects to Variables

```python
class Student:
    def __init__(self, name, age, roll):
        self.name = name
        self.age = age
        self.roll = roll

    def show_details(self):
        print(f"Name: {self.name}, Age: {self.age}, Roll: {self.roll}")

s1 = Student("Akarsh", 24, 1)
s2 = Student("Harsh", 25, 2)
s3 = Student("Sarthak", 23, 3)

# Store in dictionary
students = {
    1: s1,
    2: s2,
    3: s3
}

# Access via roll number
students[1].show_details()  # Name: Akarsh, Age: 24, Roll: 1
students[2].show_details()  # Name: Harsh, Age: 25, Roll: 2
```

---

## Chapter 18: Access Modifiers

### Public Attributes

```python
class Student:
    def __init__(self, name, age):
        self.name = name      # Public
        self.age = age        # Public

s1 = Student("Akarsh", 24)
print(s1.name)   # Akarsh (accessible)
print(s1.age)    # 24 (accessible)
```

### Protected Attributes (single underscore `_`)

```python
class Student:
    def __init__(self, name, age):
        self._name = name     # Protected
        self._age = age       # Protected

s1 = Student("Akarsh", 24)
print(s1._name)   # Akarsh (accessible but convention says don't)
print(s1._age)    # 24 (accessible but convention says don't)
```

### Private Attributes (double underscore `__`)

```python
class Student:
    def __init__(self, name, age):
        self.__name = name    # Private
        self.__age = age      # Private

s1 = Student("Akarsh", 24)
# print(s1.__name)  # Error: 'Student' object has no attribute '__name'
# print(s1.__age)   # Error: 'Student' object has no attribute '__age'

# Name mangling: Python internally renames __name to _Student__name
print(s1._Student__name)  # Akarsh (not recommended)
print(s1._Student__age)   # 24 (not recommended)
```

---

## Chapter 19: Encapsulation

### Encapsulation with Getter & Setter

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance    # Private

    # Getter
    def get_balance(self):
        return self.__balance

    # Setter
    def set_balance(self, new_balance):
        if new_balance >= 0:
            self.__balance = new_balance
        else:
            print("Invalid balance")

acc = BankAccount(1000)
print(acc.get_balance())    # 1000

acc.set_balance(5000)
print(acc.get_balance())    # 5000

acc.set_balance(-100)       # Invalid balance
print(acc.get_balance())    # 5000 (unchanged)
```

### Encapsulation with Validation

```python
class Student:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def get_name(self):
        return self.__name

    def set_name(self, new_name):
        if len(new_name) > 0:
            self.__name = new_name
        else:
            print("Name cannot be empty")

    def get_age(self):
        return self.__age

    def set_age(self, new_age):
        if new_age > 0 and new_age < 150:
            self.__age = new_age
        else:
            print("Invalid age")

s1 = Student("Akarsh", 24)
print(s1.get_name())   # Akarsh

s1.set_name("")
# Name cannot be empty

s1.set_name("Harsh")
print(s1.get_name())   # Harsh

s1.set_age(200)
# Invalid age
```

---

## Chapter 20: Inheritance

### Single Inheritance

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        print("This animal makes a sound")

class Human(Animal):
    def speak(self):
        print(f"{self.name} speaks Human language")

h1 = Human("Akarsh")
h1.sound()    # This animal makes a sound (inherited)
h1.speak()    # Akarsh speaks Human language (own method)
print(h1.name)  # Akarsh (inherited attribute)
```

### Using `super()` to Call Parent Constructor

```python
class Animal:
    def __init__(self, name):
        self.name = name

class Human(Animal):
    def __init__(self, name, language):
        super().__init__(name)  # Call parent constructor
        self.language = language

    def speak(self):
        print(f"{self.name} speaks {self.language}")

h1 = Human("Akarsh", "Hindi")
h1.speak()    # Akarsh speaks Hindi
print(h1.name)     # Akarsh
print(h1.language) # Hindi
```

### Parent & Child Both Have `__init__`

```python
class Animal:
    def __init__(self, name):
        self.name = name
        print(f"Animal init called: {self.name}")

class Human(Animal):
    def __init__(self, name, language):
        super().__init__(name)
        self.language = language
        print(f"Human init called: {self.name}")

h1 = Human("Akarsh", "Hindi")
# Animal init called: Akarsh
# Human init called: Akarsh

print(h1.name)      # Akarsh
print(h1.language)  # Hindi
```

### Accessing Parent Methods

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating")

class Dog(Animal):
    def bark(self):
        print(f"{self.name} is barking")

d1 = Dog("Buddy")
d1.eat()    # Buddy is eating (inherited)
d1.bark()   # Buddy is barking (own)
```

### Multilevel Inheritance

```python
class A:
    def __init__(self, name):
        self.name = name

    def show_a(self):
        print(f"A: {self.name}")

class B(A):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

    def show_b(self):
        print(f"B: {self.name}, Age: {self.age}")

class C(B):
    def __init__(self, name, age, roll):
        super().__init__(name, age)
        self.roll = roll

    def show_c(self):
        print(f"C: {self.name}, Age: {self.age}, Roll: {self.roll}")

c1 = C("Akarsh", 24, 1)
c1.show_a()   # A: Akarsh
c1.show_b()   # B: Akarsh, Age: 24
c1.show_c()   # C: Akarsh, Age: 24, Roll: 1
```

### Multiple Inheritance

```python
class Father:
    def __init__(self):
        self.eye_color = "Brown"

    def show_father(self):
        print(f"Eye color: {self.eye_color}")

class Mother:
    def __init__(self):
        self.hair_color = "Black"

    def show_mother(self):
        print(f"Hair color: {self.hair_color}")

class Child(Father, Mother):
    def __init__(self):
        Father.__init__(self)
        Mother.__init__(self)

    def show_child(self):
        print(f"Eye: {self.eye_color}, Hair: {self.hair_color}")

c1 = Child()
c1.show_child()    # Eye: Brown, Hair: Black
c1.show_father()   # Eye color: Brown
c1.show_mother()   # Hair color: Black
```

### Method Resolution Order (MRO)

```python
class A:
    def show(self):
        print("A")

class B(A):
    def show(self):
        print("B")

class C(A):
    def show(self):
        print("C")

class D(B, C):
    pass

d1 = D()
d1.show()   # B (B comes first in MRO)

# Check MRO
print(D.__mro__)
# (<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)

print(D.mro())
# Same as above
```

### MRO with Complex Hierarchy

```python
class A:
    def show(self):
        print("A")

class B(A):
    def show(self):
        print("B")

class C(A):
    def show(self):
        print("C")

class D(B, C):
    pass

class E(C, B):
    pass

d1 = D()
d1.show()   # B (B before C)

e1 = E()
e1.show()   # C (C before B)

print(D.__mro__)  # D -> B -> C -> A -> object
print(E.__mro__)  # E -> C -> B -> A -> object
```

---

## Chapter 21: Method Overriding

### Basic Method Overriding

```python
class Animal:
    def sound(self):
        print("This animal makes a sound")

class Dog(Animal):
    def sound(self):    # Overriding parent method
        print("Dog barks: Woof Woof")

class Cat(Animal):
    def sound(self):    # Overriding parent method
        print("Cat meows: Meow Meow")

a1 = Animal()
a1.sound()   # This animal makes a sound

d1 = Dog()
d1.sound()   # Dog barks: Woof Woof

c1 = Cat()
c1.sound()   # Cat meows: Meow Meow
```

### Overriding with `super()`

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        print(f"{self.name} makes a sound")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

    def sound(self):
        super().sound()  # Call parent method
        print(f"{self.name} also barks")

d1 = Dog("Buddy", "Labrador")
d1.sound()
# Buddy makes a sound
# Buddy also barks
```

---

## Chapter 22: Polymorphism

### Same Method Name, Different Behavior

```python
class Dog:
    def sound(self):
        print("Dog barks")

class Cat:
    def sound(self):
        print("Cat meows")

class Bird:
    def sound(self):
        print("Bird chirps")

# Polymorphism: same method call, different behavior
animals = [Dog(), Cat(), Bird()]

for animal in animals:
    animal.sound()

# Dog barks
# Cat meows
# Bird chirps
```

### Polymorphism with Function

```python
class Dog:
    def sound(self):
        return "Dog barks"

class Cat:
    def sound(self):
        return "Cat meows"

def make_sound(animal):
    print(animal.sound())

make_sound(Dog())   # Dog barks
make_sound(Cat())   # Cat meows
```

### Duck Typing (Polymorphism)

```python
# Python uses duck typing: if it behaves like a duck, it's a duck
# Same operator works differently on different types

# String + String = Concatenation
print("Hello" + " " + "World")   # Hello World

# List + List = Concatenation
print([1, 2, 3] + [4, 5, 6])    # [1, 2, 3, 4, 5, 6]

# Int + Int = Addition
print(5 + 3)                      # 8
```

### Polymorphism in Practice

```python
class Student:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Student: {self.name}"

class Teacher:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return f"Teacher: {self.name}"

# Polymorphism: same function works with different types
def print_info(person):
    print(person)

print_info(Student("Akarsh"))   # Student: Akarsh
print_info(Teacher("Harsh"))    # Teacher: Harsh
```

---

## Chapter 23: Abstraction

### Abstract Class with `abc` Module

```python
from abc import ABC, abstractmethod

class Animal(ABC):    # Abstract Base Class
    @abstractmethod
    def sound(self):  # Abstract method
        pass

    @abstractmethod
    def eat(self):    # Abstract method
        pass

# a1 = Animal()  # Error: Can't instantiate abstract class

class Dog(Animal):
    def sound(self):
        return "Dog barks"

    def eat(self):
        return "Dog eats bones"

class Cat(Animal):
    def sound(self):
        return "Cat meows"

    def eat(self):
        return "Cat eats fish"

d1 = Dog()
print(d1.sound())  # Dog barks
print(d1.eat())    # Dog eats bones

c1 = Cat()
print(c1.sound())  # Cat meows
print(c1.eat())    # Cat eats fish
```

### Abstract Class with Some Implemented Methods

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

    # Concrete method (implemented in abstract class)
    def describe(self):
        print(f"Area: {self.area()}, Perimeter: {self.perimeter()}")

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

    def perimeter(self):
        return 2 * 3.14 * self.radius

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)

c1 = Circle(5)
c1.describe()  # Area: 78.5, Perimeter: 31.4

r1 = Rectangle(4, 6)
r1.describe()  # Area: 24, Perimeter: 20
```

### Abstract Class for Email Validation (Project Pattern)

```python
from abc import ABC, abstractmethod

class Persons(ABC):
    @abstractmethod
    def get_roles(self):
        pass

    @abstractmethod
    def register(self):
        pass

    @abstractmethod
    def show_details(self):
        pass

    @staticmethod
    def validate_email(email):
        if "@" in email and "." in email:
            return True
        else:
            return False

class Student(Persons):
    def get_roles(self):
        return "Student"

    def register(self):
        name = input("Tell your name: ")
        age = int(input("Tell your age: "))
        email = input("Tell your mail: ")
        roll_number = input("Tell your roll number: ")

        if not Persons.validate_email(email):
            print("Invalid email")
            return

        # ... rest of registration logic

    def show_details(self):
        pass

class Teacher(Persons):
    def get_roles(self):
        return "Teacher"

    def register(self):
        name = input("Tell your name: ")
        age = int(input("Tell your age: "))
        email = input("Tell your mail: "))
        employee_id = input("Tell your employee ID: ")
        subject = input("Tell your subject: ")

        if not Persons.validate_email(email):
            print("Invalid email")
            return

        # ... rest of registration logic

    def show_details(self):
        pass
```

---

## Chapter 24: Dunder / Magic Methods

### `__str__` Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"Student({self.name}, {self.age})"

s1 = Student("Akarsh", 24)
print(s1)         # Student(Akarsh, 24)
print(str(s1))    # Student(Akarsh, 24)
```

### `__repr__` Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"Student('{self.name}', {self.age})"

    def __str__(self):
        return f"{self.name}, age {self.age}"

s1 = Student("Akarsh", 24)
print(s1)       # Akarsh, age 24 (uses __str__)
print(repr(s1)) # Student('Akarsh', 24) (uses __repr__)
```

### `__add__` Method (Operator Overloading)

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(4, 5)
v3 = v1 + v2   # Calls v1.__add__(v2)

print(v3)       # (6, 8)
print(v1 + v2)  # (6, 8)
```

### `__len__` Method

```python
class MyList:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    def __len__(self):
        return len(self.items)

    def __str__(self):
        return str(self.items)

lst = MyList()
lst.add(1)
lst.add(2)
lst.add(3)

print(len(lst))   # 3 (calls __len__)
print(lst)        # [1, 2, 3]
```

### `__eq__` Method

```python
class Student:
    def __init__(self, name, roll):
        self.name = name
        self.roll = roll

    def __eq__(self, other):
        return self.roll == other.roll

s1 = Student("Akarsh", 1)
s2 = Student("Harsh", 1)
s3 = Student("Sarthak", 2)

print(s1 == s2)   # True (same roll)
print(s1 == s3)   # False (different roll)
```

### `__lt__` Method (Less Than)

```python
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def __lt__(self, other):
        return self.marks < other.marks

    def __str__(self):
        return f"{self.name}: {self.marks}"

s1 = Student("Akarsh", 90)
s2 = Student("Harsh", 75)
s3 = Student("Sarthak", 85)

print(s1 < s2)   # False (90 < 75 is False)
print(s2 < s1)   # True (75 < 90 is True)

# Sorting using __lt__
students = [s1, s2, s3]
students.sort()   # Uses __lt__
for s in students:
    print(s)
# Harsh: 75
# Sarthak: 85
# Akarsh: 90
```

### `__contains__` Method

```python
class MyCollection:
    def __init__(self, items):
        self.items = items

    def __contains__(self, item):
        return item in self.items

    def __str__(self):
        return str(self.items)

coll = MyCollection([1, 2, 3, 4, 5])
print(3 in coll)    # True (calls __contains__)
print(6 in coll)    # False
```

---

## Chapter 25: `@property` Decorator

### Basic `@property` Usage

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self._age = age    # Convention: protected

    @property
    def age(self):
        print("Getting age")
        return self._age

    @age.setter
    def age(self, value):
        if value > 0 and value < 150:
            self._age = value
        else:
            print("Invalid age")

s1 = Student("Akarsh", 24)
print(s1.age)     # Getting age \n 24

s1.age = 25       # Uses setter
print(s1.age)     # Getting age \n 25

s1.age = -5       # Invalid age
print(s1.age)     # Getting age \n 25 (unchanged)
```

### `@property` for Computed Values

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value > 0:
            self._radius = value
        else:
            print("Radius must be positive")

    @property
    def area(self):
        return 3.14 * self._radius ** 2

    @property
    def perimeter(self):
        return 2 * 3.14 * self._radius

c1 = Circle(5)
print(c1.radius)     # 5
print(c1.area)       # 78.5
print(c1.perimeter)  # 31.4

c1.radius = 10
print(c1.area)       # 314.0
```

### `@property` for Read-Only Attributes

```python
class Student:
    def __init__(self, name, roll):
        self.name = name
        self._roll = roll

    @property
    def roll(self):
        return self._roll

    # No setter = read-only property

s1 = Student("Akarsh", 1)
print(s1.roll)    # 1
# s1.roll = 2     # Error: can't set attribute
```

### `@property` for Full Name

```python
class Person:
    def __init__(self, first_name, last_name):
        self._first_name = first_name
        self._last_name = last_name

    @property
    def full_name(self):
        return f"{self._first_name} {self._last_name}"

    @full_name.setter
    def full_name(self, value):
        parts = value.split()
        self._first_name = parts[0]
        self._last_name = parts[1] if len(parts) > 1 else ""

p1 = Person("Akarsh", "Vyas")
print(p1.full_name)    # Akarsh Vyas

p1.full_name = "Harsh Kumar"
print(p1._first_name)  # Harsh
print(p1._last_name)   # Kumar
```

---

## Chapter 26: map(), filter(), reduce()

### `map()` Function

```python
# map applies a function to all elements
numbers = [1, 2, 3, 4, 5]

# Using map with lambda
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)   # [2, 4, 6, 8, 10]

# Using map with function
def square(x):
    return x ** 2

squared = list(map(square, numbers))
print(squared)   # [1, 4, 9, 16, 25]

# map with strings
names = ["akarsh", "harsh", "sarthak"]
upper_names = list(map(str.upper, names))
print(upper_names)   # ['AKARSH', 'HARSH', 'SARTHAK']
```

### `filter()` Function

```python
# filter keeps elements that return True
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter even numbers
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)   # [2, 4, 6, 8, 10]

# Filter odd numbers
odds = list(filter(lambda x: x % 2 != 0, numbers))
print(odds)    # [1, 3, 5, 7, 9]

# Filter with function
def is_positive(x):
    return x > 0

values = [-5, -3, 0, 2, 7, -1, 8]
positives = list(filter(is_positive, values))
print(positives)   # [2, 7, 8]

# Filter strings
names = ["Akarsh", "", "Harsh", "", "Sarthak"]
non_empty = list(filter(lambda x: len(x) > 0, names))
print(non_empty)   # ['Akarsh', 'Harsh', 'Sarthak']
```

### `reduce()` Function

```python
from functools import reduce

# reduce applies function cumulatively
numbers = [1, 2, 3, 4, 5]

# Sum of all elements
total = reduce(lambda a, b: a + b, numbers)
print(total)   # 15 ((1+2)+3)+4)+5

# Product of all elements
product = reduce(lambda a, b: a * b, numbers)
print(product)   # 120 (((1*2)*3)*4)*5

# Find maximum
maximum = reduce(lambda a, b: a if a > b else b, numbers)
print(maximum)   # 5

# Find minimum
minimum = reduce(lambda a, b: a if a < b else b, numbers)
print(minimum)   # 1
```

### Combined map, filter, reduce

```python
from functools import reduce

marks = [45, 67, 89, 23, 56, 78, 91, 34]

# Filter passed students (marks >= 40)
passed = list(filter(lambda x: x >= 40, marks))
print(passed)   # [45, 67, 89, 56, 78, 91]

# Map to add grace marks (5)
grace_marks = list(map(lambda x: x + 5, passed))
print(grace_marks)   # [50, 72, 94, 61, 83, 96]

# Reduce to find average
average = reduce(lambda a, b: a + b, grace_marks) / len(grace_marks)
print(average)   # 76.0
```

---

## Chapter 27: zip() Function

### Basic `zip()` Usage

```python
names = ["Akarsh", "Harsh", "Sarthak"]
marks = [90, 42, 12]

# zip combines multiple lists
zipped = list(zip(names, marks))
print(zipped)
# [('Akarsh', 90), ('Harsh', 42), ('Sarthak', 12)]
```

### `zip()` with Different Lengths

```python
names = ["Akarsh", "Harsh", "Sarthak", "Vedant"]
marks = [90, 42, 12, 6, 60]  # Extra element

# zip stops at shortest list
zipped = list(zip(names, marks))
print(zipped)
# [('Akarsh', 90), ('Harsh', 42), ('Sarthak', 12), ('Vedant', 6)]
# 60 is ignored because names has only 4 elements
```

### `zip()` for Dictionary Creation

```python
keys = ["name", "age", "city"]
values = ["Akarsh", 24, "Delhi"]

# Create dictionary from zipped pairs
student_dict = dict(zip(keys, values))
print(student_dict)
# {'name': 'Akarsh', 'age': 24, 'city': 'Delhi'}
```

### `zip()` in Loop

```python
names = ["Akarsh", "Harsh", "Sarthak"]
marks = [90, 42, 12]
grades = ["A", "B", "F"]

# Iterate over multiple lists simultaneously
for name, mark, grade in zip(names, marks, grades):
    print(f"{name}: {mark} marks, Grade: {grade}")

# Akarsh: 90 marks, Grade: A
# Harsh: 42 marks, Grade: B
# Sarthak: 12 marks, Grade: F
```

---

## Chapter 28: Generators & yield

### Basic Generator

```python
def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()
print(next(gen))   # 1
print(next(gen))   # 2
print(next(gen))   # 3
# print(next(gen))  # StopIteration error
```

### Generator with Loop

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(5):
    print(num, end=" ")
# 5 4 3 2 1
```

### Generator Expression

```python
# List comprehension (creates full list in memory)
squares_list = [x**2 for x in range(10)]

# Generator expression (creates generator, memory efficient)
squares_gen = (x**2 for x in range(10))

print(type(squares_gen))   # <class 'generator'>

for sq in squares_gen:
    print(sq, end=" ")
# 0 1 4 9 16 25 36 49 64 81
```

### Generator for Large Data

```python
def read_large_file(file_path):
    with open(file_path, 'r') as f:
        for line in f:
            yield line.strip()

# Memory efficient: loads one line at a time
for line in read_large_file("large_file.txt"):
    process(line)
```

---

## Chapter 29: Lambda Functions

### Basic Lambda

```python
# Regular function
def add(a, b):
    return a + b

# Lambda equivalent
add_lambda = lambda a, b: a + b

print(add(5, 3))          # 8
print(add_lambda(5, 3))   # 8
```

### Lambda with One Argument

```python
square = lambda x: x ** 2
print(square(5))   # 25

double = lambda x: x * 2
print(double(5))   # 10
```

### Lambda with Conditional

```python
check_even = lambda x: "Even" if x % 2 == 0 else "Odd"
print(check_even(4))   # Even
print(check_even(7))   # Odd
```

### Lambda in map/filter/sorted

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map with lambda
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)   # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# filter with lambda
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)     # [2, 4, 6, 8, 10]

# sorted with lambda key
students = [("Akarsh", 90), ("Harsh", 75), ("Sarthak", 85)]
sorted_students = sorted(students, key=lambda x: x[1])
print(sorted_students)
# [('Harsh', 75), ('Sarthak', 85), ('Akarsh', 90)]
```

---

## Chapter 30: List/Set/Dict Comprehensions

### List Comprehension

```python
# Basic
squares = [x**2 for x in range(10)]
print(squares)   # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [x for x in range(20) if x % 2 == 0]
print(evens)   # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# With if-else
labels = ["Even" if x % 2 == 0 else "Odd" for x in range(5)]
print(labels)   # ['Even', 'Odd', 'Even', 'Odd', 'Even']

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)   # [[0, 0, 0], [0, 1, 2], [0, 2, 4]]
```

### Set Comprehension

```python
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique_squares = {x**2 for x in numbers}
print(unique_squares)   # {16, 1, 4, 9} (unique, unordered)
```

### Dict Comprehension

```python
# Basic
squares_dict = {x: x**2 for x in range(5)}
print(squares_dict)   # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# From two lists
names = ["Akarsh", "Harsh", "Sarthak"]
marks = [90, 75, 85]
student_dict = {name: mark for name, mark in zip(names, marks)}
print(student_dict)
# {'Akarsh': 90, 'Harsh': 75, 'Sarthak': 85}

# With condition
passed = {name: mark for name, mark in zip(names, marks) if mark >= 80}
print(passed)   # {'Akarsh': 90, 'Sarthak': 85}
```

---

## Chapter 31: *args and **kwargs

### `*args` (Variable Positional Arguments)

```python
def add_all(*args):
    total = 0
    for num in args:
        total += num
    return total

print(add_all(1, 2, 3))         # 6
print(add_all(1, 2, 3, 4, 5))   # 15
```

### `**kwargs` (Variable Keyword Arguments)

```python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Akarsh", age=24, city="Delhi")
# name: Akarsh
# age: 24
# city: Delhi
```

### Both `*args` and `**kwargs`

```python
def func(*args, **kwargs):
    print(f"args: {args}")
    print(f"kwargs: {kwargs}")

func(1, 2, 3, name="Akarsh", age=24)
# args: (1, 2, 3)
# kwargs: {'name': 'Akarsh', 'age': 24}
```

---

## Chapter 32: Recursion

### Basic Recursion

```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))   # 120 (5*4*3*2*1)
print(factorial(0))   # 1
```

### Fibonacci Recursion

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
# 0 1 1 2 3 5 8 13 21 34
```

### Recursion with String Reverse

```python
def reverse_string(s):
    if len(s) <= 1:
        return s
    return reverse_string(s[1:]) + s[0]

print(reverse_string("hello"))   # olleh
print(reverse_string("a"))       # a
```

---

## Chapter 33: Decorators

### Basic Decorator

```python
def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Before function call
# Hello!
# After function call
```

### Decorator with Arguments

```python
def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Akarsh")
# Hello, Akarsh!
# Hello, Akarsh!
# Hello, Akarsh!
```

### Decorator for Timing

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    print("Function completed")

slow_function()
# Function completed
# slow_function took 1.0012 seconds
```

---

## Chapter 34: Student Management System Project

### Project Structure

```
student_management/
├── main.py
├── school_data.json
└── app.py (Streamlit UI)
```

### Complete Project Code

```python
import json
from abc import ABC, abstractmethod
from pathlib import Path

# Database setup
DATABASE = "school_data.json"

# Dummy data (in-memory copy)
data = {
    "students": [],
    "teachers": []
}

# Load existing database if exists
if Path(DATABASE).exists():
    with open(DATABASE, "r") as f:
        content = f.read()
    if content:
        data = json.loads(content)

# Abstract Base Class
class Persons(ABC):
    @abstractmethod
    def get_roles(self):
        pass

    @abstractmethod
    def register(self):
        pass

    @abstractmethod
    def show_details(self):
        pass

    @staticmethod
    def validate_email(email):
        if "@" in email and "." in email:
            return True
        else:
            return False

# Student Class
class Student(Persons):
    def get_roles(self):
        return "Student"

    def register(self):
        name = input("Tell your name: ")
        age = int(input("Tell your age: "))
        email = input("Tell your mail: ")
        roll_number = input("Tell your roll number: ")

        # Validate email
        if not Persons.validate_email(email):
            print("Invalid email")
            return

        # Check if roll number already exists
        for i in data["students"]:
            if i["roll_number"] == roll_number:
                print("Student already exists")
                return

        # Append student data
        data["students"].append({
            "name": name,
            "age": age,
            "email": email,
            "roll_number": roll_number,
            "grades": {}
        })

        # Save to file
        save()
        print(f"Student {name} registered successfully")

    def add_grades(self):
        roll_number = input("Tell the roll number: ")
        subject = input("Tell the subject: ")
        marks = float(input("Tell the marks: "))

        for i in data["students"]:
            if i["roll_number"] == roll_number:
                i["grades"][subject] = marks
                save()
                print("Grade added successfully")
                return

        print("Student not found")

    def show_details(self):
        roll_number = input("Tell the roll number: ")

        for s in data["students"]:
            if s["roll_number"] == roll_number:
                grades = s["grades"]
                avg = sum(grades.values()) / len(grades) if grades else 0
                print(f"\nName: {s['name']}")
                print(f"Roll Number: {s['roll_number']}")
                print(f"Grades: {s['grades']}")
                print(f"Average: {avg:.2f}")
                return

        print("Student not found")

    def show_details(self):
        pass

# Teacher Class
class Teacher(Persons):
    def get_roles(self):
        return "Teacher"

    def register(self):
        name = input("Tell your name: ")
        age = int(input("Tell your age: "))
        email = input("Tell your mail: ")
        employee_id = input("Tell your employee ID: ")
        subject = input("Tell your subject: ")

        # Validate email
        if not Persons.validate_email(email):
            print("Invalid email")
            return

        # Check if employee ID already exists
        for i in data["teachers"]:
            if i["employee_id"] == employee_id:
                print("Teacher already exists")
                return

        # Append teacher data
        data["teachers"].append({
            "name": name,
            "age": age,
            "email": email,
            "employee_id": employee_id,
            "subject": subject
        })

        # Save to file
        save()
        print(f"Teacher {name} registered successfully")

    def show_details(self):
        employee_id = input("Tell the employee ID: ")

        for t in data["teachers"]:
            if t["employee_id"] == employee_id:
                print(f"\nName: {t['name']}")
                print(f"Subject: {t['subject']}")
                print(f"Employee ID: {t['employee_id']}")
                return

        print("Teacher not found")

# Save function
def save():
    with open(DATABASE, "w") as f:
        json.dump(data, f, indent=4)

# Main Menu
while True:
    print("\n--- Student Management System ---")
    print("1. Register Student")
    print("2. Register Teacher")
    print("3. Add Grades")
    print("4. Show Student Details")
    print("5. Show Teacher Details")
    print("6. Exit")

    choice = input("\nPlease tell your choice: ")

    if choice == "1":
        s = Student()
        s.register()
    elif choice == "2":
        t = Teacher()
        t.register()
    elif choice == "3":
        s = Student()
        s.add_grades()
    elif choice == "4":
        s = Student()
        s.show_details()
    elif choice == "5":
        t = Teacher()
        t.show_details()
    elif choice == "6":
        break
    else:
        print("Invalid choice")
```

### JSON Database Structure

```json
{
    "students": [
        {
            "name": "Akarsh",
            "age": 24,
            "email": "akarsh@gmail.com",
            "roll_number": "1",
            "grades": {
                "Maths": 90,
                "Science": 85
            }
        },
        {
            "name": "Harsh",
            "age": 23,
            "email": "harsh@gmail.com",
            "roll_number": "2",
            "grades": {}
        }
    ],
    "teachers": [
        {
            "name": "Harsh Bhaiya",
            "age": 25,
            "email": "harsh@gmail.com",
            "employee_id": "1",
            "subject": "Maths"
        }
    ]
}
```

### Streamlit UI (app.py)

```python
import streamlit as st
import json

DATABASE = "school_data.json"

def load_data():
    try:
        with open(DATABASE, "r") as f:
            return json.load(f)
    except:
        return {"students": [], "teachers": []}

def save_data(data):
    with open(DATABASE, "w") as f:
        json.dump(data, f, indent=4)

st.title("Student Management System")

# Sidebar menu
option = st.sidebar.selectbox(
    "Select Option",
    ["Register Student", "Register Teacher", "Add Grades",
     "Show Student Details", "Show Teacher Details"]
)

data = load_data()

if option == "Register Student":
    st.header("Register New Student")
    name = st.text_input("Name")
    age = st.number_input("Age", min_value=1, max_value=100)
    email = st.text_input("Email")
    roll_number = st.text_input("Roll Number")

    if st.button("Register"):
        # Check duplicate roll number
        for s in data["students"]:
            if s["roll_number"] == roll_number:
                st.error("Student with this roll number already exists")
                break
        else:
            if "@" in email and "." in email:
                data["students"].append({
                    "name": name,
                    "age": age,
                    "email": email,
                    "roll_number": roll_number,
                    "grades": {}
                })
                save_data(data)
                st.success(f"Student {name} registered successfully!")
            else:
                st.error("Invalid email")

elif option == "Register Teacher":
    st.header("Register New Teacher")
    name = st.text_input("Name")
    age = st.number_input("Age", min_value=1, max_value=100)
    email = st.text_input("Email")
    employee_id = st.text_input("Employee ID")
    subject = st.text_input("Subject")

    if st.button("Register"):
        for t in data["teachers"]:
            if t["employee_id"] == employee_id:
                st.error("Teacher with this ID already exists")
                break
        else:
            if "@" in email and "." in email:
                data["teachers"].append({
                    "name": name,
                    "age": age,
                    "email": email,
                    "employee_id": employee_id,
                    "subject": subject
                })
                save_data(data)
                st.success(f"Teacher {name} registered successfully!")
            else:
                st.error("Invalid email")

elif option == "Add Grades":
    st.header("Add Grades to Student")
    roll_number = st.text_input("Roll Number")
    subject = st.text_input("Subject")
    marks = st.number_input("Marks", min_value=0.0, max_value=100.0)

    if st.button("Add Grade"):
        for s in data["students"]:
            if s["roll_number"] == roll_number:
                s["grades"][subject] = marks
                save_data(data)
                st.success("Grade added successfully!")
                break
        else:
            st.error("Student not found")

elif option == "Show Student Details":
    st.header("Student Details")
    roll_number = st.text_input("Enter Roll Number")

    if st.button("Show"):
        for s in data["students"]:
            if s["roll_number"] == roll_number:
                st.write(f"**Name:** {s['name']}")
                st.write(f"**Roll Number:** {s['roll_number']}")
                st.write(f"**Grades:** {s['grades']}")
                if s["grades"]:
                    avg = sum(s["grades"].values()) / len(s["grades"])
                    st.write(f"**Average:** {avg:.2f}")
                break
        else:
            st.error("Student not found")

elif option == "Show Teacher Details":
    st.header("Teacher Details")
    employee_id = st.text_input("Enter Employee ID")

    if st.button("Show"):
        for t in data["teachers"]:
            if t["employee_id"] == employee_id:
                st.write(f"**Name:** {t['name']}")
                st.write(f"**Subject:** {t['subject']}")
                st.write(f"**Employee ID:** {t['employee_id']}")
                break
        else:
            st.error("Teacher not found")
```

### Running the Streamlit App

```bash
pip install streamlit
streamlit run app.py
```

---

## Chapter 35: Modules & Packages (Brief Overview)

### Importing Modules

```python
# Import entire module
import math
print(math.pi)   # 3.141592653589793

# Import specific function
from math import sqrt
print(sqrt(16))   # 4.0

# Import with alias
import numpy as np
print(np.array([1, 2, 3]))

# Import all (not recommended)
from math import *
print(pi)   # 3.141592653589793
```

### Creating Your Own Module

```python
# my_module.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b

PI = 3.14159
```

```python
# main.py
import my_module

print(my_module.greet("Akarsh"))   # Hello, Akarsh!
print(my_module.add(5, 3))         # 8
print(my_module.PI)                # 3.14159
```

### Package Structure

```
my_package/
├── __init__.py
├── module1.py
├── module2.py
└── subpackage/
    ├── __init__.py
    └── module3.py
```

```python
# Usage
from my_package import module1
from my_package.subpackage import module3
```
