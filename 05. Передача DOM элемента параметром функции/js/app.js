'use strict'

// Передача DOM элемента параметром функции
/* №1⊗jsPmFDPEAP
Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента. */
/* function appendText(elem, text){
	elem.textContent += text;
}

let elem1 = document.querySelector('#elem1');
appendText(elem1, ' text1');
let elem2 = document.querySelector('#elem2');
appendText(elem2, ' text2'); */

/* №2⊗jsPmFDPEAP
Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче. */
/* let elems = document.querySelectorAll('p')
function appendText(elem, text){
	for (let elem of elems){
		elem.textContent += text;	
	}	
}

appendText(elems, '!'); */
/* №3⊗jsPmFDPEAP
Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута. */
/* function setValue(input, text){
	input.value = text;
}

let inputer = document.querySelector('input');
setValue(inputer, '123'); */