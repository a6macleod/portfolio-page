This site is a basic portfolio to introduce who I am and show example projects and websites that I have built.

The site is built using create-react-app. All the information for the example projects are stored as state on the App.js file.

To add an example project, create a new object in the array exampleProjects. The object should contain a title, goal, tech, link, code, img, and imgAlt keys. The values should be as follows.

    - title: What the project should be called which appears at the top of the project card.
    - goal: A quick recap of what the project is and if there was a specific focus for building it. This synopsis should be about 50 words or less.

    -tech: What technologies were used to create it generally and where a working example can be seen/where it is hosted (i.e. github pages).

    -link: A link to the working example i.e. "https://a6macleod.github.io/react_shopping_cart/".

    -code: A link to the code repository

    -img: A screenshot of the site. This will look best if the original is a smaller picture for example tablet size or smaller to minimize scaling. The images should be stored in the src/images directory and imported to App.js.

    -imgAlt: A description of the screenshot (img above) to be added as the img alt for accessibility.

The example projects information above is stored in state while the About Me information and headshot are hard coded into the AboutMe.js component.
