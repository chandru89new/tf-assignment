<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <input
        @click="clickedToggle"
        :id="id"
        type="checkbox"
        :checked="isComplete"
      />
      <label class="ml-3" :for="id">
        {{ description }}
      </label>
    </div>
    <div class="text-sm text-right">
      <span class="text-gray-500">
        {{ created | formatTimeSince }}
      </span>
      <a class="ml-2" @click="clickedDelete">
        {{ $t("controlButtons.delete") }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: { type: Number, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    created: { type: [String, Date] },
  },
  methods: {
    clickedToggle() {
      return this.$emit("toggleStatus", { id: this.id });
    },
    clickedEdit() {
      return this.$emit("edit", { id: this.id });
    },
    clickedDelete() {
      return this.$emit("delete", { id: this.id });
    },
  },
};
</script>
