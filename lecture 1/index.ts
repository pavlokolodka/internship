/* 
Написати програму яка буде працювати як магазин. 
Використовуючи всі принципи ооп які ви сьогодні чули, якщо будуть патерни буде чудово. 
В ній мають бути товари, близько 3-5 штук. Має бути якась функція або клас який  це все запустить і скупить товари до того моменту поки у вас не закінчиться баланс. 
Баланс повинен бути захардкожен. Всі покупки мають бути відображені в консольлогах. 
Кожний товар має скуплятись по певній ціні, знижка на товар повинна залежати від сьогоднішньої дати (звичайний new Date()). 
Умовно якщо сьогодні четвер, то хліб дешевше. Завдання не має певних обмежень, за винятком використання класів. 
Ви можете придумати так як хочете, якщо не можете придумати куди додати умовну інкапсуляцію в цій реалізації, додайте нову логіку.
Це завдання не має займати багато часу. 
Воно не повинно виконуватись першочергово. Подивіться відео які я дав, потім можете приступати.
*/
import {User} from './user';

let user = new User('Ivan');

user.buy();