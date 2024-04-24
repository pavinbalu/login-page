document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetching input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simple validation
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      // Redirect to dashboard or another page
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
  