# Rick and Morty Explorer

A React application built with TypeScript and Vite that displays information about characters from the Rick and Morty universe.

## Project Overview

This project uses a clean architecture approach to organize code, with domain-driven design principles. It fetches character data from an API and displays it in a card-based UI.

## Features

- Display Rick and Morty characters in a responsive grid layout
- View detailed information about each character
- Clean architecture with domain-driven design

## Project Structure

```
rick-and-morty/
├── public/              # Static assets
├── src/
│   ├── assets/          # Application assets
│   ├── components/      # Reusable UI components
│   │   └── Card.tsx     # Character card component
│   ├── domain/          # Domain-specific code
│   │   └── characters/  # Character domain
│   │       ├── collections/     # Data collections
│   │       ├── contracts/       # Interfaces
│   │       ├── interactors/     # Use cases
│   │       ├── models/          # Domain models
│   │       └── repositories/    # Data access layer
│   ├── pages/           # Application pages
│   │   └── characters/  # Character listing page
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Technology Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Styling**: CSS (appears to use utility classes)

## Prerequisites

- Node.js 16.x or higher
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/nimnaherath/rick-morty-explorer-clean-arch]
   cd rick-and-morty
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Project

### Development Mode

Run the following command to start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the application in development mode with hot module replacement (HMR).
The application will be available at `http://localhost:5173/`.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This compiles TypeScript and bundles the application for production deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Code Organization

The project follows clean architecture principles:

- **Domain Layer**: Contains business logic, entities, and contracts
  - Models: Define the structure of domain objects
  - Interactors: Implement use cases
  - Repositories: Handle data access
  - Contracts: Define interfaces for dependencies

- **UI Layer**: Components and pages that display the domain data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
