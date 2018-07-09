/*
1、charAt(n) + charCodeAt(n) 返回索引字符
2、substr(n,s) + substring(n,m) + slice(n,m) 字符串截取
3、toUpperCase() + toLowerCase() 字母大小写
4、indexOf('x') + lastIndexOf('x') 字符找索引
5、split('/') 拆分字符串转数组
6、replace('old'，’new’) 字符串替换
7、trim() + trimLeft() + trimRight() 去除空格
8、match('x') 输出字符串详细信息
9、search('x') 通过字符找索引
10、eval()字符串转js代码；
11、concat()字符串拼接；
*/

let str = "   NaN  good good GOOD 123 456     ";


/*1 charAt(n)返回索引字符*/
String.prototype.myCharAt = function (num) {
    if (!isNaN(num)) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === this[num]) {
                return this[i];
            }
        }
        if (this[this.length - 1] !== this[num]) {
            return '';
        }
    } else {
        return '';
    }

};
// console.log(str.charAt(15));
// console.log(str.myCharAt(15));

/*2 charCodeAt(n) 把获取的字符变成Unicode编码值（对应ASCⅡ码值）*/
String.prototype.myCharCodeAt = function (num) {

};
// console.log(str.charCodeAt(2));

/*3 substr(n,s)字符串截取*/
String.prototype.mySubStr = function (index, num) {
    let newStr = "";
    !index ? index = 0 : null;
    !num ? num = this.length - index : null;
    for (let i = index; i < index + num; i++) {
        newStr += this[i];
    }
    return newStr;
};
// console.log(str.mySubStr(45));
// console.log(str.substr(45));

/*4 substring(n,m)*/
String.prototype.mySubString = function (firstIndex, lastIndex) {
    let newStr = '';
    if (firstIndex === undefined || firstIndex < 0) {
        firstIndex = 0;

    } else if (!isNaN(firstIndex)) {
        firstIndex = Number(firstIndex);
        if (!firstIndex) {
            firstIndex = 0;
        }
    }
    if (lastIndex === undefined || lastIndex === 0 || lastIndex > this.length) {
        lastIndex = this.length;

    } else if (lastIndex < 0) {
        lastIndex = 0;
    } else if (!isNaN(lastIndex)) {
        lastIndex = Number(lastIndex);
        if (!lastIndex) {
            lastIndex = 0;
        }
    }
    console.log(firstIndex);
    console.log(lastIndex);
    if (firstIndex > lastIndex) {
        firstIndex = firstIndex + lastIndex;
        lastIndex = firstIndex - lastIndex;
        firstIndex = firstIndex - lastIndex;
    }
    for (let i = firstIndex; i < lastIndex; i++) {
        newStr += this[i];
    }
    return newStr;
};
// console.log(str.mySubString(-5,19));
// console.log(str.substring(19, -5));

/*5 slice(n,m)*/
String.prototype.mySlice = function (firstIndex, lastIndex) {
    let newStr = '';
    if (arguments.length === 0) {
        for (let i = 0; i < this.length; i++) {
            newStr += this[i];
        }
        return newStr;
    }
    if (firstIndex === undefined) {
        throw "Uncaught SyntaxError: Unexpected token ,";
    } else if (!isNaN(firstIndex)) {
        firstIndex = Number(firstIndex);
        if (!firstIndex) {
            firstIndex = 0;
        } else if (firstIndex < 0) {
            firstIndex = this.length;
        }
    }
    if (lastIndex === undefined || lastIndex > this.length) {
        lastIndex = this.length;
    } else if (!isNaN(lastIndex)) {
        lastIndex = Number(lastIndex);
        if (!lastIndex) {
            lastIndex = 0;
        } else if (lastIndex < 0) {
            lastIndex = this.length + lastIndex;
        }
    }
    for (let i = firstIndex; i < lastIndex; i++) {
        newStr += this[i];
    }
    return newStr;
};
// console.log(str.mySlice('1','s'));
// console.log(str.slice('1','s'));

/*6 toUpperCase() 字母大写*/
String.prototype.myUpperCase = function () {
    let reg = /[a-z]/;
    let newStr = '';
    for (let i = 0; i < this.length; i++) {
        if (reg.test(this[i])) {
            newStr += String.fromCharCode(this[i].charCodeAt() - 32);
        } else {
            newStr += this[i];
        }
    }
    return newStr;
};
// console.log(str.myUpperCase());

/*7 toLowerCase() 字母小写*/
String.prototype.myLowerCase = function () {
    let reg = /[A-Z]/;
    let newStr = '';
    for (let i = 0; i < this.length; i++) {
        if (reg.test(this[i])) {
            newStr += String.fromCharCode(this[i].charCodeAt() + 32);
        } else {
            newStr += this[i];
        }
    }
    return newStr;
};
// console.log(str.myLowerCase());

/*8 split('/') 拆分字符串转数组*/
String.prototype.mySplit = function (chars, num) {
    let int = chars.length;
    let newAry = [];
    let reg = new RegExp(chars, "g");
    let cont = 0;
    let str = '';
    let newStr = '';
    if (arguments.length === 0) {
        newAry[0] = this.toString();
        return newAry;
    }else if(num){
        return newAry;
    }
    for (let i = 0; i < this.length; i++) {
        if(cont === Number(num)){
            return newAry;
        }
        for (let j = i; j < i + int; j++) {
            newStr += this[j];
        }
        // console.log(newStr);
        if (!reg.test(newStr)) {
            str += this[i];
        } else {
            newAry[cont] = str;
            i+=int-1;
            cont++;
            str = '';
        }
        newStr = '';
    }
    newAry[cont] = str;
    return newAry;
};
// console.log(str.split(''));
// console.log(str.mySplit(''));

/*9 replace('old'，’new’) 字符串替换*/
/*
* 需求分析
* 参数：如果没有，返回原字符串
*   第一个：旧的-可以是字符串或者正则
*   第二个：新的-如果没有就是undefined
* 返回值：修改后的新字符串
* 原字符串不变*/
//测试
/*let regp = /go/;
for (let i = 0; i < str.length; i++) {
    if(regp.test(str[i])){
        var s =regp.exec(str)[0];
        console.log(s);
    }

}*/
//不使用正则
/*String.prototype.myReplace = function (oldStr, newStr){
    if(arguments.length === 0){
        return this.toString();
    }else if(!oldStr instanceof String) {
        oldStr = oldStr.toString;
    }else {
        let getStr = '';
        let setStr = '';
        let int = oldStr.length;
        for (let i = 0; i < this.length; i++) {
            for (let j = i; j < i+ int; j++) {
                setStr += this[j];
            }
            if(setStr === oldStr){
                getStr+=newStr;
                i+=int-1;
            }else {
                getStr+=this[i];
            }
            setStr = '';
        }
        return getStr;
    }
};*/
//原生封装
String.prototype.myReplace = function (oldStr, newStr){
    let getStr = '';
    let setStr = '';
    let cont = 0;
    let int = oldStr.length;
    let intAry = [];
    let long = null;
    if(arguments.length === 0){
        return this.toString();
    }else if(oldStr instanceof RegExp) {
        let regOne = null;
        let regIndex = null;
        regOne = oldStr.exec(this);
        if(!regOne){
            return this.toString();
        }
        regIndex = regOne.index;
        intAry[0] = regOne[0];
        for (let i = 0; i < this.length; i++) {
            var regTwo = oldStr.exec(this);
            if(!regTwo){
                break;
            }
            var curIndex = regTwo.index;
            if(curIndex === regIndex){
                long = intAry[0].length;
                break;
            }
            intAry[i+1] = regTwo[0];
            long = intAry[0].length;
        }
        for (let i = 0; i < this.length; i++) {
            for (let j = i; j < i+ long; j++) {
                setStr += this[j];
            }
            if(intAry[cont] === undefined){
                getStr+=this[i];
                continue;
            }else if(intAry[cont] === setStr){
                getStr+=newStr;
                // console.log(getStr);
                i+=long-1;
                cont += 1;
            }else {
                getStr+=this[i];
            }
            setStr = '';
        }
        return getStr;
    }else {
        for (let i = 0; i < this.length; i++) {
            for (let j = i; j < i+ int; j++) {
                setStr += this[j];
            }
            if(setStr === oldStr){
                if(cont === 1){
                    getStr+=this[i];
                    continue;
                }
                getStr+=newStr;
                i+=int-1;
                cont += 1;
            }else {
                getStr+=this[i];
            }
            setStr = '';

        }
        return getStr;
    }
};
// console.log(str.replace(/o/g,'GOO'));
// console.log(str.myReplace(/o/g,'GOO'));

/*10-13 trim() + trimLeft() + trimRight() 去除空格*/
String.prototype.myTrimLeft = function (){
    let newStr = "";
    let step = 1;
    for (let i = 0; i < this.length; i++) {
        if(step === 1 && this[i] === " "){
            continue;
        }else{
            newStr += this[i];
            step=0;
        }
    }
    return newStr;
};
// console.log(str.trimLeft());
// console.log(str.myTrimLeft());

String.prototype.myTrimRight = function (){
    let newStr = "";
    let step = 1;
    for (let i = this.length-1; i >= 0; i--) {
        if(step === 1 && this[i] === " "){
            continue;
        }else{
            newStr += this[i];
            step = 0;
        }
    }
    let resultStr = "";
    let num = newStr.length;
    for (let j = 0; j < newStr.length; j++) {
        num--;
        if(newStr[num] === " "){
            resultStr += " ";
        }else {
            resultStr += newStr[num];
        }
    }
    newStr = null;
    return resultStr;
};
// console.log(str.trimRight());
// console.log(str.myTrimRight());

String.prototype.myTrim = function (){
    let newStr = "";
    let setStr = "";
    let step = 1;
    for (let i = 0; i < this.length; i++) {
        if(this[i] === " "){
            if(!!step){
                setStr="";
            }else {
                setStr += this[i];
            }
        }else if(!!setStr){
            newStr += setStr;
            newStr += this[i];
            setStr = "";
            step = 0;
        }else {
            newStr += this[i];
            step = 0 ;
        }
    }
    return newStr;
};
// console.log(str.myTrim());
// console.log(str.trim());

/*14 match('x') 输出字符串详细信息
* 参数可以是正则*/
String.prototype.myMatch = function (chars){

};
console.log(str.match(/(23)/));

/*15 search('x') 通过字符找索引*/
String.prototype.mySearch = function (chars){
    if(chars instanceof RegExp){
        let value = chars.exec(this);
        value = !!value?value.index:-1;
        return value;
    }else {
        chars = chars.toString();
        console.log(chars.length);
        let cutStr = "";
        for (let i = 0; i < this.length; i++) {
            for (let j = i; j < chars.length; j++) {
                cutStr += this[j];
                console.log(cutStr);
            }
            if(cutStr === chars){
                console.log(cutStr);
                return i;
            }
        }
        console.log(cutStr);
        return -1;
    }
};
console.log(str.mySearch('goo'));
console.log(str.search('goo'));

/*16 concat()字符串拼接*/
String.prototype.myConcat = function (){
    let resultStr = "";
    resultStr += this;
    for (let i = 0; i < arguments.length; i++) {
        resultStr += arguments[i].toString();
    }
    return resultStr ;
};
/*let str3 = NaN;
let str2 = "aaa";
let str4 = [45,'hhh'];
console.log(str.myConcat(str3,str4,str2));
console.log(str.concat(str3,str4,str2));*/

//number
/*
function convert(n){
    if(typeof n == 'number'){
        n = Number(n)
    }else if(!(n instanceof Number)){
        throw 'Not a number!'
    }
}*/
