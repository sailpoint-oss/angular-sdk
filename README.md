[![Discourse Topics][discourse-shield]][discourse-url]
![Times Downloaded][downloads-shield] ![Issues][issues-shield]
![Latest Releases][release-shield] ![Contributor Shield][contributor-shield]
![License Shield][license-shield]

[discourse-shield]: https://img.shields.io/discourse/topics?label=Discuss%20This%20Tool&server=https%3A%2F%2Fdeveloper.sailpoint.com%2Fdiscuss
[discourse-url]: https://developer.sailpoint.com/discuss
[downloads-shield]: https://img.shields.io/npm/dw/@sailpoint/angular-sdk
[issues-shield]: https://img.shields.io/github/issues/sailpoint-oss/angular-sdk?label=Issues
[release-shield]: https://img.shields.io/github/v/release/sailpoint-oss/angular-sdk?label=Current%20Release
[contributor-shield]: https://img.shields.io/github/contributors/sailpoint-oss/angular-sdk?label=Contributors
[license-shield]: https://img.shields.io/badge/MIT-License-green

# SailPoint Angular SDK

The Angular SDK lets you call the SailPoint APIs from an Angular application. The
package name on npm is `@sailpoint/angular-sdk`.

## Documentation

**Read the [SDK documentation](https://developer.sailpoint.com/docs/tools/sdk) on
developer.sailpoint.com.** It covers installation, authentication, configuration,
and code examples for every SailPoint SDK.

## Installation

```bash
npm install @sailpoint/angular-sdk
```

## About this repository

This repository holds the generator that builds the SDK from the SailPoint API
specifications. It also holds the generated sources.

| Path | Purpose |
| --- | --- |
| `sdk-output/` | The generated library. This is the package published to npm. |
| `sdk-resources/` | The generator script and its configuration files. |
| `sample-app/` | A small Angular application that consumes the built SDK. |
| `api-specs/` | The API specifications, cloned by `make specs`. Not committed. |

To build the library locally, clone the specifications and run the generator:

```bash
make specs
make build
```

Then build and test the Angular package:

```bash
make test
```

## Contributing

The SailPoint Developer Relations Team works to improve this SDK. But the
community itself is the resource that matters most. We welcome any input,
feedback, and direct contribution you can provide, big or small.

Read our [contribution guidelines](./CONTRIBUTING.md) to learn about the
different ways you can contribute. You
[must sign our CLA](https://cla-assistant.io/sailpoint-oss/developer.sailpoint.com)
before you contribute.

## License

Distributed under the MIT License. Refer to [the license](./License) for more
information.

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community. Read our
[code of conduct](./CODE_OF_CONDUCT.md) to learn more.
