<template>
  <div
    id="header"
    class="top-0 inset-x-0 fixed py-3 px-4 text-white w-full border-b shadow"
    :class="{
      'bg-gray-600': theme.mode === 'light',
      'bg-gray-900': theme.mode === 'dark',
    }"
  >
    <div class="items-center flex justify-between">
      <div @click="$router.push('/')" class="cursor-pointer">
        2Do.
      </div>
      <div v-if="isLoggedIn">
        <a @click="toggleMode">
          <template v-if="theme.mode === 'light'">
            {{ $t("themeText.darkMode", { mode: "Mode" }) }}
          </template>
          <template v-else>
            {{ $t("themeText.lightMode", { mode: "Mode" }) }}
          </template>
        </a>
        |
        <a @click="toggleSize">
          {{
            theme.fontSize === "large"
              ? $t("themeText.fontSizeDefault")
              : $t("themeText.fontSizeLarge")
          }}
        </a>
        |
        <a @click="toggleLocale">
          {{ $i18n.locale === "en" ? "Korean" : "English" }}
        </a>
        |
        <a @click="logout">
          Logout
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { themeMixin } from "@/utils/mixins";
export default {
  mixins: [themeMixin],
  methods: {
    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === "en" ? "kr" : "en";
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/login?logout=1");
    },
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem("user");
    },
  },
};
</script>
