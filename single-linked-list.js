class LinkedListNode {
  // contructor is a function that runs one time
  // Can still use the variables in previous constructors inside the class
    constructor(val) {
      this.value = val;
      this.next = null;
    }
  }
  
  //when we are creating a new linked list we want a way to add 
  //something to the beginning and end of the linked list
  //Want 2 properties in the constructor for the linked list (Head and Length)
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    addToHead(val) {
      const newNode = new LinkedListNode(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
  
    addToTail(val) {
      const newNode = new LinkedListNode(val);
      this.length++;
      if (!this.head){
        this.head = newNode
        return;
      };
      let current = this.head
      //as long as current has a truthy, or valid next property,
      //keep going until we find the end
      while (current.next){
        current = current.next
      };
      current.next = newNode
    };

    removeFromHead(){
      if (!this.head){
        return console.log('There are no Nodes')
      }
      let node = this.head
      this.length--;
      this.head = this.head.next;
      console.log(node.value)
      return node.value
    };
  
    removeFromTail(){
      if (!this.head){
        return console.log('There are no Nodes')
      }
      this.length--;
      let current = this.head;
      let previous = null;
      while (current.next){
        previous = current;
        current = current.next;
      };
      if (!previous){
        this.head = null;
      }else{
        previous.next = null;
      };
      console.log(current.value)
      return current.value;

    };

    // You can use this function to help debug
    print() {
      let current = this.head;
  
      while (current) {
        process.stdout.write(`${current.value} -> `);
        current = current.next;
      }
  
      console.log("NULL");
    }
  }
  
const newList = new LinkedList();
newList.addToTail('a letter')
newList.addToTail('a number')
newList.addToTail('a something')
newList.removeFromHead()
newList.print();

  module.exports = LinkedList;