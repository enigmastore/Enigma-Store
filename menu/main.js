let carts =document.querySelectorAll('.btn1')
let items =
[
    {
        name: 'Cappuccino',
        tag: 'A strong shot of itallian styled espresso,event out with foamed milk',
        price:   150,
         inCart:0
    },
    {
        name: 'Esame Coffee',
        tag: 'Rich and creamy cold coffee with the scop of ice cream anddrenched with choclate sauce',
        price:   200,
         inCart:0
    },
    {
        name: 'French Fries',
        tag: 'Made With Best American Potatoes ,Served With Love',
        price:   70,
         inCart:0
    },
    {
        name: 'Croissant',
        tag: 'give a fresh start to a day with special croissant',
        price:   95,
         inCart:0
    },
    {
        name: 'Falooda',
        tag: 'with good quality fruits',
        price:   75,
         inCart:0
    },
    {
        name: 'Lassi',
        tag: 'taste of punjab is here',
        price:   40,
         inCart:0
    },
    {
        name: 'Hot Coffee',
        tag: 'coffee which can start your day',
        price:   40,
         inCart:0
    },
    {
        name: 'Black Coffee',
        tag: 'black coffee with two shots of espresso that open yor eyes',
        price:   50,
         inCart:0
    },
    {
        name: 'Cappuccino',
        tag: 'a strong shot of itallian styled espresso,event out with foamed milk',
        price:   150,
         inCart:0
    },
    {
        name: 'Latte',
        tag: 'rich espresso with steamed milk to refresh your soul',
        price:   180,
         inCart:0
    },
    {
        name: 'Cold Coffee',
        tag: 'rich and creamy cold coffee drenched with chocolate syrup',
        price:   50,
         inCart:0
    },
    {
        name: 'Cold Coffee Crush',
        tag: 'rich and creamy cold coffee with the scop of ice cream anddrenched with choclate sauce',
        price:   70,
         inCart:0
    },
    {
        name: 'Moccha',
        tag: 'hot coffee make with the right blend of espresso,hot milk and rich choclate sauce',
        price:   150,
         inCart:0
    },
    {
        name: 'Esame Coffee',
        tag: 'special coffee for your exam preparation',
        price:   200,
         inCart:0
    },
    {
        name: 'Veg Pizza',
        tag: 'Capsicum, Tomato, Paneer, Onion, Mozeralla Cheese',
        price:   150,
         inCart:0
    },
    {
        name: 'French Fries',
        tag: 'Made with best american Potatoes',
        price:   70,
         inCart:0
    },
    {
        name: 'Aloo Tikki Burger',
        tag: 'Alloo Patty, Cheese, Tomato, Onion',
        price:   130,
         inCart:0
    },
    {
        name: 'Maggi Masala',
        tag: '10 min Hot maggi',
        price:   40,
         inCart:0
    },
    {
        name: 'Croissant',
        tag: 'Give a fresh start to the day with croissant',
        price:   95,
         inCart:0
    },
    {
        name: 'Brownie',
        tag: 'Centre piece=Edge Piece',
        price:   130,
         inCart:0
    },
    {
        name: 'Falooda',
        tag: 'Made with real katri and sewai with good quality fruits',
        price:   75,
         inCart:0
    },
    {
        name: 'Fruit Juice',
        tag: 'Strawberry, Apple, Pienapple, Mixed Fruit',
        price:   60,
         inCart:0
    },
    {
        name: 'Soft drink',
        tag: 'Coke, Sprite, Fanta',
        price:   25,
         inCart:0
    },
    {
        name: 'Iced Tea',
        tag: 'Refreshing lemon flavoured iced tea',
        price:   35,
         inCart:0
    },
    {
        name: 'Special Ginger Tea',
        tag: 'Bihar wali chai',
        price:   25,
         inCart:0
    },
    {
        name: 'Lassi',
        tag: 'Taste of Punjab is here',
        price:   40,
         inCart:0
    }
];
for(let i=0;i<carts.length;i++)
{
    //console.log("no. of add to cart buttons")
    carts[i].addEventListener('click' , ()=>
    {
        cartnumbers(items[i]);
        totalCost(items[i])
    })
}
function cartnumbers(items) 
{
    var itemnumbers =localStorage.getItem('cartnumbers')
    
    itemnumbers=parseInt(itemnumbers)//convert to integer

    if( itemnumbers )
    {
        localStorage.setItem('cartnumbers', itemnumbers + 1);
    }
    else
    {
        localStorage.setItem('cartnumbers',1);
        document.querySelector
    }
    setItem(items)
}
function setItem(items)
{
    var cartItems = localStorage.getItem('itemsincart')
    cartItems=JSON.parse(cartItems)
    console.log("My cartItems are",cartItems)
    if(cartItems!=null)
    {
        if(cartItems[items.tag]==undefined)
        {
            cartItems=
            {
                ...cartItems,
                [items.tag]:items
            }
        }
        cartItems[items.tag].inCart += 1;
    }
    else
    {
        items.inCart=1
        cartItems=
        {
            [items.tag]:items
        }
    }

    localStorage.setItem("itemsincart", JSON.stringify(cartItems));
}

function totalCost(items) {
    console.log("The product price is", items.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

     if(cartCost != null){
        cartCost = parseInt(cartCost)   
        localStorage.setItem("totalCost", cartCost + items.price);
     }

     else {
        localStorage.setItem("totalCost", items.price);
     }
    
}
