//Quicksell Assignment
//Ayush Goutam
import React, { useState, useEffect } from 'react'; //Imported React hooks
import Spinner from './Spinner'; // import spinner component
//import css files of spinner and counter component
import './Spinner.css'
import './Counter.css'
//This defines the Counter function
const Counter = () =>
 {
     //three state variables are defined using Use state hook 
    const [temp, settemp] = useState(0); // storing temporary value
    const [minim, setminim] = useState(1); // storing  minimum value that can be decremented
    const [maxim, setmaxim] = useState(1000); // storing maximum value that can be incremented
    //use effect hook is used 
    useEffect(() => 
    {
        // if minimum value is null then set its value to 1
        if (minim===null) setminim(1);
        const gb=async()=>
        {
            // using async await and get the response
            const res= await fetch('');
            const flag = await res.json();
            // if only flag value is null then 
            if (flag !== null)  await setminim(parseInt(flag));
        }
      gb();
    },[]);
    //using use effect hook
    useEffect(() =>
    {
        // firstly set temporary value to 0
        settemp(0);
        //if minimum value is Null then set its value to 1
        if (minim===null) setminim(1); 
         //if minimum value is greater then maxim then set its value to maxim
        if (minim>=maxim) setminim(maxim);
         //if minimum value is non-positive then set its value to 0
           if (minim<=0) setminim(0);
        const fun=async()=> 
        {
            //using async await
            const req={ method: 'PUT', 
            headers: {'Content-Type':'application/json'}
            ,body:JSON.stringify({q: minim})};
            // store in req,res
            //getting the response 
            const res= await fetch('https://xyz-d.firebaseio.com/p.json', req); const u= await res.json();
            //if there is responnse update value of temporary
            if(u) settemp(u+2);
            // else set the value of temporary as 1
            else settemp(1);    
        }
        fun();
    },[minim]);
    // function for plus button 
    const plus=()=>
    {
        //if minimum is >=maxim then set it as maxim
        if (minim>=maxim) setminim(maxim);
        // else set it as minim+1
        else setminim(minim+ 1);
    }
    // function for minus button 
    const minus=()=> 
    {
        //if minimum is non-positive then set it as 0
        if (minim<=0) setminim(0);
        // else set it as minim-1
        else setminim(minim-1);
    }
    return (
        //Main Div block
        <div className="firstdiv">
            {
                // If temp value is equal to Zero then render first component 
                // else render 2nd component
               (temp==0) ? (
                <div className="ut" >
                {/*  this part contains the spinner component*/}
                <div className="spinload"> <Spinner /> </div> 
                <p> Saving counter value </p>
                </div>): (<div className="ut"></div>)
            }
          <div className="pack">
                {/* this part contains the minus button */}
                <button className="neg common" onClick={()=>minus()}> - </button>
                {/* this part contains the input value */}
                <input type="number" onChange={(e) => setminim(parseInt(e.target.value))} value={minim} />
                {/* this part contains the plus button */}
                <button className="pos common" onClick={() =>plus()}> + </button>
          </div>
          {/* this part prints the counter value*/}
            <p className="lt">Counter value:{minim}</p>
        </div>
    );
}
//export conter component
export default Counter;