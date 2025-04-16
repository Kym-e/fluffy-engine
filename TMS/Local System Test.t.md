# System Test

## S1 Pages able to load

* C1 Landing page loads
   * Visit the landing page
   * Check that the page loads successfully
* C2 About page loads
    * Visit the about page
    * Check that the page loads successfully
* C3 Contact page loads
    * Visit the contact page
    * Check that the page loads successfully 
* C4 Courses page loads
    * Visit the courses page
    * Check that the page loads successfully
* C5 Course Detail pages loads
    * Visit all the courses detail page
    * Check each page loads successfully
* C6 Login Page loads
    * Visit the login page
    * Check that the page loads successfully

## S2 Logging in and out
* C7 Login with valid credentials
    * Visit the login page
    * Enter valid credentials
    * Check that the user is redirected to the dashboard
* C8 Login with invalid credentials
    * Visit the login page
    * Enter invalid credentials
    * Check that an error message is displayed
* C9 Logout
    * Visit the dashboard
    * Click on the logout button
    * Check that the user is redirected to the login page

## S3 User can book course
* C10 Book a course
    * Visit the courses page
    * Select a course
    * Fill in details in the booking form
    * Click on the book button
    * Check that the user is redirected to the booking page

## S4 Organiser pages load
* C11 Organiser View page loads
    * Log in as an organiser
    * Visit the organiser view page
    * Check that the page loads successfully
* C12 Create New Course page loads
    * Log in as an organiser
    * Visit the create new course page
    * Check that the page loads successfully
* C13 Update Course page loads
    * Log in as an organiser
    * Visit the update course page
    * Check that the page loads successfully
    * Check each course detail page loads successfully
* C14 Delete Course page loads
    * Log in as an organiser
    * Visit the delete course page
    * Check that the page loads successfully
* C15 View Course/Class List page loads
    * Log in as an organiser
    * Visit the view course/class list page
    * Check that the page loads successfully
    * Check each course/class list page loads successfully
* C16 Create New Organiser page loads
    * Log in as an organiser
    * Visit the create new organiser page
    * Check that the page loads successfully
* C17 Delete Organiser page loads
    * Log in as an organiser
    * Visit the delete organiser page
    * Check that the page loads successfully

## S5 Organiser can create course
* C18 Create a new course without youtube embed code
    * Log in as an organiser
    * Visit the create new course page
    * Fill in details in the create course form
    * Click on the create button
    * Logout
    * Visit the courses page
    * Check that the new course is listed
    * Visit the course detail page
* C19 Create a new course with youtube embed code
    * Log in as an organiser
    * Visit the create new course page
    * Fill in details in the create course form
    * Click on the create button
    * Logout
    * Visit the courses page
    * Check that the new course is listed
    * Visit the course detail page
    * Check that the youtube video is displayed

## S6 Organiser can update course
* C20 Update a course
    * Log in as an organiser
    * Visit the update course page
    * Select a course to update
    * Fill in details in the update course form
    * Click on the update button
    * Logout
    * Visit the courses page
    * Check that the updated course is listed
    * Visit the course detail page

## S7 Organiser can delete course
* C21 Delete a course
    * Log in as an organiser
    * Visit the delete course page
    * Select a course to delete
    * Click on the delete button
    * Logout
    * Visit the courses page
    * Check that the deleted course is not listed

## S8 Organiser can view course/class list
* C22 View course/class list
    * Log in as an organiser
    * Visit the view course/class list page
    * Check that the course/class list is displayed
    * Check that each course/class list is displayed correctly

## S9 Organiser can create new organiser
* C23 Create a new organiser
    * Log in as an organiser
    * Visit the create new organiser page
    * Fill in details in the create organiser form
    * Click on the register button
    * Check that the new organiser is listed

## S10 Organiser can delete organiser
* C24 Delete an organiser
    * Log in as an organiser
    * Visit the delete organiser page
    * Select an organiser to delete
    * Click on the delete button
    * Logout
    * Check that the deleted organiser is not listed