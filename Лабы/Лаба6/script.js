let line = document.getElementById('line')
function line_move(touch)
{
    if (touch == 1)
    {
        document.getElementsByClassName('line_pos')[0].style= "justify-content: left;";;
    }
    else if (touch == 2)
    {
        document.getElementsByClassName('line_pos')[0].style= "justify-content: center;";
    }
    else
    {
        document.getElementsByClassName('line_pos')[0].style= "justify-content: right;";
    }
}
function line_size(touch)
{
    if (touch == 1)
    {
        document.getElementsByClassName('line')[0].style= "border-bottom: 1px solid black;";;
    }
    else if (touch == 2)
    {
        document.getElementsByClassName('line')[0].style= "border-bottom: 3px solid black;";
    }
    else
    {
        document.getElementsByClassName('line')[0].style= "border-bottom: 5px solid black;";
    }
}
function txt()
{
    let age = document.getElementById('in1').value;
    let otvet1 = document.getElementById('otv1');
    otvet1.textContent = age;
}
function txt1()
{
    let fio = document.getElementById('in2').value;
    let otvet2 = document.getElementById('otv2');
    otvet2.innerHTML = fio;
}