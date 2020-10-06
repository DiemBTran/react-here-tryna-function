## REACT Here Tryna FUNCTION, created by #GANG GANG (Bach D, Diem T, and Ryan I)

## REACT Here Tryna FUNCTION

A React application used to estimate the cost of a party based on the guest count and budget given by the user. If your party is over budget, the app will return how much of a “cover fee” each attendee must pay before they can be added to the guestlist.

## Project Status
Completed MVP functionality and basic styling for the app. Some refactoring can be done to make code more DRY, and more styling can be done as well. For our stretch goal, we would have wanted to add a special California-themed party-- the “Gender Reveal Party.” This theme would have special add-on items, like pyrotechnics, fire extinguishers, and N-95 masks for smoke. The main app is themed after E-40’s song “Function”, and the Gender Reveal Party would be themed after Travis Scott’s tagline “It’s LIT!”

## Reflection
We are submitting this party app as our submission for LEARN’s 2020 Delta-cathalon. We are aware of the steep competition as our cohort is very talented, so we are trying to gain an edge in scoring by gaining the most style points.

These are the user stories we had to follow:
- As a user, I can input the number of guests I am expecting 
- As a user, I can enter a budget in some way (drop-down bar, input, range, etc.) 
- As a user, I can see an output of all of the items I should buy/rent for my party 
- As a user, I can see the total cost of all the items

This project was very challenging, but we were grateful for Zan’s help from Zeal. His plethora of experience developing apps for clients helped guide our app-design and thought process. Without him, we would have spent much more time planning our MVP and trying to gain focus as well. We haven’t touched React Apps in two weeks and this project was a surprise midterm, so we certainly weren’t ready to develop something so involved. We utilized a lot of old projects as resources to help remind us how to use state, props, and forms. Bach did a lot of research as well to figure out our unique edge-cases. We spent over ten hours on this project, even working way past after class ended. I think we all did a great job contributing different aspects to the project. We had a great team of people with different skill sets, and we were fortunate enough to have the same kind of humor to make this project theme possible. 

We had difficulty reading into a state that was an array of objects, so we ended up hardcoding the math for the cost of each item. We tried mapping through the state, but we weren’t passing props properly and thus either retrieved a null state or an array of [object: object]s. 

We implemented this project with React, JSX, and CSS. We utilized class components in our React app, rather than functional components.

## Dev Stories:

As devs, we imported three child components called UserInput, ListOfItems, and TotalCost into the parent component.

As devs, we made UserInput collect form information of number of guests and budget.

As devs, we made ListOfItems list the items the user must buy/rent for their party.

As devs, we made TotalCost list the budget, total cost, difference in budget, and how much each attendee must pay to attend the party.

As devs, we held state in the parent component for form, budgetList, cost, admissionFee, message, budget, difference, and partyThings.

As devs, we used state to add images to our app.

As devs, we used handleChange to capture the values in a form.

As devs, we used handleSubmit to save the form data as props.

As devs, we used handleFormSubmit to set state for form upon submission.

As devs, we will use conditional rendering to wait until the information is in the correct place before displaying it to the user.

As devs, we included different messages based on if the party was in or out of budget.

As devs, we calculated how much a party should cost with the given amount of guests.

As devs, we calculated how much your guests would need to “pitch in” per person to make the party possible.


## Original React App README:
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
