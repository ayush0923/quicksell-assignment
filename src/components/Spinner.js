import React from 'react';
import './Spinner.css' //import spinner css
const Spinner=()=>
{
    return(
        <div className="spin">
        {/* All the following divs represents the dots in the spinner.
            Here I have used 4 divs in order to represent the dots.
        */}
            <div></div> <div></div> <div></div> <div></div>
        </div>
    );
}
//Export spinner component
export default Spinner;