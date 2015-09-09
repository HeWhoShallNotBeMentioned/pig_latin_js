var pigLatin = function(word) {

  var word1 = word
  var vowels = ["a","e","i","o","u"];
  var firstLetter = word1.charAt(0);
  var ipsy = vowels.indexOf(firstLetter);
  
    if (ipsy >= 0) {
      return word1 = word1 + "ay";
    }


};
