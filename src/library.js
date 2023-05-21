function createLibrary(name) {
  var library = { name: name,
                  shelves: {}};
  return library;
}

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook,
  // takeStock
};