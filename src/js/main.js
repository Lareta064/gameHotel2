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
	/*========кнопка ВВерх====== */
	$("#backTop").hide();
	$(function(){$(window).scroll(function(){200<$(this).scrollTop()?$("#backTop").fadeIn():$("#backTop").fadeOut()}),$("#backTop").click(function(){return $("body,html").animate({scrollTop:0},600),!1})});
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
	const customSelect = document.querySelectorAll('.custom-select');
	if(customSelect){	
		
	for(let item of customSelect){
		item.addEventListener('click', function(e){
			const thisList = item.querySelector('.select-list');
			const thisInput = item.querySelector('input');
			const thisListItem = item.querySelectorAll('li');

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
			slidesPerView: 1, 
			spaceBetween: 16,
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
			slidesPerView: 1.1, 
			spaceBetween: 24,
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
		 /*  карточки Героев на стр одной игры*/
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
		 /*  карточки игровые карты на стр одной игры*/
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
		/*====стр Одной игры раздел Похожие */
		swips.addSwiper(".similareCards-swiper", "min-width:1024px", {
			slidesPerView: 1.1,
			spaceBetween: 20,
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
		swips.addSwiper(".profit-cards-wrapper", "min-width:1280px", {
			slidesPerView: 1.1,
			spaceBetween: 24,
			loop: true,
			speed:800,
			pagination: {
				el: ".profit-cards-pagination",
				clickable: true,
			},
			breakpoints: {

				424: {
					slidesPerView: 1.5,
					spaceBetween: 24,
				},
				600: {
						slidesPerView: 2.2,
						spaceBetween: 24,
					},
				768:{
					slidesPerView: 2.7,
					spaceBetween: 32,
				},
				991:{
					slidesPerView: 3.5,
					spaceBetween: 32,
				},
				1200:{
					slidesPerView: 3.8,
					spaceBetween: 32,
				}

			}
		});

		swips.addSwiper(".task-board", "min-width:1920px",  {
		
		slidesPerView: 1.1,
		 slidesPerColumn: 1,
		spaceBetween: 0,
		
		speed:800,
		navigation: {
			nextEl: ".task-board-next",
			prevEl: ".task-board-prev",
			},
			// loop: true,
			breakpoints: {
				
				575: {
						slidesPerView: 1.3,
						spaceBetween: 24,
					},
				650: {
						slidesPerView: 1.5,
						spaceBetween: 24,
					},

				768: {
						slidesPerView: 1.9,
						spaceBetween: 32,
					},
				850: {
						slidesPerView: 2.1,
						spaceBetween: 24,
					},
				1024: {
						slidesPerView: 2.5,
						spaceBetween: 24,
					},
				1200: {
						slidesPerView: 2.8,
						spaceBetween: 0,
					},
				1364: {
						slidesPerView: 3.2,
						spaceBetween: 0,
					},
				1440: {
						slidesPerView: 3.3,
						spaceBetween: 0,
					},
				1600: {
						slidesPerView: 3.8,
						spaceBetween: 0,
					}
				}
		});
		/* стр Игры - Популярные в декабре*/
		swips.addSwiper(".popular-games-block", "min-width:1024px", {
			slidesPerView: 1.1,
			spaceBetween: 20,
			loop: true,
			speed:800,
			pagination: {
				el: ".populareGames-pagination",
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
		/* стр Игры - категория Пошаговые*/
		swips.addSwiper(".swiper-cardStep", "min-width:1024px", {
			slidesPerView: 1.1,
			spaceBetween: 20,
			loop: true,
			speed:800,
			pagination: {
				el: ".cardStep-pagination",
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
		/* стр Игры - категория Карточные*/
		swips.addSwiper(".swiper-cardGames", "min-width:1024px", {
			slidesPerView: 1.1,
			spaceBetween: 20,
			loop: true,
			speed:800,
			pagination: {
				el: ".cardGames-pagination",
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
		/* стр Игры - категория Ролевые*/
		swips.addSwiper(".swiper-roleGames", "min-width:1024px", {
			slidesPerView: 1.1,
			spaceBetween: 20,
			loop: true,
			speed:800,
			pagination: {
				el: ".roleGames-pagination",
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
		/* стр Игры - категория Action*/
		swips.addSwiper(".swiper-actionGames", "min-width:1024px", {
			slidesPerView: 1.1,
			spaceBetween: 20,
			loop: true,
			speed:800,
			pagination: {
				el: ".actionGames-pagination",
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
		/*====game categories */
		swips.addSwiper(".game-categories-swiper", "min-width:1024px", {
			slidesPerView: 1,
			spaceBetween: 16,
			loop: true,
			speed:800,
			pagination: {
				el: ".gameCategories-pagination",
				clickable: true,
			},
			breakpoints: {

				575: {
					slidesPerView: 1.4,
					spaceBetween: 24,
				},
				600: {
						slidesPerView: 1.6,
						spaceBetween: 24,
					},
				768:{
					slidesPerView: 2,
					spaceBetween: 16,
				},
				800:{
					slidesPerView: 2.1,
					spaceBetween: 16,
				}

			}
		});

	swips.init();
	})();
	 /*  карточки location на стр about game*/
	let locCradsSwiper = new Swiper(".location-cards-swiper", {
       slidesPerView: 1.2,
	   spaceBetween: 24,
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
	   spaceBetween: 16,
	   centeredMode: true,
	   loop: true,
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
					loop: false,
				},
			1200: {
					slidesPerView: 1.3,
					spaceBetween: 48,
				},
			1440: {
					slidesPerView: 1.4,
					spaceBetween: 72,
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
	var maskList = $.masksSort($.masksLoad("libs/phoneMask/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
		var maskOpts = {
			inputmask: {
				definitions: {
					'#': {
						validator: "[0-9]",
						cardinality: 1
					}
				},
				//clearIncomplete: true,
				showMaskOnHover: false,
				autoUnmask: true
			},
			match: /[0-9]/,
			replace: '#',
			list: maskList,
			listKey: "mask",
			onMaskChange: function(maskObj, completed) {
				if (completed) {
					var hint = maskObj.name_ru;
					if (maskObj.desc_ru && maskObj.desc_ru != "") {
						hint += " (" + maskObj.desc_ru + ")";
					}
					// $("#descr").html(hint);
				}
				$(this).attr("placeholder", $(this).inputmask("getemptymask"));
			}
		};

	
	jQuery('.phone').each(function(i, item){
		$(item).inputmasks(maskOpts);
	})
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


	/*==================INPUT TYPE="FILE" ========*/
	( function ( document, window, index )
	{
		var inputs = document.querySelectorAll( '.inputfile' );
		Array.prototype.forEach.call( inputs, function( input )
		{
			var label	 = input.nextElementSibling,
				labelVal = label.innerHTML;

			input.addEventListener( 'change', function( e )
			{
				var fileName = '';
				if( this.files && this.files.length > 1 )
					fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
				else
					fileName = e.target.value.split( '\\' ).pop();

				if( fileName ) {

					if ( label.firstChild.nodeType === Node.ELEMENT_NODE ) {
						label.querySelector( 'span' ).innerHTML = fileName;
					} else {
						label.nextElementSibling.innerHTML = fileName;
					}

				}
				else
					label.innerHTML = labelVal;
			});

			// Firefox bug fix
			input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
			input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
		});
	}( document, window, 0 ));

	/*******ВЫБОР ВЫВОДА СРЕДСТВ выпадашка CLAM стр задачи***
	 *  по клику на выпадашку менять класс current  у <li> */
	const customDrop = document.querySelectorAll('.custom-dropdown');
	if(customDrop){
		for(let item of customDrop){
			const customDropField = item.querySelector('.custom-dropdown__field');
			const customDropIcon = item.querySelector('.custom-dropdown__icon');
			const customDropList = item.querySelector('.custom-dropdown__wrapper');
			const customDropListItem = item.querySelectorAll('.custom-dropdown__list-item');

			customDropField.addEventListener('click', function(e){
				console.log(e.target);
				if(this.classList.contains('active')){
					this.classList.remove('active');
					customDropIcon.classList.remove('icon-rotate');
					customDropList.classList.remove('active');
				}else{
					this.classList.add('active');
					customDropIcon.classList.add('icon-rotate');
					customDropList.classList.add('active');
				}			
			});
			for(let item of customDropListItem){
				item.addEventListener('click',()=>{
					for(let i = 0; i < customDropListItem.length; i++){
					customDropListItem[i].classList.remove('current');
				}
				item.classList.add('current');
				});
			}
			
		}
	}
	/*============закрыть large modal  при клике по фону ===========*/
	const largeModal = document.querySelectorAll('.large-modal');
	for(let item of largeModal){
		item.addEventListener('click', (e)=>{
			if(e.target.classList.contains('visible')){
				item.classList.remove('visible')
			}
		})
	}

	/*============video clip play ===========*/
	const videoContent = document.querySelector('#gameVideo');
	if (videoContent) {
		const videoBtn = videoContent.querySelector('.video-play-btn');
		const videoClip = document.querySelector('#gameVideoClip');
		
		videoContent.addEventListener('click', function (e) {
			
			if (videoClip.paused) {
				videoClip.play();
				videoBtn.style.opacity = "0";
				this.classList.add("active");
			} else {
				videoClip.pause();
				videoBtn.style.opacity = "1";
				this.classList.remove("active");
			} 
		});  
	}
	/* ========== анимация чисел стр tasks========*/
	var decimal_places = 2;
	var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
	function animateNum(numItem){
		$(numItem).animateNumber( {
		number: $(numItem).text() * decimal_factor,
		numberStep: function(now, tween) {		 
			var floored_number = Math.floor(now) / decimal_factor,
				target = $(tween.elem);

			if (decimal_places > 0) {
			// force decimal places even if they are 0
			floored_number = floored_number.toFixed(decimal_places);

			// replace '.' separator with ','
			floored_number = floored_number.toString().replace('.', ',');
			}
			target.text( floored_number);
		}
		},
		2000
	);
	}
	$('.animateNum').each(function(i, item){
		animateNum($(item))
	});
	/*========= pageNav стр about-game========*/
	if($('.page-nav')){
		$('.page-nav').each(function(i, item){
				$(item).onePageNav({
				currentClass: 'active',
				changeHash: false,
				scrollSpeed: 750,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing',
			});
		});
	}

	/*========универсализация, когда блок в хоне видимости========*/
	const gameCardsCategory = document.querySelector('#gameCardsCategory');
	if(gameCardsCategory){
		
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
					target.classList.add('active');
				}, 500)
				
			}
		};

		// Запускаем функцию при прокрутке страницы
		window.addEventListener('scroll', function () {
			Visible(gameCardsCategory);
		});

		// А также запустим функцию сразу. А то вдруг, элемент изначально видно
		Visible(gameCardsCategory);
	}

});
