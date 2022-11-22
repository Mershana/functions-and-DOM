'use strict'

// Функция для создания HTML таблиц на JavaScript
/* №1⊗jsPmFDTCF
Вот заготовка описанной функции:
function createTable(rows, cols, parent) {
	let table = document.createElement('table');
	
	// тут создадим таблицу с rows рядами и cols колонками
	for () {
		for () {
			
		}
	}
	
	parent.appendChild(table);
}
Допишите код представленной выше заготовки функции. Потестируйте работу готовой функци */
function createTable(rows, cols, parent) {
	let table = document.createElement('table');
	
	// тут создадим таблицу с rows рядами и cols колонками
	for (let i = 0; i < rows; i++) {
		let tr = document.createElement('tr');
		for (let  j = 0; j < cols; j++) {
			let td = document.createElement('td');
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	
	parent.appendChild(table);
}

let div1 = document.querySelector('#elem1');
createTable(3, 4, div1);

let div2 = document.querySelector('#elem2');
createTable(5, 6, div2);