<template>
  <div v-if="current_user">
    Signed in as {{ current_user.name }}
    <a href="/logout">Logout</a>
  </div>
  <div v-else>
    <a href="/login">Login</a>
    <a href="/signup">Signup</a>
  </div>
</template>

<script>
export default {
  data: function() {
    return ({
      current_user: null
    })
  },
  props: {
    _current_user: {}
  },
  mounted: function() {
    if (this._current_user[0] === null) {
      this.current_user = null;
    } else {
      this.current_user = { ...this._current_user };
    }
  }
}
</script>

<style scoped>

</style>
