document.addEventListener("DOMContentLoaded", () => {
  // Trainer Carousel Functionality
  const carousel = document.querySelector(".trainer-carousel")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const cards = document.querySelectorAll(".trainer-card")

  if (carousel && prevBtn && nextBtn && cards.length > 0) {
    const cardWidth = cards[0].offsetWidth + 30 // card width + margin
    let currentIndex = 0

    // Update carousel position
    function updateCarousel() {
      carousel.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      })
    }

    // Previous button click
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--
        updateCarousel()
      }
    })

    // Next button click
    nextBtn.addEventListener("click", () => {
      if (currentIndex < cards.length - 1) {
        currentIndex++
        updateCarousel()
      }
    })

    // Handle scroll events to update currentIndex
    carousel.addEventListener("scroll", () => {
      const scrollPosition = carousel.scrollLeft
      currentIndex = Math.round(scrollPosition / cardWidth)
    })
  }

  // Animation for training cards
  const trainingCards = document.querySelectorAll(".training-card")

  function checkScroll() {
    trainingCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top
      const triggerBottom = window.innerHeight * 0.8

      if (cardTop < triggerBottom) {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      }
    })
  }

  // Set initial state for animation
  trainingCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(50px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Check scroll position on load and scroll
  window.addEventListener("load", checkScroll)
  window.addEventListener("scroll", checkScroll)
})
