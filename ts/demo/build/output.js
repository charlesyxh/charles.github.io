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
