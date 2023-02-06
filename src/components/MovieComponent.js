import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding in poster */
  padding: 10px;
  width: 18rem;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;

const CoverImage = styled.img`
  height: 23rem;
`;

const MovieName = styled.span`
  font-size: 1.1rem;
  font-weight: bolder;
  color: orchid;
  margin: 1rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MovieInfo = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: orchid;
  white-space: nowrap; //not wrap in next line
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis; //show three dot for large name
`;

//Destructuring is a simple property that is used to make code much clear and readable, mainly when we pass props in React. It trims the number of steps taken to access data properties.
// https://www.omdbapi.com/?s=kabhi&apikey=c0863e9b  (Title, Year, imdbID, Type, Poster) comes from this call by Search
// Here we receiving all the data in props and 'movie' comes from MovieComponent of App.js
const MovieComponent = (props) => {
  // Destructuring of props
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  //The scrollTo() method scrolls the document to specified coordinates. scroll to top and smooth scrolling.
  return (
    <MovieContainer
      onClick={() => {
        // passing this props with imdbID to parent component to keep the record of that particular selected movie and store that movie data to current state "selectedMovie" 
        props.Select(imdbID); //search movie info by imdbID i.e "tt4154796"

        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <CoverImage src={Poster} alt={Year} />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year: {Year}</MovieInfo>
        <MovieInfo>Type: {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieComponent;
