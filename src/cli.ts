import { prompt } from 'enquirer';

async function main() {
  const response = await prompt({
    type: 'input',
    name: 'username',
    message: 'What is your username?'
  });

  console.log(response);
}

main()
