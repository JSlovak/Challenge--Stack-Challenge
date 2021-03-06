console.log("Hello linked world!");


function linkedListGenerator(){

  var listOfNodes = {};
  var node = {};
  var head = null;
  var tail = null;


  function getHead(){
   return head;
  }

  function getTail(){
   return tail;
  }

  function add(value){
    if (head === null){

      tail = {
        value: value,
        next: null,
      };

      head = tail;
      return tail;

    } else {

      tail.next = {
        value: value,
        next: null
      };

      tail = tail.next;
    }

    return tail;
  }

  function get(number){
    var currNode = head;

    for (var i = 0; i < number; i++){
      if (currNode === null){
        return false;
      } else {

      currNode = currNode.next;
    }
        return currNode;
    }
  }

  function remove(number){
    var target = get(number);
    var prevNode = get((number-1));
    var nextNode = get((number+1));

    if (target === false){
      return false;
    }

    if (target === tail) {
      tail = prevNode;
      prevNode.next = null;
    }

    if (target === head){
      head = nextNode;
      target = null;
    } else {

      prevNode.next = nextNode;
    }
  }

  return {
    getHead:getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,

  };

}