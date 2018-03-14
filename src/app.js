// 	// Add an image carousel. This can be a carousel of screenshots of your projects
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("slide");
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
	}



  
// 	//Add a button in your navigation that will toggle the visibility of your actual site navigation.
	const menuButtons = document.querySelectorAll('.btn-toggle');
	if (menuButtons) menuButtons.forEach(button => {
		const navUl = button.parentNode.querySelector("nav ul");
		button.addEventListener('click', () => {
			navUl.classList.toggle("show-menu");
		});
	});


// 	// Add a button and collapsable description to your portfolio projects so when the user clicks the button the descriptions expand and collapse
	function expandButton1() {
		const x = document.getElementById("toggleProj1");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}

	function expandButton2() {
		const x = document.getElementById("toggleProj2");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}

	function expandButton3() {
		const x = document.getElementById("toggleProj3");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}



// 	// Create a modal box that pops up with your bio information whenever a button or link is pressed
	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("btn-modal");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal 
	btn.onclick = function() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}