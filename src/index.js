import './scss/index.scss';
import './js/modal.js';
import './js/mask.js';
import './js/validation.js';
import './js/card.js';
import './js/select.js';

const filterClearBtn = document.querySelector('.filters__clear');
const filterSelectValue = document.querySelectorAll('.filters__select .select__current');
const filterPrice = document.querySelectorAll('.filters__price input');
const valueArray = [];

filterSelectValue.forEach(function(elem) {
	valueArray.push(elem.innerHTML);
})

filterClearBtn.addEventListener('click', function() {
	for (let i = 0; i < filterSelectValue.length; i++) {
		filterSelectValue[i].innerHTML = valueArray[i];
		filterSelectValue[i].classList.remove('changed');
	}
	filterPrice.forEach(function(elem) {
		elem.value = '';
	})
})



