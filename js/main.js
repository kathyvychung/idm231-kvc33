const ariObj = document.getElementById('Ari');
const aquObj = document.getElementById('Aqu');
const canObj = document.getElementById('Can');
const capObj = document.getElementById('Cap');
const gemObj = document.getElementById('Gem');
const leoObj = document.getElementById('Leo');
const libObj = document.getElementById('Lib');
const pisObj = document.getElementById('Pis');
const sagObj = document.getElementById('Sag');
const scoObj = document.getElementById('Sco');
const tauObj = document.getElementById('Tau');
const virObj = document.getElementById('Vir');

ariObj.addEventListener('click', function (evt) {
  console.log('Aries button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

aquObj.addEventListener('click', function (evt) {
  console.log('Aqua button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

canObj.addEventListener('click', function (evt) {
  console.log('cancer button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

capObj.addEventListener('click', function (evt) {
  console.log('cap button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

gemObj.addEventListener('click', function (evt) {
  console.log('gem button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

leoObj.addEventListener('click', function (evt) {
  console.log('leo button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

libObj.addEventListener('click', function (evt) {
  console.log('lib button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

pisObj.addEventListener('click', function (evt) {
  console.log('pis button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

sagObj.addEventListener('click', function (evt) {
  console.log('sag button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

scoObj.addEventListener('click', function (evt) {
  console.log('scorpio button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

tauObj.addEventListener('click', function (evt) {
  console.log('tau button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

virObj.addEventListener('click', function (evt) {
  console.log('virgo button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'Ari':
      // displayObj.src = 'img/ful_pisces.png';
      // zDisplayObj.src = 'img/sml_pisces.png';
      // display title
      zTitleObj.innerHTML = 'PISCES';
      // display date range
      zDateRangeObj.innerHTML = '##-Month to ##-Month';
      // display description
      zMoreInfo.innerHTML = '<p>Pisces are cool, they swim in water.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      // stopAllAudio();
      // bulletObj.play();
      break;
    }
  }


//calendar input code
const userSubmitObj = document.getElementById('gaze');

userSubmitObj.addEventListener('click', function() {
console.log('User submit button clicked');

const userFirstName =  document.getElementById('fname').value;
  console.log('userFirstName is: ' + userFirstName);

  //get the user date and extract the month of year and day of month
  const userBday = new Date(document.getElementById('bday').value);
  console.log('userBday is: ' + userBday);

  //figure out the zodiac sign based on month of year and day of month
  let whichMonth = userBday.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);

  const whichDayOfMonth = userBday.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  let AstroSign = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "aqu";
  }

  console.log('AstroSign is ' + AstroSign);
  userPicked(AstroSign);

});

//modal controls
const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function() {
  modal.hidden = !modal.hidden;
 
});

// Link modal element/objects to JS
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');