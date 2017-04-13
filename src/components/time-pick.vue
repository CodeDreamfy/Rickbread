<template>
  <div class="timepick">
    <div class="current-border">
      <span>小时</span>
      <span>分钟</span>
    </div>
    <div class="picker-date"  @touchstart="touchstart($event,'hoursBuff')" @touchmove="touchmove($event,'hoursBuff')" @touchend="touchend($event,'hoursBuff')">
      <ul class="time-hour-wrap left">
        <li>6</li>
        <li class="adjacent">7</li>
        <li class="current">12</li>
        <li class="adjacent">9</li>
        <li>10</li>
      </ul>
    </div>
    <div class="picker-date">
      <ul class="time-minute-wrap right">
        <li>4</li>
        <li class="adjacent">5</li>
        <li class="current">58</li>
        <li class="adjacent">7</li>
        <li>8</li>
      </ul>
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