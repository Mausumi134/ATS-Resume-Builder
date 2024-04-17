
function validateAndGenerateCV() {
    // Validate form
    if (validateForm()) {
        // If validation passes, generate CV
        generateCV();
    }
}




function validateForm() {
    // Get form fields
    var nameField = document.getElementById("namefield");
    var emailField = document.getElementById("emailField");
    var phoneField = document.getElementById("phoneField");
    var linkedinField = document.getElementById("linkedinField");
    var githubField = document.getElementById("githubField");
    var summaryField = document.getElementById("summaryField");
    var projectsField = document.getElementById("projectsField");
    var educationField = document.getElementById("educationField");
    var certificationsField = document.getElementById("certificationsField");
    var skillsField = document.getElementById("skillsField");

    // Check for empty fields
    if (nameField.value === "" || emailField.value === "" || phoneField.value === "" ||
        summaryField.value === "" || projectsField.value === "" || educationField.value === "" ||
        certificationsField.value === "" || skillsField.value === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Check email format
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailField.value.match(emailFormat)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check phone number format
    var phoneFormat = /^\d{10}$/;
    if (!phoneField.value.match(phoneFormat)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Check LinkedIn URL format
    var linkedinFormat = /^(https?:\/\/)?([\w\.]+)\.linkedin\.com\/(in|pub)\/.+/i;
    if (!linkedinField.value.match(linkedinFormat)) {
        alert("Please enter a valid LinkedIn profile link.");
        return false;
    }

    // Check GitHub URL format
    var githubFormat = /^(https?:\/\/)?(www\.)?github\.com\/.+$/i;
    if (!githubField.value.match(githubFormat)) {
        alert("Please enter a valid GitHub profile link.");
        return false;
    }

   
    return true;
}






function generateCV(){
    // Personal Information
    document.getElementById('nameT').textContent = document.getElementById('namefield').value;
    document.getElementById('emailT').textContent = "Email: " + document.getElementById('emailField').value;
    document.getElementById('phoneT').textContent = "Phone: " + document.getElementById('phoneField').value;
    document.getElementById('addressT').textContent = "Address: " + document.getElementById('addressField').value;
    document.getElementById('linkT').textContent = "LinkedIn: " + document.getElementById('linkedinField').value;
    document.getElementById('gitT').textContent = "GitHub: " + document.getElementById('githubField').value;

    // Professional Information
    document.getElementById('summaryT').textContent = document.getElementById('summaryField').value;
    document.getElementById('projectT').innerHTML = document.getElementById('projectsField').value;
    document.getElementById('educationT').textContent = document.getElementById('educationField').value;
    document.getElementById('certificationsT').innerHTML = document.getElementById('certificationsField').value;
    document.getElementById('skillsT').innerHTML = document.getElementById('skillsField').value;
}


function printCV() {
    // Hide the CV form
    document.getElementById('cv-form').style.display = 'none';
     document.getElementById('print').style.display = 'none';
     document.getElementById('nav').style.display = 'none';
     document.getElementById('footer').style.display = 'none';
    // Display the CV template
    document.getElementById('cv-template').style.display = 'block';
    // Print the CV
    window.print();
    // Reload the page to show the CV form again
    location.reload();
}
