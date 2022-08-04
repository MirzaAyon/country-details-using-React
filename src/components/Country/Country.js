import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country);
    //destructuring er khetre she daane object mane baameo obj,eta je obj ta amra janlam console theke
    const {area,region,population,name,flags} = props.country;
    // console.log(props.country); //eta korle flags gula kmne ache ta inspact theke janbo
    return (
        <div className='country bg-info'>

            <h2>Country Name: {name.common} </h2>
            <img src={flags.png} alt="" />
            <h4>Population : {population}</h4>
            <p><small>Area : {area} </small></p>
            {/* evabe dewar karon countries e area ta pathano hyni but country ke to pathano hoise, so country theke data ta niye nilam */}
            <p><small>region : {region} </small></p>
            {/* same vabe region try krbo */}

        </div>
    );
};

export default Country;



//eta try korbo etai ager version



// const Country = (props) => {
//     console.log(props.country);
    
//     return (
//         <div className='country'>

//             <h2>Country Name: {props.country.name.common} </h2>
//             <h4>Population : {props.country.population}</h4>
//             <p><small>Area : {props.country.area} </small></p>
            
//             <p><small>region : {props.country.region} </small></p>
            

//         </div>
//     );
// };



//ekhane uporer ta new method with destructuring
//ekhane nicher ta old method without destructuring

            
