<template>
    <div class="grid grid-cols-3 mt-4">
        <div class="calendar-header">
        <h2>{{ monthName }} {{ year }}</h2>
        </div>
        <div class=" ml-32">
        <button @click="nextMonth">&gt;</button>
        </div>
        <div class=" ml-16">
        <button @click="prevMonth">&lt;</button>
        </div>
    </div>
    <table class="mt-10">
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
                <td v-for="(day, dayIndex) in week" :key="day.date"
                    :class="[{ 'holiday': day.holiday }, getHolidayColor(day)]">
                    <div class="day">{{ day.date }}</div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="text-2xl">
    Holiday:
    </div>
    <div v-for="(week, index) in weeks" :key="index">
                <div v-for="(day, dayIndex) in week" :key="day.date"
                    :class="[{ 'holiday': day.holiday }, getHolidayColor(day)]">
                    <div class="holiday ">{{ day.holiday }}</div>
                   
    </div>
</div>
</template>

<script>
export default {
data() {
return {
    currentMonth: '',
    currentDate: '',
    daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weeks: [],
    holidays: [
        { date: '1-01', holiday: "New Year's Day", type: 'regular' },
        { date: '2-01', holiday: 'Panagbenga Festival', type: 'provincial' },
        { date: '4-09', holiday: 'Maundy Thursday', type: 'regular' },
        { date: '4-10', holiday: 'Good Friday', type: 'regular' },
        { date: '5-01', holiday: 'Labor Day', type: 'regular' },
        { date: '6-12', holiday: 'Independence Day', type: 'regular' },
        { date: '8-30', holiday: 'National Heroes Day', type: 'regular' },
        { date: '9-01', holiday: 'Baguio Charter Day', type: 'provincial' },
        { date: '9-03', holiday: 'Baguio Founders Day', type: 'provincial' },
        { date: '11-01', holiday: 'All Saints Day', type: 'regular' },
        { date: '11-02', holiday: 'All Souls Day', type: 'regular' },
        { date: '11-05', holiday: 'Paulo Bday', type: 'regular' },
        { date: '12-25', holiday: 'Christmas Day', type: 'regular' },
        { date: '12-30', holiday: 'Rizal Day', type: 'regular' },

    ],
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
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
                const date = `${this.month + 1}-${dayCount.toString().padStart(2, '0')}`;
                const holiday = this.getHoliday(date);
                
                week.push({
                    date: dayCount,
                    holiday: holiday ? holiday.holiday : '',
                    type: holiday ? holiday.type : ''
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
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
    return this.holidays.find(holiday => holiday.date === date);
},
getHolidayColor(day) {
    if (day.type === 'special') {
        return 'red';
    } else if (day.type === 'regular') {
        return 'blue';
    } else if (day.type === 'provincial') {
        return 'pink';
    } else {
        return '';
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
border: 1px #000;
border-radius: 5px;
box-shadow: 0px 1px 80px 1px #000;

}
li{
list-style: none;
}
.calendar-header {
display: flex;
font-size: 1.2rem;
font-weight: 500;
color: #4C519F;
}
.calendar-header button {
background: none;
border: none;
cursor: pointer;
font-size: 1.2rem;
}
table {
width: 5%;
border-collapse: collapse;
padding: 0%;
margin-left: auto;
margin-right: auto;
border: none;

}

th{
text-align: center;
padding: 0.5rem;
width: 4%;
height: .5vh;
font-size: 1.5vh;
border: none;
}
td {
text-align: center;
padding: .5rem;
width: 4%;
height: .5vh;
border: none;
}

.day {
font-weight: bold;
font-size: .7rem;
}

.holiday {
font-size: 1.2rem;
}


</style>