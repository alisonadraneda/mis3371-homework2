/*
Program Name: script.js
Author: Alison Adraneda
Date Created: 06/18/2026
Date Last Edited: 06/26/2026
Version: 1.0
Description: JavaScript functions for Homework 2 patient registration form.
*/



function updateRating() {
    let rating = document.getElementById("healthRating").value;
    document.getElementById("ratingValue").innerHTML = rating;
}

function checkPasswords() {

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let userID = document.getElementById("userID").value.toLowerCase();

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (password.toLowerCase() === userID) {
        alert("Password cannot be the same as the User ID.");
        return false;
    }

  if (password.toLowerCase().includes(userID)) {
    alert("Password cannot contain your User ID.");
    return false;
}

let first = document.getElementById("firstName").value.toLowerCase();
let last = document.getElementById("lastName").value.toLowerCase();

if (password.toLowerCase().includes(first) || password.toLowerCase().includes(last)) {
    alert("Password cannot contain your name.");
    return false;
}

return true;
}
function reviewForm() {

    let table = document.getElementById("reviewTable");

    let gender =
        document.querySelector('input[name="gender"]:checked')?.value || "";

    let insurance =
        document.querySelector('input[name="insurance"]:checked')?.value || "";

    let vaccinated =
        document.querySelector('input[name="vaccinated"]:checked')?.value || "";

    let history = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map(box => box.value)
        .join(", ");

    table.innerHTML = `
    <tr>
        <th>Field</th>
        <th>Information</th>
    </tr>

 <tr>
    <td>First Name</td>
    <td>${document.getElementById("firstName").value}</td>
</tr>

<tr>
    <td>Middle Initial</td>
    <td>${document.getElementById("middleInitial").value}</td>
</tr>

<tr>
    <td>Last Name</td>
    <td>${document.getElementById("lastName").value}</td>
</tr>

    <tr>
        <td>Date of Birth</td>
        <td>${document.getElementById("dob").value}</td>
    </tr>

    <tr>
        <td>Email</td>
        <td>${document.getElementById("email").value}</td>
    </tr>

    <tr>
        <td>Phone</td>
        <td>${document.getElementById("phone").value}</td>
    </tr>

    <tr>
    <td>Address</td>

   <td>
    ${document.getElementById("address1").value}
    ${document.getElementById("address2").value ? "<br>" + document.getElementById("address2").value : ""}
    <br>
    ${document.getElementById("city").value}, ${document.getElementById("state").value} ${document.getElementById("zip").value}
</td>

</tr>

    <tr>
        <td>Symptoms</td>
        <td>${document.getElementById("symptoms").value}</td>
    </tr>

    <tr>
        <td>Health Rating</td>
        <td>${document.getElementById("healthRating").value}</td>
    </tr>

    <tr>
        <td>User ID</td>
<td>${document.getElementById("userID").value.toLowerCase()}</td>

</tr>

    <tr>
        <td>Gender</td>
        <td>${gender}</td>
    </tr>

    <tr>
        <td>Health Insurance</td>
        <td>${insurance}</td>
    </tr>

    <tr>
        <td>Vaccinations</td>
        <td>${vaccinated}</td>
    </tr>

    <tr>
        <td>Medical History</td>
        <td>${history}</td>
    </tr>
    `;
}