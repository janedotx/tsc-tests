class LLNode(object):
  def __init__(self, value):
      self.value = value
      self.next  = None

def find_cycle(node):
  pointer1 = node
  pointer2 = node
  while (True):
    print(pointer1.value)
    print(pointer2.value)
    if (pointer1.next):
      pointer1 = pointer1.next
    else:
      return False
    if (pointer2.next and pointer2.next.next):
      pointer2 = pointer2.next.next
    else:
      return False
    if (pointer1 == pointer2):
      return True
    
node1 = LLNode(1)
node2 = LLNode(2)
node3 = LLNode(3)

node1.next = node2
node2.next = node3

print(find_cycle(node1))

node4 = LLNode(4)
node5 = LLNode(5)
node6 = LLNode(6)
node7 = LLNode(7)

node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node4
print(find_cycle(node4))