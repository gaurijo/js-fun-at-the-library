function shelfBook(writeBook, shelf) { // take in a book and append it to an array "shelf"
  if (shelf.length < 3) { // it can only add more books if it doesn't already have 3
    shelf.unshift(writeBook); // order matters here, the first book listed in the arguments should be the last book on the shelf
                              // if you didn't care about order you could use .push instead of .unshift or .splice on the array
  }
  return shelf;
}

function unshelfBook(bookName, shelf) { // takes in a book name and a shelf
  for(var i = 0; i < shelf.length; i++) { // for each element in the shelf, starting at the first element and incrementing until the list is less than the length of the shelf,
    if (shelf[i].title === bookName){ // if the title at that index position on the shelf is equal to the book's name
      shelf.splice(i,1) // splice (remove element) at that index
    }
  }
  return shelf;
}

function listTitles(shelf) {
  var titles = ''; // initialize empty string 
  for (var i = 0; i < shelf.length; i++) { // for each element in the shelf
    if(i > 0) { // if the the index is greater than 0
      titles += ', '; // increment the titles with a comma/space for formatting 
    }
    titles += shelf[i].title; // regardless, increment titles with string with each element's title in the shelf array
  }

  return titles;
  //traverse through shelf array, and for each book in the shelf array return that book's title. var titles is initialized as empty string not empty array because the end result is the titles as string not in an array
}

function searchShelf(shelf, bookTitle) {
  shelfBook(bookTitle, shelf)
    if (shelf.includes(bookTitle)) {
      return true;
    } else {
    return false;
    }
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};