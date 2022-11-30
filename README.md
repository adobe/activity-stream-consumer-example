# Lead Activity Datastream Consumer Example

This repository contains a basic example of an application designed to consumer data from the Lead Activity Datastream service, which is part of the Adobe Marketo Engage product offering.

## Goals

* To provide a minimal application illustrating the functions a consumer of the Lead Activity Datastream needs to perform.

## Non-goals

* To be a feature-complete and production-ready consumer of the Lead Activity Datastream.

## Usage

* install Node.js 14 or newer
* clone the repository
* in a terminal emulator, change directory to the repository
* in the same terminal session, run `npm install`
* to run the client in the terminal session, run `npm start`
* to run the client in a detached session, run `npm start:standalone`

Requests will be logged both in the session and to a `combined.log` file in the repository directory.

* to stop the standalone server, run `npm stop:standalone` in the repository directory

## Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.
