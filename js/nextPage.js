// var num = 0x1f
// console.log('我\n是谁？' + Number.MAX_VALUE)
// console.log('我是谁？' + Number.MIN_VALUE)
// var str = 'nnnnmmmm'
// console.log('我是谁？' + str.length)

/* var sum = 0, str = "", b = 0;
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var arr1 = []
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            b = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = b
        }
    }
} */

/* function getSum(arr2) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += i
    }
    return sum
} */

/* function people(name, age, sex) {
    this.name = name;
    this.age = age
    this.sex = sex;
    this.ff = function (dz) {
        console.log(dz);
    }
}
var a = new people('zs', 18, '666')
var b = new people('ls', 20, '6666')
for (var i in a) {
    console.log(a[i]);
} */

//发布留言功能
var btn_publish = document.getElementById("publish");
var discuss_txt = document.getElementById("text1");
var discuss_ul = document.getElementById("discuss_ul");
btn_publish.onclick = function () {
  var text = discuss_txt.value;
  if (text.length > 0) {
    var li = document.createElement("li");
    li.innerHTML = text;
    discuss_ul.insertBefore(li, discuss_ul.children[0]);
  } else {
    alert("输入框不能为空");
  }
};

//练习
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

console.log(getRandomIntInclusive(0, 20));
var now = new Date();
console.log(new Date().getTime());
console.log(
  now.getHours() +
    "年" +
    (now.getMinutes() + 1) +
    "月" +
    now.getSeconds() +
    "日"
);

var arr = [1, 2, 3, 5, 6, 2];
console.log(arr.join("-"));
// 在原基础上添加新类名
// var bid = document.querySelectorAll('p')
// bid[0].onclick = function () {
//     bid[0].className = bid[0].className + ' change'
// }
// console.log(bid);
console.log(document.body);
console.log(document.documentElement);
// console.dir(bid)

var img1 = document.getElementById("btn1");
var img2 = document.getElementById("btn2");
var img = document.querySelector("img");
img1.onclick = function () {
  img.src = "images/图层152.png";
  img.title = "图片1";
};
img2.onclick = function () {
  img.src = "images/图层155.png";
  img.title = "图片2";
};
// 根据时间更换图片
/* if (now.getHours() >= 18) {
    function xiawu() {
        img.src = 'images/图层155.png'
        img.title = '图片2'
    }
    xiawu();
} else {
    function xiawu() {
        img.src = 'images/图层152.png'
        img.title = '图片1'
    }
    xiawu();
} */
//账号登录
var user_name = document.getElementById("inp_name");
var user_pas = document.getElementById("inp_pas");
var show_pas = document.getElementById("btn3");
var password_tis = document.getElementById("password_tis");
user_name.onfocus = function () {
  if (this.value == "请输入用户名") {
    this.value = "";
  }
  this.style.backgroundColor = "purple";
};
user_name.onblur = function () {
  if (this.value == "") {
    this.value = "请输入用户名";
  }
  // this.style.backgroundColor = 'purple'
};
user_pas.onfocus = function () {
  var txt = this.value;
  if (txt == "请输入1~8位密码") {
    this.value = "";
    this.type = "password";
  }
};
user_pas.onblur = function () {
  var txt = this.value;
  console.log(txt.length);
  if (txt.length == 0 || txt.length > 8) {
    password_tis.style.color = "red";
  } else {
    password_tis.style.color = "#666";
  }
};
show_pas.onclick = function () {
  if (user_pas.type == "password") {
    user_pas.type = "text";
  } else {
    user_pas.type = "password";
  }
};

var ul_nm = document.querySelector("ul");
var li_nm = ul_nm.querySelectorAll("li");
for (var i = 0; i < li_nm.length; i++) {
  li_nm[i].onmouseover = function () {
    this.style.backgroundColor = "red";
  };
  li_nm[i].onmouseout = function () {
    this.style.backgroundColor = "";
  };
}

//事件委托ul
var nm = document.querySelector(".nm");
nm.addEventListener("click", function (e) {
  //e.target可以得到我们当前点击的对象
  e.target.style.backgroundColor = "pink";
});

//阻止右键弹出菜单
/* document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}) */
//禁止鼠标选中
/* document.addEventListener('selectstart', function (e) {
    e.preventDefault();
}) */

//图片跟随鼠标移动
//其中img要加定位position: absolute;
/* var shubiao_icon = document.querySelector('.shubiao');
document.addEventListener('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;
    //要加px单位
    shubiao_icon.style.left = x + 'px'
    shubiao_icon.style.top = y + 'px'
}) */

/* 常用按键事件 */
// 1. 当按键松开时触发
document.onkeyup = function (e) {
  console.log("我弹起来了");
  console.log(typeof e.key);
  if (e.key == "a") {
    user_name.focus();
  }
};
// 2. 当按键按下时触发
document.onkeydown = function (e) {
  console.log("我按下了");
};

/* 窗口加载事件 */
//1.传统注册方式
// window.onload = function () { }
// 2.推荐方式
// window.addEventListener("load", function () { })
//3.当需要加载图片较多的情形
// window.addEventListener('DOMContentLoaded', function () { })

/* 调整窗口大小事件 */
//1. 传统注册方式
// window.onresize = function () { }
// 2.推荐方式
// window.addEventListener("resize", function () { })

/* 定时器setTimeout */
// var time1 = setTimeout(function () { alert('两秒到了') }, 2000)

/* 定时器setInterval */
// var time2 = setInterval(function () { alert('两秒到了') }, 2000)

/* 倒计时 */
var djs = document.querySelector(".djs");
var djs_time = 10,
  time3 = null;
time3 = setInterval(function () {
  djs.children[0].innerHTML = parseInt((djs_time / 60 / 60) % 24);
  djs.children[1].innerHTML = parseInt((djs_time / 60) % 60);
  djs.children[2].innerHTML = parseInt(djs_time % 60);
  djs_time--;
  if (djs_time < 0) {
    clearInterval(time3);
  }
}, 1000);

console.log(djs.children);

/* 拟态框 */
var btn_ntk = document.querySelector(".btn_ntk");
var nitaikuang = document.querySelector(".nitaikuang");
var zhezhaoceng = document.querySelector(".zhezhaoceng");
btn_ntk.addEventListener("click", function () {
  nitaikuang.style.display = "block";
  zhezhaoceng.style.display = "block";
});
nitaikuang.children[0].addEventListener("mousedown", function (e) {
  var x = e.pageX - nitaikuang.offsetLeft;
  var y = e.pageY - nitaikuang.offsetTop;
  console.log("x:" + x + ";y:" + y);
  document.addEventListener("mousemove", move);
  function move(e) {
    nitaikuang.style.left = e.pageX - x + "px";
    nitaikuang.style.top = e.pageY - y + "px";
  }
  document.addEventListener("mouseup", function (e) {
    document.removeEventListener("mousemove", move);
  });
});

/* jquery */

/* js高级 */
class Father {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sum();
  }
  sum() {
    console.log(this.x);
  }
}
class Son extends Father {
  constructor(x, y) {
    super(x, y); //调用父类的构造函数或者普通函数
  }
}
let son = new Son(1, 2);
// son.sum();
