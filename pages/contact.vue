<template>
  <div>
    <div class="title units-row">
      <h1>Contact</h1>
    </div>
    <div id="contact" class="units-row">
      <div class="unit-50">
        <h2>Form</h2>
        <form>
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
            <textarea id="message" name="message" maxlength="250" v-model="message"></textarea>
          </p>

          <button type="submit" class="btn">Submit</button>
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
      name: '',
      message: '',
      email: ''
    }
  }
}
</script>