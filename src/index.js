import './style.css'
import './style.less'

//导入图片
import img from "./img/01.jpg"

//引入jq模块
import jquery from "./utils/jquery"

//导入错误模块
import error from "./error"
//运行错误代码，检查错误追踪
// error();


var element = document.createElement("div");
element.innerHTML =  `<div class="red">hello webpack</div>
<div class="blue">hello webpack and less</div>
<img src="${img}"/>`;

document.body.appendChild(element);