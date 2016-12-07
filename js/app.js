'use strict';
// Calculate daily sales projections
var places = [
  ['First and Pike',23,65,6.3],
  ['Seatac Airport',3,24,1.2],
  ['Seattle Center',11,38,3.7],
  ['Capitol Hill',20,38,2.3],
  ['Alki',2,16,4.6]
];
var cookieStandData = document.getElementById('cookieStandData');
var cookieStandStaffingData = document.getElementById('cookieStandStaffingData');

var myCookieStands = [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//Constructor for cookie stands
function CookieStand(placeName, min, max, cookies) {
  this.locationName = placeName;
  this.elementID = placeName.toLowerCase().replace(/ /g,'_');
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.avgCookiesPerCust = cookies;
  this.avgCookiesPerHour = [];
  this.randCustPerHour = [];
  this.staffOnDutyPerHour = [];
  this.staffCustServedPerHour = 20;
  this.totalCookiesSold = 0;
  this.calcRandCustPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
      this.staffOnDutyPerHour[i] = this.randCustPerHour[i] / this.staffCustServedPerHour;
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

  this.renderListData = function() {
    this.calcCookiesSoldPerHour();
    // v This code is used for displaying a List layout v
    var listItems = document.getElementById(this.elementID);
    var liEl = document.createElement('li');
    listItems.innerHTML = 'Cookies sold per hour';
    for (var j = 0; j < this.avgCookiesPerHour.length - 1; j++) {
      liEl = document.createElement('li');
      liEl.textContent = hours[j] + ': ' + this.avgCookiesPerHour[j] + ' cookies';
      listItems.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = this.totalCookiesSold + ' cookies';
    listItems.appendChild(liEl);
  };
    // v This code is used for displaying a Table layout v
  this.renderTableData = function(thisIsMyTable) {
    this.calcCookiesSoldPerHour();  // This runs with each call of .renderTableData.  Sad panda.
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.locationName;
    trEl.appendChild(tdEl);

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.avgCookiesPerHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesSold;
    trEl.appendChild(tdEl);
    thisIsMyTable.appendChild(trEl);
  };

  myCookieStands.push(this);
} //end of constructor
//***************************************************************************
function createHeaderRow(tableName) {
  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Daily Location Total';
  tableName.appendChild(trEl);
}
  //***********************************
function createTotalsRow(tableName) {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  var subTotal = 0;

  for (var j = 0; j < hours.length; j++) {
    for (var i = 0; i < myCookieStands.length; i++) {
      subTotal += myCookieStands[i].avgCookiesPerHour[j];
    } //end for i
    tdEl = document.createElement('td');
    tdEl.textContent = subTotal;
    trEl.appendChild(tdEl);
    subTotal = 0;
  } //end for j
  for (var k = 0; k < myCookieStands.length; k++) {
    subTotal += myCookieStands[k].totalCookiesSold;
  } //end for k
  tdEl = document.createElement('td');
  tdEl.textContent = subTotal;
  trEl.appendChild(tdEl);
  tableName.appendChild(trEl);
} //end createTotalsRow
  //***********************************
function renderStoreData(thisIsMyTable) {
  for (var i = 0; i < places.length; i++) {
    myCookieStands[i].renderTableData(thisIsMyTable);  // Renders data in Table format.
    // myCookieStands[i].renderListData();  // Renders data in List format. Uncomment List items in html.
  }
};
//***********************************
// Main function calls
for (var i = 0; i < places.length; i++) {
  new CookieStand(places[i][0], places[i][1], places[i][2], places[i][3], places[i][4]);
}
createHeaderRow(cookieStandData);
renderStoreData(cookieStandData);
createTotalsRow(cookieStandData);

// createHeaderRow(cookieStandStaffingData);
// renderStoreData(cookieStandStaffingData);
// createTotalsRow(cookieStandStaffingData);

// createTable(cookieStandStaffingData);
