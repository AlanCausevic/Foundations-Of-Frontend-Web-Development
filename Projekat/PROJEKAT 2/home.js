
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.maxHeight){
panel.style.maxHeight = null;
} else {
panel.style.maxHeight = panel.scrollHeight + "px";
} 
});
}
  
  var body = document.querySelector("body"), // Creates a variable called body, so we can reference it more easily below.
goLight = function() { // Creates a function called goLight that adds the 'dark' class to the body
body.className = "";
},
goDark = function() { // Creates a function called goDark that removes the 'dark' class from the body
body.className = "";
body.classList.add("dark");
},
goTeal = function() {
body.className = "";
body.classList.add("teal");
}



// Now let's do the bonus round!
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.maxHeight){
panel.style.maxHeight = null;
} else {
panel.style.maxHeight = panel.scrollHeight + "px";
} 
});
}
$(document).ready(function() {
    $('#contact-form').validate({
      rules: {
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        date: {
          required: true
        },
        password: {
          required: true,
          minlength: 8
        },
        message: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        name: {
          required: 'Please enter your name',
          minlength: 'Your name must be at least 3 characters'
        },
        email: {
          required: 'Please enter your email',
          email: 'Please enter a valid email address'
        },
        date: {
          required: 'Please enter a date'
        },
        password: {
          required: 'Please enter a password',
          minlength: 'Your password must be at least 8 characters'
        },
        message: {
          required: 'Please enter a message',
          minlength: 'Your message must be at least 10 characters'
        }
      },
      submitHandler: function(form) {
        var name = $('#name').val();
        var email = $('#email').val();
        var date = $('#date').val();
        var password = $('#password').val();
        var message = $('#message').val();
  
        // Validate password strength
        var strength = 0;
        if (password.match(/[a-z]/)) {
          strength++;
        }
        if (password.match(/[A-Z]/)) {
          strength++;
        }
        if (password.match(/[0-9]/)) {
          strength++;
        }
        if (password.match(/[^a-zA-Z0-9]/)) {
          strength++;
        }
        if (password.length > 15) {
          strength++;
        }
        $('#password-strength').text('Password strength: ' + strength + '/6');
  
        // Submit form
        // Add your form submission code here
      }
    });
  });
