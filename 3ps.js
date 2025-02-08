document.addEventListener("DOMContentLoaded", () => {
    let games = [] // Initialize an empty array
  
    // Function to create a game thumbnail
    function createGameThumbnail(game) {
      const thumbnail = document.createElement("div")
      thumbnail.className = "game-thumbnail slide-in"
      thumbnail.innerHTML = `
              <a href="${game.url}" target="_blank">
                  <img src="${game.thumbnail}" alt="${game.name}">
                  <p>${game.name}</p>
              </a>
          `
      return thumbnail
    }
  
    // Function to display games
    function displayGames(filteredGames = games) {
      console.log("Displaying games:", filteredGames) // Debug log
      const cellphoneGameGrid = document.getElementById("cellphone-game-grid")
      const pcGameGrid = document.getElementById("pc-game-grid")
  
      if (cellphoneGameGrid) cellphoneGameGrid.innerHTML = ""
      if (pcGameGrid) pcGameGrid.innerHTML = ""
  
      filteredGames.forEach((game, index) => {
        const thumbnail = createGameThumbnail(game)
        if (game.category === "Cellphone" && cellphoneGameGrid) {
          cellphoneGameGrid.appendChild(thumbnail)
        } else if (game.category === "PC" && pcGameGrid) {
          pcGameGrid.appendChild(thumbnail)
        }
        gsap.from(thumbnail, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power3.out",
        })
      })
    }
  
    // Function to fetch game data
    function fetchGames() {
      fetch("game.json?v=" + new Date().getTime())
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok")
          }
          return response.json()
        })
        .then((data) => {
          console.log("Fetched games:", data) // Log fetched data
          if (Array.isArray(data) && data.length > 0) {
            games = data // Update the games variable with the fetched data
            console.log("Updated games:", games) // Log updated games
            displayGames() // Call displayGames to show the games
            updateGameCount() // Update the game count after displaying games
          } else {
            console.warn("No games found in the fetched data.")
          }
        })
        .catch((error) => console.error("Error loading games:", error))
    }
  
    // Function to update game count
    function updateGameCount() {
      const pcGamesCount = games.filter((game) => game.category === "PC").length // Count PC games
      const cellphoneGamesCount = games.filter((game) => game.category === "Cellphone").length // Count Cellphone games
  
      const pcGamesTitle = document.getElementById("pc-games-title")
      const cellphoneGamesTitle = document.getElementById("cellphone-games-title")
  
      if (pcGamesTitle) {
        pcGamesTitle.innerHTML = `<i class="fas fa-desktop"></i> PC Games - ${pcGamesCount}`
      }
  
      if (cellphoneGamesTitle) {
        cellphoneGamesTitle.innerHTML = `<i class="fas fa-mobile-alt"></i> Cellphone Games - ${cellphoneGamesCount}`
      }
    }
  
    // Initial fetch
    fetchGames()
  
    // Set an interval to fetch games every 10 seconds (10000 milliseconds)
    setInterval(fetchGames, 10000)
  
    const previewContainer = document.getElementById("preview-container")
    const previewFrame = document.getElementById("preview-frame")
    const previewTitle = document.getElementById("preview-title")
    const fullscreenBtn = document.getElementById("fullscreen-btn")
    const closeBtn = document.getElementById("close-btn")
    const exitFullscreenBtn = document.getElementById("exit-fullscreen")
    const searchInput = document.getElementById("search-input")
    const searchButton = document.getElementById("search-button")
    const loadingScreen = document.getElementById("loading-screen")
  
    function openGamePreview(game) {
      /* previewFrame.src = game.url;
          previewTitle.textContent = game.name;
          previewContainer.classList.add('active');
          gsap.fromTo(previewContainer, 
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
          );*/
      window.open(game.url, "_blank")
    }
  
    function closeGamePreview() {
      gsap.to(previewContainer, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.in(1.7)",
        onComplete: () => {
          previewContainer.classList.remove("active")
          previewFrame.src = ""
        },
      })
    }
  
    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        previewContainer.requestFullscreen().catch((err) => {
          alert(`Error attempting to enable fullscreen: ${err.message}`)
        })
      } else {
        document.exitFullscreen()
      }
    }
  
    function searchGames() {
      const searchTerm = searchInput.value.toLowerCase()
      const filteredGames = games.filter((game) => game.name.toLowerCase().includes(searchTerm))
      displayGames(filteredGames)
    }
  
    searchInput.addEventListener("input", searchGames)
  
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        searchGames()
      }
    })
  
    window.addEventListener("load", () => {
      setTimeout(() => {
        loadingScreen.style.display = "none"
        fetchGames() // Call fetchGames instead of renderGames
      }, 1500)
    })
  
    fullscreenBtn.addEventListener("click", toggleFullscreen)
    closeBtn.addEventListener("click", closeGamePreview)
    searchButton.addEventListener("click", searchGames)
    /*function eventobalusca() {
          if(closeBtn && fullscreenBtn) {
              exitFullscreenBtn = false;
          }
      }
      eventobalusca();*/ // pqp pq eu fiz isso
    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        exitFullscreenBtn.style.display = "block"
        gsap.from(exitFullscreenBtn, { scale: 0, opacity: 0, duration: 0.3, ease: "back.out(1.7)" })
      } else {
        gsap.to(exitFullscreenBtn, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "back.in(1.7)",
          onComplete: () => {
            exitFullscreenBtn.style.display = "none"
          },
        })
      }
    })
  
    exitFullscreenBtn.addEventListener("click", () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      }
    })
  
    // blur
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      const header = document.querySelector(".header-content")
      const blurValue = Math.min(scrollPosition / 75, 10) // maximo 10
      header.style.backdropFilter = `blur(${blurValue}px)`
    })
  
    // anmiacaço
    gsap.from(".logo", { opacity: 0, x: -50, duration: 1, ease: "power3.out", delay: 1.5 })
    gsap.from(".search-container", { opacity: 0, x: 50, duration: 1, ease: "power3.out", delay: 1.5 })
    gsap.from(".category-title", { opacity: 0, y: 30, duration: 1, stagger: 0.2, ease: "power3.out", delay: 1.7 })
  })
  
  
