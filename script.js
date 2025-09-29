videos = {
    "cooperativismo": {
        url: "ga4Nee_XtMY",
        title: "Vídeo Único - O que é o cooperativismo de plataforma e como ele difere dos modelos tradicionais de negócios digitais?",
        hasPoster: true
    },
    "design1": {
        url: "4AUZjgU8iCs",
        title: "Vídeo 1 - Design para Redes Sociais",
        hasPoster: true
    },
    "design2": {
        url: "U6ZbLktiww8",
        title: "Vídeo 2 - Ferramenta de IA para Redes Sociais (Roteiro Canva e Chat GPT)",
        hasPoster: true
    },
    "IA4": {
        url: "GR02ZZ1qMgQ",
        title: "Vídeo 4 - Criando HQ com a IA para o seu negócio",
        hasPoster: true
    },
    "IA5": {
        url: "I6hz8pABzRM",
        title: "Vídeos 5 - Suno",
        hasPoster: true
    },
    "ifood1": {
        url: "VXbBAN1CS70",
        title: "Vídeo 1 - Como criar uma conta no Ifood para apoiar seu negócio no mercado digital?",
        hasPoster: true
    },
    "influencer1": {
        url: "0NpSf_xO32Q",
        title: "Vídeo 1 - Como criar um perfil para atuar como Digital Influencer?",
        hasPoster: true
    },
    "plr1": {
        url: "aZlUOSsyVmQ",
        title: "Vídeo 1 - PLR",
        hasPoster: true
    },
    "tiktok": {
        url: "xaUwbqcU7NM",
        title: "Vídeo 1 - Utilizando o TikTok para o seu negócio",
        hasPoster: true
    },
    "uxui": {
        url: "mzuVXdO8MD4",
        title: "Vídeo 1 - Design de Interface e de Experiência do Usuário",
        hasPoster: true
    },
};

const posterWrapper = document.querySelector('.poster');
const iframe = document.getElementById('videoFrame');
const posterBasePath = 'imagens/';
const videoBaseURL = 'https://www.youtube.com/embed/';
const playButton = document.getElementById('playVideoBtn');

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function setVideo() {
    document.querySelector('h1').textContent = videos[name].title;
    iframe.src = videoBaseURL + videos[name].url;
}

function playVideo() {
    hidePoster();
    iframe.src += (iframe.src.includes('?') ? '&' : '?') + 'autoplay=1';
    playButton.removeEventListener('click', playVideo);
}

function setPoster() {
    posterWrapper.querySelector('img').src = posterBasePath + `${name}.jpg`;
    playButton.addEventListener('click', playVideo);
}

function hidePoster() {
    posterWrapper.classList.add('hidden');
}

function setError() {
    document.querySelector('.video-wrapper').classList.add('no-video');
    document.querySelector('h1').textContent = "Vídeo não encontrado";
}

// Initialize
const name = getQueryParam('name');
if (name && videos[name]) {
    setVideo();
    if (videos[name].hasPoster) {
        setPoster()
    } else {
        hidePoster();
    }
} else {
    setError();
}