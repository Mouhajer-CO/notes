import fs from "fs";
import { promisify } from "node:util";
import { exec } from "node:child_process";

const execPromise = promisify(exec);

const REPOS_FILE_PATH = process.argv[2] || "./repos.json";

const executeCommand = async (command) => {
  console.log(`Execute Command: ${command}`);
  try {
    const { stdout, stderr } = await execPromise(command);

    if (stderr) {
      console.error(`Command execution encountered an error: ${stderr}`);
    }

    console.log(`Command output: ${stdout}`);
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
                const command = `git clone ${element}`;
                await executeCommand(command);
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
}

// node ../cloneRepos.mjs ../repos.json
init();