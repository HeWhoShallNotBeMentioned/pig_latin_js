describe('pigLatin', function () {
  it("adds 'ay' to the end of words starting with a vowel", function () {
    expect(pigLatin("amber")).to.eql("amberay");
  });

  it("moves the consonant to the end of a word and adds 'ay' if a word starts with one consonant", function () {
    expect(pigLatin("search")).to.eql("earchsay");
  });

  it("moves the consonants to the end of a word and adds 'ay' if a word starts with two consonants", function () {
    expect(pigLatin("scared")).to.eql("aredscay");
  });

    it("moves the consonants to the end of a word and adds 'ay' if a word starts with three consonants", function () {
      expect(pigLatin("chris")).to.eql("ischray");
  });
});
