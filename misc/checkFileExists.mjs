import fs from "fs";
import path from "path";

const REPORT_FILE_PATH = "./output/output.json";
const DIRECTORY_PATH = "./repos";

const EXCLUDE_SUBDIRECTORY = [ "node_modules", ".DS_Store" ];
const DEPENDENCY_FILES = [
  'pom.xml',
  'cpanfile',
  'requirements.txt',
  'go.mod', 'go.sum',
  'Gemfile', 'Gemfile.lock',
  'composer.json', 'composer.lock',
  'Dockerfile', 'docker-compose.yml',
  'package.json', 'package-lock.json',
  'gradlew', 'gradlew.bat', 'build.gradle.kts', 'gradle-wrapper.jar', 'gradle-wrapper.properties'
];
const DEPENDENCY_FILES_BY_EXTENSIONS = [
  '.tf',
  '.csproj'
];
const DEPENDENCIES_FILES_PATH = [];

const checkFileExists = async (directoryPath) => {
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const fileExtension = path.extname(file);
    const stats = fs.statSync(filePath);

    if ( stats.isFile() && ( DEPENDENCY_FILES.indexOf(file) != -1 || DEPENDENCY_FILES_BY_EXTENSIONS.indexOf(fileExtension) != -1 ) ) {
      DEPENDENCIES_FILES_PATH.push(filePath);
    }

    if (stats.isDirectory() && EXCLUDE_SUBDIRECTORY.indexOf(file) == -1 ) {
      checkFileExists(filePath);
    }
  }
};

const saveToFile = async (fileName) => {
    await fs.promises.writeFile(fileName, JSON.stringify({'dependency_path': DEPENDENCIES_FILES_PATH}))
      .then(() => console.log(`Saved data to ${fileName}.`))
      .catch(err => console.error(`Error while saving data to ${fileName}: ${err.message}`));
}

(async () => {
  try {
    checkFileExists(DIRECTORY_PATH);
    await saveToFile(REPORT_FILE_PATH);
  } catch (error) {
    console.error(`Error: ${err.message}`)
  }
})();