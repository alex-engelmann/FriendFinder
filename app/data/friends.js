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
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }
  
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
