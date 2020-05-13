<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="w-3/5">
        <input
          type="textbox"
          :placeholder="$t('controlButtons.placeholder')"
          class="w-full p-2 border rounded"
          v-model="description"
          :class="{ dark: theme.mode === 'dark' }"
        />
      </div>
      <div>
        <a
          class="btn"
          @click="addTodo"
          :class="{ disabled: loading || !description }"
        >
          {{
            loading
              ? $t("controlButtons.adding")
              : $t("controlButtons.add")
          }}
        </a>
        <a class="btn ml-2" @click="reset">
          {{ $t("controlButtons.reset") }}
        </a>
      </div>
    </div>
    <div v-if="error" class="mt-3 text-sm text-red-400">
      {{ error }}
    </div>
  </div>
</template>
<script>
import { themeMixin } from "@/utils/mixins";
export default {
  mixins: [themeMixin],
  props: {
    loading: { type: Boolean, default: false },
    error: { type: String, default: null },
  },
  data() {
    return {
      description: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.description) return;
      this.$emit("add", { description: this.description });
      this.reset();
      return;
    },
    reset() {
      this.description = "";
      return;
    },
  },
};
</script>
<style lang="sass" scoped>
.btn
  @apply cursor-pointer text-black bg-gray-200 px-3 py-2 rounded border border-gray-400
  &.disabled
    @apply text-gray-500
input.dark
  @apply bg-gray-900
</style>
