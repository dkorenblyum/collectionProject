

var Vehicle = Backbone.Model.extend({

	idAttribute : "registrationNumber",
	validate: function(attributesObject){
		if (!attributesObject.registrationNumber){
			return "Must have a registration number";
		}
	},
	urlRoot: "/api/vehicles",
	start: function(){
		console.log("Vehicle has started");
	}
});

var Car = Vehicle.extend({
	start:function(){
		console.log("car with the registration number:", this.get("registrationNumber"), "has started");
	}
});

var Cars = Backbone.Collection.extend({
	model : Car
});

var cars = new Cars([
	new Car({registrationNumber:“XLI887”,color:“Blue”}),
	new Car({registrationNumber:“ZNP123”,color:“Blue”}),
	new Car({registrationNumber:“XUV456”,color:“Gray”})
]);

var blueCars = cars.where({color: "Blue"});
console.log(blueCars);
var registeredCar = cars.findWhere({registrationNumber: "XLI887"});
cars.remove(registeredCar);
jsonCars = cars.toJSON();
console.log(jsonCars);
cars.each(function(car){
	console.log(car)
});

// var car = new Car({
// 	registrationNumber: "XLI887",
// 	color: "Blue"
// });

// car.unset("registrationNumber");

// if (!car.isValid()){
// 	console.log(car.validationError);
// }else{
// 	console.log("This car is registered");
// }

// car.set("registrationNumber", "XLI887")

// if (!car.isValid()){
// 	console.log(car.validationError);
// }else{
// 	console.log("This car is registered");
// }

// var Animal = Backbone.Model.extend({
// 	walk: function(){"Animal is walking"}
// });

// var dog = Animal.extend({
// 	walk: function(){
// 		Animal.prototype.walk.apply(this);
// 		console.log(dog is walking);
// 	}
// });
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.