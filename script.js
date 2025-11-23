// PREVIEW FOTO
document.getElementById("foto").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("preview");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// SUBMIT LAPORAN
document.getElementById("laporForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const laporan = {
    nama: document.getElementById("nama").value,
    jenis: document.getElementById("jenis").value,
    barang: document.getElementById("barang").value,
    lokasi: document.getElementById("lokasi").value,
    deskripsi: document.getElementById("deskripsi").value,
    foto: document.getElementById("preview").src || null,
    waktu: new Date().toLocaleString()
  };

  // Ambil data sebelumnya
  let data = JSON.parse(localStorage.getItem("laporan")) || [];
  data.push(laporan);

  // Simpan kembali
  localStorage.setItem("laporan", JSON.stringify(data));

  document.getElementById("notif").innerHTML = "Laporan berhasil disimpan ✔";

  // Reset form
  document.getElementById("laporForm").reset();
  document.getElementById("preview").style.display = "none";
});
