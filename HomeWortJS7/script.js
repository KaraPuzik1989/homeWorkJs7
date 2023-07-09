/*Задание 1
Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
Выведите в консоль строку:
На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
(необходимые значения добавьте с помощью BOM)*/

/* console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`);

// navigator.platform устарело,не нашел чем заменить.



/*Задание 2
В файле html есть разметка (добавьте ее в свой файл html):
<ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul>
2.1. Вывести в консоль каждое из имен (содержимое каждого li).
2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)*/


/* const li = document.querySelectorAll("li");
li.forEach(item => console.log(item.textContent)); 

li.forEach((item, index) => item.textContent = index);

/*Задание 3
Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.*/


/*const dell = document.querySelectorAll(".forRemove")
dell.forEach(item => console.log(item.textContent));

const elements = document.querySelectorAll(".forRemove");
elements.forEach(element => {
element.remove();
});




/*Задание 4
Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.*/

/* const paragraphs = document.createElement("p");
paragraphs.textContent = "hgfhgfhf ghjujuygfju";
paragraphs.style.fontSize = "36px";
paragraphs.style.fontWeight = "bold";


const main = document.querySelector("main");
main.appendChild(paragraphs);




/*Задание 5
Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.*/

/* function tagStyles(tagName, color, content) {
    const elements = document.createElement(tagName); 
    elements.style.color = color; 
    elements.textContent = content; 
    console.log(elements); 
    
    const mainElem = document.querySelector("main");
    mainElem.appendChild(elements);
  }
  tagStyles("h2", "red", "Привет");
  tagStyles("p", "blue", "Как дела?");
  



/*Задание 6
Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.*/

/* const select = document.createElement("select");
for (let i = 1960; i <= 2020; i++) {
  const option = document.createElement("option");
  option.textContent = i;
  select.appendChild(option);
}
const push = document.querySelector("main");
push.appendChild(select);



/*Задание 7
Вставить в страницу (в html документ) ul.
Предусмотреть в коде следующий массив:
const clients = [
{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}
]
Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
- Клиент Женя оплатил заказ
- Клиент Павел отменил заказ
... остальные li с контентом
Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.*/

/*const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
  ];

  const ul = document.createElement("ul");
  clients.forEach(client => {
    const li = document.createElement("li");
    const status = client.order ? "оплатил" : "отменил";
    li.textContent = `Клиент ${client.name} ${status} заказ`;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);


/*Задание 8
Есть массив ссылок:
let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
Вам нужно:
1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY*/


/* let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

//1 
const divElem = document.createElement("div");
divElem.style.background = "violet";
divElem.style.padding = "20px 30px";

//2
  linksArr.forEach(link => {
  const linkElem = document.createElement("a");
  linkElem.href = link;
  linkElem.textContent = link;
  linkElem.style.textDecoration = "none";
  linkElem.style.paddingRight = "10px";
  linkElem.style.color = "blue";
  linkElem.target = "_blank";

  divElem.appendChild(linkElem);
});
const mainElem = document.querySelector("main");
    mainElem.appendChild(divElem);

//3
document.body.append(divElem);
