/**
 * Created by yujuan on 2016/11/1.
 */
function Queue() {//先进先出
    var items = [];
    //添加元素
    this.enqueue = function(element){
        items.push(element);
    };
    //删除元素
    this.dequeue = function(){
        return items.shift();
    };
    //返回队顶元素
    this.front = function(){
        return items[0];
    };
    //判断队列里面是否有元素，没有返回true，否则false
    this.isEmpty = function(){
        return items.length == 0;
    };
    //返回队列里的元素个数
    this.size = function(){
        return items.length;
    };
    //移除队列里的所有元素
    this.clear = function(){
        items = [];
    };
    //检查队列里的内容并输出到控制台
    this.print = function(){
        console.log(items);
        console.log(items.toString());
    };
}

//看一个例子优先队列
function PriorityQueue() {
    var items = [];
   function QueueElement (element,priority) {
        this.element = element;
        this.priority = priority;
    };
    this.enqueue = function(element, priority){
        var queueElement = new QueueElement(element, priority);
        if(this.isEmpty()){
            items.push(queueElement);
        } else{
            var added = false;
            for(var i=0; i<items.length; i++){
                if(queueElement.priority < items[i].priority){
                    items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            };
            if(!added){
                items.push(queueElement);
            }
        }
    };
    Queue.call(this);
};
//测试上面的例子
var priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John",2);
priorityQueue.enqueue("Jack",1);
priorityQueue.enqueue("Camila",1);
priorityQueue.print();
