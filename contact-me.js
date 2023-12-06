document.addEventListener("DOMContentLoaded", function() {
    var formSubmit = document.querySelector("#Submit");
    var nameErr = document.getElementById("nameErr");
    var emailErr = document.getElementById("emailErr");
    var msgErr = document.getElementById("msgErr");

    formSubmit.addEventListener("click", function(event){
        event.preventDefault();

        var formName = document.getElementById("name").value;
        var formEmail = document.getElementById("email").value;
        var formMessage = document.getElementById("message").value;

        nameErr.innerHTML = ""; 
        emailErr.innerHTML = "";
        msgErr.innerHTML = "";

        if(formName === ""){
            nameErr.style.display = "block";
        }

        if(formEmail === ""){
            emailErr.style.display = "block";
        }
        
        if(formMessage === ""){
            msgErr.style.display = "inline-block";
        } else {
            msgErr.style.display = "none";
        }


        // Validate name format
        var nameRegex = /^[a-zA-Z]+$/;
        if(!nameRegex.test(formName)){
            nameErr.style.display = "block";
            nameErr.innerHTML = "please enter a valid input";
        }

        // Validate email format
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(formEmail)) {
            emailErr.style.display = "block";
            emailErr.innerHTML = "please enter a valid email address";
        }

        var messageRegex = /^[a-zA-Z]+$/;
        if(!messageRegex.test(formMessage)){
            msgErr.style.display = "block";
            msgErr.innerHTML = "type a message";
        }

        if(formName === "" || formEmail === "" || formMessage === "" || 
           !emailRegex.test(formEmail) || !nameRegex.test(formName) || !messageRegex.test(formMessage)){
            return; // Do not proceed if there are validation errors
        }

        // Store data in local storage
        var formData = {
            name: formName,
            email: formEmail,
            message: formMessage
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        alert("Form submitted successfully");
        document.getElementById("contactForm").reset();
    });
});




















































































































































































// var formSubmit = document.querySelector("#Submit");

// var nameErr = document.getElementById("nameErr");
// var emailErr = document.getElementById("emailErr");
// var msgErr = document.getElementById("msgErr");

// // Load saved data from localStorage on page load
// window.onload = function() {
//     var savedData = JSON.parse(localStorage.getItem('formData')) || {};
//     document.getElementById('name').value = savedData.name || '';
//     document.getElementById('email').value = savedData.email || '';
//     document.getElementById('message').value = savedData.message || '';
// };

// formSubmit.addEventListener("click", function(event){
//     event.preventDefault();

//     var formName = document.getElementById("name").value;
//     var formEmail = document.getElementById("email").value;
//     var formMessage = document.getElementById("message").value;

//     nameErr.innerHTML = ""; 
//     emailErr.innerHTML = "";
//     msgErr.innerHTML = "";

//     if(formName === ""){
//         nameErr.style.display = "block";
//     }

//     if(formEmail === ""){
//         emailErr.style.display = "block";
//     }
    
//     if(formMessage === ""){
//         msgErr.style.display = "block";
//     }
    
//     if(!isNaN(formName) || !formEmail.includes("@")){
//         if(!isNaN(formName)){
//             nameErr.style.display = "block";
//             nameErr.innerHTML = "Invalid Name! Please use letters only";
//         }
//         if(!formEmail.includes("@")){
//             emailErr.style.display = "block";
//             emailErr.innerHTML = "Invalid Email! Please provide an actual email";
//         }
//     }
//     else {
//         // Save data to localStorage
//         var formData = {
//             name: formName,
//             email: formEmail,
//             message: formMessage
//         };
//         localStorage.setItem('formData', JSON.stringify(formData));

//         // Print data to console
//         console.log("Form Data:", formData);

//         alert("Form submitted successfully");
//         document.getElementById("contactForm").reset();
//     }
// });

