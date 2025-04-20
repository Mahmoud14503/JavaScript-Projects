class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	printFavoriteBooks() {
		console.log(`Favorite Books: ${this.favoriteBooks.length}`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}


function loadBooks(instance) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API, function(boooks) {
		for (let i = 0; i < boooks.length; i++)
		{
			instance.addFavoriteBook(boooks[i]);
		}
		instance.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

loadBooks(new Bookshelf());
// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
