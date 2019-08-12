![hypzeh.github.io](./docs/.assets/project-title.png)
[![Build Status](https://nick-smirnoff.visualstudio.com/hypzeh.github.io/_apis/build/status/hypzeh.github.io-CI?branchName=master-react)](https://nick-smirnoff.visualstudio.com/hypzeh.github.io/_build/latest?definitionId=17&branchName=master-react)

---

_Personal website built with ASP.NET Core and React._

## Getting Started

### Prerequisites

- [.NET Core](https://dotnet.microsoft.com/download/dotnet-core/2.2)
- [Node.js](https://nodejs.org/en/download/)

### Quick Start

```shell
npm install
npm run start
```

## Deployment

### GitHub Pages

GitHub Pages doesn't natively support SPA, so the project uses scripts from [spa-github-pages](https://github.com/rafrex/spa-github-pages).

```shell
npm run build
```

The project is built using [webpack](https://webpack.js.org/) to the `wwwroot` output folder, push the contents of this folder to the `master` branch to deploy the application.

_**Note:** `404.html` and `CNAME` files have been manually placed in the `wwwroot` output folder and are not generated by webpack, take care not to remove them when cleaning._
