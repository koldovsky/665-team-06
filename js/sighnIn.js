const div = document.createElement('div');
const log = document.createElement('div');
const reg = document.createElement('div');
const loginForm = document.createElement('form');
const registerForm = document.createElement('form');


document.body.style.color = '#fff';
document.body.style.textTransform = 'capitalize';
document.body.style.backgroundImage = "url(img/header/slider/produce-leather-crafties.png)";
document.body.style.backgroundSize = "120% 150%";


div.style.background = "rgba(0,0,0,0.7)";
div.style.width = '300px';
div.style.margin = '50px auto';
div.style.padding = '10px';
div.style.borderRadius = '10px';

log.style.width = "calc(50% - (5px * 2))";
log.style.padding = "5px";
log.style.textAlign = "center";
log.style.display = 'inline-block';
log.style.color = '#fff';
log.style.cursor = 'pointer';
log.id = 'login';
log.innerHTML = 'login';

reg.style.width = "calc(50% - (5px * 2))";
reg.style.padding = "5px";
reg.style.textAlign = "center";
reg.style.display = 'inline-block';
reg.style.color = '#888';
reg.style.cursor = 'pointer';
reg.id = 'register';
reg.innerHTML = 'register';



reg.onclick = function () {
    this.style.color = '#fff';
    log.style.color = '#888';
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
};


log.onclick = function () {
    this.style.color = '#fff';
    reg.style.color = '#888';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
};


const inputStyles = "background:none;border-color:#888;border-width:0 0 1px 0;width:100%;color:#fff;padding:5px;margin:5px;";
const btnStyles = "background:red;border:none;width:100%;color:#fff;padding:5px;margin:5px;";
const forgetStyles = "color:#fff;";
const startYears = 10;
const endYears = 70;
let i;


loginForm.style.margin = '50px 20px 20px 20px';
loginForm.id = 'loginForm';


loginForm.innerHTML = "<label>username</label><br/>" +
    "<input type='text' placeholder='type username' style='" + inputStyles + "' /><br/>" +
    "<label>password</label><br/>" +
    "<input type='password' placeholder='*************' style='" + inputStyles + "' /><br/>" +
    "<input type='submit' value='Login' style='" + btnStyles + "' />" +
    "<p><a style='" + forgetStyles + "' href='#'>forget password ?</a></p><br/>";


registerForm.style.margin = '50px 20px 20px 20px';
registerForm.style.display = 'none';
registerForm.id = 'registerForm';


registerForm.innerHTML = "<label>first name</label><br/>" +
    "<input type='text' placeholder='first name' style='" + inputStyles + "' /><br/>" +
    "<label>last name</label><br/>" +
    "<input type='text' placeholder='last name' style='" + inputStyles + "' /><br/>" +
    "<label>e-mail</label><br/>" +
    "<input type='email' placeholder='your email' style='" + inputStyles + "' /><br/>" +
    "<label>password</label><br/>" +
    "<input type='password' placeholder='*************' style='" + inputStyles + "' /><br/>" +
    "<label>confirm password</label><br/>" +
    "<input type='password' placeholder='*************' style='" + inputStyles + "' /><br/>" +
    "<input type='submit' value='Register' style='" + btnStyles + "' />";


div.appendChild(log);
div.appendChild(reg);
div.appendChild(loginForm);
div.appendChild(registerForm);


document.body.appendChild(div);
