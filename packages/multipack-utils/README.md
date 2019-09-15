# multipack-utils

Simple monorepo template repository.

## Getting started.

- Clone the project: `git clone --depth=1 https://github.com/Gherciu/multipack.git <YOUR_PROJECT_NAME>`
- Setup project: `npm install`

Running `npm run link:packages` will installing all packages dependencies and linking any cross-dependencies. This command is crucial, as it allows you to use your package names in `require()` as if the packages were already existing and available in your `node_modules` folder.

## Publishing

To build and publish your packages you just need to run: `npm run publish:packages`

This will run the build script and then publish your packages. It is currently set to publish each package individually so that their versions are independent.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@Gherciu/multipack** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/multipack/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/multipack)
