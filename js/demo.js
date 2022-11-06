export default {
  school: "ATGUIGU",
  change: function () {
    console.log("你是个SB");
  },
};

//引入fs模块
const fs = require("fs");

//读取
function readWY() {
  return new Promise((resolve, reject) => {
    fs.readFile("../Rabble.txt", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

//声明一个async函数
async function main() {
  let a = await readWY();
  console.log(a);
}
