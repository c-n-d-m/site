function scrollSection() {
	/*
	called when the arrow button is clicked
	select the next paragraph to go to
	according to the active nav entry (which is set by scroll)
	*/	
	let navlinks = document.querySelectorAll('.nav-link');
	for (let index = 0; index < navlinks.length; index++) {
		const element = navlinks[index];
		if (element.classList.contains("active")) {
			if (index == 0) {
				location.hash = navlinks[2].hash;
			} else if (index == 1) {
				continue;
			}
			else if (index == 5) {
				location.hash = navlinks[7].hash;
			} else if (index == 6) {
				continue;
			} else if ((index + 1) < navlinks.length) {
				location.hash = navlinks[index + 1].hash;
			} else {
				location.hash = "#accueil"
			}
			break;
		}
	}
}

window.onload = function() {
	/*
	automatically alternate between image first and text first
	*/
	let sections = document.querySelectorAll('.section-container');
	imageText = false;
	sections.forEach(section => {
		if(section.id === "menu-prestations") {
			/* container of containers should be image-first */
			section.classList.add('image-first')
		} else {
			if (imageText) {
				section.classList.add('text-first'); 
			} else {
				section.classList.add('image-first'); 			
			}
			imageText = ! imageText;
		}
	});

	// todo: remove background if no scroll
	// let containers = document.querySelectorAll('.scrollable-container');
	// sections.forEach( section => {
	// 	if(section.scrollHeight < )
	// });
}

const contact = document.getElementById("contact");
const the_button = document.getElementById("the_button");

window.onscroll = function() {
	/*
	if we scroll down and the last page is visible
	then turn the button arrow up
	*/
	if((document.body.scrollHeight-window.pageYOffset) < 1.5*document.body.offsetHeight) {
		the_button.style.transform = 'rotate(180deg)';
	} else {
		the_button.style.transform = 'rotate(0deg)';
	}
}	