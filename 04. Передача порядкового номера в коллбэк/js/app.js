'use strict'

// Передача порядкового номера в коллбэк на JavaScript
/* Давайте сделаем так, чтобы, если в нашей функции-коллбэке написан второй параметр, в него пусть попадает порядковый номер элемента в найденном наборе элементов:

forEach('.elem', function(elem, index) {
	console.log(elem);  // выведет элемент
	console.log(index); // выведет порядковый номер элемента
});
С помощью этого параметра мы можем, к примеру, добавить в конец каждому элементу его порядковый номер:

forEach('.elem', function(elem, index) {
	elem.textContent = elem.textContent + index;
});
Давайте переделаем код нашей функции forEach для осуществления описанного:

function forEach(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let i = 0; i < elems.length; i++) {
		func(elems[i], i);
	}
} */


/* №1⊗jsPmFDCSNP
Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер. */
/* forEach('p', function(elem, index){
	elem.textContent = elem.textContent + index
})

function forEach(selector, func){
	let elems = document.querySelectorAll(selector);

	for (let i = 0; i < elems.length; i++){
		func(elems[i], i)
	}
} */


