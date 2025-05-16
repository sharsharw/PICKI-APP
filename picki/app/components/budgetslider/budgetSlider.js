'use client';

import { Range } from 'react-range';
import '../budgetSlider/budgetSlider.css';

const STEP = 10;
const MIN = 0;
const MAX = 500;

export default function BudgetSlider({ values, setValues }) {
  return (
    <div className="budget-slider-container">
      <div className="budget-slider-wrapper">
        <div className="budget-tooltip">
          ${values[0]} — ${values[1]}
        </div>

        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={setValues}  // Ensure setValues is updating state correctly
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="budget-track"
              style={{
                backgroundColor: '#e0d5ec', // light purple for the unselected part
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: `calc(${((values[0] - MIN) / (MAX - MIN)) * 100}% - 10px)`, // Align it with the thumb's position
                  width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
                  height: '100%',
                  backgroundColor: '#3b1c85', // dark purple for the selected part
                  borderRadius: '4px 0 0 4px' 
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              key={index}
              {...props}
              className="budget-thumb"
            />
          )}
        />

        <div className="budget-range-labels">
          <span>$0</span>
          <span>$500</span>
        </div>
      </div>
    </div>
  );
}
