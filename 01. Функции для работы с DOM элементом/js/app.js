'use strict'

// Функции для работы с DOM элементом на JavaScript
/* №1⊗jsPmFDDEF
Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор. */
/* function setText(selector, text) {
	selector.textContent = text;
}

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

setText(elem1, 'text1');
setText(elem2, 'text2');
 */

/* №2⊗jsPmFDDEF
Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение. */
/* function setAttr(selector, name, value){
	let elem = document.querySelector(selector);
	elem.setAttribute(name, value);
	return elem;
}

console.log(setAttr("a:nth-child(1)", "id", "elem-One"))
console.log(setAttr("a:nth-child(2)", "id", "elem-Two"))
 */