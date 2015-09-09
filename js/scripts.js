var pigLatin = function(word) {

  var word1 = word
  var vowels = ["a","e","i","o","u"];
  var firstLetter = word1.charAt(0);
  var secondLetter = word1.charAt(1);
  var thirdLetter = word1.charAt(2);
  var ipsy = vowels.indexOf(firstLetter);
  var ipsy2 = vowels.indexOf(secondLetter);
  var ipsy3 = vowels.indexOf(thirdLetter);

    if (ipsy >= 0) {
      return word1 = word1 + "ay";
    }
    else if (ipsy2 >= 0) {
      word1 = word1.slice(1);
      return word1 + firstLetter + "ay";
    }

    else if (ipsy3 >= 0) {
      word1 = word1.slice(2);
      return word1 + firstLetter + secondLetter + "ay";
        }

    else {
      word1 = word1.slice(3);
      return word1 + firstLetter + secondLetter + thirdLetter + "ay";
    }

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
