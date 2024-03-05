
document.getElementById("logo").addEventListener("click", function() {
    // Redirect to home page or perform desired action
    window.location.href = "index.html"; // Replace "home.html" with your home page URL
});

// JavaScript for clickable profile icon
document.getElementById("profileIcon").addEventListener("click", function() {
    // Redirect to profile page or perform desired action
    window.location.href = "login.html"; // Replace "profile.html" with your profile page URL
});

// JavaScript to toggle menu items visibility
const menuIcon = document.getElementById('menuIcon');
const menuItems = document.getElementById('menuItems');

menuIcon.addEventListener('click', () => {
    menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
});
document.getElementById("coloredButton").addEventListener("click", function() {
    window.location.href = "account.html"; // Replace with your desired URL
});
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
});
document.addEventListener("DOMContentLoaded", function() {
    // Sample testimonial data
    const testimonials = [
        {
            text: "I've been using this platform for a year now and I'm extremely satisfied with the returns on my investments. Highly recommended!",
            author: "John Doe"
        },
        {
            text: "This is hands down the best investment website out there. The interface is user-friendly and the customer service is top-notch.",
            author: "Jane Smith"
        },
        {
            text: "I was hesitant at first, but after seeing consistent growth in my portfolio, I'm glad I chose this platform for my investments.",
            author: "David Johnson"
        },
        {
            text: "The team behind this website is dedicated to helping their clients succeed. I've never felt more confident in my investment decisions.",
            author: "Emily Brown"
        },
        {
            text: "I've tried several investment platforms before, but none have come close to the level of service and expertise provided here. Keep up the great work!",
            author: "Michael Wilson"
        }
    ];

    // Display testimonials
    const testimonialsContainer = document.getElementById("testimonials");
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement("div");
        testimonialElement.classList.add("testimonial");
        testimonialElement.innerHTML = `
            <p>${testimonial.text}</p>
            <div class="testimonial-author">${testimonial.author}</div>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });
});)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(form);

        // Display confirmation message
        confirmation.style.display = "block";

        // Optionally, you can reset the form after submission
        form.reset();
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form input values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Validate name and email fields
    if (name === "" || email === "") {
        alert("Please fill in all required fields (Name and Email).");
        return;
    }

    // Send an AJAX request to submit the form data
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // If the request is successful, display the confirmation message
                document.getElementById("contact-form").style.display = "none";
                document.getElementById("confirmation").style.display = "block";
            } else {
                // If there's an error, display an error message
                alert("Error submitting the form. Please try again.");
            }
        }
    };
    xhr.send(formData);
});
function calculateResults() {
    const principal = parseFloat(document.getElementById('principal').value) || 0;
    const interestRate = parseFloat(document.getElementById('interest-rate').value) || 0;
    const timePeriod = parseFloat(document.getElementById('time-period').value) || 0;

    const interest = (principal * interestRate * timePeriod) / 100;
    const totalReturn = principal + interest;

    const netProfitElement = document.getElementById('net-profit');
    netProfitElement.textContent = `Net Profit: $${interest.toFixed(2)}`;

    const totalReturnElement = document.getElementById('total-return');
    totalReturnElement.textContent = `Total Return: $${totalReturn.toFixed(2)}`;
});