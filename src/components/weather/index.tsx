import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = (props: any) => {
  const [data, setData] = useState(props);
	const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [readMore,setReadMore]=useState(false);
  const [location, setLocation] = useState('Rotterdam');
  let [store, setStore] = useState([localStorage.getItem(data) || '']);

  let API = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&units=metric&APPID=b1c07c62438bf7928c8882841ab3ca24`;

  const linkName=readMore?<div className="weatherMoreInfoArrow weatherMoreInfoArrowUp"></div>:<div className="weatherMoreInfoArrow weatherMoreInfoArrowDown"></div>
  const decimal = (x: string) => Number.parseFloat(x).toFixed(0);

  const localData = () => {
    localStorage.setItem('myData', JSON.stringify(data));
    const storedData = JSON.parse(localStorage.myData);
    const saveCity = storedData.city.name + " " + decimal(storedData.list[0].main.temp) + " °C";
    setStore(prevState => [...prevState, " ", saveCity])
  }

  const fetchData = (fetchData: any) =>{
    fetchData();
  }

  const days = (day: Date) => {
    const weeklyDays:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(day);
    const index = date.getDay();
    return weeklyDays[index];
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(
          API,
        );
        setData(result.data);
      } catch (error) {
        setIsError(true);
        // console.clear();
      }
      setIsLoading(false);
    };
    fetchData();
  }, [API]);

  const extraContent=<div className="weather weatherTemperature">
    {data.list !== undefined ? data.list.map((data:any) => {
      return <div key={data.dt} className="weatherTemperatureList">
            <div className="weatherTemperatureForecast">
              <div className="weatherTemperatureForecastDay">{days(data.dt_txt)}</div>
              <div>{data.dt_txt}</div>
              <div className="weatherTemperatureForecastTemp">{decimal(data.main.temp)}<span className="weatherTemperatureCelsius"> °C </span></div>
            </div>

          </div>
    }) : ''}
  </div>
    const removeTodo = () => {
      setStore([]);
    }
  

  return (
        <React.Fragment>
          <div className="weather weatherStore">{store}</div>
          <div className="weather">
            <form onSubmit={fetchData} className="searchbarContainer">
                <h3 className="searchbarText">Find your city:</h3>
                <div className="searchbarSubmit">
                  <input placeholder="Type here..." onChange={event => setLocation(event.target.value)} className="searchbarInput" />
                  <button className="searchbarButton" type="submit" value=""/>
                </div>
            </form>
            {isError && <div className="error">Try to find another place...</div>}
            {isLoading ? (
            <div className="loading">Loading ...</div>
            ) : (
              <div className="weatherContainer">
                <div className="weatherCurrent">
                  <div className="weatherCurrentCityInfo">
                    <h3 className="weather weatherCurrentCityInfoName">{data.city && data.city.name } </h3>
                    <p className="weather weatherCurrentCityInfoPopulation">Population: {data.city && data.city.population }</p>
                  </div>
                  <div className="weather weatherCurrentTemperature">{decimal(data.list && data.list[0].main.temp)} °C</div>
                  <div className="weatherCurrentPin" onClick={ localData }></div>
                  <div className="weatherCurrentBin" onClick={ removeTodo }></div>
                </div>
                <div className="weatherMoreInfo">
                  <div onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></div>
                  {readMore && extraContent}
                </div>
              </div>
            )}
          </div>
        </React.Fragment>
  );
}

export default Weather;