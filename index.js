let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


function openResume() {
  window.open(
    "https://drive.google.com/file/d/1ku0FXDgVj_WsSWQZ-fqgW3rb7h7QdfUF/view?usp=drive_link",
    '_blank'
  );
}

function paddingFunction() {
  let x = doccument.getElementById("home")
  x.style.padding = "100px"
}

document.querySelector("form").addEventListener("submit", saveFile );



function saveFile(e) {

  e.preventDefault()


  let Formdata = JSON.parse(localStorage.getItem("portfolioData")) || []

  let name=document.getElementById("fname").value
  let email=document.getElementById("email").value
  let text=document.getElementById("subject").value
  
  let data = {
    "name": name,
    "email": email,
    "text": text
  }
  Formdata.push(data)
  localStorage.setItem("portfolioData", JSON.stringify(Formdata))
}

// document.addEventListener("DOMContentLoaded", function() {
//   const form = document.querySelector("#contact-subdiv2 form");

//   form.addEventListener("submit", function(event) {
//       event.preventDefault(); // Prevent default form submission

//       // Fetch form data
//       const formData = new FormData(form);

//       // Example: Send form data to a backend endpoint using Fetch API
//       fetch("https://your-backend-url.com/sendEmail", {
//           method: "POST",
//           body: formData
//       })
//       .then(response => {
//           // Handle response
//           if (response.ok) {
//               // Show success message or redirect the user
//               console.log("Message sent successfully!");
//               // Example: Redirect to a thank you page
//               window.location.href = "thankyou.html";
//           } else {
//               // Handle error
//               console.error("Failed to send message.");
//           }
//       })
//       .catch(error => {
//           console.error("Error:", error);
//       });
//   });
// });


// Get all the section elements
// const sections = document.querySelectorAll('section');
const sections = document.querySelectorAll("#home, #about, #skills, #projects, #github, #contact, #footer");


// Get all the navigation links
const navScroll = document.querySelectorAll('#nav-bar a');

// Function to highlight the current section in the navigation menu
function highlightNavLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navScroll.forEach(link => link.classList.remove('active'));
    navScroll[index].classList.add('active');
}

// Add event listener for scroll
window.addEventListener('scroll', highlightNavLink);


function typeWriterEffect() {
  const title = document.getElementById('title');
  const text = title.innerText;
  title.innerText = ''; // Clear the text content
  let charIndex = 0;

  function type() {
      if (charIndex < text.length) {
          title.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(type, 100); // Adjust typing speed (milliseconds)
      }
  }
  type();
}

// Call the typewriter effect function after AOS animation completes
function animateAndType() {
  AOS.init(); // Initialize AOS library
  AOS.refresh(); // Refresh AOS to apply animations

  setTimeout(typeWriterEffect, 1000); // Adjust delay after AOS animation (milliseconds)
}

// Trigger typewriter effect after the page loads
window.addEventListener('load', animateAndType);