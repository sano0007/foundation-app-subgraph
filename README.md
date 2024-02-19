# Blockchain Query and API Development Kit

Welcome to our project, a comprehensive toolkit designed for developers interested in querying blockchain data and
building their own distributed applications with ease. This project utilizes The Graph, a powerful protocol for indexing
and querying blockchain data. Think of it as Lego blocks for blockchain data querying and API development.

## Project Structure

The project is divided into two main parts:

- `client`: Contains the frontend application setup, including user interface components and configuration files for a
  smooth development experience.
- `graph-backend`: Comprises the necessary configuration and source code to define, deploy, and query your subgraphs on
  The Graph network.

### Directory Overview

```
.
├── README.md
├── client
│   ├── README.md
│   ├── index.html
│   ├── interface
│   │   └── i-tokens.ts
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   └── yarn.lock
└── graph-backend
    ├── abis
    │   └── Token.json
    ├── build
    │   ├── Token
    │   │   ├── Token.wasm
    │   │   └── abis
    │   │       └── Token.json
    │   ├── schema.graphql
    │   └── subgraph.yaml
    ├── generated
    │   ├── Token
    │   │   └── Token.ts
    │   └── schema.ts
    ├── graphql.config.yml
    ├── networks.json
    ├── package.json
    ├── schema.graphql
    ├── src
    │   └── token.ts
    ├── subgraph.yaml
    ├── tests
    │   ├── token-utils.ts
    │   └── token.test.ts
    ├── tsconfig.json
    └── yarn.lock
```

## Getting Started

### Prerequisites

- Node.js (v12.x or newer)
- Yarn package manager
- An Ethereum wallet with access to Ethereum and IPFS nodes

### Setup

1. **Clone the repository**

```bash
git clone https://github.com/sano0007/foundation-app-subgraph.git
```

2. **Install dependencies**

Navigate to both `client` and `graph-backend` directories and run:

```bash
yarn install
```

### Running the Client

```bash
cd client
yarn start
```

This command will start the frontend application, usually available at `http://localhost:3000`.

### Deploying and Querying the Subgraph

1. **Navigate to the graph-backend directory**

```bash
cd graph-backend
```

2. **Install Graph CLI**

```bash
yarn global add @graphprotocol/graph-cli
```

3. **Initialize your subgraph**

```bash
graph init --product hosted-service <git-repo>
```

4. **Authenticate with The Graph CLI**

```bash
graph auth --studio <ACCESS_TOKEN>
```

5. **Build Subgraph**

```bash
graph codegen && graph build
```

6. **Deploy the Subgraph**

```bash
graph deploy --product hosted-service <git-repo>
```

---
