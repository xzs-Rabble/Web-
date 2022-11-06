// let that;
class Tab {
  constructor(id) {
    // that = this;
    //获取元素
    this.main = document.querySelector(id);
    this.add = this.main.querySelector(".tabadd");
    //li的父元素
    this.ul = this.main.querySelector(".firstnav ul");
    //section的父元素
    this.section = this.main.querySelector(".tabscon");
    console.log(this.ul);
    this.init();
  }
  init() {
    this.updateNode();
    // init 初始化操作让相关的元素绑定事件
    this.add.onclick = this.addTab.bind(this.add, this);
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
      this.removes[i].onclick = this.removeTab.bind(this.removes[i], this);
      this.spans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
      console.log(this.lis[i].onclick);
    }
    console.log(this.lis);
  }

  // 因为我们动态添加元素 需要从新获取对应的元素
  updateNode() {
    this.lis = this.main.querySelectorAll("li");
    this.sections = this.main.querySelectorAll("section");
    this.removes = this.main.querySelectorAll(".icon-guanbi");
    this.spans = this.main.querySelectorAll(".firstnav li span:first-child");
  }
  // 1. 切换功能
  toggleTab(that) {
    that.cleraClass();
    this.className = "liactive";
    that.sections[this.index].className = "conactive";
  }
  //清除操作
  cleraClass() {
    for (var i = 0; i < this.lis.length; i++) {
      this.lis[i].className = "";
      this.sections[i].className = "";
    }
  }
  // 2. 添加功能
  addTab(that) {
    console.log("add");
    //（1）创建li元素和section元素
    let li =
      "<li><span>新元素" +
      (that.lis.length + 1) +
      '</span><span class="iconfont icon-guanbi"></span></li>';
    let section =
      "<section>新元素的内容" + (that.lis.length + 1) + "</section>";
    //（2）把这两个元素添加到相应的父元素里面去
    that.ul.insertAdjacentHTML("beforeend", li);
    that.section.insertAdjacentHTML("beforeend", section);
    that.init();
  }

  // 3. 删除功能
  removeTab(that, e) {
    // console.log(e);
    e.stopPropagation(); //阻止冒泡
    let index = this.parentNode.index;
    //根据对应索引号删除对应的li和section  remove方法可以直接删除指定元素
    that.lis[index].remove();
    that.sections[index].remove();
    that.init();
  }

  // 4. 修改功能
  editTab() {
    let str = this.innerText;
    //双击禁止选定文字
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();

    //生成文本框
    this.innerHTML = '<input type="text" value="' + str + '" />';
    let input = this.children[0];
    input.select();
    //离开文本框就把文本框里面的值给span
    input.onblur = function () {
      this.parentNode.innerHTML = this.value;
    };
    //按下回车也可以把文本框里面的值给span
    input.onkeyup = function (e) {
      if (e.key == "Enter") {
        //手动调用表单失去焦点事件 不需要鼠标离开操作
        this.blur();
      }
    };
  }
}
new Tab("#tab");

/* ES5新增方法 */
//利用apply求最大值
var arr = [2, 5, 3, 5, 4];
console.log(Math.max.apply(null, arr));

//迭代遍历方法：forEach()、map()、filter()、some()、every()
var newArr = arr.filter(function (value, index) {
  return index > 2;
});
console.log(newArr);

/* 正则表达式 */
// 1. 利用RegExp对象来创建   //中间放的是正则字面量
let regexp = new RegExp(/123/);
console.log(regexp);
// 2. 通过字面量创建
let reg = /123/;
//字符类——多选一
let rg1 = /^[abc]$/; //三选一，只有是a、或b、或c才返回true
let rg2 = /^[a-z]$/; //26个英文字母任何一个字母返回true
let rg3 = /^[a-zA-Z0-9]$/; //26个英文字母（含大小写）任何一个字母返回true

/* ES6 */
//let关键字
/* 在一个大括号{}中，使用let关键字
声明的变量才具有块级作用域
var关键字是不具备这个特点的 */
// if (true) {
//   let num = 100;
//   var abc = 200;
// }
// console.log(abc); //可以输出
// console.log(num); //报错

/* 没有变量提升 */
// console.log(num);  //报错，num变量没有定义
// let num = 20;

/* 暂时性死区 */
// var num = 100;
// if(true){
//   console.log(num);  //报错，num变量没有定义
//   let num = 20;
// }

/* 数组解构 */
// let ary = [1, 2, 3];
// let [a, b, c] = ary;
// console.log(a);
// console.log(b);
// console.log(c);

/* 箭头函数 */
// function sum(num1, num2) {
//   return num1 + num2;
// }
// const sum = n => n;
// const set = new Set([1, 2, 3, 4, 4]);
console.log(2 ** 10);
const a = {
  name: "666",
};
const b = {
  name1: "6666",
};
const temp = { ...a, ...b };
console.log(temp);
