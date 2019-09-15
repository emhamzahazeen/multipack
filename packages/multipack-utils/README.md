# multipack

A monorepo template repository.Preconfigured to work well with `Typescript`, `Jest`, `Webpack`, `Eslint`

## Getting started.

- Clone the project: `git clone --depth=1 https://github.com/Gherciu/multipack.git <YOUR_PROJECT_NAME>`
- Setup project: `npm install`

Running `npm run link:packages` will installing all packages dependencies and linking any cross-dependencies. This command is crucial, as it allows you to use your package names in `require()` as if the packages were already existing and available in your `node_modules` folder.

## Publishing

To build and publish your packages you just need to run: `npm run publish:packages`

This will run the build script and then publish your packages. It is currently set to publish each package individually so that their versions are independent.

## CLI Commands

`npm run build:packages` - build all packages with `webpack` in `production` mode

`npm run watch:packages` - start `webpack` in watch mode to rebuild packages in each change

`npm run publish:packages` - publish all packages in package registry (npm, yarn ...)

`npm run link:packages` - will installing all packages dependencies and linking any cross-dependencies in each package

`npm run test:packages` - run `jest` tests in each package and colect coverage from all packages

`npm run lint:packages` - lint all packages

`npm run fix:packages` - lint and fix all packages

`npm run clean:install:packages` - remove all `node_modules` directories from packages and reinstall dependecies in each package

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/multipack](https://github.com/Gherciu/multipack)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/multipack/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/multipack)
