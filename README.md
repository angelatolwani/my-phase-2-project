# Patient Management

This is the framework for providers to be able to store & access  patient data. This project was created with React and Material UI.

## Core Deliverables
1. This is a single page application with 6 client-side routes, navigated to using React Router.
    i. Home - Landing Page 
    ii. About - Information about telehealth
    iii. Client Management - Displays database of patients
    iv. Client Profile - Displays more detailed patient information
    v. Schedule
    vi. Revenue
2. The app uses React components to streamline functionality and enable reusability. 
    i. NavBar
    ii. Client Table
    iii. New Client Form
    iv. Calendar
    v. Revenue Chart
3. Json-server was used to create a RESTful API to access and store patient information.
    i. When submitting a new client form, useState was used to handle form submission and POST to json.
    ii. GET requests used to display client database.
    iii. useParams used to display detailed client profile information with GET request.

## Future Directions
1. Build out calendar and revenue pages. 
