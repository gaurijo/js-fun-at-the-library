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

  reviews.push(review); // i don't have to set reviews equal to an empty array like in ruby?


}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}