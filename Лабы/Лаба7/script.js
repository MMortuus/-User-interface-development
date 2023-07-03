
function cost()
{
    var lang = form1.sel.value;
    var repamo1 = form1.repamo.value;
    var och = 2;
    var dist = 2;
    if (form1.repform1.checked)
    {
        och = 5;
    }
    if (form1.repform2.checked) 
    {
        dist = 7;
    }
    form1.res.value = lang * repamo1 * och * dist;
    console.log(repamo1);
    console.log(lang, repamo1, och, dist);
}