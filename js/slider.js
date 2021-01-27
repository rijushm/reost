// slider background hover effect
		const el = document.querySelector(".carousel .s1");
		el.onmousemove = (e) => {
		  el.style.backgroundPositionX = e.offsetX * -1 / 15 + "px";
		  el.style.backgroundPositionY = e.offsetY * -1 / 15 + "px";
		};
		const el2 = document.querySelector(".carousel .s2");
		el2.onmousemove = (e) => {
		  el2.style.backgroundPositionX = e.offsetX * -1 / 15 + "px";
		  el2.style.backgroundPositionY = e.offsetY * -1 / 15 + "px";
		};
		const el3 = document.querySelector(".carousel .s3");
		el3.onmousemove = (e) => {
		  el3.style.backgroundPositionX = e.offsetX * -1 / 15 + "px";
		  el3.style.backgroundPositionY = e.offsetY * -1 / 15 + "px";
		};
		const el4 = document.querySelector(".carousel .slides.s4");
		el4.onmousemove = (e) => {
		  el4.style.backgroundPositionX = e.offsetX * -1 / 15 + "px";
		  el4.style.backgroundPositionY = e.offsetY * -1 / 15 + "px";
		};
		// const el5 = document.querySelector(".carousel .s5");
		// el5.onmousemove = (e) => {
		//   el5.style.backgroundPositionX = e.offsetX * -1 / 15 + "px";
		//   el5.style.backgroundPositionY = e.offsetY * -1 / 15 + "px";
		// };
		// slider background hover effect