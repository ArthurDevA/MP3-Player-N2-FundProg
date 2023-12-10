const musicas = [
    "uiratsupu-quan-shan-tamakiniku-qing-woru-reruratsupu.mp3",
    "zhen-shigureuitotemotsuyoigao-zhi-pv.mp3",
    "adrenaline-trysail-covered-by-shigureui-da-kong-subaru.mp3",
    "qun-qing-yoasobi-covered-by-shigureui.mp3",
    "debiruziyanaimon-covered-by-shigureui-jiao-juan-watame.mp3",
    "daishikiyudaishiyuki-covered-by-shigureui-tian-gong-kokoro.mp3",
    "orizinarule-qu-rainy-lady-shigureui.mp3",
    "orizinarule-qu-su-sheng-rorishen-rekuiemu-shigureui-9sai.mp3",
    "shiyanimasu-sos-covered-by-shigureui.mp3"
]

const player = document.getElementById('player')


function createSongList() {
    const list = document.createElement("ol")
    for (let i = 0; i < musicas.length; i++) {
        const item = document.createElement("li")
        item.appendChild(document.createTextNode(musicas[i]))
        list.appendChild(item)
    }
    return list
}

const listaMusicas = document.getElementById('listaMusicas')

listaMusicas.appendChild(createSongList())
   const source = document.getElementById('source')

    const links = document.querySelectorAll("li")
    for (const link of links) {
        link.addEventListener("click", setSong)
    }

function setSong(e) {

    document.querySelector('#headphones').classList.remove("pulse")

    source.src = "musicas/" + e.target.innerText

    document.querySelector('#musicaCorrente').innerText = `Tocando: ${e.target.innerText}`

    player.load()
    player.play()

    document.querySelector('#headphones').classList.add("pulse")
}

function playAudio() {
    if (PaymentRequest.readyState)
    player.play()
}

function pauseAudio() {
    player.pause()
}

const sliderVolume = document.getElementById("controleDeslizanteVolume")

sliderVolume.oninput = function(volume) {
    player.volume = volume.target.value
}

const progressBar = document.getElementById("progresso")

function updateProgress() {
    if (player.currentTime > 0) {
        progressBar.value = (player.currentTime / player.duration)
    }
}