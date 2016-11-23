/**
 * Created by yujuan on 2016/11/1.
 */
function Stack() {//先进后出
    var items = [];
    //添加元素
    this.push = function(element){
        items.push(element);
    };
    //删除元素
    this.pop = function(){
        return  items.pop();
    };
    //返回栈顶元素
    this.peek = function(){
        return items[items.length-1];
    };
    //判断栈里面是否有元素，没有返回true，否则false
    this.isEmpty = function(){
        return items.length == 0;
    };
    //返回栈里的元素个数
    this.size = function(){
        return items.length;
    };
    //移除栈里的所有元素
    this.clear = function(){
        items = [];
    };
    //检查栈里的内容并输出到控制台
    this.print = function(){
        console.log(items.toString());
    }
}

//下面是一个经典的使用Stack类例子
//十进制转成任意进制
function baseConvert(decNumber,base){
    var remStack = new Stack(),
        rem,
        baseString = "",
        digits = "0123456788ABCDEF";
    while (decNumber > 0){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
        while (!remStack.isEmpty()){
           baseString += digits[remStack.pop()];
        }
    }
    return baseString;
}
//测试十进制转任意进制
console.log(baseConvert(100345,2));
console.log(baseConvert(100345,8));
console.log(baseConvert(100345,16));
