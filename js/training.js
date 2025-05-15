document.addEventListener("DOMContentLoaded", () => {
  // Trainers carousel functionality
  const trainerCards = document.querySelectorAll(".trainer-card")
  const prevTrainer = document.querySelector(".prev-trainer")
  const nextTrainer = document.querySelector(".next-trainer")
  const trainersSlider = document.querySelector(".trainers-slider")

  if (prevTrainer && nextTrainer && trainersSlider) {
    prevTrainer.addEventListener("click", () => {
      trainersSlider.scrollBy({
        left: -350,
        behavior: "smooth",
      })
    })

    nextTrainer.addEventListener("click", () => {
      trainersSlider.scrollBy({
        left: 350,
        behavior: "smooth",
      })
    })
  }

  // Animation for training cards and package cards on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".training-type-card, .trainer-card, .package-card")

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
