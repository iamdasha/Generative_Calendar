// Calendar on canvas + save

import p5 from "p5";
import html2canvas from "html2canvas";
import {
  sample,
  getRandomArbitrary,
  generateHash,
} from "../prototypes/utilities";

import { model } from "../prototypes/prototype_48/model";

let changeGradient,
  colorSwitch,
  changeFont = false;

const canvasWidth = 550;
const canvasHeight = 770;

const Y_AXIS = 1;

const gradientColors = [
  "#FFA4EC",
  "#FFFFFA",
  "#FFEC84",
  "#751C20",
  "#4FA99D",
  "#01529D",
  "#011A31",
  "#C6AFFC",
  "#ABE1B4",
  "#FDAB5C",
  "#1EA6CB",
];
let c1, c2, c3, c4, c5;
let randomColor1, randomColor2, randomColor3, randomColor4, randomColor5;

function sketch(p) {
  p.setup = () => {
    const canvas = p.createCanvas(canvasWidth, canvasHeight);
    canvas.parent("wrapper");
    p.background(0);
    chooseRandomColor();
  };

  p.draw = () => {
    // show gradient
    setGradient(0, 0, canvasWidth, canvasHeight / 4, c1, c2, Y_AXIS);
    setGradient(
      0,
      canvasHeight / 4,
      canvasWidth,
      canvasHeight / 4,
      c2,
      c3,
      Y_AXIS
    );
    setGradient(
      0,
      canvasHeight / 2,
      canvasWidth,
      canvasHeight / 4,
      c3,
      c4,
      Y_AXIS
    );
    setGradient(
      0,
      (canvasHeight / 4) * 3,
      canvasWidth,
      canvasHeight / 4,
      c4,
      c5,
      Y_AXIS
    );

    if (changeGradient) {
      chooseRandomColor();
      changeGradient = false;
    }

    if (colorSwitch) {
      p.filter(p.GRAY);
    } else {
    }
  };

  // gradient settings
  function setGradient(x, y, w, h, c1, c2, axis) {
    p.noFill();

    if (axis === Y_AXIS) {
      for (let i = y; i <= y + h; i++) {
        let inter = p.map(i, y, y + h, 0, 1);
        let c = p.lerpColor(c1, c2, inter);
        p.stroke(c);
        p.line(x, i, x + w, i);
      }
    }
  }

  // gradient colors
  function chooseRandomColor() {
    randomColor1 = p.random(gradientColors.length);
    randomColor1 = p.floor(randomColor1);

    randomColor2 = p.random(gradientColors.length);
    randomColor2 = p.floor(randomColor2);

    randomColor3 = p.random(gradientColors.length);
    randomColor3 = p.floor(randomColor3);

    randomColor4 = p.random(gradientColors.length);
    randomColor4 = p.floor(randomColor4);

    randomColor5 = p.random(gradientColors.length);
    randomColor5 = p.floor(randomColor5);

    c1 = p.color(gradientColors[randomColor1]);
    c2 = p.color(gradientColors[randomColor2]);
    c3 = p.color(gradientColors[randomColor3]);
    c4 = p.color(gradientColors[randomColor4]);
    c5 = p.color(gradientColors[randomColor5]);
  }
}

function init() {
  return new Promise((resolve, reject) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.id = "wrapper";

    const image = document.createElement("div");
    image.classList.add("image");

    //calendar
    let calendar = document.createElement("div");
    calendar.setAttribute("id", "month-calendar");

    let month = document.createElement("ul");
    const fontStyle = sample(model.fontStyle);
    month.classList.add("month");
    month.classList.add(fontStyle);
    calendar.appendChild(month);

    let m = document.createElement("li");
    m.classList.add("month-name");
    month.appendChild(m);

    let y = document.createElement("li");
    y.classList.add("year-name");
    month.appendChild(y);

    let weekdays = document.createElement("ul");
    const weekdayStyle = sample(model.weekdayStyle);
    weekdays.classList.add("weekdays");
    weekdays.classList.add(weekdayStyle);
    calendar.appendChild(weekdays);

    let dayName = ["M", "T", "W", "T", "F", "S", "S"];

    for (let i = 0; i < 7; i++) {
      let li = document.createElement("li");
      li.innerHTML = dayName[i];
      weekdays.appendChild(li);
    }

    let days = document.createElement("ul");
    const dayStyle = sample(model.dayStyle);
    days.classList.add("days");
    days.classList.add(dayStyle);
    calendar.appendChild(days);

    let date = ["1", "2", "...", "31"];

    for (let i = 0; i < 4; i++) {
      let li = document.createElement("li");
      li.innerHTML = date[i];
      days.appendChild(li);
    }

    const prev = document.createElement("div");
    prev.classList.add("prev");
    prev.innerText = "<<";
    document.body.appendChild(prev);

    const next = document.createElement("div");
    next.classList.add("next");
    next.innerText = ">>";
    document.body.appendChild(next);

    const container = document.getElementById("prototype_48");

    wrapper.appendChild(calendar);
    container.appendChild(wrapper);

    function generateText() {
      const { strings, sides } = model.texts;
      const string = sample(strings);
      const side = sample(sides);

      const textWrapper = document.createElement("div");
      textWrapper.classList.add("textWrapper");
      //textWrapper.classList.add(side)

      const text = document.createElement("div");
      text.innerText = string;
      text.contentEditable = true;
      text.classList.add("text");

      textWrapper.appendChild(text);
      wrapper.appendChild(textWrapper);
    }

    function generateCalendar() {
      let nowDate = new Date(),
        nowDateNumber = nowDate.getDate(),
        nowMonth = nowDate.getMonth(),
        nowYear = nowDate.getFullYear(),
        container = document.getElementById("month-calendar"),
        monthContainer = container.getElementsByClassName("month-name")[0],
        yearContainer = container.getElementsByClassName("year-name")[0],
        daysContainer = container.getElementsByClassName("days")[0],
        monthName = [
          "JANUARY",
          "FEBRUARY",
          "MARCH",
          "APRIL",
          "MAY",
          "JUNE",
          "JULY",
          "AUGUST",
          "SEPTEMBER",
          "OCTOBER",
          "NOVEMBER",
          "DECEMBER",
        ];

      let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
      console.log(nowDate.getFullYear());

      function setMonthCalendar(year, month) {
        let monthDays = new Date(year, month + 1, 0).getDate(),
          monthPrefix = new Date(year, month, 0).getDay(),
          monthDaysText = "";

        monthContainer.textContent = monthName[month];
        yearContainer.textContent = year;
        daysContainer.innerHTML = "";

        if (monthPrefix > 0) {
          for (let i = 1; i <= monthPrefix; i++) {
            monthDaysText += "<li></li>";
          }
        }

        for (let i = 1; i <= monthDays; i++) {
          monthDaysText += "<li>" + i + "</li>";
        }

        daysContainer.innerHTML = monthDaysText;

        if (month == nowMonth && year == nowYear) {
          days = daysContainer.getElementsByTagName("li");
          days[monthPrefix + nowDateNumber - 1].classList.add("date-now");
        }
      }

      setMonthCalendar(nowYear, nowMonth);

      prev.onclick = function () {
        let curDate = new Date(
          yearContainer.textContent,
          monthName.indexOf(monthContainer.textContent)
        );

        curDate.setMonth(curDate.getMonth() - 1);

        let curYear = curDate.getFullYear(),
          curMonth = curDate.getMonth();

        setMonthCalendar(curYear, curMonth);
      };

      next.onclick = function () {
        let curDate = new Date(
          yearContainer.textContent,
          monthName.indexOf(monthContainer.textContent)
        );

        curDate.setMonth(curDate.getMonth() + 1);

        let curYear = curDate.getFullYear(),
          curMonth = curDate.getMonth();

        setMonthCalendar(curYear, curMonth);
      };
    }

    generateCalendar();

    generateText();

    resolve();
  });
}

function generateImage() {
  return new Promise((resolve, reject) => {
    const container = document.getElementById("wrapper");

    html2canvas(container).then((canvas) => {
      canvas.style.position = "absolute";
      canvas.style.left = "-99999px";
      canvas.id = "tempCanvas";
      document.body.appendChild(canvas);

      resolve();
    });
  });
}

function downloadImage() {
  const canvas = document.getElementById("tempCanvas");
  const imageData = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.download = `Prototype-48-${generateHash()}.png`;
  link.href = imageData;
  link.click();
  link.remove();

  canvas.remove();
}

function renderUI() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("UI_wrapper");

  const changeGradientButton = document.createElement("div");
  changeGradientButton.classList.add("changeGradientButton");
  changeGradientButton.innerText = "Change Gradient";

  changeGradientButton.addEventListener("click", () => {
    console.log("changeGradientButton");
    changeGradient = true;
  });

  const changeFontButton = document.createElement("div");
  changeFontButton.classList.add("changeFontButton");
  changeFontButton.innerText = "Change Font";

  changeFontButton.addEventListener("click", () => {
    console.log("changeFontButton");
    changeFont = true;
  });

  const changeCalendarStyleButton = document.createElement("div");
  changeCalendarStyleButton.classList.add("changeCalendarStyleButton");
  changeCalendarStyleButton.innerText = "Change Calendar";

  changeCalendarStyleButton.addEventListener("click", () => {
    console.log("changeCalendarStyleButton");
    location.reload();
  });

  const toggleSwitch = document.createElement("div");
  toggleSwitch.classList.add("toggleSwitch");
  toggleSwitch.innerText = "B&W MODE";

  toggleSwitch.addEventListener("click", () => {
    toggleSwitch.classList.toggle("active");
    colorSwitch = !colorSwitch;
  });

  const saveButton = document.createElement("div");
  saveButton.classList.add("saveButton");
  saveButton.innerText = "Save";

  saveButton.addEventListener("click", () => {
    generateImage().then(downloadImage);
  });

  const monthTitle = document.createElement("div");
  monthTitle.classList.add("monthTitle");
  monthTitle.innerText = "MONTH";

  wrapper.appendChild(monthTitle);
  wrapper.appendChild(changeCalendarStyleButton);
  wrapper.appendChild(changeGradientButton);
  wrapper.appendChild(toggleSwitch);
  wrapper.appendChild(saveButton);
  document.body.appendChild(wrapper);
}

function description() {
  return new Promise((resolve, reject) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("description_wrapper");

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = "GENERATIVE CALENDAR";

    const instruction = document.createElement("div");
    instruction.classList.add("instruction");

    let points = [
      "create unique design for every month ",
      "1. play with colors and fonts",
      "2. write something in the bottom field",
      "3. save the result",
      "4. print it and put on your wall",
    ];

    for (let i = 0; i < points.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = points[i];
      instruction.appendChild(p);
    }

    wrapper.appendChild(title);
    wrapper.appendChild(instruction);
    document.body.appendChild(wrapper);
    resolve();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  init().then(() => {
    new p5(sketch);
  });
  description();
  renderUI();
});
