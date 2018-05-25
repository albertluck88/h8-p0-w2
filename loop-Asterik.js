/* SOAL NO 1 */
var rows1 = 5
for(a = 0; a < rows1; a = a + 1){
  console.log("*")
}

/* SOAL NO 2 */
var rows2 = 5
for(b = 0; b < rows2; b = b + 1){
  var tempatBintang = ""
  for(c = 0; c < rows2; c = c + 1){
    tempatBintang = tempatBintang + "*"
  }
  console.log (tempatBintang)
}

/* SOAL NO 3 */
/* SEKALI DOANK */
var rows3 = 5
var tasBintang = ""
for(d = 0; d < rows3; d = d + 1 ){
  tasBintang = tasBintang + "*"
  console.log (tasBintang)
}
/* FOR DIDALAM FOR */
var rows4 = 5
for(e = 0; e <= rows4; e = e + 1 ){
    keranjangBintang = ""
  for(f = 0; f <= e ; f = f + 1){
    keranjangBintang = keranjangBintang + "*"
  }
  console.log(keranjangBintang)
}
