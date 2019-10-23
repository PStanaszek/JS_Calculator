var str = "";
document.addEventListener('click', function (event) {
	if (!event.target.matches('button')) return;
	event.preventDefault();
    console.log(event.target.value);
    str = str + event.target.value;
    console.log(str);
    console.log(eval(str));
    screen.textContent = str;
    console.log('dispal' + screen.textContent);

}, false);

let screen = document.querySelector(".display-screen");

