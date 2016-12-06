'use strict';
// Calculate daily sales projections
var places = [
  ['First and Pike',23,65,6.3],
  ['Seatac Airport',3,24,1.2],
  ['Seattle Center',11,38,3.7],
  ['Capitol Hill',20,38,2.3],
  ['Alki',2,16,4.6]
];

var myCookieStands = [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function CookieStand(placeName, min, max, cookies) {
  this.locationName = placeName;
  this.elementID = placeName.toLowerCase().replace(/ /g,'_');
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
      this.avgCookiesPerHour[i] = this.avgCookiesPerHour[i];
    }
  };

  this.renderData = function() {
    this.calcCookiesSoldPerHour();
    var listItems = document.getElementById(this.elementID);
    var liEl = document.createElement('li');
    listItems.innerHTML = 'Cookies sold per hour';
    for (var i = 0; i < this.avgCookiesPerHour.length - 1; i++) {
      liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.avgCookiesPerHour[i] + ' cookies';
      listItems.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = this.totalCookiesSold + ' cookies';
    listItems.appendChild(liEl);
  };
  myCookieStands.push(this);
}

//***************************************************************************
function renderTable() {
  var tableName = document.getElementById('cookieStandData');
  // console.log(tableName, 'tableName');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  function createHeaderRow() {
    trEl.appendChild(thEl);
    for (var i = 0; i < hours.length; i++) {
      thEl = document.createElement('th');
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);
    }
    tableName.appendChild(trEl);
    // console.log(trEl,'append header row');
  }
//***********************************
  function createDataRows() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');

    for (var j = 0; j < myCookieStands.length; j++) {
      trEl = document.createElement('tr');
      tdEl = document.createElement('td');
      // console.log(trEl);
      // console.log(tdEl);
      tdEl.textContent = myCookieStands[j].locationName;
      // console.log(tdEl,'data element');
      trEl.appendChild(tdEl);
      // console.log(trEl,'append data element row');

      // console.log(myCookieStands[j].avgCookiesPerHour.length,'myCookieStands: ' + j + ', avgCookiesPerHour.length');
      for (var i = 0; i < hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = myCookieStands[j].avgCookiesPerHour[i];
        trEl.appendChild(tdEl);
      }
      tableName.appendChild(trEl);
    }
  }
  createHeaderRow();
  createDataRows();
};
//***********************************

for (var i = 0; i < places.length; i++) {
  new CookieStand(places[i][0], places[i][1], places[i][2], places[i][3], places[i][4]);
  myCookieStands[i].renderData();
}
renderTable();
