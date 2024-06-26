# Patient Management

This is the framework for providers to be able to store & access  patient data. This project was created with React and Material UI.

## Core Deliverables
1. This is a single page application with 6 client-side routes, navigated to using React Router.
    1. Home - Landing Page 
    2. About - Information about telehealth
    3.  Client Management - Displays database of patients
    4. Client Profile - Displays more detailed patient information
    5. Schedule
    6. Revenue
2. The app uses React components to streamline functionality and enable reusability. 
    1. NavBar
    2. Client Table
    3. New Client Form
    4. Calendar
    5. Revenue Chart
3. Json-server was used to create a RESTful API to access and store patient information.
    1. When submitting a new client form, useState was used to handle form submission and POST to json.
    2. GET requests used to display client database.
    3. useParams used to display detailed client profile information with GET request.

## Future Directions
1. Build out calendar and revenue pages. 
