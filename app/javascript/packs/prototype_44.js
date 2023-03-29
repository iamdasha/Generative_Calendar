// CALENDAR

//let wrapper = getElementById('prototype_44')

let calendar = document.createElement('div')
calendar.setAttribute('id', 'month-calendar')

let month = document.createElement('ul')
month.classList.add('month')
calendar.appendChild(month)

let m = document.createElement('li')
m.classList.add('month-name')
month.appendChild(m)

let y = document.createElement('li')
y.classList.add('year-name')
month.appendChild(y)

let weekdays = document.createElement('ul')
weekdays.classList.add('weekdays')
calendar.appendChild(weekdays)

let dayName = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

for (let i = 0; i < 7; i++) {
  let li = document.createElement('li')
  li.innerHTML = dayName[i]
  weekdays.appendChild(li)
}

let days = document.createElement('ul')
days.classList.add('days')
calendar.appendChild(days)

let date = ['1', '2', '...', '31']

for (let i = 0; i < 4; i++) {
  let li = document.createElement('li')
  li.innerHTML = date[i]
  days.appendChild(li)
}

const prev = document.createElement('div')
prev.classList.add('prev')
prev.innerText = 'PREVIOUS'
calendar.appendChild(prev)

const next = document.createElement('div')
next.classList.add('next')
next.innerText = 'NEXT'
calendar.appendChild(next)

document.body.appendChild(calendar)


function generateCalendar() {
  let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    monthName = [
      'JANUARY',
      'FEBRUARY',
      'MARCH',
      'APRIL',
      'MAY',
      'JUNE',
      'JULY',
      'AUGUST',
      'SEPTEMBER',
      'OCTOBER',
      'NOVEMBER',
      'DECEMBER'
    ]

  let curDate = nowDate.setMonth(nowDate.getMonth() - 1)
  console.log(nowDate.getFullYear())

  function setMonthCalendar(year, month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
      monthPrefix = new Date(year, month, 0).getDay(),
      monthDaysText = ''

    monthContainer.textContent = monthName[month]
    yearContainer.textContent = year
    daysContainer.innerHTML = ''

    if (monthPrefix > 0) {
      for (let i = 1; i <= monthPrefix; i++) {
        monthDaysText += '<li></li>'
      }
    }

    for (let i = 1; i <= monthDays; i++) {
      monthDaysText += '<li>' + i + '</li>'
    }

    daysContainer.innerHTML = monthDaysText

    if (month == nowMonth && year == nowYear) {
      days = daysContainer.getElementsByTagName('li')
      days[monthPrefix + nowDateNumber - 1].classList.add('date-now')
    }
  }

  setMonthCalendar(nowYear, nowMonth)

  prev.onclick = function () {
    let curDate = new Date(
      yearContainer.textContent,
      monthName.indexOf(monthContainer.textContent)
    )

    curDate.setMonth(curDate.getMonth() - 1)

    let curYear = curDate.getFullYear(),
      curMonth = curDate.getMonth()

    setMonthCalendar(curYear, curMonth)
  }

  next.onclick = function () {
    let curDate = new Date(
      yearContainer.textContent,
      monthName.indexOf(monthContainer.textContent)
    )

    curDate.setMonth(curDate.getMonth() + 1)

    let curYear = curDate.getFullYear(),
      curMonth = curDate.getMonth()

    setMonthCalendar(curYear, curMonth)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  wrapper = document.getElementById('prototype_44')
  console.log(wrapper)
  generateCalendar()
})
