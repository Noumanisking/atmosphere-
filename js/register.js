document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registration-form")
  const passwordInput = document.getElementById("password")
  const confirmPasswordInput = document.getElementById("confirm-password")
  const togglePasswordButtons = document.querySelectorAll(".toggle-password")

  // Toggle Password Visibility
  togglePasswordButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.previousElementSibling
      const icon = this.querySelector("i")

      if (input.type === "password") {
        input.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        input.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  })

  // Form Validation
  if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
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

      // Validate Phone
      const phoneInput = document.getElementById("phone")
      if (!phoneInput.value.trim()) {
        addError(phoneInput, "Please enter your phone number")
        isValid = false
      }

      // Validate Age
      const ageInput = document.getElementById("age")
      if (!ageInput.value) {
        addError(ageInput, "Please enter your age")
        isValid = false
      } else if (ageInput.value < 16 || ageInput.value > 100) {
        addError(ageInput, "Age must be between 16 and 100")
        isValid = false
      }

      // Validate Gender
      const genderInputs = document.querySelectorAll('input[name="gender"]')
      let genderSelected = false
      genderInputs.forEach((input) => {
        if (input.checked) {
          genderSelected = true
        }
      })

      if (!genderSelected) {
        const genderGroup = document.querySelector(".radio-group")
        const errorMessage = document.createElement("div")
        errorMessage.className = "error-message"
        errorMessage.textContent = "Please select your gender"
        genderGroup.parentNode.appendChild(errorMessage)
        isValid = false
      }

      // Validate Branch
      const branchInput = document.getElementById("branch")
      if (!branchInput.value) {
        addError(branchInput, "Please select a branch")
        isValid = false
      }

      // Validate Password
      if (!passwordInput.value) {
        addError(passwordInput, "Please enter a password")
        isValid = false
      } else if (passwordInput.value.length < 8) {
        addError(passwordInput, "Password must be at least 8 characters long")
        isValid = false
      }

      // Validate Confirm Password
      if (!confirmPasswordInput.value) {
        addError(confirmPasswordInput, "Please confirm your password")
        isValid = false
      } else if (passwordInput.value !== confirmPasswordInput.value) {
        addError(confirmPasswordInput, "Passwords do not match")
        isValid = false
      }

      // Validate Terms Checkbox
      const termsCheckbox = document.querySelector('input[name="terms"]')
      if (!termsCheckbox.checked) {
        const checkboxGroup = termsCheckbox.closest(".checkbox-group")
        const errorMessage = document.createElement("div")
        errorMessage.className = "error-message"
        errorMessage.textContent = "You must agree to the Terms and Conditions"
        checkboxGroup.appendChild(errorMessage)
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
          // Hide form and show success message
          registrationForm.innerHTML = `
                        <div class="success-message" style="display: block;">
                            <div class="success-icon">
                                <i class="fas fa-check"></i>
                            </div>
                            <h2>Registration Successful!</h2>
                            <p>Thank you for registering with Atmosphere. We've sent a confirmation email to your inbox.</p>
                            <a href="index.html" class="neon-button">Return to Home</a>
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
    inputWrapper.appendChild(errorMessage)
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
})
