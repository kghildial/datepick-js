# DatepickJS<span style="font-size: 12px;">v1.0.6</span>

A datepicker widget with a clean & minimal UI. It's completely made in Vanilla JS from scratch. No dependencies required.

### Why bother making a datepicker widget among the many that are already avialable ?

- Well, this one is dependency free with a simple API to take control over your app's datepicker related needs.
- You can expand this datepicker (ie. play with it easily by using it's DOM id(s) which are unique for each instance).


### Usage:
```javascript

import dpjsInit from 'datepick-js'; // Import the init function from the module (Psst, You can name it anything you want :D)

/** 
 * @param id - The id of the input you want to attach the datepicker to
 * @param dpjsConfig - The config object with various options (mandatory and non-mandatory)
*/
dpjsInit("<<your input's id>>", {
    minYear: "<<The min year you want the datepicker to have>>", // Mandatory (type => number)
    maxYear: "<<The max year you want the datepicker to have>>", // Mandatory (type => number)
    initDate: "<<Any date you want preselcted at startup eg. 1 >>",    // Optional, defaults to current date (type => number)
    initMonth: "<<First 3 letters of the month you want preselected at startup eg. "Apr" (for April)>>",  // Optional, defaults to the current month (type => string)
    initYear: "<<Any year you want preselected at startup eg. 2077>>", // Optional, defaults to the current year (type => nnumber)
    onChange: value => {
      // An optional custom onChange function
    }
});

```
