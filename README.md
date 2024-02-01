# Tasked

This project is a simple React application that allows users to manage tasks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

- Node.js (v18 or later)
- npm package manager

## Installing

1. Clone the repository:
```bash
git clone https://github.com/pxlmvr/tasked.git
```


2. Navigate to the project directory:

```bash
cd tasked
```


3. Install the dependencies:

```bash
npm install
```

## Running the Application

To start the development server, run:

```bash
npm run develop
```

The application will be available at http://localhost:5173.

## Building the Application

To build the application for production, run:

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Running Tests

This project uses Jest for unit testing and Cypress for end-to-end testing.

To run unit tests:

```bash
npm run test:unit
```

To run end-to-end tests:
```bash
npm run test:e2e
```

To run the end-to-end tests in headless mode:
```bash
npm run test:e2e-headless
```

## Project Structure

The project is structured as follows:

- `src`: contains the source code of the application.
- `components`: contains reusable React components.
- `containers`: contains components that connect to the application state.
- `pages`: contains the page components.
- `context`: contains React context providers.
- `cypress`: contains Cypress end-to-end tests.