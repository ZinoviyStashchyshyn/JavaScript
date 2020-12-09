
// - присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

// let hello = "hello";
// hello = "hi";
// console.log (hello);
// alert(hello);
// document.write(hello);

// let owu ="owu";
// owu = "uwo";
// console.log(owu);
// alert(owu);
// document.write(owu);

// let com ="com";
// com = "moc";
// console.log(com);
// alert(com);
// document.write(com);



// let ua ="ua";
// ua = "au";
// console.log(ua);
// alert(ua);
// document.write(ua);

// let one = 1;
// one = 2;
// console.log(one);
// alert(one);
// document.write(one);

// let ten= 10;
// ten = 100;
// console.log(ten);
// alert(ten);
// document.write(ten);

// let numberSecond = -999;
// numberSecond = 1300;
// console.log(numberSecond);
// alert(numberSecond);
// document.write(numberSecond);

// let numberThree = 123;
// numberThree = 333;
// console.log(numberThree);
// alert(numberThree);
// document.write(numberThree);

// let numberFour = 3.14;
// numberFour = 14.3;
// console.log(numberFour);
// alert(numberFour);
// document.write(numberFour);

// let numberFive = 2.7;
// numberFive = 7.2;
// console.log(numberFive);
// alert(numberFive);
// document.write(numberFive);

// let nmberSix = 16;
// nmberSix = 18;
// console.log(nmberSix);
// alert(nmberSix);
// document.write(nmberSix);

// let booleanTrue = true;
// booleanTrue = !true;
// console.log(booleanTrue);
// alert(booleanTrue);
// document.write(booleanTrue);

// let booleanfalse = false;
// booleanfalse = !false;
// console.log(booleanfalse);
// alert(booleanfalse);
// document.write(booleanfalse);

// // - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

// const One = 1;
// console.log(One);
// alert(One);
// document.write(One);

// const Two = 2;
// console.log(Two);
// alert(Two);
// document.write(Two);


// const Three = 3;
// console.log(Three);
// alert(Three);
// document.write(Three);

// const NAME = "Taras";
// console.log(NAME);
// alert(NAME);
// document.write(NAME);

// const Surname = "Andriyovych";
// console.log(Surname);
// alert(Surname);
// document.write(Surname);

// const Lastname = "Batyuchok";
// console.log(Lastname);
// alert(Lastname);
// document.write(Lastname);

// // - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

// let name = prompt("Enter your name");

// console.log(name);
// alert(name);
// document.write(name);

// let surname = prompt("Enter your surname");

// console.log(surname);
// alert(surname);
// document.write(surname);

// let  lastname = prompt("Enter your lastname");

// console.log(lastname);
// alert(lastname);
// document.write(lastname);

// // - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let person = `${name}  ${surname}  ${lastname}`;  ////інтерполяція
// let person = name + " " +surname + " " + lastname;  //// конкантенація
// document.write(person);

// // - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// let motherName = prompt("Enter your mother");
// let motherSurname = prompt("Enter your mothere surname");
// let motherLastname = prompt("Enter your mother lastname");
// let mother = `${motherName} ${motherSurname} ${motherLastname}`;
// let mother = motherName + " " + motherSurname + " " + motherLastname;
// console.log(mother);
// document.write(mother);
// alert(mother);

// let fatherName = prompt("Enter your father name");
// let fatherSurname = prompt("Enter your father surname");
// let fatherLast = prompt("Enter your father lastname");
// let Father = `${fatherName} ${fatherSurname} ${fatherLast}`;
// let Father = fatherName + " " + fatherSurname + " " + fatherLast;
// console.log(Father);
// document.write(Father);
// alert(Father);

// let wifeName = prompt("Enter your wife name");
// let wifeSurname = prompt("Enter your wife surname");
// let wifeLastname = prompt("Enter your wife lastname");
// let wife = `${wifeName} ${wifeSurname} ${wifeLastname}`;
// let wife = wifeName + " " + wifeSurname + " " +wifeLastname;
// console.log(wife);
// alert(wife);
// document.write(wife);

// // - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let numberOne = +prompt("Enter first number");
// // console.log(numberOne);
// let numberTwo = +prompt("Enter second number");
// // console.log(numberTwo);
// let numberThree = +prompt("Enter third number");
// // console.log(numberThree);
// console.log(numberOne + numberTwo + numberThree);
// console.log(numberOne, numberTwo, numberThree);

// // - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let numberOne = parseInt(prompt ("Enter number one"));
// let numberTwo = parseInt(prompt ("Enter number two"));
// let numberThree = parseInt(prompt("Enter number Three"));
// let numberFour = parseInt(prompt ("Enter number Four"));
// let result = numberOne+numberTwo+numberThree+numberFour;
// console.log(result);

// let numberOne = prompt ("Enter number one");
// let numberTwo = prompt ("Enter number two");
// let numberThree = prompt("Enter number Three");
// let numberFour = prompt ("Enter number Four");
// let result = parseInt(numberOne)+parseInt(numberTwo)+parseInt(numberThree)+parseInt(numberFour);
// console.log(result);

// // - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let numberOne = parseFloat(prompt("number 1"));
// let numberTwo = parseFloat(prompt("number 2"));
// let numberThree = parseFloat(prompt("number 3"));
// let result = numberOne+numberTwo+numberThree;
// console.log(result);


// let numberOne = prompt("number 1");
// let numberTwo = prompt("number 2");
// let numberThree = prompt("number 3");
// let result = parseFloat(numberOne)+parseFloat(numberTwo)+parseFloat(numberThree);
// console.log(result);


// // - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

// let numberOne = parseFloat(prompt("Enter float number 1"));
// let numberTwo = parseFloat(prompt("Enter float number 2"));
// let numberThree = parseFloat(prompt("Enter float number 3"));
// let result = numberOne+numberTwo+numberThree;
// console.log(Math.round(result));


// let numberOne = Math.round(parseFloat(prompt("Enter float number 1")));
// let numberTwo = Math.round(parseFloat(prompt("Enter float number 2")));
// let numberThree = Math.round(parseFloat(prompt("Enter float number 3")));
// let result = numberOne+numberTwo+numberThree;
// console.log(result);

// // - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

// let number = parseInt(prompt("Enter number"));
// let pow = parseInt(prompt("Enter POW"));
// let resultPow = Math.pow(number,pow);
// console.log(resultPow);

// let number = parseInt(prompt("Enter number"));
// let pow = parseInt(prompt("Enter POW"));
// console.log(Math.pow(number,pow));


// // - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100;
// let b = "100";
// let c = true;
// let d = undefined;
// console.log(typeof(a),typeof(b),typeof(c),typeof(d));

// // - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// //  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// // Каждое выражение вложить в свою переменную

// let a = 5<6;
// let b = 5>6;
// let c = 5==6;
// let d = 5===6;
// let e = 10===10;
// let f = 10>=10;
// let g = 10!=10;
// let h = 10<10;
// let j = 10>10;
// let k = 123!=123;
// let l = 123===123;
// console.log(a,b,c,d,e,f,g,h,j,k,l);


// //Дополнительно:
// // - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль

// console.log(132>100 && 45<12); // false
// console.log(34>33 && 23<90);  // true
// console.log(99>100 && 45>12); // false
// console.log(132>100 || 45<12); // true
// console.log(111>11 || 45<111); // true
// console.log((111>11 || 45<111) && (132>100 || 45<12)); // true
// console.log((111>11 || 45<56) || (132>100 || 45<12)); // true
// console.log((132>100 && 45<12) && (132>100 || 45>12)); // false
// console.log((111>11 || 45<111) || (90>100 && 45>12)); // true
// console.log(!!"-1"); // true
// console.log(!!-1); // true
// console.log(!!"0"); // true
// console.log(!!"null"); // true
// console.log(!!"undefined"); // true
// console.log(!!(3/"owu")); // false
// console.log((111>11 || 45<100) || !!"0"); // true
// console.log((!!111 ==!!11 || 45<111) && (99>100 && 45>12)); // false


// // Дан массив:


// let users= [
//     {name:"vasya", age:31, status:false},
//     {name:"petya", age:30, status:true},
//     {name:"kolya", age:29, status:true},
//     {name:"olya", age:28, status:false},
//     {name:"max", age:30, status:true},
//     {name:"anya", age:31, status:false},
//     {name:"oleg", age:28, status:false},
//     {name:"andrey", age:29, status:true},
//     {name:"masha", age:30, status:true},
// ];

// // - обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
// // -- статус Андрея
// console.log(users[7].status);
// //// -- статус Максима
// console.log(users[4].status);
// //// -- имя предпоследнего объекта
// console.log(users[7].name);
// //// -- имя третьего объекта
// console.log(users[2].name);
// //// -- возраст Олега
// console.log(users[6].age);
// //// -- возраст Оли
// console.log(users[3].age);
// //// -- возраст + имя 5го объекта
// console.log(users[4].age,users[4].name);
// //// -- возраст + сатус ани
// console.log(users[5].age, users[5].status);


// // -Возьмите файл task1_template.html, подключите к нему скрипт, и работайте в нем.
// // -Напишите код, который :
// // -- получает текст из параграфа с id "content"
// // -- замените текст параграфа с id 'content' на любой другой
// let content = document.getElementById("content");
// console.log(content);
// content.innerText = "Замінений текст 1";
// content.style.color = "blue";

// // // -- получает текст из блока  с id "rules"
// // // -- замените текст параграфа с id 'rules' на любой другой
// let rules = document.getElementById("rules")
// console.log(rules);
// rules.innerText = "Замінений текст 2";
// rules.style.color = "blue";

// // -- поменятй каждому элементу цвет фона на красный
// // -- поменятй каждому элементу цвет текста на синий
// content.style.backgroundColor = "red";
// rules.style.backgroundColor = "red";

// let color =document.getElementsByClassName("fc_rules");
// color[0].style.backgroundColor = "red";
// color[0].style.color = "blue";
// color[1].style.backgroundColor = "red";
// color[1].style.color = "blue";
// color[2].style.backgroundColor = "red";
// color[2].style.color = "blue";
// color[3].style.backgroundColor = "red";
// color[3].style.color = "blue";

// // -- получить весь список классов элемента id = rules и вывести в console.log()
// let rrrr = document.getElementById("rules");
// console.log(rrrr);

// // -- получить все элементы с классом fc_rules
// let fc_rules = document.getElementsByClassName("fc_rules");
// console.log(fc_rules);

// // -- поменять цвет текста у всех элементов fc_rules на красный
// fc_rules[0].style.color = "red";
// fc_rules[1].style.color = "red";
// fc_rules[2].style.color = "red";
// fc_rules[3].style.color = "red";


// // CLASS

// // 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// // При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = "hello";
// let num = 123;
// let flag = true;
// let txt = "true";
// console.log(typeof str==="string",typeof num ==="number", typeof flag ==="boolean", typeof txt ==="string");


// //2. Создайте переменные a1, a2, a3, a4, a5. 
// //При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// //5 + 3, 5 - 3, 5 * 3, 5 / 3, 5 % 3

// let a1 = 5+3;
// let a2 = 5-3;
// let a3 = 5*3;
// let a4 = 5/3;
// let a5 = 5%3;
// console.log(a1,a2,a3,a4,a5);


// // 3. Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// // 5 % 3, 3 % 5, 5 + '3', '5' - 3, 75 + 'кг'

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + "3";
// let a9 = "5" - 3;
// let a10 = 75 +"kg";
// console.log(a6,a7,a8,a9,a10,);


// // 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// // шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = width*height;
// console.log(s);


// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// // результат поместите в переменную v.

// let heightC = 10;
// let dc = 4;
// let v= heightC*(dc/2);
// console.log(v);


// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// // Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k = (Math.pow(n,2)+Math.pow(m,2))/5;
// console.log(k)

// //7. Напишите скрипт, который выводит "Hello world", 
// //создавши переменную str и выводить спомощью document.write, alert и console.log


// let str = "Hello world";
// document.write(str);
// alert(str);
// console.log(str);


// //8. Вывести в окно браузера при помощи метода alert() следующие данные: 
// //Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert("Vasyl\n Vasylyovycch\n 29\n");


// //9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   // Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   // Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   // Вывести в документ содержимое переменной concatenation спомощью document.write


// let str1 = "Who";
// let str2 = "Are";
// let str3 = "You?"
// let concantination = str1 + " " + str2 + " " + str3;
// // let concantination =`${str1} ${str2} ${str3}`;
// document.write(concantination);


// //10. Какие значения выведет в окно браузера следующий фрагмент кода? и почему?


//     let str = "20";
//     let a = 5;
//     document.write(str + a + "<br/>"); ////205
//     document.write(str - a + "<br/>"); ////15
//     document.write(str * "2" + "<br/>"); ////40
//     document.write(str / 2 + "<br/>"); ////10


//     //11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?


//     console.log(parseInt("3.14")); ////3
//     console.log(parseInt("-7.875")); ////-7
//     console.log(parseInt("435")); ////435
//     console.log(parseInt("Вася")); ////NaN


//     //12.  С помощью окна ввода, вызываемого методом prompt,
//     //     пользователь может ввести данные, которые будут использоваться далее, повторите код ниже

//     let string = prompt("Enter greeting");
//     console.log(string);

//     //13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert


//   let numberOne = +prompt("Enter first number");
//   let bumberTwo = +prompt("Enter second number");
//   let result = numberOne+bumberTwo;
//   alert(result);
//   ////alert(numberOne+bumberTwo);


//   //14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//  //Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

//  let name = prompt("Enter your name");
//  let lastname = prompt("Enter your last name");
//  let age = prompt("Enter your age");

// ////alert("Hello" + " " + name +" "+ lastname + " "+ "my greeting that you are" + " " + age);
// alert(`Hello ${name} ${lastname} my greeting that you are ${age}`);


// ///Додаткова проба. if else

// let a = 10;
// let b = 20;
// let c = 30;
// let d = +prompt("Enter your number");


// if(d===a){
//   console.log("1000000000000000000000");
// }else if(d===b){
//   console.log("2000000000000000000000");
// }else if(d===30){
//   console.log("30000000000000000000000");
// }else{
//   console.log("wrongllllllllllllllllll");
// }

// // switch

// switch(prompt("ENTER")){
//   case "run" :
//     document.write("RUNNNNNNNNNNNNNNN");
//     break;

//     case "stop" :
//       document.write("stoppppppppppppppppp");
//       break;
      
//     default :
//     document.write("!!!!!!!!!!!!!!!@@@@@@@@@@@@@$$");
// }





































