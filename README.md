# Nick Smirnoff

_Personal website._

![Nick Smirnoff](docs/.assets/project-title.png)

## Getting Started

### Prerequisites

- [.NET Core](https://dotnet.microsoft.com/download/dotnet-core/)
- [Node.js](https://nodejs.org/en/download/)

### Resources

- [Configuration](docs/configuration)
- [Contributing](docs/contributing)
- [Deployment](docs/deployment)

### Usage

#### Node

This project uses [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server), which requires a trusted certificate to run with HTTPS. Take a look at `scripts/create-https-certificate.sh` to get your environment HTTPS ready quickly, additionally/alternatively read through the [Configuration - HTTPS](docs/configuration/README.md#https) documentation to configure manually.

> __NOTE:__ Please inspect any script prior to running to ensure safety. We already know ours is safe, but you should verify the security and contents of any script from the internet you are not familiar with.

Run the following commands from the `src/Hypzeh.Web` directory, to start application:

```shell
npm install
npm run start
```

## Acknowledgments

- Built with [smiosoft/react-core-boilerplate](https://github.com/smiosoft/react-core-boilerplate)
