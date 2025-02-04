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

            } 
            else if(title === "Visiting card Designing and Printing"){
                contentElement.innerText = `Make a lasting first impression with Bright Mark’s professional Visiting Card Designing & Printing services. Whether you need sleek corporate business cards or creative personal cards, we provide high-quality designs and premium printing to match your brand identity.

Why Choose Our Visiting Cards?
🎨 Custom Designs – Unique layouts tailored to your brand
🖨️ Premium Printing – Glossy, matte, textured, and special finishes
📏 Various Sizes & Styles – Standard, square, folded, or custom shapes
📦 Bulk & Single Orders – Affordable options for businesses & individuals
🚀 Fast & Reliable Service – Quick turnaround with quality assurance

Elevate your professional presence with Bright Mark’s stunning business cards. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/VISITING%20CARD/2.jpg","/assets/img/Services-images/VISITING%20CARD/4.jpg","/assets/img/Services-images/VISITING%20CARD/3.png");
            }
			else if(title === "Certifcate Designing and Printing"){
                contentElement.innerText = `At Bright Mark, we specialize in creating professionally designed certificates that leave a lasting impression. Whether for academic achievements, corporate recognition, training programs, or special events, our team ensures high-quality designs that reflect prestige and excellence.

Our services include:
✅ Custom Designs – Tailored to your brand or occasion
✅ High-Quality Printing – Premium paper and finishes available
✅ Bulk Orders – Cost-effective solutions for schools and organizations
✅ Fast Turnaround – Get your certificates ready on time

Make your certificates stand out with Bright Mark's expert design and printing services. Contact us today!`;

                AddImageSlide("/assets/img/Services-images/CETIFICATE/1.jpg","/assets/img/Services-images/CETIFICATE/2.jpg","assets/img/Services-images/CETIFICATE/3.jpg");
            }

			else if(title == "Sticker Printing"){
				contentElement.innerText = `Make your brand stand out with Bright Mark’s high-quality Sticker Printing services. Whether for product labeling, promotions, packaging, or personal use, we provide vibrant, durable, and customizable stickers to suit any purpose.

Our Sticker Printing Features:
🖨️ High-Quality Printing – Sharp colors & crisp details
🎨 Custom Shapes & Sizes – Round, square, die-cut, or any shape you need
💎 Premium Materials – Glossy, matte, waterproof, transparent & more
📦 Bulk & Single Orders – Affordable solutions for businesses & individuals
🚀 Fast Turnaround – Get your stickers printed quickly & efficiently

Boost your branding with eye-catching stickers from Bright Mark. Order now!`;

                AddImageSlide("/assets/img/Services-images/STICKER%20PRINT/2.jpg","/assets/img/Services-images/STICKER%20PRINT/1.jpg","/assets/img/Services-images/STICKER%20PRINT/3.jpg");
			}

			else if(title == "Letter head Designing and Printing"){
				contentElement.innerText = `Enhance your brand’s professionalism with Bright Mark’s premium Letterhead Designing & Printing services. A well-designed letterhead adds credibility to your business communications, making every document look official and elegant.

Why Choose Our Letterhead Services?
📄 Custom Designs – Tailored to match your brand identity
🖨️ High-Quality Printing – Sharp text, vibrant colors, and premium paper
📏 Various Paper Options – Standard, textured, and luxury finishes
📦 Bulk & Single Orders – Flexible printing solutions for businesses of all sizes
🚀 Fast & Reliable Delivery – Get your letterheads printed on time

Make a lasting impression with professionally designed letterheads from Bright Mark. Contact us today!`;

                AddImageSlide("/assets/img/Services-images/LETTER%20HEAD/2.jpg","/assets/img/Services-images/LETTER%20HEAD/1.jpg","/assets/img/Services-images/LETTER%20HEAD/3.jpg");
			}

			else if(title == "ID card Designing and Printing (Plastic)"){
				contentElement.innerText = `Ensure security and professionalism with Bright Mark’s high-quality Plastic ID Card Designing & Printing services. We create durable, custom-designed ID cards perfect for businesses, schools, events, and organizations.

Our ID Card Features:
🆔 Custom Designs – Personalized with logos, names, and details
💳 Premium PVC Material – Long-lasting, waterproof, and scratch-resistant
🔄 Single & Double-Sided Printing – Full-color, sharp, and clear prints
🔗 Optional Add-ons – Lanyards, cardholders, QR codes, barcodes & more
📦 Bulk & Single Orders – Cost-effective solutions for small & large organizations
🚀 Fast Processing & Delivery – Get your ID cards printed quickly

Upgrade your ID cards with Bright Mark’s expert design and printing. Order now!`;

                AddImageSlide("/assets/img/Services-images/ID%20CARD%20%28PLASTIC%29/1.jpg","/assets/img/Services-images/ID%20CARD%20%28PLASTIC%29/2.jpg","/assets/img/Services-images/ID%20CARD%20%28PLASTIC%29/3.jpeg");
			}

			else if(title == "Invitation card Designing and Printing"){
				contentElement.innerText = `Make every occasion special with Bright Mark’s elegant Invitation Card Designing & Printing services. Whether it’s for weddings, birthdays, corporate events, or any celebration, we create beautifully crafted invitations that leave a lasting impression.

Why Choose Our Invitation Cards?
💌 Custom Designs – Personalized to match your theme & style
🖨️ High-Quality Printing – Vibrant colors & premium finishes
📏 Various Sizes & Styles – Folded, flat, die-cut, or custom shapes
✨ Special Finishes – Embossing, foil stamping, UV coating & more
📦 Bulk & Single Orders – Flexible solutions for all events
🚀 Fast Turnaround – Get your invitations ready on time

Set the perfect tone for your event with beautifully designed invitations from Bright Mark. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/INVITATION%20CARD/1.jpg","/assets/img/Services-images/INVITATION%20CARD/3.jpg","/assets/img/Services-images/INVITATION%20CARD/4.jpg");
			}

			else if(title == "Wedding card Designing and Printing"){
				contentElement.innerText = `Make your special day unforgettable with Bright Mark’s exquisite Wedding Card Designing & Printing services. We create elegant and customized wedding invitations that reflect your love story and set the perfect tone for your big day.

Our Wedding Card Features:
💖 Custom Designs – Personalized to match your wedding theme & style
🖨️ Premium Printing – High-quality prints with vibrant colors & sharp details
📏 Various Styles & Sizes – Traditional, modern, minimalist, or luxury designs
✨ Special Finishes – Embossing, foil stamping, laser cutting, UV coating & more
📦 Complete Wedding Stationery – RSVP cards, envelopes, thank-you cards & more
🚀 Fast Turnaround – Get your wedding cards printed on time

Celebrate your love with beautifully designed wedding invitations from Bright Mark. Contact us today to create your dream wedding cards!`;

                AddImageSlide("/assets/img/Services-images/WADDING%20CARD/1.jpg","/assets/img/Services-images/WADDING%20CARD/2.jpg","/assets/img/Services-images/WADDING%20CARD/3.jpg");
			}

			else if(title == "Anniversary card Designing and Printing"){
				contentElement.innerText = `Celebrate love and milestones with Bright Mark’s beautifully crafted Anniversary Card Designing & Printing services. Whether it’s a personal celebration or a grand anniversary event, we design elegant and heartfelt invitation cards to make the occasion extra special.

Why Choose Our Anniversary Cards?
💌 Custom Designs – Personalized with names, themes & heartfelt messages
🖨️ High-Quality Printing – Crisp details with vibrant colors
📏 Various Styles & Sizes – Folded, flat, pop-up, or luxury designs
✨ Special Finishes – Embossing, foil stamping, glitter, UV coating & more
📦 Bulk & Single Orders – Perfect for intimate gatherings or large celebrations
🚀 Fast Turnaround – Get your anniversary cards printed on time

Make your anniversary celebration memorable with stunning invitations from Bright Mark. Order now!

`;

                AddImageSlide("/assets/img/Services-images/ANNIVESARY%20CARD/1.jpg","/assets/img/Services-images/ANNIVESARY%20CARD/2.jpg","/assets/img/Services-images/ANNIVESARY%20CARD/3.jpg");
			}

			else if(title == "Birthday card Designing and Printing"){
				contentElement.innerText = `Make birthdays extra special with Bright Mark’s fun and creative Birthday Card Designing & Printing services. Whether it’s a personal greeting card or an invitation for a grand celebration, we design unique and vibrant cards to match any theme or style.

Our Birthday Card Features:
🎨 Custom Designs – Personalized with names, themes & messages
🎂 Vibrant & Fun Styles – Cartoon, elegant, minimalist, or luxury designs
🖨️ High-Quality Printing – Sharp details with bright, festive colors
✨ Special Finishes – Glossy, matte, foil stamping, embossing & more
📏 Various Sizes & Shapes – Folded, flat, pop-up, or custom cut-outs
🚀 Fast Turnaround – Get your cards printed quickly & hassle-free

Make birthdays more exciting with beautifully crafted cards from Bright Mark. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/BIRTHDAY%20CARD/1.jpg","/assets/img/Services-images/BIRTHDAY%20CARD/2.jpg","/assets/img/Services-images/BIRTHDAY%20CARD/3.jpg");
			}

			else if(title == "Certifcate Designing and Printing"){
				contentElement.innerText = `Recognize achievements with Bright Mark’s professional Certificate Designing & Printing services. Whether for academic excellence, corporate recognition, training programs, or special events, we create elegant and high-quality certificates that leave a lasting impact.

Why Choose Our Certificate Services?
📜 Custom Designs – Personalized with logos, branding & official details
🖨️ High-Quality Printing – Sharp text, vibrant colors & premium finishes
📏 Various Paper & Sizes – Standard A4, custom sizes & specialty papers
✨ Special Finishes – Embossing, foil stamping, gold/silver seals & lamination
📦 Bulk & Single Orders – Flexible solutions for schools, businesses & events
🚀 Fast & Reliable Service – Get your certificates printed on time

Honor achievements with beautifully crafted certificates from Bright Mark. Order now!`;

                AddImageSlide("/assets/img/Services-images/CETIFICATE/1.jpg","/assets/img/Services-images/CETIFICATE/2.jpg","/assets/img/Services-images/CETIFICATE/3.jpg");
			}

			else if(title == "Deed Print"){
				contentElement.innerText = `Ensure the legal integrity and professionalism of your documents with Bright Mark’s reliable Deed Printing Services. We provide high-quality printing for legal deeds, property agreements, contracts, and more, ensuring each document meets the necessary standards for official use.

Why Choose Our Deed Printing Services?
📜 Customizable Layouts – Tailored designs with specific legal language and branding
🖨️ High-Quality Printing – Crisp text, clear details, and premium paper
📏 Standardized Paper Sizes – A4, legal-sized, or custom options
🖋️ Signature Spaces – Proper layout for signatures, seals, and notarizations
📦 Bulk & Single Orders – Printing solutions for law firms, businesses, and individuals
🚀 Fast & Secure Service – Timely delivery with confidentiality assured

Trust Bright Mark for your deed printing needs and ensure your documents look professional and official. Contact us today!`;

                AddImageSlide("/assets/img/Services-images/BIRTHDAY%20CARD/1.jpg","/assets/img/Services-images/BIRTHDAY%20CARD/2.jpg","/assets/img/Services-images/BIRTHDAY%20CARD/3.jpg");
			}

			else if(title == "Color & B/W Paper Printing"){
				contentElement.innerText = `Whether you need vibrant color prints or professional black-and-white documents, Bright Mark offers high-quality Color & B/W Paper Printing services to meet all your business and personal printing needs. From marketing materials to reports and presentations, we ensure your prints are crisp, clear, and impactful.

Our Printing Services Include:
🎨 Color Printing – Full-color prints for brochures, flyers, posters, and more
🖤 Black & White Printing – Professional, cost-effective prints for documents, contracts, and forms
📑 Various Paper Types & Sizes – Standard, glossy, matte, or custom sizes
💡 High-Resolution Prints – Sharp, clear details for text and images
📦 Bulk & Single Orders – Affordable pricing for both small and large print runs
🚀 Fast Turnaround – Timely printing for all your urgent needs

Get your documents printed with precision and quality at Bright Mark. Order your prints today!

`;

                AddImageSlide("/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/1.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/2.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/3.jpeg");
			}

			else if(title == "Board Designing and Printing"){
				contentElement.innerText = `Make your messages stand out with Bright Mark’s expert Board Designing & Printing services. Whether for advertising, directions, events, or corporate branding, we provide durable, high-quality boards that grab attention and convey your message effectively.

Our Board Printing Features:
🖌️ Custom Designs – Tailored to fit your brand and event needs
🖨️ High-Quality Printing – Vibrant colors, sharp images & clear text
📏 Various Sizes & Materials – Foam boards, acrylic, PVC, and more
🏷️ Multiple Uses – Event boards, signage, menus, directional signs, and advertisements
💎 Special Finishes – UV coating, lamination, or weather-resistant materials for outdoor use
🚀 Fast & Reliable Service – Timely delivery for all your board printing needs

Get your message noticed with professionally designed and printed boards from Bright Mark. Order today!`;

                AddImageSlide("/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/1.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/2.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/3.jpeg");
			}

			else if(title == "Art Board Designing and Printing (Plastic)"){
				contentElement.innerText = `Bring your creative vision to life with Bright Mark’s premium Art Board Designing & Printing services. Perfect for exhibitions, art displays, branding, or personalized decor, we offer high-quality plastic art boards that deliver vibrant colors and striking designs with lasting durability.

Why Choose Our Art Board Printing?
🎨 Custom Designs – Tailored to suit your artwork or branding vision
🖨️ High-Quality Printing – Crisp details, vibrant colors & fine textures
📏 Various Sizes & Shapes – Standard, custom sizes, and shapes to fit your needs
💎 Premium Plastic Materials – Lightweight, durable, and weather-resistant for both indoor and outdoor use
✨ Special Finishes – Glossy, matte, and UV coating options for enhanced protection
🚀 Fast Turnaround – Get your art boards printed quickly and efficiently

Create a lasting impression with beautifully designed art boards from Bright Mark. Contact us today!`;

                AddImageSlide("/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/1.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/2.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/3.jpeg");
			}

			else if(title == "Ivory Board Designing and Printing"){
				contentElement.innerText = `Enhance your projects with Bright Mark’s elegant Ivory Board Designing & Printing services. Perfect for presentations, high-end displays, or promotional materials, ivory boards offer a classic, sophisticated look that adds professionalism to any setting.

Why Choose Our Ivory Board Printing?
🎨 Custom Designs – Tailored to your brand or project specifications
🖨️ High-Quality Printing – Crisp, clear prints with vibrant details
📏 Various Sizes – Standard sizes or custom-cut to suit your needs
💎 Premium Ivory Material – Smooth, textured finish for a luxurious feel
✨ Special Finishes – Lamination, UV coating, or embossing for added durability
🚀 Quick & Reliable Service – Timely delivery to meet your project deadlines

Make a statement with sophisticated ivory boards printed by Bright Mark. Order today!`;

                AddImageSlide("/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/1.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/2.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/3.jpeg");
			}

			else if(title == "Courquer book Designing and Printing"){
				contentElement.innerText = `Ensure your couriers stand out with Bright Mark’s Courier Book Designing & Printing services. Perfect for tracking deliveries, maintaining records, or as part of your business’s operational tools, we provide professional, high-quality courier books tailored to your business needs.

Why Choose Our Courier Book Printing?
📖 Custom Designs – Tailored with your branding, logo, and specific requirements
🖨️ High-Quality Printing – Crisp text and sharp images for clarity and professionalism
📏 Various Sizes & Formats – Custom or standard sizes to suit your needs
💎 Durable Materials – High-quality paper and binding to withstand frequent use
🖋️ Multi-Part Books – Carbonless or NCR books for easy copies
🚀 Fast & Reliable Turnaround – Timely delivery for your operational needs

Get organized with custom-designed courier books from Bright Mark. Order yours today!

`;

                AddImageSlide("/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/1.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/2.jpg","/assets/img/Services-images/COLOUR%20&%20BW%20PRINT/3.jpeg");
			}

			else if(title == "Leaflet Designing and Printing"){
				contentElement.innerText = `Promote your business, event, or product with Bright Mark’s high-quality Leaflet Designing & Printing services. Whether you need informative brochures, product flyers, or event handouts, we design and print leaflets that effectively communicate your message while making a lasting impression.

Why Choose Our Leaflet Printing?
🎨 Custom Designs – Tailored to match your brand and message
🖨️ High-Quality Printing – Crisp, vibrant prints with professional finishes
📏 Various Sizes & Formats – A5, A4, DL, or custom sizes
💎 Premium Paper Choices – Glossy, matte, or textured finishes to suit your design
🚀 Fast Turnaround – Get your leaflets printed quickly for your campaigns or events
📦 Bulk & Single Orders – Affordable options for small or large print runs

Spread your message effectively with Bright Mark’s expertly designed leaflets. Contact us today to get started!`;

                AddImageSlide("/assets/img/Services-images/LEAFLET/1.jpeg","/assets/img/Services-images/LEAFLET/2.jpg","/assets/img/Services-images/LEAFLET/3.png");
			}

			else if(title == "Label Designing and Printing"){
				contentElement.innerText = `Make your products shine with Bright Mark’s Label Designing & Printing services. Whether for packaging, retail products, or special promotions, we provide custom-designed labels that enhance your brand’s appeal and ensure high-quality printing for a polished, professional look.

Why Choose Our Label Printing?
🎨 Custom Designs – Tailored to fit your brand and product
🖨️ High-Quality Printing – Crisp text and vibrant, full-color designs
📏 Various Sizes & Shapes – Circular, square, rectangular, or custom shapes
💎 Premium Materials – Waterproof, weather-resistant, and adhesive labels for durability
✨ Special Finishes – Glossy, matte, textured, foil stamping & more
📦 Bulk & Single Orders – Affordable solutions for businesses of all sizes
🚀 Fast & Reliable Service – Timely printing for all your labeling needs

Enhance your product packaging with professionally designed labels from Bright Mark. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/LEBAL%20PRINT/1.jpg","/assets/img/Services-images/LEBAL%20PRINT/2.jpg","/assets/img/Services-images/LEBAL%20PRINT/3.jpg");
			}

			else if(title == "File cover Designing and printing"){
				contentElement.innerText = `Protect and organize your documents with Bright Mark’s File Cover Designing & Printing services. We create customized file covers that not only keep your papers safe but also enhance your brand’s professional image. Whether for business, educational, or personal use, our durable and stylish covers make an impression.

Why Choose Our File Cover Printing?
🎨 Custom Designs – Personalized with your logo, branding, or theme
🖨️ High-Quality Printing – Crisp graphics and vibrant colors
📏 Various Sizes – Standard sizes or custom dimensions to fit your needs
💎 Premium Materials – Durable, high-quality paper and finishes for lasting protection
✨ Special Finishes – Glossy, matte, UV coating, embossing & more
🚀 Fast Turnaround – Get your file covers printed quickly and professionally

Keep your documents organized and stylish with Bright Mark’s custom file covers. Order today!`;

                AddImageSlide("/assets/img/Services-images/FILECOVER%20PRINT/1.jpg","/assets/img/Services-images/FILECOVER%20PRINT/2.jpg","/assets/img/Services-images/FILECOVER%20PRINT/3.jpg");
			}

			else if(title == "Bill book designing and Printing"){
				contentElement.innerText = `Streamline your business transactions with Bright Mark’s professional Bill Book Designing & Printing services. We specialize in creating custom-designed bill books that help you maintain accurate records, enhance your business image, and improve customer trust.

Why Choose Our Bill Book Printing?
📝 Custom Designs – Tailored with your branding, logo, and business details
🖨️ High-Quality Printing – Clear, readable text and professional layouts
📏 Various Sizes & Formats – Custom sizes or standard A5/A4 bill books
💎 Durable & Professional – Premium paper and binding for long-lasting use
🖋️ Carbonless or NCR Books – Multi-part (duplicate, triplicate) options for easy record-keeping
🚀 Fast Turnaround – Quick printing to meet your business needs

Make your billing process smooth and professional with Bright Mark’s custom bill books. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/BILL%20BOOK/1.jpg","/assets/img/Services-images/BILL%20BOOK/2.jpg","/assets/img/Services-images/BILL%20BOOK/3.jpg");
			}

			else if(title == "Invoice Designing and Printing"){
				contentElement.innerText = `Ensure your business transactions are smooth and professional with Bright Mark’s Invoice Designing & Printing services. We create custom-designed invoices that reflect your brand, maintain a clear and organized structure, and help you keep track of payments efficiently.

Why Choose Our Invoice Printing?
📝 Custom Designs – Tailored to your branding and business needs
🖨️ High-Quality Printing – Crisp, clear text and professional layouts
📏 Various Sizes & Formats – Custom or standard A5/A4 sizes
💎 Durable Paper – Premium quality for a professional finish
🖋️ Carbonless or NCR Options – Multi-part (duplicate, triplicate) for record-keeping
🚀 Fast Turnaround – Timely printing for quick delivery

Keep your billing process streamlined and professional with Bright Mark’s custom invoices. Order today!`;

                AddImageSlide("/assets/img/Services-images/INVOICE%20BOOK/1.jpg","/assets/img/Services-images/INVOICE%20BOOK/2.jpg","/assets/img/Services-images/INVOICE%20BOOK/3.jpg");
			}

			else if(title == "Calender Designing and Printing (Plastic)"){
				contentElement.innerText = `Keep your brand in sight all year long with Bright Mark’s Plastic Calendar Designing & Printing services. Whether for corporate gifts, promotional items, or personal use, we provide durable, custom-designed plastic calendars that offer a lasting, high-quality visual appeal.

Why Choose Our Plastic Calendar Printing?
📅 Custom Designs – Tailored to match your brand’s look, colors, and theme
🖨️ High-Quality Printing – Sharp details, vibrant colors, and professional layouts
💎 Durable Plastic Material – Waterproof, scratch-resistant, and long-lasting
📏 Various Sizes & Formats – Wall calendars, desk calendars, and custom shapes
✨ Special Finishes – Glossy, matte, UV coating for added durability
🚀 Fast Turnaround – Get your plastic calendars printed quickly and efficiently

Keep your business visible all year with high-quality plastic calendars from Bright Mark. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/CALANDER/1.jpg","/assets/img/Services-images/CALANDER/2.jpg","/assets/img/Services-images/CALANDER/3.jpg");
			}

			else if(title == "Pety cash Book Designing and Printing"){
				contentElement.innerText = `Stay organized and keep track of your business expenses with Bright Mark’s professional Petty Cash Book Designing & Printing services. We create custom-designed petty cash books that help manage daily cash transactions efficiently, ensuring accurate record-keeping for your business.

Why Choose Our Petty Cash Book Printing?
📚 Custom Designs – Personalized with your business logo, name, and specific layout
🖨️ High-Quality Printing – Crisp text and professional layout for easy use
📏 Various Sizes – Standard sizes or custom formats to fit your needs
💎 Durable Binding – Long-lasting quality for frequent use
🖋️ Multi-Part Books – Carbonless or NCR options for duplicate or triplicate copies
🚀 Fast Turnaround – Quick printing to meet your business needs

Stay on top of your finances with a professionally designed petty cash book from Bright Mark. Order today!`;

                AddImageSlide("/assets/img/Services-images/PETYCASH%20BOOK/1.jpg","/assets/img/Services-images/PETYCASH%20BOOK/2.jpg","/assets/img/Services-images/PETYCASH%20BOOK/3.jpg");
			}

			else if(title == "Quatation Book Designing and Printing"){
				contentElement.innerText = `Streamline your sales process with Bright Mark’s Quotation Book Designing & Printing services. We offer custom-designed quotation books that allow your business to present professional, clear, and organized quotes to clients, improving both communication and credibility.

Why Choose Our Quotation Book Printing?
📝 Custom Designs – Tailored to match your branding, logo, and business details
🖨️ High-Quality Printing – Clear, crisp text with a professional and organized layout
📏 Various Sizes & Formats – Custom or standard sizes for easy handling
💎 Durable Materials – Premium paper and strong binding for frequent use
🖋️ Multi-Part Books – Carbonless or NCR books for duplicate or triplicate copies
🚀 Fast Turnaround – Get your quotation books printed quickly to meet business needs

Ensure your quotes are professional and well-organized with Bright Mark’s custom-designed quotation books. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/QUOTATION%20BOOK/1.jpg","/assets/img/Services-images/QUOTATION%20BOOK/2.jpg","/assets/img/Services-images/QUOTATION%20BOOK/3.jpg");
			}

			else if(title == "Book Mark Designing and Printing"){
				contentElement.innerText = `Add a personal touch to your books, events, or promotional materials with Bright Mark’s Bookmark Designing & Printing services. We offer custom-designed bookmarks that are not only practical but also stylish, making them perfect for giveaways, gifts, or personal use.

Why Choose Our Bookmark Printing?
🎨 Custom Designs – Tailored to your theme, logo, or message
🖨️ High-Quality Printing – Crisp details, vibrant colors, and professional finishes
📏 Various Sizes & Shapes – Standard, custom, or unique shapes to suit your style
💎 Premium Paper & Materials – Thick, durable cardstock or eco-friendly options
✨ Special Finishes – Glossy, matte, foil stamping, and rounded corners for a polished look
🚀 Fast Turnaround – Quick delivery for your promotional needs or personal projects

Create memorable bookmarks that reflect your style with Bright Mark’s custom-designed printing services. Order today!`;

                AddImageSlide("/assets/img/Services-images/BOOK%20MARK/1.jpg","/assets/img/Services-images/BOOK%20MARK/2.jpg","/assets/img/Services-images/BOOK%20MARK/3.jpg");
			}

			else if(title == "Tute Designing and Printing"){
				contentElement.innerText = `Add a personal touch to your books, events, or promotional materials with Bright Mark’s Bookmark Designing & Printing services. We offer custom-designed bookmarks that are not only practical but also stylish, making them perfect for giveaways, gifts, or personal use.

Why Choose Our Bookmark Printing?
🎨 Custom Designs – Tailored to your theme, logo, or message
🖨️ High-Quality Printing – Crisp details, vibrant colors, and professional finishes
📏 Various Sizes & Shapes – Standard, custom, or unique shapes to suit your style
💎 Premium Paper & Materials – Thick, durable cardstock or eco-friendly options
✨ Special Finishes – Glossy, matte, foil stamping, and rounded corners for a polished look
🚀 Fast Turnaround – Quick delivery for your promotional needs or personal projects

Create memorable bookmarks that reflect your style with Bright Mark’s custom-designed printing services. Order today!`;

                AddImageSlide("/assets/img/Services-images/TUTE%20PRINT/1.jpeg","/assets/img/Services-images/TUTE%20PRINT/2.jpeg","/assets/img/Services-images/TUTE%20PRINT/3.jpeg");
			}

			else if(title == "Tution card Designing and Printing"){
				contentElement.innerText = `Promote your tutoring services professionally with Bright Mark’s Tuition Card Designing & Printing services. Whether for private tutors, academies, or coaching centers, we create eye-catching and informative tuition cards that effectively showcase your expertise and contact details.

Why Choose Our Tuition Card Printing?
🎨 Custom Designs – Personalized with your name, subject specialties, and contact info
🖨️ High-Quality Printing – Crisp text and vibrant colors for a professional look
📏 Various Sizes & Styles – Standard business card size or custom dimensions
💎 Premium Paper Options – Glossy, matte, textured, or laminated finishes
✨ Special Finishes – Spot UV, embossing, or foil stamping for a premium touch
🚀 Fast Turnaround – Quick printing and delivery to help you start promoting right away

Stand out as a professional educator with Bright Mark’s high-quality tuition cards. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/TUTION%20CARD/1.jpg","/assets/img/Services-images/TUTION%20CARD/2.jpg","/assets/img/Services-images/TUTION%20CARD/3.jpg");
			}

			else if(title == "Loarn card Designing and printing"){
				contentElement.innerText = `Ensure smooth financial transactions with Bright Mark’s Loan Card Designing & Printing services. Our professionally designed loan cards help businesses, banks, and financial institutions keep track of loans, repayments, and customer details in an organized and efficient manner.

Why Choose Our Loan Card Printing?
📄 Custom Designs – Personalized with your business name, logo, and required details
🖨️ High-Quality Printing – Crisp text and professional layout for easy readability
📏 Various Sizes & Formats – Standard sizes or custom dimensions as per requirements
💎 Durable Materials – High-quality paper or plastic for long-lasting use
🔢 Numbering & Perforations – Options for sequential numbering and tear-off sections
🚀 Fast & Reliable Service – Quick printing and delivery to meet business needs

Keep your loan records well-organized with Bright Mark’s custom loan cards. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/TUTION%20CARD/1.jpg","/assets/img/Services-images/TUTION%20CARD/2.jpg","/assets/img/Services-images/TUTION%20CARD/3.jpg");
			}

			else if(title == "Tag Designing and Printing"){
				contentElement.innerText = `Enhance your branding with Bright Mark’s Tag Designing & Printing services. Whether for clothing, products, gifts, or events, we create high-quality, custom-designed tags that add a professional touch to your items.

Why Choose Our Tag Printing?
🎨 Custom Designs – Tailored to match your brand identity, logo, and message
🖨️ High-Quality Printing – Sharp text, vibrant colors, and premium finishes
📏 Various Shapes & Sizes – Standard or custom shapes like rectangular, circular, or die-cut tags
💎 Premium Materials – Cardstock, plastic, kraft paper, or waterproof options
✨ Special Finishes – Glossy, matte, foil stamping, UV coating, or embossing for an elegant touch
🔗 Multiple Attachment Options – Strings, eyelets, ribbons, or adhesives for easy use
🚀 Fast Turnaround – Quick and efficient printing for bulk or single orders

Add value to your products with stylish and professional tags from Bright Mark. Order now!`;

                AddImageSlide("/assets/img/Services-images/TAG/1.jpg","/assets/img/Services-images/TAG/2.jpg","/assets/img/Services-images/TAG/3.jpg");
			}

			else if(title == "Lunch box Printing"){
				contentElement.innerText = `Make your lunch boxes stand out with Bright Mark’s Custom Lunch Box Printing services. Whether for corporate branding, school lunches, promotional giveaways, or personalized gifts, we offer high-quality printing on lunch boxes with durable and stylish designs.

Why Choose Our Lunch Box Printing?
🎨 Custom Designs – Printed with logos, graphics, names, or unique artwork
🖨️ High-Quality Printing – Long-lasting, fade-resistant prints on various materials
🍱 Variety of Materials – Plastic, metal, or eco-friendly options available
📏 Multiple Sizes & Shapes – Standard and custom lunch box sizes to fit your needs
✨ Special Finishes – Glossy, matte, UV-coated, or heat-transfer printing for a premium look
🚀 Fast & Reliable Service – Quick turnaround for bulk or personalized orders

Perfect for schools, businesses, or personal use, Bright Mark’s custom lunch box printing ensures a unique and eye-catching look. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/LUNCH%20BOX/1.jpg","/assets/img/Services-images/LUNCH%20BOX/2.jpg","/assets/img/Services-images/LUNCH%20BOX/3.jpg");
			}

			else if(title == "Packing box Printing"){
				contentElement.innerText = `Enhance your product presentation with Bright Mark’s Packing Box Printing services. Whether for retail, e-commerce, corporate gifting, or food packaging, we provide high-quality custom box printing to elevate your brand and leave a lasting impression.

Why Choose Our Packing Box Printing?
📦 Custom Designs – Tailored with your logo, branding, and unique artwork
🖨️ High-Quality Printing – Sharp, vibrant, and long-lasting prints
📏 Various Sizes & Shapes – Standard or custom dimensions to fit your product
💎 Durable Materials – Cardboard, kraft paper, corrugated, plastic, or eco-friendly options
✨ Special Finishes – Matte, glossy, UV coating, embossing, foil stamping, or lamination
🔲 Die-Cut & Window Options – Custom shapes, cutouts, and transparent windows available
🚀 Fast & Efficient Service – Quick turnaround for small or bulk orders

Upgrade your packaging with professionally printed boxes from Bright Mark. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/PACKING%20BOX/1.jpg","/assets/img/Services-images/PACKING%20BOX/2.jpg","/assets/img/Services-images/PACKING%20BOX/3.jpg");
			}

			else if(title == "Diary Book Designing and Printing"){
				contentElement.innerText = `Keep your ideas, schedules, and notes organized with Bright Mark’s Custom Diary Book Designing & Printing services. Whether for corporate branding, personal use, or promotional gifts, we create high-quality, stylish, and durable diaries tailored to your needs.

Why Choose Our Diary Book Printing?
📖 Custom Designs – Personalized with your logo, name, and unique layouts
🖨️ High-Quality Printing – Sharp text, vibrant colors, and elegant designs
📏 Various Sizes & Formats – Standard A5, A4, pocket-size, or custom dimensions
💎 Premium Materials – Hardcover, softcover, leather-bound, spiral-bound, or eco-friendly options
✨ Special Features – Embossing, foil stamping, UV coating, ribbon bookmarks, and elastic closures
📅 Personalized Layouts – Daily, weekly, monthly planners, lined or unlined pages
🚀 Fast Turnaround – Quick printing and delivery for bulk or single orders

Stay organized and stylish with Bright Mark’s custom-designed diaries. Order yours today!`;

                AddImageSlide("/assets/img/Services-images/PACKING%20BOX/1.jpg","/assets/img/Services-images/PACKING%20BOX/2.jpg","/assets/img/Services-images/PACKING%20BOX/3.jpg");
			}

			else if(title == "Flex Designing and Printing"){
				contentElement.innerText = `Make a bold statement with Bright Mark’s Flex Designing & Printing services. Whether for advertisements, events, banners, or promotional displays, we provide high-quality flex printing with eye-catching designs that effectively capture attention.

Why Choose Our Flex Printing?
🎨 Custom Designs – Tailored to your brand, business, or event theme
🖨️ High-Quality Printing – Vibrant colors, sharp text, and premium graphics
📏 Various Sizes & Formats – Small, medium, or large banners to fit your needs
💎 Durable & Weatherproof – High-quality materials suitable for indoor & outdoor use
✨ Different Types Available – Star flex, eco-solvent flex, vinyl banners, and more
🔲 Mounting & Finishing Options – Grommets, eyelets, or pole pockets for easy display
🚀 Fast Turnaround – Quick and efficient printing to meet tight deadlines

Boost your brand visibility with Bright Mark’s top-quality flex printing. Order now!`;

                AddImageSlide("/assets/img/Services-images/FLEX/1.jpg","/assets/img/Services-images/FLEX/2.jpg","/assets/img/Services-images/FLEX/digital-print.jpg");
			}

			else if(title == "One way vision Designing and Printing"){
				contentElement.innerText = `Enhance privacy and branding with Bright Mark’s One-Way Vision Designing & Printing services. Ideal for storefronts, office glass partitions, vehicle windows, and promotional displays, one-way vision printing allows visibility from one side while displaying vibrant graphics on the other.

Why Choose Our One-Way Vision Printing?
🔍 Custom Designs – Tailored with your brand logo, advertisement, or promotional content
🖨️ High-Quality Printing – Vivid colors and sharp graphics for maximum impact
📏 Various Sizes & Shapes – Custom dimensions to fit any glass surface
💎 Premium Perforated Vinyl – Ensures visibility from the inside while displaying a design outside
☀️ Weather & UV Resistant – Long-lasting, fade-proof, and durable for outdoor use
🚗 Ideal for Vehicles & Storefronts – Perfect for advertising on glass surfaces without blocking visibility
🚀 Fast Turnaround – Quick design and printing to meet your business needs

Upgrade your branding with eye-catching One-Way Vision Printing from Bright Mark. Order today!`;

                AddImageSlide("/assets/img/Services-images/ONE%20WAY%20VISION/1.jpeg","/assets/img/Services-images/ONE%20WAY%20VISION/2.jpg","/assets/img/Services-images/ONE%20WAY%20VISION/3.png");
			}

			else if(title == "Pet Paper Designing and Printing"){
				contentElement.innerText = `Get high-quality, durable prints with Bright Mark’s PET Paper Designing & Printing services. PET (Polyethylene Terephthalate) paper is waterproof, tear-resistant, and ideal for high-end packaging, labels, tags, and specialized printing needs.

Why Choose Our PET Paper Printing?
📜 Custom Designs – Printed with logos, graphics, and branding elements
🖨️ High-Quality Printing – Sharp text, vibrant colors, and premium finishing
💎 Durable & Tear-Resistant – Long-lasting material that withstands wear and tear
💦 Waterproof & Weatherproof – Suitable for outdoor and industrial use
📏 Multiple Sizes & Formats – Available in various thicknesses and finishes
✨ Special Finishes – Matte, glossy, UV coating, or embossing for a premium look
🚀 Fast Turnaround – Quick printing and delivery for bulk or custom orders

Upgrade your printing quality with durable PET Paper Printing from Bright Mark. Order now!

`;

                AddImageSlide("/assets/img/Services-images/PET%20PAPER/1.jpg","/assets/img/Services-images/PET%20PAPER/2.jpg","/assets/img/Services-images/PET%20PAPER/3.jpg");
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

const news_1 = `<div class="latest-news mt-150 mb-150">
		<div class="container" id="news_container">
			<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news" onclick="setTitle(event)">
						<a href="single-news.html">
							<div class="latest-news-bg news-bg-1"></div>
						</a>
						<div class="news-text-box">
							<h3 id="service-real-title"><a href="single-news.html">Book Printing</a></h3>
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
							<h3><a href="single-news.html">Sticker Printing</a></h3>
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
							<h3><a href="single-news.html">Visiting card Designing and Printing</a></h3>
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
							<h3><a href="single-news.html">Letter head Designing and Printing</a></h3>

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
							<h3><a href="single-news.html">ID card Designing and Printing (Plastic)</a></h3>
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
							<h3><a href="single-news.html">Invitation card Designing and Printing</a></h3>
							<p class="excerpt">

							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>
				
				<!--Wedding card-->
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-7"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Wedding card Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

				<!--Anniversary card-->

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-8"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Anniversary card Designing and Printing</a></h3>
							<p class="excerpt">
							
							</p>
							<a href="single-news.html" class="read-more-btn">read more <i class="fas fa-angle-right"></i></a>
						</div>
					</div>
				</div>

				<!--Birthday card-->

				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news"  onclick="setTitle(event)">
						<a href="single-news.html"><div class="latest-news-bg news-bg-9"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Birthday card Designing and Printing</a></h3>
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
			</div>
		</div>
	</div>`

const news_2 = `<div class="row">
				<div class="col-lg-4 col-md-6">
					<div class="single-latest-news" onclick="setTitle(event)">
						<a href="single-news.html">
							<div class="latest-news-bg news-bg-10"></div>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-11"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-12"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-13"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-14"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-15"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-16"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-17"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-18"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Visiting card Designing and Printing</a></h3>
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
							<div class="latest-news-bg news-bg-19"></div>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-20"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-21"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-22"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-23"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-24"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-25"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-26"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-27"></div></a>
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
							<div class="latest-news-bg news-bg-28"></div>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-29"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-30"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-31"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-32"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-33"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-34"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-35"></div></a>
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
						<a href="single-news.html"><div class="latest-news-bg news-bg-36"></div></a>
						<div class="news-text-box">
							<h3><a href="single-news.html">Pet Paper Designing and Printing</a></h3>
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
						<div class="latest-news-bg news-bg-37"></div>
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
					<a href="single-news.html"><div class="latest-news-bg news-bg-38"></div></a>
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
					<a href="single-news.html"><div class="latest-news-bg news-bg-39"></div></a>
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
					<a href="single-news.html"><div class="latest-news-bg news-bg-40"></div></a>
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
					<a href="single-news.html"><div class="latest-news-bg news-bg-41"></div></a>
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
					<a href="single-news.html"><div class="latest-news-bg news-bg-42"></div></a>
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
					<a href="single-news.html"><div class="latest-news-bg news-bg-43"></div></a>
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
					<a href="single-news.html"><div class="latest-news-bg news-bg-44"></div></a>
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
					<a href="single-news.html"><div class="latest-news-bg news-bg-45"></div></a>
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
					<div class="latest-news-bg news-bg-46"></div>
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
				<a href="single-news.html"><div class="latest-news-bg news-bg-47"></div></a>
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
				<a href="single-news.html"><div class="latest-news-bg news-bg-48"></div></a>
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
				<a href="single-news.html"><div class="latest-news-bg news-bg-49"></div></a>
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
				<a href="single-news.html"><div class="latest-news-bg news-bg-50"></div></a>
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
				<a href="single-news.html"><div class="latest-news-bg news-bg-51"></div></a>
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
				<a href="single-news.html"><div class="latest-news-bg news-bg-52"></div></a>
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
				<a href="single-news.html"><div class="latest-news-bg news-bg-53"></div></a>
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
				<a href="single-news.html"><div class="latest-news-bg news-bg-54"></div></a>
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
				<div class="latest-news-bg news-bg-55"></div>
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
			<a href="single-news.html"><div class="latest-news-bg news-bg-56"></div></a>
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
			<a href="single-news.html"><div class="latest-news-bg news-bg-57"></div></a>
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
			<a href="single-news.html"><div class="latest-news-bg news-bg-58"></div></a>
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

	const news_pages = [news_1,news_2,news_3,news_4,news_5,news_6,news_7]

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
