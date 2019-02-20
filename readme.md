### 运行机制
首先Costmer是一个Generator函数（注意！！ Producer不是Generator函数）

- 向 ```Producer``` 传入一个 ``` Customer ```  
- ``` Producer ``` 制造产品，``` Costmer ``` 随即消费产品，并yield一个状态码给到 ``` Producer ```  
- ```Producer``` 接收到状态码，继续运行，打印出状态码
- 根据 ```Flag``` ，继续下一轮生产/停止生产



### 参考
- [Generator函数的异步应用](http://es6.ruanyifeng.com/?search=import&x=0&y=0#docs/generator-async)
- [Python协程版本生产者消费者模型](https://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000/001432090171191d05dae6e129940518d1d6cf6eeaaa969000)  
- [关于ES6 Generator is already running](https://oss.so/article/82)

### 其他
- Js冒泡排序
- Js快排
- Js二分查找
