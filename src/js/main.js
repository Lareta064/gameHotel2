// ========= КАСТОМНЫЙ СЕЛЕКТ =============
	const customSelect = document.querySelector('.custom-select');
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
const headerProfileArrow = document.getElementById('profile-arrow');
const headerProfileDrop = document.getElementById('profile-menu');
headerProfileArrow.addEventListener('click', function(){
	if(this.classList.contains('active')){
		this.classList.remove('active');
		headerProfileDrop.classList.remove('active');

	}else{
		this.classList.add('active');
		headerProfileDrop.classList.add('active');
	}
});
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
