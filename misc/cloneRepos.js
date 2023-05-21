const fs = require('fs');
const util = require('util');
const { exec } = require('child_process');
const execPromise = util.promisify(exec);

const REPOS_FILE_PATH = process.argv[2] || "./repos.json";
const DIRECTORY_PATH = process.argv[3] || "./DEV";

const executeCommand = async (command) => {
  try {
    const { stdout, stderr } = await execPromise(command);

    if (stderr) {
      console.error(`Command execution encountered an error: ${stderr}`);
    }

    console.log(`Command output:\n${stdout}`);
  } catch (error) {
    console.error(`Error executing command: ${error.message}`);
  }
}

const init = () => {
    fs.readFile(REPOS_FILE_PATH, 'utf8', async (error, data) => {
        if (error) {
            console.error('Issue on reading the file:', error);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            for (const element of jsonData['repos']) {
                const command = `git clone ${element} ${DIRECTORY_PATH}`;
                // await executeCommand(element);
                console.log(command);
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
}

init();