describe('pigLatin', function () {
  it("adds 'ay' to the end of words starting with a vowel", function () {
    expect(pigLatin("amber")).to.eql("amberay");
  });
});
