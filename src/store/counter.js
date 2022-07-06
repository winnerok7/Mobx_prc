import { makeAutoObservable, makeObservable } from "mobx"

class Counter {
   count = 0;
   timer = 60;

   constructor() {
      makeAutoObservable(this)
   }

   increment() {
      this.count = this.count + 1
   }

   decrement() {
      this.count = this.count - 1
   }

   get total() {
      return "count + timer = " + this.timer + this.count
   }
}


export default new Counter()