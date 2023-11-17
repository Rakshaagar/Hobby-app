let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    if (username === 'user' && password === 'password') {
        currentUser = username;
        showApp();
    } else {
        alert('Invalid credentials. Please try again.');
    }
}

function showApp() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
    displayUserList();
}

function displayUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '<li>User 1</li><li>User 2</li>'; // Replace with dynamic data
}

function addContactNumber() {
    const contactNumbersContainer = document.getElementById('contact-numbers');
    const li = document.createElement('li');
    li.innerHTML = `<input type="text" placeholder="Contact Number"> <button onclick="removeElement(this)">Remove</button>`;
    contactNumbersContainer.appendChild(li);
}

function addHobby() {
    const hobbiesList = document.getElementById('hobbies-list');
    const li = document.createElement('li');
    li.innerHTML = `<input type="text" placeholder="Hobby"> <button onclick="removeElement(this)">Remove</button>`;
    hobbiesList.appendChild(li);
}

function removeElement(element) {
    element.parentNode.remove();
}

function saveChanges() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    
    // Perform validation (for simplicity, only email and name are considered mandatory)
    if (!email || !name) {
        alert('Email and Name are mandatory fields. Please fill them.');
        return;
    }

    // Perform data saving (in a real application, this would be done securely on the server)
    alert('Changes saved successfully!');
}

