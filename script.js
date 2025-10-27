document.addEventListener('DOMContentLoaded', () => {
  // Navigation buttons
  const nextbtn = document.getElementById('nextbtn');
  if (nextbtn) {
    nextbtn.addEventListener('click', () => {
      const target = nextbtn.getAttribute('data-target');
      if (target) window.location.href = target;
    });
  }

  const backbtn = document.getElementById('backbtn');
  if (backbtn) {
    backbtn.addEventListener('click', () => {
      const target = backbtn.getAttribute('data-target');
      if (target) window.location.href = target;
    });
  }

  // Balloon Animation
  const container = document.getElementById('balloon-container');
  if (container) {
    function getRandomColor() {
      const colors = ['#ff4d6d', '#ffb3c1', '#ffc300', '#9bf6ff', '#a0c4ff', '#caffbf'];
      return `radial-gradient(circle at 35% 25%, ${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]})`;
    }

    function createBalloon() {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = Math.random() * 100 + 'vw';
      balloon.style.background = getRandomColor();
      const duration = Math.random() * 5 + 5; // 5-10s
      balloon.style.animationDuration = duration + 's';
      container.appendChild(balloon);
      setTimeout(() => balloon.remove(), duration * 1000);
    }

    setInterval(createBalloon, 400);
  }
//Calendar
const calendar = document.getElementById('calendar');
const monthYear = document.getElementById('month-year');
const daysContainer = document.getElementById('days');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-popup');

let currentDate = new Date();

function renderCalendar(date) {
  daysContainer.innerHTML = '';
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const today = new Date();

  monthYear.textContent = `${date.toLocaleString('default', {month: 'long'})} ${year}`;

  //emptycells for alignment
  for (let i = 0; i < firstDay.getDay(); i++) {
    const emptyDiv = document.createElement('div');
    daysContainer.appendChild(emptyDiv);
  }
  //days
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.textContent = day;

    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      dayDiv.classList.add('today');
    }

    dayDiv.addEventListener('click', () => {
      document.querySelectorAll('.day.clicked').forEach(d => d.classList.remove('clicked'));
      dayDiv.classList.add('clicked');

      if (month === 10 && day === 9) {
        popup.style.display = 'block';
      }
});
    daysContainer.appendChild(dayDiv);
  }
}
prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

renderCalendar(currentDate);
});

//envelope animation
const envelope = document.getElementById('envelope');
const seal = document.getElementById('seal');
const letter = document.getElementById('letter');
const colors = ['#ff4d6d', '#ffb3c1', '#ffc300', '#9bf6ff', '#a0c4ff', '#caffbf'];

//start continuous bubbles
setInterval(createBubbles, 2000);//every 2 seconds

seal.addEventListener('click', () => {
  envelope.classList.add('open');
});

envelope.addEventListener('click', (e) => {
  if(e.target === envelope || e.target.closest('.envelope')) {
    envelope.classList.add('open');
  }
});

letter.addEventListener('click', () => {
  envelope.classList.remove('open');
});

function createBubbles() {
  const container = document.body;
  for (let i = 0; i < 5; i++){
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.bottom = '0';
    bubble.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(bubble);
    setTimeout(() => {
      bubble.remove();
    }, 4000);
  }
}