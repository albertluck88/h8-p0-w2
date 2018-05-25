/*
logic
init = customer1
limit = customer5
iteration / counter = 1
start loop
  customer 1
    dihitung total belanjaan
    customer1 membayar
    init = init + counter
    apakah ini customer limit (cutomer 5)? false / salah
  customer 2
  dihitung total belanjaan
  customer2 membayar
  init = init + counter
  apakah ini customer limit (cutomer 5)? false / salah
  customer 2
  dihitung total belanjaan
  customer5 membayar
  init = init + counter
  apakah ini customer limit (cutomer 5)? true


end loop
*/
/* loop ada 3 bagian
-inisialisasi : nilai awal
-iteration : decrement and increment
/*
3 jenis perulangan dalam java script ( while, for, do while)

*/
var x = 1; //init
while (x <= 5) //limit
{// awalan proses

  console.log("angka"+ x);
  x = x +1; //iteration
}

/* DO WHILE */
var y = 1;//iinit

do {

  console.log("y = "+y);
  y= y +1;// intergation

}while{y <=5 };


/* FOR */
for (var i = 1 ; i <= 5  ; i = i +1)
{

console.log("i =" + 1)

}
