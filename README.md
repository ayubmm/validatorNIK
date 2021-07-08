# validatorNIK
Validator NIK Indonesia

Validasi ini tidak menggunakan referensi database sehingga akurasinya hanya berdasarkan logika.<br>
Rumusan ini saya buat dengan referensi https://www.nomor.net/_kodepos.php?_i=kode-wilayah.<br>
Kalau mau menggunakan api bisa coba https://github.com/emsifa/api-wilayah-indonesia.<br>

Contoh Pemakaian :

```javascript
const validatorNIK = require('validatornik');

//argumen bisa bertipe string
console.log(validatorNIK('3503022705000002'));
//argumen bisa bertipe number
console.log(validatorNIK(3503022705000002));
```
