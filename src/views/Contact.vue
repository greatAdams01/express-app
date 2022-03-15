<template>
  <div>
  <Navbar />
    <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
            <li><a @click="$router.push('/')">Home</a></li>
            <li>Contact</li>
          </ol>
        </div>

      </div>
    </section><!-- End Breadcrumbs -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@peak-express.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1(424)-260-8521s</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">

            <form @submit.prevent="onSubmit" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input v-model="state.name" type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input v-model="state.email" type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input v-model="state.subject" type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea v-model="state.message" class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div :class="[state.errorMsg ? 'error-message errr-message' : 'error-message']">{{state.errorMsg }}</div>
                <div :class="[state.successMsg ? 'sent-message send-message' : 'sent-message']">{{ state.successMsg }}</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main>
  
  <Footer />
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const state = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  errorMsg: '',
  successMsg: ''
})

const onSubmit = async () => {
      const errorText = 'Fill every filed'
      if (!state.name) {
        state.errorMsg = errorText
        return state.errorMsg
      }
      if (!state.email) {
        state.errorMsg = errorText
        return state.errorMsg
      }
      if (!validEmail(state.email)) {
        state.errorMsg = 'Add a valid email'
        return state.errorMsg
      }
      if (!state.subject) {
        state.errorMsg = errorText
        return state.errorMsg
      }
      if (!state.message) {
        state.errorMsg = errorText
        return state.errorMsg
      }
      const data = {
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message
      }
      const response = await fetch('https://formsubmit.co/ajax/info@peak-express.com', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      // return response.json();
      if (response.status === 200) {
        state.successMsg = 'Message sent'
        return state.errorMsg
      }
      if (response.status !== 200) {
        state.errorMsg = 'Something went wrong'
        return state.errorMsg
      }
    }

    const validEmail = (email) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
</script>

<style scoped>
.errr-message {
  display: block !important;
  font-size: 20px;
}
.send-message {
  display: block !important;
  font-size: 20px; 
}
</style>