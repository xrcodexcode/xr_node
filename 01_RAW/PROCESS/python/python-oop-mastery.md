---
id: 942861ed-0f81-4b72-8869-7cba14d3f3f2
title: Python OOP Mastery
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: []
tags: [implementation]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: []
schema_version: 4
---

Object-oriented programming at a professional level is absolutely critical for ML engineering. Every modern ML framework relies heavily on OOP: PyTorch models are defined as classes inheriting from `nn.Module`, Scikit-Learn estimators use standard OOP interfaces (`fit`, `predict`), and data pipelines are built as iterable dataset objects. Mastering Python OOP allows you to write modular, reusable, and scalable ML infrastructure.

## 1. Classes Refresher

A class is a blueprint for creating objects. It defines data (attributes) and behavior (methods).

> 🤖 **ML Connection**: Think of a class as a model architecture template, and an object (instance) as an initialized model with specific weights.

```python
class ModelTrainer:
    # Class attribute - shared across ALL instances
    framework = "PyTorch"

    def __init__(self, learning_rate: float, epochs: int):
        # Instance attributes - unique to each instance
        self.learning_rate = learning_rate
        self.epochs = epochs
        self.is_trained = False  # State tracking

    def train(self, data):
        """Instance method - operates on the instance's state."""
        print(f"Training for {self.epochs} epochs with LR={self.learning_rate}...")
        self.is_trained = True
        return {"loss": 0.05}

# Usage
trainer1 = ModelTrainer(learning_rate=0.001, epochs=10)
trainer2 = ModelTrainer(learning_rate=0.01, epochs=5)

print(trainer1.framework)          # Output: PyTorch
print(ModelTrainer.framework)      # Output: PyTorch
print(trainer1.is_trained)         # Output: False
trainer1.train([1, 2, 3])          # Output: Training for 10 epochs with LR=0.001...
print(trainer1.is_trained)         # Output: True
```

## 2. Dunder/Magic Methods

Dunder (Double UNDERscore) methods allow your objects to interact with built-in Python syntax and operators. This is how you make your custom objects act like native Python types.

> 🎯 **Interview Tip**: Interviewers often ask how to make an object iterable or indexable. Knowing `__getitem__` and `__len__` is crucial for custom PyTorch Datasets.

```python
class Vector:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y

    def __str__(self) -> str:
        """User-friendly string representation (used by print)."""
        return f"Vector({self.x}, {self.y})"

    def __repr__(self) -> str:
        """Developer-friendly string representation (used in interactive shells)."""
        return f"Vector(x={self.x}, y={self.y})"

    def __add__(self, other: 'Vector') -> 'Vector':
        """Allows using the + operator."""
        if not isinstance(other, Vector):
            return NotImplemented
        return Vector(self.x + other.x, self.y + other.y)

    def __eq__(self, other: 'Vector') -> bool:
        """Allows using the == operator."""
        return self.x == other.x and self.y == other.y

    def __lt__(self, other: 'Vector') -> bool:
        """Allows using the < operator. Useful for sorting."""
        return (self.x**2 + self.y**2) < (other.x**2 + other.y**2)

    def __hash__(self) -> int:
        """Makes the object hashable (usable as a dictionary key or in a set)."""
        return hash((self.x, self.y))

    def __call__(self, scalar: float):
        """Makes the object callable like a function!"""
        return Vector(self.x * scalar, self.y * scalar)

v1 = Vector(2, 3)
v2 = Vector(4, 1)

print(v1)                  # Output: Vector(2, 3) (calls __str__)
print(v1 + v2)             # Output: Vector(6, 4) (calls __add__)
print(v1 == Vector(2, 3))  # Output: True (calls __eq__)
print(v1 < v2)             # Output: True (calls __lt__, 13 < 17)

# Callable object
v3 = v1(10)                # Output: Vector(20, 30) (calls __call__)
```

### Context Managers (`__enter__` and `__exit__`)
Crucial for resource management (e.g., closing files, releasing GPU memory).

```python
import time

class Timer:
    def __enter__(self):
        self.start = time.time()
        return self # Often returned as 'as' variable

    def __exit__(self, exc_type, exc_value, traceback):
        self.end = time.time()
        print(f"Elapsed time: {self.end - self.start:.4f} seconds")
        # Return True to suppress exceptions, False to propagate them
        return False

with Timer():
    # Simulate some ML training epoch
    time.sleep(0.1)
# Output: Elapsed time: 0.10XX seconds
```

### Container Emulation
Creating custom sequence-like objects.

```python
class CustomDataset:
    def __init__(self, data):
        self.data = data

    def __len__(self):
        """Allows using len() on the object."""
        return len(self.data)

    def __getitem__(self, idx):
        """Allows indexing e.g., dataset[0]."""
        return self.data[idx]

    def __setitem__(self, idx, value):
        """Allows assignment e.g., dataset[0] = value."""
        self.data[idx] = value

    def __contains__(self, item):
        """Allows using the 'in' operator."""
        return item in self.data

dataset = CustomDataset([10, 20, 30, 40])
print(len(dataset))       # Output: 4
print(dataset[1])         # Output: 20
dataset[1] = 99
print(20 in dataset)      # Output: False
print(99 in dataset)      # Output: True
```

## 3. Properties

Properties allow you to manage attribute access (getters/setters/deleters) without changing the interface (e.g., still using `obj.attr` instead of `obj.get_attr()`).

> 🤖 **ML Connection**: Use properties for data validation (e.g., ensuring learning rate is between 0 and 1) or computed attributes that depend on state.

```python
class Config:
    def __init__(self, lr: float):
        self.lr = lr # Calls the setter!

    @property
    def lr(self):
        """Getter: Called when config.lr is accessed."""
        return self._lr

    @lr.setter
    def lr(self, value):
        """Setter: Called when config.lr = value is assigned."""
        if not (0 < value < 1):
            raise ValueError("Learning rate must be between 0 and 1")
        self._lr = value

    @property
    def is_aggressive(self):
        """Computed property: No setter defined, so it's read-only."""
        return self.lr > 0.1

cfg = Config(0.05)
print(cfg.lr)              # Output: 0.05
print(cfg.is_aggressive)   # Output: False
cfg.lr = 0.2
# cfg.lr = 1.5             # ValueError: Learning rate must be between 0 and 1
```

## 4. Inheritance

Inheritance allows a child class to inherit attributes and methods from a parent class, promoting code reuse.

```python
class BaseLayer:
    def __init__(self, name: str):
        self.name = name
        self.parameters = []

    def forward(self, x):
        raise NotImplementedError("Subclasses must implement forward()")

class Dense(BaseLayer):
    def __init__(self, name: str, units: int):
        # super() calls the parent class methods
        super().__init__(name)
        self.units = units
        self.parameters = [f"Weights({units})"] # Override parent attribute

    def forward(self, x):
        return f"{self.name} processing {x} to {self.units} units"

dense = Dense("Layer1", 128)
print(dense.forward("InputData")) # Output: Layer1 processing InputData to 128 units
print(isinstance(dense, Dense))     # Output: True
print(isinstance(dense, BaseLayer)) # Output: True
print(issubclass(Dense, BaseLayer)) # Output: True
```

## 5. Multiple Inheritance

Python supports inheriting from multiple classes. The Method Resolution Order (MRO) determines the order in which base classes are searched for a method or attribute.

> 🎯 **Interview Tip**: MRO is determined by the C3 Linearization algorithm. You can view it using `ClassName.mro()` or `ClassName.__mro__`.

```python
class GPUCompatible:
    def to_device(self, device="cuda"):
        return f"Moving to {device}"

class Trackable:
    def log_metrics(self, loss):
        return f"Logging loss: {loss}"

# Multiple inheritance - often used with "Mixins" (classes adding specific behavior)
class AdvancedModel(BaseLayer, GPUCompatible, Trackable):
    def __init__(self, name):
        super().__init__(name)

model = AdvancedModel("VisionTransformer")
print(model.to_device())    # Output: Moving to cuda
print(model.log_metrics(0.5)) # Output: Logging loss: 0.5

# Let's look at MRO
print(AdvancedModel.mro())
# Output: [<class '__main__.AdvancedModel'>, <class '__main__.BaseLayer'>, 
#          <class '__main__.GPUCompatible'>, <class '__main__.Trackable'>, <class 'object'>]
```

### The Diamond Problem
Occurs when multiple parent classes inherit from the same base class. Python's `super()` combined with MRO handles this elegantly by ensuring the base class method is only called once.

## 6. Abstract Classes

Abstract Base Classes (ABCs) force subclasses to implement specific methods. This enforces a strict interface.

> 🤖 **ML Connection**: Frameworks like PyTorch use abstract base classes under the hood to ensure custom datasets implement `__len__` and `__getitem__`.

```python
from abc import ABC, abstractmethod

class MLEstimator(ABC):
    
    @abstractmethod
    def fit(self, X, y):
        """Must be implemented by subclasses."""
        pass
        
    @abstractmethod
    def predict(self, X):
        """Must be implemented by subclasses."""
        pass
        
    def get_params(self):
        """Concrete method: Subclasses inherit this as-is but can override."""
        return {}

# class BrokenEstimator(MLEstimator):
#     def fit(self, X, y):
#         pass
# TypeError: Can't instantiate abstract class BrokenEstimator with abstract method predict

class LinearRegression(MLEstimator):
    def fit(self, X, y):
        print("Fitting linear model...")
        
    def predict(self, X):
        return "Predictions"

model = LinearRegression() # Works!
```

## 7. Class Methods & Static Methods

- `@classmethod`: Takes the class (`cls`) as the first argument instead of the instance (`self`). Usually used for **factory methods** (alternative constructors).
- `@staticmethod`: Takes neither `cls` nor `self`. It's just a regular function that lives inside a class namespace because it logically belongs there.

```python
class Matrix:
    def __init__(self, data):
        self.data = data

    @classmethod
    def zeros(cls, rows: int, cols: int):
        """Factory method to create a matrix of zeros."""
        data = [[0] * cols for _ in range(rows)]
        # cls() is same as Matrix() if called on Matrix
        return cls(data) 

    @staticmethod
    def is_valid_shape(data):
        """Utility function related to Matrices, but doesn't need class/instance state."""
        return all(len(row) == len(data[0]) for row in data)

m = Matrix.zeros(2, 3)
print(m.data) # Output: [[0, 0, 0], [0, 0, 0]]
print(Matrix.is_valid_shape([[1, 2], [3, 4]])) # Output: True
```

## 8. Dataclasses

Introduced in Python 3.7, `@dataclass` automatically generates boilerplate code like `__init__`, `__repr__`, and `__eq__` for classes primarily meant to hold data.

> 🤖 **ML Connection**: Extremely useful for defining configurations, hyperparameters, or structured model outputs without writing tedious boilerplate.

```python
from dataclasses import dataclass, field
from typing import List

@dataclass(frozen=True, order=True)
class ModelConfig:
    # frozen=True makes instances immutable
    # order=True automatically generates __lt__, __gt__, etc. based on fields
    
    name: str
    learning_rate: float
    # Use default_factory for mutable defaults (like lists/dicts)
    hidden_layers: List[int] = field(default_factory=lambda: [64, 64])
    
    def __post_init__(self):
        """Called automatically after __init__ for custom validation/logic."""
        # Note: In a frozen dataclass, we must use object.__setattr__ to bypass immutability
        if self.learning_rate <= 0:
            raise ValueError("LR must be positive")

cfg1 = ModelConfig("ResNet", 0.01)
print(cfg1) # Output: ModelConfig(name='ResNet', learning_rate=0.01, hidden_layers=[64, 64])

# cfg1.learning_rate = 0.05  # FrozenInstanceError: cannot assign to field 'learning_rate'
```

## 9. Composition vs Inheritance

**Inheritance** represents an "is-a" relationship (e.g., `RandomForest` is an `Estimator`).
**Composition** represents a "has-a" relationship (e.g., `TrainingPipeline` has a `DataLoader` and a `Model`).

> 🎯 **Interview Tip**: "Favor composition over inheritance" is a core design principle. Deep inheritance hierarchies become rigid and fragile.

```python
# Inheritance (Can become rigid)
class DataAugmenter:
    def flip(self, img): return "Flipped"

class ImageDataset(DataAugmenter):
    def get(self):
        img = "Image"
        return self.flip(img) # Inherited method

# Composition (More flexible, easier to swap components)
class Transformer:
    def apply(self, img): return "Transformed"

class BetterImageDataset:
    def __init__(self, transformer: Transformer):
        self.transformer = transformer # HAS-A relationship
        
    def get(self):
        img = "Image"
        return self.transformer.apply(img)

dataset = BetterImageDataset(Transformer())
```

## 10. OOP in ML: Real-world Examples

### Scikit-Learn Style Estimator
```python
from sklearn.base import BaseEstimator, ClassifierMixin
import numpy as np

class DummyClassifier(BaseEstimator, ClassifierMixin):
    def __init__(self, strategy="most_frequent"):
        self.strategy = strategy
        self.class_prior_ = None # Trailing underscore convention for fitted attributes

    def fit(self, X, y):
        # Implement logic to compute priors based on strategy
        self.class_prior_ = "Class 1" # Simulated
        return self

    def predict(self, X):
        if self.class_prior_ is None:
            raise ValueError("Must call fit before predict")
        return [self.class_prior_] * len(X)
```

### PyTorch Style Dataset
```python
class TimeseriesDataset:
    def __init__(self, data, seq_length):
        self.data = data
        self.seq_length = seq_length

    def __len__(self):
        return len(self.data) - self.seq_length

    def __getitem__(self, idx):
        x = self.data[idx : idx + self.seq_length]
        y = self.data[idx + self.seq_length]
        return x, y

ds = TimeseriesDataset([1,2,3,4,5], seq_length=3)
print(ds[0]) # Output: ([1, 2, 3], 4)
print(ds[1]) # Output: ([2, 3, 4], 5)
```

## 11. Design Patterns in Python

### Singleton (Anti-pattern in ML, but good to know)
Ensures only one instance of a class exists.
```python
class Logger:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

l1 = Logger()
l2 = Logger()
print(l1 is l2) # Output: True
```

### Strategy Pattern
Define a family of algorithms and make them interchangeable.
```python
from abc import ABC, abstractmethod

class LossFunction(ABC):
    @abstractmethod
    def compute(self, y_true, y_pred): pass

class MSELoss(LossFunction):
    def compute(self, y_true, y_pred): return "MSE"

class MAELoss(LossFunction):
    def compute(self, y_true, y_pred): return "MAE"

class Trainer:
    def __init__(self, loss_fn: LossFunction):
        self.loss_fn = loss_fn # Injected dependency (Strategy)

trainer = Trainer(MSELoss())
print(trainer.loss_fn.compute(1, 1)) # Output: MSE
```

## Practice Problems

1. **Custom List**: Create a class `MathList` that inherits from `list`. Override `__add__` so that adding two MathLists performs element-wise addition instead of concatenation.
2. **PyTorch Dataset Mock**: Implement a `CSVDataset` class that takes a filename in `__init__`, reads it (mock it with a list of dicts), and implements `__len__` and `__getitem__`.
3. **Properties & Validation**: Create a `Neuron` class with a `weights` property. If the user tries to set weights to a list of incorrect length (must match `input_size` defined in init), raise a ValueError.
4. **Context Manager**: Write a `MemoryProfiler` context manager that simulates printing memory usage before and after a block of code using `__enter__` and `__exit__`.
5. **Dataclass Hyperparameters**: Create a frozen `@dataclass` `XGBoostConfig` with fields for `max_depth`, `learning_rate`, and `n_estimators`. Use `__post_init__` to validate that `max_depth` > 0.
6. **Abstract Base Class**: Create an ABC `Metric` with an abstract method `calculate()`. Implement concrete classes `Accuracy` and `F1Score`.
7. **Factory Method**: Create a `DataLoader` class. Implement a `@classmethod` `from_csv(cls, filepath)` that parses a CSV and returns a `DataLoader` instance.
8. **Multiple Inheritance**: Create `GPUAccelerator` and `TPUAccelerator` classes. Create a `Model` class. Use multiple inheritance to create a `FastModel` that can utilize both (handle MRO carefully or use Mixin pattern).
9. **Callable Object**: Implement a `Polynomial` class initialized with coefficients `[a, b, c]`. Implement `__call__` so that `p(x)` computes `ax^2 + bx + c`.
10. **Mini Neural Network**: Create a `LinearLayer` class with `weights` and `bias`. Implement `__call__` for the forward pass. Create a `Sequential` class that takes a list of layers and chains their `__call__` methods together.

---
**Related Notes**:
- `[[Python Functions Advanced]]`
- `[[Python Error Handling and File IO]]`
- `[[Python NumPy Essentials]]`
