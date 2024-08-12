# Term deposit calculator

To run this program, install packages with `npm i` or `pnpm i` and then run `npm start`.

Run the tests with `npm run test`.

## Project structure

This is a small program with 3 functions. Because it's so small, you will not find any classes in this project, which would be overkill. As it grows, I would expect to have at least 3 'layers': 1 for the CLI (rendering output and recieving inputs), 1 for domain specific logic (financial calculations) and 1 controller layer which wires it together. At the moment this is just 3 functions:

- calculateTermDepositValue
- cliDataCollector
- main function
