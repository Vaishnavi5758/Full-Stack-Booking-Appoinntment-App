document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const obj = {};
    formData.forEach((value, key) => {
        obj[key] = value;
    });

    console.log(obj);
    axios.post("http://localhost:3000/login", obj)
        .then((response) => {
            console.log(response);
            event.target.reset();
            document.body.innerHTML = "<h4>Thanks</h4>"; 
        })
        .catch((err) => {
            document.body.innerHTML = "<h4>Something went wrong</h4>";
            console.error(err);
        });

        
});

//document.getElementById('showallusers').addEventListener('submit', function(event) {
    
console.error("err");
   // loadUsers();});

//    document.getElementById('showallusers').onclick = function(event){
//         event.preventDefault(event);
//    }
// document.addEventListener('DOMContentLoaded', function() {
//     // Your code here
//     getusers.addEventListener((e) => {
//         e.preventDefault();
//         window.location.href = "./showallusers.html";
//         loadUsers();
//     });
// });

// function loadUsers() {
//     axios.get('http://localhost:3000/showallusers')
//         .then(function (response) {
//             // Handle the response data
//             console.log(response.data);
//             window.location.href = "./showallusers.html";
//             var jsonData = response.data;
//             var userList = document.getElementById("userList");

//             // Check if the data contains 'allUsers' property
//             if (jsonData.allUsers) {
//                 var users = jsonData.allUsers;

//                 function createDeleteHandler(userId, userDiv) {
//                     console.log(userId);
//                     return function () {
//                         if (confirm("Are you sure you want to delete this user?")) {
//                             // Perform the deletion on the server and remove the userDiv
//                             deleteUser(userId, userDiv);
//                         }
//                     };
//                 }
//                 // Loop through the JSON data and create HTML elements with a delete button
//                 for (var i = 0; i < users.length; i++) {
//                     var user = users[i];

//                     var userDiv = document.createElement("div");
//                     userDiv.classList.add("user-container"); // Add the CSS class

//                     var deleteButton = document.createElement("button");
//                     deleteButton.innerText = "Delete";
//                     deleteButton.classList.add("delete-button");

//                     // Add a click event to the delete button
//                     deleteButton.addEventListener("click", createDeleteHandler(user.id, userDiv));

//                    // deleteButton.dataset.userId = user.id;

//                     // Create elements to display user information
//                     var idElement = document.createElement("p");
//                     idElement.innerText = "ID: " + user.id;

//                     var usernameElement = document.createElement("p");
//                     usernameElement.innerText = "Username: " + user.userName;

//                     var phoneElement = document.createElement("p");
//                     phoneElement.innerText = "Phone: " + user.phone;

//                     var emailElement = document.createElement("p");
//                     emailElement.innerText = "Email: " + user.email;

//                     var createdAtElement = document.createElement("p");
//                     createdAtElement.innerText = "Created At: " + user.createdAt;

//                     var updatedAtElement = document.createElement("p");
//                     updatedAtElement.innerText = "Updated At: " + user.updatedAt;

//                     // // Add a click event to the delete button
//                     // deleteButton.addEventListener("click", function () {
//                     //     var userId = user.id;
//                     //     if (confirm("Are you sure you want to delete this user?")) {
//                     //         // Perform the deletion on the server and remove the userDiv
//                     //         deleteUser(userId, userDiv);
//                     //     }
//                     // });

//                     // Append the created elements to the user container
//                     userDiv.appendChild(idElement);
//                     userDiv.appendChild(usernameElement);
//                     userDiv.appendChild(phoneElement);
//                     userDiv.appendChild(emailElement);
//                     userDiv.appendChild(createdAtElement);
//                     userDiv.appendChild(updatedAtElement);
//                     userDiv.appendChild(deleteButton);

//                     userList.appendChild(userDiv);
//                 }
//             } else {
//                 // Handle the case where 'allUsers' is not found in the JSON data
//                 console.error("No 'allUsers' property found in the JSON data.");
//             }
//         })
//         .catch(function (error) {
//             // Handle any errors that may occur during the request
//             console.error("An error occurred while fetching the JSON data: " + error);
//         });
// }

// function deleteUser(userId, userDiv) {

//     console.log(userId);
//     // Send an HTTP DELETE request to the server to delete the user with the given userId
//     axios.delete('http://localhost:3000/deleteUser/'+userId)
//         .then(function (response) {
//             console.log(response);
//             if (response.status === 200) {
//                 // Successful deletion on the server, now remove the userDiv from the UI
//                 console.log("remove div");
//                 userDiv.remove();
//             } else {
//                 console.error("Error deleting user. Status: " + response.status);
//             }
//         })
//         .catch(function (error) {
//             console.error("An error occurred while deleting the user: " + error);
//         });
// }

