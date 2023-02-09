# Movie Detailed App





## Tech and Language Used

**React, JavaScript, HTML, CSS**

## Dependency Used

[styled-components](https://www.npmjs.com/package/styled-components)
<br>
[axios](https://www.npmjs.com/package/axios)

## API

[OMDB API(The Open Movie Database)](https://www.omdbapi.com/)

## Features

- **Search any Movies and TV Shows**
- **Get the 10 results as any word of movie match with searched word**
- **Debouncing is used to optimizing the performance of a web app**
- **Click on any Movie to see the various detail about that Movie**
- **Click on movie poster to go top with smooth scrolling feature**
- **When you stop typing then a single API call fire to get the response back from Open Movie Database(OMDB), Not unnecessary API call**
- **A cross icon to remove the selected movie detail**


*Debouncing prevents extra activations or slow functions from triggering too often. We will only execute the most recent user action if the action is continuously invoked. Using the debounce React Hook will reduce the unnecessary API calls to our server and optimize our application for better performance.*



## Getting Started

First you have to set up your react project by running

```bash
npx create-react-app movies-detail-app
```

Install above dependencies

```bash
npm install styled-components 
```
```bash
npm install axios
```

Finally clone this repository, install dependencies and run the local server

```bash
git clone https://github.com/Rishav-02/Movies-Detail-App.git
```

```bash
cd movies-detail-app
npm start
```
