document.addEventListener("DOMContentLoaded", () => {
  // Gallery Filter Functionality
  const filterButtons = document.querySelectorAll(".filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-item")

  if (filterButtons.length > 0 && galleryItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        button.classList.add("active")

        // Get filter value
        const filterValue = button.getAttribute("data-filter")

        // Filter gallery items
        galleryItems.forEach((item) => {
          if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
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

  // YouTube Video Placeholder Functionality
  const videoPlaceholder = document.querySelector(".video-placeholder")
  const iframe = document.querySelector(".video-container iframe")

  if (videoPlaceholder && iframe) {
    videoPlaceholder.addEventListener("click", () => {
      // Replace 'VIDEO_ID' with your actual YouTube video ID
      const videoId = "dQw4w9WgXcQ" // Example video ID

      // Set iframe src to YouTube embed URL
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`

      // Hide placeholder
      videoPlaceholder.style.display = "none"
    })
  }

  // Playlist Item Click Functionality
  const playlistItems = document.querySelectorAll(".playlist-item")

  if (playlistItems.length > 0 && iframe) {
    playlistItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        // Example video IDs - replace with your actual video IDs
        const videoIds = ["dQw4w9WgXcQ", "dQw4w9WgXcQ", "dQw4w9WgXcQ"]

        // Set iframe src to YouTube embed URL
        iframe.src = `https://www.youtube.com/embed/${videoIds[index]}?autoplay=1`

        // Hide placeholder
        if (videoPlaceholder) {
          videoPlaceholder.style.display = "none"
        }

        // Highlight selected playlist item
        playlistItems.forEach((item) => item.classList.remove("active"))
        item.classList.add("active")
      })
    })
  }

  // Animation for gallery items
  function animateGalleryItems() {
    galleryItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = "1"
        item.style.transform = "translateY(0)"
      }, index * 100)
    })
  }

  // Set initial state for animation
  galleryItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(30px)"
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Animate gallery items on page load
  window.addEventListener("load", animateGalleryItems)

  // FAQ Accordion Functionality
  const faqItems = document.querySelectorAll(".faq-item")

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")
      const answer = item.querySelector(".faq-answer")
      const icon = item.querySelector(".faq-toggle i")

      question.addEventListener("click", () => {
        // Toggle active class
        item.classList.toggle("active")

        // Toggle icon
        if (icon) {
          if (item.classList.contains("active")) {
            icon.classList.remove("fa-plus")
            icon.classList.add("fa-minus")
          } else {
            icon.classList.remove("fa-minus")
            icon.classList.add("fa-plus")
          }
        }
      })
    })
  }
})
