function setTitle(event) {

    const titleElement = event.currentTarget.querySelector('h3 a');
    if (titleElement) {
        localStorage.setItem('serviceTitle', titleElement.textContent.trim());
    }
}


let imageElement = document.getElementById('single-artcile-bg')

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
        

        const titleElements = document.querySelectorAll('#service-title');
        // Update all service-title elements
        for (let i = 0; i < titleElements.length; i++) {
            titleElements[i].innerText = title;
        }

        // Update the content description
        let imageElement = document.getElementById('single-artcile-bg')
        const contentElement = document.getElementById('service-content');
        if (contentElement) {

            if (title == "Book Printing") {
                contentElement.innerText = `Book printing is the process of transforming ideas, stories, and knowledge into physical or digital formats that can be shared and preserved. It involves designing, formatting, and producing high-quality prints that reflect creativity and professionalism. From novels and textbooks to catalogs and journals, book printing ensures every detail—from cover to content—is carefully crafted to captivate readers. Modern printing technologies allow for customization, vibrant colors, and durable finishes, making it possible to create books that leave a lasting impression. Whether for personal projects or commercial publishing, book printing brings words to life, turning imagination into reality.`;

                imageElement.style.backgroundImage = `url('/assets/img/latest-news/news-bg-1.jpg')`;

            } 
            else if(title === "Visiting card Designing and printing"){
                contentElement.innerText = `At Bright Mark, we understand that a visiting card is more than just a contact detail—it’s your first impression, a reflection of your brand, and a tool to make meaningful connections. That’s why we offer premium visiting card printing services tailored to meet your unique needs. From sleek modern designs to elegant classic styles, our cards are crafted with high-quality materials and precision printing. Choose from matte, glossy, textured, or embossed finishes to create a card that truly stands out. Make every handshake unforgettable with Bright Mark's professional visiting card solutions!`;

                AddImageSlide("/assets/img/latest-news/Visting_card/visting_card-bg-1.jpg","/assets/img/latest-news/Visting_card/visting_card-bg-2.jpg","/assets/img/latest-news/Visting_card/visting_card-bg-3.jpg");
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

const news_2 = `<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news" onclick="setTitle(event)">
						<a href="single-news.html">
							<div class="latest-news-bg news-bg-1"></div>
						</a>
						<div class="news-text-box">
							<h3 id="service-real-title"><a href="single-news.html">Certifcate Designing and Printing</a></h3>
							<p class="excerpt">
							 
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
					
				</div>

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Deed Print</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
					<div class = "single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Color & B/W Paper Printing </a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-4"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Board Designing and Printing</a></h3>

							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-5"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Art Board Designing and Printing (Plastic)</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<!--Invitationncard-->
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Ivory Board Designing and Printing</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				
				<!--Wedding card-->
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Courquer book Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

				<!--Anniversary card-->

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Leaflet Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

				<!--Birthday card-->

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Visting Card Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

			</div>


			<div class="row">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 text-center">
							<div class="pagination-wrap">
								<ul>
									<li><a href="#" onclick="prev()">Prev</a></li>
									<li><a href="#">1</a></li>
									<li><a class="active" href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#" onclick="next()">Next</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>`


const news_3 = `<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news" onclick="setTitle(event)">
						<a href="single-news.html">
							<div class="latest-news-bg news-bg-1"></div>
						</a>
						<div class="news-text-box">
							<h3 id="service-real-title"><a href="single-news.html">Label Designing and Printing</a></h3>
							<p class="excerpt">
							 
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
					
				</div>

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">File cover Designing and printing</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
					<div class = "single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Bill book designing and Printing </a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-4"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Invoice Designing and Printing</a></h3>

							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-5"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Calender Designing and Printing (Plastic)</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<!--Invitationncard-->
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Pety cash Book Designing and Printing</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				
				<!--Wedding card-->
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Quatation Book Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

				<!--Anniversary card-->

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Book Mark Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

				<!--Birthday card-->

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Tute Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

			</div>


			<div class="row">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 text-center">
							<div class="pagination-wrap">
								<ul>
									<li><a href="#" onclick="prev()">Prev</a></li>
									<li><a href="#">1</a></li>
									<li><a class="active" href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#" onclick="next()">Next</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>`


const news_4 = `<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news" onclick="setTitle(event)">
						<a href="single-news.html">
							<div class="latest-news-bg news-bg-1"></div>
						</a>
						<div class="news-text-box">
							<h3 id="service-real-title"><a href="single-news.html">Tution card Designing and Printing</a></h3>
							<p class="excerpt">
							 
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
					
				</div>

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Loarn card Designing and printing</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
					<div class = "single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Tag Designing and Printing </a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-4"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Lunch box Printing</a></h3>

							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-5"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Packing box Printing (Plastic)</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				<!--Invitationncard-->
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Diary Book Designing and Printing</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				
				<!--Wedding card-->
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Flex Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

				<!--Anniversary card-->

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">One way vision Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

				<!--Birthday card-->

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">pet paper Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

			</div>


			<div class="row">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 text-center">
							<div class="pagination-wrap">
								<ul>
									<li><a href="#" onclick="prev()">Prev</a></li>
									<li><a href="#">1</a></li>
									<li><a class="active" href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#" onclick="next()">Next</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>`	
			

const news_5 = `<div class="row">
			<div class="col-lg-4 col-md-6">
				<div class="single-latest-news" onclick="setTitle(event)">
					<a href="single-news.html">
						<div class="latest-news-bg news-bg-1"></div>
					</a>
					<div class="news-text-box">
						<h3 id="service-real-title"><a href="single-news.html">LED pannel Designing</a></h3>
						<p class="excerpt">
						 
						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
				
			</div>

			<div class="col-lg-4 col-md-6">
				<div class="single-latest-news"  onclick="setTitle(event)">
					<a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
					<div class="news-text-box">
						<h3><a href="single-news.html">Embossed logo Designing and printing</a></h3>
						<p class="excerpt">

						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
				<div class = "single-latest-news"  onclick="setTitle(event)">
					<a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
					<div class="news-text-box">
						<h3><a href="single-news.html">Embossed Letters Designing and Printing </a></h3>
						<p class="excerpt">

						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="single-latest-news"  onclick="setTitle(event)">
					<a href="single-news.html"><div class="latest-news-bg news-bg-4"></div></a>
					<div class="news-text-box">
						<h3><a href="single-news.html">Embossed Name Board Designing and Printing </a></h3>

						<p class="excerpt">

						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="single-latest-news"  onclick="setTitle(event)">
					<a href="single-news.html"><div class="latest-news-bg news-bg-5"></div></a>
					<div class="news-text-box">
						<h3><a href="single-news.html">Quarigated Printing (Plastic)</a></h3>
						<p class="excerpt">

						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			<!--Invitationncard-->
			<div class="col-lg-4 col-md-6">
				<div class="single-latest-news"  onclick="setTitle(event)">
					<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
					<div class="news-text-box">
						<h3><a href="single-news.html">Sunboard Designing and Printing</a></h3>
						<p class="excerpt">

						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>
			
			<!--Wedding card-->
			<div class="col-lg-4 col-md-6">
				<div class="single-latest-news"  onclick="setTitle(event)">
					<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
					<div class="news-text-box">
						<h3><a href="single-news.html">Ecoboard Designing and Printing</a></h3>
						<p class="excerpt">
						
						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>

			<!--Anniversary card-->

			<div class="col-lg-4 col-md-6">
				<div class="single-latest-news"  onclick="setTitle(event)">
					<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
					<div class="news-text-box">
						<h3><a href="single-news.html">Backlight Designing and Printing</a></h3>
						<p class="excerpt">
						
						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>

			<!--Birthday card-->

			<div class="col-lg-4 col-md-6">
				<div class="single-latest-news"  onclick="setTitle(event)">
					<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
					<div class="news-text-box">
						<h3><a href="single-news.html">Transparent sticker Designing and Printing</a></h3>
						<p class="excerpt">
						
						</p>
						<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
					</div>
				</div>
			</div>

		</div>


		<div class="row">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="pagination-wrap">
							<ul>
								<li><a href="#" onclick="prev()">Prev</a></li>
								<li><a href="#">1</a></li>
								<li><a class="active" href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#" onclick="next()">Next</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>`	
		
		
const news_6 = `<div class="row">
		<div class="col-lg-4 col-md-6">
			<div class="single-latest-news" onclick="setTitle(event)">
				<a href="single-news.html">
					<div class="latest-news-bg news-bg-1"></div>
				</a>
				<div class="news-text-box">
					<h3 id="service-real-title"><a href="single-news.html">Luminex(Diamond cut) Designing and Printing</a></h3>
					<p class="excerpt">
					 
					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
			
		</div>

		<div class="col-lg-4 col-md-6">
			<div class="single-latest-news"  onclick="setTitle(event)">
				<a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
				<div class="news-text-box">
					<h3><a href="single-news.html">Fabric(Sintetic) Designing and Printing</a></h3>
					<p class="excerpt">

					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
			<div class = "single-latest-news"  onclick="setTitle(event)">
				<a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
				<div class="news-text-box">
					<h3><a href="single-news.html">Embossed Letters Designing and Printing </a></h3>
					<p class="excerpt">

					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-6">
			<div class="single-latest-news"  onclick="setTitle(event)">
				<a href="single-news.html"><div class="latest-news-bg news-bg-4"></div></a>
				<div class="news-text-box">
					<h3><a href="single-news.html">Sticker (Matt/Gloss) Designing and Printing </a></h3>

					<p class="excerpt">

					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>
		<div class="col-lg-4 col-md-6">
			<div class="single-latest-news"  onclick="setTitle(event)">
				<a href="single-news.html"><div class="latest-news-bg news-bg-5"></div></a>
				<div class="news-text-box">
					<h3><a href="single-news.html">Magnet Printing (Plastic)</a></h3>
					<p class="excerpt">

					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>
		<!--Invitationncard-->
		<div class="col-lg-4 col-md-6">
			<div class="single-latest-news"  onclick="setTitle(event)">
				<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
				<div class="news-text-box">
					<h3><a href="single-news.html">Mug Printing</a></h3>
					<p class="excerpt">

					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>
		
		<!--Wedding card-->
		<div class="col-lg-4 col-md-6">
			<div class="single-latest-news"  onclick="setTitle(event)">
				<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
				<div class="news-text-box">
					<h3><a href="single-news.html">T-shirt Designing and Printing</a></h3>
					<p class="excerpt">
					
					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>

		<!--Anniversary card-->

		<div class="col-lg-4 col-md-6">
			<div class="single-latest-news"  onclick="setTitle(event)">
				<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
				<div class="news-text-box">
					<h3><a href="single-news.html">Key-tag Designing and Printing</a></h3>
					<p class="excerpt">
					
					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>

		<!--Birthday card-->

		<div class="col-lg-4 col-md-6">
			<div class="single-latest-news"  onclick="setTitle(event)">
				<a href="single-news.html"><div class="latest-news-bg news-bg-6"></div></a>
				<div class="news-text-box">
					<h3><a href="single-news.html">Souvenir items Designing and Printing</a></h3>
					<p class="excerpt">
					
					</p>
					<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
				</div>
			</div>
		</div>

	</div>


	<div class="row">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="pagination-wrap">
						<ul>
							<li><a href="#" onclick="prev()">Prev</a></li>
							<li><a href="#">1</a></li>
							<li><a class="active" href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#" onclick="next()">Next</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>`
	
const news_7 = `<div class="row">
	<div class="col-lg-4 col-md-6">
		<div class="single-latest-news" onclick="setTitle(event)">
			<a href="single-news.html">
				<div class="latest-news-bg news-bg-1"></div>
			</a>
			<div class="news-text-box">
				<h3 id="service-real-title"><a href="single-news.html">Bottle Printing</a></h3>
				<p class="excerpt">
				 
				</p>
				<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
			</div>
		</div>
		
	</div>

	<div class="col-lg-4 col-md-6">
		<div class="single-latest-news"  onclick="setTitle(event)">
			<a href="single-news.html"><div class="latest-news-bg news-bg-2"></div></a>
			<div class="news-text-box">
				<h3><a href="single-news.html">Flag Printing</a></h3>
				<p class="excerpt">

				</p>
				<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
			</div>
		</div>
	</div>
	<div class="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
		<div class = "single-latest-news"  onclick="setTitle(event)">
			<a href="single-news.html"><div class="latest-news-bg news-bg-3"></div></a>
			<div class="news-text-box">
				<h3><a href="single-news.html">Glass Printing </a></h3>
				<p class="excerpt">

				</p>
				<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
			</div>
		</div>
	</div>
	<div class="col-lg-4 col-md-6">
		<div class="single-latest-news"  onclick="setTitle(event)">
			<a href="single-news.html"><div class="latest-news-bg news-bg-4"></div></a>
			<div class="news-text-box">
				<h3><a href="single-news.html">Tile Printing </a></h3>

				<p class="excerpt">

				</p>
				<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
			</div>
		</div>
	</div>
	

</div>


<div class="row">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 text-center">
				<div class="pagination-wrap">
					<ul>
						<li><a href="#" onclick="prev()">Prev</a></li>
						<li><a href="#">1</a></li>
						<li><a class="active" href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#" onclick="next()">Next</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>`		
	// changing text

	const news_pages = [news_2,news_3,news_4,news_5,news_6,news_7]

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

		if (i <= 1){
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
		alert(i);

	}
