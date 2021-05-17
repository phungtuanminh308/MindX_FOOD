let slider = "";
slider =
    `<div class="txt">
    <h1>${product[11].food}</h1>
    <p>${product[11].short}</p>
    <div class="nutrient">
        <div class="nutrient--info">
            <span>FAT</span>
            <span>${product[11].FAT}</span>
        </div>
        <div class="nutrient--info">
            <span>PRO</span>
            <span>${product[11].PRO}</span>
        </div>
        <div class="nutrient--info">
            <span>CAR</span>
            <span>${product[11].CAR}</span>
        </div>
        <div class="nutrient--info">
            <span>FIB</span>
            <span>${product[11].FIB}</span>
        </div>
    </div>
</div>
<img src=${product[11].img} style="width: 100%; height: 100%;" />`;
document.getElementById("myslider").innerHTML = slider;

let title = "";
let ingredient = "";
for (i in product[11].ingredient) {
    ingredient +=
        `<tr>
    <td>${Number(i)+1}. </td>
    <td>${product[11].ingredient[i]}</td>
    </tr>`
};
title =
    ` <div class="ingredient-title">⇩ CÁCH LÀM ${product[11].food} NGAY TẠI NHÀ ⇩</div>
<div class="ingredient-descript">${product[11].long[0]}</div>
<div>
    <div class="circle">
        <div>NGUYÊN<br>LIỆU</div>
    </div>
    <div class="ingredient-about">
        <table>
           ${ingredient}
        </table>
        <iframe src="https://www.youtube.com/embed/${product[11].code}?vq=hd1080&loop=1&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&fs=0&controls=0&disablekb=1" width="700" height="400" frameborder="0"></iframe>
    </div>
</div>`;
document.getElementById("title").innerHTML = title;

let how2Cook = "";
let technique = "";
for (i in product[11].how2cook) {
    technique +=
        `<tr>
    <td>BƯỚC ${Number(i) +1}</td>
    <td>${product[11].how2cook[i]}</td>
</tr>`
};
how2Cook =
    `<table>
${technique}
</table>
<div class="circle1">
<div>CHẾ<br>BIẾN</div>
</div>`;
document.getElementById("how2").innerHTML = how2Cook;
if (localStorage.getItem("total")) {
    document.getElementById("cart-pro").innerHTML = `<a class="act" href="../cart.html">GIỎ HÀNG | ${localStorage.getItem("total")}</a>`;
} else {
    document.getElementById("cart-pro").innerHTML = `<a class="act" href="../cart.html">GIỎ HÀNG | 0</a>`;
}