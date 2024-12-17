---
layout: default
title: Secret Project
permalink: /projects/secret/
---

<div id="password-container">
   <h1>Enter Password</h1>
   <input type="password" id="password-input" placeholder="Enter Password">
   <button onclick="checkPassword()">Submit</button>
   <p id="error" style="color: red; display: none;">Incorrect Password!</p>
</div>

<div id="secret-content" style="display: none;">
   <h1>Welcome to the Secret Project</h1>
   <p>Please fill out the survey below:</p>

   <!-- Embed LimeSurvey Questionnaire -->
   <iframe 
       src="https://your-limesurvey-domain.com/index.php/123456" 
       width="100%" 
       height="800" 
       style="border: 1px solid #ddd; border-radius: 8px;">
   </iframe>
</div>

<script>
   function checkPassword() {
       const input = document.getElementById("password-input").value;
       const correctPassword = "mySecret123"; // Replace with your desired password
       const error = document.getElementById("error");
       const content = document.getElementById("secret-content");
       const container = document.getElementById("password-container");

       if (input === correctPassword) {
           error.style.display = "none";
           container.style.display = "none";
           content.style.display = "block";
       } else {
           error.style.display = "block";
       }
   }
</script>
