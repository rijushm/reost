

		// scroll top button

		window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
		  if (document.body.scrollTop > 50  || document.documentElement.scrollTop > 50) {
		    document.querySelector(".scroll-top-btn").style.opacity = "0.1";
		    if (document.body.scrollTop > 500  || document.documentElement.scrollTop > 500){
		    	document.querySelector(".scroll-top-btn").style.opacity = "1";
		    }
		  } else {
		     document.querySelector(".scroll-top-btn").style.opacity = "0";
		  }
		};

		// stay with us toggle manu
		document.querySelector(".nav_toggle_link").onclick = () =>{
				document.querySelector("header .accomodation .acc1").style.opacity = "1";
				document.querySelector("header .accomodation .acc2").style.opacity = "1";
				document.querySelector("header .accomodation .acc3").style.opacity = "1";
				document.querySelector("header .accomodation .acc4").style.opacity = "1";
				document.querySelector("header .accomodation").style.pointerEvents = "auto";
		};

		// navigation open close scripts
		var menu_btn = document.querySelector(".nav_btn .menu");
		var menu_close_btn = document.querySelector("header .close_btn");
		var back_img = document.querySelector(".back_img_nav");
		var menu = document.querySelector("header");
		back_img.style.display = "none";
		menu_btn.onclick = () =>{
			menu.style.right = "0px";
			back_img.style.display = "block";
		};
		menu_close_btn.onclick = () =>{
			menu.style.right = "-100%";
			back_img.style.display = "none";
		};
		// navigation open close scripts

		// background image set on hover on nav links
		document.querySelector("header .nav .n1").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/balcony-2.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		}
		document.querySelector("header .nav .n1").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rg9a(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/balcony-2.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		}
		// 
		document.querySelector("header .nav .n2").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/resort_edit.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		}
		document.querySelector("header .nav .n2").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rg9a(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/resort_edit.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		}
		// 
		document.querySelector("header .nav .n3").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/garden-7.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		}
		document.querySelector("header .nav .n3").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rg9a(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/garden-7.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		}
		// 
		document.querySelector("header .nav .n4").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/restaurant-1.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		} 
		document.querySelector("header .nav .n4").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rg9a(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/restaurant-1.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		} 
		// 
		document.querySelector("header .nav .n6").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/reception-s.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		}
		document.querySelector("header .nav .n6").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rg9a(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/reception-s.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		}
		// 
		// sidebar
		document.querySelector("header .accomodation .acc1").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/room-5.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		}
		document.querySelector("header .accomodation .acc1").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.7)), url(img/room-5.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		}
		// 
		document.querySelector("header .accomodation .acc2").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/WDS.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		}
		document.querySelector("header .accomodation .acc2").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.7)), url(img/WDS.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		}
		// 
		document.querySelector("header .accomodation .acc3").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/spa.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		}
		document.querySelector("header .accomodation .acc3").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.7)), url(img/spa.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		}
		// 
		document.querySelector("header .accomodation .acc4").onmousemove = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(img/balcony-2.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "1";
		}
		document.querySelector("header .accomodation .acc4").onmouseout = () =>{
			back_img.style.background = "linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.7)), url(img/balcony-2.jpg)";
			back_img.style.backgroundSize = "cover";
			back_img.style.backgroundPosition = "center";
			back_img.style.backgroundRepeat = "no-repeat";
			back_img.style.opacity = "0";
		}
		// 
		// background image set on hover on nav links

		// swiper main slider top script
	    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      loop:true,
       autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	// swiper main slider top script
	var swiper = new Swiper('.swiper-container-next', {
      spaceBetween: 30,
      loop:true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination-next',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next-next',
        prevEl: '.swiper-button-prev-next',
      },
    });

    var swiper = new Swiper('.left', {
      spaceBetween: 30,
      autoplay: {
        delay: 4200,
        disableOnInteraction: false,
      },
      effect: 'fade'
    });
    var swiper = new Swiper('.right', {
      spaceBetween: 30,
      autoplay: {
        delay: 4400,
        disableOnInteraction: false,
      },
      effect: 'fade'
    });

    // events slider js end

    var swiper = new Swiper('.swiper-container-instagram', {
      slidesPerView: 1,
      loop:true,
      autoplay: {
        delay: 2400,
        disableOnInteraction: false,
      },
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
    });

    // gallery slider here

    var swiper = new Swiper('.swiper-container-gallery-first', {
      effect: 'coverflow',
      grabCursor: true,
      loop:true,
      centeredSlides: true,
      autoplay: {
        delay: 2400,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }
    });

    // customer review page slider

    var swiper = new Swiper('.swiper-container-customer-review', {
    	 slidesPerView: 1,
      loop:true,
      autoplay: {
        delay: 2400,
        disableOnInteraction: false,
      },
      spaceBetween: 10,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      }
    });

	// scroll out js
		ScrollOut({
	        targets: "a,.bar,h2,h3,h4,p,img,video,.left-col,.right-col,.feature,.swiper-container-next,.center,div"
	      });