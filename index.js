// sessionStorage.user = JSON.stringify({name: "John"});

// // немного позже
// let user = JSON.parse( sessionStorage.user );
// alert( user.name ); // John

class CinemaDay {
  constructor(movies, SessionTickets, rating, genres, age, duration, sessionTickets) {
    this.name = name;
    this.cover = cover;
    this.rating = rating;
    this.genres = genres;
    this.age = age;
    this.duration = duration;
    this.sessionTickets = sessionTickets;
  }
}
// Класс Фильм
class Movie {
  constructor(name, cover, rating, genres, age, duration, sessionTickets) {
    this.name = name;
    this.cover = cover;
    this.rating = rating;
    this.genres = genres;
    this.age = age;
    this.duration = duration;
    this.sessionTickets = sessionTickets;
  }
}

class Session {
  constructor(session, adult, child, student, vip, ) {
    this.session = session;
    this.adult = adult;
    this.child = child;
    this.student = student;
    this.vip = vip;
  }
}



var movies = new Array();

let sessions = [new Session('10:00', 1300, 800, 1000, 4000), new Session('12:00', 1400, 900, 1100, 4200), new Session('14:00', 1500, 1000, 1200, 5000),
new Session('16:00', 1500, 1000, 1200, 5000), new Session('18:00', 1500, 1000, 1200, 5000), new Session('20:00', 1600, 1100, 1300, 5000)];
movies.push(new Movie('Начало', 'https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg', 5, ['фантастика', 'боевик', 'триллер'], 12, 148, sessions));
movies.push(new Movie('Отель «Гранд Будапешт»', 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/ea08a062-81a9-46e9-a475-e49388216eea/300x450', 5, ['комедия', 'приключения', 'детектив', 'криминал'], 16, 100, sessions));
movies.push(new Movie('Однажды в… Голливуде', 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/70580cf5-3287-42d6-8a76-2c715e2f6172/300x450', 4, ['комедия', 'драма'], 18, 161, sessions));
movies.push(new Movie('Первому игроку приготовиться', 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5ae82f4b-fd6a-46b5-b5ba-897106eb1eae/300x450', 4, ['фантастика', 'боевик', 'приключения'], 12, 140, sessions));
movies.push(new Movie('Аватар', 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/300x450', 4, ['фантастика', 'боевик', 'драма', 'приключения'], 12, 162, sessions));
movies.push(new Movie('Властелин колец: Братство кольца', 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/1d36b3f8-3379-4801-9606-c330eed60a01/300x450', 5, ['фэнтэзи', 'приключения', 'драма'], 12, 178, sessions));

localStorage.clear();

for (i = 0; i < movies.length; i++) {
  localStorage.setItem(`movie${i + 1}`, JSON.stringify(movies[i]));
}

// for(let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     alert(`${key}: ${localStorage.getItem(key)}`);
// }

var filmsList = document.getElementsByClassName('films-list')[0];

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);

  let detail = document.createElement('details'); // <details>
  let summary = document.createElement('summary'); // <summary>
  summary.innerHTML = JSON.parse(localStorage.getItem(key)).name;

  let div_film_inner = document.createElement('div'); // <div class="film-inner">
  div_film_inner.className = 'film-inner';

  let film_cover = document.createElement('img'); // <img class="film-cover">
  film_cover.className = 'film-cover';
  film_cover.src = JSON.parse(localStorage.getItem(key)).cover;

  let div_film_info = document.createElement('div'); // <div class="film-info">
  div_film_info.className = 'film-info';

  let p_rating = document.createElement('p'); // <p>Рэйтинг:
  p_rating.innerHTML = 'Рэйтинг: ';
  for (j = 0; j < 5; j++) {
    let span_rating = document.createElement('span');
    span_rating.className = 'fa fa-star';
    if (j < JSON.parse(localStorage.getItem(key)).rating) span_rating.classList.add('checked');
    p_rating.appendChild(span_rating);
  }
  div_film_info.appendChild(p_rating);

  let p_genres = document.createElement('p'); // <p>Жанр:
  p_genres.innerHTML = `Жанр: ${JSON.parse(localStorage.getItem(key)).genres}`;
  let p_age = document.createElement('p'); // <p>Возраст:
  p_age.innerHTML = `Возраст: ${JSON.parse(localStorage.getItem(key)).age}+`;
  let p_duration = document.createElement('p'); // <p>Длительность:
  let film_duration = JSON.parse(localStorage.getItem(key)).duration;
  p_duration.innerHTML = `Длительность: ${film_duration} мин. / 0${Math.floor(film_duration / 60)}:${Math.floor(film_duration % 60)} ч.`;
  let input_buy_ticket = document.createElement('input'); // <input type="submit" class="buy-ticket-btn">
  input_buy_ticket.type = 'submit';
  input_buy_ticket.value = 'Показать сеансы';
  input_buy_ticket.className = 'buy-ticket-btn';

  div_film_info.appendChild(p_genres);
  div_film_info.appendChild(p_age);
  div_film_info.appendChild(p_duration);
  div_film_info.appendChild(input_buy_ticket);
  div_film_inner.appendChild(film_cover);
  div_film_inner.appendChild(div_film_info);
  detail.appendChild(summary);
  detail.appendChild(div_film_inner);
  filmsList.appendChild(detail);
}


// Get the modal
var modal = document.getElementById("myModal");
var modalTable = document.querySelector(".modal-body table tbody");

// Get buttons that opens the modal
var btns = document.querySelectorAll("input.buy-ticket-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Показывает все данные, содержащиеся в localStorage
function showLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
  }
}

// Добавляет сеансы выбранного фильма в модальное окно
function AddSessions(index) {
  let key = localStorage.key(index);
  let sessions = JSON.parse(localStorage.getItem(key)).sessionTickets;
  for (columns = 0; columns < sessions.length; columns++) {
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerText = sessions[columns].session;
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerText = sessions[columns].adult + ' ₸';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerText = sessions[columns].child + ' ₸';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerText = sessions[columns].student + ' ₸';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerText = sessions[columns].student + ' ₸';
    tr.appendChild(th);
    th = document.createElement('th');
    let but = document.createElement('button');
    but.className = 'buy-ticket-btn';
    but.innerHTML = 'Купить билет';
    th.appendChild(but);
    tr.appendChild(th);
    modalTable.appendChild(tr);
  }
}

// Удаляет все дочерние элементы кроме первого
function deleteNode(node){
    if (node) {
        while (node.childElementCount > 1) {
            node.removeChild(node.lastChild);
        }
    }
}

// Добавление события для кнопок для отображение сеансов фильма
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    let node = document.querySelector('table tbody');
    deleteNode(node);
    AddSessions(i);
    modal.style.display = "block";
  }
}

// Закрытие модального окна при нажатии на крестик
span.onclick = function () {
  modal.style.display = "none";
}

// Закрытие модального окна при нажатии на любое другое место экрана
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Смена темы страницы
blackButton.onclick = switchGray;
whiteButton.onclick = switchWhite;

// Смена темы в черную
function switchGray() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
  document.getElementsByTagName('body')[0].style.color = 'white';
  logo_img.src = "https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kif+IqxJInhnNwXs1M3EMoAJtliEugPZt9f09";
  document.getElementById('filters').style.backgroundColor = 'rgb(66,66,66)';
  document.getElementById('filters').style.borderColor = 'red'

}
// Смена темы в белую
function switchWhite() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
  document.getElementsByTagName('body')[0].style.color = 'black';
  logo_img.src = "https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kif+IqxFInRvIwXs1M3EMoAJtliEugPZt...fg+ ";
  document.getElementById('filters').style.backgroundColor = 'lightgray';
  document.getElementById('filters').style.borderColor = 'black'
}
