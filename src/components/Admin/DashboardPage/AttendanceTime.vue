<template>
    <div class="text-center w-80 h-20 bg-indigo-700 border border-gray-200 shadow">
  <div class="grid grid-cols-2 p-3 gap-4">
    <div class="text-white font-bold text-5xl ml-auto">{{ currentTime }}</div>
    <div class="text-white font-bold text-xl mr-auto">{{ currentDay }}<hr class=" border-white">{{amPm}}</div>

  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDay: '',
      currentTime: '',
      amPm: ''
    }
  },
  mounted() {
    this.updateDateTime()
    this.timer = setInterval(() => {
      this.updateDateTime()
    }, 1000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    updateDateTime() {
      const now = new Date()
      const dateOptions = {
        weekday: 'short'
      }
      const timeOptions = {
        hour: 'numeric',
        minute: 'numeric'
      }
      this.currentDay = now.toLocaleDateString('en-US', dateOptions)
      this.currentTime = now.toLocaleTimeString('en-US', timeOptions).slice(0,5)
      this.amPm = now.toLocaleTimeString('en-US', { hour12: true }).slice(-2)
    }
  }
}
</script>