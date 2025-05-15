document.addEventListener("DOMContentLoaded", () => {
  // Progressive image loading
  const progressiveImages = document.querySelectorAll(".progressive-image")

  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Function to load images when they come into view
  function loadImagesInViewport() {
    progressiveImages.forEach((container) => {
      if (isInViewport(container) && !container.classList.contains("loaded")) {
        const img = container.querySelector(".full-image")

        // When the image is loaded, add the 'loaded' class to the container
        img.onload = () => {
          container.classList.add("loaded")
        }

        // Set the src attribute to trigger loading
        if (img.getAttribute("data-src")) {
          img.src = img.getAttribute("data-src")
        }
      }
    })
  }

  // Load images that are initially in the viewport
  loadImagesInViewport()

  // Load more images as the user scrolls
  window.addEventListener("scroll", loadImagesInViewport)
  window.addEventListener("resize", loadImagesInViewport)

  // Add hover effect to facility cards
  const facilityCards = document.querySelectorAll(".facility-card")
  facilityCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })
  })

  // Add click event to play button for virtual tour
  const playButton = document.querySelector(".play-button")
  if (playButton) {
    playButton.addEventListener("click", () => {
      // This would typically launch a video or virtual tour
      alert("Virtual tour feature coming soon!")
    })
  }
})
