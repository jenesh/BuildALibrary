class Media {
    constructor(title) {
        this._tile = title;
        this._rating = [];
        this._checkedOut = false;
    }
    get title() {
        return this._title
    };
    get isCheckedOut() {
        return this._checkedOut
    };
    get ratings() {
        return this._rating
    };

    set checkedOut(bool) {
        this._checkedOut = bool
    };
    toggleCheckOutStatus() {
        this._checkedOut = !this._checkedOut;
    }
    getAverageRating() {
        return this._rating.reduce((acc, num) => acc + num, 0) / this._rating.length;
    }
    addRating(num) {
        this._rating.push(num);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author
    };
    get pages() {
        return this._pages
    };
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director
    };
    get runTime() {
        return this._runTime
    };
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating());



// Add more properties to each class (movieCast, songTitles, etc.)
// Create a CD class that extends Media.
// In .addRating(), make sure input is between 1 and 5.
// Create a method called shuffle for the CD class. The method returns a randomly
// sorted array of all the songs in the songs property.
// Create class called Catalog that holds all of the Media items in our library.



