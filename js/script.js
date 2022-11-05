// masukkan elemen ke dalam variabel
const output = document.getElementById('output')

const inp_kecepatan = document.getElementById('kecepatan')
const inp_jam_berangkat = document.getElementById('jam_berangkat')
const inp_tujuan = document.getElementById('tujuan')
const inp_nama = document.getElementById('nama')
const inp_jarak_tempuh = document.getElementById('jarak_tempuh')

const form = document.querySelector('form')

// ketika form dijalankan
form.addEventListener('submit', e => {

  // cegah form mengirimkan data
  e.preventDefault()

  // ambil nilai input
  const kecepatan = parseInt(inp_kecepatan.value)
  const jarak = parseInt(inp_jarak_tempuh.value)
  const tujuan = inp_tujuan.value != '' ? inp_tujuan.value : 'tempat tujuan'
  const nama = inp_nama.value != '' ? inp_nama.value : 'nama'

  // ambil nilai input jam_berangkat kemudian jadikan array berisi jam dan menit
  const jam_berangkat = inp_jam_berangkat.value.split(':')

  // tentukan timestamp menggunakan objek Date
  const date = new Date()

  // atur jam dan menit sesuai input
  date.setHours(parseInt(jam_berangkat[0]))
  date.setMinutes(parseInt(jam_berangkat[1]))

  // ubah menjadi timestamp (milisecond)
  const timeStamp = Date.parse(date)

  // hitung waktu (milisecond)
  const waktu_tempuh = parseInt(jarak / kecepatan) * 1000

  const waktu_sampai = timeStamp + waktu_tempuh

  // tentukan perkiraan waktu menggunakan objek Date
  const date_hasil = new Date(waktu_sampai)

  // output waktu
  const jam = date_hasil.getHours() < 10 ? '0' + date_hasil.getHours() : date_hasil.getHours()
  const menit = date_hasil.getMinutes() < 10 ? '0' + date_hasil.getMinutes() : date_hasil.getMinutes()

  // tuliskan output
  output.innerHTML = 'Halo ' + nama + '! Kamu akan sampai di ' + tujuan + ' pada pukul ' + jam + '.' + menit

})