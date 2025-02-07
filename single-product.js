function setTitle(event) {

    const titleElement = event.currentTarget.querySelector('h3');
    if (titleElement) {
        localStorage.setItem('serviceTitle', titleElement.textContent.trim());
    }
}


let imageElement = document.getElementById('single-product-img');

function AddImageSlide(image1, image2, image3) {
    imageElement.innerHTML = `
        <div class="image-slider-2">
            <div class="slides-2">
                <div class="slide-2" style="background-image: url(${image1});"></div>
                <div class="slide-2" style="background-image: url(${image2});"></div>
                <div class="slide-2" style="background-image: url(${image3});"></div>
            </div>
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>
    `;
    alert("Add image slide function triggered");
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
                contentElement.innerText = `At Bright Mark, we offer high-quality book printing services tailored to your needs. Whether you’re printing educational books, novels, catalogs, manuals, or custom notebooks, we ensure sharp prints, durable binding, and a professional finish.

Our Book Printing Features:
📖 Custom Designs – Covers & layouts that match your vision
🖨️ High-Quality Printing – Crisp text and vibrant images
📚 Various Binding Options – Hardcover, softcover, spiral, and more
📦 Bulk & Single Orders – Flexible printing solutions
⏳ Fast Turnaround – Get your books printed on time

Bring your ideas to life with Bright Mark’s expert book printing services. Contact us today!

`;

AddImageSlide("/assets/img/Services-images/BOOK%20PRINTING/1.jpg", 
	"/assets/img/Services-images/BOOK%20PRINTING/3.jpg", 
	"/assets/img/Services-images/BOOK%20PRINTING/4.jpg");

    alert("check")

    

            } 
            
        }
    }

	// renderPage(i);
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
