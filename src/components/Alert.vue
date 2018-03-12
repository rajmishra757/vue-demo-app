<template>
  <div id='alert' v-bind:class='["alert", alertStyleClass, "alert-dismissible"]'>
    <a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>
    <strong>
      <slot></slot>
    </strong>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    alertStyleClass: {
      type: String,
      default: 'alert-info',
    },
  },
};
</script>

<style scoped>
#alert {
  text-align: left;
}
</style>

