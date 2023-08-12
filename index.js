// Bài 1
var luongTag = document.getElementById("nhapLuong");
var ngayTag = document.getElementById("ngayLam");

function tinhLuong() {
  var luongValue = luongTag.value;
  var ngayValue = ngayTag.value;
  var result = luongValue * ngayValue;
  console.log("♣ ~ tinhLuong ~ result:", result);
}

// Bài 2
var so_1 = document.getElementById("number_1");
var so_2 = document.getElementById("number_2");
var so_3 = document.getElementById("number_3");
var so_4 = document.getElementById("number_4");
var so_5 = document.getElementById("number_5");

function trungBinh() {
  var tag1 = so_1.value;
  var tag2 = so_2.value;
  var tag3 = so_3.value;
  var tag4 = so_4.value;
  var tag5 = so_5.value;
  var tong = tag1 + tag2 + tag3 + tag4 + tag5;
  var result_2 = tong / 5;
  console.log("♣ ~ trung binh:", result_2);
}

// Bài 3
var usd = document.getElementById("money");

function moneyClick() {
  var usdTag = usd.value;
  var result_3 = usdTag * 23500;
  console.log("♣ ~ click ~ result_3: ", result_3);
}

//Bài 4
var cd = document.getElementById("chieuDai");
var cr = document.getElementById("chieuRong");

function ketQua() {
  var cdTag = cd.value;
  var crTag = cr.value;
  var dienTich = cdTag * crTag;
  var chuVi = (cdTag + crTag) * 2;
  console.log("♣ ~ ketQua ~ dienTich:", dienTich);
  console.log("♣ ~ ketQua ~ chuVi:", chuVi);
}

//Bài 5
var haiSo = document.getElementById("kySo");

function chuSo() {
  var soTag = haiSo.value;
  //hàng chục
  var hangChuc = Math.floor((soTag % 100) / 10);
  //hàng đơn vị
  var donVi = soTag % 10;
  var result_5 = hangChuc + donVi;
  console.log("♣ ~ chuSo ~ result_5:", result_5);
}
