const games = [
    {
      name: "Pigeon Ascent",
      thumbnail: "games/w-master/pigeon.png",
      url: "games/w-master",
      category: "PC"
    },
    {
      name: "Sprunki",
      thumbnail: "games/Incredibox - Sprunki/sprunki.png",
      url: "games/Incredibox - Sprunki",
      category: "PC"
    },
    {
      name: "The 14TH Axe Wound",
      thumbnail: "games/THE%2014TH%20AXE%20WOUND/14.png",
      url: "games/THE%2014TH%20AXE%20WOUND",
      category: "PC"
    },
    {
      name: "Sofia",
      thumbnail: "games/Sofia/www/icon/icon.png",
      url: "games/Sofia/www",
      category: "PC"
    },
    {
      name: "You and Me",
      thumbnail: "games/You%20And%20Me-2.0-win/www/icon/icon.png",
      url: "games/You%20And%20Me-2.0-win/www",
      category: "PC"
    },
    {
  name: "We Become What We Behold",
  thumbnail: "games/we%20bmc/we.png",
  url: "https://mr-funkinguy.github.io/gfile/wbwwb/index.html",
  category: "PC"
    },
    {
        name: "Tunnel Rush",
        thumbnail: "games/tunnelrush/images.webp",
        url: "games/tunnelrush",
        category: "PC"
          },
          {
            name: "Survive!",
            thumbnail: "games/zumbi/unnamed.webp",
            url: "games/zumbi",
            category: "PC"
              },
              {
name:"2048",
thumbnail: "games/1v1/favicon.ico",
url: "games/1v1",
category: "PC"
              },
{
    name: "Crossy Road",
    thumbnail: "games/crossyroad/sprites/chicken.png",
    url: "games/crossyroad",
    category: "PC"
},
              {
                name:"Cookie Clicker",
                thumbnail: "games/cookieclicker/img/favicon.ico",
                url: "games/cookieclicker",
                category: "PC"
                              },
               
                      {
                name: "Flydra",
                thumbnail: "games/whatthat/sprite/player.png",
                url: "games/whatthat",
                category: "PC"
                  },
 /* arquivo muito pesado, lanço depois de fazer o resto.   
 {
  name: "Minecraft",
  thumbnail: "games/Precision%20Launcher%20V3%20(PT-BR)%20(x64)/mlg.png",
  url: "games/Precision%20Launcher%20V3%20(PT-BR)%20(x64)",
  category: "PC"
    },*/
    {
        name: "Dino",
        thumbnail: "games/dino/assets/default_100_percent/100-disabled.png",
        url: "games/dino/",
        category: "PC"
    },
        {
            name: "Chess",
            thumbnail: "games/ches/download.png",
            url: "games/ches/",
            category: "PC"
              },
              {
                name: "Rooftop Snipers",
                thumbnail: "games/rooftop/snipers.jpg",
                url: "games/rooftop/",
                category: "PC"
                  },
        {
      name: "FNAF 1",
      thumbnail: "games/FNAF1-main//download.png",
      url: "games/FNAF1-main",
      category: "PC"
    },
    {
      name: "FNAF 2",
      thumbnail: "games/FNAF2-main/unnamed.webp",
      url: "games/FNAF2-main/",
      category: "PC"
    },
    {
      name: "FNAF 3(Takes a bit long to load)",
      thumbnail: "games/fnaf3-main/FNaF_3_logo.webp",
      url: "games/fnaf3-main/index.html",
      category: "PC"
    },
  ];
  

  const cellphoneGameGrid = document.getElementById('cellphone-game-grid');
  const pcGameGrid = document.getElementById('pc-game-grid');
  const previewContainer = document.getElementById('preview-container');
  const previewFrame = document.getElementById('preview-frame');
  const previewTitle = document.getElementById('preview-title');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const closeBtn = document.getElementById('close-btn');
  const exitFullscreenBtn = document.getElementById('exit-fullscreen');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const loadingScreen = document.getElementById('loading-screen');

  function createGameThumbnail(game) {
      const thumbnail = document.createElement('div');
      thumbnail.className = 'game-thumbnail slide-in';
      thumbnail.innerHTML = `
          <img src="${game.thumbnail}" alt="${game.name}">
          <p>${game.name}</p>
      `;
      thumbnail.addEventListener('click', () => openGamePreview(game));
      return thumbnail;
  }

  function openGamePreview(game) {
      previewFrame.src = game.url;
      previewTitle.textContent = game.name;
      previewContainer.classList.add('active');
      gsap.fromTo(previewContainer, 
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
  }

  function closeGamePreview() {
      gsap.to(previewContainer, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "back.in(1.7)",
          onComplete: () => {
              previewContainer.classList.remove('active');
              previewFrame.src = '';
          }
      });
  }

  function toggleFullscreen() {
      if (!document.fullscreenElement) {
          previewContainer.requestFullscreen().catch(err => {
              alert(`Error attempting to enable fullscreen: ${err.message}`);
          });
      } else {
          document.exitFullscreen();
      }
  }

  function displayGames(filteredGames = games) {
      cellphoneGameGrid.innerHTML = '';
      pcGameGrid.innerHTML = '';
      filteredGames.forEach((game, index) => {
          const thumbnail = createGameThumbnail(game);
          if (game.category === "Cellphone") {
              cellphoneGameGrid.appendChild(thumbnail);
          } else if (game.category === "PC") {
              pcGameGrid.appendChild(thumbnail);
          }
          gsap.from(thumbnail, {
              opacity: 0,
              y: 20,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power3.out"
          });
      });
  }

  function searchGames() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredGames = games.filter(game => 
          game.name.toLowerCase().includes(searchTerm)
      );
      displayGames(filteredGames);
  }

  searchInput.addEventListener('input', searchGames);

  searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
          searchGames();
      }
  });

  window.addEventListener('load', () => {
      setTimeout(() => {
          loadingScreen.style.display = 'none';
          displayGames();
      }, 1500); // Simulating loading time
  });

  fullscreenBtn.addEventListener('click', toggleFullscreen);
  closeBtn.addEventListener('click', closeGamePreview);
  searchButton.addEventListener('click', searchGames);

  document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
          exitFullscreenBtn.style.display = 'block';
          gsap.from(exitFullscreenBtn, { scale: 0, opacity: 0, duration: 0.3, ease: "back.out(1.7)" });
      } else {
          gsap.to(exitFullscreenBtn, {
              scale: 0,
              opacity: 0,
              duration: 0.3,
              ease: "back.in(1.7)",
              onComplete: () => {
                  exitFullscreenBtn.style.display = 'none';
              }
          });
      }
  });

  exitFullscreenBtn.addEventListener('click', () => {
      if (document.fullscreenElement) {
          document.exitFullscreen();
      }
  });

  // Blur effect on scroll
  window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector('.header-content');
      const blurValue = Math.min(scrollPosition / 75, 10); // Max blur of 10px
      header.style.backdropFilter = `blur(${blurValue}px)`;
  });

  // GSAP animations
  gsap.from(".logo", { opacity: 0, x: -50, duration: 1, ease: "power3.out", delay: 1.5 });
  gsap.from(".search-container", { opacity: 0, x: 50, duration: 1, ease: "power3.out", delay: 1.5 });
  gsap.from(".category-title", { opacity: 0, y: 30, duration: 1, stagger: 0.2, ease: "power3.out", delay: 1.7 });
