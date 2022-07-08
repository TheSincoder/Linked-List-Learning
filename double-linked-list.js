class DoublyLinkedListNode {
    constructor(val) {
      this.value = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    addToHead(val) {
      const newNode = new DoublyLinkedListNode(val);
      this.length++;
      if (!this.head){
        this.head = newNode;
        this.tail = newNode;
      }else{
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
      };
    };
  
    addToTail(val) {
        const newNode = new DoublyLinkedListNode(val);
        this.length++;
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;    
        }else{  
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        };
    };

    removeFromHead(){
        if (!this.head){
            return console.log('There are no heads or tails. You think this is a coin or what?')
        }
        let node = this.head;
        this.length--;
        this.head = this.head.next;
        if (this.head){
            this.head.prev = null
        };
        console.log(node.value);
        return node.value;
    }

    removeFromTail(){
        if (!this.tail){
            return console.log('There are no heads or tails. You think this is a coin or what?')
        }
        let node = this.tail;
        this.length--;
        this.tail = this.tail.prev;
        if (this.tail){
            this.tail.next = null
        };
        console.log(node.value);
        return node.value;
    }
  
    // You can use this function to help debug
    print() {
      let current = this.head;
  
      while (current) {
        process.stdout.write(`${current.value} <-> `);
        current = current.next;
      }
  
      console.log("NULL");
    }
  }
  
  const newList = new DoublyLinkedList();
  newList.addToHead('a letter')
  newList.addToHead('a number')
  newList.addToHead('a something')
  newList.removeFromTail()
//   newList.removeFromHead()
  newList.print();

  module.exports = DoublyLinkedList;