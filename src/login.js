        $(document).on('ready', function(){
              $('#btn_login').on('click', function(){
                    loginButtonEventHandler();
              });

              $('#btn_forgotPassword').on('click', function(){
                    forgotPasswordButtonEventHandler();
              });

              function setStatusMessage( statusMessage ){
                  $('#status').show();
                  $('#status').html( statusMessage );
                  $('#status').addClass('alert');
                  $('#status').addClass('alert-danger');
                  $('#status').delay( 2000 ).hide( 1000 );
              }

              function isEmailInputInvalid( emailField ){
                    if ( emailField.val().length < 5 ){
                        setStatusMessage('Invalid Email - Thats not a real email, try again Darlek');
                        return true;
                    }
                    else if ( emailField.val().indexOf('@') === -1 ){
                        setStatusMessage('Invalid Email - Where are you @... obviously not from around here with an email with no @, try again PUNY HUMAN');
                        return true;
                    }
                    else if ( emailField.val().indexOf('.', emailField.val().indexOf('@')) === -1 ){
                        setStatusMessage('Invalid Email - TARDIS requires a full stop, especially in this domain, try again time traveler');
                        return true;
                    }
                    else if ( emailField.val().charAt( emailField.val().length - 1) === '.' ){
                        setStatusMessage('Invalid Email - TARDIS requires a full stop, but this is not the end of the line, try again time traveler');
                        return true;
                    }
                    else {
                      return false;
                    }
              }

              function isPasswordInputInvalid() {
                  if ( $('#password').val().length < 8 ){
                        setStatusMessage('Invalid password - Thats not a real password, try again Cyberman');
                        return true;
                  }
                  else {
                    return false;
                  }
              }

              function loginButtonEventHandler(){
                    if ( isEmailInputInvalid( $('#email') ) ){
                        // Not the most elegant refactor, but it works
                    }
                    else if ( isPasswordInputInvalid() ){
                        // Not the most elegant refactor, but it works
                    }
                    else {
                        $.ajax({
                              type: "POST",
                              url: "http://devobj2015:8504/testablejavascript/cfcs/userServiceRemote.cfc?method=login",
                              data: ( { email: $('#email').val(), password: $('#password').val() } ),
                              cache: false,
                              dataType: "text"
                          })
                          .done( function( data ) {
                              processLoginAjaxDone( data );
                          })
                          .fail( function( data) {
                              processLoginAjaxFail( data );
                          });
                    }
              }

              function processLoginAjaxDone( data ){
                  var ajaxResponse = JSON.parse(data);
                  if ( ajaxResponse.RESULT == '200' ){
                      setStatusMessage('TARDIS Access Granted - Please wait for the Doctor to take you for a spin');
                  }
                  else {
                      setStatusMessage('Did you lose your TARDIS key? Please try to login again.');
                  }
              }

              function processLoginAjaxFail( data ){
                  //console.log( data );
                  setStatusMessage('The TARDIS is lost in a timey whimey vortex - try back later.');
              }

              function forgotPasswordButtonEventHandler(){
                    if ( isEmailInputInvalid( $('#forgotEmail') ) ){
                        // Empty if
                    }
                    else {
                      $.ajax({
                            type: "POST",
                            url: "http://devobj2015:8504/testablejavascript/cfcs/userServiceRemote.cfc?method=resetPassword",
                            data: ( { email: $('#forgotEmail').val() } ),
                            cache: false,
                            dataType: "text"
                        })
                        .done( function( data ) {
                            processForgotPasswordAjaxDone( data );
                        })
                        .fail( function( data) {
                            processForgotPasswordAjaxFail( data );
                        });
                    }
              }

              function processForgotPasswordAjaxDone( data ){
                  var ajaxResponse = JSON.parse(data);
                  if ( ajaxResponse.RESULT == '200' ){
                      setStatusMessage("TARDIS is resetting your password, please check email for your Notification");
                  }
                  else {
                      setStatusMessage("That email address doesn't exist in this dimension");
                  }
              }

              function processForgotPasswordAjaxFail( data ){
                  //console.log( data );
                  setStatusMessage('The TARDIS is lost in a timey whimey vortex - try back later.');
              }

        });

