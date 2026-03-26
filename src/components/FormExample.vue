<script setup>
import { ref, reactive } from 'vue'
import { useMessage } from 'naive-ui'

const { message } = useMessage()

/**
 * FORM SUBMISSION WITH VALIDATION AND FILE HANDLING
 * -------------------------------------------------
 * This component demonstrates a typical front-end form flow:
 * 1. Managing reactive form state
 * 2. Handling file uploads via an input element
 * 3. Client-side validation before submission
 * 4. Simulating a mock API hit using `fetch()` or similar logic
 */

// 1. Reactive state for our form inputs
const formData = reactive({
  name: '',
  email: '',
  // For files, we usually just keep a reference to the File object, not a string
  avatar: null
})

// 2. State for UI feedback (loading state, error messages, success messages)
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const errors = reactive({
  name: '',
  email: '',
  avatar: ''
})

/**
 * File Input Handler
 * Triggered whenever the user selects a file.
 */
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Optional: Basic file validation (e.g., checking size or type)
    if (file.size > 2 * 1024 * 1024) { // 2MB restriction
      errors.avatar = 'File size must be less than 2MB'
      formData.avatar = null
    } else {
      errors.avatar = ''
      formData.avatar = file
    }
  }
}

/**
 * Basic Validation Logic
 * Ensures required fields are filled and formatted correctly.
 */
const validateForm = () => {
  let isValid = true

  // Reset errors
  errors.name = ''
  errors.email = ''

  if (!formData.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  // Simple email regex for demonstration
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim() || !emailRegex.test(formData.email)) {
    errors.email = 'Valid email is required'
    isValid = false
  }

  // File is required in this example
  if (!formData.avatar) {
    errors.avatar = 'Avatar image is required (under 2MB)'
    isValid = false
  }

  return isValid
}

/**
 * Form Submit Handler
 * Handles validation, payload creation via FormData, and the API hit.
 */
const submitForm = async () => {
  submitSuccess.value = false

  // Step 1: Run validation before doing anything
  if (!validateForm()) return

  // Step 2: Set loading state
  isSubmitting.value = true

  try {
    // Step 3: Prepare the payload
    // When sending files, we MUST use the FormData API instead of standard JSON
    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('email', formData.email)
    payload.append('avatar', formData.avatar) // Appending the raw File object

    // Step 4: Hit the API
    // (This is a mock endpoint for demonstration purposes)
    console.log('Sending payload...', payload)

    // Simulating an API delay of 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000))

    /* 
      Real API code would look like this:
      const response = await fetch('https://your-api.com/users', {
        method: 'POST',
        body: payload, // The browser automatically sets the "multipart/form-data" headers
        // headers: {
        //   Authorization: Bearer my-token
        // }
      });
      if (!response.ok) throw new Error('API Request Failed')
    */

    // Step 5: Handle success
    submitSuccess.value = true
    message.success('Data berhasil dikirim', {
      closable: true
    })

    // Optional: Reset form after success
    formData.name = ''
    formData.email = ''
    formData.avatar = null

  } catch (error) {
    // Handle error (e.g., showing a global error message to the user)
    console.error('Submission error:', error)
  } finally {
    // Step 6: End loading state whether successful or failed
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="form-container">
    <h2>Basic Form Submission Flow</h2>

    <div v-if="submitSuccess" class="success-message">
      Form submitted successfully! 🎉
    </div>

    <!-- The .prevent modifier stops the default HTML page refresh behavior -->
    <form @submit.prevent="submitForm">

      <!-- Name Input -->
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="formData.name" type="text" placeholder="John Doe" :disabled="isSubmitting" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>

      <!-- Email Input -->
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="formData.email" type="email" placeholder="john@example.com" :disabled="isSubmitting" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <!-- File Upload Input -->
      <div class="form-group">
        <label for="avatar">Profile Avatar</label>
        <!-- For files, we bind the `@change` event instead of using `v-model` -->
        <input id="avatar" type="file" accept="image/*" @change="handleFileUpload" :disabled="isSubmitting" />
        <span v-if="errors.avatar" class="error">{{ errors.avatar }}</span>
      </div>

      <!-- Submit Button -->
      <!-- The button is disabled while submitting to prevent double-clicks -->
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Submit Data' }}
      </button>

    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
input[type="email"],
input[type="file"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 0.85em;
  margin-top: 5px;
}

.success-message {
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
}
</style>
