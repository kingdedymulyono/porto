window.addEventListener("load", () => {
    document.querySelectorAll(".placeholder").forEach((ph) => {
        ph.classList.remove("placeholder")
    })
})
const projectName = document.getElementById("projectName");
const projectText = document.getElementById("projectText");
const projectImage = document.getElementById("projectImage");
const projectFigure = document.getElementById("projectFigure");
let i = 0;

let arrProject = [];
let img = [];
let arrText = [];
arrProject.push("ToDo List");
arrProject.push("Age Calculator");
arrProject.push("Reverse Ngl");
arrProject.push("Class Website");
arrProject.push("Graduation Text");

arrText.push(`Aplikasi ini membantumu untuk mengatur daftar tugas harian. Kamu bisa menambah, menandai selesai, dan menghapus tugas yang sudah tidak diperlukan. Aplikasi ini cocok untuk siapa saja yang ingin lebih terorganisir dan tidak melewatkan tenggat waktu penting.`)
arrText.push(`Mau tahu berapa usiamu dalam hitungan hari, bulan, atau tahun? Proyek ini bisa menjawabnya dengan cepat. Cukup masukkan tanggal lahirmu dan aplikasi akan menampilkan usiamu secara akurat, lengkap dengan informasi menarik lainnya seperti berapa hari lagi sampai ulang tahunmu berikutnya.`)
arrText.push(`Proyek ini adalah alat sederhana untuk melihat balasan anonim yang dikirim melalui NGL Link. Dengan memasukkan tautan NGL, kamu bisa melihat nama pengguna atau akun yang mengirim pesan tersebut. Ini bisa menjadi alat yang menarik untuk mengungkap siapa yang mengirim pesan rahasia padamu.`)
arrText.push(`Situs web ini dirancang khusus untuk keperluan kelas, tempat semua informasi penting bisa diakses dengan mudah. Kamu dapat menemukan jadwal pelajaran, materi kuliah, pengumuman, dan mungkin juga forum diskusi. Situs ini berfungsi sebagai pusat informasi digital yang terintegrasi untuk seluruh anggota kelas.`)
arrText.push(`Aplikasi ini membantumu untuk membuat ucapan kelulusan yang unik dan berkesan. Kamu bisa memilih dari berbagai template, menambahkan kutipan, dan menyesuaikannya dengan gaya pribadimu. Ini adalah cara yang cepat dan kreatif untuk mengucapkan selamat kepada teman atau orang terdekat yang baru saja lulus.`)

const year = document.getElementById("year");
year.innerHTML = (new Date().getFullYear());

const changeProject = (x) => {
    projectName.innerHTML = arrProject[x];
    projectText.innerHTML = arrText[x];
    projectFigure.innerHTML = `
        <img id="projectImg" src=./public/project/img${i+2}.png class='rounded-2 projectImg m-0' />
    `
}
changeProject(i)

const handleChangeNext = () => {
    if (i < (arrProject.length) - 1) {
        i += 1;
        changeProject(i)
    }
}
const handleChangePrev = () => {
    if (i > 0) {
        i -= 1;
        changeProject(i)
    }
}