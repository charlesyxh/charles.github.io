interface HumanInterface{
    sex:string;
}

class SuperMan implements HumanInterface{
    sex:string;
    power:Array<string>;
    constructor(sex?:string,power?:Array<string>){
        this.sex = sex?sex:'male';
        this.power = power?power:['fly'];
    }
    getSex(){
        return this.sex;
    }
    getPower(){
        return this.power;
    }
}

var spdier = new SuperMan('male',['spin','poison']);

console.log(spdier.getSex());
console.log(spdier.getPower());
