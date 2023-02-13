# Movie Detailed App

*movie detailed app* [Live Demo](https://moviesdetailapp.netlify.app/)

<hr>

<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Rishav-02/movies-detail-app?color=yellow&style=flat-square"> <img src="https://img.shields.io/badge/Netlify-success-green"> <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Rishav-02/movies-detail-app?style=flat-square">


*Header and Search Bar*

<img src="https://user-images.githubusercontent.com/100300441/218246663-82155c56-1088-47bb-9e10-d54223f58575.png">


*Display searched movie*

![Screenshot (53)](https://user-images.githubusercontent.com/100300441/218246678-36aa1b54-a8cc-42e9-97a2-f0ea6d6722e2.png)


*Click to get detail of Movie*

![Screenshot (55)](https://user-images.githubusercontent.com/100300441/218246690-f71427aa-d608-490a-9f0c-88fbe4b71e3a.png)


*Mobile Responsive*

![Screenshot (56)](https://user-images.githubusercontent.com/100300441/218246696-fb9eb5c0-2032-4671-825d-41428bc02f65.png)


*Many Result with single Keyword Dil*

![Screenshot (54)](https://user-images.githubusercontent.com/100300441/218246682-05d7bba1-2a25-45e0-ab2b-e5a646688c71.png)


## Tech and Language Used

<img src="https://img.shields.io/badge/React-Library-blue"> <img src="https://img.shields.io/badge/JavaScript-Language-yellow"> <img src="https://img.shields.io/badge/HTML5-Markup%20Language-orange"> <img src="https://img.shields.io/badge/CSS3-Style-blue"> <img src="https://img.shields.io/badge/API-OMDB-green">

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


**Developed by Rishav Raj**