import React from 'react';

const Report = (props) => {
  const {
    reportClass,
    imageOuterClass,
    imageInnerClass,
    reportInfoClass,
    categoryClass,
    categoryNameClasses,
    titleClass,
    subTitleClass,
    authorClass,
    categoryName,
  } = props;

  let categoryNameElement = null;
  if (categoryName) {
    categoryNameElement = (
      <span className={categoryNameClasses} title={categoryName}>
        {categoryName}
      </span>
    );
  }
  return (
    <div className={reportClass}>
      <div className={imageOuterClass}>
        <div className={imageInnerClass}></div>
      </div>
      <div className={reportInfoClass}>
        <div className={categoryClass}>{categoryNameElement}</div>
        <div
          className={titleClass}
          title='סיור קולינרי בין המסעדות הערביות הכי טובות בחיפה'
        >
          <h3>סיור קולינרי בין המסעדות הערביות הכי טובות בחיפה</h3>
        </div>
        <div className={subTitleClass}>
          <p>
            גם אני, שעסוק כל השבוע, מתפנה לצפות בטלוויזיה רק בסופי השבוע,
            ונוכחתי שרוב תוכניות הטלוויזיה בכל הערוצים הן תוכניות אוכל.
          </p>
        </div>
        <div className={authorClass}>
          <span>שירית גל</span>
        </div>
      </div>
    </div>
  );
};

export default Report;
