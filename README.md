# validatorNIK
Validator NIK Indonesia

Validasi ini tidak menggunakan referensi database sehingga akurasinya hanya berdasarkan logika
Rumusan ini saya buat dengan referensi https://www.nomor.net/_kodepos.php?_i=kode-wilayah
Kalau mau menggunakan api bisa coba https://github.com/emsifa/api-wilayah-indonesi

Contoh Pemakaian :

`const validatorNIK = require('validatornik');
//argumen bisa bertipe string
console.log(validatorNIK('3503022705000002'))
//argumen bisa bertipe number
console.log(validatorNIK(3503022705000002))`