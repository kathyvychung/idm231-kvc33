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
  // console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'Ari':
      zDisplayObj.src = 'img/ariesconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Ram';
      // display date range
      zDateRangeObj.innerHTML = 'March 21 - April 19';
      // display description
      zMoreInfo.innerHTML = '<p>Wow! You caught sight of the 39th largest constellation in the sky! Despite being called the Ram it really…doesn’t look like one does it? The Ram, otherwise known as the Aries, is located in the Northern Hemisphere between Pisces to its west and Taurus to its east. The best view of Aries occurs on December nights around 9 p.m. local time.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndAriObj.play();
      break;
    case 'Tau':
      zDisplayObj.src = 'img/taurusconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Bull';
      // display date range
      zDateRangeObj.innerHTML = 'April 20 – May 20';
      // display description
      zMoreInfo.innerHTML = '<p>Bullseye! You found the 6th biggest zodiac constellation. It is the 17th largest constellation overall, taking up a 1.9% area of the sky. In the northern hemisphere, Taurus is visible during the autumn and winter time. It is best seen during the month of January. </p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndTauObj.play();
    break;
    case 'Gem':
      zDisplayObj.src = 'img/geminiconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Twins';
      // display date range
      zDateRangeObj.innerHTML = 'May 21 – June 21';
      // display description
      zMoreInfo.innerHTML = '<p>Awwww you caught sight of the Gemini Twins! They are the 8th biggest zodiac constellation. It is the 30th largest constellation overall, taking up a 1.2% area of the sky. Gemini is fairly easy to spot in the sky, even for amateur stargazers. It is located northeast of the constellation Orion and between the Taurus and Cancer constellations. Best viewing is during February. By April and May, the constellation can be seen soon after sunset in the west.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndGemObj.play();
    break;
    case 'Can':
      zDisplayObj.src = 'img/cancerconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Crab';
      // display date range
      zDateRangeObj.innerHTML = 'June 22–July 22';
      // display description
      zMoreInfo.innerHTML = '<p>Don\'t get too crabby... but it\'s the 9th biggest zodiac constellation! It is the 31st largest constellation overall, taking up a 1.2% area of the sky. Cancer lies between Leo, the lion, and Gemini, the twins. It is almost impossible to see Cancer as a crab with the naked eye or even binoculars so consider yourself lucky tonight! It looks more like a faint, upside-down Y. Cancer is visible in the Northern Hemisphere in the early spring. It can be seen in the Southern Hemisphere during autumn.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndCanObj.play();
    break;
    case 'Leo':
      zDisplayObj.src = 'img/leoconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Lion';
      // display date range
      zDateRangeObj.innerHTML = 'July 23 – August 22';
      // display description
      zMoreInfo.innerHTML = '<p>Look what we hunted! The Leo (Lion) is the 3rd biggest zodiac constellation. It is the 12th largest constellation overall, taking up a 2.3% area of the sky. Leo is a highly recognizable constellation, as it is one of the few constellations that resemble its namesake. It is fairly easy to find because the "pointer stars" of the Big Dipper point to Leo. The constellation becomes visible in the Northern Hemisphere around the spring equinox and is easily identifiable through May.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndLeoObj.play();
    break;
    case 'Vir':
      zDisplayObj.src = 'img/virconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Virgin';
      // display date range
      zDateRangeObj.innerHTML = 'August 23 – September 22';
      // display description
      zMoreInfo.innerHTML = '<p>Pleasure to meet you, young maiden! The Virgo is the largest zodiac constellation. It is also the 2nd largest constellation overall, taking up a 3.1% area of the sky. Tied to fertility and agriculture, Virgo appears to stargazers in the Northern Hemisphere during the spring and summer months and to those in the Southern Hemisphere in autumn and winter.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndVirObj.play();
    break;
    case 'Lib':
      zDisplayObj.src = 'img/libconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Balance Scale';
      // display date range
      zDateRangeObj.innerHTML = 'September 23 – October 23';
      // display description
      zMoreInfo.innerHTML = '<p>There\'s balance in this universe... haha get it? This is the 7th biggest zodiac constellation. It is the 29th largest constellation overall, taking up a 1.3% area of the sky. Libra is in the Southern Hemisphere, located between Scorpius to the east and Virgo to the west. Did you know this constellation was almost considered part of the Scorpius until Roman astronomers redrew the skyline and moved the claws of the scorpion to Libra!</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndLibObj.play();
    break;
    case 'Sco':
      zDisplayObj.src = 'img/scoconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Scorpion';
      // display date range
      zDateRangeObj.innerHTML = 'October 24 – November 21';
      // display description
      zMoreInfo.innerHTML = '<p>Oh my! It\'s the Scorpion, 10th biggest zodiac constellation! It is the 33rd largest constellation overall, taking up a 1.2% area of the sky. The Scorpius constellation has intrigued people for centuries, not only for its distinctive shape, but also because it is one of the brightest constellations in the sky. Scorpius is visible during the summer time from northern hemisphere locations. It is best seen during the month of July.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndScoObj.play();
    break;
    case 'Sag':
      zDisplayObj.src = 'img/sagconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Archer';
      // display date range
      zDateRangeObj.innerHTML = 'November 22 – December 21';
      // display description
      zMoreInfo.innerHTML = '<p>We have located our target, it\'s the Archer! It\'s the 5th biggest zodiac constellation and the 15th largest constellation overall, taking up a 2.1% area of the sky! Sagittarius is at the center of the Milky Way Galaxy, and the galaxy is at its densest point as it makes its way through Sagittarius. You can especially find this constellation during the autumn time from northern hemisphere locations. It is best seen during the month of August!</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndSagObj.play();
    break;
    case 'Cap':
      zDisplayObj.src = 'img/capconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Goat';
      // display date range
      zDateRangeObj.innerHTML = 'December 22 – January 19';
      // display description
      zMoreInfo.innerHTML = '<p>We found the Goat\'s Horn! The Capricorn! This constellation is the smallest of the 12 zodiac constellations. It is the 40th largest constellation in the night sky overall, taking up a 1.0% area of the celestial heavens. Capricornus is among the faintest constellations, just brighter than Cancer, but can be seen during the summer and autumn time from northern hemisphere locations. It is best seen during the month of September!</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndCapObj.play();
    break;
    case 'Aqu':
      zDisplayObj.src = 'img/aquconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Water Bearer';
      // display date range
      zDateRangeObj.innerHTML = 'January 20 – February 18';
      // display description
      zMoreInfo.innerHTML = '<p>Water you doing here? It\'s the Water Bearer, the 2nd biggest zodiac constellation! It is the 10th largest constellation overall, taking up a 2.4% area of the sky. Aquarius is visible during the autumn and winter time from northern hemisphere locations. It is best seen during the month of October.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndAquObj.play();
    break;
    case 'Pis':
      zDisplayObj.src = 'img/pisconstellations.png';
      // display title
      zTitleObj.innerHTML = 'The Fish';
      // display date range
      zDateRangeObj.innerHTML = 'February 19 – March 20';
      // display description
      zMoreInfo.innerHTML = '<p>Look at this good catch, it\'s the Pisces Fish! This constellation is 4th biggest zodiac constellation! It is the 14th largest constellation overall, taking up a 2.2% area of the sky. Pisces is visible in the northern hemisphere between late summer and winter. It is best seen during the month of November.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      sndPisObj.play();
    break;
    
  } 
}

function stopAllAudio() {
  sndAriObj.pause();
  sndAriObj.currentTime = 0;

  // haloObj.pause();
  // haloObj.currentTime = 0;

  // waterObj.pause();
  // waterObj.currentTime = 0;
}

//sound controls
const sndAriObj = document.getElementById('sndAries');
const sndCanObj = document.getElementById('sndCancer');
const sndCapObj = document.getElementById('sndCap');
const sndGemObj = document.getElementById('sndGem');
const sndLeoObj = document.getElementById('sndLeo');
const sndLibObj = document.getElementById('sndLib');
const sndPisObj = document.getElementById('sndPis');
const sndSagObj = document.getElementById('sndSag');
const sndScoObj = document.getElementById('sndSco');
const sndTauObj = document.getElementById('sndTau');
const sndVirObj = document.getElementById('sndVir');
const sndAquObj = document.getElementById('sndAqu');


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
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }

  console.log('AstroSign is ' + AstroSign);
  userPicked(AstroSign);

});

//modal controls
const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function() {
  modal.hidden = !modal.hidden;
  stopAllAudio();
});

// Link modal element/objects to JS
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');