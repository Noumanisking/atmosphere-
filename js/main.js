document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const mobileNav = document.querySelector(".mobile-nav")

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active")
      mobileNav.classList.toggle("active")
      document.body.classList.toggle("menu-open")
    })
  }

  // Mobile Dropdown Toggle
  const mobileDropdowns = document.querySelectorAll(".mobile-nav .dropdown > a")

  mobileDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      e.preventDefault()
      const dropdownContent = this.nextElementSibling

      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none"
      } else {
        dropdownContent.style.display = "block"
      }
    })
  })

  // Hero Slider
  const heroSlides = document.querySelectorAll(".hero-slide")
  let currentSlide = 0

  if (heroSlides.length > 1) {
    function showSlide(index) {
      heroSlides.forEach((slide) => {
        slide.style.opacity = "0"
      })

      heroSlides[index].style.opacity = "1"
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % heroSlides.length
      showSlide(currentSlide)
    }

    // Auto slide every 5 seconds
    setInterval(nextSlide, 50000)
  }

  // Testimonial Slider
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  const prevTestimonial = document.querySelector(".prev-testimonial")
  const nextTestimonial = document.querySelector(".next-testimonial")
  let currentTestimonial = 0

  if (testimonialCards.length > 0 && prevTestimonial && nextTestimonial) {
    function showTestimonial(index) {
      testimonialCards.forEach((card) => {
        card.style.transform = `translateX(-${index * 100}%)`
      })
    }

    prevTestimonial.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length
      showTestimonial(currentTestimonial)
    })

    nextTestimonial.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length
      showTestimonial(currentTestimonial)
    })

    // Auto slide every 7 seconds
    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonialCards.length
      showTestimonial(currentTestimonial)
    }, 7000)
  }

  // Timetable Tabs
  const dayTabs = document.querySelectorAll(".day-tab")
  const timetableDays = document.querySelectorAll(".timetable-day")

  if (dayTabs.length > 0 && timetableDays.length > 0) {
    dayTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const day = this.getAttribute("data-day")

        // Remove active class from all tabs and days
        dayTabs.forEach((tab) => tab.classList.remove("active"))
        timetableDays.forEach((day) => day.classList.remove("active"))

        // Add active class to clicked tab and corresponding day
        this.classList.add("active")
        document.querySelector(`.timetable-day[data-day="${day}"]`).classList.add("active")
      })
    })
  }

  // Scroll Animation
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".feature-card, .facility-card, .class-card, .trainer-card, .program-card",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        element.classList.add("animate")
      }
    })
  }

  window.addEventListener("scroll", animateOnScroll)

  // Initialize animations on page load
  animateOnScroll()

  // Header Scroll Effect
  const header = document.querySelector("header")

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")

      if (targetId !== "#") {
        e.preventDefault()

        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          })

          // Close mobile menu if open
          if (mobileNav && mobileNav.classList.contains("active")) {
            mobileMenuToggle.classList.remove("active")
            mobileNav.classList.remove("active")
            document.body.classList.remove("menu-open")
          }
        }
      }
    })
  })

  // Play Button for Video
  const playButton = document.querySelector(".play-button")
  const videoContainer = document.querySelector(".video-container")

  if (playButton && videoContainer) {
    playButton.addEventListener("click", () => {
      const thumbnail = videoContainer.querySelector("img")
      const videoId = "YOUR_VIDEO_ID" // Replace with your actual video ID

      if (thumbnail) {
        const iframe = document.createElement("iframe")
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`
        iframe.width = "100%"
        iframe.height = "100%"
        iframe.frameBorder = "0"
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        iframe.allowFullscreen = true

        videoContainer.innerHTML = ""
        videoContainer.appendChild(iframe)
      }
    })
  }
})
