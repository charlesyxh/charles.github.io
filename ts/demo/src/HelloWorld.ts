class HelloWorld {
    person: string;
    constructor(name: string) {
        this.person = name;
    }
    greet() {
        return 'Hello World ' + this.person + ' !';
    }
}

var HW = new HelloWorld('Charles');

var message: string = HW.greet();