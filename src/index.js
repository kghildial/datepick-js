/**
 * All the source JS for datepick-js
 */

// import for the datepick-js styles
import './index.scss';

// Zeller Month Map
const monthsMap = {
  Jan: 11,
  Feb: 12,
  Mar: 1,
  Apr: 2,
  May: 3,
  Jun: 4,
  Jul: 5,
  Aug: 6,
  Sep: 7,
  Oct: 8,
  Nov: 9,
  Dec: 10,
};

// Zeller days map
const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const monthsList = Object.keys(monthsMap);

const datepickerStates = {};

function initDatepicker(elememtID, dpjsConfig) {
  createDatePickerState(elememtID, dpjsConfig);

  const today = new Date();
  const initMonth = dpjsConfig.initMonth || monthsList[today.getMonth()];
  const initYear = dpjsConfig.initYear || today.getFullYear();

  // Attach the initial datepicker scaffold
  document.querySelector('body').innerHTML +=
    '<div id="dpjs_datepicker"><div class="dpjs_selectors"><div id="dpjs_pseudoMonthSelector" class="dpjs_selectWrapper"><select name="dpjs_month" id="dpjs_monthSelector"></select></div><div id="dpjs_pseudoYearSelector" class="dpjs_selectWrapper"><select name="dpjs_year" id="dpjs_yearSelector"></select></div></div><div id="dpjs_calender"><div id="dpjs_days"></div><div id="dpjs_dates"></div></div></div>';

  populateCalenderDays();
  populateCalenderDates(initMonth, initYear);
  addSelectors({
    initMonth,
    initYear,
    minYear: dpjsConfig.minYear,
    maxYear: dpjsConfig.maxYear,
  });
  setDatepickerPos(elememtID);
  registerDatepickerEvents(elememtID);
}

function createDatePickerState(elementID, dpjsConfig) {
  datepickerStates[elementID] = {
    datepickerID: `dpjs_datepicker_${elementID}`,
    isDatepickerOpen: false,
    dpjsConfig,
    selectedDate: '',
  };
}

function registerDatepickerEvents(elementID) {
  const datepickerInput = document.querySelector(`#${elementID}`);
  const datepickerWidget = document.querySelector('#dpjs_datepicker');

  const preventEdits = () => {
    datepickerInput.addEventListener('keydown', event => {
      event.preventDefault();
      event.stopPropagation();
    });
  };

  const toggleDatepickerOnCLick = () => {
    datepickerStates[elementID] = false;
    document.addEventListener('click', event => {
      if (event.target.getAttribute('id') === elementID) {
        datepickerWidget.style.display = 'block';
        setTimeout(() => {
          datepickerWidget.style.opacity = '1';
        }, 200);
      } else if (
        !document.querySelector('#dpjs_datepicker').contains(event.target)
      ) {
        datepickerWidget.style.opacity = '0';
        setTimeout(() => {
          datepickerWidget.style.display = 'none';
        }, 200);
      }
    });
  };

  preventEdits();
  toggleDatepickerOnCLick();
}

function setDatepickerPos(elememtID) {
  if (document.querySelectorAll(`#${elememtID}`).length > 1)
    throw new Error(
      `DatepickJS:: You have more than one instace of the ID => "${elememtID}" in the DOM. Please ensure the datepicker input to have a unique ID`,
    );

  const getOffset = el => {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: _y, left: _x };
  };

  const inputEl = document.querySelector(`#${elememtID}`);

  const inputPos = getOffset(inputEl);
  document.querySelector('#dpjs_datepicker').style.top = `${inputPos.top +
    inputEl.offsetHeight}px`;
  document.querySelector('#dpjs_datepicker').style.left = `${inputPos.left}px`;
}

// This fuction populates the selector contents
function addSelectors({ initMonth, initYear, minYear, maxYear }) {
  const selectorClauses = ['Month', 'Year'];

  const populateRealSelectors = (selectorClauses, startYear, endYear) => {
    selectorClauses.forEach(selectorClause => {
      if (selectorClause === 'Month') {
        monthsList.forEach(month => {
          document.querySelector(
            '#dpjs_monthSelector',
          ).innerHTML += `<option value="${month}">${month}</option>`;
        });
      }

      if (selectorClause === 'Year') {
        const initialYear = startYear || new Date().getFullYear() - 10;
        const finalYear = endYear || new Date().getFullYear();
        for (let year = initialYear; year <= finalYear; year += 1) {
          document.querySelector(
            '#dpjs_yearSelector',
          ).innerHTML += `<option value="${year}">${year}</option>`;
        }
      }
    });
  };

  const populatePseudoSelectors = (selectorClauses, startYear, endYear) => {
    selectorClauses.forEach(selectorClause => {
      if (selectorClause === 'Month') {
        document.querySelector(
          '#dpjs_pseudoMonthSelector .dpjs_pseudoSelect',
        ).innerHTML +=
          '<ul id="dpjs_monthSelectList" class="dpjs_pseudoSelectList"></ul>';

        monthsList.forEach(month => {
          document.querySelector(
            '#dpjs_monthSelectList',
          ).innerHTML += `<li value="${month}">${month}</li>`;
        });
      }

      if (selectorClause === 'Year') {
        document.querySelector(
          '#dpjs_pseudoYearSelector .dpjs_pseudoSelect',
        ).innerHTML +=
          '<ul id="dpjs_yearSelectList" class="dpjs_pseudoSelectList"></ul>';

        const initialYear = startYear || new Date().getFullYear() - 10;
        const finalYear = endYear || new Date().getFullYear();
        for (let year = initialYear; year <= finalYear; year += 1) {
          document.querySelector(
            '#dpjs_yearSelectList',
          ).innerHTML += `<li value="${year}">${year}</li>`;
        }
      }
    });
  };

  const registerSelectorEvents = selectorClauses => {
    // Close select-list event
    document.addEventListener('click', event => {
      const parentElementClass = event.target.parentElement
        ? event.target.parentElement.className
        : '';

      if (
        event.target.className !== 'dpjs_pseudoSelectValue' &&
        parentElementClass
      ) {
        const selectorsList = document.querySelectorAll(
          '.dpjs_pseudoSelectList',
        );
        Object.keys(selectorsList).forEach(index => {
          selectorsList[index].style.height = 0;
        });
      }
    });

    // Loop to register open select list and option choose events
    selectorClauses.forEach(selectorClause => {
      // Open select-list input
      document
        .querySelector(`#dpjs_selected${selectorClause}Value`)
        .addEventListener('click', event => {
          if (event.target.className === 'dpjs_pseudoSelectValue')
            event.target.nextElementSibling.style.height = '300px';
        });

      // Select an option event
      document
        .querySelector(`#dpjs_${selectorClause.toLowerCase()}SelectList`)
        .addEventListener('click', event => {
          document.querySelector(
            `#dpjs_selected${selectorClause}Value`,
          ).textContent = event.target.getAttribute('value');

          // Set the value in the original select input
          document.querySelector(
            `#dpjs_${selectorClause.toLowerCase()}Selector`,
          ).value = event.target.getAttribute('value');

          event.target.parentElement.style.height = '0';

          populateCalenderDates(
            document.querySelector('#dpjs_monthSelector').value,
            document.querySelector('#dpjs_yearSelector').value,
          );
        });
    });

    document.querySelectorAll;
  };

  // Add pseudoSelectors
  selectorClauses.forEach(selectorClause => {
    document.querySelector(
      `#dpjs_pseudo${selectorClause}Selector`,
    ).innerHTML += `<div id="dpjs_pseudo${selectorClause}Selector" class="dpjs_pseudoSelect"><span id="dpjs_selected${selectorClause}Value" class="dpjs_pseudoSelectValue">${eval(
      `init${selectorClause}`,
    )}</span></div>`;
  });

  // TODO: Add params dependency line from init function
  populateRealSelectors(selectorClauses, minYear, maxYear);
  populatePseudoSelectors(selectorClauses, minYear, maxYear);
  registerSelectorEvents(selectorClauses);
}

// Zeller Magic :P
function getMonthStartingDayIndex(month, year) {
  const K = 1;
  const M = monthsMap[month];
  const D =
    [11, 12].indexOf(M) !== -1
      ? Number(String(year).slice(2, 4)) - 1
      : Number(String(year).slice(2, 4));
  const C = Number(String(year).slice(0, 2));

  const F =
    K +
    Math.floor((13 * M - 1) / 5) +
    D +
    Math.floor(D / 4) +
    Math.floor(C / 4) -
    2 * C;

  const remainder = F < 0 ? 7 + (F % 7) : F % 7;

  return remainder;
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) return true;

      return false;
    }

    return true;
  }
}

function getTotalDaysInMonth(month, year) {
  // Check for Feb Leap year condition
  if (month === 'Feb') {
    if (isLeapYear(year)) return 29;

    return 28;
  }

  const monthIndex = monthsList.indexOf(month);

  if (monthIndex <= 6) return monthIndex % 2 === 0 ? 31 : 30;

  return monthIndex % 2 !== 0 ? 31 : 30;
}

function populateCalenderDays() {
  daysList.forEach(day => {
    document.querySelector(
      '#dpjs_days',
    ).innerHTML += `<p id="${day}">${day}</p>`;
  });
}

function populateCalenderDates(month, year) {
  // Clear any existing dates in the calender
  document.querySelector('#dpjs_dates').style.opacity = '0';

  setTimeout(() => {
    document.querySelector('#dpjs_dates').innerHTML = '';

    const startingDayIndex = getMonthStartingDayIndex(month, year);
    const totalDaysInMonth = getTotalDaysInMonth(month, year);

    let dateValue = 1;
    let rowValue = 1;
    let startPopulatingDates = false;

    while (dateValue <= totalDaysInMonth) {
      document.querySelector(
        '#dpjs_dates',
      ).innerHTML += `<div id="dpjs_datesRow-${rowValue}" class="dpjs_datesList"></div>`;

      for (let i = 0; i < 7; i++) {
        if (i === startingDayIndex) startPopulatingDates = true;

        if (startPopulatingDates && dateValue <= totalDaysInMonth) {
          // add <p> tag with date
          document.querySelector(
            `#dpjs_datesRow-${rowValue}`,
          ).innerHTML += `<p id="dpjs_date-${dateValue}">${dateValue}</p>`;
          dateValue++;
        } else {
          // add empty <p> tag
          document.querySelector(
            `#dpjs_datesRow-${rowValue}`,
          ).innerHTML += `<p class="dpjs_emptyDateSlot"></p>`;
        }
      }
      if (dateValue <= totalDaysInMonth) rowValue++;
    }

    document.querySelector('#dpjs_dates').style.opacity = '1';
  }, 500);
}

export default initDatepicker;
