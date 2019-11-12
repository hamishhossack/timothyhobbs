<template>
  <div>
    <div class="title units-row">
      <h1>Contact</h1>
    </div>
    <div id="contact" class="units-row">
      <div class="unit-50">
        <h2>Form</h2>
        <form @submit.prevent="sendEmail" name="contact">
          <p>
            <label for="name">Name</label>
            <br />
            <input id="name" type="text" name="name" maxlength="64" v-model="name" />
          </p>

          <p>
            <label for="email">
              Email
              <span class="required">*</span>
            </label>
            <br />
            <input id="email" type="text" name="email" maxlength="64" v-model="email" />
          </p>

          <p>
            <label for="message">
              Message
              <span class="required">*</span>
            </label>
            <br />
            <textarea id="message" name="message" maxlength="750" v-model="message"></textarea>
            <span class="count">{{message.length}} / 750</span>
          </p>

          <div class="unit-25">
            <button type="submit" :disabled="!isValidForm" class="btn">Submit</button>
          </div>
          <div class="unit 75">
            <p v-if="sent">
              <span v-if="success" class="success">You message was sent successfully</span>
              <span v-if="!success" class="error">You message was not sent, please try again!</span>
            </p>
          </div>
        </form>
      </div>
      <div id="rightbar" class="unit-50">
        <h3>Details</h3>
        <div class="units-row-end">
          <div class="unit-50">
            <p>Name:</p>
          </div>
          <div class="unit-50">
            <p>Timothy Hobbs</p>
          </div>
        </div>
        <div class="units-row-end">
          <div class="unit-50">
            <p>Email:</p>
          </div>
          <div class="unit-50">
            <p>tim@timothyhobbs.co.uk</p>
          </div>
        </div>
        <div class="units-row">
          <div class="unit-50">
            <p>Phone:</p>
          </div>
          <div class="unit-50">
            <p>01372 452197 or 07923484874</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sent: false,
      success: false,
      name: '',
      message: '',
      email: ''
    }
  },

  computed: {
    isValidForm() {
      return !!this.message && !!this.email
    }
  },

  methods: {
    recaptcha() {
      this.$recaptcha('login').then(token => {
        console.log(token) // Will print the token
      })
    },
    async sendEmail() {
      this.sent = true

      try {
        const response = await fetch(`${window.location.origin}/api/contact`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrer: 'no-referrer',
          body: JSON.stringify({
            name: this.name,
            message: this.message,
            email: this.email
          })
        })

        if (response.status === 200) {
          this.success = true
        } else {
          this.success = false
        }
      } catch (error) {
        this.success = false
      }
    }
  }
}
</script>

<style>
.error {
  color: orangered;
}
.success {
  color: green;
}
.count {
  text-align: right;
  width: 100%;
  display: block;
  font-size: 0.9rem;
}
</style>