document.addEventListener("DOMContentLoaded", () => {
  // Pricing Toggle Functionality
  const pricingToggle = document.getElementById("pricing-toggle")
  const monthlyPrices = document.querySelectorAll(".price.monthly")
  const yearlyPrices = document.querySelectorAll(".price.yearly")

  if (pricingToggle && monthlyPrices.length > 0 && yearlyPrices.length > 0) {
    pricingToggle.addEventListener("change", function () {
      if (this.checked) {
        // Show yearly prices
        monthlyPrices.forEach((price) => {
          price.style.opacity = "0"
          price.style.transform = "translateY(-10px)"
        })

        yearlyPrices.forEach((price) => {
          price.style.opacity = "1"
          price.style.transform = "translateY(0)"
        })
      } else {
        // Show monthly prices
        yearlyPrices.forEach((price) => {
          price.style.opacity = "0"
          price.style.transform = "translateY(10px)"
        })

        monthlyPrices.forEach((price) => {
          price.style.opacity = "1"
          price.style.transform = "translateY(0)"
        })
      }
    })
  }

  // Animation for pricing cards
  const pricingCards = document.querySelectorAll(".pricing-card")

  function animatePricingCards() {
    pricingCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1"
        card.style.transform = card.classList.contains("featured") ? "scale(1.05)" : "translateY(0)"
      }, index * 200)
    })
  }

  // Set initial state for animation
  pricingCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(50px)"
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Animate pricing cards on page load
  window.addEventListener("load", animatePricingCards)

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

  // Highlight comparison table rows on hover
  const comparisonRows = document.querySelectorAll(".comparison-table tr")

  if (comparisonRows.length > 0) {
    comparisonRows.forEach((row) => {
      row.addEventListener("mouseenter", () => {
        row.style.backgroundColor = "rgba(0, 255, 204, 0.05)"
      })

      row.addEventListener("mouseleave", () => {
        row.style.backgroundColor = ""
      })
    })
  }
})
