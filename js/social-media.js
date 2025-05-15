document.addEventListener("DOMContentLoaded", () => {
  // Event Gallery Filter Functionality
  const filterButtons = document.querySelectorAll(".filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-item")

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        const filter = this.getAttribute("data-filter")

        // Show/hide gallery items based on filter
        galleryItems.forEach((item) => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "scale(1)"
            }, 10)
          } else {
            item.style.opacity = "0"
            item.style.transform = "scale(0.8)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }

  // Video Player Functionality
  const videoPlaceholder = document.querySelector(".video-placeholder")
  const videoContainer = document.querySelector(".video-container")
  const playlistItems = document.querySelectorAll(".playlist-item")

  if (videoPlaceholder && videoContainer) {
    videoPlaceholder.addEventListener("click", () => {
      // Replace with your actual YouTube video ID
      const videoId = "dQw4w9WgXcQ"

      const iframe = document.createElement("iframe")
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
      iframe.width = "100%"
      iframe.height = "100%"
      iframe.frameBorder = "0"
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      iframe.allowFullscreen = true

      videoContainer.innerHTML = ""
      videoContainer.appendChild(iframe)
    })

    if (playlistItems.length > 0) {
      playlistItems.forEach((item) => {
        item.addEventListener("click", () => {
          // You would normally set different video IDs for each playlist item
          const videoId = "dQw4w9WgXcQ"

          const iframe = document.createElement("iframe")
          iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
          iframe.width = "100%"
          iframe.height = "100%"
          iframe.frameBorder = "0"
          iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          iframe.allowFullscreen = true

          videoContainer.innerHTML = ""
          videoContainer.appendChild(iframe)

          // Scroll up to video if needed
          videoContainer.scrollIntoView({ behavior: "smooth" })
        })
      })
    }
  }

  // Animation for blog cards and gallery items on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".blog-card, .gallery-item, .social-icon-large")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.classList.add("animate")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Initialize on page load
})
