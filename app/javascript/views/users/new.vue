<template>
  <form method="post" action="/users">
    <input type="hidden" name="authenticity_token" :value="csrf">
    <div class="field">
      <label class="label">Name</label>
      <input type="name" class="input" name="name">
    </div>

    <div class="field">
      <label class="label">Email</label>
      <input type="email" class="input" name="email">
    </div>

    <div class="field">
      <label class="label">Password</label>
      <input type="password" class="input" name="password">
    </div>

    <div class="field">
      <label class="label">Confirm Password</label>
      <input type="password" class="input" name="password_confirmation">
    </div>

    <div class="field">
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data: function() {
    return ({
       csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    })
  }
}
</script>

<style scoped>

</style>
