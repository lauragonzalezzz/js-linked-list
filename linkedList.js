/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {
	
	var head = null;
	var tail = null;

	var module = {
		getHead : function getHead(){
			return head;
		},
		getTail : function(){
			return tail;
		},
		add : function(value){
			var newNode = {
				value : value,
				next : null
			};
			if (module.getHead() === null && module.getTail() === null) {
				head = newNode;
				tail = newNode;
			} else {
				tail.next = newNode;
				tail = newNode;
			}
			return newNode;
		},
		remove : function(n){
			var x = n - 1;
			var y = n + 1;
			var previous = module.get(x);
			var next = module.get(y);
			if (n === 0) {
				return head = module.get(y);
			}
			if (module.get(n).next === null) {
				tail = previous;
				return previous.next = null;
			} else if (module.get(n) === false) {
				return false;
			} else {
				previous.next = next;
				return module.get(n).next = null;
			}
		},
		
		get : function(n){
			if (n === 0) {
				return head;
			}
			else {
				var current = head;
				var count = 0;
				while (current.next !== null) {
					count++;
					current = current.next;
					if (count === n) {
						return current;
					}
				}
			}
			return false;

		},
		insert : function(){}

	}



	return module;
}

