// ===============================================================================
// DATA
// Below data will hold all of the available friends
// Initially we just set it equal to a "dummy" friend
// ===============================================================================

var friendArray = [
  {
    "name":"Ahmed",
    "photo":"https://upload.wikimedia.org/wikipedia/commons/a/a4/Sikh_man%2C_Agra_10.jpg",
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
    "name":"Stephen",
    "photo": "https://en.wikipedia.org/wiki/Stephen_Colbert#/media/File:Stephen_Colbert_December_2017.jpg",
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
    "name": "Zidane",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg",
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
