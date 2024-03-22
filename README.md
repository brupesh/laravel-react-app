Full-Stack Project with Laravel 8 and React 17

This project is a full-stack web application built using Laravel 8 for the backend and React 17 for the frontend. The backend code is located in the root folder, and the frontend code is located in the 'frontend' folder.

Backend (Laravel 8)

Setup
1. Install dependencies: composer install.
2. Copy the .env.example file to .env: cp .env.example .env.
3. Generate an application key: php artisan key:generate.
4. Configure your database connection in the .env file.
5. Run migrations to create the necessary database tables: php artisan migrate.
6. seed the database with sample data: php artisan db:seed OR php artisan db:seed --class=RoleSeeder for only roles data.

Running the Server

To start the Laravel server, run:

php artisan serve

The server will start running at http://localhost:8000.

Frontend (React 17)

Setup
1. Navigate to the 'frontend' folder: cd frontend.
2. Install dependencies: npm install or yarn install.

Development Server

To start the React development server, run:

npm start

or

yarn start

The development server will start running at http://localhost:3000.

Building for Production

To build the React app for production, run:

npm run build

or

yarn build

The optimized production build will be generated in the 'frontend/build' folder.

Project Structure

full-stack-project/
│
├── backend/            # Laravel 8 Backend
│   ├── app/            # Application code
│   ├── config/         # Configuration files
│   ├── database/       # Database migrations and seeds
│   ├── public/         # Publicly accessible files
│   ├── resources/      # Views and frontend assets
│   ├── routes/         # Route definitions
│   └── ...             # Other Laravel files and folders
│
├── frontend/           # React 17 Frontend
│   ├── public/         # Publicly accessible files
│   ├── src/            # React source code
│   └── ...             # Other React files and folders
│
└── README.md           # Project README


License

This project is licensed under the MIT License.
