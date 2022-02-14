This app is a pseudo social media style app that allows users to authenticate, browse content, and view detailed content.

Frameworks used: Ionic, React.js

**Test-Drive Instructions**

1. Use Command Line to navigate to project directory.
2. $ionic serve
3. Use browser inspect/devtools to view page in mobile view.
   _Optional_ type in dummy credentials on sign in form
4. Click sign in button to proceed to main project (if credentials used, to see log in credentials logged)
5. Scroll through content list and click on any of the cards to view a more detailed view. -> Use 'X' icon to return to content page.
6. Click Menu button in top left corner to open push Menu and navigate to different pages.

**_PAGES_**

Sign In(SignIn.tsx)
Authentication to be implemented.
Click Sign In button to proceed to app
Menu component does not appear when on sign in page

NOTE: username and password fields console logged for now

---

Content Page (Main.tsx)
Push Menu component visible and routes properly
Page loads _5_ randomly generated users from https://randomuser.me/api
Details fetched from API: first name, last name, email, country
Details are pushed to a Local List
Details are mapped and cards rendered using IonicCard components

---

NotYetImplemented (NotYetImplemented.tsx)
To be used to check for routing and if page functionality has not been implemented yet

---

**_COMPONENTS_**

UserCard (UserCard.tsx)
PROPS:
id = User's ID
name = User's name
icon = User's profile picture
email = User's email
country = User's country
image = The image the user posted
description = The user's description for the post

Control of the Modal is handled by a Boolean React State variable
if true => opens Modal
if false => modal should be closed or not be visible

IonCard component used to render props in to a card

---

UserDetailModal (UserDetailModal.tsx)
Same IonModal as in UserCard component.
Could not find a way to pass state from child component to parent component
Commented out code

---

Menu (Menu.tsx)
Used boilerplate code from ionic template.
Rerouted links and restyled to mirror GitHub image as closely as possible
Links to Dashboard and Photos lead to Not Yet Implemented page.
Links to Sign Out and Master List work as intended.

---

Footer (Footer.tsx)
Basic footer component
Displays current year through new Date().getFullYear()
