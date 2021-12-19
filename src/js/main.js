document.addEventListener("DOMContentLoaded", function (){
	/*bottom fix-menu mob version*/
	const fixMobMenu = document.querySelector('.fix-mobile-menu');
	if(fixMobMenu){
		const openFixMenu = fixMobMenu.querySelector('#open-fixMenu');
		const closeFixMenu = fixMobMenu.querySelector('#close-fixMenu');
		const listFixMenu = fixMobMenu.querySelector('.fix-menu-list');
		openFixMenu.addEventListener('click', function(){
			this.classList.remove('active');
			 closeFixMenu.classList.add('active');
			 listFixMenu.classList.add('active');
		});
		closeFixMenu.addEventListener('click', function(){
			this.classList.remove('active');
			openFixMenu.classList.add('active');
			 listFixMenu.classList.remove('active');
		});


	}
	/* анимация свг-диаграммы-круг */
	const target = document.querySelectorAll('.board-chart .chart-path');
	
	if(target.length > 0){
		const target1 = [];
		for(let i = 0; i<12; i++){
			const querySel = `[data-path="${i+1}"]`;
			target1.push(document.querySelector(querySel));
		}
		
		let Visible = function (target) {
			// Все позиции элемента
			let targetPosition = {
					top: window.pageYOffset + target.getBoundingClientRect().top,
					left: window.pageXOffset + target.getBoundingClientRect().left,
					right: window.pageXOffset + target.getBoundingClientRect().right,
					bottom: window.pageYOffset + target.getBoundingClientRect().bottom
				},
				// Получаем позиции окна
				windowPosition = {
					top: window.pageYOffset,
					left: window.pageXOffset,
					right: window.pageXOffset + document.documentElement.clientWidth,
					bottom: window.pageYOffset + document.documentElement.clientHeight
				};

			if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
				targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
				targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
				targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
				// Если элемент полностью видно, то запускаем следующий код
				target.style.opacity=1;
			}
		};

		// Запускаем функцию при прокрутке страницы
		window.addEventListener('scroll', function () {
			let delay = 0;
			for (let item of target1) {
				setTimeout(function () {
					Visible(item);
				}, 50 + delay)
				delay += 150;
			}
		});

		// А также запустим функцию сразу. А то вдруг, элемент изначально видно
		let delay = 0;
		for (let item of target1) {
		
			setTimeout(function () {
				Visible(item);
			}, 50 + delay)
			delay += 200;
		}
	}
	
	//========== ПАРАЛЛАКС ДВИЖЕНИЯ ЗА МЫШКОЙ=========
	let headerSection = document.querySelector('.investor-banner')
	let bg1 = document.querySelector('.parallax-item1');
	let bg2 = document.querySelector('.parallax-item2');
	let bg3 = document.querySelector('.parallax-item3');
	if(bg1 && bg2 && bg3){
		window.addEventListener('mousemove', function (e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;
			
			bg1.style.transform = 'translate(+' + x * 20 + 'px, -' + y * 35 + 'px)';
			bg2.style.transform = 'translate(-' + y * 15 + 'px, -' + x * 15 + 'px)';
			bg3.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 20 + 'px)';
		
	
		});
	}
	//===============perspective-effect ==============
	$(function(){
			const card = $('.persone-card');
			
			card.on('mousemove', function (e) {
				
				var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
				var y = e.clientY - $(this).offset().top + $(window).scrollTop();
				
				var rY = map(x, 0, $(this).width(), -17, 17);
				var rX = map(y, 0, $(this).height(), -17, 17);
			
				$(this).css("transform", "perspective(1200px)  rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg) ");
			});
			
			card.on('mouseenter', function () {
				$(this).css({
					transition: "all " + 0.05 + "s" + " linear",
				});
			});
		
			card.on('mouseleave', function () {
				$(this).css({
					transition: "all " + 0.2 + "s" + " linear",
				});
		
				$(this).css("transform", "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)");
			});
				
			function map(x, in_min, in_max, out_min, out_max)
			{
				return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
			}
		
	});

	// ========= КАСТОМНЫЙ СЕЛЕКТ =============
	const customSelect = document.querySelector('.custom-select');
	if(customSelect){	
		customSelect.addEventListener('click', function(e){
			const thisList = customSelect.querySelector('.select-list');
			const thisInput = customSelect.querySelector('input');
			const thisListItem = customSelect.querySelectorAll('li');

			if(e.target.tagName == 'INPUT'){

				if(thisList.classList.contains('visible')){
					thisList.style.maxHeight = 0 + "px";
					thisList.classList.remove('visible');
					
				}else{
					thisList.classList.add('visible');
					thisList.style.maxHeight = thisList.scrollHeight + "px";
				}				
			}

			if(e.target.tagName == 'LI'){
				for(let item of thisListItem){
					item.classList.remove('current');
				}
				const curItemValue = e.target.dataset.role;
				thisInput.value = curItemValue;
				e.target.classList.add('current');
				thisList.style.maxHeight = 0 + "px";
				thisList.classList.remove('visible');
			}
		});
	}

	// ========vertical-scroll=============
	function vertSlider(textBlockClassName, imageBlockClassName) {

	// define elements
	const txtDiv = document.querySelectorAll(`.${textBlockClassName}`);
	const imgDiv = document.querySelectorAll(`.${imageBlockClassName}`);

	// setup scroll event
	window.onscroll = () => {
		// init index
		let ind = imgDiv.length;

		// Check what txt element is visible
		txtDiv.forEach(elem => {
		if (elem.getBoundingClientRect().y > 0) ind--;
		});

		// Setup upper bound for index
		ind = Math.min(ind, imgDiv.length - 1);

		// Hide images
		imgDiv.forEach(elem => {
		elem.style.opacity = 0;
		});

		// Show img, based on txt element visible
		imgDiv[ind].style.opacity = 1;

	};
	}
	if (document.querySelector('.how-bay')) {
	vertSlider('vertical-slider__text-item','vertical-slider__img-item' );
	}
	/*=========== SWIPER CLASS ========== */
	(function () {
	// Activate swipers
	const swips = new Swips();
		swips.addSwiper(".investor-banner__benefits", "", {
			slidesPerView: 1.2, 
			spaceBetween: 24,
			loop: true,
			speed:800,
			pagination: {
				el: ".swiper-pagination-investBenef",
				clickable: true,
			},
			breakpoints: {
				
				425: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				}
				
			}
		});
		swips.addSwiper(".swiper-investor-cta", "", {
			loop: true,
			slidesPerView: 1.2,
			spaceBetween: 24,
			speed:800,
			pagination: {
				el: ".swiper-pagination-cta",
				clickable: true,
			}
		});
		
		swips.addSwiper(".game-news-cards", "min-width:1024px", {
			loop: true,
			slidesPerView: 1.2, 
			spaceBetween: 24,
			speed:800,
			pagination: {
				el: ".swiper-pagination-news",
				clickable: true,
			},
			breakpoints: {
				574: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 24,
				},
			}
		});
		//===news slider one game page =====
		swips.addSwiper(".game-news-cards--1365", "min-width:1365px", {
			loop: true,
			slidesPerView: 1.2, 
			spaceBetween: 24,
			speed:800,
			pagination: {
				el: ".swiper-pagination-news",
				clickable: true,
			},
			breakpoints: {
				574: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 1.7,
					spaceBetween: 24,
				},
				1024: {
					slidesPerView: 2.3,
					spaceBetween: 24,
				},
				1200: {
					slidesPerView: 2.8,
					spaceBetween: 24,
				},
			}
		});
		swips.addSwiper(".road-map-swiper", "min-width:1024px", {
			loop: true,
			slidesPerView: 1.2, 
			spaceBetween: 24,
			speed:800,
			pagination: {
				el: ".swiper-pagination-roadMap",
				clickable: true,
			},
			breakpoints: {
				574: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
			}
		});
		swips.addSwiper(".info-board-swiper", "min-width:1024px", {
			slidesPerView: 1, 
			spaceBetween: 24,
			loop: true,
			speed:1500,
			
			pagination: {
				el: ".swiper-pagination-info",
				clickable: true,
			},
			
			breakpoints: {
				574: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
			}
		});
		swips.addSwiper(".swiper-team", "min-width:1024px", {
			slidesPerView: 1.2, 
			spaceBetween: 16,
			loop: true,
			speed:1500,
			
			pagination: {
				el: ".swiper-pagination-team",
				clickable: true,
			},
			breakpoints: {
				574: {
					slidesPerView: 1.8,
					spaceBetween: 24,
				},
				768: {
					slidesPerView: 2.2,
					spaceBetween: 24,
				}
				
			}
		});
		swips.addSwiper(".swiper-our-experts", "min-width:1024px", {
			slidesPerView: 1.2, 
			// spaceBetween: 24,
			loop: true,
			speed:800,
			pagination: {
				el: ".swiper-pagination-experts",
				clickable: true,
			},
			breakpoints: {
				
				575: {
					slidesPerView: 1.6,
					spaceBetween: 24,
				}
				
			}
		});
		swips.addSwiper(".hero-cards-swiper", "min-width:1024px", {
			slidesPerView: 1.3,
			spaceBetween: 24,
			loop: true,
			speed:800,
			pagination: {
				el: ".hero-card-pagination",
				clickable: true,
			},
			breakpoints: {

				575: {
					slidesPerView: 2.2,
					spaceBetween: 24,
				},
				768: {
						slidesPerView: 3,
						spaceBetween: 24,
					}

			}
		});
		 /*  карточки игровые карты на стр about game*/
		swips.addSwiper(".game-cards-swiper", "min-width:1024px", {
			slidesPerView: 1.2,
			grid: {
				rows: 2,
			},
			spaceBetween: 24,
			pagination: {
			el: ".game-cards-swiper-pagination",
			clickable: true,
			},
			breakpoints: {

				575: {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				768: {
						slidesPerView: 2.5,
						spaceBetween: 24,
					}

			}
		});
		swips.addSwiper(".games-cards-large", "min-width:1024px", {
			slidesPerView: 1.2,
			spaceBetween: 24,
			loop: true,
			speed:800,
			pagination: {
				el: ".cards-large-pagination",
				clickable: true,
			},
			breakpoints: {

				575: {
					slidesPerView: 1.8,
					spaceBetween: 24,
				},
				600: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
				768:{
					slidesPerView: 2,
					spaceBetween: 16,
				},
				800:{
					slidesPerView: 2.5,
					spaceBetween: 16,
				}

			}
		});
		//====farm-page-header====
		swips.addSwiper(".farm-info-list.swiper", "min-width:768px", {
			slidesPerView: 1.2,
			spaceBetween: 48,
			loop: true,
			speed:800,
			pagination: {
				el: ".farm-info-pagination",
				clickable: true,
			},
			breakpoints: {

				575: {
					slidesPerView: 1.8,
					spaceBetween: 48,
				},
				600: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
				768:{
					slidesPerView: 2,
					spaceBetween: 48,
				}

			}
		});
		

	swips.init();
	})();
	 /*  карточки location на стр about game*/
	let locCradsSwiper = new Swiper(".location-cards-swiper", {
       slidesPerView: 1.2,
        navigation: {
          nextEl: ".locSwiper-button-next",
          prevEl: ".locSwiper-button-prev",
        },
		speed:800,

		loop: true,
		breakpoints: {
			575: {
				slidesPerView: 2.2,
				spaceBetween: 24,
			},
			768: {
					slidesPerView: 2.5,
					spaceBetween: 32,
				}
				,
			1024: {
					slidesPerView: 3,
					spaceBetween: 32,
				}
		}
      });
	  /*  карточки новостей на стр about game*/
	  let gameNewsSwiper = new Swiper(".gn-cards-full", {
		//   observer: true,
        //     observeParents: true,
       slidesPerView: 1,
	   spaceBetween: 16,
        navigation: {
          nextEl: ".game-news-next",
          prevEl: ".game-news-prev",
        },
		speed:800,

		loop: true,
		breakpoints: {
			575: {
				slidesPerView: 1.5,
				spaceBetween: 24,
			},
			768: {
					slidesPerView: 1.8,
					spaceBetween: 24,
				}
				,
			1024: {
					slidesPerView: 2,
					spaceBetween: 32,
				},
			1200: {
					slidesPerView: 2.2,
					spaceBetween: 24,
				}
		}
      });
	  
	  let bannersSlider = new Swiper(".header-slider-swiper", {
		
       slidesPerView: 1,
	   spaceBetween: 72,
	   centeredMode: true,
	   speed:800,
	   navigation: {
          nextEl: ".header-slider-next",
          prevEl: ".header-slider-prev",
        },
		// loop: true,
		breakpoints: {
			
			768: {
					slidesPerView: 1.1,
					spaceBetween: 32,
				},
			1200: {
					slidesPerView: 1.3,
					spaceBetween: 48,
				},
			1440: {
					slidesPerView: 1.4,
					spaceBetween: 48,
				}
			}
      });
	//   gameNewsSwiper.update();
	/*===========MODAL FORM==========*/
	const overlayBg = document.querySelector('#overlay');
	const bodyEl = document.body;

	const formOpenButton = document.querySelectorAll('[data-btn]');
	const formsArray = document.querySelectorAll('[data-modal]');
	const formCloseBtn = document.querySelectorAll('[data-close]');

	// ===== Показать модальное окно регистрации  ======
	for(let item of formOpenButton){
		item.addEventListener('click', function(e){
			
			e.preventDefault.default;
			let thisDataValue = item.dataset.btn;
			
			for(let i=0; i<formsArray.length; i++){
				
				let formDataValue = formsArray[i].dataset.modal;
				if(thisDataValue == formDataValue){
					formsArray[i].classList.add('visible');
					overlayBg.classList.add('active');
					bodyEl.classList.add('noscroll');
				}
			}

		});
	}

	// =====Закрыть модалку по клику на крестик ======
	for(let item of formCloseBtn){
		item.addEventListener('click', function(){
			item.closest('[data-modal]').classList.remove('visible');
			overlayBg.classList.remove('active');
			bodyEl.classList.remove('noscroll');
		});
	}

	// ===== Закрыть модалку  по клику на фон-затемнение ======
	overlayBg.addEventListener('click', function(){
		for(let item of formsArray){
			item.classList.remove('visible');
			this.classList.remove('active');
			bodyEl.classList.remove('noscroll');
		}
	});

	/* ========= MASK FOR INPUT PHONE =======*/
	
	let phoneInputs = document.getElementsByClassName('phone');
	for(let i = 0; i<phoneInputs.length; i++){
		new IMask(phoneInputs[i], {
			mask: '+7(000)000-00-00',
			lazy: false
		});
	}
	/*================about game жалюзи на большой картинке =============*/
	const imgBlind = document.querySelector('.blind-img-block');
	if(imgBlind){
		
		let Visible = function (target) {
			// Все позиции элемента
			let targetPosition = {
					top: window.pageYOffset + target.getBoundingClientRect().top,
					left: window.pageXOffset + target.getBoundingClientRect().left,
					right: window.pageXOffset + target.getBoundingClientRect().right,
					bottom: window.pageYOffset + target.getBoundingClientRect().bottom
				},
				// Получаем позиции окна
				windowPosition = {
					top: window.pageYOffset,
					left: window.pageXOffset,
					right: window.pageXOffset + document.documentElement.clientWidth,
					bottom: window.pageYOffset + document.documentElement.clientHeight
				};

			if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
				targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
				targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
				targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
				// Если элемент полностью видно, то запускаем следующий код
				setTimeout(function(){
					target.classList.add('blind-img-block--hide')
				}, 500)
				
			}
		};

		// Запускаем функцию при прокрутке страницы
		window.addEventListener('scroll', function () {
			Visible(imgBlind);
		});

		// А также запустим функцию сразу. А то вдруг, элемент изначально видно
		Visible(imgBlind);
	}
});