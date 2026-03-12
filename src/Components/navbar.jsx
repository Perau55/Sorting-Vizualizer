import React from 'react';

const NavBar = () => {
  return (
    <div>
      <nav>
        <h1 id='navName'>SortingVisualizer</h1>
        <div id='navDiv'>

          <button id='sortButton' className='navItem'>
            Sort
          </button>

          <button id='shuffleButton' className='navItem'>
            Shuffle
          </button>

          <label className='navItem navLabel'>Numbers in the array:
            <input id='navInput' type="number" min="1" max="100" />
          </label>

          <label className='navItem navLabel'>Sorting Method:

            <select className='navItem navSelect'>
              <option value="">Bogo Sort</option>
              <option value="">Bubble Sort</option>
            </select>
            
          </label>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;
