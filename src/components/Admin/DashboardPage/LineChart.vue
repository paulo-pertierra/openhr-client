<template>
  <div class="w-96 h-48 mt-10">
    <p>Put this in a card so it looks cleaner</p>
    <Pie :data="data" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['On Leave', 'Present', 'AWOL'],
  datasets: [
    {
      backgroundColor: ['#E46651', '#00D8FF', '#DD1B16'],
      data: [20, 80, 10]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

</script>