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

listaMusicas.onclick = function(e) {

    const source = document.getElementById('source')
    source.src = "songs/" + e.target.innerText

    const player = document.getElementById('player')
    player.load()
    player.play()
}