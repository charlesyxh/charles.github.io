var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//面向对象编程 OOP
/**
 * SOLID原则
 * 单一职责原则 SRP 组件必须专注于单一的任务
 * 开/闭原则   OCP 可扩张性和对已有修改封闭
 * 里式替换原则 LSP 只要继承同一个接口，程序里任意一个类都可以被其他的类替换而不影响原有程序的运行
 * 接口隔离原则 ISP 将非常大的接口拆分成一些小的更具体的接口，客户端只需要关心它们需要用到的接口
 * 依赖反转原则 DIP 一个方法应该遵从依赖于抽象（接口）而不是一个实例（类）的概念
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
    };
    return Animal;
}());
var Mammal = /** @class */ (function () {
    function Mammal() {
    }
    Mammal.prototype.breathe = function () {
        return "I'm alive!";
    };
    return Mammal;
}());
var WingedAnimal = /** @class */ (function () {
    function WingedAnimal(parameters) {
    }
    WingedAnimal.prototype.fly = function () {
        return "I can fly!";
    };
    return WingedAnimal;
}());
/**
 * 混合效果 范式
 * 限制
 * 第一只能继承树上一级方法和属性
 * 第二如果两个活更多父类包含同名方法，只会继承传入applyMixins方法中baseCtors数组中最后一个类的方法
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
;
// class Bat implements Mammal, WingedAnimal {
//     breathe: () => string;
//     fly: () => string;
// }
var Bat = /** @class */ (function () {
    function Bat() {
    }
    return Bat;
}());
applyMixins(Bat, [Mammal, WingedAnimal]);
var bat = new Bat();
document.writeln(bat.breathe());
document.writeln(bat.fly());
var Eat = /** @class */ (function () {
    function Eat(things) {
        this._things = things;
    }
    Eat.prototype["do"] = function () {
        console.log('I am ' + this._things);
    };
    return Eat;
}());
var eat = new Eat('eatting');
eat["do"]();
/**
 * 代码提示
 * 通过安装tsd工具
 * 第一步：npm install -g tsd;
 * 第二步 ： tsd init（初始化）
 * tsd query （查询）
 * tsd install （下载功能）
 * 例如：查询jquery提示 [tsd query jquery* ] 这样就能查询到所有有关jquery&jquery插件的版本
 * 1.x版本的typescript建议使用typings
 * 2.x版本的typescript可以直接查找 @types/some_module_name_u_need,有的话就行平时安装其他模块一样安装就行了，比如： npm install @types/lodash --save-dev
 */
///<reference path="../node_modules/@types/jquery/index.d.ts" /> 
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
    var a; //变量提升
    a = 0;
    document.write(a.toString());
}
document.write(add(2, 3, 4, 5, 6));
document.write(add2([2, 3, 4, 5]));
// test();
(function (global) {
    var name = 'charles';
    var surname = 'yu';
    var html = "<h1>" + name + " " + surname + "</h1>";
    document.write(html);
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
    document.write('callback');
};
//高阶函数
function greatFn(cb) {
    document.write('great');
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
        document.write("Hi! My name is " + this._name);
    };
    User.prototype.greetDelay = function (time) {
        var _this = this;
        setTimeout(function () {
            //this关键字指向匿名函数
            document.write("Hi! My name is " + this._name); //undefined
        }, time);
        setTimeout(function () {
            //箭头函数表达式的词法会绑定this操作符，意味这箭头函数不会改变this关键字的指向
            //当编译箭头函数时，Typescript编译器会生成一个this的别名，名为_this。用别名来确保this指向的是正确的对象
            document.write("Hi! My name is " + _this._name); //sandra
        }, time++);
    };
    return User;
}());
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
function generator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
var g = new generator();
document.write(g.next());
/**
 * 异步函数 async和await
 * 异步函数是在异步操作中被调用的函数，可以使用await关键字等待异步结果的到来而不会阻塞程序的运行
 */
var p;
function fn() {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, p];
                case 1:
                    i = _a.sent();
                    return [2 /*return*/, i++];
            }
        });
    });
}
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
var user = new app.models.UserModel();
var app;
(function (app) {
    var models;
    (function (models) {
        var UserModel = /** @class */ (function () {
            function UserModel() {
            }
            return UserModel;
        }());
        models.UserModel = UserModel;
        var TalkModel = /** @class */ (function () {
            function TalkModel() {
            }
            return TalkModel;
        }());
        models.TalkModel = TalkModel;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
var app;
(function (app) {
    var validation;
    (function (validation) {
        var UserValidation = /** @class */ (function () {
            function UserValidation() {
            }
            return UserValidation;
        }());
        validation.UserValidation = UserValidation;
        var TalkValidation = /** @class */ (function () {
            function TalkValidation() {
            }
            return TalkValidation;
        }());
        validation.TalkValidation = TalkValidation;
    })(validation = app.validation || (app.validation = {}));
})(app || (app = {}));
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
document.writeln(spdier.getSex());
document.writeln(spdier.getPower());
