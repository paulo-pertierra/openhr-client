<!-- <template>
  <Pie :data="data" :options="options" style="padding: 3%; margin: 2%; height: 450px; width: 100%" />
</template>

<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import axios from "axios";


ChartJS.register(ArcElement, Tooltip, Legend);



const data = {
  labels: ["Present", "Leave", "Absent"],
  datasets: [
    {
      backgroundColor: ["#E46651", "#00D8FF", "#DD1B16"],
      data: [1, 1, 1]
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false
};
</script> -->

<template>
  <Pie
    :data="chartData"
    :options="chartOptions"
    style="padding: 3%; margin: 2%; height: 450px; width: 100%"
  />
</template>

<script lang="ts">
// DataPage.vue
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "BarChart",
  components: { Pie },
  data() {
    return {
      stats: [0, 0, 0]
    };
  },
  mounted() {
    axios.get("/stats/users").then((res) => {
      this.stats = [res.data.data.present, res.data.data.late, res.data.data.absent];
    });
  },
  computed: {
    chartData() {
      return {
        labels: ["On Time", "Late", "Absent"],
        datasets: [
          {
            backgroundColor: ["#15803D", "#F97316", "#EF4444"],
            data: this.stats
          }
        ]
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false
      };
    }
  }
};
</script>
