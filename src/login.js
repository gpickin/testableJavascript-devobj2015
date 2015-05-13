        $(document).on('ready', function(){
              $('#btn_login').on('click', function(){
                    loginButtonEventHandler();
              });

              $('#btn_forgotPassword').on('click', function(){
                    forgotPasswordButtonEventHandler();
              });

              function loginButtonEventHandler(){
                if ( $('#email').val().length < 5 ){
                        $('#status').show();
                        $('#status').html('Invalid Email - Thats not a real email, try again Darlek');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
                    }
                    else if ( $('#email').val().indexOf('@') === -1 ){
                        $('#status').show();
                        $('#status').html('Invalid Email - Where are you @... obviously not from around here with an email with no @, try again PUNY HUMAN');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
                    }
                    else if ( $('#email').val().indexOf('.', $('#email').val().indexOf('@')) === -1 ){
                        $('#status').show();
                        $('#status').html('Invalid Email - TARDIS requires a full stop, especially in this domain, try again time traveler');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
                    }
                    else if ( $('#email').val().charAt($('#email').val().length - 1) === '.' ){
                        $('#status').show();
                        $('#status').html('Invalid Email - TARDIS requires a full stop, but this is not the end of the line, try again time traveler');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
                    }
                    else if ( $('#password').val().length < 8 ){
                        $('#status').show();
                        $('#status').html('Invalid password - Thats not a real password, try again Cyberman');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
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
                              var ajaxResponse = JSON.parse(data);
                              if ( ajaxResponse.RESULT == '200' ){
                                  $('#status').show();
                                  $('#status').html('TARDIS Access Granted - Please wait for the Doctor to take you for a spin');
                                  $('#status').addClass('alert');
                                  $('#status').addClass('alert-danger');
                                  $('#status').delay( 2000 ).hide( 1000 );
                              }
                              else {
                                  $('#status').show();
                                  $('#status').html('Did you lose your TARDIS key? Please try to login again.');
                                  $('#status').addClass('alert');
                                  $('#status').addClass('alert-danger');
                                  $('#status').delay( 2000 ).hide( 1000 );
                              }
                          })
                          .fail( function( data) {
                              //console.log( data );
                              $('#status').show();
                              $('#status').html('The TARDIS is lost in a timey whimey vortex - try back later.');
                              $('#status').addClass('alert');
                              $('#status').addClass('alert-danger');
                              $('#status').delay( 2000 ).hide( 1000 );
                          });
                    }
              }

              function forgotPasswordButtonEventHandler(){
                if ( $('#forgotEmail').val().length < 5 ){
                        $('#status').show();
                        $('#status').html('Invalid Email - Thats not a real email, try again Darlek');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
                    }
                    else if ( $('#forgotEmail').val().indexOf('@') <= 1 ){
                        $('#status').show();
                        $('#status').html('Invalid Email - Where are you @... obviously not from around here with an email with no @, try again PUNY HUMAN');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
                    }
                    else if ( $('#forgotEmail').val().indexOf('.', $('#forgotEmail').val().indexOf('@')) === -1 ){
                        $('#status').show();
                        $('#status').html('Invalid Email - TARDIS requires a full stop, especially in this domain, try again time traveler');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
                    }
                    else if ( $('#forgotEmail').val().charAt($('#forgotEmail').val().length - 1) === '.' ){
                        $('#status').show();
                        $('#status').html('Invalid Email - TARDIS requires a full stop, but this is not the end of the line, try again time traveler');
                        $('#status').addClass('alert');
                        $('#status').addClass('alert-danger');
                        $('#status').delay( 2000 ).hide( 1000 );
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
                          var ajaxResponse = JSON.parse(data);
                          if ( ajaxResponse.RESULT == '200' ){
                              $('#status').show();
                              $('#status').html("TARDIS is resetting your password, please check email for your Notification");
                              $('#status').addClass('alert');
                              $('#status').addClass('alert-danger');
                              $('#status').delay( 2000 ).hide( 1000 );
                          }
                          else {
                              $('#status').show();
                              $('#status').html("That email address doesn't exist in this dimension");
                              $('#status').addClass('alert');
                              $('#status').addClass('alert-danger');
                              $('#status').delay( 2000 ).hide( 1000 );
                          }
                        })
                        .fail( function( data) {
                            //console.log( data );
                            $('#status').show();
                            $('#status').html('The TARDIS is lost in a timey whimey vortex - try back later.');
                            $('#status').addClass('alert');
                            $('#status').addClass('alert-danger');
                            $('#status').delay( 2000 ).hide( 1000 );
                        });
                    }
              }
        });

  