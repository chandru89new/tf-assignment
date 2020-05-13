<template>
  <div class="text-center">
    <div class="text-lg">
      {{ $t("login") }}
    </div>
    <div
      class="text-sm text-red-400"
      v-if="$route.query && $route.query.err"
    >
      {{
        $route.query.err == 1
          ? "You have to login to continue"
          : "Invalid login creds."
      }}
    </div>
    <div
      class="text-sm text-green-400"
      v-if="$route.query && $route.query.logout"
    >
      Logged out successfully.
    </div>
    <div class="mt-5">
      <input
        v-model="user"
        class="text-lg border rounded p-2"
        placeholder="Type 'abcd' to login"
      />
      <a
        class="text-lg ml-3 py-3 px-5 bg-gray-600 text-white rounded"
        @click="login"
      >
        {{ $t("login") }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    login() {
      if (this.user && this.user.trim() === "abcd") {
        localStorage.setItem("user", this.user);
        this.$router.push("/");
      } else {
        this.$router.push("/login?err=2");
      }
    },
  },
};
</script>
