import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const handleMovieSearch = (search) => {
    if (search === '') setMovies([])
    axios.get(`https://imdb-api.tprojects.workers.dev/search?query=${search}`)
    .then(function (response) {
      // handle success
      if (response) {
        console.log('response', response)
        console.log('response.data?.results', response.data?.results)
        setMovies(response.data?.results)

      }
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      setMovies([])
    })
  }

  console.log('movies', movies)

  return (
    <div>Movies
    <input type="textbox" onChange={(e) => handleMovieSearch(e.target.value)} />
    {
        movies && movies?.length > 0 ?
        <div>
        <h3>Titles</h3>
            {
                movies.map(movie => (
                    <div>
                        <div>
                            <img src={movie.image} width={40} height={40} />
                        </div>
                        <div>
                            <p>{movie.title}</p>
                            <p>{movie.year}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        :
        <div>No movies matching your search</div>
    }
    </div>
  )
}

export default Movies