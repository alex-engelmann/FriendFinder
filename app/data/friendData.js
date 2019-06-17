// ===============================================================================
// DATA
// Below data will hold all of the available friends
// There's a few in there as a start and for testing
// ===============================================================================


// Wikipedia images won't work, CORB will occur.  Use imgur images.  Can't control user submitted images,
// that's a limitation of this project for now
var friendArray = [
  {
    "name":"Wolverine",
    "photo":"https://i.imgur.com/KIQeG6q.png",
    "scores":[
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
  },
  {
    "name":"Michael",
    "photo": "https://i.imgur.com/T9f9rgJ.jpg", //Michael Palin from Monty Python
    "scores":[
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3
    ]
  },

  {
    "name": "Keanu",
    "photo": "https://i.imgur.com/PuMc9hs.jpg",
    "scores":[
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ]
  }
  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
