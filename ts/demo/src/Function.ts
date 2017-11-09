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
    var a: number;//变量提升
    a = 0;
    document.write(a.toString());
}

document.write(add(2, 3, 4, 5, 6));
document.write(add2([2, 3, 4, 5]));
// test();


(function (global) {
    var name = 'charles';
    var surname = 'yu';
    var html = `<h1>${name} ${surname}</h1>`;
    document.write(html);
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

function htmlEscape(literals: string[], ...placeholders: any[]) {
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
    document.write('callback');
}

//高阶函数
function greatFn(cb: () => void) {
    document.write('great');
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
        document.write(`Hi! My name is ${this._name}`);
    }
    greetDelay(time: number): void {
        setTimeout(function () {
            //this关键字指向匿名函数
            document.write(`Hi! My name is ${this._name}`);//undefined
        }, time)
        setTimeout(() => {
            //箭头函数表达式的词法会绑定this操作符，意味这箭头函数不会改变this关键字的指向
            //当编译箭头函数时，Typescript编译器会生成一个this的别名，名为_this。用别名来确保this指向的是正确的对象
            document.write(`Hi! My name is ${this._name}`);//sandra
        }, time++)
    }
}

var user = new User();
document.write(user.get());
user.set('sandra');
document.write(user.get());
user.greet();
// user.greetDelay(500);

/**
 * 回调地狱
 * Promise
 */

// new Promise(function (resolve: any, reject: any) {
//     try {
//         resolve();
//     } catch (error) {
//         reject(error)
//     }
// })

/**
 * 生成器
 * 定义生成器的构造函数 function关键字后面跟着一个星号（*）。
 * yield关键字被用来暂停函数执行并发挥一个值
 * 生成器给了我们以同步的方法编写异步代码的可能性
 * 只要我们在异步事件发生的时候调用生成器的next()方法就能做到这点
 */
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}
var g = new generator();
document.write(g.next());


/**
 * 异步函数 async和await
 * 异步函数是在异步操作中被调用的函数，可以使用await关键字等待异步结果的到来而不会阻塞程序的运行
 */

var p: Promise<number>;
async function fn(): Promise<number> {
    var i = await p;
    return i++;
}