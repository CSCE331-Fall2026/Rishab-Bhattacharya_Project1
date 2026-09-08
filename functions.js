var num = 0;
function button1()
{
num++;
document.getElementById('output').innerHTML = num;
}
function light_mode()
{
document.getElementById('page_style').setAttribute("href", "light.css");
}
function dark_mode()
{
document.getElementById('page_style').setAttribute("href", "dark.css");
}
