Create at least 3 JavaScript objects.

Each object should have at least one method.

Use the object literal method and the constructor function method at least once each to construct these objects.

* REMEBER the object literal method and constructor method are different!! * Reference the slide pdf for clarity.

 

Instantiate the objects and exemplify your understanding of them through JavaScript code and comments.


/* constructor function */
function Food[(type, tasty){
	this.type = type;
	this.tasty = tasty;	
}
	var my_food = new Food("pasta", "yup")
	
]

/* object literal method*/
var fav_show = {
	show: "Walking Dead",
	best_show: function() {
		return "The best show on tv is " + this.show;
	}
}


/* another object literal method */
var Melissa = {
	age = 23,
	setAge: function (newAge){
		this.age = newAge;
	}
};


/* messing around with other functions and methods*/  
/* below is a prototype function */
fucntion City(name, coast, appeal){
	this.name = name;
	this.coast = coast;
	this.appeal = appeal;
}

var NewYork = new City("New York", "East", "Unique");
var DC= new City("DC", "East", "Politics and drinking");
var LA = new City("LA", "West", "Pretty People");
var SanDiego = new City("San Diego", "West", "BEACH");

City.prototype.info = function(){
	return this.city + "is a great city!";
}


/* Added attributes to the method*/
var NewYork = {
	team: "Yankees",
	"Good-team": false
}

var fav_show = {
	show: "Walking Dead",
	best_show: function() {
		return "The best show on tv is " + this.show;
	}
}



