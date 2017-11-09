//面向对象编程 OOP

/**
 * SOLID原则
 * 单一职责原则 SRP 组件必须专注于单一的任务
 * 开/闭原则   OCP 可扩张性和对已有修改封闭
 * 里式替换原则 LSP 只要继承同一个接口，程序里任意一个类都可以被其他的类替换而不影响原有程序的运行
 * 接口隔离原则 ISP 将非常大的接口拆分成一些小的更具体的接口，客户端只需要关心它们需要用到的接口
 * 依赖反转原则 DIP 一个方法应该遵从依赖于抽象（接口）而不是一个实例（类）的概念
 */

class Animal {
    eat() {

    }
}

class Mammal {
    breathe(): string {
        return "I'm alive!";
    }
}

class WingedAnimal {
    constructor(parameters) {

    }
    fly(): string {
        return "I can fly!"

    }
}

/**
 * 混合效果 范式
 * 限制 
 * 第一只能继承树上一级方法和属性
 * 第二如果两个活更多父类包含同名方法，只会继承传入applyMixins方法中baseCtors数组中最后一个类的方法
 */
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            if (name !== 'constructor') {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        })
    })
};

// class Bat implements Mammal, WingedAnimal {
//     breathe: () => string;
//     fly: () => string;
// }

class Bat { }

applyMixins(Bat, [Mammal, WingedAnimal]);

var bat = new Bat();
document.writeln(bat.breathe());
document.writeln(bat.fly());

/**
 * 泛型类
 * class className<T>{}
 */

interface Actions {
    do(): void
}

class Eat implements Actions {
    private _things:string;
    constructor(things){
        this._things = things;
    }
    do(): void {
        console.log('I am ' + this._things);
    }
}

var eat = new Eat('eatting');
eat.do()