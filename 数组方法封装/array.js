/*
1、unshift + push 给数组新增一项
2、shift + pop 删除数组的一项
3、slice(n,m) 数组截取/查询
4、splice(n,m,x) 删除/截取、插入/新增、替换/修改、
5、concat(ary,[]...) 克隆数组/数组拼接
6、toString() 转字符串
7、join("+") 将数组的元素以特定字符链接成一个字符串
8、indexOf('a') + lastIndexOf('a') 索引位置；（ES5新增）
9、sort() 数组排序
10、reverse() 把数组倒过来；
11、map(f(value,index,ary){}) 映射、遍历数组；
12、forEach(f(value,index,ary){}) 循环数组；
13、includes 是否包含某一元素
*/

let Ary = [12, 2093, NaN, 491, 'dd', 458, 'ss', 34, '12', 45, 56];
let Ary1 = [12, 2093, NaN, 491, 'dd', 458, 'ss', 34, '12', 45, 56];

//1
/*unshift：在数组开头新增一项
* 参数：新增的项
* 返回值：新数组的长度
* 原数组改变
* */
Array.prototype.myUnShift = function myUnShift(item) {
    if (item !== undefined) {
        let ary = [];
        ary.myConcat(item, this);
        for (let i = 0; i < ary.length; i++) {
            this[i] = ary[i];
        }
    }
    return this.length;
};
/*console.log(Ary.myUnShift(45));
console.log(Ary);*/

//2
/*push：在数组末尾新增一项
* 参数：新增的项
* 返回值：新数组的长度
* 原数组改变
* */
Array.prototype.myPush = function myPush(item) {
    if (item !== undefined) {
        let ary = [];
        ary.myConcat(this, item);
        for (let i = 0; i < ary.length; i++) {
            this[i] = ary[i];
        }
    }
    return this.length;
};
/*console.log(Ary.myPush(77));
console.log(Ary);*/

//3
/*shift：删除数组的第一项
* 参数：无
* 返回值：删除的哪一项
* 原数组改变
* */
Array.prototype.myShift = function myShift() {
    let cur = this[0];
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    this.length>=1 ? this.length-- :null;
    return cur;
};
// console.log(Ary.myShift());
// console.log(Ary);


//4
/*pop：删除数组的最后一项
* 参数：无
* 返回值：删除的哪一项
* 原数组改变
* */
Array.prototype.myPop = function myPop() {
    let cur = this[this.length - 1];
    this.length--;
    return cur;
};
/*console.log(Ary.myPop());
console.log(Ary);*/

//5
/*slice(n,m) 数组截取/查询
* 参数：2个，索引
* 返回值：截取的新数组
* 原数组不变
* */
Array.prototype.mySlice = function mySlice(begin, end) {
    let newAry = [];
    if (begin !== undefined && end !== undefined) {
        begin = begin < 0 ? this.length + begin : begin;
        end = end < 0 ? this.length + end : end;
        if (begin > end) {
            return [];
        }
        for (let i = begin; i < end; i++) {
            newAry[newAry.length] = this[i];
        }
        return newAry;
    } else if (begin === undefined) {
        return this;
    } else {
        for (let i = begin; i < this.length; i++) {
            newAry[newAry.length] = this[i];
        }
        return newAry;
    }

};
/*console.log(Ary.mySlice(5,2));
console.log(Ary);
console.log(Ary.slice(5,2));*/

//6
/*splice(n,s,x) 数组删除，截取/查询/插入
* 参数：3个-索引，个数，插入的项
* 返回值：删除的项
* 原数组改变
*插入和替换* 实现原理
    * 1、获取要插入的数组
    * 2、截取index前面的数组+插入的数组+拼接index+num后面的数组
*/
Array.prototype.mySplice = function mySplice(index, num, ...item) {
    let length = this.length;
    let long = arguments.length;
    let newAry = [];
    let ary = null;
    let lastIndex = null;
    if (long === 0) {
        /*删除*/
        return this;
    } else if (long > 0) {
        if (typeof(index) !== 'number') {
            isNaN(index) ? index = 0 : index = Number(index);
        } else if (index < 0) {
            index = length + index;
        }
        if (num === undefined) {
            lastIndex = length - 1;
        } else if (typeof(num) !== 'number') {
            isNaN(num) ? num = 0 : num = Number(num);
            lastIndex = num + index - 1;
        } else if (num <= 0) {
            return [];
        } else if (num === 1) {
            return [] = [this[index]];
        } else if (num + index > length - 1) {
            lastIndex = length - 1;
        } else {
            lastIndex = num + index - 1;
        }
        for (let i = index; i <= lastIndex; i++) {
            newAry[newAry.length] = this[i];
        }
        ary = this.mySlice(0, index).concat(item, this.mySlice(lastIndex + 1, length));
        for (let j = 0; j < ary.length; j++) {
            this[j] = ary[j];
        }
        this.length = ary.length;
        return newAry;
    }

};
// console.log(Ary.mySplice(5,6));
// console.log(Ary);
// console.log(Ary1.splice(5,6));
// console.log(Ary1);

//7
/*concat(ary,[]...) 克隆数组/数组拼接*/
Array.prototype.myConcat = function myConcat(...item) {
    let long = item.length;
    for (let i = 0; i < long; i++) {
        if (item[i] instanceof Array) {
            const length = item[i].length;
            for (let j = 0; j < length; j++) {
                this[this.length] = item[i][j];
            }
        } else {
            this[this.length] = item[i];
        }
    }
    return this;
};
/*console.log(Ary.myConcat(Ary1,[23,67,45],2,34,55));*/

//8
/*join("+") 将数组的元素以特定字符链接成一个字符串*/
Array.prototype.myJoin = function myJoin(chars) {
    chars += '';
    let length = this.length;
    let str = '';
    for (let i = 0; i < length; i++) {
        str += this[i] + chars;
        if (i >= length - 2) {
            str += this[i + 1];
            return str;
        }
    }
};
/*console.log(Ary.myJoin(''));
console.log(Ary.join(''));*/

//9
/*indexOf('a') + lastIndexOf('a') 索引位置*/
Array.prototype.myIndexOf = function myIndexOf(chars) {
    // let arg = new RegExp("/^"+chars+"$/img");
    let length = this.length;
    for (let i = 0; i < length - 1; i++) {
        if (this[i] === chars) {
            return i;
        }
    }
    if (this[length - 1] !== chars) {
        return -1;
    }
};
/*console.log(Ary.myIndexOf(NaN));
console.log(Ary.indexOf(NaN));*/

//10
Array.prototype.myLastIndexOf = function myLastIndexOf(chars) {
    // let arg = new RegExp("/^"+chars+"$/img");
    let length = this.length;
    for (let i = length - 1; i >= 0; i--) {
        if (this[i] === chars) {
            return i;
        }
    }
    if (this[0] !== chars) {
        return -1;
    }
};
/*console.log(Ary.myLastIndexOf('ab'));
console.log(Ary.lastIndexOf('ab'));*/

//11
/*reverse() 把数组倒过来；*/
Array.prototype.myReverse = function myReverse() {
    let newAry = [];
    let num = 0;
    for (let i = this.length - 1; i >= 0; i--) {
        newAry[num] = this[i];
        num++;
    }
    num = null;
    for (let i = 0; i < this.length; i++) {
        this[i] = newAry[i];
    }
    return newAry;
};
/*console.log(Ary.myReverse());
console.log(Ary1.reverse());*/

//12
/*sort() 数组排序
* 没有参数时：同位的字符按照Unicode编码升序排列
* 参数是函数：
* 其他:报错(Uncaught TypeError: The comparison function must be either a function or undefined)*/
Array.prototype.mySort = function (callback) {
    if (callback === undefined || callback instanceof Function) {
        //处理charCode函数
        //console.log(callback);
        function convertCharCode(a, b) {
            return String(a).charCodeAt(b);
        }

        //初始化callback
        callback = callback || function (a, b) {
            let currentComparingIndex = 0;
            do {
                if (convertCharCode(a, currentComparingIndex) != convertCharCode(b, currentComparingIndex) || isNaN(convertCharCode(a, currentComparingIndex)) || isNaN(convertCharCode(b, currentComparingIndex))) {
                    break
                }
            } while (currentComparingIndex++);
            if (isNaN(convertCharCode(a, currentComparingIndex))) {
                return false
            }
            if (isNaN(convertCharCode(b, currentComparingIndex))) {
                return true
            }
            return String(a).charCodeAt(currentComparingIndex) > String(b).charCodeAt(currentComparingIndex)
        };
        for (let i = 0; i < this.length - 1; i++) {
            for (let j = i + 1; j < this.length; j++) {
                if (callback(this[i], this[j]) > 0) {
                    [this[i], this[j]] = [this[j], this[i]];
                }
            }
        }
    } else {
        throw "TypeError: The comparison function must be either a function or undefined";
    }
};
/*Ary.sort();
console.log(Ary);
Ary1.mySort();
console.log(Ary1);*/

//13
/*map(f(value,index,ary){}) 映射、遍历数组；*/
Array.prototype.myMap = function (callback) {
    let newAry = [];
    if (callback instanceof Function) {
        for (let i = 0; i < this.length; i++) {
            newAry[i] = callback(this[i], i, this);
        }
    } else {
        throw "TypeError: " + callback + " is not a function\n" +
        "    at Array.myMap (<anonymous>)";
    }
    return newAry;
};
// console.log(Ary.map('g'));
// console.log(Ary1.myMap('g'));
/*console.log(Ary1.myMap(function (item, index, array) {
    return index;
}));*/

//14
/*forEach(f(value,index,ary){}) 映射、遍历数组；*/
Array.prototype.myForEach = function (callback) {
    if (callback instanceof Function) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    } else {
        throw "TypeError: " + callback + " is not a function\n" +
        "    at Array.myForEach (<anonymous>)";
    }
};
// Ary.forEach(3);
// Ary1.myForEach(3);
