import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { API_KEY } from "../App";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.25rem 1.9rem;
  justify-content: center;
  border-bottom: 1px solid greenyellow;
`;

const CoverImage = styled.img`
  height: 25rem;
  cursor: pointer;
`;

const InfoColumn = styled.div`
  display: flex;
  /* all movie info in column */
  flex-direction: column;
  margin: 1rem;
`;

const MovieName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: orchid;
  margin-bottom: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const MovieInfo = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: orchid;
  overflow: hidden;
  margin: 5px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;

  &span {
    opacity: 0.5;
  }
`;

const Close = styled.span`
  font-size: 1rem;
  font-weight: 600;
  background: lightgrey;
  /* fit-content set to fit the content in required space */
  height: fit-content;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.7;
`;

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  // selectedMovie is query parameter as props from App.js
  // Destructuring
  const { selectedMovie } = props;

  // useEffect() runs on every render when no dependency passed but if dependency(i.e selectedMovie) is passed then the variable updates, the effect will run again.

  // using the .get() method to make a GET request to your endpoint,  using .then() callback to get back all of the response data and the response is returned as an object.
  //Note that you can always find the requested data from the .data property in the response.

  // i=${query parameter} this value is coming from props. They are extensions of the URL that are utilized to help determine specific content or action based on the data being delivered.
  // Here 'selectedMovie' is a imdbID(i.e tt0995035) and it is receiving from props.
  // 'setMovieInfo' updates the response data, "response" means what data get after call an API in this case receive Object(JSON data).
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`)
      .then((response) => setMovieInfo(response.data))
      // console.log(movieInfo)
      .catch((error) => setMovieInfo(error.message));
    // The refetching of the data should work once you change the value in the input field.
  }, [selectedMovie]); //Once the 'selectedMovie' changes,then only the data request should fire again to search for movies.

  // API example- https://www.omdbapi.com/?t=avengers&y=2019&plot=short&apikey=c0863e9b  search this link to get JSON data form.

  return (
    <Container>
      {movieInfo ? (
        <>
          <CoverImage src={movieInfo?.Poster} alt={movieInfo?.Title} />
          {/* Year,Title,imdbRating,Rated,Genre,Poster,etc are key object return from API */}
          <InfoColumn>
            <MovieName>{movieInfo?.Title}</MovieName>

            <MovieInfo>
              IMDB Rating : <span>{movieInfo?.imdbRating}</span>
            </MovieInfo>
            <MovieInfo>
              Year : <span>{movieInfo?.Year}</span>
            </MovieInfo>
            <MovieInfo>
              Rated : <span>{movieInfo?.Rated}</span>
            </MovieInfo>
            <MovieInfo>
              Released : <span>{movieInfo?.Released}</span>
            </MovieInfo>
            <MovieInfo>
              Runtime : <span>{movieInfo?.Runtime}</span>
            </MovieInfo>
            <MovieInfo>
              Genre : <span>{movieInfo?.Genre}</span>
            </MovieInfo>
            <MovieInfo>
              Director : <span>{movieInfo?.Director}</span>
            </MovieInfo>
            <MovieInfo>
              Writer : <span>{movieInfo?.Writer}</span>
            </MovieInfo>
            <MovieInfo>
              Actors : <span>{movieInfo?.Actors}</span>
            </MovieInfo>
            <MovieInfo>
              Language : <span>{movieInfo?.Language}</span>
            </MovieInfo>
            <MovieInfo>
              Awards : <span>{movieInfo?.Awards}</span>
            </MovieInfo>
            <MovieInfo>
              BoxOffice : <span>{movieInfo?.BoxOffice}</span>
            </MovieInfo>
            <MovieInfo>
              Plot : <span>{movieInfo?.Plot}</span>
            </MovieInfo>
          </InfoColumn>

          <Close onClick={() => props.onMovieSelect()}>X</Close>
        </>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};

export default MovieInfoComponent;
