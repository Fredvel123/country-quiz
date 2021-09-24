import React, { Fragment, useState } from 'react'
import CountryCard from './component/CountryCard';
// import CountryCard from './component/CountryCard';
import useFetch from './component/useFetch'

function CardApiHome() {
    const [countrys, setCountrys] = useState([]);
    const { dataApi } = useFetch('https://restcountries.com/v2/all');
    // console.log(dataApi);
    let newArray = [];
    const start = () => {
      for (let i = 0; i < 4; i++) {
        let countryRandom = dataApi[Math.floor(Math.random()*dataApi.length )];
          newArray.push(countryRandom);
        }
        setCountrys(newArray);
        // console.log(countrys);
    }
    return (
      <Fragment>
        <div>
        <h1>hello</h1>
        <button onClick={start}>let's Start</button>
        </div>
        <CountryCard flags = {countrys.map(item => item.flags)} country={countrys}/>
      </Fragment>
    );
}

export default CardApiHome;
