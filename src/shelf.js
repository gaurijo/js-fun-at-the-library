function shelfBook(writeBook, shelf) { // take in a book and append it to an array "shelf"
  if (shelf.length < 3) { // it can only add more books if it doesn't already have 3
    shelf.unshift(writeBook); 
  } // order matters here, the first book listed in the arguments should be the last book on the shelf
  // if you didn't care about order you could use .push instead of .unshift on the array

  return shelf;
}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};