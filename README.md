# Passion Fruit Studios: WEBDEV2 Coursework 2
![Logo of dance organisation](docs/images/PassionFruitLogo.png "Passion Fruit Studios Logo")

## Table of Contents
<!-- TOC -->
* [Passion Fruit Studios: WEBDEV2 Coursework 2](#passion-fruit-studios-webdev2-coursework-2)
  * [Table of Contents](#table-of-contents)
  * [GitHub Repository](#github-repository)
  * [Author](#author)
  * [Description](#description)
  * [Technologies Used](#technologies-used)
  * [Documentation](#documentation)
    * [Organiser View Docs](#organiser-view-docs)
  * [Features](#features)
    * [Dancers (Users not logged in)](#dancers-users-not-logged-in)
    * [Organisers (Users logged in)](#organisers-users-logged-in)
  * [How to Run the Application locally](#how-to-run-the-application-locally)
<!-- TOC -->

## GitHub Repository
GitHub Repository Link: [fluffy-engine](https://github.com/Kym-e/fluffy-engine)


## Author
Kym Hannah: s2247460


## Description
This is a web application that has been created for a local dance organisation called 'Passion Fruit Studios', 
based in a fictitious location called 'Dance City'.

The application is built using the MVC (Model-View-Controller) design pattern, and is designed to allow users to 
view and book courses, and allow the organisation to manage these courses.  The web application is built using node.js, 
express.js, NEDB database to store data, Mustache templating engine to render views, and the TailwindCSS Framework for styling.

The application is deployed on Azure, and is hosted on a free tier of the Azure App Service.  Beyond the scope of this project,
I would consider upgrading to a paid tier of the Azure App Service, to allow for more storage and better performance, as well as consider
using a more robust database solution, such as MongoDB or PostgreSQL, to allow for better scalability and performance.

The CI/CD pipeline is set up using GitHub Actions, and the application is built and deployed automatically when 
changes are made to the main branch.  I decided to use GitHub Actions for the CI/CD pipeline, as it is a quick and easy 
way to set up a CI/CD pipeline due to simple integration instructions with Azure, SonarCloud and Snyk.

SonarCloud is used for static code analysis, and is set up to run automatically when changes are made to the main branch.
Snyk is used for security scanning, and is set to test weekly (due to being on free tier) for vulnerabilities in the 
codebase and dependencies.

Snyk alerted me to a vulnerability with the 'express' package, which was fixed by updating the package to the latest version. 
It automatically created a 'pull request' to update the package, which I merged into the main branch.  

Documentation is generated using JetBrains Writerside, and is hosted on GitHub Pages.  The pages are written in Markdown.

The application is built using JetBrains WebStorm IDE, and uses JetBrains YouTrack for issue tracking.

## Technologies Used
- Node.js
- Express.js
- NEDB
- Mustache
- TailwindCSS
- Azure App Service
- GitHub Actions
- SonarCloud
- Snyk
- JetBrains WebStorm IDE
- JetBrains Writerside
- JetBrains YouTrack
- Google Maps API

## Documentation
I have created a more in-depth set of documentation, which can be accessed here: [Documentation](https://kym-e.github.io/fluffy-engine/)

### Organiser View Docs
- [How to Create Courses](docs/How-to-Create-Courses.md)
- [How to Update Courses](docs/How-to-Update-Courses.md)
- [How to Delete Courses](docs/How-to-Delete-Courses.md)
- [How to Create Organisers](docs/How-to-Create-New-Organiser-Login.md)
- [How to Delete Organisers](docs/How-to-Delete-Organiser-Login-Details.md)
- [How to Get Course Attendee List](docs/How-to-Get-Course-Attendee-List.md)

## Features
Features are based on requirements
### Dancers (Users not logged in)

- View Static Pages
  - About us
    - Contains information about the organisation, including a google map of the location.  This is currently set to
    Glasgow Caledonian University, but can be changed to the location of the organisation.  The map is interactive, and
    will open up in Google Maps when clicked on.  The organisation has also described the types of courses they offer, 
    and the difficulty levels of each course they can expect.  The icons are from Font Awesome, and are animated on hover.
  - Home Page
    - The home page contains a simple image of a ballet dancer, and a welcome message.
  - Contact
    - The contact page contains a menu of options for the user to choose from. Note the details are fictitious.
      - Phone: The telephone number of the organisation is displayed, and is clickable to call the number.
      - Email: The email address of the organisation is displayed, and is clickable to open the default email client.
      - Social Media: The social media links are displayed, and are clickable to open the social media page in a new tab. 
      - I have only linked them to the social media landing pages, but they can be linked to the actual pages of the organisation (if they existed).
      - Location: The location of the organisation is displayed, and is clickable to open the location in Google Maps.
  - Courses
    - The courses page displays a list of all courses available to book.  The courses are displayed in a grid format, and are responsive to the screen size.
    - Each course has its own page, which is accessible by click the 'More Details' link.  Users can book the course from this page.
    - These pages are managed by the 'organisers' (users logged in).

### Organisers (Users logged in)
- Organiser View
    - Organiser View is a portal for organisers to manage the courses, and organisers.  The view is only accessible to users who are logged in.
      - Create Courses
      - Edit Courses
      - Delete Courses
      - Get Course attendee list
      - Create Organiser
      - Delete Organiser

## How to Run the Application locally
The application is deployed on Azure, and can be accessed on the following link: [Passion Fruit Studios](https://passionfruitstudios.azurewebsites.net/)
1. Clone the repository to your local machine.
2. Open a terminal and navigate to the root directory of the project.
3. Run the following command to install the dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root directory of the project, and add the following line to it:
   ```dotenv
    GOOGLE_MAPS_API_KEY=[See message sent via assignment submission]
    ACCESS_TOKEN_SECRET="Random string for Web Application"
   ``` 
   As I don't want to reveal my google maps API key publicly , I have sent it via the assignment submission. Please use the same key to run the application locally.
5. Run the following command to start the application:
   ```bash
   npm start
   ```
   
## SonarCloud Status
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Kym-e_fluffy-engine2)](https://sonarcloud.io/summary/new_code?id=Kym-e_fluffy-engine2)
   
## Test Results
System Test results are available in the [Test/TestPlan.md](Test/TestPlan.md) file.  
Evidence of the tests are available in the ResultsEvidence folder.  
This contains PDF and video evidence exported from Xray Exploratory App.

2 Issues were found and fixed:

- Incorrect Title on View Class/Course page.
- Login with Invalid Credentials - Error message not displayed, application crashes.