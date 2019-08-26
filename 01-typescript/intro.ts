function add(x : number, y : number) : number {
	return x + y;
}

/*
interface Employee{
	id : number,
	name : string,
	salary : number
}

function display(emp : Employee){
	console.log(`id=${emp.id}, name=${emp.name}, salary=${emp.salary}`)
}

//let emp = new Employee(100, 'Magesh', 10000);
var serverRes : string = '{"id" : 200, "name" : "suresh", "salary" : 10000}';
var data = JSON.parse(serverRes);
display(data);
*/

/*
function sort(list){
	for(var i=0; i < list.length-1; i++)
		for(var j=i+1; j < list.length; j++){
			var left = list[i],
				right = list[j];

			if (left.id > right.id){
				var temp = left;
				list[i] = list[j];
				list[j] = temp;
			}
		}
}
*/
interface Comparer{
	(item1 : any, item2 : any) : number
}

function sort(list : Array<any>, comparerFn : Comparer){
	for(var i=0; i < list.length-1; i++)
		for(var j=i+1; j < list.length; j++){
			var left = list[i],
				right = list[j];

			if (comparerFn(left, right) > 0 ){
				var temp = left;
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

enum ProductTypes{
	Stationary = 'stationary',
	Grocery = 'grocery'
}

interface Product{
	id : number,
	name : string,
	cost : number,
	units : number,
	category : ProductTypes
}


var products = [
	{id : 5, name : 'Pen', cost : 60, units : 40, category : ProductTypes.Stationary},
	{id : 9, name : 'Len', cost : 40, units : 30, category : ProductTypes.Grocery},
	{id : 7, name : 'Ten', cost : 80, units : 80, category : ProductTypes.Grocery},
	{id : 3, name : 'Den', cost : 50, units : 70, category : ProductTypes.Stationary},
	{id : 6, name : 'Zen', cost : 60, units : 50, category : ProductTypes.Stationary},
];

var productComparerByCost = function(p1, p2){
	if (p1.cost < p2.cost) return -1;
	if (p1.cost > p2.cost) return 1;
	return 0;
}

sort(products, productComparerByCost);
console.table(products);

let Employee = (function(){
	let idSymbol = Symbol();

	class Employee{
		
		public name : string = '';
		public salary : number = 0;

		constructor(id, name, salary){
			this[idSymbol] = id;
			this.name = name;
			this.salary = salary;
	    }
	    get id(){
	    	return this[idSymbol];
	    }
		display(){
			console.log(`id = ${this[idSymbol]}, name=${this.name}`);
	    }
	}
	return Employee;
})();

var emp = new Employee(100, 'Magesh', 10000);
emp.display();

console.log(emp.id)

emp.id = 300;

console.log(emp.id)


