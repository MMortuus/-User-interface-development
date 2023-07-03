var arr = new Array(5);
function input()
{
    for(i=0;i<5;i++)
    {
        arr[i] = +prompt(`Введите Array[${i}]: `);
    }
}
function f()
{
    let i, m, k;
    let res = document.getElementById('t1');
    let res1 = document.getElementById('t2');
    m = arr[0];
    for(i=0;i<5;i++)
    {
        if (arr[i] > m)
        {
            m = arr[i];
            k = 1;
            console.log(m,k);
        }
        else if (arr[i] == m)
        {
            console.log(m,k);
            k++;
        }
        console.log(arr[i]);
    }
    res.textContent = m;
    res1.textContent = k;
}
function treug(obj)
{
    var ta = Number(obj.a.value),
    tb = Number(obj.b.value),
    tc = Number(obj.c.value);
    var resultat;
    if ((ta + tb) > tc && (ta + tc) > tb && (tc + tb) > ta)
    {
        obj.resultat.value = "Треугольник существует";
    }
    else
    {
        obj.resultat.value = "Треугольник не существует";
    }
}