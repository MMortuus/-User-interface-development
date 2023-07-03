function newimg(action) 
{
    if (action == 1) 
    {
        result.src = "images/pasta.jpg";
    }
    else if (action == 2) 
    {
        result.src = "images/pizza.jpg";
    }
    else 
    {
        result.src = "images/lasagna.jpg";
    }
}
var image = document.getElementById('image'),
    image2 = document.getElementById('image2'),
    image3 = document.getElementById('image3');
var arrow = document.getElementById('arrow')
    arrow2 = document.getElementById('arrow2'),
    arrow3 = document.getElementById('arrow3');
image.onmouseover = function(){
    arrow.style.opacity = '1';
}
image.onmouseout = function(){
    arrow.style.opacity = '0';
}
image2.onmouseover = function(){
    arrow2.style.opacity = '1';
}
image2.onmouseout = function(){
    arrow2.style.opacity = '0';
}
image3.onmouseover = function(){
    arrow3.style.opacity = '1';
}
image3.onmouseout = function(){
    arrow3.style.opacity = '0';
}