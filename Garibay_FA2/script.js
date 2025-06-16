document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;
    let terms = document.getElementById("terms").checked;

    if (fullName && email && password && phone && gender && dob && course && terms) {
        alert("Registration Successfully");
    } else {
        alert("Please fill in all required fields!");
    }
});