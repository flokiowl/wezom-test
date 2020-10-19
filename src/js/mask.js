function setCursorPosition(pos, elem) {
	elem.focus();
	if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
	else if (elem.createTextRange) {
		const range = elem.createTextRange();
		range.collapse(true);
		range.moveEnd('character', pos);
		range.moveStart('character', pos);
		range.select();
	}
};

function mask(event) {
	let mask = '+38(0__)___-__-__',
		matrix = mask,
		i = 0,
		def = matrix.replace(/\D/g, ''),
		val = this.value.replace(/\D/g, '');

  	if (def.length >= val.length) val = def;
	
	matrix = matrix.replace(/[_\d]/g, function() {
		return val.charAt(i++) || '_'
	});
	this.value = matrix;
	i = matrix.lastIndexOf(val.substr(-1));
	i < matrix.length && matrix != mask ? i++ : i = matrix.indexOf('_');

	if (event.type == 'blur') {
		if (this.value == mask) this.value = ''
	} else setCursorPosition(i, this)
}

const input = document.querySelector('#phone');
input.addEventListener('input', mask, false);
input.addEventListener('focus', mask, false);
input.addEventListener('blur', mask, false);
