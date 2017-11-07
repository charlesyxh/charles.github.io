var HelloWorld = /** @class */ (function () {
    function HelloWorld(name) {
        this.person = name;
    }
    HelloWorld.prototype.greet = function () {
        return 'Hello World ' + this.person + ' !';
    };
    return HelloWorld;
}());
var HW = new HelloWorld('Charles');
var message = HW.greet();
var AlertLevel;
(function (AlertLevel) {
    AlertLevel[AlertLevel["info"] = 0] = "info";
    AlertLevel[AlertLevel["warning"] = 1] = "warning";
    AlertLevel[AlertLevel["error"] = 2] = "error";
})(AlertLevel || (AlertLevel = {}));
function getAlertSubscribers(level) {
    var emails = new Array();
    switch (level) {
        case AlertLevel.info:
            emails.push('cst@domain.com');
            break;
        case AlertLevel.warning:
            emails.push('development@domain.com');
            emails.push('sysadmin@domain.com');
            break;
        case AlertLevel.error:
            emails.push('development@domain.com');
            emails.push('sysadmin@domain.com');
            emails.push('management@domain.com');
            break;
        default:
            throw new Error('Invalid argument!');
    }
    return emails;
}
console.log(getAlertSubscribers(AlertLevel.info));
console.log(getAlertSubscribers(AlertLevel.warning));
console.log(getAlertSubscribers(AlertLevel.error));
function add() {
    var foo = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        foo[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
function add2(foo) {
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
function test() {
    a = 0;
    var a; //变量提升
    alert(a);
}
console.log(add(2, 3, 4, 5, 6));
console.log(add2([2, 3, 4, 5]));
// test();
(function (global) {
    var name = 'charles';
    var surname = 'yu';
    var html = "<h1>" + name + " " + surname + "</h1>";
    console.log(html);
})(this);
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
function htmlEscape(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
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
};
//高阶函数
function greatFn(cb) {
    console.log('great');
    cb();
}
greatFn(callbackFn);
/**
 * 箭头函数
 * 箭头函数是function表达式的缩写，会在其作用域内绑定this操作符
 */
var User = /** @class */ (function () {
    function User() {
        this._name = 'charles';
    }
    User.prototype.get = function () {
        return this._name;
    };
    User.prototype.set = function (val) {
        this._name = val;
    };
    User.prototype.greet = function () {
        alert("Hi! My name is " + this._name);
    };
    User.prototype.greetDelay = function (time) {
        var _this = this;
        setTimeout(function () {
            //this关键字指向匿名函数
            alert("Hi! My name is " + this._name); //undefined
        }, time);
        setTimeout(function () {
            //箭头函数表达式的词法会绑定this操作符，意味这箭头函数不会改变this关键字的指向
            alert("Hi! My name is " + _this._name); //sandra
        }, time++);
    };
    return User;
}());
var user = new User();
console.log(user.get());
user.set('sandra');
console.log(user.get());
user.greet();
user.greetDelay(500);
var SuperMan = /** @class */ (function () {
    function SuperMan(sex, power) {
        this.sex = sex ? sex : 'male';
        this.power = power ? power : ['fly'];
    }
    SuperMan.prototype.getSex = function () {
        return this.sex;
    };
    SuperMan.prototype.getPower = function () {
        return this.power;
    };
    return SuperMan;
}());
var spdier = new SuperMan('male', ['spin', 'poison']);
console.log(spdier.getSex());
console.log(spdier.getPower());
