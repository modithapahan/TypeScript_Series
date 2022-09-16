/* Hello World Program */
var my_name = "Moditha";
console.log(my_name);
/* Example */
var myName = /** @class */ (function () {
    function myName() {
    }
    myName.prototype.name = function () {
        console.log('Moditha123');
    };
    return myName;
}());
var nameObj = new myName();
nameObj.name();
