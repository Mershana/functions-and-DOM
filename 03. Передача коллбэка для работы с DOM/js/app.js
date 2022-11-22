'use strict'

// Передача коллбэка для работы с DOM на JavaScript
/* Пусть у нас есть некоторая группа DOM элементов:

<p class="elem">1</p>
<p class="elem">2</p>
<p class="elem">3</p>
<p class="elem">4</p>
<p class="elem">5</p>
Давайте сделаем функцию forEach, которая первым параметром будет принимать селектор группы элементов, а вторым параметром - функцию-коллбэк, которая применится по очереди к каждому из найденных элементов:

forEach('.elem', function() {
	// функция применится к каждому элементу
});
Пусть элементы, попавшие под селектор, по очереди попадают в первый параметр коллбэка:

forEach('.elem', function(elem) {
	console.log(elem); // выведет по очереди найденные элементы
});
Давайте с помощью нашей функции найдем все элементы с классом elem и для каждого найденного элемента применим коллбэк, который возведет в квадрат текст каждого элемента:

forEach('.elem', function(elem) {
	elem.textContent = elem.textContent ** 2;
});
Давайте теперь напишем реализацию задуманной нами функции forEach:

function forEach(selector, func) {
	let elems = document.querySelectorAll(selector);
	
	for (let elem of elems) {
		func(elem);
	}
} */

/* №1⊗jsPmFDCP
Даны абзацы. С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак. */
/* forEach('p', function(elem){
	elem.textContent += ' !'
})

function forEach(selector, func){
	let elems = document.querySelectorAll(selector);

	for (let elem of elems){
		func(elem)
	}
} */