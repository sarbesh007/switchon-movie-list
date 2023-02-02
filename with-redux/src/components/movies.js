import React from 'react'
import PropTypes from 'prop-types'
import { getMovies } from '../redux/actions/searchAction'
import { connect } from 'react-redux'

const Movies = ({ getMovies, movies }) => {
    console.log('movies', movies)
    return (
        <div>
            <h1> Posts </h1>
            <br/>
            <h3> Click the below button to get all movies </h3>
            <input type="textbox" onChange={getMovies} />
           {movies.length > 0 && movies.data && movies.data.map((movie)=>(
               <div>
                   <h5>{movie.id} &nbsp;&nbsp; {movie.title}</h5>
               </div>
           ))}
        </div>
    )
}

Movies.propTypes = {
    getMovies: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    movies: state.movies
})


export default connect(mapStateToProps, { getMovies })(Movies)