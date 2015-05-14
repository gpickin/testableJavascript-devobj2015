describe("Forgotten Password Form", function() {
  
  beforeEach(function() {
  
  });

  it("should warn you if the email is invalid before making Ajax Call", function() {
    
    expect( isEmailInputInvalid('') ).toBe(true);
    expect( isEmailInputInvalid('dddddddddd') ).toBe(true);
    expect( isEmailInputInvalid('dddddd@') ).toBe(true);
    expect( isEmailInputInvalid('dddddd@ddddd') ).toBe(true);
    expect( isEmailInputInvalid('dddddd@ddddddd.') ).toBe(true);
    expect( isEmailInputInvalid('dddddd@ddddddd.com') ).toBe(false);
  });

});  