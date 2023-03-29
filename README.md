# Trailer Browser 🎬🔍🆕
My original project inspired by a single page of the film on netflix- 
but developed into a dynamic application for viewing the trailer.

Demo: https://jaroslawogonowski.github.io/Trailer-dot-com/

## Functionality
The site has grown a lot since the first working version. It was supposed to be a simple static title page (the main project is available here: https://www.figma.com/file/d1o1xCmwDEYVOwDvGqEjWI/Wednesday-web-design?node-id=0-1&t=f3LIw6TOgPDzJ9EI-0 ) 
but I wanted to present as much knowledge as possible without violating the coherent concept and at the same time using a simple and clear code.

## How it works? 👀🛠
### 🆗 The first view...
 ...of course, resembles a theater stage - in this view you can select a movie from the list or use the search engine. When the phrase you entered does not correspond to any supported title, an appropriate message appears.

 ![Menu](./public/images/menu.gif)

 As you can see, clicking on the logo clears part of the state and returns to the initial view.
### ⏩ JSON
I really wanted the page not to differ in appearance from the concept of the project from figma. The problem is that at this stage there was no API from which I could download the information I want to display on the page. So I wrote json with basic information, links to photos, trailer iframe, tags, descriptions, characters and trivia, backgrounds of the whole page and even specific css that I pass depending on the selected movie. 
The project focuses on showing a completely dynamic single page and not my knowledge of cinematography (maybe someday 😅) that's why there are only two films

You can find the movies.json file in "public" folder.
### ⏩ FETCH, REDUX-SAGA, GENERATOR FUNCTIONS
All this information is fetched with "fetch" immediately after displaying the page and from that moment every action of yours affects the state of the application which is constantly saved in local storage using redux-saga and generator functions.
### ⏩useSelector, STATE, REDUCER
When a movie is selected, its title is pulled into the state and compared with the titles of the downloaded objects contained in the json file and filtered accordingly. Now information about this movie is shown on our website and after refreshing the state is loaded from local storage.

MovieSlice is responsible for most of the website's functionality. We have here the current state, reducer - which correspond to individual actions, and selectors thanks to which we can easily navigate through the content of our application's state.

### ⏩ iframe, ANIMATED BACKGROUND
Thanks to the use of iframes, we use YouTube resources directly on the website and the implementation and functionality of the video is very simple and transparent.

I added the ability to hide the iframe window - so you can see the animated background of the entire page.

 ![Trailer](./public/images/trailer.gif)

### ⏩ Alice-carousel

One of the more interesting issues was the use of the external alice-carousel library. I created a slider with photos of actors and when it is hovered- displays dynamically information about the actor in a prepared, static (but responsive) div. Of course, I used animations and custom buttons.

 ![Carousel](./public/images/carousel.gif)


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
