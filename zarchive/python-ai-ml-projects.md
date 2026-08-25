# Python AI/ML Projects — Beginner to Intermediate

> A curated set of projects for BCA students who know Java basics and want to explore AI/ML with Python. Each project is explained conceptually first, then implemented step-by-step with full code.

---

## Project 1: Rule-Based Chatbot

**Concepts**: keyword matching, pattern detection, conditional responses

A rule-based chatbot is the simplest form of conversational AI. Instead of learning from data, it uses a set of manually defined rules to match user input against known patterns and return appropriate responses. This approach is deterministic: given the same input, the bot always produces the same output. Despite its simplicity, rule-based chatbots are still widely used for FAQs, customer support triage, and interactive tutorials.

The bot works by scanning user input for specific keywords or phrases. When a match is found, it selects a response from a predefined pool. More sophisticated versions handle greetings, farewells, questions about the bot itself, and fallback responses for unrecognized input. This implementation uses regular expressions for pattern matching, which is more flexible than simple substring checks.

```python
import random
import re

class RuleBasedChatbot:
    def __init__(self):
        self.rules = {
            r"hello|hi|hey|greetings": ["Hello! How can I help you today?",
                                          "Hi there! What brings you here?",
                                          "Hey! Nice to meet you."],
            r"how are you|how do you do": ["I'm just a program, but I'm doing great!",
                                             "I'm functioning perfectly, thanks for asking!",
                                             "All systems operational!"],
            r"your name|who are you": ["I'm PyBot, a rule-based chatbot built in Python.",
                                         "I'm PyBot, your friendly AI assistant."],
            r"bye|goodbye|see you|exit": ["Goodbye! Have a great day!",
                                            "See you later!",
                                            "Bye! Come back anytime."],
            r"thank|thanks": ["You're welcome!", "Glad I could help!", "Anytime!"],
            r"help|what can you do": ["I can chat with you, answer simple questions, and tell you about myself.",
                                        "Try saying hello, asking my name, or just chatting!"],
        }
        self.fallback = ["I'm not sure I understand. Could you rephrase that?",
                         "Interesting! Tell me more.",
                         "I don't have an answer for that yet."]

    def get_response(self, user_input: str) -> str:
        user_input = user_input.lower().strip()
        for pattern, responses in self.rules.items():
            if re.search(pattern, user_input):
                return random.choice(responses)
        return random.choice(self.fallback)

if __name__ == "__main__":
    bot = RuleBasedChatbot()
    print("PyBot: Hello! Type 'exit' to quit.")
    while True:
        user = input("You: ")
        if user.lower() in ["exit", "quit"]:
            print("PyBot: Goodbye!")
            break
        print(f"PyBot: {bot.get_response(user)}")
```

---

## Project 2: Spam Keyword Detector

**Concepts**: text classification, bag-of-words, log-likelihood scoring

A spam keyword detector classifies messages as spam or ham (not spam) by analyzing word frequencies. The bag-of-words model treats each message as an unordered collection of words, ignoring grammar and word order. Each word contributes evidence toward the classification decision based on how often it appears in spam versus ham messages during training.

We compute a log-likelihood score for each word: log(P(word|spam) / P(word|ham)). During classification, we sum the scores of all words in a message. If the total exceeds a threshold, the message is classified as spam. This is a simplified version of what production spam filters use, and it demonstrates the core idea of discriminative feature scoring.

```python
import math
import re
from collections import Counter

class SpamKeywordDetector:
    def __init__(self, threshold: float = 0.0):
        self.threshold = threshold
        self.spam_counts = Counter()
        self.ham_counts = Counter()
        self.total_spam = 0
        self.total_ham = 0
        self.vocab = set()

    def _tokenize(self, text: str) -> list:
        return re.findall(r"\w+", text.lower())

    def train(self, messages: list, labels: list):
        for msg, label in zip(messages, labels):
            tokens = self._tokenize(msg)
            self.vocab.update(tokens)
            if label == "spam":
                self.spam_counts.update(tokens)
                self.total_spam += len(tokens)
            else:
                self.ham_counts.update(tokens)
                self.total_ham += len(tokens)

    def predict(self, message: str) -> tuple:
        tokens = self._tokenize(message)
        score = 0.0
        for token in tokens:
            if token not in self.vocab:
                continue
            p_spam = (self.spam_counts[token] + 1) / (self.total_spam + len(self.vocab))
            p_ham = (self.ham_counts[token] + 1) / (self.total_ham + len(self.vocab))
            score += math.log(p_spam / p_ham)
        return ("spam" if score > self.threshold else "ham", score)

if __name__ == "__main__":
    msgs = [
        "Buy cheap watches now!!!",
        "Hello, how are you?",
        "Limited offer, click here to win",
        "Meeting at 3pm tomorrow",
        "FREE MONEY!!! CLAIM NOW",
        "Can you review my code?",
        "Congratulations you won a prize",
        "What time is the lecture?",
    ]
    labels = ["spam", "ham", "spam", "ham", "spam", "ham", "spam", "ham"]

    detector = SpamKeywordDetector(threshold=0.0)
    detector.train(msgs, labels)

    tests = ["Win a free iPhone now", "See you at class", "Click here for cheap loans"]
    for t in tests:
        pred, score = detector.predict(t)
        print(f'"{t}" -> {pred} (score={score:.2f})')
```

---

## Project 3: Sentiment Analyzer (Rule-Based)

**Concepts**: lexicon-based, negation handling, intensity modifiers

This rule-based sentiment analyzer evaluates the emotional tone of text using a pre-built lexicon of positive and negative words. Each word carries a sentiment score. The overall score is the sum of individual word scores, adjusted for negation words (like "not", "never") that flip the polarity of subsequent words, and intensity modifiers (like "very", "extremely") that amplify the score.

The approach is transparent and interpretable — you can see exactly why a sentence was classified as positive, negative, or neutral. This is the foundation of many practical sentiment analysis tools used before deep learning became dominant. The lexicon can be extended with domain-specific words for better accuracy.

```python
import re

class SentimentAnalyzer:
    def __init__(self):
        self.pos_words = {
            "good": 1, "great": 2, "excellent": 3, "amazing": 3, "wonderful": 3,
            "happy": 2, "love": 3, "beautiful": 2, "fantastic": 3, "awesome": 3,
            "nice": 1, "perfect": 3, "brilliant": 3, "superb": 3, "delightful": 2,
            "enjoy": 1, "pleased": 1, "glad": 1, "joy": 2, "positive": 1
        }
        self.neg_words = {
            "bad": -1, "terrible": -3, "awful": -3, "horrible": -3, "hate": -3,
            "ugly": -2, "sad": -2, "angry": -2, "poor": -1, "worst": -3,
            "boring": -2, "disgusting": -3, "annoying": -2, "dreadful": -3,
            "unpleasant": -2, "disappointing": -2, "hateful": -3, "miserable": -3
        }
        self.negation_words = {"not", "no", "never", "neither", "nor", "nothing",
                                "nowhere", "hardly", "barely", "scarcely", "don't",
                                "doesn't", "didn't", "won't", "wouldn't", "couldn't",
                                "shouldn't", "can't", "cannot"}
        self.intensifiers = {"very": 1.5, "really": 1.3, "extremely": 2.0,
                              "incredibly": 2.0, "highly": 1.5, "so": 1.2,
                              "too": 1.3, "absolutely": 2.0, "totally": 1.5}

    def analyze(self, text: str) -> dict:
        words = re.findall(r"\w+", text.lower())
        score = 0.0
        negate = False
        intensity = 1.0

        for word in words:
            if word in self.negation_words:
                negate = not negate
                continue
            mult = -1 if negate else 1
            if word in self.intensifiers:
                intensity = self.intensifiers[word]
                continue
            if word in self.pos_words:
                score += self.pos_words[word] * mult * intensity
            elif word in self.neg_words:
                score += self.neg_words[word] * mult * intensity
            intensity = 1.0

        if score > 1:
            sentiment = "positive"
        elif score < -1:
            sentiment = "negative"
        else:
            sentiment = "neutral"

        return {"score": round(score, 2), "sentiment": sentiment}

if __name__ == "__main__":
    sa = SentimentAnalyzer()
    texts = [
        "This movie is absolutely fantastic! I love it.",
        "The service was terrible and the food was bad.",
        "This is not bad at all, actually quite good.",
        "The weather is okay today.",
        "I really hate this boring class.",
    ]
    for t in texts:
        result = sa.analyze(t)
        print(f"[{result['sentiment'].upper():>8}] (score={result['score']:>5.2f}) {t}")
```

---

## Project 4: Movie Recommendation (Content-Based)

**Concepts**: cosine similarity, feature vectors, content filtering

Content-based recommendation systems suggest items similar to ones a user has liked in the past. For movies, we represent each film as a feature vector containing genre scores, keywords, and actor indicators. We then compute the cosine similarity between the user's favorite movie and all others. Cosine similarity measures the angle between two vectors — a value of 1 means identical direction (highly similar), 0 means orthogonal (unrelated).

This approach is intuitive: if you liked a sci-fi action movie starring Keanu Reeves, the system will recommend other sci-fi action movies with similar actors. It does not need data from other users (unlike collaborative filtering). The feature engineering step is critical — choosing the right features determines recommendation quality.

```python
import math

class ContentBasedRecommender:
    def __init__(self):
        self.movies = {}

    def add_movie(self, title: str, features: dict):
        self.movies[title] = features

    def _vectorize(self, features: dict, all_keys: set) -> list:
        return [features.get(k, 0) for k in sorted(all_keys)]

    def cosine_similarity(self, vec1: list, vec2: list) -> float:
        dot = sum(a * b for a, b in zip(vec1, vec2))
        norm1 = math.sqrt(sum(a*a for a in vec1))
        norm2 = math.sqrt(sum(b*b for b in vec2))
        if norm1 == 0 or norm2 == 0:
            return 0.0
        return dot / (norm1 * norm2)

    def recommend(self, movie_title: str, top_n: int = 3) -> list:
        if movie_title not in self.movies:
            return []
        all_keys = set()
        for feat in self.movies.values():
            all_keys.update(feat.keys())

        target_vec = self._vectorize(self.movies[movie_title], all_keys)
        scores = []

        for title, features in self.movies.items():
            if title == movie_title:
                continue
            vec = self._vectorize(features, all_keys)
            sim = self.cosine_similarity(target_vec, vec)
            scores.append((title, sim))

        scores.sort(key=lambda x: x[1], reverse=True)
        return scores[:top_n]

if __name__ == "__main__":
    r = ContentBasedRecommender()
    r.add_movie("The Matrix", {"action": 5, "sci-fi": 5, "keanu_reeves": 1, "1990s": 1})
    r.add_movie("Inception", {"action": 4, "sci-fi": 5, "thriller": 4, "leonardo_dicaprio": 1})
    r.add_movie("John Wick", {"action": 5, "keanu_reeves": 1, "crime": 3, "2010s": 1})
    r.add_movie("Interstellar", {"sci-fi": 5, "drama": 4, "space": 5, "matthew_mcconaughey": 1})
    r.add_movie("Speed", {"action": 5, "keanu_reeves": 1, "thriller": 3, "1990s": 1})
    r.add_movie("The Dark Knight", {"action": 5, "crime": 4, "drama": 4, "christian_bale": 1})

    recs = r.recommend("The Matrix", top_n=3)
    print("Recommendations for 'The Matrix':")
    for title, sim in recs:
        print(f"  {title} (similarity: {sim:.3f})")
```

---

## Project 5: Simple Linear Regression

**Concepts**: gradient descent, MSE cost function, model training from scratch

Linear regression models the relationship between a dependent variable y and an independent variable x as a straight line: y = mx + b. We want to find the slope m and intercept b that minimize the mean squared error (MSE) between predicted and actual values. Gradient descent iteratively adjusts m and b by moving in the direction that reduces the error.

At each step, we compute the partial derivatives of the MSE with respect to m and b, then update both parameters by a small learning rate. This is the same algorithm that powers neural networks, just with a single layer. Understanding linear regression gradient descent is the foundation for understanding deep learning optimizers.

```python
import random

def generate_data(n: int = 50, noise: float = 5.0):
    xs = [i for i in range(n)]
    ys = [3.5 * x + 12 + random.uniform(-noise, noise) for x in xs]
    return xs, ys

def predict(x, m, b):
    return m * x + b

def mse_loss(ys, preds):
    n = len(ys)
    return sum((y - p) ** 2 for y, p in zip(ys, preds)) / n

def gradient_descent(xs, ys, m=0.0, b=0.0, lr=0.001, epochs=1000):
    n = len(xs)
    for epoch in range(epochs):
        preds = [predict(x, m, b) for x in xs]
        dm = (-2 / n) * sum(x * (y - p) for x, y, p in zip(xs, ys, preds))
        db = (-2 / n) * sum(y - p for y, p in zip(ys, preds))
        m -= lr * dm
        b -= lr * db
        if epoch % 200 == 0:
            loss = mse_loss(ys, preds)
            print(f"Epoch {epoch:4d}: m={m:.3f}, b={b:.3f}, loss={loss:.3f}")
    return m, b

if __name__ == "__main__":
    xs, ys = generate_data(50, 8.0)
    m, b = gradient_descent(xs, ys, lr=0.0001, epochs=2000)
    print(f"\nTrained model: y = {m:.3f}x + {b:.3f}")
    test_x = 55
    print(f"Prediction at x={test_x}: {predict(test_x, m, b):.2f}")
```

---

## Project 6: K-Nearest Neighbors Classifier

**Concepts**: Euclidean distance, majority voting, lazy learning

K-Nearest Neighbors (KNN) is a simple, non-parametric classification algorithm. It stores all training data and classifies new points based on the majority class among its k nearest neighbors in feature space. "Lazy learning" means there is no explicit training phase — computation happens entirely at prediction time. This makes KNN easy to implement but computationally expensive for large datasets.

We measure distance using the Euclidean metric. The choice of k matters: small k leads to noisy decisions, large k may smooth over important boundaries. KNN works best with low-dimensional data and benefits from feature scaling (normalizing all features to the same range).

```python
import math
from collections import Counter

def euclidean_distance(a, b):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(a, b)))

class KNN:
    def __init__(self, k=3):
        self.k = k
        self.X_train = []
        self.y_train = []

    def fit(self, X, y):
        self.X_train = X
        self.y_train = y

    def predict(self, X_test):
        return [self._predict_one(x) for x in X_test]

    def _predict_one(self, x):
        distances = [(euclidean_distance(x, x_train), y_train)
                     for x_train, y_train in zip(self.X_train, self.y_train)]
        distances.sort(key=lambda d: d[0])
        k_nearest = distances[:self.k]
        k_labels = [label for _, label in k_nearest]
        return Counter(k_labels).most_common(1)[0][0]

if __name__ == "__main__":
    X = [[2, 3], [3, 4], [5, 6], [8, 9], [9, 10], [10, 12], [1, 1], [2, 2]]
    y = [0, 0, 0, 1, 1, 1, 0, 0]

    knn = KNN(k=3)
    knn.fit(X, y)

    tests = [[4, 5], [9, 9], [1, 2], [7, 8]]
    preds = knn.predict(tests)
    for pt, pred in zip(tests, preds):
        print(f"Point {pt} -> class {pred}")
```

---

## Project 7: Decision Tree Playground

**Concepts**: entropy, information gain, recursive partitioning

A decision tree splits data recursively into subsets that are as pure as possible with respect to the target class. At each node, it selects the feature and threshold that yield the highest information gain — the reduction in entropy after the split. Entropy measures disorder: 0 means all examples belong to the same class, 1 means perfectly mixed (equal proportions of each class).

This implementation builds a binary tree for numeric features. It finds the best split by testing all possible thresholds and picking the one with the lowest weighted entropy. The tree stops growing when all samples in a node belong to the same class. Decision trees are the building blocks of ensemble methods like Random Forests.

```python
import math
from collections import Counter

def entropy(labels):
    total = len(labels)
    if total == 0:
        return 0
    counts = Counter(labels)
    ent = 0.0
    for c in counts.values():
        p = c / total
        if p > 0:
            ent -= p * math.log2(p)
    return ent

class DecisionTree:
    def __init__(self):
        self.tree = None

    def fit(self, X, y):
        self.tree = self._build_tree(X, y)

    def _build_tree(self, X, y):
        if len(set(y)) == 1:
            return y[0]
        best_gain = -1
        best_split = None
        parent_entropy = entropy(y)
        n = len(X)
        n_features = len(X[0]) if X else 0

        for f_idx in range(n_features):
            values = sorted(set(row[f_idx] for row in X))
            for i in range(len(values) - 1):
                threshold = (values[i] + values[i+1]) / 2
                left_y = []
                right_y = []
                left_X = []
                right_X = []
                for row, label in zip(X, y):
                    if row[f_idx] <= threshold:
                        left_y.append(label)
                        left_X.append(row)
                    else:
                        right_y.append(label)
                        right_X.append(row)
                if not left_y or not right_y:
                    continue
                child_entropy = (len(left_y)/n)*entropy(left_y) + (len(right_y)/n)*entropy(right_y)
                gain = parent_entropy - child_entropy
                if gain > best_gain:
                    best_gain = gain
                    best_split = (f_idx, threshold, left_X, left_y, right_X, right_y)

        if best_gain < 0:
            return Counter(y).most_common(1)[0][0]

        f_idx, thresh, lX, ly, rX, ry = best_split
        return {
            "feature": f_idx,
            "threshold": thresh,
            "left": self._build_tree(lX, ly),
            "right": self._build_tree(rX, ry)
        }

    def predict_one(self, x, node=None):
        if node is None:
            node = self.tree
        if not isinstance(node, dict):
            return node
        if x[node["feature"]] <= node["threshold"]:
            return self.predict_one(x, node["left"])
        else:
            return self.predict_one(x, node["right"])

    def predict(self, X):
        return [self.predict_one(x) for x in X]

if __name__ == "__main__":
    X = [[1], [2], [3], [4], [5], [6], [7], [8]]
    y = [0, 0, 0, 0, 1, 1, 1, 1]

    dt = DecisionTree()
    dt.fit(X, y)

    tests = [[2.5], [5.5], [7.5], [0.5]]
    preds = dt.predict(tests)
    for pt, p in zip(tests, preds):
        print(f"x={pt[0]} -> class {p}")
```

---

## Project 8: K-Means Clustering

**Concepts**: unsupervised learning, centroid initialization, convergence

K-Means is an unsupervised learning algorithm that partitions data into k clusters. It works in two alternating steps: (1) assign each point to the nearest centroid (using Euclidean distance), and (2) recompute each centroid as the mean of all points assigned to it. This repeats until centroids stop moving or a maximum number of iterations is reached.

The result depends on initial centroid placement. A common heuristic is to initialize randomly and run multiple times, or use k-means++ initialization. K-Means works well when clusters are roughly spherical and well-separated. It is widely used for customer segmentation, image compression, and anomaly detection.

```python
import random
import math

class KMeans:
    def __init__(self, k=3, max_iters=100):
        self.k = k
        self.max_iters = max_iters
        self.centroids = []

    def fit(self, X):
        self.centroids = random.sample(X, self.k)
        for _ in range(self.max_iters):
            clusters = [[] for _ in range(self.k)]
            for point in X:
                dists = [math.sqrt(sum((p - c) ** 2 for p, c in zip(point, cen)))
                         for cen in self.centroids]
                idx = dists.index(min(dists))
                clusters[idx].append(point)
            new_centroids = []
            for cluster in clusters:
                if not cluster:
                    new_centroids.append(random.choice(X))
                else:
                    new_centroids.append([sum(dim) / len(cluster) for dim in zip(*cluster)])
            if all(math.isclose(a, b, rel=1e-4) for cen, ncen in zip(self.centroids, new_centroids) for a, b in zip(cen, ncen)):
                break
            self.centroids = new_centroids

    def predict(self, X):
        labels = []
        for point in X:
            dists = [math.sqrt(sum((p - c) ** 2 for p, c in zip(point, cen)))
                     for cen in self.centroids]
            labels.append(dists.index(min(dists)))
        return labels

if __name__ == "__main__":
    data = [[1, 2], [1, 4], [1, 0], [10, 2], [10, 4], [10, 0],
            [5, 8], [6, 9], [5, 7], [15, 8], [16, 9], [15, 7]]
    kmeans = KMeans(k=3)
    kmeans.fit(data)
    labels = kmeans.predict(data)
    for pt, lbl in zip(data, labels):
        print(f"Point {pt} -> cluster {lbl}")
```

---

## Project 9: Naive Bayes Spam Classifier

**Concepts**: Bayes theorem, Laplace smoothing, probabilistic classification

Naive Bayes applies Bayes' theorem with the "naive" assumption that features (words) are conditionally independent given the class. Despite this unrealistic assumption, it performs surprisingly well for text classification. For each word, we compute P(word|spam) and P(word|ham). To classify a new message, we calculate P(spam|message) ∝ P(spam) × ∏ P(word|spam). Laplace smoothing adds 1 to each word count to avoid zero probabilities.

The decision boundary is determined by the ratio of these probabilities. If P(spam|message) > P(ham|message), classify as spam. Naive Bayes is extremely fast to train and predict, making it a strong baseline for text classification tasks.

```python
import math
import re
from collections import Counter

class NaiveBayesClassifier:
    def __init__(self):
        self.priors = {}
        self.word_probs = {}
        self.vocab = set()
        self.classes = []

    def _tokenize(self, text):
        return re.findall(r"\w+", text.lower())

    def fit(self, X, y):
        self.classes = list(set(y))
        docs_per_class = {c: [] for c in self.classes}
        for text, label in zip(X, y):
            docs_per_class[label].append(self._tokenize(text))
            self.vocab.update(self._tokenize(text))

        total_docs = len(X)
        self.priors = {c: len(docs_per_class[c]) / total_docs for c in self.classes}
        self.word_probs = {c: {} for c in self.classes}

        V = len(self.vocab)
        for c in self.classes:
            word_counts = Counter()
            total_words = 0
            for tokens in docs_per_class[c]:
                word_counts.update(tokens)
                total_words += len(tokens)
            for word in self.vocab:
                self.word_probs[c][word] = (word_counts[word] + 1) / (total_words + V)

    def predict_proba(self, text):
        tokens = self._tokenize(text)
        scores = {}
        for c in self.classes:
            score = math.log(self.priors[c])
            for word in tokens:
                if word in self.word_probs[c]:
                    score += math.log(self.word_probs[c][word])
            scores[c] = score
        total = sum(math.exp(s) for s in scores.values())
        return {c: math.exp(s) / total for c, s in scores.items()}

    def predict(self, text):
        probas = self.predict_proba(text)
        return max(probas, key=probas.get)

if __name__ == "__main__":
    X = [
        "Buy cheap watches now!!!",
        "Hello friend, how are you?",
        "Limited offer click here",
        "Meeting at 3pm tomorrow",
        "FREE MONEY CLAIM NOW",
        "Can you review my code?",
        "Congratulations you won",
        "What time is the lecture?",
    ]
    y = ["spam", "ham", "spam", "ham", "spam", "ham", "spam", "ham"]
    nb = NaiveBayesClassifier()
    nb.fit(X, y)

    tests = ["Win a free iPhone", "See you tomorrow", "Click here for cheap loans"]
    for t in tests:
        pred = nb.predict(t)
        probas = nb.predict_proba(t)
        print(f'"{t}" -> {pred} (spam={probas["spam"]:.3f}, ham={probas["ham"]:.3f})')
```

---

## Project 10: Handwritten Digit Recognizer (MNIST)

**Concepts**: softmax regression, 784 features, gradient descent

This project implements softmax regression (multinomial logistic regression) to classify handwritten digits. Each 28×28 image is flattened into a 784-dimensional feature vector. The model learns a weight matrix W (10 × 784) and bias vector b (10 × 1) that map inputs to class scores, then applies softmax to convert scores to probabilities.

We train using stochastic gradient descent with cross-entropy loss. This is a foundational building block for deep learning — softmax is the same output layer used in modern neural networks for multi-class classification. With the full MNIST dataset (60000 training images), this model achieves about 92% accuracy.

```python
import math
import random

def softmax(scores):
    exp_scores = [math.exp(s - max(scores)) for s in scores]
    total = sum(exp_scores)
    return [e / total for e in exp_scores]

class SoftmaxRegressor:
    def __init__(self, n_features=784, n_classes=10, lr=0.01):
        self.W = [[random.gauss(0, 0.01) for _ in range(n_features)] for _ in range(n_classes)]
        self.b = [0.0 for _ in range(n_classes)]
        self.lr = lr

    def train_step(self, x, y):
        scores = [sum(w * xi for w, xi in zip(weight_row, x)) + bias
                  for weight_row, bias in zip(self.W, self.b)]
        probs = softmax(scores)
        for c in range(len(self.b)):
            error = probs[c] - (1 if c == y else 0)
            for j in range(len(x)):
                self.W[c][j] -= self.lr * error * x[j]
            self.b[c] -= self.lr * error

    def predict(self, x):
        scores = [sum(w * xi for w, xi in zip(weight_row, x)) + bias
                  for weight_row, bias in zip(self.W, self.b)]
        return scores.index(max(scores))

def make_dummy_data(n=200):
    X, y = [], []
    for _ in range(n):
        img = [random.gauss(0, 0.5) for _ in range(784)]
        label = random.randint(0, 9)
        img[label * 78:(label + 1) * 78] = [v + 1.0 for v in img[label * 78:(label + 1) * 78]]
        X.append(img)
        y.append(label)
    return X, y

if __name__ == "__main__":
    X_train, y_train = make_dummy_data(500)
    X_test, y_test = make_dummy_data(100)

    model = SoftmaxRegressor(lr=0.005)
    for epoch in range(10):
        for x, y in zip(X_train, y_train):
            model.train_step(x, y)
        correct = sum(1 for x, y in zip(X_test, y_test) if model.predict(x) == y)
        print(f"Epoch {epoch+1}: accuracy = {correct}/{len(X_test)} ({100*correct/len(X_test):.1f}%)")
```

---

## Project 11: Simple Neural Network from Scratch

**Concepts**: forward/backward propagation, ReLU, sigmoid

A neural network consists of layers of neurons connected by weights. This implementation builds a 3-layer network (input → hidden → output) from scratch using only Python lists and math. Forward propagation computes predictions. Backward propagation (backpropagation) computes gradients using the chain rule, then gradient descent updates weights.

We use ReLU activation for the hidden layer and sigmoid for the binary output. Despite the simplicity, this network can learn non-linear decision boundaries that linear models cannot. The XOR problem is a classic test: it is not linearly separable, but a single hidden layer is sufficient to solve it.

```python
import math
import random

def relu(x):
    return max(0, x)

def relu_deriv(x):
    return 1.0 if x > 0 else 0.0

def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))

def sigmoid_deriv(x):
    s = sigmoid(x)
    return s * (1 - s)

class NeuralNetwork:
    def __init__(self, input_size=2, hidden_size=4, output_size=1, lr=0.1):
        self.lr = lr
        self.W1 = [[random.uniform(-1, 1) for _ in range(input_size)] for _ in range(hidden_size)]
        self.b1 = [0.0 for _ in range(hidden_size)]
        self.W2 = [[random.uniform(-1, 1) for _ in range(hidden_size)] for _ in range(output_size)]
        self.b2 = [0.0 for _ in range(output_size)]

    def forward(self, x):
        self.z1 = [sum(w * xi for w, xi in zip(weights, x)) + bias
                   for weights, bias in zip(self.W1, self.b1)]
        self.a1 = [relu(z) for z in self.z1]
        self.z2 = [sum(w * a for w, a in zip(weights, self.a1)) + bias
                   for weights, bias in zip(self.W2, self.b2)]
        self.a2 = [sigmoid(z) for z in self.z2]
        return self.a2

    def backward(self, x, y):
        output = self.a2[0]
        target = y[0]
        dz2 = [(output - target) * sigmoid_deriv(self.z2[0])]
        dW2 = [[dz2[0] * a for a in self.a1]]
        db2 = dz2[:]

        dz1 = [sum(dz2[0] * self.W2[0][j] * relu_deriv(self.z1[j])) for j in range(len(self.z1))]
        dW1 = [[dz1[j] * xi for xi in x] for j in range(len(dz1))]
        db1 = dz1[:]

        for j in range(len(self.W2[0])):
            self.W2[0][j] -= self.lr * dW2[0][j]
        self.b2[0] -= self.lr * db2[0]

        for i in range(len(self.W1)):
            for j in range(len(self.W1[i])):
                self.W1[i][j] -= self.lr * dW1[i][j]
            self.b1[i] -= self.lr * db1[i]

    def train(self, X, y, epochs=1000):
        for epoch in range(epochs):
            total_loss = 0.0
            for x, target in zip(X, y):
                pred = self.forward(x)[0]
                total_loss += -(target * math.log(pred + 1e-10) + (1 - target) * math.log(1 - pred + 1e-10))
                self.backward(x, [target])
            if epoch % 200 == 0:
                print(f"Epoch {epoch}: loss = {total_loss/len(X):.6f}")

    def predict(self, x):
        return 1 if self.forward(x)[0] >= 0.5 else 0

if __name__ == "__main__":
    X = [[0, 0], [0, 1], [1, 0], [1, 1]]
    y = [0, 1, 1, 0]  # XOR problem

    nn = NeuralNetwork(input_size=2, hidden_size=4, output_size=1, lr=0.5)
    nn.train(X, y, epochs=2000)
    print("\nXOR results:")
    for x, target in zip(X, y):
        pred = nn.predict(x)
        prob = nn.forward(x)[0]
        print(f"  {x} -> {pred} (prob={prob:.4f}, expected={target})")
```

---

## Project 12: Image Classifier with Pre-trained Model

**Concepts**: transfer learning, MobileNet, ImageNet

Transfer learning leverages a neural network pre-trained on a massive dataset (ImageNet with 1000 classes) to classify new images without training from scratch. We use MobileNetV2, a lightweight model designed for mobile and embedded vision applications. The model extracts hierarchical features from images — edges, textures, shapes, and object parts — and maps them to class probabilities.

We load the pre-trained model via Keras (part of TensorFlow) and use it to classify images. For BCA students, this demonstrates the power of reusing state-of-the-art models rather than reinventing the wheel. The code gracefully handles the case where TensorFlow is not installed by providing a mock fallback.

```python
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

try:
    import tensorflow as tf
    from tensorflow.keras.applications import MobileNetV2
    from tensorflow.keras.applications.mobilenet_v2 import preprocess_input, decode_predictions
    from tensorflow.keras.preprocessing import image
    import numpy as np

    model = MobileNetV2(weights="imagenet")

    def classify_image(img_path):
        img = image.load_img(img_path, target_size=(224, 224))
        x = image.img_to_array(img)
        x = np.expand_dims(x, axis=0)
        x = preprocess_input(x)
        preds = model.predict(x)
        return decode_predictions(preds, top=3)[0]

    if __name__ == "__main__":
        print("MobileNetV2 loaded successfully.")
        print("To classify an image, call: classify_image('path/to/image.jpg')")
        dummy = np.random.rand(1, 224, 224, 3).astype(np.float32)
        preds = model.predict(dummy)
        decoded = decode_predictions(preds, top=3)[0]
        for i, (imagenet_id, label, prob) in enumerate(decoded):
            print(f"  {i+1}. {label} ({prob*100:.2f}%)")

except ImportError:
    print("TensorFlow not installed. Install with: pip install tensorflow")
    print("Running in demo mode with mock predictions.")

    class MockClassifier:
        def classify_image(self, img_path):
            return [("n02124075", "Egyptian cat", 0.92),
                    ("n02123159", "tabby cat", 0.05),
                    ("n02123045", "Persian cat", 0.03)]

    mc = MockClassifier()
    print('Mock result for "cat.jpg":')
    for iid, label, prob in mc.classify_image("cat.jpg"):
        print(f"  {label} ({prob*100:.2f}%)")
```

---

## Project 13: Text Generation with Markov Chains

**Concepts**: n-grams, transition probabilities, text generation

Markov chains model the probability of a sequence by assuming each element depends only on the previous n elements (the Markov assumption). For text generation, we analyze a corpus to build a transition table: for every n-gram (sequence of n words), we record all words that follow it along with their frequencies. To generate new text, we start with a seed n-gram and randomly pick the next word based on the learned probabilities.

The quality of generated text improves with larger n and larger training corpora. With n=2 (bigrams), text is mostly gibberish but retains some structure. With n=4 or higher, it can produce surprisingly coherent sentences. This technique powers predictive text on smartphones.

```python
import random
import re
from collections import defaultdict

class MarkovTextGenerator:
    def __init__(self, n=2):
        self.n = n
        self.chain = defaultdict(list)

    def train(self, text: str):
        words = re.findall(r"\w+", text.lower())
        for i in range(len(words) - self.n):
            key = tuple(words[i:i + self.n])
            next_word = words[i + self.n]
            self.chain[key].append(next_word)

    def generate(self, length: int = 30, seed: tuple = None) -> str:
        if not self.chain:
            return ""
        if seed is None or seed not in self.chain:
            seed = random.choice(list(self.chain.keys()))
        result = list(seed)
        for _ in range(length - self.n):
            key = tuple(result[-self.n:])
            if key not in self.chain:
                break
            next_word = random.choice(self.chain[key])
            result.append(next_word)
        return " ".join(result)

if __name__ == "__main__":
    corpus = (
        "the quick brown fox jumps over the lazy dog "
        "the dog barks at the moon the moon shines bright "
        "the fox runs through the forest the forest is dark and deep "
        "the quick rabbit hides from the fox the fox is clever "
        "the dog sleeps under the stars the stars twinkle in the sky"
    )
    mtg = MarkovTextGenerator(n=2)
    mtg.train(corpus)
    print("Generated text (bigrams):")
    print(mtg.generate(20))
    print()
    mtg3 = MarkovTextGenerator(n=3)
    mtg3.train(corpus)
    print("Generated text (trigrams):")
    print(mtg3.generate(20))
```

---

## Project 14: AI Tic-Tac-Toe (Minimax)

**Concepts**: game tree, minimax algorithm, optimal play

Minimax is a decision rule used in game theory for minimizing the possible loss in a worst-case scenario. In Tic-Tac-Toe, the AI explores all possible moves, recursively evaluating the game tree until terminal states (win, lose, draw) are reached. The AI assumes the opponent plays optimally: it chooses the move that maximizes its own minimum payoff.

With alpha-beta pruning, the search space can be reduced significantly. Even without pruning, Tic-Tac-Toe's game tree is small enough for exhaustive search, making the AI unbeatable. This algorithm is the foundation for chess engines and other adversarial game AIs.

```python
import math

class TicTacToe:
    def __init__(self):
        self.board = [" " for _ in range(9)]
        self.current_player = "X"

    def print_board(self):
        for i in range(0, 9, 3):
            print("|".join(self.board[i:i+3]))
            if i < 6:
                print("-----")

    def available_moves(self):
        return [i for i, s in enumerate(self.board) if s == " "]

    def winner(self):
        lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for a, b, c in lines:
            if self.board[a] == self.board[b] == self.board[c] != " ":
                return self.board[a]
        if " " not in self.board:
            return "draw"
        return None

    def make_move(self, pos, player):
        self.board[pos] = player

    def undo_move(self, pos):
        self.board[pos] = " "

    def minimax(self, is_maximizing):
        result = self.winner()
        if result == "X":
            return 1
        if result == "O":
            return -1
        if result == "draw":
            return 0

        if is_maximizing:
            best = -math.inf
            for move in self.available_moves():
                self.make_move(move, "X")
                score = self.minimax(False)
                self.undo_move(move)
                best = max(best, score)
            return best
        else:
            best = math.inf
            for move in self.available_moves():
                self.make_move(move, "O")
                score = self.minimax(True)
                self.undo_move(move)
                best = min(best, score)
            return best

    def best_move(self):
        best_val = -math.inf
        best_pos = None
        for move in self.available_moves():
            self.make_move(move, "X")
            move_val = self.minimax(False)
            self.undo_move(move)
            if move_val > best_val:
                best_val = move_val
                best_pos = move
        return best_pos

if __name__ == "__main__":
    game = TicTacToe()
    print("Tic-Tac-Toe (AI = X, Human = O)")
    print("Enter position (0-8) when prompted.")
    game.print_board()
    while True:
        if game.current_player == "X":
            print("\nAI thinking...")
            move = game.best_move()
            game.make_move(move, "X")
        else:
            try:
                move = int(input("\nYour move (0-8): "))
                if move not in game.available_moves():
                    print("Invalid move! Try again.")
                    continue
                game.make_move(move, "O")
            except ValueError:
                print("Enter a number 0-8.")
                continue
        game.print_board()
        w = game.winner()
        if w:
            if w == "draw":
                print("It's a draw!")
            else:
                print(f"{w} wins!")
            break
        game.current_player = "O" if game.current_player == "X" else "X"
```

---

## Project 15: Stock Price Predictor (Moving Average)

**Concepts**: time series, SMA/EMA, golden cross/death cross

Moving averages smooth out short-term fluctuations in time series data to reveal underlying trends. Simple Moving Average (SMA) calculates the mean of prices over a window. Exponential Moving Average (EMA) gives more weight to recent prices, making it more responsive. The "golden cross" (50-day SMA crosses above 200-day SMA) signals a potential bull market; the "death cross" (50-day crosses below 200-day) signals a bear market.

This implementation generates synthetic stock data, computes SMA and EMA, and detects crossover signals. Moving averages remain among the most widely used indicators in technical analysis.

```python
import random
import math

def generate_stock_data(days=200, start=100, vol=0.02, trend=0.001):
    prices = [start]
    for _ in range(days - 1):
        change = random.gauss(trend, vol)
        prices.append(max(prices[-1] * (1 + change), 1))
    return prices

def sma(data, window):
    result = []
    for i in range(len(data)):
        if i < window - 1:
            result.append(None)
        else:
            result.append(sum(data[i-window+1:i+1]) / window)
    return result

def ema(data, window):
    multiplier = 2 / (window + 1)
    result = [data[0]]
    for i in range(1, len(data)):
        result.append((data[i] - result[-1]) * multiplier + result[-1])
    return result

def find_crosses(slow, fast):
    signals = []
    for i in range(1, len(slow)):
        if slow[i] is None or fast[i] is None or slow[i-1] is None or fast[i-1] is None:
            continue
        if fast[i-1] <= slow[i-1] and fast[i] > slow[i]:
            signals.append((i, "GOLDEN CROSS  "))
        elif fast[i-1] >= slow[i-1] and fast[i] < slow[i]:
            signals.append((i, "DEATH CROSS   "))
    return signals

if __name__ == "__main__":
    prices = generate_stock_data(200, start=100, vol=0.015, trend=0.0005)
    sma50 = sma(prices, 50)
    ema50 = ema(prices, 50)
    cross50_200 = find_crosses(sma(prices, 200), sma50)

    print(f"Last price: {prices[-1]:.2f}")
    print(f"Last SMA(50): {sma50[-1]:.2f}")
    print(f"Last EMA(50): {ema50[-1]:.2f}")
    print("\nCrossover signals (SMA50 vs SMA200):")
    for day, signal in cross50_200:
        print(f"  Day {day:3d}: {signal} (price={prices[day]:.2f})")
    print("\nFirst 10 prices:", [f"{p:.2f}" for p in prices[:10]])
```

---

## Project 16: Face Detection with OpenCV

**Concepts**: Haar cascades, computer vision, sliding window

Haar cascade classifiers use a sliding window approach to detect objects (faces) in images. A cascade is a series of progressively more complex classifiers trained on Haar-like features (edge, line, and rectangle features). The classifier quickly rejects non-face regions in early stages and spends more computation on promising regions in later stages.

OpenCV ships with pre-trained Haar cascades for face detection. This project loads an image, converts it to grayscale, runs the detector, and draws rectangles around detected faces. It is the same technology used in early digital cameras for face detection.

```python
import cv2
import numpy as np

def detect_faces(image_path: str, output_path: str = "output_faces.jpg"):
    face_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    )
    img = cv2.imread(image_path)
    if img is None:
        print(f"Could not load image: {image_path}")
        return
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(
        gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30)
    )
    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)
    cv2.imwrite(output_path, img)
    print(f"Detected {len(faces)} face(s). Output saved to {output_path}")

if __name__ == "__main__":
    print("Face Detection using OpenCV Haar Cascades")
    dummy = np.zeros((300, 300, 3), dtype=np.uint8)
    cv2.rectangle(dummy, (80, 80), (220, 220), (255, 255, 255), -1)
    cv2.imwrite("_test_face.png", dummy)

    face_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    )
    gray = cv2.cvtColor(dummy, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.1, 5, minSize=(30, 30))
    if len(faces) > 0:
        print(f"Demo: detected {len(faces)} face(s) in test image")
    else:
        print("Demo: no faces detected in the synthetic image (expected).")
    print("For real use: detect_faces('path/to/photo.jpg')")
```

---

## Project 17: Language Detector

**Concepts**: character n-grams, cosine similarity, language fingerprints

Language detection works by comparing the character n-gram profile of an unknown text against profiles of known languages. Character n-grams capture the distinctive letter sequences of each language. For example, English frequently uses "th", "he", "an", while French uses "le", "de", "es". These patterns act as unique fingerprints.

We compute the cosine similarity between the n-gram frequency vector of the input and each language's reference vector. The language with the highest similarity is selected. This method works well even for short texts and can distinguish between similar languages.

```python
import math
import re
from collections import Counter

class LanguageDetector:
    def __init__(self, n=2):
        self.n = n
        self.profiles = {}

    def _ngrams(self, text):
        text = text.lower()
        text = re.sub(r"[^a-z\s]", "", text)
        return [text[i:i+self.n] for i in range(len(text) - self.n + 1)]

    def _frequency_vector(self, ngrams_list):
        total = len(ngrams_list)
        if total == 0:
            return {}
        counts = Counter(ngrams_list)
        return {ng: c / total for ng, c in counts.items()}

    def add_language(self, name: str, text: str):
        ngs = self._ngrams(text)
        self.profiles[name] = self._frequency_vector(ngs)

    def cosine_similarity(self, vec1, vec2):
        all_keys = set(vec1.keys()) | set(vec2.keys())
        dot = sum(vec1.get(k, 0) * vec2.get(k, 0) for k in all_keys)
        n1 = math.sqrt(sum(v*v for v in vec1.values()))
        n2 = math.sqrt(sum(v*v for v in vec2.values()))
        if n1 == 0 or n2 == 0:
            return 0.0
        return dot / (n1 * n2)

    def detect(self, text: str) -> tuple:
        ngs = self._ngrams(text)
        vec = self._frequency_vector(ngs)
        best_lang = None
        best_sim = -1
        for lang, profile in self.profiles.items():
            sim = self.cosine_similarity(vec, profile)
            if sim > best_sim:
                best_sim = sim
                best_lang = lang
        return best_lang, best_sim

if __name__ == "__main__":
    ld = LanguageDetector(n=2)

    ld.add_language("English", "the quick brown fox jumps over the lazy dog. how now brown cow. "
                    "the rain in spain falls mainly on the plain. she sells sea shells by the sea shore")
    ld.add_language("French", "je pense donc je suis. la vie est belle. bonjour tout le monde. "
                    "il fait beau aujourd'hui. je ne parle pas francais. ou est la bibliotheque")
    ld.add_language("German", "die sonne scheint heute sehr hell. ich bin ein berliner. "
                    "guten morgen wie geht es ihnen. das auto ist sehr schnell. der himmel ist blau")
    ld.add_language("Spanish", "el sol brilla hoy. hola como estas. buenos dias a todos. "
                    "la casa es grande. me gusta la musica. muchas gracias por su ayuda")

    tests = [
        "hello world this is an english sentence",
        "bonjour tout le monde comment allez vous",
        "guten tag wie geht es ihnen heute",
        "hola buenos dias me llamo juan",
    ]
    for t in tests:
        lang, sim = ld.detect(t)
        print(f'"{t[:40]:40s}" -> {lang} (similarity={sim:.4f})')
```

---

## Project 18: Auto-Correct Spell Checker

**Concepts**: Levenshtein distance, edit distance, dictionary lookup

Levenshtein distance measures the minimum number of single-character edits (insertions, deletions, substitutions) needed to transform one word into another. This is used by spell checkers to find dictionary words closest to a misspelled input. For efficiency, we first check if the word is in the dictionary. If not, we generate candidate words by computing edit distance against all dictionary entries and return the closest matches.

The dynamic programming implementation fills a 2D table where dp[i][j] represents the edit distance between the first i characters of s1 and the first j characters of s2. This classic algorithm is also used in DNA sequence alignment.

```python
import re

class SpellChecker:
    def __init__(self, dictionary: set = None):
        self.dictionary = dictionary if dictionary else set()

    def load_dictionary(self, words: list):
        self.dictionary.update(w.lower() for w in words)

    def levenshtein(self, s1: str, s2: str) -> int:
        m, n = len(s1), len(s2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        for i in range(m + 1):
            dp[i][0] = i
        for j in range(n + 1):
            dp[0][j] = j
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                cost = 0 if s1[i-1] == s2[j-1] else 1
                dp[i][j] = min(
                    dp[i-1][j] + 1,        # deletion
                    dp[i][j-1] + 1,        # insertion
                    dp[i-1][j-1] + cost    # substitution
                )
        return dp[m][n]

    def correct(self, word: str, max_distance: int = 2) -> list:
        word = word.lower()
        if word in self.dictionary:
            return [(word, 0)]
        candidates = []
        for dict_word in self.dictionary:
            dist = self.levenshtein(word, dict_word)
            if dist <= max_distance:
                candidates.append((dict_word, dist))
        candidates.sort(key=lambda x: x[1])
        return candidates[:5]

if __name__ == "__main__":
    common_words = [
        "the", "be", "to", "of", "and", "a", "in", "that", "have", "it",
        "for", "not", "on", "with", "he", "as", "you", "do", "at", "this",
        "but", "his", "by", "from", "they", "we", "say", "her", "she", "or",
        "an", "will", "my", "one", "all", "would", "there", "their", "what",
        "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
        "when", "make", "can", "like", "time", "no", "just", "him", "know",
        "take", "people", "into", "year", "your", "good", "some", "could",
        "them", "see", "other", "than", "then", "now", "look", "only", "come",
        "its", "over", "think", "also", "back", "after", "use", "two", "how",
        "our", "work", "first", "well", "way", "even", "new", "want", "because",
        "any", "these", "give", "day", "most", "us", "great", "hello", "world",
        "python", "programming", "language", "computer", "science", "data"
    ]

    sc = SpellChecker()
    sc.load_dictionary(common_words)

    typos = ["helllo", "worlld", "programing", "langauge", "computr", "grat", "thir"]
    for typo in typos:
        suggestions = sc.correct(typo, max_distance=2)
        print(f"'{typo}' -> {suggestions}")
```

---

## Project 19: Recommendation Engine (Collaborative Filtering)

**Concepts**: user-item matrix, similarity, ratings

Collaborative filtering recommends items based on the preferences of similar users. Given a user-item rating matrix, we compute the similarity between users using Pearson correlation. For a target user, we find the most similar users who have rated an item that the target user hasn't, and predict the rating as a similarity-weighted average.

This is the algorithm behind "Users who bought this also bought..." on e-commerce sites. Unlike content-based filtering, it does not need item features — it learns from user behavior alone. The more users and ratings in the system, the better the recommendations.

```python
import math

class CollaborativeFilter:
    def __init__(self):
        self.ratings = {}

    def add_rating(self, user: str, item: str, rating: float):
        if user not in self.ratings:
            self.ratings[user] = {}
        self.ratings[user][item] = rating

    def _pearson(self, u1: str, u2: str) -> float:
        common = [item for item in self.ratings[u1] if item in self.ratings[u2]]
        if len(common) < 2:
            return 0.0
        mean1 = sum(self.ratings[u1][item] for item in common) / len(common)
        mean2 = sum(self.ratings[u2][item] for item in common) / len(common)
        num = sum((self.ratings[u1][item] - mean1) * (self.ratings[u2][item] - mean2) for item in common)
        d1 = math.sqrt(sum((self.ratings[u1][item] - mean1) ** 2 for item in common))
        d2 = math.sqrt(sum((self.ratings[u2][item] - mean2) ** 2 for item in common))
        if d1 == 0 or d2 == 0:
            return 0.0
        return num / (d1 * d2)

    def recommend(self, user: str, top_n: int = 3) -> list:
        if user not in self.ratings:
            return []
        others = [u for u in self.ratings if u != user]
        similarities = {u: self._pearson(user, u) for u in others}
        unseen = set()
        for u in others:
            for item in self.ratings[u]:
                if item not in self.ratings[user]:
                    unseen.add(item)

        predictions = []
        for item in unseen:
            total_sim = 0.0
            weighted_sum = 0.0
            for u in others:
                if item in self.ratings[u] and similarities[u] > 0:
                    weighted_sum += similarities[u] * self.ratings[u][item]
                    total_sim += similarities[u]
            if total_sim > 0:
                predictions.append((item, weighted_sum / total_sim))

        predictions.sort(key=lambda x: x[1], reverse=True)
        return predictions[:top_n]

if __name__ == "__main__":
    cf = CollaborativeFilter()
    cf.add_rating("Alice", "Inception", 5)
    cf.add_rating("Alice", "Matrix", 4)
    cf.add_rating("Alice", "Interstellar", 3)
    cf.add_rating("Bob", "Inception", 4)
    cf.add_rating("Bob", "Matrix", 5)
    cf.add_rating("Bob", "Dark Knight", 5)
    cf.add_rating("Charlie", "Matrix", 3)
    cf.add_rating("Charlie", "Dark Knight", 4)
    cf.add_rating("Charlie", "Interstellar", 5)
    cf.add_rating("Charlie", "Inception", 2)
    cf.add_rating("Diana", "Inception", 5)
    cf.add_rating("Diana", "Dark Knight", 4)

    recs = cf.recommend("Alice", top_n=3)
    print(f"Recommendations for Alice: {recs}")
    recs_bob = cf.recommend("Bob", top_n=3)
    print(f"Recommendations for Bob: {recs_bob}")
```

---

## Project 20: AI Puzzle Solver (8-Puzzle BFS)

**Concepts**: BFS search, state space, puzzle solving

The 8-puzzle is a sliding puzzle with 8 numbered tiles arranged in a 3x3 grid. The goal is to reach a target configuration by sliding tiles into the empty space. Breadth-First Search (BFS) explores the state space level by level, guaranteeing the shortest solution (minimum moves). Each state is a unique board configuration. We track visited states using a set and reconstruct the solution path by storing predecessors.

BFS works well for the 8-puzzle because the state space is small (9! / 2 = 181,440 reachable states). For the larger 15-puzzle, more sophisticated algorithms like A* with a heuristic are needed. This project demonstrates fundamental AI search concepts.

```python
from collections import deque

class EightPuzzle:
    def __init__(self, start, goal=None):
        self.start = tuple(start)
        self.goal = tuple(goal if goal else [1, 2, 3, 4, 5, 6, 7, 8, 0])

    def _find_zero(self, state):
        return state.index(0)

    def _neighbors(self, state):
        zero = self._find_zero(state)
        row, col = divmod(zero, 3)
        moves = []
        if row > 0:
            ns = list(state)
            ns[zero], ns[zero - 3] = ns[zero - 3], ns[zero]
            moves.append(tuple(ns))
        if row < 2:
            ns = list(state)
            ns[zero], ns[zero + 3] = ns[zero + 3], ns[zero]
            moves.append(tuple(ns))
        if col > 0:
            ns = list(state)
            ns[zero], ns[zero - 1] = ns[zero - 1], ns[zero]
            moves.append(tuple(ns))
        if col < 2:
            ns = list(state)
            ns[zero], ns[zero + 1] = ns[zero + 1], ns[zero]
            moves.append(tuple(ns))
        return moves

    def solve(self):
        if self.start == self.goal:
            return [self.start]
        queue = deque([self.start])
        visited = {self.start: None}
        while queue:
            state = queue.popleft()
            for neighbor in self._neighbors(state):
                if neighbor not in visited:
                    visited[neighbor] = state
                    if neighbor == self.goal:
                        path = [neighbor]
                        while state is not None:
                            path.append(state)
                            state = visited[state]
                        path.reverse()
                        return path
                    queue.append(neighbor)
        return None

    def print_state(self, state):
        for i in range(0, 9, 3):
            row = state[i:i+3]
            print(" ".join(str(x) if x != 0 else " " for x in row))

if __name__ == "__main__":
    start_board = [1, 2, 3, 4, 0, 5, 7, 8, 6]
    goal_board = [1, 2, 3, 4, 5, 6, 7, 8, 0]

    puzzle = EightPuzzle(start_board, goal_board)
    print("Start state:")
    puzzle.print_state(start_board)
    print("\nGoal state:")
    puzzle.print_state(goal_board)

    solution = puzzle.solve()
    if solution:
        print(f"\nSolution found in {len(solution) - 1} moves!")
        print("\nSolution path:")
        for i, state in enumerate(solution):
            print(f"Step {i}:")
            puzzle.print_state(state)
            print()
    else:
        print("No solution found.")
```

---

*Happy coding! These 20 projects cover the fundamental concepts of AI and Machine Learning — from rule-based systems to neural networks. Each one is a stepping stone toward building more sophisticated intelligent systems.*
