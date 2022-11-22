'use strict'

// Функции для работы с группой DOM элементов
/* №1⊗jsPmFDEGF
Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов. */

function appendText(selector, text){
	let elems = document.querySelectorAll(selector);

	for (let elem of elems){
		elem.textContent += ' ' + text;
	}
}

appendText('.elem', 'ссылка');
