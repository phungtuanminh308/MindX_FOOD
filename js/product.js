// MODIFY ĐỒ ĂN
let contentEat = '';
for (i in product) {
    contentEat +=
        `<div class="card">
        <a href="./product/product${i}.html">
            <div class="image">
                <img src="${product[i].link}" />
            </div>
            </a>
            <div class="title">
                ${product[i].food}
            </div>
            <div class="text">Giá: ${product[i].price}</div>
            <div class="buy">
                <button class="insert" onclick="plus(${i})">THÊM VÀO GIỎ HÀNG</button>
            </div>
        </div>`;
}
document.getElementById('product-eat').innerHTML = contentEat;

// MODIFY ĐỒ UỐNG
let contentDrink = '';
for (i in drink) {
    contentDrink +=
        `<div class="card">
            <div class="image">
                <img src="${drink[i].link}" />
            </div>
            <div class="title">
                ${drink[i].drink}
            </div>
            <div class="text">Giá: ${drink[i].price}</div>
            <div class="buy">
                <button class="insert" onclick="plus(${Number(i)+15})">THÊM VÀO GIỎ HÀNG</button>
            </div>
        </div>`;
}
document.getElementById('product-drink').innerHTML = contentDrink;