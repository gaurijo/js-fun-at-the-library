function createTitle(title) { // createTitle is the function name. It's taking in a title.
  var modifiedTitle = "The " + title; // variable modifiedTitle does the following: it prepends the word The and concatenates the title it's taking in.

  return modifiedTitle; // return the above variable.
}

function buildMainCharacter(name, age, pronouns) { // similar to ruby class this is initializing a character object; the attributes here are name, age, character.
  var mainCharacter = {
      name: name,
      age: age,
      pronouns: pronouns
    };

return mainCharacter; // return the character object
}

function saveReview(review, reviews) {
  if (!reviews.includes(review)) {
    reviews.push(review); // i don't have to set reviews equal to an empty array like in ruby?
    }
}

function calculatePageCount(modifiedTitle) { // function takes in existing function modifiedTitle as an argument (which adds 'the' before each title)
  var letters = modifiedTitle.replace(/[^a-zA-Z\s]/g, ""); // use regex to replace any spaces or non-letter characters
  var addPages = letters.length; // counts the number of letters in the title
  return addPages * 20; // multiplies the number of letters by 20
}

function writeBook(bookTitle, bookCharacter, genre) { // writeBook function takes in 3 parameters - title, character and genre
  var book = { // sets a variable book equal to attributes of title, mainCharacter, pageCount, and genre
    title: bookTitle, // title attribute is set equal to whatever value bookTitle is
    mainCharacter: bookCharacter, // mainCharacter attribute is set equal to whatever value bookCharacter is
    pageCount: calculatePageCount(bookTitle), //pageCount attribute calls on the calculatePageCount function, which passes in a bookTitle
    genre: genre //genre attribute is set equal to whatever value genre is 
  };

  return book
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;

  return book.pageCount;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}