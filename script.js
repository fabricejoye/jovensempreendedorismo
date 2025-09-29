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
    let player;
    const poster = document.getElementById('poster');


    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    const name = getQueryParam('name');
    const playButton = document.getElementById('playVideoBtn');
    const posterWrapper = document.getElementById('poster');
    const posterBasePath = 'imagens/';

    /* const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag); */

    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '711',
        width: '400',
        videoId: videos[name].url, // substitua pelo ID real
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          fs: 0
        },
        events: {
          onReady: onPlayerReady
        }
      });
    }

    function setVideo() {
        playButton.addEventListener('click', startVideo);
        if (videos[name].hasPoster) {
          posterWrapper.querySelector('img').src = posterBasePath + `${name}.jpg`;
        } else {
          posterWrapper.style.display = 'none';
        }
    }

    function setMessageError() {
        document.querySelector('.message-error').style.display = 'block';
        posterWrapper.style.display = 'none';
        player.destroy();
    }

    function startVideo() {
      poster.style.display = 'none';
      player.playVideo();
    }

    function onPlayerReady(event) {
      if (videos[name]) {
        setVideo();
      } else {
        setMessageError()
      }
      
    }