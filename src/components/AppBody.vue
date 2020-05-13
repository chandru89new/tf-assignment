<template>
  <div
    :class="{
      dark: theme.mode === 'dark',
      large: theme.fontSize === 'large',
    }"
    id="appBody"
  >
    <div
      class="mt-10 pt-10 px-5 max-w-full md:max-w-screen-md m-auto"
    >
      <slot />
    </div>
  </div>
</template>
<script>
import { themeMixin } from "@/utils/mixins";
export default {
  mixins: [themeMixin],
};
</script>
<style lang="sass" scoped>
#appBody
  min-height: 100vh

.dark
  @apply bg-gray-800 text-white
.large
  font-size: 1.5em
</style>
