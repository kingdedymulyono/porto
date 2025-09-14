window.addEventListener("load", () => {
    document.querySelectorAll(".placeholder").forEach((ph) => {
        ph.classList.remove("placeholder")
    })
})
const projectName = document.getElementById("projectName");
const projectText = document.getElementById("projectText");
const projectImage = document.getElementById("projectImage");
const projectFigure = document.getElementById("projectFigure");
const playlist = document.getElementById("playlistBox");
let x = 0
let i = 0

let arrProject = [];
let img = [];
let arrText = [];
let arrSong = [];

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
        <img id="projectImg" src=./public/project/img${i + 2}.png class='rounded-2 projectImg m-0' />
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

const getMusic = async (x) => {
    fetch('script/songdata.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                if(!arrSong.includes(item.songName)){
                    arrSong.push(item.songName)
                }
                if (item.songName == arrSong[x]) {
                    playlist.innerHTML = `
                    <img src="../public/songs/${item.fileName}" alt="" class="songCover rounded-4">
                    <p class="songName fw-bold text-center m-0">${item.songName}</p>
                    <p class="songBand text-center m-0">${item.songBand}</p>
                    <progress value="0" max="100" class="songProgress" id="songProgress"></progress>
                    <p class="songDuration text-center m-0 fw-semibold">${item.songDuration}</p>
                    <div class="songControl text-center d-flex w-50 justify-content-around">
                        <button type="button" 
                        class="songPrev btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center">
                            <i class="fa songPrev fa-solid fa-backward"></i>
                            </button>
                            <button type="button" 
                            class="songBtn btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center">
                            <i class="fa-solid songNext fa-Icon fa-play"></i>
                            </button>
                            <button type="button" 
                            class="songNext btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center">
                            <i class="fa-solid songNext fa-Icon fa-forward"></i>
                            </button>
                            </div>
                            `
                } else {
                    console.log("error");
                }
            })
        })
}
getMusic(0)
playlist.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className.toLowerCase().includes("songnext")) {
        console.log(x);
        if (x <= arrSong.length - 1) {
            getMusic(x+1)
            x++
        }
    } else if (e.target.className.toLowerCase().includes("songprev")) {
        if (x >= 0) {
            getMusic(x-1)
            x--
        }
    }
})