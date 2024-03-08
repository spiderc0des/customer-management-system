# Customer Management App with Django Rest Framework and Vue.js

This project is a simple Customer management application with a Django Rest Framework (DRF) backend and a Vue.js frontend.

## Features

- RESTful API to create, update, delete, and fetch Customers.
- Vue.js frontend for a smooth user experience.
- Authentication


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python 3.8+
- Node.js 12+
- Pipenv (for Python dependency management)
- npm (for JavaScript dependency management)

## Requirements for backend 

- djangorestframework
- django-cors-headers
- django
- dj-rest-auth

## Requirements for frontend 

- axios


## Backend setup

Navigate to the backend directory:

   cd backend

   pipenv shell

   pip install -r requirements.txt

   python manage.py makemigrations 

   python manage.py migrate

   python manage.py runserver 8000


## Frontend setup

Navigate to the frontend directory:

    cd frontend
    cd db
    
    npm install 
    npm install axios
    npm install boxicons --save 


    npm run serve

The backend API will be available at http://localhost:8000/ and the frontend will be available at http://localhost:8080
