"use strict";

// Передача группы DOM элементов параметрами функций
/* №1⊗jsPmFDPGAP
Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов. */
/* function appendText(elems, text){
	for (let elem of elems){
		elem.textContent += text;
	}
}
let elems = document.querySelectorAll('.elem');
appendText(elems, ' text'); */

/* №2⊗jsPmFDPGAP
Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul. */
/* let ul = document.getElementById("list");

function appendElem(elems, text) {
  let li = document.createElement('li');
  li.textContent = text;
  elems.appendChild(li);
}

(appendElem(ul, "text")); */

// №3⊗jsPmFDPGAP
// Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.
let ul = document.getElementById("list");

function appendElem(ul, text, arr) {
	for (let elem of arr){
		let li = document.createElement('li');
		li.textContent = text + elem;
		ul.appendChild(li);
	}
}
appendElem(ul, "number ", [1, 2, 3, 4, 5]);

