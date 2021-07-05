"use strict";

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

  toString() {
    let list = [];
    let current = this.head;
    while (current.next) {
      list.push(current.value);
      current = current.next;
    }
    // console.log('arr',list);
    let string = list.toString();
    return string;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Node();
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, val) => {
        return acc + val.charCodeAt(0);
      }, 0) *
        599) %
      this.size
    );
  }

  add(key, val) {
    let hashVal = this.hash(key);
    console.log(hashVal);
    if (!this.map[hashVal]) {
      if (!this.head) {
        this.head = new Node(val);
        return;
      }

      let current = this.head;
      let newHead = new Node(val);
      newHead.next = current;
      // newHead.place = current.place-1;
      this.head = newHead;
    }
    // this.map[hashVal].push({[key]:val});
    // 453pm 21 sept
  }

  contains(key) {
    // 455pm
    let hashKey = this.hash(key);
  }

  get(key) {
    //
  }
}

let map = new Hashmap(10);

function duplicate(string) {
  let val = string.match(/[a-z]*\w+/gi);
  console.log(val);
  for (i = 0; i < val.length; i++) {
    let bucket = map.hash(val[i]);
    map.add(val[i], val[i]);
    console.log(map[bucket]);
  }
}

duplicate("Once upon a time, there was a brave princess who...");

console.log(map);
