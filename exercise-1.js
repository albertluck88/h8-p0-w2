var nama = "albert"
var peran = "ksatria"

if( nama === "" && peran === ""){
  console.log("nama harus diisi")
}else if(peran === ""){
  console.log("Halo" + nama + ", Pilih peranmu untuk memulai Game")
}else if( peran === "ksatria"){
  console.log("Selamat datang di Dunia Proxytia " + nama)
  console.log("Halo " + peran + " "+ nama, ",kamu dapat menyerang dengan senjatamu!!")
}else if( peran === "tabib"){
  console.log("Selamat datang di Dunia Proxytia " + nama)
  console.log("Halo" + peran + " "+ nama, ",Kamu akan membantu temanmu yang terluka")
}else if( peran === "penyihir"){
  console.log("Selamat datang di Dunia Proxytia" + nama)
  console.log("Halo"+ peran + " "+nama, ",Ciptakan keajaiban yang membantu kemenanganmu")
}else{
  console.log("tidak ada peran tersebut disini")
}
