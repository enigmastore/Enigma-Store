var removeitems =document.getElementsByClassName("btn-area")
console.log(removeitems)
for(var i=0; i< removeitems.length; i++)
{
    var button=removeitems[i]
    button.addEventListener('click',function(event)
    {
        var buttonclicked= event.target
        buttonclicked.parentElement.parentElement.remove()
        updatetotalprice()
    }
    )
}
function updatetotalprice()
{
    var cartitemcontainer =document.getElementsByClassName('cart-items')[0]
    var cartrows =cartitemcontainer.getElementsByClassName('cart-row')[0]
    var box =cartrows.getElementsByClassName('box')[0]
    for(var i=0;i<cartrows.length;i++)
    {
        var cartRow = box.lenght[i]
        var priceelement=cartRow.getElementsByClassName('price')
    }
}
