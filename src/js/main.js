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
