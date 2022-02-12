This app is a pseudo social media style app that allows users to authenticate, browse content, and view detailed content.

Frameworks used: Ionic, React.js, TypeScript

(Sign In)
Authentication to be implemented.
Click Sign In button to proceed to app
Menu component does not appear when on sign in page
\*note username and password fields console logged for now

(Push Menu)
Menu component visible and routes properly when on screen

(Content Page)
Menu component visible and routes properly
Page loads 3 randomly generated users from https://randomuser.me/api
Details fetched: first name, last name, email, country
Details are pushed to a Local List // future db integration would be ideal
Details are mapped and cards rendered using IonicCard components

(Detailed Content View)
Modal prompts when UserCard from Main.tsx is clicked. Props passed in through UserCard component and Modal is rendered within UserCard.
Used Ionic docs to create Modal but when close "X" icon is clicked, Modal does not close. \*\*Refresh page to return to previous content.
