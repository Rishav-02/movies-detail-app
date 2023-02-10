# Movie Detailed App



*movie detailed app* [Live Demo](https://moviesdetailapp.netlify.app/)

## Tech and Language Used

**React, JavaScript, HTML, CSS**

### Dependency Used

[styled-components](https://www.npmjs.com/package/styled-components)
<br>
[axios](https://www.npmjs.com/package/axios)

### API

[OMDB API(The Open Movie Database)](https://www.omdbapi.com/)

## Features

- **Search any Movies and TV Shows**
- **Get the 10 results as any word of movie match with searched word**
- **Debouncing is used to optimizing the performance of a web app**
- **Click on any Movie to see the various detail about that Movie**
- **Click on movie poster to go top with smooth scrolling feature**
- **When you stop typing then a single API call fire to get the response back from Open Movie Database(OMDB), Not unnecessary API call**
- **A cross icon to remove the selected movie detail**


<hr>

*Debouncing prevents extra activations or slow functions from triggering too often. We will only execute the most recent user action if the action is continuously invoked. Using the debounce React Hook will reduce the unnecessary API calls to our server and optimize our application for better performance.*

<hr>

### How to use OMDB API

*Step 1:* **Open the OMDB website.** 

*Step 2:* **Click on three line menu icon and select API Key**

*Step 3:* **Generate API Key section will be open and Choose the Free option(1000 daily limit)**

*Step 4:* **Fill the asked detail and Submit it**

*Step 5:* **API Key will be sent to your given Email Id**

*Step 6:* **Use your API Key to fetch data**

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
git clone https://github.com/Rishav-02/movies-detail-app.git
```

```bash
cd movies-detail-app
npm start
```
