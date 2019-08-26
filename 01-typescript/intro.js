function add(x, y) {
    return x + y;
}
function sort(list, comparerFn) {
    for (var i = 0; i < list.length - 1; i++)
        for (var j = i + 1; j < list.length; j++) {
            var left = list[i], right = list[j];
            if (comparerFn(left, right) > 0) {
                var temp = left;
                list[i] = list[j];
                list[j] = temp;
            }
        }
}
var ProductTypes;
(function (ProductTypes) {
    ProductTypes["Stationary"] = "stationary";
    ProductTypes["Grocery"] = "grocery";
})(ProductTypes || (ProductTypes = {}));
var products = [
    { id: 5, name: 'Pen', cost: 60, units: 40, category: ProductTypes.Stationary },
    { id: 9, name: 'Len', cost: 40, units: 30, category: ProductTypes.Grocery },
    { id: 7, name: 'Ten', cost: 80, units: 80, category: ProductTypes.Grocery },
    { id: 3, name: 'Den', cost: 50, units: 70, category: ProductTypes.Stationary },
    { id: 6, name: 'Zen', cost: 60, units: 50, category: ProductTypes.Stationary },
];
var productComparerByCost = function (p1, p2) {
    if (p1.cost < p2.cost)
        return -1;
    if (p1.cost > p2.cost)
        return 1;
    return 0;
};
sort(products, productComparerByCost);
console.table(products);
var Employee = (function () {
    var idSymbol = Symbol();
    var Employee = /** @class */ (function () {
        function Employee(id, name, salary) {
            this.name = '';
            this.salary = 0;
            this[idSymbol] = id;
            this.name = name;
            this.salary = salary;
        }
        Object.defineProperty(Employee.prototype, "id", {
            get: function () {
                return this[idSymbol];
            },
            enumerable: true,
            configurable: true
        });
        Employee.prototype.display = function () {
            console.log("id = " + this[idSymbol] + ", name=" + this.name);
        };
        return Employee;
    }());
    return Employee;
})();
var emp = new Employee(100, 'Magesh', 10000);
emp.display();
console.log(emp.id);
emp.id = 300;
console.log(emp.id);
