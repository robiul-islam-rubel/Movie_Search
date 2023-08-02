import "./App.css";
import "./style.scss";
import searchIcon from "./search.svg";
import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';
function App() {  
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);        
    }
    useEffect(() => {
        searchMovies(searchTerm);
    },[])
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                 placeholder="Search for movies"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                />  
                <img
                 src={searchIcon}
                 alt="Search"
                 onClick={() => searchMovies(searchTerm)}
                /> 
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {
                                movies.map((movie) => (
                                    <MovieCard movie1={movie} />
                                ))
                            }
                         </div>
                    ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
          </div>
      );
      
}

export default App;
