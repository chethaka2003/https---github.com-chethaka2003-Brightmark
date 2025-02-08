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
            <div class="slides">
                <div class="slide" style="background-image: url(${image1});"></div>
                <div class="slide" style="background-image: url(${image2});"></div>
                <div class="slide" style="background-image: url(${image3});"></div>
            </div>
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>
    `;
}

function AddImageSlide2(image1, image2) {
    imageElement.innerHTML = `
        <div class="image-slider-2">
            <div class="slides">
                <div class="slide" style="background-image: url(${image1});"></div>
                <div class="slide" style="background-image: url(${image2});"></div>
            </div>
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>
    `;
}

function AddImageSlide1(image1) {
    imageElement.innerHTML = `
        <div class="image-slider-2">
            <div class="slides">
                <div class="slide" style="background-image: url(${image1});"></div>
            </div>
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>
    `;
}

function AddImageSlide8(image1,image2,image3,image4,image5,image6,image7,image8) {
    imageElement.innerHTML = `
        <div class="image-slider-2">
            <div class="slides">
                <div class="slide" style="background-image: url(${image1});"></div>
                <div class="slide" style="background-image: url(${image2});"></div>
                <div class="slide" style="background-image: url(${image3});"></div>
                <div class="slide" style="background-image: url(${image4});"></div>
                <div class="slide" style="background-image: url(${image5});"></div>
                <div class="slide" style="background-image: url(${image6});"></div>
                <div class="slide" style="background-image: url(${image7});"></div>
                <div class="slide" style="background-image: url(${image8});"></div>
            </div>
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>
    `;
}

function AddImageSlide5(image1,image2,image3,image4,image5) {
    imageElement.innerHTML = `
        <div class="image-slider-2">
            <div class="slides">
                <div class="slide" style="background-image: url(${image1});"></div>
                <div class="slide" style="background-image: url(${image2});"></div>
                <div class="slide" style="background-image: url(${image3});"></div>
                <div class="slide" style="background-image: url(${image4});"></div>
                <div class="slide" style="background-image: url(${image5});"></div>
            </div>
            <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
            <button class="next" onclick="moveSlide(1)">&#10095;</button>
        </div>
    `;
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
	"/assets/img/Shop-Items/inner-colour-hand-mug/2.JPG", 
	"/assets/img/Shop-Items/inner-colour-hand-mug/3.JPG");

            }
            else if(title == "Inner Heart Handle Mug") {
                contentElement.innerText = `Bring love and style to your coffee moments with our Inner Heart Handle Mug. Perfect for gifting or personal use, this mug features a heart-shaped handle and a colorful inner design, adding a touch of charm to your beverage experience.

Features:
❤️ Unique Heart-Shaped Handle – A creative and romantic touch
☕ High-Quality Ceramic – Durable and heat-resistant for everyday use
🎨 Vibrant Inner Colors – Multiple color options to suit your style
🖨️ Customizable Design – Ideal for personalized messages or images
💎 Glossy Finish – Smooth and elegant surface for a premium feel
🚀 Microwave & Dishwasher Safe – Convenient and easy to clean

Whether it's for a loved one or just for yourself, this Inner Heart Handle Mug is the perfect blend of function and style. Order now!

`;

AddImageSlide("/assets/img/Shop-Items/inner-heart-handle-mug/1.JPG", 
	"/assets/img/Shop-Items/inner-heart-handle-mug/2.JPG", 
	"/assets/img/Shop-Items/inner-heart-handle-mug/3.JPG");

            }
            else if(title == "Box Frame") {
                contentElement.innerText = `Display your cherished memories in style with our Box Frame, a perfect combination of elegance and durability. Ideal for photos, artwork, or mementos, these frames provide a modern and classy look while offering extra depth and protection.

Features:
🖼️ Premium Quality Material – Made with high-grade wood, plastic, or metal
📏 Deep Frame Design – Adds depth and dimension to your display
🎨 Custom Sizes & Colors – Available in various dimensions and finishes to match any decor
🖨️ Photo & Artwork Friendly – Suitable for photos, certificates, and 3D objects
✨ Wall-Mount & Tabletop Options – Versatile for any space
🚀 Durable & Long-Lasting – Built to protect and preserve your keepsakes

Perfect for home decor, office walls, or gifting, our Box Frames add a stylish touch to any space. Order yours today!

`;

AddImageSlide2("/assets/img/Shop-Items/box-frame/1.JPG", 
	"/assets/img/Shop-Items/box-frame/2.JPG");

            } 
            else if(title == "Box Pabalu Frame") {
                contentElement.innerText = `Add a touch of elegance and durability to your displays with our Box Pabalu (Marble) Frame. Crafted with a marble-inspired design, these frames offer a luxurious look, perfect for showcasing photos, certificates, or artwork with a premium finish.

Features:
🖼️ Marble Texture Finish – Gives a classic, timeless appeal
💎 Premium Quality – Sturdy construction for long-lasting use
📏 Deep Box Design – Adds dimension and highlights your content beautifully
🎨 Custom Sizes & Colors – Choose from a variety of marble patterns and frame colors
✨ Wall-Mount & Tabletop Options – Suitable for any space, home, or office
🚀 Perfect for Special Occasions – Ideal for weddings, anniversaries, or professional displays

Elevate your photo and art presentation with our Box Pabalu Frame. Order yours today!
`;

AddImageSlide1("/assets/img/Shop-Items/box-pabalu-frame/1.JPG");

            }  
            else if(title == "Clock Photo Frame") {
                contentElement.innerText = `Combine functionality with style using our Clock Photo Frame, a perfect blend of timekeeping and memory preservation. This unique frame is ideal for displaying cherished photos while keeping track of time. Perfect for home decor, office spaces, or gifting.

Features:
⏰ Built-in Clock – Functional and stylish, with an easy-to-read display
🖼️ Photo Frame Design – Showcase your favorite memories alongside the clock
📏 Various Sizes & Layouts – Available in single-photo or multi-photo designs
🎨 Customizable Options – Choose frame colors, clock styles, and personalized designs
💎 Durable Materials – Made with high-quality wood, metal, or plastic frames
✨ Wall-Mount & Tabletop Options – Versatile for any setting
🚀 Ideal for Gifts – Perfect for birthdays, anniversaries, and special occasions

Make every second memorable with our Clock Photo Frame. Order yours today!
`;

AddImageSlide1("/assets/img/Shop-Items/clock-photo-frames/1.JPG");

            }
            
            else if(title == "Glass Photo Frame") {
                contentElement.innerText = `Give your memories a sleek and modern touch with our Glass Photo Frame. Designed to enhance and protect your photos, these frames offer a crystal-clear finish that adds elegance to any setting. Perfect for home decor, office spaces, or special gifts.

Features:
🌟 Premium Glass Finish – Smooth, glossy surface for a sophisticated look
🖼️ Frameless & Minimalist Design – Offers a clean, modern aesthetic
📏 Custom Sizes Available – From small desk frames to large wall displays
💎 High-Quality Material – Scratch-resistant and durable glass
✨ Photo Protection – Keeps your pictures safe from dust and damage
🚀 Versatile Display Options – Suitable for wall-mounting or tabletop display

Preserve your cherished moments in style with our Glass Photo Frame. Order now and showcase your memories beautifully!


`;

AddImageSlide8("/assets/img/Shop-Items/glass-photo-frames/1.JPG","/assets/img/Shop-Items/glass-photo-frames/2.JPG","/assets/img/Shop-Items/glass-photo-frames/3.JPG","/assets/img/Shop-Items/glass-photo-frames/4.JPG","/assets/img/Shop-Items/glass-photo-frames/5.JPG","/assets/img/Shop-Items/glass-photo-frames/6.JPG","/assets/img/Shop-Items/glass-photo-frames/7.JPG","/assets/img/Shop-Items/glass-photo-frames/8.JPG");

            }
            else if(title == "Heart Handle Magic Mug") {
                contentElement.innerText = `Experience the magic with our Heart Handle Magic Mug, a perfect blend of style, surprise, and love. This heat-sensitive mug appears plain at first but reveals your custom design or photo when filled with a hot beverage. The heart-shaped handle adds an extra touch of romance, making it an ideal gift for special occasions.

Features:
❤️ Heart-Shaped Handle – Unique and charming design
☕ Heat-Sensitive Magic – Reveals hidden images or text when hot
🎨 Customizable Printing – Add photos, messages, or logos
💎 High-Quality Ceramic – Durable, with a smooth matte finish
🚀 Microwave Safe – Convenient for everyday use (handwash recommended for longevity)
🎁 Perfect for Gifting – Great for birthdays, anniversaries, or Valentine’s Day

Surprise your loved ones with this magical and stylish Heart Handle Magic Mug. Order now to create your personalized gift!
`;

AddImageSlide1("/assets/img/Shop-Items/heart-handle-magic-mug/1.JPG");

            }
            else if(title == "Magic Mug") {
                contentElement.innerText = `A Magic Mug is a heat-sensitive mug that transforms when filled with a hot beverage. Initially appearing plain, the hidden image or design magically reveals itself as the mug heats up, creating a delightful surprise.

Features:
☕ Heat-Sensitive Coating – Reveals hidden images or text when exposed to heat
🖼️ 360° Full-Wrap Custom Design – Your image appears around the entire mug
🎨 Customizable Printing – Add photos, logos, or personalized messages
💎 High-Quality Ceramic – Durable and stylish with a smooth matte or glossy finish
🚀 Microwave Safe – Convenient to use (handwashing recommended for long-lasting magic)
🎁 Perfect for Gifting – Ideal for birthdays, anniversaries, and special surprises

Surprise your friends and loved ones with the unique Magic Mug—Order yours today and watch the magic happen!
`;

AddImageSlide1("/assets/img/Shop-Items/magic-mug/1.JPG");

            }
            else if(title == "Normal Mug") {
                contentElement.innerText = `The Normal Mug is a classic everyday mug, perfect for coffee, tea, or any beverage of your choice. Simple yet versatile, it’s ideal for personal use, office settings, or custom printing.

Features:
☕ High-Quality Ceramic – Durable and heat-resistant
📏 Standard Size – Comfortable grip with ample capacity
🎨 Customizable Options – Add logos, text, or images for personalization
💎 Smooth Glossy Finish – Easy to clean and stylish
🚀 Microwave & Dishwasher Safe – Built for convenience and daily use
🎁 Great for Branding & Gifting – Perfect for promotional items or personalized gifts

A reliable choice for any occasion, our Normal Mug is practical and timeless. Order now to add it to your collection!
`;

AddImageSlide1("/assets/img/Shop-Items/normal-mug/1.JPG");

            } 
            else if(title == "Pabalu Photo Frame") {
                contentElement.innerText = `The Pabalu Photo Frame is a stylish and durable frame with a glass-like (pabalu) front that enhances the clarity and vibrancy of your photos. Ideal for displaying treasured memories, it adds an elegant touch to your home or office decor while protecting your photos from dust and damage.

Features:
🖼️ Crystal-Clear Pabalu Surface – Provides a premium glass-like finish
💎 High-Quality Frame Material – Ensures long-lasting durability
📏 Available in Various Sizes – From small desk frames to large wall displays
🎨 Customizable Designs – Choose from different colors and styles
✨ Photo Protection – Keeps your pictures safe and secure
🚀 Tabletop & Wall-Mount Options – Versatile for any display setting

Perfect for framing family photos, artwork, or special moments, the Pabalu Photo Frame combines function and beauty. Order yours today!
`;

AddImageSlide("/assets/img/Shop-Items/pabalu-photo-frame/1.JPG","/assets/img/Shop-Items/pabalu-photo-frame/2.JPG","/assets/img/Shop-Items/pabalu-photo-frame/3.JPG");

            }
            else if(title == "Plymounts Photo Frame") {
                contentElement.innerText = `The Pabalu Photo Frame is a stylish and durable frame with a glass-like (pabalu) front that enhances the clarity and vibrancy of your photos. Ideal for displaying treasured memories, it adds an elegant touch to your home or office decor while protecting your photos from dust and damage.

Features:
🖼️ Crystal-Clear Pabalu Surface – Provides a premium glass-like finish
💎 High-Quality Frame Material – Ensures long-lasting durability
📏 Available in Various Sizes – From small desk frames to large wall displays
🎨 Customizable Designs – Choose from different colors and styles
✨ Photo Protection – Keeps your pictures safe and secure
🚀 Tabletop & Wall-Mount Options – Versatile for any display setting

Perfect for framing family photos, artwork, or special moments, the Pabalu Photo Frame combines function and beauty. Order yours today!
`;

AddImageSlide5("/assets/img/Shop-Items/plymounts-photo-frames/1.JPG","/assets/img/Shop-Items/plymounts-photo-frames/2.JPG","/assets/img/Shop-Items/plymounts-photo-frames/3.JPG","/assets/img/Shop-Items/plymounts-photo-frames/4.JPG","/assets/img/Shop-Items/plymounts-photo-frames/5.JPG");

            }
            else if(title == "Laser Printed Wood") {
                contentElement.innerText = `Add a personalized touch to your home, office, or gifts with our Laser Printed Wood service. Using advanced laser engraving technology, we can etch intricate designs, logos, text, or artwork onto wood, creating unique and lasting pieces.

Features:
🌲 High-Quality Wood – Choose from various wood types for a natural and polished finish
🔬 Precise Laser Engraving – Delivers sharp, intricate designs with high detail
🎨 Customizable Designs – Perfect for logos, messages, quotes, and artwork
💎 Durable & Long-Lasting – Resistant to fading, ensuring your design stays crisp
✨ Eco-Friendly & Sustainable – Made with responsibly sourced wood
🎁 Ideal for Gifting – Perfect for personalized gifts, awards, and decor

Whether it’s a unique gift or custom business branding, Laser Printed Wood offers a timeless and sophisticated way to showcase your designs. Order today and bring your ideas to life!
`;

AddImageSlide("/assets/img/Shop-Items/wood-laser-printing/1.JPG","/assets/img/Shop-Items/wood-laser-printing/2.JPG","/assets/img/Shop-Items/wood-laser-printing/3.JPG");

            }
            else if(title == "Wood Pen Holder") {
                contentElement.innerText = `Add a personalized touch to your home, office, or gifts with our Laser Printed Wood service. Using advanced laser engraving technology, we can etch intricate designs, logos, text, or artwork onto wood, creating unique and lasting pieces.

Features:
🌲 High-Quality Wood – Choose from various wood types for a natural and polished finish
🔬 Precise Laser Engraving – Delivers sharp, intricate designs with high detail
🎨 Customizable Designs – Perfect for logos, messages, quotes, and artwork
💎 Durable & Long-Lasting – Resistant to fading, ensuring your design stays crisp
✨ Eco-Friendly & Sustainable – Made with responsibly sourced wood
🎁 Ideal for Gifting – Perfect for personalized gifts, awards, and decor

Whether it’s a unique gift or custom business branding, Laser Printed Wood offers a timeless and sophisticated way to showcase your designs. Order today and bring your ideas to life!
`;

AddImageSlide1("/assets/img/Shop-Items/wood-pen-holder/1.JPG");

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

    const product_1 = `<div class="row">
                <div class="col-md-12">
                    <div class="product-filters">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".mug">Mugs</li>
                            <li data-filter=".berry">Berry</li>
                            <li data-filter=".lemon">Lemon</li>
							<li data-filter=".frames">Frames</li>
                        </ul>
                    </div>
                </div>
            </div>

			<div class="row product-lists">
				<div class="col-lg-4 col-md-6 text-center mug">
					<div class="single-product-item" onclick="setTitle(event)">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/Shop-Items/inner-colour-hand-mug/2.JPG" alt=""></a>
						</div>
						<h3>Inner Colour Handle Mug (Normal)</h3>
						<p class="product-price"><span>Per item</span> 85$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center mug">
					<div class="single-product-item" onclick="setTitle(event)">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/Shop-Items/inner-heart-handle-mug/1.JPG" alt=""></a>
						</div>
						<h3>Inner Heart Handle Mug</h3>
						<p class="product-price"><span>Per Item</span> 70$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center frames">
					<div class="single-product-item"  onclick="setTitle(event)">
						<div class="product-image" >
							<a href="single-product.html"><img src="assets/img/Shop-Items/box-frame/1.JPG" alt=""></a>
						</div>
						<h3>Box Frame</h3>
						<p class="product-price"><span>Per Item</span> 35 </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center frames">
					<div class="single-product-item"  onclick="setTitle(event)">
						<div class="product-image" >
							<a href="single-product.html"><img src="assets/img/Shop-Items/box-frame/1.JPG" alt=""></a>
						</div>
						<h3>Box Pabalu Frame</h3>
						<p class="product-price"><span>Per Item</span> 50 </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center frames">
					<div class="single-product-item"  onclick="setTitle(event)">
						<div class="product-image" >
							<a href="single-product.html"><img src="assets/img/Shop-Items/box-pabalu-frame/1.JPG" alt=""></a>
						</div>
						<h3>Clock Photo Frame</h3>
						<p class="product-price"><span>Per Item</span> 45$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center frames">
					<div class="single-product-item"  onclick="setTitle(event)">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/Shop-Items/glass-photo-frames/2.JPG" alt=""></a>
						</div>
						<h3>Glass Photo Frame</h3>
						<p class="product-price"><span>Per Item</span> 80$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="pagination-wrap">
						<ul>
							<li><a href="#" class="active">1</a></li>
							<li><a  href="#" onclick="next()">2</a></li>
							<li><a href="#" onclick="next()">Next</a></li>
						</ul>
					</div>
				</div>
			</div>`


    const product_2 = `<div class="row">
                <div class="col-md-12">
                    <div class="product-filters">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".mug">Mugs</li>
                            <li data-filter=".berry">Berry</li>
                            <li data-filter=".lemon">Lemon</li>
							<li data-filter=".frames">Frames</li>
                        </ul>
                    </div>
                </div>
            </div>

			<div class="row product-lists">
				<div class="col-lg-4 col-md-6 text-center mug">
					<div class="single-product-item" onclick="setTitle(event)">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/Shop-Items/heart-handle-magic-mug/1.JPG" alt=""></a>
						</div>
						<h3>Heart Handle Magic Mug</h3>
						<p class="product-price"><span>Per item</span> 85$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center mug">
					<div class="single-product-item" onclick="setTitle(event)">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/Shop-Items/magic-mug/1.JPG" alt=""></a>
						</div>
						<h3>Magic Mug</h3>
						<p class="product-price"><span>Per Item</span> 70$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center mug">
					<div class="single-product-item"  onclick="setTitle(event)">
						<div class="product-image" >
							<a href="single-product.html"><img src="assets/img/Shop-Items/normal-mug/1.JPG" alt=""></a>
						</div>
						<h3>Normal Mug</h3>
						<p class="product-price"><span>Per Item</span> 35 </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center frames">
					<div class="single-product-item"  onclick="setTitle(event)">
						<div class="product-image" >
							<a href="single-product.html"><img src="assets/img/Shop-Items/pabalu-photo-frame/1.JPG" alt=""></a>
						</div>
						<h3>Pabalu Photo Frame</h3>
						<p class="product-price"><span>Per Item</span> 50 </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center frames">
					<div class="single-product-item"  onclick="setTitle(event)">
						<div class="product-image" >
							<a href="single-product.html"><img src="assets/img/Shop-Items/plymounts-photo-frames/2.JPG" alt=""></a>
						</div>
						<h3>Plymounts Photo Frame</h3>
						<p class="product-price"><span>Per Item</span> 45$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 text-center wood">
					<div class="single-product-item"  onclick="setTitle(event)">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/Shop-Items/wood-laser-printing/2.JPG" alt=""></a>
						</div>
						<h3>Laser Printed Wood</h3>
						<p class="product-price"><span>Per Item</span> 80$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="pagination-wrap">
						<ul>
							<li><a href="#" onclick="prev()">Prev</a></li>
                            <li><a href="#" onclick="prev()">1</a></li>
							<li><a href="#" class="active">2</a></li>
							<li><a  href="#" onclick="next()">3</a></li>
							<li><a href="#" onclick="next()">Next</a></li>
						</ul>
					</div>
				</div>
			</div>`
            
    const product_3 = `<div class="row">
                <div class="col-md-12">
                    <div class="product-filters">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".mug">Mugs</li>
                            <li data-filter=".berry">Berry</li>
                            <li data-filter=".lemon">Lemon</li>
							<li data-filter=".frames">Frames</li>
                        </ul>
                    </div>
                </div>
            </div>

			<div class="row product-lists">
				<div class="col-lg-4 col-md-6 text-center wood">
					<div class="single-product-item" onclick="setTitle(event)">
						<div class="product-image">
							<a href="single-product.html"><img src="assets/img/Shop-Items/wood-pen-holder/1.JPG" alt=""></a>
						</div>
						<h3>Wood Pen Holder</h3>
						<p class="product-price"><span>Per item</span> 85$ </p>
						<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
					</div>
				</div>

			</div>

			<div class="row">
				<div class="col-lg-12 text-center">
					<div class="pagination-wrap">
						<ul>
							<li><a href="#" onclick="prev()">Prev</a></li>
                            <li><a href="#" onclick="prev()">2</a></li>
							<li><a href="#" class="active">3</a></li>
						</ul>
					</div>
				</div>
			</div>`        

	const product_pages = [product_1,product_2,product_3]

	let i = 0

	function next(){
		let next_area = document.getElementById('container')

		if (i>=product_pages.length-1){
			alert("No more pages available")
		}
		else{
			i = i+1
			renderPage(i)
			
		}


	}	
	
	function prev(){
		let next_area = document.getElementById('container')

		if (i <= 0){
			alert("No more pages available")
		}
		else{
			i = i-1
			renderPage(i)
			

		}


	}
	
	function renderPage(page){
		let next_area = document.getElementById('container')

		next_area.innerHTML = product_pages[page];

	}
