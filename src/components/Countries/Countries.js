import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    //step 1
    const [countries, setCountries] = useState([]);
    //data ta jehetu arr tai default value hbe empty arr


    //step2
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    //anonymous func dilam
    //console.log(data kore dekhboo setCountries er bodole)
    return (
        <div >
            <h3>Hello my countries</h3>
            <h2>Hello my countries Length : {countries.length}</h2>
            {
                // countries.map(country => console.log(country))
                //eta console e krbo


            }
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        //ek ek kore pathanor cheye shob ek bare pathae dilam. console e dekha jabe arr er modhe full countries tao ache 
                        // region={country.region}
                        //eta old method
                        key={country.cca3}
                    //evabe unique kono key dile r warning pabo na console e 
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;