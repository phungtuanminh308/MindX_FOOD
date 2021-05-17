if (localStorage.getItem("total")) {
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | ${localStorage.getItem("total")}</a>`;
} else {
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | 0</a>`;
}


function plus(id) {

    let newCarts = JSON.parse(localStorage.getItem("cart"));

    if (!newCarts) {
        newCarts = [];
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("total", 0)
    }

    //add
    if (!newCarts.find(p => p.id === id)) {
        newCarts.push({
            id: id,
            qty: 1,
        })
    } else {
        newCarts.forEach(p => {
            if (p.id === id) {
                p.qty = Number(p.qty) + 1;
            }
        });
    }
    let newTotal = 0;
    newCarts.forEach(p => newTotal += Number(p.qty));

    localStorage.setItem("cart", JSON.stringify(newCarts))
    localStorage.setItem("total", JSON.stringify(newTotal))
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | ${newTotal}</a>`;
    for (i in JSON.parse(localStorage.getItem("cart"))) {
        for (a in product) {
            if (JSON.parse(localStorage.getItem("cart"))[i].id === product[a].id) {
                document.getElementById(`value${a}`).innerText = `${Number(JSON.parse(localStorage.getItem("cart"))[i].qty)}`
                document.getElementById(`money${a}`).innerText = `${eval(product[a].priceNum * JSON.parse(localStorage.getItem("cart"))[i].qty)} VND`
            }
        }
        for (b in drink) {
            if (JSON.parse(localStorage.getItem("cart"))[i].id === drink[b].id) {
                document.getElementById(`value-${b}`).innerText = `${Number(JSON.parse(localStorage.getItem("cart"))[i].qty)}`
                document.getElementById(`money-${b}`).innerText = `${eval(drink[b].priceNum * JSON.parse(localStorage.getItem("cart"))[i].qty)} VND`
            }
        }
    }
    tamTinh()
}

function minus(id) {

    let newCarts = JSON.parse(localStorage.getItem("cart"));

    if (!newCarts) {
        newCarts = [];
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("total", 0)
    }
    newCarts.forEach(p => {
        if (p.id === id && p.qty >= 2) {
            p.qty = Number(p.qty) - 1;
        }
    });
    let newTotal = 0;
    newCarts.forEach(p => newTotal += Number(p.qty));

    localStorage.setItem("cart", JSON.stringify(newCarts))
    localStorage.setItem("total", JSON.stringify(newTotal))
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | ${newTotal}</a>`;
    for (i in JSON.parse(localStorage.getItem("cart"))) {
        for (a in product) {
            if (JSON.parse(localStorage.getItem("cart"))[i].id === product[a].id) {
                document.getElementById(`value${a}`).innerText = `${Number(JSON.parse(localStorage.getItem("cart"))[i].qty)}`
                document.getElementById(`money${a}`).innerText = `${eval(product[a].priceNum * JSON.parse(localStorage.getItem("cart"))[i].qty)} VND`
            }
        }
        for (b in drink) {
            if (JSON.parse(localStorage.getItem("cart"))[i].id === drink[b].id) {
                document.getElementById(`value-${b}`).innerText = `${Number(JSON.parse(localStorage.getItem("cart"))[i].qty)}`
                document.getElementById(`money-${b}`).innerText = `${eval(drink[b].priceNum * JSON.parse(localStorage.getItem("cart"))[i].qty)} VND`
            }
        }
    }
    tamTinh()
}