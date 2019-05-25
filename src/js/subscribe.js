function Subscribe() {
    this.handlers = [];  // observers
 }
  
 Subscribe.prototype = {
  
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
  
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
  
    fire: function(o) {
        this.handlers.forEach(function(item) {
            item(o);
        });
    },
   
   sub_unsub: function(fn){
     if (this.handlers.indexOf(fn) !== -1){
       this.unsubscribe(fn)
     } else {
       this.subscribe(fn)
     }
   }
 }