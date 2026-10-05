# Crypto Market Dashboard

Production-oriented crypto market dashboard built with Next.js and TypeScript, integrating live market data, client and server state management, testing, performance optimization, and CI workflows.

## Overview

This project is a frontend engineering case focused on building a reliable crypto market dashboard with real API data and production-oriented patterns.

The application consumes market data from the CoinGecko REST API, models the response with TypeScript, manages shared UI state and server state separately, handles loading and error scenarios, and applies testing and performance practices across the application.

The goal is to demonstrate practical frontend engineering beyond UI implementation, with emphasis on data flow, resilience, testing, performance, and maintainability.

## Features

- Real-time crypto market data
- CoinGecko REST API integration
- Typed API models with TypeScript
- Shared UI state with Zustand
- Server-state management with TanStack Query
- Query caching and refetching
- Loading and error states
- Resilient request handling
- Market summary cards
- Asset-level market data
- Unit testing
- Component testing
- End-to-end testing
- GitHub Actions CI
- Frontend performance optimization
- Production deployment

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- CoinGecko API
- Zustand
- TanStack Query
- Vitest
- React Testing Library
- Playwright
- GitHub Actions

## Architecture

The project separates concerns between UI, shared client state, remote server state, and derived market data.

```text
CoinGecko REST API
        ↓
TanStack Query
        ↓
Server State
        ↓
Typed Data Models
        ↓
React Components

Shared UI State
        ↓
Zustand
        ↓
Application UI
```

This separation keeps remote API data independent from local application state.

## Data Flow

Market data flows through a predictable pipeline:

```text
CoinGecko API
     ↓
HTTP Request
     ↓
Validation / Typing
     ↓
TanStack Query Cache
     ↓
Components
     ↓
Formatted Market Data
```

The application handles:

- initial loading
- successful responses
- stale cached data
- refetching
- request failures
- API recovery

## State Management

The application distinguishes between multiple types of state.

### Server State

TanStack Query manages remote API data including:

- market data
- caching
- retries
- refetching
- loading states
- error states
- stale data

### Shared UI State

Zustand is used for shared client-side state when application state needs to be accessed across multiple components.

### Derived State

Derived values are calculated from existing market data rather than stored unnecessarily.

Examples include:

- formatted market capitalization
- percentage changes
- asset summaries
- calculated display values

## API Integration

The dashboard consumes the CoinGecko REST API.

API integration is isolated from presentation logic through dedicated service and type layers.

Typical flow:

```text
Component
   ↓
Query Hook
   ↓
API Service
   ↓
CoinGecko
```

This makes data fetching easier to test, maintain, and replace if necessary.

## Error Handling

The application handles common API and network failure scenarios such as:

- failed requests
- rate limits
- unavailable endpoints
- malformed responses
- temporary network failures

The UI provides explicit loading and error states instead of silently failing.

## Caching and Request Strategy

TanStack Query is used to reduce unnecessary API requests and keep server state synchronized.

The query layer handles:

- caching
- stale-time behavior
- refetching
- retries
- request deduplication

This helps reduce unnecessary network traffic and improves perceived performance.

## Performance

Frontend performance work includes:

- lazy loading where justified
- code splitting
- image optimization
- render analysis
- avoiding unnecessary renders
- reducing unnecessary requests
- controlled query refetching

The project also considers browser and networking fundamentals such as:

- HTTP caching
- asynchronous request handling
- CORS
- web storage
- API failure recovery

## Testing

The project includes multiple testing layers.

### Unit Testing

Vitest is used for:

- utility functions
- formatters
- data transformation
- business logic

### Component Testing

React Testing Library is used for:

- market components
- loading states
- error states
- data-driven rendering
- user interactions

### End-to-End Testing

Playwright is used for:

- application flows
- page rendering
- data-driven UI behavior
- navigation
- critical user scenarios

## CI/CD

GitHub Actions is used to automatically validate the project.

Typical pipeline:

```text
Push / Pull Request
↓
Install Dependencies
↓
Lint
↓
Typecheck
↓
Unit / Component Tests
↓
Build
↓
End-to-End Validation
```

This helps catch regressions before deployment.

## Running Locally

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Installation

```bash
git clone https://github.com/igor-souza-engineer/crypto-market-dashboard.git
cd crypto-market-dashboard
npm install
```

### Environment Variables

Create a local environment file if required by the current API configuration.

```bash
cp .env.example .env
```

Configure the required values.

Example:

```env
COINGECKO_API_KEY=
```

Do not commit real credentials to the repository.

### Start the Application

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Usage

1. Open the dashboard.
2. Review the global market summary.
3. Browse available crypto assets.
4. View current market information returned by the CoinGecko API.
5. Observe loading and error states during API requests.
6. Interact with available dashboard controls and filters as they are introduced.
7. Cached server state is managed automatically through TanStack Query.

## Testing

Run the test suite with:

```bash
npm test
```

Run end-to-end tests with:

```bash
npm run test:e2e
```

## Deployment

The application is designed for deployment through Vercel or another modern frontend hosting platform.

Production deployment should include:

- environment-based configuration
- production build validation
- secure API configuration
- HTTPS
- automated validation through CI

## Reliability

The project applies production-oriented practices such as:

- typed API responses
- explicit loading states
- error handling
- retry strategies
- query caching
- controlled refetching
- separation between client and server state
- automated testing
- CI validation

## Security

Security considerations include:

- no API keys committed to GitHub
- `.env` excluded from version control
- `.env.example` containing only placeholders
- environment-based API configuration
- external data treated as untrusted input
- no sensitive credentials exposed in frontend code

## Repository Structure

```text
crypto-market-dashboard/
├── app/
├── components/
│   └── market/
├── data/
├── services/
├── types/
├── utils/
├── public/
├── tests/
├── .github/
│   └── workflows/
├── .env.example
├── package.json
└── README.md
```

The repository structure should evolve with the application and avoid unnecessary abstractions.

## Project Goals

This project was built to demonstrate practical experience with:

- Next.js
- React
- TypeScript
- REST API integration
- CoinGecko
- server-state management
- Zustand
- TanStack Query
- loading and error states
- caching
- request resilience
- frontend testing
- Vitest
- React Testing Library
- Playwright
- frontend performance
- browser and networking fundamentals
- GitHub Actions
- CI/CD
- production deployment

## License

This project is intended for educational and portfolio purposes.
