var products = [
	{
		name: "Work",
	  	price: "$100",
	  	description: "Do you want to kick your boss in the teeth? Did you forget to fill out your TPS reports? Is there more than a 50% possibility you will jump out of a window if you have to sit through one more HR meeting? Let our guys help you Weasel out of work before you do something stupid!",
	  	imgUrl: "https://s.yimg.com/uu/api/res/1.2/AMqFvPSZDC6ROG9vT8I1Og--/aD0zNjA7dz02NDA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/video/video.pd2upload.com/video.mensslate.mansome.com@3c1b7f2c-b1f1-3ecb-90d9-1ca2abefc0a0_FULL.jpg"
	},
	{
		name : "School",
		price : "$200",
		description : "Hey, everyone knows that C’s get degrees! No need to show up for class on Friday when you could be pre-gaming for the party later that night! Your professors probably know that’s all you’re thinking about anyway. Or maybe you forgot you had finals and didn’t get to cram! Let us work to get the perfect excuse so you can make up your tests later!",
		imgUrl : "https://ww2.kqed.org/pop/wp-content/uploads/sites/12/2013/05/schools-out.jpg"
	},
	{
		name: "Wedding",
		price: "$300",
		description: "Is this your best friends 4th wedding in 3 years? Have you had to buy the same wedding gift 3 times for the same guy? Did you accidentally sleep with one of the bridesmaids after the rehearsal, realize that she is a troll, and now you need to fall off the face of the planet? We have you covered.",
		imgUrl: "http://ivillageau.s3.amazonaws.com/wp-content/uploads/files/wedding-cake-fall.jpg"
	},
	{
		name: "Funeral",
		price: "$400",
		description: "You’re clearly an awful person if you don’t want to go to Nana’s funeral. BUT! The only people who you have to admit it to is us! Don’t let your whole family think you’re a piece-of-crap flake. Hire us to come up with he perfect way to keep you at home in your underwear instead of at a funeral home watching granny get buried under there. ",
		imgUrl: "https://media.consumeraffairs.com/files/cache/news/FuneralHomeLawsuitsViolations_medium.jpg"
	},
	{
		name: "Kids Activity",
		price: "$500",
		description: "We understand that watching a bunch 6 year olds flock to a soccer ball like honey boo boo to a Cinnabon isn’t how you want to spend you Saturday morning. If you’re on this site there’s no chance you’re a candidate for Father Of The Year, so keep up that mediocre parenting and let us get you out of it!",
		imgUrl: "https://todaysmanager.files.wordpress.com/2013/03/tee-ball.jpg"
	},
	{
		name: "Bad Date",
		price: "$600",
		description: "Tinder is stupid and filled with losers. If you found yourself smack-dab-in-the-middle of a date with Cleetus the Possum Wrangler by mistake give us a call. We have emergency services and we will send someone to stage a kidnapping and drop you off back safe at home. ",
		imgUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2013-12/campaign_images/webdr06/16/23/18-ways-to-get-out-of-a-bad-date-1-22065-1387256261-2_big.jpg"
	},
	{
		name: "In-Law Visit",
		price: "$700",
		description: "Nobody hates their in-laws more than me. In fact, this is the idea that sparked the idea for this entire company. When there isn’t enough whiskey in the world to save you from a weekend with your mother in law, call us. We have years of experience with he worst kinds of people and can help you say and do JUST the right thing to get out of spending any more time with satan. I mean Charlotte. I mean my mother in law. I mean YOUR mother in law. ",
		imgUrl: "http://i.huffpost.com/gen/2119004/images/o-INLAWS-facebook.jpg"
	},
	{
		name: "Parents Visit",
		price: "$800",
		description: "Are your parents just too much to handle? Constantly asking why you aren’t married? Why don’t you have kids yet? When are you going to fix that door? We have just the way to get rid of your mom without hurting her feelings!",
		imgUrl: "http://www.kiplinger.com/slideshow/taxes/T054-S001-most-overlooked-tax-breaks-new-parents/images/intro.jpg"
	}
];


// Get a reference to the appropriate DOM element for products
var productsDiv = document.getElementById('products');

// loop to create each product
for (var loopTracker = 0; loopTracker < products.length; loopTracker += 1) {

	// set current product to the index of looptracker
	var currentProduct = products[loopTracker];
	//console.log(currentProduct.name);

	// create article element for product
	var productArticleTag = document.createElement('article');
	//console.log(productArticleTag);

	// create header element to contain title
	var productArticleTitleHeaderTag = document.createElement('header');
	//console.log(productArticleTitleHeaderTag);

	// create h2 element of actuall title
	var productArticleTitleH2Tag = document.createElement('h2');
	//console.log(productArticleTitleH2Tag);

	// create section element to contain image
	var productImageSectionTag = document.createElement('section');
	//console.log(productImageSectionTag);

	// create actuall product image element
	var productImageTag = document.createElement('img');
	//console.log(productImageTag);

	// set src and class for image element
	productImageTag.className = "productImage";
	productImageTag.src = currentProduct.imgUrl;
	//console.log(productImageTag);

	// append image element to it's section
	productImageSectionTag.appendChild(productImageTag);
	//console.log(productImageSectionTag);

	// set class of title h2
	productArticleTitleH2Tag.className = "productTitle";
	//console.log(productArticleTitleH2Tag);

	// create h2 title text
	var productTitleH2Text = document.createTextNode(currentProduct.name);
	//console.log(productTitleH2Text);

	// append text to h2 element
	productArticleTitleH2Tag.appendChild(productTitleH2Text);
	//console.log(productArticleTitleH2Tag);

	// append h2 to header
	productArticleTitleHeaderTag.appendChild(productArticleTitleH2Tag);
	//console.log(productArticleTitleHeaderTag);

	// append header to product article
	productArticleTag.appendChild(productArticleTitleHeaderTag);
	//console.log(productArticleTag);

	// append image to it's section
	productArticleTag.appendChild(productImageSectionTag);
	//console.log(productArticleTag);

	// create product description section element
	var productDescriptionSectionTag = document.createElement('section')
	//console.log(productDescriptionSectionTag);

	// create product description header element
	var productDescriptionHeaderTag = document.createElement('header');
	//console.log(productDescriptionHeaderTag);

	// create product description paragraph element
	var productDescriptionTextTag = document.createElement('p');
	//console.log(productDescriptionTextTag);

	// create product description text
	var productDescriptionText = document.createTextNode(currentProduct.description);
	//console.log(productDescriptionText);

	// append product description text to it's element
	productDescriptionTextTag.appendChild(productDescriptionText);
	//console.log(productDescriptionTextTag);

	// set product description element class
	productDescriptionTextTag.className = "description";
	//console.log(productDescriptionTextTag);

	// append product description element to its section
	productDescriptionSectionTag.appendChild(productDescriptionTextTag);
	//console.log(productDescriptionSectionTag);

	// append product description to the product article
	productArticleTag.appendChild(productDescriptionSectionTag);

	// create product price section
	var productPriceSectionTag = document.createElement('section');
	//console.log(productPriceSectionTag);

	// create product price header
	var productPriceHeaderTag = document.createElement('header');
	//console.log(productPriceHeaderTag);

	// create product price paragraph element
	var productPriceNumberTag = document.createElement('p');
	//console.log(productPriceNumberTag);

	// set price paragraph class
	productPriceNumberTag.className = "priceFigure";

	// create price text
	var productPriceNumberText = document.createTextNode(currentProduct.price);
	//console.log(productPriceNumberText);

	// append price text to paragraph
	productPriceNumberTag.appendChild(productPriceNumberText);
	//console.log(productPriceNumberTag);

	// append price header to its section
	productPriceSectionTag.appendChild(productPriceHeaderTag);

	// append price paragraph to it section
	productPriceSectionTag.appendChild(productPriceNumberTag);
	//console.log(productPriceSectionTag);

	// append price section to article element
	productArticleTag.appendChild(productPriceSectionTag);

	// append article element to the div
	productsDiv.appendChild(productArticleTag);

}