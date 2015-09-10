var pigLatin = function(word) {
  var wordSalad = word.split(" ");
  var word1 ="";
  var userOutput = "";


wordSalad.forEach(function(word){
    word1 = word;
    var vowels = ["a","e","i","o","u"];
    var firstLetter = word1.charAt(0);
    var secondLetter = word1.charAt(1);
    var thirdLetter = word1.charAt(2);
    var fourthLetter = word1.charAt(3);
    var ipsy = vowels.indexOf(firstLetter);
    var ipsy2 = vowels.indexOf(secondLetter);
    var ipsy3 = vowels.indexOf(thirdLetter);
    if (userOutput != "") {
      userOutput = userOutput + " "
    }

    if (ipsy >= 0) {
      userOutput =  userOutput + word1 + "ay";
      //return userOutput;
    } else if (ipsy2 >= 0) {
      if (firstLetter != "q") {
        word1 = word1.slice(1);
        userOutput = userOutput + word1 + firstLetter + "ay";
        //return userOutput;
      } else {
          word1 = word1.slice(2);
          userOutput = userOutput + word1 + firstLetter + secondLetter + "ay";
          //return userOutput;
      }
    } else if (ipsy3 >= 0) {
      if (secondLetter != "q") {
          word1 = word1.slice(2);
          userOutput = userOutput + word1 + firstLetter + secondLetter + "ay";
          //return userOutput;
      } else {
          word1 = word1.slice(3);
          userOutput = userOutput + word1 + firstLetter + secondLetter + thirdLetter + "ay";
          //return userOutput;
      }
    } else {
          word1 = word1.slice(3);
          userOutput =  userOutput + word1 + firstLetter + secondLetter + thirdLetter + "ay";
          //return userOutput;
    }
  });
  return userOutput;
};

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = $("input#word").val();
    var result = pigLatin(word);

  $(".word").text(word);
  $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
