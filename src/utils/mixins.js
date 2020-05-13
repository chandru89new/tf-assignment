export const themeMixin = {
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
  },
  methods: {
    toggleMode() {
      this.$store.commit("updateTheme", {
        ...this.theme,
        mode: this.theme.mode === "light" ? "dark" : "light",
      });
    },
    toggleSize() {
      this.$store.commit("updateTheme", {
        ...this.theme,
        fontSize:
          this.theme.fontSize === "large" ? "default" : "large",
      });
    },
  },
};
