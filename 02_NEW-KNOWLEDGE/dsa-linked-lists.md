---
id: 5a9e3a60-dfa0-410a-8d19-df427e1b5f64
title: DSA Linked Lists
type: atomic-note
status: learning
domain: general
source_type: course
created: 2026-07-24
updated: 2026-07-24
review: 2026-08-24
confidence: 85
version: 1
aliases: [Linked Lists, LL]
tags: [implementation, example]
owner_moc: Python DSA ML Mastery MOC
sources: []
related: ["[[DSA Stacks and Queues]]", "[[DSA Arrays and Strings]]", "[[Python OOP Mastery]]"]
schema_version: 4
---

Linked lists teach you pointer manipulation—the absolute foundation for understanding trees, graphs, and memory management. While ML models often rely on contiguous memory (like NumPy arrays/tensors for fast GPU access), understanding linked lists is crucial for cracking the DSA rounds of ML engineering interviews, manipulating complex graph structures in deep learning (like Graph Neural Networks), and understanding custom memory allocators.

## 1. Why Linked Lists vs Arrays?

Arrays store elements contiguously in memory, which is great for cache locality (fast access). Linked Lists store elements as separate objects (nodes) scattered in memory, connected via pointers. 

| Feature | Arrays / Python Lists | Linked Lists |
| :--- | :--- | :--- |
| **Memory Allocation** | Contiguous chunk | Scattered (Nodes) |
| **Size** | Fixed (or Dynamic with overhead) | Truly dynamic |
| **Access (Index)** | $O(1)$ | $O(N)$ |
| **Insert/Delete (Start)** | $O(N)$ - requires shifting | $O(1)$ |
| **Insert/Delete (End)** | $O(1)$ amortized | $O(1)$ if tail pointer exists |
| **Cache Friendliness** | High (Locality of reference) | Low |

> 🤖 **ML Connection**: PyTorch/TensorFlow use contiguous memory (arrays) under the hood because GPUs blast through contiguous memory. But for dynamic data pipelines or graph-based models, linked list concepts are fundamental.

## 2. Singly Linked List

A Singly Linked List is a collection of nodes where each node contains data and a reference (`next`) to the next node.

```mermaid
graph LR
    A[Data: 10 | Next] --> B[Data: 20 | Next]
    B --> C[Data: 30 | Next]
    C --> D[Null]
```

### Node and Basic Operations

Let's build a fully functional Singly Linked List class.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.size = 0
        
    def insert_at_beginning(self, val):
        """O(1) time complexity."""
        new_node = ListNode(val, self.head)
        self.head = new_node
        self.size += 1
        
    def insert_at_end(self, val):
        """O(N) time complexity without tail pointer."""
        new_node = ListNode(val)
        if not self.head:
            self.head = new_node
        else:
            curr = self.head
            while curr.next:
                curr = curr.next
            curr.next = new_node
        self.size += 1
        
    def insert_at_position(self, pos, val):
        """O(N) time complexity. pos is 0-indexed."""
        if pos < 0 or pos > self.size:
            raise ValueError("Invalid position")
        if pos == 0:
            self.insert_at_beginning(val)
            return
            
        new_node = ListNode(val)
        curr = self.head
        for _ in range(pos - 1):
            curr = curr.next
        new_node.next = curr.next
        curr.next = new_node
        self.size += 1
        
    def delete_value(self, val):
        """O(N) time complexity."""
        if not self.head:
            return False
            
        if self.head.val == val:
            self.head = self.head.next
            self.size -= 1
            return True
            
        curr = self.head
        while curr.next and curr.next.val != val:
            curr = curr.next
            
        if curr.next: # Found the value
            curr.next = curr.next.next
            self.size -= 1
            return True
        return False
        
    def display(self):
        """Traverse and print. O(N) time."""
        elements = []
        curr = self.head
        while curr:
            elements.append(str(curr.val))
            curr = curr.next
        print(" -> ".join(elements) + " -> None")

# --- Testing ---
sll = SinglyLinkedList()
sll.insert_at_end(10)
sll.insert_at_end(20)
sll.insert_at_beginning(5)
sll.insert_at_position(2, 15)
sll.display() # Output: 5 -> 10 -> 15 -> 20 -> None
sll.delete_value(15)
sll.display() # Output: 5 -> 10 -> 20 -> None
```

## 3. Doubly Linked List

Nodes have references to both `next` and `prev` nodes. This allows for $O(1)$ deletion if you have the node reference, and bidirectional traversal.

```mermaid
graph LR
    A[Null] <--Prev--- B[Data: 10] ---Next--> C[Data: 20]
    B <--Prev--- C ---Next--> D[Null]
```

```python
class DLLNode:
    def __init__(self, val=0, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None # Tail pointer makes append O(1)
        
    def append(self, val):
        """O(1) insertion at end."""
        new_node = DLLNode(val)
        if not self.head:
            self.head = self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
            
    def delete_node(self, node):
        """O(1) deletion given the node reference."""
        if not node:
            return
            
        if node.prev:
            node.prev.next = node.next
        else:
            self.head = node.next # Node was head
            
        if node.next:
            node.next.prev = node.prev
        else:
            self.tail = node.prev # Node was tail
            
    def display_reverse(self):
        """O(N) reverse traversal."""
        elements = []
        curr = self.tail
        while curr:
            elements.append(str(curr.val))
            curr = curr.prev
        print(" <- ".join(elements))

# --- Testing ---
dll = DoublyLinkedList()
dll.append(1)
dll.append(2)
dll.append(3)
dll.display_reverse() # Output: 3 <- 2 <- 1
```

## 4. Fast and Slow Pointer Technique (Runner Technique)

This is the most common pattern in Linked List interviews. Use two pointers moving at different speeds.

### Cycle Detection (Floyd's Tortoise and Hare)
If there is a cycle, the fast pointer (moving 2 steps) will eventually lap the slow pointer (moving 1 step).

```python
def has_cycle(head):
    """
    Time: O(N), Space: O(1)
    """
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next          # Moves 1 step
        fast = fast.next.next     # Moves 2 steps
        if slow == fast:          # They met!
            return True
    return False
```

### Finding the Middle of the Linked List
When the fast pointer reaches the end, the slow pointer will be at the middle.

```python
def find_middle(head):
    """
    Time: O(N), Space: O(1)
    """
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow # slow is now at the middle
```

### Finding the Nth Node from End
Move `fast` pointer `N` steps ahead. Then move both until `fast` hits the end.

```python
def find_nth_from_end(head, n):
    """
    Time: O(N), Space: O(1)
    """
    slow, fast = head, head
    
    # Move fast n steps ahead
    for _ in range(n):
        if not fast: return None # N is larger than length
        fast = fast.next
        
    while fast:
        slow = slow.next
        fast = fast.next
        
    return slow
```

## 5. Reversal Patterns

🎯 **Interview Tip**: Reversing a linked list is the "Hello World" of pointer manipulation. You MUST be able to write the iterative version flawlessly on a whiteboard.

### Reverse Entire List

```python
def reverse_list_iterative(head):
    """
    Time: O(N), Space: O(1)
    """
    prev = None
    curr = head
    while curr:
        next_temp = curr.next # Save next node
        curr.next = prev      # Reverse pointer
        prev = curr           # Move prev forward
        curr = next_temp      # Move curr forward
    return prev # prev is the new head
```

```python
def reverse_list_recursive(head):
    """
    Time: O(N), Space: O(N) due to call stack.
    """
    if not head or not head.next:
        return head
    
    reversed_head = reverse_list_recursive(head.next)
    head.next.next = head # Reverse the link
    head.next = None      # Break the old link
    
    return reversed_head
```

### Reverse Between Positions (m to n)

```python
def reverse_between(head, left, right):
    """
    Reverse from position 'left' to 'right' (1-indexed).
    Time: O(N), Space: O(1)
    """
    if not head or left == right:
        return head
        
    dummy = ListNode(0, head)
    prev = dummy
    
    # 1. Reach node at position left - 1
    for _ in range(left - 1):
        prev = prev.next
        
    # 2. Start reversing
    curr = prev.next
    for _ in range(right - left):
        next_temp = curr.next
        curr.next = next_temp.next
        next_temp.next = prev.next
        prev.next = next_temp
        
    return dummy.next
```

### Reverse in Groups of K

```python
def reverseKGroup(head, k):
    """
    Time: O(N), Space: O(1)
    """
    # 1. Check if we have k nodes left
    curr = head
    count = 0
    while curr and count != k:
        curr = curr.next
        count += 1
    
    # 2. If we have k nodes, reverse them
    if count == k:
        curr = reverseKGroup(curr, k) # Recursively reverse the rest
        # Reverse current k nodes
        while count > 0:
            next_temp = head.next
            head.next = curr
            curr = head
            head = next_temp
            count -= 1
        head = curr # New head of this group
        
    return head
```

## 6. Merge Operations

### Merge Two Sorted Lists

```python
def mergeTwoLists(list1, list2):
    """
    Time: O(N + M), Space: O(1)
    """
    dummy = ListNode(0)
    tail = dummy
    
    while list1 and list2:
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next
        
    # Attach remaining elements
    tail.next = list1 if list1 else list2
    
    return dummy.next
```

### Sort a Linked List (Merge Sort)

```python
def sortList(head):
    """
    Time: O(N log N), Space: O(log N) for call stack
    """
    if not head or not head.next:
        return head
        
    # 1. Find middle
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
    mid = slow.next
    slow.next = None # Break the list into two halves
    
    # 2. Recursively sort both halves
    left = sortList(head)
    right = sortList(mid)
    
    # 3. Merge sorted halves
    return mergeTwoLists(left, right)
```

### Merge K Sorted Lists (Intro)
This is typically solved using a Min-Heap (Priority Queue) or Divide and Conquer. (Implementation deferred to Heap section, but the idea is to either pair-wise merge lists or use a heap to continually extract the minimum of the K current heads).

## 7. Common Interview Problems

### Find Cycle Start Node
Floyd's algorithm extension. Once `slow` and `fast` meet, reset `slow` to `head` and move both by 1 step. Where they meet is the start of the cycle.

```python
def detectCycle(head):
    """
    Time: O(N), Space: O(1)
    """
    slow, fast = head, head
    has_cycle = False
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
            
    if not has_cycle:
        return None
        
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
        
    return slow # Start of cycle
```

### Palindrome Linked List
Find middle, reverse the second half, compare both halves.

```python
def isPalindrome(head):
    """
    Time: O(N), Space: O(1)
    """
    if not head or not head.next: return True
    
    # 1. Find middle
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
    # 2. Reverse second half
    prev = None
    curr = slow
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
        
    # 3. Compare
    left, right = head, prev
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
        
    return True
```

### Remove Nth Node From End
Use dummy node to handle edge case where head needs to be removed.

```python
def removeNthFromEnd(head, n):
    """
    Time: O(N), Space: O(1)
    """
    dummy = ListNode(0, head)
    slow = fast = dummy
    
    # Move fast n+1 steps ahead
    for _ in range(n + 1):
        fast = fast.next
        
    # Move both until fast reaches end
    while fast:
        slow = slow.next
        fast = fast.next
        
    # Skip the nth node
    slow.next = slow.next.next
    
    return dummy.next
```

### Add Two Numbers
Given two numbers represented by linked lists in reverse order (e.g., 342 is 2->4->3).

```python
def addTwoNumbers(l1, l2):
    """
    Time: O(max(N, M)), Space: O(max(N, M)) for new list
    """
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        
        total = val1 + val2 + carry
        carry = total // 10
        
        curr.next = ListNode(total % 10)
        curr = curr.next
        
        if l1: l1 = l1.next
        if l2: l2 = l2.next
        
    return dummy.next
```

### Intersection of Two Linked Lists
Align their tails. If length A > length B, advance A by (lenA - lenB) steps, then move both together.

```python
def getIntersectionNode(headA, headB):
    """
    Time: O(N + M), Space: O(1)
    Smart trick: Traverse A then B, and B then A. They will traverse same total distance.
    """
    if not headA or not headB:
        return None
        
    a, b = headA, headB
    
    while a != b:
        # If a reaches end, switch to headB, else move to next
        a = headB if a is None else a.next
        # If b reaches end, switch to headA, else move to next
        b = headA if b is None else b.next
        
    return a
```

### Copy List with Random Pointer
Deep copy a linked list where nodes also have a `random` pointer.

```python
class Node:
    def __init__(self, x, next=None, random=None):
        self.val = int(x)
        self.next = next
        self.random = random

def copyRandomList(head):
    """
    Time: O(N), Space: O(N) using Hash Map.
    Note: Can be done in O(1) space by interleaving nodes.
    """
    if not head:
        return None
        
    old_to_new = {}
    
    # 1. First pass: clone nodes and store in map
    curr = head
    while curr:
        old_to_new[curr] = Node(curr.val)
        curr = curr.next
        
    # 2. Second pass: assign next and random pointers
    curr = head
    while curr:
        if curr.next:
            old_to_new[curr].next = old_to_new[curr.next]
        if curr.random:
            old_to_new[curr].random = old_to_new[curr.random]
        curr = curr.next
        
    return old_to_new[head]
```

### Reorder List
Reorder `L0 -> L1 -> L2 -> ... -> Ln` to `L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 ...`

```python
def reorderList(head):
    """
    Time: O(N), Space: O(1)
    """
    if not head or not head.next:
        return
        
    # 1. Find middle
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
    # 2. Reverse second half
    prev = None
    curr = slow.next
    slow.next = None # Sever the first half
    
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
        
    # 3. Merge two halves alternately
    first, second = head, prev
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first, second = tmp1, tmp2
```

### Flatten a Multilevel Doubly Linked List
Each node has a `child` pointer to another doubly linked list. Flatten it to a single level.

```python
def flatten(head):
    """
    Time: O(N), Space: O(1) - Iterative DFS approach
    """
    if not head:
        return head
        
    curr = head
    while curr:
        if curr.child:
            # Find tail of the child list
            child_tail = curr.child
            while child_tail.next:
                child_tail = child_tail.next
                
            # Connect child_tail to curr.next
            if curr.next:
                curr.next.prev = child_tail
                child_tail.next = curr.next
                
            # Connect curr to child list
            curr.next = curr.child
            curr.child.prev = curr
            curr.child = None # Important: remove child pointer
            
        curr = curr.next
        
    return head
```

---

## 📝 Practice Problems (LeetCode)
1. **Easy**: Reverse Linked List (206)
2. **Easy**: Merge Two Sorted Lists (21)
3. **Easy**: Linked List Cycle (141)
4. **Medium**: Remove Nth Node From End of List (19)
5. **Medium**: Copy List with Random Pointer (138)
6. **Medium**: Add Two Numbers (2)
7. **Medium**: Sort List (148)
8. **Hard**: Reverse Nodes in k-Group (25)
