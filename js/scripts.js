var pigLatin = function(word) {

  var word1 = word
  var vowels = ["a","e","i","o","u"];
  var firstLetter = word1.charAt(0);
  var ipsy = vowels.indexOf(firstLetter);

    if (ipsy >= 0) {
      return word1 = word1 + "ay";
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
