import { useState, useEffect } from 'react';

function useFetch(url) {
  const [dataApi, setDataApi] = useState([]);
  useEffect(() => {
    const getApi = async url => {
        const urlApi = await fetch(url);
        const resData = await urlApi.json();
        setDataApi(resData); 
    }
    getApi(url);
  }, [url])
  return{ dataApi };
}
export default useFetch;