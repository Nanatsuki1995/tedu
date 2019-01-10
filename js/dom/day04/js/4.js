var form = document.forms[0]
var txtName = form.username
var txtPwd = form.pwd
txtName.onfocus = getFocus
txtPwd.onfocus = getFocus
function getFocus() {
    this.className = "txt_focus"
    var div = this.parentNode.nextElementSibling.firstElementChild
    div.className = ""
}
txtName.onblur = function () {
    vali(this,/^\w{1,10}$/)
}
function vali(txt,reg) {
    txt.className = ""
    var div = txt.parentNode.nextElementSibling.firstElementChild
    if (reg.test(txt.value)) {
        div.className = "vali_success"
        return true
    } else {
        div.className = "vali_fail"
        return false
    }
}
txtPwd.onblur = function () {
    vali(this,/^\d{6}$/)
}