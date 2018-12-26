// 导入另一个js模块中的成员
import {getCompanyName} from './util'
// 导入另两个css模块文件
import '../css/base.css'
import '../css/page.css'
// 创建一个div元素
var d = document.createElement('div')
// 设置div元素内部的文字
d.innerHTML = '版权所有：'+getCompanyName()
// 修改div元素的class
d.className = 'box'

// 把div元素追加为body的孩子
document.body.appendChild(d)
