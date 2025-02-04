function setTitle(event) {

    const titleElement = event.currentTarget.querySelector('h3');
    if (titleElement) {
        localStorage.setItem('serviceTitle', titleElement.textContent.trim());
    }
}


let imageElement = document.getElementById('single-product-img');

function AddImageSlide(image1,image2,image3){
    imageElement.style.backgroundImage = "none";
    imageElement.innerHTML = `
                    <div class="image-slider">
                        <div class="slides">
                            <div class="slide" style="background-image: url(${image1});"></div>
                            <div class="slide" style="background-image: url(${image2});"></div>
                            <div class="slide" style="background-image: url(${image3});"></div>
                        </div>
                        <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
                        <button class="next" onclick="moveSlide(1)">&#10095;</button>
                    </div>
    `

}

// Event listener to update the content dynamically
document.addEventListener("DOMContentLoaded", function () {
    const title = localStorage.getItem('serviceTitle');
    if (title) {
        

        const titleElements = document.querySelectorAll('#product_title');
        // Update all service-title elements
        for (let i = 0; i < titleElements.length; i++) {
            titleElements[i].innerText = title;
        }

        // Update the content description
        let imageElement = document.getElementById('single-product-img');
        const contentElement = document.getElementById('product-content');
        if (contentElement) {

            if (title == "Inner Colour Handle Mug (Normal)") {
                contentElement.innerText = `Add a touch of style to your daily coffee routine with our Inner Colour Handle Mug. Designed for both personal use and gifting, this mug features a vibrant inner color and matching handle, making it a unique and eye-catching choice.

Features:
☕ Premium Quality Ceramic – Durable and heat-resistant for everyday use
🎨 Stylish Inner & Handle Color – Available in multiple colors to match your personality
🖨️ Customizable Design – Perfect for logos, quotes, or personalized prints
💎 Glossy Finish – Smooth surface for a sleek and elegant look
📏 Standard Capacity – Ideal for coffee, tea, or any beverage
🚀 Microwave & Dishwasher Safe – Easy to clean and convenient to use

Upgrade your mug collection or gift a loved one with this Inner Colour Handle Mug. Order yours today! `;

AddImageSlide("/assets/img/Shop-Items/inner-colour-hand-mug/1.JPG", 
	"/assets/img/Shop-Items/inner-colour-hand-mug/3.jpg", 
	"/assets/img/Shop-Items/inner-colour-hand-mug/4.jpg");

            } 
            
        }
    }

	renderPage(i);
});

let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}
		
	// changing text

	const product_pages = [product_1,product_2,product_3,product_4]

	let i = 0

	function next(){
		let next_area = document.getElementById('news_container')

		if (i>=news_pages.length-1){
			alert("No more pages available")
		}
		else{
			i = i+1
			renderPage(i)
			
		}


	}	
	
	function prev(){
		let next_area = document.getElementById('news_container')

		if (i <= 0){
			alert("No more pages available")
		}
		else{
			i = i-1
			renderPage(i)
			

		}


	}
	
	function renderPage(page){
		let next_area = document.getElementById('news_container')

		next_area.innerHTML = news_pages[page];

	}
