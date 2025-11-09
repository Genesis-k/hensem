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
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });
}
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}
renderCalendar(currentDate);
});

//envelope animation
const envelope = document.getElementById('envelope');
const seal = document.getElementById('seal');
const letter = document.getElementById('letter');
const colors = ['#ff4d6d', '#ffb3c1', '#ffc300', '#9bf6ff', '#a0c4ff', '#caffbf'];

//start continuous bubbles
setInterval(createBubbles, 2000);//every 2 seconds

if (seal) {
  seal.addEventListener('click', () => {
    if (envelope) {
      envelope.classList.add('open');
    }
  });
}

if (letter) {
  letter.addEventListener('click', () => {
    if (envelope) {
      envelope.classList.remove('open');
    }
  });
}

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

//are you sure you want to proceed
const popup = document.getElementById('Popup');
const face = document.getElementById('face');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const message = document.getElementById('message');

//show popup load
window.addEventListener('load', () => {
  popup.classList.add('show');
});

//no button: shake and show message (left side)
noBtn.addEventListener('click', () => {
  face.textContent = '😢';
  face.classList.add('shake');
  setTimeout(() => {
    face.classList.remove('shake');
    message.textContent = 'Alright Maybe next time 💖';
    message.classList.add('show');
    setTimeout(() => {
      const target = noBtn.getAttribute('data-target');
      if (target) window.location.href = target;
    }, 1000);
  }, 500);
});

//yes button
yesBtn.addEventListener('click', () => {
  face.textContent = '😊';
  face.classList.add('smile');
  setTimeout(() => {
    face.classList.remove('smile');
    message.textContent = 'Yeey! I\'m glad you want to proceed! 🎉';
    message.classList.add('show');
    setTimeout(() => {
      const target = yesBtn.getAttribute('data-target');
      if(target) window.location.href = target;
    }, 1000);
  }, 1000);
});

//video
const welcomeText = document.getElementById('welcome-text');
if (welcomeText) {
  setTimeout(() => {
    welcomeText.classList.add('show');
  }, 500);
}
const videoContainer = document.getElementById('video-container');

//trigger fade-in on page load
window.addEventListener('load', () => {
  welcomeText.classList.add('show');
  videoContainer.classList.add('show');
});

//gallery
const galleryLeft = document.getElementById('gallery-left');
const galleryRight = document.getElementById('gallery-right');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.getElementById('close-btn');

window.addEventListener('load', () => {
  galleryLeft.classList.add('show');
  galleryRight.classList.add('show');
});

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const imageSrc = item.getAttribute('data-image');
    modalImage.src = imageSrc;
    modal.classList.add('show');
  });
});
closeBtn.addEventListener('click', () => {
  modal.classKist.remove('show');
});

modal.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.classList.remove('show');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('show');
  }
});
// final page
const hisMessage = document.getElementById('his-message');
const emoji = document.getElementById('emoji');

window.addEventListener('load', () => {
  hisMessage.classList.add('show');
});
