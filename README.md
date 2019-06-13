# Habit-Builder
Final Project of Bootcamp | Habit Builder App

#Jonathan's change notes
-created client folder

-removed any folders associated with "create-react-app" from root directory, and moved them 
into the "client" folder

-separated the express package.json from the react package.json

Setup scripts in the package.json of the express server so:
-"npm start" will run nodemon on the express server,
-it will cd into the "client" folder and start up the react application
-When saving with nodemon, it will only auto-reload the backend, and not the react application.
*This will prevent react from having to re-render the entire application any time an adjustment is made
in the backend.