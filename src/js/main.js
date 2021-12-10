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

const headerProfileArrow = document.getElementById('profile-arrow');
const headerProfileDrop = document.getElementById('profile-menu');
if(headerProfileArrow){
	headerProfileArrow.addEventListener('click', function(){
		if(this.classList.contains('active')){
			this.classList.remove('active');
			headerProfileDrop.classList.remove('active');

		}else{
			this.classList.add('active');
			headerProfileDrop.classList.add('active');
		}
	});
}
// vertical-scroll
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
	slidesPerView: 1.4,        
	spaceBetween: 24,
	speed:800,
	pagination: {
		el: ".swiper-pagination-cta",
		clickable: true,
	},
	breakpoints: {
		
		575: {
			slidesPerView: 2,
			spaceBetween: 24,
		}
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
		speed:800,
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
		slidesPerView: 'auto', 
		spaceBetween: 24,
		loop: true,
		speed:800,
		pagination: {
			el: ".swiper-pagination-team",
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
			}
			
		}
	});
	swips.addSwiper(".swiper-our-experts", "min-width:1024px", {
		slidesPerView: .8, 
		spaceBetween: 24,
		loop: true,
		speed:800,
		pagination: {
			el: ".swiper-pagination-experts",
			clickable: true,
		},
		breakpoints: {
			
			768: {
				slidesPerView: 1.5,
				spaceBetween: 24,
			}
			
		}
	});

  swips.init();
})();

	const overlayBg = document.querySelector('#overlay');

	const formOpenButton = document.querySelectorAll('[data-btn]');
	const formsArray = document.querySelectorAll('[data-modal]');
	const formCloseBtn = document.querySelectorAll('[data-close]');

	// ===== Показать блок с формой  ======
	for(let item of formOpenButton){
		item.addEventListener('click', function(e){
			
			e.preventDefault.default;
			let thisDataValue = item.dataset.btn;
			
			for(let i=0; i<formsArray.length; i++){
				
				let formDataValue = formsArray[i].dataset.modal;
				console.log(formDataValue);
				if(thisDataValue == formDataValue){
					formsArray[i].classList.add('visible');
					overlayBg.classList.add('active');
				}
			}

		});
	}

	// =====Закрыть форму по клику на крестик ======
	for(let item of formCloseBtn){
		item.addEventListener('click', function(){
			item.closest('[data-modal]').classList.remove('visible');
			overlayBg.classList.remove('active');
		});
	}

	// ===== Закрыть форму по клику на фон-затемнение ======
	overlayBg.addEventListener('click', function(){
		for(let item of formsArray){
			item.classList.remove('visible');
			this.classList.remove('active');
		}
	});
