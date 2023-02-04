import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";

export const API_KEY = "c0863e9b";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  /* search bar shift to right from space-between */
  justify-content: space-between;
  background-color: black;
  color: white;
  align-items: center;
  padding: 10px;
  font-size: 1.563rem;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const MovieImage = styled.img`
  width: 5rem;
  height: 4rem;
  margin: 5px;
  cursor: pointer;
`;

const SearchBox = styled.div`
  display: flex;
  /* flex-direction: row; first icons of search then comes input box thats why row */
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  border-radius: 5px;
  margin-left: 1.25rem;
  width: 50%;
  align-items: center;
`;

const SearchIcon = styled.img`
  width: 1.25rem;
  height: 1.3rem;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 1rem;
  /* width: 100% means input box not go outside of search box */
  width: 100%;
  font-weight: bold;
  border: none;
  outline: none;
  margin-right: 10px;
  padding-left: 5%;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.8rem;
  gap: 2rem;
  justify-content: space-evenly;
`;

// state is kept inside the hook, but is accessible from the component where you "call" the hook.
//hooks must be called in the same order each time a component renders. This is what allows React to correctly preserve the state of hooks between multiple useState and useEffect calls.
//As a rule of thumb, you should only use 'state' to keep this kind of information – that requires the user to input data, or trigger events.
function App() {
  // This State Hook to search the movie
  const [searchQuery, updateSearchQuery] = useState();
  // This State Hook for Debouncing purpose
  const [timeoutId, updateTimeoutId] = useState();
  // Once the API is triggered then we have receive the Movie List that is updated and store in the current state "movieList"
  // This State Hook to get Movies List
  const [movieList, updateMovieList] = useState([]);
  // This State Hook to display selectedMovie details
  const [selectedMovie, onMovieSelect] = useState();

  // "async" makes a function return a Promise.
  // "await" makes a function wait for a Promise.
  // The await keyword makes the function pause the execution and wait for a resolved promise before it continues:
  // 'searchString' is MovieName that we search for
  // API work
  const fetchData = async (searchString) => {
    // Request or get data from API
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
    );
    console.log(response);
    // function to update the state to Search for Movies
    // https://www.omdbapi.com/?s=kabhi&apikey=c0863e9b  Search comes from here
    updateMovieList(response.data.Search);
  };

  // We will not be calling the api as per the text change we will wait for the user to stop writting if user stop then only the API call trigger is called Debouncing.

  //receive event(e) from onChange method
  const onTextChange = (e) => {
    onMovieSelect("");
    // There is an API call for every single letter that we type on input field because those single API call stored in state variable 'timeoutId' thats why use clearTimeout() to clear the previous API call for every single letters then only single API calls to search for movie if we stop writting i.e iron man This is the advantage of Debouncing functionality.
    clearTimeout(timeoutId);

    //We cannot directly apply View to Component data binding in ReactJS, for this we have to add event handlers to the view element.(here onChange) value={searchQuery} is passed in input field.
    // update search input box
    updateSearchQuery(e.target.value);

    // Searched movie shows after 1/2 sec or 500 milliseconds
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
          <MovieImage src="/Movie.png" />
        <SearchBox>
          <SearchIcon src="/Search.png" />
          <SearchInput
            placeholder="Search Movies"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>

      {/* If we click "X" close icon then we need to clear selectedMovie and MovieInfoComponent */}
      {/* Once 'selectedMovie' is here then only we show <MovieInfoComponent/> and provide the selectedMovie  */}
      {selectedMovie && (
        <MovieInfoComponent
          selectedMovie={selectedMovie}
          // onMovieSelect run and clear the detail of selectedMovie
          onMovieSelect={onMovieSelect}
        />
      )}

      {/* Checking if movieList have some sort of length then truly we will make around the movieList.map() inside this returning the <MovieComponent/> component and if false then print "No Movie Search" */}
      {/* Whenever we are working with List for iterating the elements we always need to provide key and value here value means movie */}
      {/*   <MovieComponent
                key={index}
                movie={movie}
                onMovieSelect={onMovieSelect}
              />
              
              these provide the actual movies List with similar title */}
      {/*Syntax:-
       array.map(function(currentValue, index, arr), thisValue)
    
       "movieList" is an array of movie which have searched */}
      <MovieListContainer>
        {movieList?.length
          ? movieList.map((movie, index) => (
              <MovieComponent
                key={index}
                movie={movie}
                Select={onMovieSelect}
              />
            ))
          : "No Movie Search"}
      </MovieListContainer>
    </Container>
  );
}

export default App;
