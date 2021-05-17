function tamTinh() {
    subtotal = 0;
    for (i in JSON.parse(localStorage.getItem("cart"))) {
        for (a in product) {
            if (JSON.parse(localStorage.getItem("cart"))[i].id === product[a].id) {
                subtotal += eval(product[a].priceNum * JSON.parse(localStorage.getItem("cart"))[i].qty)
            }
        }
        for (b in drink) {
            if (JSON.parse(localStorage.getItem("cart"))[i].id === drink[b].id) {
                subtotal += eval(drink[b].priceNum * JSON.parse(localStorage.getItem("cart"))[i].qty)
            }
        }
    }

    document.getElementById("subtotal").innerText = `${subtotal} VND`;
    document.getElementById("tax").innerText = `${subtotal*0.1} VND`;
    document.getElementById("totalMoney").innerText = `${Math.floor(subtotal*1.1 + 30000)} VND`;
}

function deleteProduct(i) {
    gioHang[i].qty = 0;
    localStorage.setItem("cart", JSON.stringify(gioHang))
    document.getElementById("cart-page").innerHTML = `
    <table id="cart-page">
            <tr>
                <th>SẢN PHẨM</th>
                <th>SỐ LƯỢNG</th>
                <th>THÀNH TIỀN</th>
            </tr>
        </table>`;
    update()
    tamTinh()
    let newTotal = 0;
    JSON.parse(localStorage.getItem("cart")).forEach(p => newTotal += Number(p.qty));
    localStorage.setItem("total", JSON.stringify(newTotal))
    document.getElementById("cart").innerHTML = `<a class="act" href="./cart.html">GIỎ HÀNG | ${localStorage.getItem("total")}</a>`
}

function change() {
    document.getElementById("confirm").style.display = `none`;
    document.getElementById("book").style.display = `block`;
}

function booking() {
    localStorage.clear();
    alert("Cảm ơn bạn đã đặt hàng tại MindX FOOD, chúng tôi sẽ liên hệ tới bạn trong vài phút, chúc bạn một ngày tốt lành")
    location.reload();
}
///////////// GỌI BIẾN ///////////////////////////

///////////// MODIFY HTML ĐỒ ĂN //////////////////
let gioHang = JSON.parse(localStorage.getItem("cart"));

function update() {
    for (i in gioHang) {
        for (a in product) {
            if (gioHang[i].id === product[a].id && gioHang[i].qty > 0) {
                document.getElementById("cart-page").innerHTML +=
                    `<td>
                <div class="cart-info">
                <img src="${product[a].link}" />
                        <div class="cart-name">
                            <p>${product[a].food}</p>
                            <small>Giá: ${product[a].price}</small>
                            <div class="deleteProduct" id="deleteProduct" onclick="deleteProduct(${i})">Xóa sản phẩm</div>
                        </div>
                    </div>
                </td>
                <td class="soLuong">
                        <button id="minus" type="button" onclick="minus(${gioHang[i].id})">-</button>
                        <div class="value" id="value${a}">${Number(gioHang[i].qty)}</div>
                        <button id="plus" type="button" onclick="plus(${gioHang[i].id})">+</button>
                    </td>
                <td id="money${a}">${eval(product[a].priceNum * gioHang[i].qty)} VND</td>`
            }
        }
        for (b in drink) {
            if (gioHang[i].id === drink[b].id && gioHang[i].qty > 0) {
                document.getElementById("cart-page").innerHTML +=
                    `<td>
            <div class="cart-info">
            <img src="${drink[b].link}" />
                    <div class="cart-name">
                        <p>${drink[b].drink}</p>
                        <small>Giá: ${drink[b].price}</small>
                        <div class="deleteProduct" id="deleteProduct" onclick="deleteProduct(${i})">Xóa sản phẩm</div>
                    </div>
                </div>
            </td>
            <td class="soLuong">
                    <button id="minus" type="button" onclick="minus(${gioHang[i].id})">-</button>
                    <div class="value" id="value-${b}">${Number(gioHang[i].qty)}</div>
                    <button id="plus" type="button" onclick="plus(${gioHang[i].id})">+</button>
                </td>
                <td id="money-${b}">${eval(drink[b].priceNum * gioHang[i].qty)} VND</td>`
            }
        }
    }
}
////////////// LỆNH JS ////////////////
let subtotal;
update()
tamTinh();