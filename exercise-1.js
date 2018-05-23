var nama = "Danu"
var peran = "tabib"

if ( nama === "mikael" && peran === " "){
  console.log("Halo "+nama, ",Pilih peranmu untuk memulai game!")
}else if( nama === "Nina" && peran === "ksatria"){
  console.log("Selamat datang di Dunia Proxytia " + nama)
  console.log("Halo " + peran +" "+ nama, ",kamu dapat menyerang dengan senjatamu!!")
}else if( nama === "Danu" && peran === "tabib"){
  console.log("Selamat datang di Dunia Proxytia " + nama)
  console.log("Halo" + peran + " "+ nama, ",Kamu akan membantu temanmu yang terluka")
}else if( nama === "Zero" && peran === "penyihir"){
  console.log("Selamat datang di Dunia Proxytia" + nama)
  console.log("Halo"+ peran + " "+nama, ",Ciptakan keajaiban yang membantu kemenanganmu")
}else {
  console.log("Nama harus diisi!!!")
}
