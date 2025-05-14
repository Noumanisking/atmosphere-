document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form")

  // Form Validation
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let isValid = true

      // Clear previous error messages
      const errorMessages = document.querySelectorAll(".error-message")
      errorMessages.forEach((message) => message.remove())

      const inputWrappers = document.querySelectorAll(".input-wrapper")
      inputWrappers.forEach((wrapper) => wrapper.classList.remove("error"))

      // Validate Name
      const nameInput = document.getElementById("name")
      if (!nameInput.value.trim()) {
        addError(nameInput, "Please enter your full name")
        isValid = false
      }

      // Validate Email
      const emailInput = document.getElementById("email")
      if (!emailInput.value.trim()) {
        addError(emailInput, "Please enter your email address")
        isValid = false
      } else if (!isValidEmail(emailInput.value)) {
        addError(emailInput, "Please enter a valid email address")
        isValid = false
      }

      // Validate Subject
      const subjectInput = document.getElementById("subject")
      if (!subjectInput.value) {
        addError(subjectInput, "Please select a subject")
        isValid = false
      }

      // Validate Message
      const messageInput = document.getElementById("message")
      if (!messageInput.value.trim()) {
        addError(messageInput, "Please enter your message")
        isValid = false
      }

      // If form is valid, submit it
      if (isValid) {
        // Simulate form submission
        const submitButton = document.querySelector(".submit-button")
        submitButton.disabled = true
        submitButton.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>'

        // Simulate API call
        setTimeout(() => {
          // Show success message
          contactForm.innerHTML = `
                        <div class="success-message" style="text-align: center; padding: 2rem;">
                            <div class="success-icon" style="width: 80px; height: 80px; margin: 0 auto 1.5rem; background-color: rgba(0, 230, 118, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-check" style="font-size: 2.5rem; color: var(--success);"></i>
                            </div>
                            <h2>Message Sent Successfully!</h2>
                            <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                            <a href="index.html" class="neon-button" style="margin-top: 1.5rem;">Return to Home</a>
                        </div>
                    `
        }, 2000)
      }
    })
  }

  // Helper Functions
  function addError(input, message) {
    const inputWrapper = input.closest(".input-wrapper")
    inputWrapper.classList.add("error")

    const errorMessage = document.createElement("div")
    errorMessage.className = "error-message"
    errorMessage.textContent = message
    errorMessage.style.color = "var(--danger)"
    errorMessage.style.fontSize = "0.9rem"
    errorMessage.style.marginTop = "0.5rem"

    inputWrapper.parentNode.insertBefore(errorMessage, inputWrapper.nextSibling)
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question")

  if (faqQuestions.length > 0) {
    faqQuestions.forEach((question) => {
      question.addEventListener("click", function () {
        const answer = this.nextElementSibling
        const icon = this.querySelector(".faq-toggle i")

        // Toggle active class
        this.classList.toggle("active")

        // Toggle answer visibility
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null
          icon.classList.remove("fa-minus")
          icon.classList.add("fa-plus")
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px"
          icon.classList.remove("fa-plus")
          icon.classList.add("fa-minus")
        }
      })
    })
  }
})
