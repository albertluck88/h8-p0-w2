

/* TUGAS NO 1 */
console.log ("Looping Pertama")
var angka = 2
while (angka < 20){
  console.log(angka + "- I Love Coding")
  angka++
}
console.log ("looping Kedua")
var angka2 = 20
while (angka2 >= 2 ){
  console.log(angka2 + " - I will become fullstack developer")
  angka2 -= 2
}

/* TUGAS NO 2 */
console.log ("looping pertama")
for(angka = 1; angka <=1 ; angka++){
  console.log(angka + " - I love coding")
}
console.log ("Looping Kedua")
for(angka = 20; angka >=1; angka -= 1){
  console.log(angka + " - I will become fullstack developer")
}

/* TUGAS NO 3 */
console.log ("Looping dan kondisi Genap / Ganjil")

for(var a = 1; a < 100; a++){
  if( a % 2 == 0){
    console.log ( "Genap")
  }else{
    console.log(" Ganjil")
  }
}

console.log("Looping Kelipatan 3 dan bertambah 2")

for(var b = 1; b < 100; b += 2){
if( b % 3 == 0){
  console.log(" 3 kelipatan 3 ")
else{
  console.log (" ")
}
}

console.log("looping kelipatan 6 dan pertambahan 5")
for(var c = 1; c < 100; c += 5){
  if(c % 6 == 0){
    console.log(" 6 kelipatan 6")
  }else{
    console.log("")
  }
}

console.log("looping kelipatan 10 dan pertambahan 9")
for(var d = 1; d < 100; d += 9){
  if(d % 10 == 0){
    console.log (" 10 kelipatan 10")
  }else{
    console.log(" ")
  }
}
