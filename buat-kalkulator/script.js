const daftarkuis = [
    {
        pertanyaan: "Apa pelajaran yang membahas tentang teknologi",
        opsi: ["A.Matematika","B.Informatika","C.ilmu pengetahuan Alam","D.Ilmu pengetahuan Sosial"],
        jawaban: "B.Informatika"
    },
    {
        pertanyaan: "Berapa hasil dari 10 pangkat 2",
        opsi: ["A.10","B.20","C.100","D.1000"],
        jawaban: "C.100"
    },
    {
        pertanyaan: "Apa nama Tokoh yang Pernah membocorkan data USA",
        opsi: ["A. Ada Lovelace","B.Edward Snowden","C.Nikola Tesla"],
        jawaban: "B.Edward Snowden"
    }
];

let indeksSekarang =0;


const inputJawaban = document.getElementById("todoInput");
const textPertanyaan = document.getElementById("textPertanyaan");
const infoHalaman = document.getElementById("infohalaman");
const opsiJawabanContainer = document.getElementById("opsiJawaban");
const btnNext = document.getElementById("btnNext");



function tampilkanKuis() {
    const kuis = daftarkuis[indeksSekarang];

    textPertanyaan.innerText = kuisAktif.pertanyaan;
    infoHalaman.innerText = `quest ${indeksSekarang + 1} or ${daftarkuis.length} `;

    inputJawaban.value = "";
    inputJawaban.style.borderColor = "red" ;
    btnNext.style.display = "none";

    opsiJawabanContainer.innerHTML = "";
    kuisAktif.opsi.forEach = (opsi => {
        opsiJawabanContainer.innerHTML += `<button onclick = "Pilihjawaban('${opsi}')">${opsi}</button>`;
    });
}

function Pilihjawaban(pilihan) {
    const kuisAktif = daftarkuis[indeksSekarang];
    if (pilihan.toLowerCase() === kuisAktif.jawabanBenar.toLowerCase()) {
        inputJawaban.value = "Jawaban benar";
        inputJawaban.style = "green";
        btnNext.style.display = "block";

    }else {
        inputJawaban.value = "Jawaban salaah!!";
        inputJawaban.style = "red";
        btnNext.style.display = "none";
    }

}

function keHalamanSelanjutnya () {
    if (indeksSekarang < daftarkuis -1)  {
       indeksSekarang++;
       tampilkanKuis();
    }else {
        alert("Selamat quiz telah selsai!!");
    }
}
tampilkanKuis();