'use strict';
// Calculate daily sales projections
var places = [
  ['pikeAndFirst',23,65,6.3],
  ['seatacAirport',3,24,1.2],
  ['seattleCenter',11,38,3.7],
  ['capitolHill',20,38,2.3],
  ['alki',2,16,4.6]
];

var myCookieStands = [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function CookieStand(placeName, min, max, cookies) {
  this.locationName = placeName;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookiesPerCust = cookies;
  this.avgCookiesPerHour = [];
  this.randCustPerHour = [];
  this.totalCookiesSold = 0;
  this.calcRandCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    }
  };

  this.calcCookiesSoldPerHour = function() {
    this.calcRandCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.avgCookiesPerCust = Math.ceil(this.avgCookiesPerCust);
      this.avgCookiesPerHour[i] = (this.randCustPerHour[i] * this.avgCookiesPerCust);
      this.totalCookiesSold += this.avgCookiesPerHour[i];
      this.avgCookiesPerHour[i] = hours[i] + ': ' + this.avgCookiesPerHour[i];
    }
    this.avgCookiesPerHour.push('Total: ' + this.totalCookiesSold);
  };

  this.renderData = function() {
    this.calcCookiesSoldPerHour();
    var listItems = document.getElementById(this.locationName);
    listItems.innerHTML = 'Cookies sold per hour';
    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.avgCookiesPerHour[i] + ' cookies';
      listItems.appendChild(liEl);
    }
  };
  myCookieStands.push(this);
}

//***************************************************************************
function renderTable() {
  var tableName = document.getElementById('cookieStandData');

  function createHeaderRow() {
    var trEl = document.createElement('tr');

    var thEl = document.createElement('th');
    thE1.textContent = '';
  }

  function createDataRows() {

  }
};
//***********************************

// pikeAndFirst.renderData();
// seatacAirport.renderData();
// seattleCenter.renderData();
// capitolHill.renderData();
// alki.renderData();
for (var i = 0; i < places.length; i++) {
  new CookieStand(places[i][0], places[i][1], places[i][2], places[i][3], places[i][4]);
}
