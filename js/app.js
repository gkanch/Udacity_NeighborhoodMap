/* Cat data */
var initialCats = [
	{
		imgSrc: 'img/cat01.jpg',
		name: 'Tabby',
		clickCount: 0,
		nicknames: [
			{ name: 'Tabtab', id: 121 },
			{ name: 'T-bone', id: 122 },
			{ name: 'Mr. T', id: 123}
		]
	},
	{
		imgSrc: 'img/cat02.jpg',
		name: 'Tiger',
		clickCount: 0,
		nicknames: [
			{ name: 'Tigger', id: 221 }
		]
	},
	{
		imgSrc: 'img/cat03.jpg',
		name: 'Tommy',
		clickCount: 0,
		nicknames: [
			{ name: 'Zack', id: 321 }
		]
	},
	{
		imgSrc: 'img/cat04.jpg',
		name: 'Lulu',
		clickCount: 0,
		nicknames: [
			{ name: 'Luny', id: 421 }
		]
	},
	{
		imgSrc: 'img/cat05.jpg',
		name: 'Bat',
		clickCount: 0,
		nicknames: [
			{ name: 'Batty', id: 521 }
		]
	},
	{
		imgSrc: 'img/cat06.jpg',
		name: 'Doze',
		clickCount: 0,
		nicknames: [
			{ name: 'Dozy', id: 621 }
		]
	},
]

/* Cat Constructor */
var Cat = function(data) {
	
	// *** Observables & Observable Array ***
	this.imgSrc = ko.observable(data.imgSrc);
	this.name = ko.observable(data.name);
	//this.imgAttribution = ko.observable(data.imgAttribution);
	this.clickCount = ko.observable(data.clickCount);
	this.nicknamesArray = ko.observableArray(data.nicknames);
	
	// *** title ***
	this.title = ko.computed(function() {
		var title = null;
		var clicks = this.clickCount();
		if (clicks > 500) {
			title = 'Ninja';
		} else if (clicks > 200) {
			title = 'Adult';
		} else if (clicks > 100) {
			title = 'Teen';
		} else if (clicks > 50) {
			title = 'Child';
		} else if (clicks > 10) {
			title = 'Infant';
		} else {
			title = 'Newborn';
		}
		return title;
	}, this);
}

/* ViewModel */
var ViewModel = function() {
	var self = this; /* self points to ViewModel */
	
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});
	
	this.currentCat = ko.observable( this.catList()[0] );
	
	this.incrementCounter = function() {
		var previousCount = self.currentCat().clickCount();
		self.currentCat().clickCount(previousCount + 1);
	};
	
	this.setCat = function(clickedCat) {
		console.log(clickedCat.name());
		self.currentCat(clickedCat);
	};
	
	/*this.updateCurrentCat = function() {
		this.currentCat = ko.observable(  );
	};*/
}

ko.applyBindings(new ViewModel());

