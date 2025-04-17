# Test Plan

## Test Scope
The test plan covers the following areas of the application:
1. Pages able to load
2. Logging in and out
3. User can book a course
4. Organiser pages load
5. Organiser can create a course
6. Organiser can update a course
7. Organiser can delete a course
8. Organiser can view course/class list
9. Organiser can create a new organiser
10. Organiser can delete an organiser


## 1. Pages able to Load

| Test Case ID | Test Case Name            | Expected Result           | Status |
|--------------|---------------------------|---------------------------|--------|
| 1            | Visit Landing Page        | Landing Page Loads        | ok     |
| 2            | Visit About Page          | About Page Loads          | ok     |
| 3            | Visit Contact Page        | Contact Page Loads        | ok     |
| 4            | Visit Course Page         | Course Page Loads         | ok     |
| 5            | Visit Course Detail Pages | Course Detail Pages Loads | ok     |
| 6            | Visit Login Page          | Login Page Loads          | ok     |

## 2. Logging in and out

| Test Case ID | Test Case Name                 | Expected Result         | Status |
|--------------|--------------------------------|-------------------------|--------|
| 7            | Login with Valid Credentials   | User is Logged In       | ok     |
| 8            | Login with Invalid Credentials | Error Message Displayed | ok     |
| 9            | Logout                         | User is Logged Out      | ok     |

## 3. User Can Book a Course
| Test Case ID | Test Case Name | Expected Result  | Status |
|--------------|----------------|------------------|--------|
| 10           | Book a Course  | Course is Booked | ok     |

## 4. Organiser pages load

| Test Case ID | Test Case Name                  | Expected Result                    | Status |
|--------------|---------------------------------|------------------------------------|--------|
| 11           | Visit Organiser View Page       | Organiser View Page Loads          | ok     |
| 12           | Visit Create New Course Page    | Create New Course Page Loads       | ok     |
| 13           | Visit Update Course Page        | Update Course Page Loads           | ok     |
| 14           | Visit Delete Course Page        | Delete Course Page Loads           | ok     |
| 15           | Visit Course/Class List pages   | View Course/Class List Pages Loads | ok     |
| 16           | Visit Create New Organiser Page | Create New Organiser Page Loads    | ok     |
| 17           | Visit Delete Organiser Page     | Delete Organiser Page Loads        | ok     |

## 5. Organiser Can Create a Course
| Test Case ID | Test Case Name                      | Expected Result   | Status |
|--------------|-------------------------------------|-------------------|--------|
| 18           | Create Course without youtube video | Course is Created | ok     |
| 19           | Create Course with youtube video    | Course is Created | ok     |

## 6. Organiser Can Update a Course
| Test Case ID | Test Case Name | Expected Result   | Status |
|--------------|----------------|-------------------|--------|
| 20           | Update Course  | Course is Updated | ok     |

## 7. Organiser Can Delete a Course
| Test Case ID | Test Case Name | Expected Result   | Status |
|--------------|----------------|-------------------|--------|
| 21           | Delete Course  | Course is Deleted | ok     |

## 8. Organiser Can View Course/Class List
| Test Case ID | Test Case Name         | Expected Result                | Status |
|--------------|------------------------|--------------------------------|--------|
| 22           | View Course/Class List | Course/Class List is Displayed | ok     |

## 9. Organiser Can Create a New Organiser
| Test Case ID | Test Case Name       | Expected Result          | Status |
|--------------|----------------------|--------------------------|--------|
| 23           | Create New Organiser | New Organiser is Created | ok     |

## 10. Organiser Can Delete an Organiser
| Test Case ID | Test Case Name   | Expected Result      | Status |
|--------------|------------------|----------------------|--------|
| 24           | Delete Organiser | Organiser is Deleted | ok     |

## Summary of Results
All tests are passing. The application is functioning as expected. 
The test plan covers all the major functionalities of the application, including user login, course booking, and 
organiser management. 