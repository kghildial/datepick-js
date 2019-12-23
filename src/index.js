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

function initDatepicker(elementID, dpjsConfig) {
  createDatePickerState(elementID, dpjsConfig);

  const today = new Date();
  const initDate = dpjsConfig.initDate || today.getDate();
  const initMonth = dpjsConfig.initMonth || monthsList[today.getMonth()];
  const initYear = dpjsConfig.initYear || today.getFullYear();

  const isInitDateToday = () => {
    if (
      initDate === today.getDate() &&
      initMonth === monthsList[today.getMonth()] &&
      initYear === today.getFullYear()
    )
      return true;

    return false;
  };

  // Attach the initial datepicker scaffold
  document.querySelector(
    'body',
  ).innerHTML += `<div id="dpjs_datepicker_${elementID}" class="dpjs_datepicker"><div class="dpjs_selectors"><div id="dpjs_pseudoMonthSelector_${elementID}" class="dpjs_selectWrapper"><select name="dpjs_month" id="dpjs_monthSelector_${elementID}"></select></div><div id="dpjs_pseudoYearSelector_${elementID}" class="dpjs_selectWrapper"><select name="dpjs_year" id="dpjs_yearSelector_${elementID}"></select></div></div><div id="dpjs_calender_${elementID}"><div id="dpjs_days_${elementID}" class="dpjs_days"></div><div id="dpjs_dates_${elementID}" class="dpjs_dates"></div></div><div class="dpjs_legend"><span class="dpjs_legend_today">${
    !isInitDateToday() ? 'Default Selection' : 'Today'
  }</span><span class="dpjs_legend_selected">Selected Date</span></div></div>`;

  populateCalenderDays(elementID);
  populateCalenderDates(elementID, initMonth, initYear, dpjsConfig);
  addSelectors(
    elementID,
    {
      initMonth,
      initYear,
      minYear: dpjsConfig.minYear,
      maxYear: dpjsConfig.maxYear,
    },
    dpjsConfig,
  );
  setDatepickerPos(elementID);
  registerDatepickerEvents(elementID, dpjsConfig);
}

function createDatePickerState(elementID, dpjsConfig) {
  datepickerStates[elementID] = {
    elementID,
    datepickerID: `dpjs_datepicker_${elementID}`,
    isDatepickerOpen: false,
    dpjsConfig,
    selectedDate: '',
  };
}

function registerDatepickerEvents(elementID, dpjsConfig) {
  const datepickerInput = document.querySelector(`#${elementID}`);
  const datepickerWidget = document.querySelector(
    `#dpjs_datepicker_${elementID}`,
  );

  const preventEdits = () => {
    datepickerInput.addEventListener('keydown', event => {
      event.preventDefault();
      event.stopPropagation();
    });
  };

  const showDatepicker = () => {
    datepickerWidget.style.display = 'block';
    setTimeout(() => {
      datepickerWidget.style.opacity = '1';
    }, 100);
  };

  const hideDatepicker = () => {
    datepickerWidget.style.opacity = '0';
    setTimeout(() => {
      datepickerWidget.style.display = 'none';
    }, 100);
  };

  const toggleDatepickerOnCLick = () => {
    datepickerStates[elementID] = false;

    document.addEventListener('click', event => {
      if (event.target.getAttribute('id') === elementID) {
        showDatepicker();
      } else if (
        !document
          .querySelector(`#dpjs_datepicker_${elementID}`)
          .contains(event.target)
      ) {
        hideDatepicker();
      }
    });
  };

  const handleDateSelection = () => {
    document
      .querySelector(`#dpjs_dates_${elementID}`)
      .addEventListener('click', event => {
        const targetID = event.target.getAttribute('id');

        if (targetID && targetID.split('-')[0] === `dpjs_${elementID}_date`) {
          const monthValue = document.querySelector(
            `#dpjs_monthSelector_${elementID}`,
          ).value;
          const yearValue = document.querySelector(
            `#dpjs_yearSelector_${elementID}`,
          ).value;
          const datepickerInputElement = document.querySelector(
            `#${elementID}`,
          );

          // De-highlight the prevous selected date
          if (datepickerInputElement.value !== '') {
            const currentDateValue = Number(
              datepickerInputElement.value.split('-')[0],
            );
            const todaysDate = new Date().getDate();
            document.querySelector(
              `#dpjs_${elementID}_date-${
                datepickerInputElement.value.split('-')[0]
              }`,
            ).style.background =
              currentDateValue === todaysDate ? '#00d7cd' : '#fff';
          }

          // Highlight the selected date
          event.target.style.background = '#ccc';

          const newDate = `${event.target.textContent}-${monthValue}-${yearValue}`;

          // Set the value in the input
          datepickerInputElement.value = newDate;

          // Hide the datepicker
          hideDatepicker();

          // Redirect to custom onChnage function (if-present)
          dpjsConfig.onChange(newDate);
        }
      });
  };

  preventEdits();
  toggleDatepickerOnCLick();
  handleDateSelection();
}

function setDatepickerPos(elementID) {
  if (document.querySelectorAll(`#${elementID}`).length > 1)
    throw new Error(
      `DatepickJS:: You have more than one instace of the ID => "${elementID}" in the DOM. Please ensure the datepicker input to have a unique ID`,
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

  const inputEl = document.querySelector(`#${elementID}`);

  const inputPos = getOffset(inputEl);
  const datepickerWidget = document.querySelector(
    `#dpjs_datepicker_${elementID}`,
  );

  datepickerWidget.style.top = `${inputPos.top + inputEl.offsetHeight}px`;
  datepickerWidget.style.left = `${inputPos.left}px`;
}

// This fuction populates the selector contents
function addSelectors(
  elementID,
  { initMonth, initYear, minYear, maxYear },
  dpjsConfig,
) {
  const selectorClauses = ['Month', 'Year'];

  const populateRealSelectors = (selectorClauses, startYear, endYear) => {
    selectorClauses.forEach(selectorClause => {
      if (selectorClause === 'Month') {
        monthsList.forEach(month => {
          document.querySelector(
            `#dpjs_monthSelector_${elementID}`,
          ).innerHTML += `<option value="${month}">${month}</option>`;
        });
      }

      if (selectorClause === 'Year') {
        const initialYear = startYear || new Date().getFullYear() - 10;
        const finalYear = endYear || new Date().getFullYear();
        for (let year = initialYear; year <= finalYear; year += 1) {
          document.querySelector(
            `#dpjs_yearSelector_${elementID}`,
          ).innerHTML += `<option value="${year}">${year}</option>`;
        }
      }

      // Set the selectorValues
      document.querySelector(
        `#dpjs_${selectorClause.toLowerCase()}Selector_${elementID}`,
      ).value = eval(`init${selectorClause}`);
    });
  };

  const populatePseudoSelectors = (selectorClauses, startYear, endYear) => {
    selectorClauses.forEach(selectorClause => {
      if (selectorClause === 'Month') {
        document.querySelector(
          `#dpjs_pseudoMonthSelector_${elementID} .dpjs_pseudoSelect`,
        ).innerHTML += `<ul id="dpjs_monthSelectList_${elementID}" class="dpjs_pseudoSelectList"></ul>`;

        monthsList.forEach(month => {
          document.querySelector(
            `#dpjs_monthSelectList_${elementID}`,
          ).innerHTML += `<li value="${month}">${month}</li>`;
        });
      }

      if (selectorClause === 'Year') {
        document.querySelector(
          `#dpjs_pseudoYearSelector_${elementID} .dpjs_pseudoSelect`,
        ).innerHTML += `<ul id="dpjs_yearSelectList_${elementID}" class="dpjs_pseudoSelectList"></ul>`;

        const initialYear = startYear || new Date().getFullYear() - 10;
        const finalYear = endYear || new Date().getFullYear();
        for (let year = initialYear; year <= finalYear; year += 1) {
          document.querySelector(
            `#dpjs_yearSelectList_${elementID}`,
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
        .querySelector(`#dpjs_selected${selectorClause}Value_${elementID}`)
        .addEventListener('click', event => {
          if (event.target.className === 'dpjs_pseudoSelectValue')
            event.target.nextElementSibling.style.height = '300px';
        });

      // Select an option event
      document
        .querySelector(
          `#dpjs_${selectorClause.toLowerCase()}SelectList_${elementID}`,
        )
        .addEventListener('click', event => {
          document.querySelector(
            `#dpjs_selected${selectorClause}Value_${elementID}`,
          ).textContent = event.target.getAttribute('value');

          // Set the value in the original select input
          document.querySelector(
            `#dpjs_${selectorClause.toLowerCase()}Selector_${elementID}`,
          ).value = event.target.getAttribute('value');

          event.target.parentElement.style.height = '0';

          const monthVal = document.querySelector(
            `#dpjs_monthSelector_${elementID}`,
          ).value;
          const yearVal = document.querySelector(
            `#dpjs_yearSelector_${elementID}`,
          ).value;
          populateCalenderDates(elementID, monthVal, yearVal, dpjsConfig);
        });
    });
  };

  // Add pseudoSelectors
  selectorClauses.forEach(selectorClause => {
    document.querySelector(
      `#dpjs_pseudo${selectorClause}Selector_${elementID}`,
    ).innerHTML += `<div id="dpjs_pseudo${selectorClause}Selector_${elementID}" class="dpjs_pseudoSelect"><span id="dpjs_selected${selectorClause}Value_${elementID}" class="dpjs_pseudoSelectValue">${eval(
      `init${selectorClause}`,
    )}</span></div>`;
  });

  // TODO: Add params dependency line from init function
  populateRealSelectors(selectorClauses, minYear, maxYear, initMonth, initYear);
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

function populateCalenderDays(elementID) {
  daysList.forEach(day => {
    document.querySelector(
      `#dpjs_days_${elementID}`,
    ).innerHTML += `<p id="dpjs_${elementID}_day-${day}">${day}</p>`;
  });
}

function populateCalenderDates(elementID, month, year, dpjsConfig) {
  // Clear any existing dates in the calender
  document.querySelector(`#dpjs_dates_${elementID}`).style.opacity = '0';

  setTimeout(() => {
    document.querySelector(`#dpjs_dates_${elementID}`).innerHTML = '';

    const startingDayIndex = getMonthStartingDayIndex(month, year);
    const totalDaysInMonth = getTotalDaysInMonth(month, year);
    const initDate = dpjsConfig.initDate || new Date().getDate();
    const initMonth = dpjsConfig.initMonth || monthsList[new Date().getMonth()];
    const initYear = dpjsConfig.initYear || new Date().getFullYear();
    const selectedMonth = document.querySelector(
      `#dpjs_monthSelector_${elementID}`,
    ).value;
    const selectedYear = Number(
      document.querySelector(`#dpjs_yearSelector_${elementID}`).value,
    );

    let dateValue = 1;
    let rowValue = 1;
    let startPopulatingDates = false;

    while (dateValue <= totalDaysInMonth) {
      document.querySelector(
        `#dpjs_dates_${elementID}`,
      ).innerHTML += `<div id="dpjs_${elementID}_datesRow-${rowValue}" class="dpjs_datesList"></div>`;

      for (let i = 0; i < 7; i++) {
        if (i === startingDayIndex) startPopulatingDates = true;

        if (startPopulatingDates && dateValue <= totalDaysInMonth) {
          // add <p> tag with date
          document.querySelector(
            `#dpjs_${elementID}_datesRow-${rowValue}`,
          ).innerHTML += `<p id="dpjs_${elementID}_date-${dateValue}">${dateValue}</p>`;

          // Highlight todays date
          if (
            dateValue === initDate &&
            selectedMonth === initMonth &&
            selectedYear === initYear
          ) {
            document.querySelector(
              `#dpjs_${elementID}_date-${dateValue}`,
            ).style.background = '#00d7cd';
          }

          dateValue++;
        } else {
          // add empty <p> tag
          document.querySelector(
            `#dpjs_${elementID}_datesRow-${rowValue}`,
          ).innerHTML += `<p class="dpjs_emptyDateSlot"></p>`;
        }
      }
      if (dateValue <= totalDaysInMonth) rowValue++;
    }

    document.querySelector(`#dpjs_dates_${elementID}`).style.opacity = '1';
  }, 500);
}

export default initDatepicker;
