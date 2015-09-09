describe('pigLatin', function () {
  it("adds 'ay' to the end of words starting with a vowel", function () {
    expect(pigLatin("amber")).to.eql("amberay");
  });

  it("moves the consonant to the end of a word and adds 'ay' if a word starts with one consonant", function () {
    expect(pigLatin("search")).to.eql("earchsay");
  });
});
