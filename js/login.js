document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form")
  const togglePasswordButton = document.querySelector(".toggle-password")
  const passwordInput = document.getElementById("password")

  // Toggle Password Visibility
  if (togglePasswordButton && passwordInput) {
    togglePasswordButton.addEventListener("click", function () {
      const icon = this.querySelector("i")

      if (passwordInput.type === "password") {
        passwordInput.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        passwordInput.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  }

  // Form Validation
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let isValid = true

      // Clear previous error messages
      const errorMessages = document.querySelectorAll(".error-message")
      errorMessages.forEach((message) => message.remove())

      const inputWrappers = document.querySelectorAll(".input-wrapper")
      inputWrappers.forEach((wrapper) => wrapper.classList.remove("error"))

      // Validate Email
      const emailInput = document.getElementById("email")
      if (!emailInput.value.trim()) {
        addError(emailInput, "Please enter your email address")
        isValid = false
      } else if (!isValidEmail(emailInput.value)) {
        addError(emailInput, "Please enter a valid email address")
        isValid = false
      }

      // Validate Password
      if (!passwordInput.value) {
        addError(passwordInput, "Please enter your password")
        isValid = false
      }

      // If form is valid, submit it
      if (isValid) {
        // Simulate form submission
        const submitButton = document.querySelector(".submit-button")
        submitButton.disabled = true
        submitButton.innerHTML = '<span>Processing...</span> <i class="fas fa-spinner fa-spin"></i>'

        // Simulate API call
        setTimeout(() => {
          // Redirect to home page or dashboard
          window.location.href = "index.html"
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

    inputWrapper.parentNode.insertBefore(errorMessage, inputWrapper.nextSibling)
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Social Login Buttons
  const googleButton = document.querySelector(".social-button.google")
  const facebookButton = document.querySelector(".social-button.facebook")

  if (googleButton) {
    googleButton.addEventListener("click", function () {
      // Simulate Google login
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Connecting...</span>'

      setTimeout(() => {
        window.location.href = "index.html"
      }, 2000)
    })
  }

  if (facebookButton) {
    facebookButton.addEventListener("click", function () {
      // Simulate Facebook login
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Connecting...</span>'

      setTimeout(() => {
        window.location.href = "index.html"
      }, 2000)
    })
  }
})
