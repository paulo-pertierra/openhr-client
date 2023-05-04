<template>
  <div class="header"></div>
  <div class="calendar-size">
    <div class="calendar-table">
      <div class="calendar-header">
        <button @click="prevMonth">&lt;</button>
        <h2>{{ monthName }} {{ year }}</h2>
        <button @click="nextMonth">&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th v-for="day in weekdays" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, index) in weeks" :key="index">
            <td
              v-for="(day, dayIndex) in week"
              :key="day.date"
              :class="[{ holiday: day.holiday }, getHolidayColor(day)]"
            >
              <div class="day">{{ day.date }}</div>
              <div class="holiday">{{ day.holiday }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: "",
      currentDate: "",
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weeks: [],
      holidays: [
        { date: "1-01", holiday: "New Year's Day", type: "regular" },
        { date: "2-01", holiday: "Panagbenga Festival", type: "provincial" },
        { date: "4-09", holiday: "Maundy Thursday", type: "regular" },
        { date: "4-10", holiday: "Good Friday", type: "regular" },
        { date: "5-01", holiday: "Labor Day", type: "regular" },
        { date: "6-12", holiday: "Independence Day", type: "regular" },
        { date: "8-30", holiday: "National Heroes Day", type: "regular" },
        { date: "9-01", holiday: "Baguio Charter Day", type: "provincial" },
        { date: "9-03", holiday: "Baguio Founders Day", type: "provincial" },
        { date: "11-01", holiday: "All Saints Day", type: "regular" },
        { date: "11-02", holiday: "All Souls Day", type: "regular" },
        { date: "12-25", holiday: "Christmas Day", type: "regular" },
        { date: "12-30", holiday: "Rizal Day", type: "regular" }
      ],
      year: new Date().getFullYear(),
      month: new Date().getMonth()
    };
  },
  computed: {
    weeks() {
      const days = [];
      const firstDay = new Date(this.year, this.month, 1).getDay();
      const lastDate = new Date(this.year, this.month + 1, 0).getDate();
      let dayCount = 1;

      for (let i = 0; i < 6; i++) {
        const week = [];
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
            week.push({});
          } else if (dayCount <= lastDate) {
            const date = `${this.month + 1}-${dayCount.toString().padStart(2, "0")}`;
            const holiday = this.getHoliday(date);

            week.push({
              date: dayCount,
              holiday: holiday ? holiday.holiday : "",
              type: holiday ? holiday.type : ""
            });
            dayCount++;
          } else {
            week.push({});
          }
        }
        days.push(week);
      }
      return days;
    },
    monthName() {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      return monthNames[this.month];
    }
  },
  methods: {
    prevMonth() {
      if (this.month === 0) {
        this.month = 11;
        this.year--;
      } else {
        this.month--;
      }
    },
    nextMonth() {
      if (this.month === 11) {
        this.month = 0;
        this.year++;
      } else {
        this.month++;
      }
    },
    getHoliday(date) {
      return this.holidays.find((holiday) => holiday.date === date);
    },
    getHolidayColor(day) {
      if (day.type === "special") {
        return "red";
      } else if (day.type === "regular") {
        return "blue";
      } else if (day.type === "provincial") {
        return "pink";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #fff;
}

button {
  border: 2px #000;
  border-radius: 8px;
  box-shadow: 0px 1px 60px 1px #000;
  margin: 50px;
}
li {
  list-style: none;
}

.calendar-size {
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 1em;
}

.calendar-table {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80%;
}

.legend {
  width: 20%;
  margin-top: 2em;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 22%;
  width: 100%;
  font-size: 4rem;
}
.color-red {
  background: red;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.color-blue {
  background: blue;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.color-pink {
  background: pink;
  border-radius: 50%;
  width: 10px;
  height: 10px;
}
.calendar-header button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

table {
  width: 90%;
  border-collapse: collapse;
  padding: 0%;
  margin-left: 10%;
}

th,
td {
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  width: 10%;
  height: 10vh;
}

.day {
  font-weight: bold;
  font-size: 1.2rem;
}

.holiday {
  font-size: 1.2rem;
}
</style>
