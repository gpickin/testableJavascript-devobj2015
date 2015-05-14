describe("login Service", function() {
	var loginService;
  
	beforeEach(function() {
    	loginService = newLoginService();
	});
  
	it("should give us the last login", function() {
		expect(loginService.getLastLogin()).toEqual('865865');
	});
  
  	it("should give us the logged in user name", function() {
  		expect(loginService.getAuthUserName()).toEqual('67675');
  	});
   
	it("should tell us if the login session is still valid", function() {
		expect(loginService.isLoginStillValid()).toBe(false);
	});
	
}); 