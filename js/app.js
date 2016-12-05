'use strict';
// Calculate daily sales projections

var alki = {
  // var cookiesSoldPerHour: [],
  minCustPerHour: 7,
  maxCustPerHour: 15,
  avgCookiesPerCust: 4.6,
  avgCookiesPerHour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalCookiesSold: 0,
  randCustPerHour: function() {
    //Magic here for calculating number of customers between minCustPerHour and maxCustPerHour
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  calcCookiesSoldPerHour: function() {
    // multiply random customers per hour by average cookies sold per hour

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      this.avgCookiesPerCust = Math.ceil(this.avgCookiesPerCust);
      // console.log('avgCookiesPerCust: ' + this.avgCookiesPerCust);
      // console.log('RandCustPerHour: ' + this.randCustPerHour());
      var cookiesPerCustPerHour = (this.randCustPerHour() * this.avgCookiesPerCust);
      this.totalCookiesSold += cookiesPerCustPerHour;
      this.avgCookiesPerHour[i] += ': ' + cookiesPerCustPerHour;
      console.log('Avg cookies per hour: ' + this.avgCookiesPerHour[i]);
    }
    this.avgCookiesPerHour.push('Total: ' + this.totalCookiesSold);
    return this.avgCookiesPerHour;
  },
  renderData: function() {
    // Render the data from this location to the sales.html page.
    var listItems = document.getElementById('alki_List');

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      console.log('AvgCookiesPerHour[' + i + '] : ' + this.avgCookiesPerHour[i]);
      var liEl = document.createElement('li');
      liEl.textContent = this.avgCookiesPerHour[i];
      // console.log(liEl);
      listItems.appendChild(liEl);
    }
  }
};
//***************************************************************************
var seatacAirport = {
  // var cookiesSoldPerHour: [],
  minCustPerHour: 7,
  maxCustPerHour: 15,
  avgCookiesPerCust: 4.6,
  avgCookiesPerHour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalCookiesSold: 0,
  randCustPerHour: function() {
    //Magic here for calculating number of customers between minCustPerHour and maxCustPerHour
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  calcCookiesSoldPerHour: function() {
    // multiply random customers per hour by average cookies sold per hour

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      this.avgCookiesPerCust = Math.ceil(this.avgCookiesPerCust);
      // console.log('avgCookiesPerCust: ' + this.avgCookiesPerCust);
      // console.log('RandCustPerHour: ' + this.randCustPerHour());
      var cookiesPerCustPerHour = (this.randCustPerHour() * this.avgCookiesPerCust);
      this.totalCookiesSold += cookiesPerCustPerHour;
      this.avgCookiesPerHour[i] += ': ' + cookiesPerCustPerHour;
      console.log('Avg cookies per hour: ' + this.avgCookiesPerHour[i]);
    }
    this.avgCookiesPerHour.push('Total: ' + this.totalCookiesSold);
    return this.avgCookiesPerHour;
  },
  renderData: function() {
    // Render the data from this location to the sales.html page.
    var listItems = document.getElementById('seatacAirport_List');

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      console.log('AvgCookiesPerHour[' + i + '] : ' + this.avgCookiesPerHour[i]);
      var liEl = document.createElement('li');
      liEl.textContent = this.avgCookiesPerHour[i];
      // console.log(liEl);
      listItems.appendChild(liEl);
    }
  }
};
//***************************************************************************
var seattleCenter = {
  // var cookiesSoldPerHour: [],
  minCustPerHour: 7,
  maxCustPerHour: 15,
  avgCookiesPerCust: 4.6,
  avgCookiesPerHour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalCookiesSold: 0,
  randCustPerHour: function() {
    //Magic here for calculating number of customers between minCustPerHour and maxCustPerHour
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  calcCookiesSoldPerHour: function() {
    // multiply random customers per hour by average cookies sold per hour

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      this.avgCookiesPerCust = Math.ceil(this.avgCookiesPerCust);
      // console.log('avgCookiesPerCust: ' + this.avgCookiesPerCust);
      // console.log('RandCustPerHour: ' + this.randCustPerHour());
      var cookiesPerCustPerHour = (this.randCustPerHour() * this.avgCookiesPerCust);
      this.totalCookiesSold += cookiesPerCustPerHour;
      this.avgCookiesPerHour[i] += ': ' + cookiesPerCustPerHour;
      console.log('Avg cookies per hour: ' + this.avgCookiesPerHour[i]);
    }
    this.avgCookiesPerHour.push('Total: ' + this.totalCookiesSold);
    return this.avgCookiesPerHour;
  },
  renderData: function() {
    // Render the data from this location to the sales.html page.
    var listItems = document.getElementById('seattleCenter_List');

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      console.log('AvgCookiesPerHour[' + i + '] : ' + this.avgCookiesPerHour[i]);
      var liEl = document.createElement('li');
      liEl.textContent = this.avgCookiesPerHour[i];
      // console.log(liEl);
      listItems.appendChild(liEl);
    }
  }
};
//***************************************************************************
var capitolHill = {
  // var cookiesSoldPerHour: [],
  minCustPerHour: 7,
  maxCustPerHour: 15,
  avgCookiesPerCust: 4.6,
  avgCookiesPerHour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalCookiesSold: 0,
  randCustPerHour: function() {
    //Magic here for calculating number of customers between minCustPerHour and maxCustPerHour
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  calcCookiesSoldPerHour: function() {
    // multiply random customers per hour by average cookies sold per hour

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      this.avgCookiesPerCust = Math.ceil(this.avgCookiesPerCust);
      // console.log('avgCookiesPerCust: ' + this.avgCookiesPerCust);
      // console.log('RandCustPerHour: ' + this.randCustPerHour());
      var cookiesPerCustPerHour = (this.randCustPerHour() * this.avgCookiesPerCust);
      this.totalCookiesSold += cookiesPerCustPerHour;
      this.avgCookiesPerHour[i] += ': ' + cookiesPerCustPerHour;
      console.log('Avg cookies per hour: ' + this.avgCookiesPerHour[i]);
    }
    this.avgCookiesPerHour.push('Total: ' + this.totalCookiesSold);
    return this.avgCookiesPerHour;
  },
  renderData: function() {
    // Render the data from this location to the sales.html page.
    var listItems = document.getElementById('capitolHill_List');

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      console.log('AvgCookiesPerHour[' + i + '] : ' + this.avgCookiesPerHour[i]);
      var liEl = document.createElement('li');
      liEl.textContent = this.avgCookiesPerHour[i];
      // console.log(liEl);
      listItems.appendChild(liEl);
    }
  }
};
//***************************************************************************
var pikeAndFirst = {
  // var cookiesSoldPerHour: [],
  minCustPerHour: 7,
  maxCustPerHour: 15,
  avgCookiesPerCust: 4.6,
  avgCookiesPerHour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  totalCookiesSold: 0,
  randCustPerHour: function() {
    //Magic here for calculating number of customers between minCustPerHour and maxCustPerHour
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
  },
  calcCookiesSoldPerHour: function() {
    // multiply random customers per hour by average cookies sold per hour

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      this.avgCookiesPerCust = Math.ceil(this.avgCookiesPerCust);
      // console.log('avgCookiesPerCust: ' + this.avgCookiesPerCust);
      // console.log('RandCustPerHour: ' + this.randCustPerHour());
      var cookiesPerCustPerHour = (this.randCustPerHour() * this.avgCookiesPerCust);
      this.totalCookiesSold += cookiesPerCustPerHour;
      this.avgCookiesPerHour[i] += ': ' + cookiesPerCustPerHour;
      console.log('Avg cookies per hour: ' + this.avgCookiesPerHour[i]);
    }
    this.avgCookiesPerHour.push('Total: ' + this.totalCookiesSold);
    return this.avgCookiesPerHour;
  },
  renderData: function() {
    // Render the data from this location to the sales.html page.
    var listItems = document.getElementById('pikeAndFirst_List');

    for (var i = 0; i < this.avgCookiesPerHour.length; i++) {
      console.log('AvgCookiesPerHour[' + i + '] : ' + this.avgCookiesPerHour[i]);
      var liEl = document.createElement('li');
      liEl.textContent = this.avgCookiesPerHour[i];
      // console.log(liEl);
      listItems.appendChild(liEl);
    }
  }
};
//***************************************************************************
