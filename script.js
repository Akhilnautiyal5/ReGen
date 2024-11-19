// locomotive js - smooth scrolling

const scroll = new LocomotiveScroll({
	el: document.querySelector("#main"),
	smooth: true,
});

// gsap to animate
gsap.from(".navlink", {
	stagger: 0.2,
	y: 30, // Translate in the Y axis (down 10px)
	// Optional: Translate in the X axis (to the right by 30px)
	duration: 1,
	delay: 0.1,
	ease: "power3.out", // 'Power3' should be defined as "power3.out"
	opacity: 0,
});

gsap.from(".anim2", {
	stagger: 0.2,
	y: 50,
	opacity: 0,
	delay: 0.1,
	ease: Expo,
	duration: 1,
});

Shery.imageEffect("#ephemeral img", {
	zindex: -1,
	style: 3,
	config: {
		uFrequencyX: { value: 9.92, range: [0, 100] },
		uFrequencyY: { value: 5.34, range: [0, 100] },
		uFrequencyZ: { value: 28.24, range: [0, 100] },
		geoVertex: { range: [1, 64], value: 17.83 },
		aspect: { value: 0.75 },
		ignoreShapeAspect: { value: true },
		shapePosition: { value: { x: 0, y: 0 } },
		shapeScale: { value: { x: 0.5, y: 0.5 } },
		shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
		shapeRadius: { value: 0, range: [0, 2] },
		currentScroll: { value: 0 },
		scrollLerp: { value: 0.07 },
		gooey: { value: false },
		infiniteGooey: { value: false },
		growSize: { value: 4, range: [1, 15] },
		durationOut: { value: 1, range: [0.1, 5] },
		durationIn: { value: 1.5, range: [0.1, 5] },
		displaceAmount: { value: 0.5 },
		masker: { value: true },
		maskVal: { value: 1.43, range: [1, 5] },
		scrollType: { value: 0 },
		noEffectGooey: { value: true },
		onMouse: { value: 1 },
		noise_speed: { value: 0.2, range: [0, 10] },
		metaball: { value: 0.2, range: [0, 2] },
		discard_threshold: { value: 0.5, range: [0, 1] },
		antialias_threshold: { value: 0.002, range: [0, 0.1] },
		noise_height: { value: 0.5, range: [0, 2] },
		noise_scale: { value: 10, range: [0, 100] },
	},
});

Shery.textAnimate("#headings h1", {
	style: 2,
	y: 10,
	delay: 0.05,
	duration: 3,
	delay: 2,
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	multiplier: 0.1,
});

Shery.imageEffect(".imageff img", {
	style: 5,
	config: {
		a: { value: 0.92, range: [0, 30] },
		b: { value: -0.11, range: [-1, 1] },
		zindex: { value: "9996999", range: [-9999999, 9999999] },
		aspect: { value: 0.7083179353603026 },
		ignoreShapeAspect: { value: true },
		shapePosition: { value: { x: 0, y: 0 } },
		shapeScale: { value: { x: 0.5, y: 0.5 } },
		shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
		shapeRadius: { value: 0, range: [0, 2] },
		currentScroll: { value: 0 },
		scrollLerp: { value: 0.07 },
		gooey: { value: false },
		infiniteGooey: { value: false },
		growSize: { value: 4, range: [1, 15] },
		durationOut: { value: 1, range: [0.1, 5] },
		durationIn: { value: 1.5, range: [0.1, 5] },
		displaceAmount: { value: 0.5 },
		masker: { value: true },
		maskVal: { value: 1.09, range: [1, 5] },
		scrollType: { value: 0 },
		geoVertex: { range: [1, 64], value: 1 },
		noEffectGooey: { value: true },
		onMouse: { value: 1 },
		noise_speed: { value: 0.2, range: [0, 10] },
		metaball: { value: 0.2, range: [0, 2] },
		discard_threshold: { value: 0.5, range: [0, 1] },
		antialias_threshold: { value: 0.002, range: [0, 0.1] },
		noise_height: { value: 0.5, range: [0, 2] },
		noise_scale: { value: 10, range: [0, 100] },
	},
});
Shery.imageEffect("warning-message img", {
	style: 5,
	config: {
		a: { value: 0.92, range: [0, 30] },
		b: { value: -0.11, range: [-1, 1] },
		zindex: { value: "9996999", range: [-9999999, 9999999] },
		aspect: { value: 0.7083179353603026 },
		ignoreShapeAspect: { value: true },
		shapePosition: { value: { x: 0, y: 0 } },
		shapeScale: { value: { x: 0.5, y: 0.5 } },
		shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
		shapeRadius: { value: 0, range: [0, 2] },
		currentScroll: { value: 0 },
		scrollLerp: { value: 0.07 },
		gooey: { value: false },
		infiniteGooey: { value: false },
		growSize: { value: 4, range: [1, 15] },
		durationOut: { value: 1, range: [0.1, 5] },
		durationIn: { value: 1.5, range: [0.1, 5] },
		displaceAmount: { value: 0.5 },
		masker: { value: true },
		maskVal: { value: 1.09, range: [1, 5] },
		scrollType: { value: 0 },
		geoVertex: { range: [1, 64], value: 1 },
		noEffectGooey: { value: true },
		onMouse: { value: 1 },
		noise_speed: { value: 0.2, range: [0, 10] },
		metaball: { value: 0.2, range: [0, 2] },
		discard_threshold: { value: 0.5, range: [0, 1] },
		antialias_threshold: { value: 0.002, range: [0, 0.1] },
		noise_height: { value: 0.5, range: [0, 2] },
		noise_scale: { value: 10, range: [0, 100] },
	},
	debug: true,
});

gsap.from("#ephemeral img", {
	y: "70",
	opacity: 0,
	duration: 2,
	ease: Expo.easenInOut,
});

Shery.imageEffect("#bimg", {
	style: 5,
	config: {
		a: { value: 0.46, range: [0, 30] },
		b: { value: -0.98, range: [-1, 1] },
		zindex: { value: -9996999, range: [-9999999, 9999999] },
		aspect: { value: 1.62963860711898 },
		ignoreShapeAspect: { value: true },
		shapePosition: { value: { x: 0, y: 0 } },
		shapeScale: { value: { x: 0.5, y: 0.5 } },
		shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
		shapeRadius: { value: 0, range: [0, 2] },
		currentScroll: { value: 0 },
		scrollLerp: { value: 0.07 },
		gooey: { value: true },
		infiniteGooey: { value: true },
		growSize: { value: 2.6, range: [1, 15] },
		durationOut: { value: 0.44, range: [0.1, 5] },
		durationIn: { value: 1.52, range: [0.1, 5] },
		displaceAmount: { value: 0.5 },
		masker: { value: false },
		maskVal: { value: 1, range: [1, 5] },
		scrollType: { value: 0 },
		geoVertex: { range: [1, 64], value: 1 },
		noEffectGooey: { value: false },
		onMouse: { value: 1 },
		noise_speed: { value: 0.46, range: [0, 10] },
		metaball: { value: 0.2, range: [0, 2], _gsap: { id: 33 } },
		discard_threshold: { value: 0.5, range: [0, 1] },
		antialias_threshold: { value: 0, range: [0, 0.1] },
		noise_height: { value: 0.52, range: [0, 2] },
		noise_scale: { value: 9.16, range: [0, 100] },
	},
	gooey: true,
});

// circle button
var circle = document.querySelector("#circlevisit");
var emphemlimg = document.querySelector("#ephemimg img");
var susimg = document.querySelector("#suscontain img");
var circleVisit = document.querySelector("#circlevisit");
var riArrowLine = document.querySelector("#ri-arrow-down-line");

function handleMouseOver(element, color, arrowColor) {
	gsap.to(circleVisit, {
		backgroundColor: color,
		duration: 0.1,
	});

	gsap.to(riArrowLine, {
		color: arrowColor,
		duration: 0.1,
	});
}

function handleMouseOut() {
	gsap.to(circleVisit, {
		backgroundColor: "initial",
		duration: 0.1,
	});

	gsap.to(riArrowLine, {
		color: "initial",
		duration: 0.1,
	});
}

emphemlimg.addEventListener("mouseover", () => {
	handleMouseOver(emphemlimg, "#FFB496", "white");
});

emphemlimg.addEventListener("mouseout", handleMouseOut);

susimg.addEventListener("mouseover", () => {
	handleMouseOver(susimg, "pink", "white");
});

susimg.addEventListener("mouseout", handleMouseOut);

circle.addEventListener("mouseover", () => {
	handleMouseOver(circle, "skyblue", "white");
});

circle.addEventListener("mouseout", handleMouseOut);

// future video
var ftext = document.querySelector("#future #ftext");

document.querySelector("#future button").addEventListener("mouseover", () => {
	gsap.to("#future video", {
		opacity: 1,
		duration: 1,
		ease: "power4.out",
	});
	ftext.style.color = "white";
});

document.querySelector("#future button").addEventListener("mouseleave", () => {
	gsap.to("#future video", {
		opacity: 0,
		duration: 1,
		ease: "power4.out",
	});
	ftext.style.color = "black";
});

function checkScreenSize() {
	var warningMessage = document.getElementById("warning-message");
	var backdrop = document.getElementById("backdrop");

	if (window.innerWidth <= 768) {
		// Show the warning and backdrop
		warningMessage.style.display = "block";
		backdrop.style.display = "block";
	} else {
		// Hide the warning and backdrop
		warningMessage.style.display = "none";
		backdrop.style.display = "none";
	}
}

// Initial check when the page loads
checkScreenSize();

// Check screen size whenever the window is resized
window.addEventListener("resize", checkScreenSize);
