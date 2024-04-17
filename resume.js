
// generating cv

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
