// Rumusan ini saya buat dengan referensi https://www.nomor.net/_kodepos.php?_i=kode-wilayah
// Kalau mau menggunakan api bisa coba https://github.com/emsifa/api-wilayah-indonesia

// Validasi ini tidak menggunakan referensi database sehingga akurasinya hanya berdasarkan logika

const kodeProv = [
  '92',
  '91',
  '82',
  '81',
  '76',
  '75',
  '74',
  '73',
  '72',
  '71',
  '65',
  '64',
  '63',
  '62',
  '61',
  '53',
  '52',
  '51',
  '36',
  '35',
  '34',
  '33',
  '32',
  '31',
  '21',
  '19',
  '18',
  '17',
  '16',
  '15',
  '14',
  '13',
  '12',
  '11',
];
function validatorNIK(nik) {
  // cek panjang dari nik, apakah angkanya ada 16 digit
  const strNIK = nik.toString();
  if (parseFloat(strNIK).toString().length !== 16) {
    return false;
  }
  const provinsi = strNIK.slice(0, 2);
  const kabKot = strNIK.slice(2, 4);
  const kecamatan = strNIK.slice(4, 6);
  const tanggal = strNIK.slice(6, 8);
  const bulan = strNIK.slice(8, 10);
  // tahun mulai 00 - 99 valid
  // 4 digit terahir random

  if (!kodeProv.some((tiapkodeProv) => tiapkodeProv === provinsi)) {
    return false;
  }

  if (parseInt(kabKot, 10) === 0 || parseInt(kecamatan, 10) === 0) {
    return false;
  }

  if (parseInt(tanggal, 10) === 0 || parseInt(tanggal, 10) > 31) {
    return false;
  }

  if (parseInt(bulan, 10) === 0 || parseInt(bulan, 10) > 12) {
    return false;
  }

  if (bulan === 2) {
    return parseInt(tanggal, 10) <= 29;
  }
  if (bulan === (4 || 6 || 9 || 11)) {
    return parseInt(tanggal, 10) <= 30;
  }

  return true;
}

module.exports = validatorNIK;
