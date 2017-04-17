<template>
  <div class="timepick">
    <div class="current-border">
      <span>小时</span>
      <span>分钟</span>
    </div>
    
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hours: [],
        minutes: [],
        hoursBuff: {},
        minutesBuff: {}
      }
    },
    computed: {
      hoursOffset () {

      },
      currentHeight () {
        document.querySelector('.time-hour-wrap').getBoundingClientRect()
      }
    },
    methods: {
      computedArr (min, max) {
        var buffArray = [];
        for(var i= min; buffArray.push(i++) <= max;);
        return buffArray
      },
      touchstart (e, type) {
        this[type].startY = e.changedTouches[0].clientY;
        console.log(e);
        
        // document.querySelector(e.)
      },
      touchmove (e, type) {
       this[type].moveY = e.changedTouches[0].clientY;
       //console.log(this[type].moveY-this[type].startY)
      },
      touchend (e, type) {
        this[type].endY = e.changedTouches[0].clientY;
        //console.log(this[type].endY-this[type].startY)
      }
    },
    mounted () {
      // this.hours = this.computedArr(0,12)
      this.hours=this.computedArr(0,12)
      this.minutes=this.computedArr(0,12)
    }
  }
</script>