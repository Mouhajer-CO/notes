import fs from "fs";
import path from "path";

const DIRECTORY_PATH = "repos";
const ORG_NAME = process.argv[2];

const EXCLUDE_SUBDIRECTORY = ["node_modules", ".DS_Store"];
const FILES_NAME = [
  'pom.xml',
  'cpanfile',
  'requirements.txt',
  'go.mod', 'go.sum',
  'Gemfile', 'Gemfile.lock',
  'composer.json', 'composer.lock',
  'Dockerfile', 'docker-compose.yml',
  'package.json', 'package-lock.json',
  'gradlew' //, 'gradlew.bat', 'build.gradle.kts', 'gradle-wrapper.jar', 'gradle-wrapper.properties'
];
const FILES_BY_EXTENSIONS = [
  '.tf',
  '.csproj'
];
const STATE_FILE_PATH = { };

export const updateStateDependencies = (filePath, fileName, fileExtension) => {

  const fp = filePath.split('/');
  const org = fp[1];
  const repoName = fp[2];

  const repo_path = `${fp[0]}/${org}/${repoName}`;
  const repo_file_path = fp.slice(0, fp.length - 1).join('/');
  const file_name = fp.slice(0, fp.length - 1).join('__');

  const { tech, key } = updateFilesPath(fileName, fileExtension);
  const dep_obj = { repo_path, file_name, repo_file_path, [key]: filePath };

  if (!STATE_FILE_PATH[tech]) {
    STATE_FILE_PATH[tech] = { [file_name]: dep_obj };
  } else {
    if (!STATE_FILE_PATH[tech][file_name]) {
      STATE_FILE_PATH[tech][file_name] = dep_obj;
    } else if (!STATE_FILE_PATH[tech][file_name][key]) {
      STATE_FILE_PATH[tech][file_name][key] = filePath;
    } else if ( FILES_BY_EXTENSIONS.indexOf(fileExtension) === -1 ) {
      console.error(`error: path->${file_name}, file Path->${filePath}, key->${key}`);
      throw new Error('This should not happen!');
    }
  }

  console.log(`Added ${filePath} to state file.`);
};

const updateFilesPath = (fileName, fileExtension) => {
  let tech = ""; let key = "file1";

  if(fileExtension === '.tf') {
    return { tech: "terraform", key };
  } else if (fileExtension === '.csproj') {
    return { tech: "csharp", key };
  } 

  switch (fileName) {
    case "requirements.txt":
      tech = "python";
      break;
    case "pom.xml":
      tech = "java";
      break;
    case "cpanfile":
      tech = "perl";
      break;
    case "composer.json":
      tech = "php";
      break;
    case "composer.lock":
      tech = "php";
      key = "file2";
      break;
    case "Dockerfile":
      tech = "docker";
      break;
    case "docker-compose.yml":
      tech = "compose";
      break;
    case "package.json":
      tech = "node";
      break;
    case "package-lock.json":
      tech = "node";
      key = "file2";
      break;
    case "go.mod":
      tech = "go";
      break;
    case "go.sum":
      tech = "go";
      key = "file2";
      break;
    case "Gemfile":
      tech = "ruby";
      break;
    case "Gemfile.lock":
      tech = "ruby";
      key = "file2";
      break;
    case "gradlew":
    // case "gradlew.bat":
    // case "build.gradle.kts":
    // case "gradle-wrapper.jar":
    // case "gradle-wrapper.properties":
      tech = "kotlin";
      break;
    default:
      throw new Error(`Error: fix DEPENDENCY_FILES object! File "${fileName}" has to be added.`);
  }
  return { tech, key };
};

const checkFileExists = (directoryPath) => {
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const fileExtension = path.extname(file);
    const stats = fs.statSync(filePath);

    // const hasFileName = FILES_NAME.indexOf(file) != -1;
    if (stats.isFile() && ( FILES_NAME.indexOf(file) != -1 || FILES_BY_EXTENSIONS.indexOf(fileExtension) != -1 )) {
      updateStateDependencies(filePath, file, fileExtension); //, hasFileName);
    }

    if (stats.isDirectory() && EXCLUDE_SUBDIRECTORY.indexOf(file) == -1) {
      checkFileExists(filePath);
    }
  }
};

const addRepoList = (directoryPath) => {
  const files = fs.readdirSync(`${directoryPath}/${ORG_NAME}`);

  STATE_FILE_PATH['repos'] = {};
  for (const file of files) {
    const repo_path = `${directoryPath}/${ORG_NAME}/${file}`;
    const repo_name = `${directoryPath}__${ORG_NAME}__${file}`;
    STATE_FILE_PATH['repos'][repo_name] = { repo_path, repo_name }
  }
}

const saveToFile = async (fileName) => {
  await fs.promises.writeFile(fileName, JSON.stringify({ 'repos': STATE_FILE_PATH }))
    .then(() => console.log(`Saved data to ${fileName}.`))
    .catch(err => console.error(`Error while saving data to ${fileName}: ${err.message}`));
};

// node ./checkFileExists.mjs <YOUR_ORG> &> ./output/checkfile_output.txt
(async () => {
  try {
    checkFileExists(DIRECTORY_PATH);
    addRepoList(DIRECTORY_PATH);

    const fileName = `./output/${ORGANIZATION}.json`;
    await saveToFile(REPORT_FILE_PATH);
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
})();