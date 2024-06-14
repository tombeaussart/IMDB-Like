import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import List from './components/List.js';
import NavBar from './components/NavBar.js';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [serieData, setSerieData] = useState([]);
  const [upcomingMovieData, setUpcomingMovieData] = useState([]);


  useEffect(() => {
    getTrendingMovieData("movie");
    getTrendingSerieData("tv");
    getUpcomingMovieData();

  }, [])

  async function getTrendingMovieData(type) {
    const apiKey = "e7ac20b96963123ae0f92a693fb25d1b";
    let resp = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie&language=fr-FR&region=FR`);
    setMovieData(resp.data.results)
  }
  async function getTrendingSerieData(type) {
    const apiKey = "e7ac20b96963123ae0f92a693fb25d1b";
    let resp = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie&language=fr-FR&region=FR`);
    setSerieData(resp.data.results)
  }
  async function getUpcomingMovieData() {
    const apiKey = "e7ac20b96963123ae0f92a693fb25d1b";
    let resp = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=fr-FR&region=FR`);
    setUpcomingMovieData(resp.data.results)
  }

  return (
    <div className="bg-gray-800">
      <NavBar targetId="Upcoming movies"></NavBar>
      <List data={movieData} title={"Trending movies"} id="Trending movies"></List>
      <List data={serieData} title={"Trending series"} id="Trending series"></List>
      <List data={upcomingMovieData} title={"Upcoming movies"} id="Upcoming movies"></List>

    </div >
  );
}

export default App;
