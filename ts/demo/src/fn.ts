function add(...foo: number[]): number {
    let result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}

function add2(foo: number[]): number {
    let result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}

function test(): void {
    a = 0;
    var a: number;//变量提升
    alert(a);
}

console.log(add(2, 3, 4, 5, 6));
console.log(add2([2, 3, 4, 5]));
// test();


(function (global) {
    var name = 'charles';
    var surname = 'yu';
    var html = `<h1>${name} ${surname}</h1>`;
    console.log(html);
})(this)

/**
 * tag函数和标签模板
 * tag函数后紧跟一个模板字符串
 * var html = htmlEscape `<h1>${name} ${surname}</h1>` 
 * 一个标签模板必须返回一个字符串，并接受以下参数
 * 第一个参数是一个数组，包含模板字符串中所有静态字面量（<h1></h1>）
 * 剩余参数是模板字符串中所有的变量
 * tag函数的定义：tag(literals:string[],...values:any[]):string
 * 实现一个tag函数的定义
 * 好处：允许我们创建一个自定义模板字符串处理器
 */

function htmlEscape(literals, ...placeholders) {
    let result = "";
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
    }
    result += literals[literals.length - 1];
    return result;
}


/**
 * 回调和高阶函数
 * 函数可以作为参数传递给其他函数，被传递函数叫做回调函数，接受函数为参数或者返回另外一个函数的函数称为高阶函数。
 * 回调函数常被用在异步函数中
 */
//回调函数
var callbackFn = function () {
    console.log('callback');
}

//高阶函数
function greatFn(cb: () => void) {
    console.log('great');
    cb();
}

greatFn(callbackFn);

/**
 * 箭头函数
 * 箭头函数是function表达式的缩写，会在其作用域内绑定this操作符
 */
class User {
    //this操作符指向这个类本身
    private _name: string;
    constructor() {
        this._name = 'charles';
    }
    get(): string {
        return this._name;
    }
    set(val: string): void {
        this._name = val;
    }
    greet(): void {
        alert(`Hi! My name is ${this._name}`);
    }
    greetDelay(time: number): void {
        setTimeout(function () {
            //this关键字指向匿名函数
            alert(`Hi! My name is ${this._name}`);//undefined
        }, time)
        setTimeout(() => {
            //箭头函数表达式的词法会绑定this操作符，意味这箭头函数不会改变this关键字的指向
            alert(`Hi! My name is ${this._name}`);//sandra
        }, time++)
    }
}

var user = new User();
console.log(user.get());
user.set('sandra');
console.log(user.get());
user.greet();
user.greetDelay(500);