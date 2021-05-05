import React, { useState } from 'react';
import Report from './components/Report/Report';

import './App.css';

const App = () => {
  const [categoryNameState, setCategoryNameState] = useState('אוכל');
  const [
    categoryNameBackgroundColorState,
    setCategoryNameBackgroundColorState,
  ] = useState('BGRed');

  const categoryNameBackgroundColors = {
    red: 'BGRed',
    blue: 'BGBlue',
    yellow: 'BGYellow',
    green: 'BGGreen',
  };

  const categoryNameClasses = [
    'CategoryName',
    categoryNameBackgroundColorState,
  ].join(' ');

  const onCategoryNameInputChangeHandler = ({ target }) => {
    const { value } = target;
    setCategoryNameState(value);
  };

  const onCategoryNameBackgroundColorChangeHandler = ({ target }) => {
    const { value } = target;
    const isValueExistsInBackgroundColorsObject = new RegExp(
      /(red|blue|yellow|green)/g
    ).test(value);
    if (!isValueExistsInBackgroundColorsObject) {
      return setCategoryNameBackgroundColorState('BGRed');
    }
    setCategoryNameBackgroundColorState(categoryNameBackgroundColors[value]);
  };

  return (
    <div className='App'>
      <Report
        categoryName={categoryNameState}
        reportClass='Report'
        imageOuterClass='ImageOuter'
        imageInnerClass='ImageInner'
        reportInfoClass='ReportInfo'
        categoryClass='Category'
        categoryNameClasses={categoryNameClasses}
        titleClass='Title'
        subTitleClass='SubTitle'
        authorClass='Author'
      />
      <div className='CategoryNameManager'>
        <div className='BackGroundManager'>
          <span>צבע רקע - שם קטגוריה</span>
          <select onChange={onCategoryNameBackgroundColorChangeHandler}>
            <option value='red'>אדום</option>
            <option value='blue'>כחול</option>
            <option value='yellow'>צהוב</option>
            <option value='green'>ירוק</option>
          </select>
        </div>
        <div className='TextManager'>
          <label htmlFor='categoryNameInput'>שם קטגוריה</label>
          <input
            id='categoryNameInput'
            type='text'
            value={categoryNameState}
            onChange={onCategoryNameInputChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

/* A. Create a component like in a sketch folder that includes:
            1. component with fixed height and width. Add box shadow to your component (you can see an example example2904.png)
            2. image, with fixed height and width,  should be with zoom animation on hover
            3. category name - with dynamic width due to the length of the text
            4. title - with dynamic height due to the length of the text, maximum 2 rows
            5. sub title - with dynamic height due to the length of the text, maximum 3 rows
            6. author name - with dynamic width due to the length of the text

In the example (test-absolute.html) all divs in component are in position absolute, just so you can use the placements and sizes.
You need to make it more dynamic and flexible.

  B.  Create div with fields for updating component:
        1. input to edit category name
        2. dropdown select to choose a background color of category name.
*/
