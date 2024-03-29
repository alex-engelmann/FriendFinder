// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendData = require("../data/friendData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know their matches.
    friendData.push(req.body);
    //TODO compatibility logic
    //Some pseudocode -
    // Store the best match (lowest difference) in a simple object
    // Compare each friend in the database to the submitted user
    // Loop through the array for each friend's answers
    // 
    let bestMatch = {
      "number": 0,     //this is the number in the friendData array
      "difference": 100 //arbitrary large number
    }
    for (let i = 0; i < friendData.length - 1; i++) {
      let currentDifference = 0
      for (let j = 0; j < friendData[i].scores.length; j++) {
        currentDifference += Math.abs(friendData[i].scores[j] - req.body.scores[j])
      }
      if (currentDifference < bestMatch.difference) {
        bestMatch.number = i;
        bestMatch.difference = currentDifference
      }
    }
    res.json(friendData[bestMatch.number]);
  });

};
