<template>
  <transition name="fade">
    <div class="mask-layer-wrapper" v-show="state"  v-on:click="changeState($event)">
      <slot name="container"></slot>
    </div>

  </transition>
</template>

<script>
  export default {
    props: {
      isState: Number
    },
    data () {
      return {
        state: 0
      }
    },
    methods: {
      changeState ($) {
        var elem =  $.target.className;
        if(elem == 'mask-layer-wrapper'){
          // this.state = false;
          console.log("keke")
          this.$emit('changeState')
        }
      }
    },
    computed: {
      isState () {
        this.state = this.isState;
      }
    }
  }
</script>