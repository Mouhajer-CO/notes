#!/usr/bin/env node

const { exec } = require("child_process");
const path = require('path');
const fs = require('fs');

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
 };

const isDirectory = filePath => fs.statSync(filePath).isDirectory();
const isGitFolder = filePath => /\.git$/.test(filePath);
const readDirectoriesSync = filePath => fs.readdirSync(filePath)
                                            .map(name => path.join(filePath, name))
                                                .filter(isDirectory);

const getReposDirectoryRecursively = (filePath) => {
    const dirs = readDirectoriesSync(filePath);

    if (dirs.includes(`${filePath}/.git`)) {
        return filePath;
    } else {
        return dirs.map(dir => getReposDirectoryRecursively(dir))
    }
};

// Process
const execGitCommand = (gitCommand, dir, gitCommandKey) => {
    return new Promise((resolve, reject) => {
        exec(gitCommand, (error, stdout, stderr) => {
            if (error) return reject({'Directory': dir.split('/').slice(-2).join('/'), 'Details': error});
            if (stderr) return reject({'Directory': dir.split('/').slice(-2).join('/'), 'Details': stderr});

            if(gitCommandKey === "get-branches") {
                return resolve({'Directory': dir.split('/').slice(-2).join('/'), 'Repos': stdout.trim().replace("\n* ", ",")});
            }else {
                // return resolve({'Directory': dir.split('/').slice(-2).join('/'), 'Status': stdout});
                return resolve("done");
            }
        });
    });
}

// Git
const setGitCommand = async (dir, gitCommandKey) => {
    const gitCommands = {
        'get-branches': `git -C ${dir} branch --contains HEAD`,
        'remove-untracked-files-check': `git -C ${dir} clean -fd --dry-run`,
        'remove-untracked-files': `git -C ${dir} clean -fd`,
        'reset': `git -C ${dir} reset --hard HEAD`,
        'restore': `git -C ${dir} restore .`,
        'pull': `git -C ${dir} pull`
    }

    return await execGitCommand(gitCommands[gitCommandKey], dir, gitCommandKey);
}

const init = async (reposFolder, gitCommandKey) => {
    try {
        if(!gitCommandKey) console.error("Git command missing!");
        else if (reposFolder && isDirectory(path.join(__dirname, reposFolder))) {
            const repos = flatDeep(getReposDirectoryRecursively(path.join(__dirname, reposFolder)), Infinity);

            /*
            const promises = repos.map(repo => {
                return setGitCommand(repo, gitCommandKey);
            });

            Promise.allSettled(promises) //all(promises)
                    .then(files => console.table(files) )//console.log(JSON.stringify(files, null, 4)) )
                    .catch(error => console.error(`error: ${error.message}`));
            */

            for (const repo of repos) {
                try {
                    console.log(repo, await setGitCommand(repo, gitCommandKey));
                } catch (error) {
                    console.error(error);
                }
            }
        } else {
            console.error("Folder path missing!");
        }
    } catch (error) {
        console.error(`error: ${error.message}`);
    }
}

const REPOS_FOLDER = process.argv[2];
const GIT_COMMANDS = process.argv[3];

init(REPOS_FOLDER, GIT_COMMANDS);