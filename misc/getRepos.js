const fs = require('fs');

const PER_PAGE = 100;
const ORGANIZATION = process.argv[2] || "";
const FILE_NAME = process.argv[3] || "./repos.json";
const GITHUB_KEY = process.env.GITHUB_KEY || "";

const filterRepos = (repos = [], key = 'ssh_url') => repos.map( (r) => r[key] );
const saveToFile = async (fileName, data) => {
    await fs.promises.writeFile(fileName, JSON.stringify({'repos': data}))
        .then(() => console.log(`Saved data to ${fileName}.`))
        .catch(err => console.error(`Error while saving data to ${fileName}: ${err.message}`));
}

let organizationRepos = [];
const getOrganizationRepos = async (page = 1) => {
    if(ORGANIZATION && GITHUB_KEY){
        const repoUrl = `https://api.github.com/orgs/${ORGANIZATION}/repos?page=${page}&per_page=${PER_PAGE}`;
        const headers = { 'headers': { 'Authorization': `Bearer ${GITHUB_KEY}` } };
        return await fetch( repoUrl, headers )
            .then( jsonData => jsonData.json() )
            .then( repos => {
                console.log(`getOrganizationRepos from ${ORGANIZATION}, page ${page}, retrieved ${repos?.length}`);
                organizationRepos = organizationRepos.concat(repos); //filterRepos(repos));
                return (repos?.length) ? getOrganizationRepos(page + 1) : organizationRepos;
            })
            .catch( error => {
                console.error(`getOrganizationRepos error: ${error.message}`);
                return organizationRepos;
            })
    }
};

if(!ORGANIZATION){
    console.error(`GitHub organization is missing`);
}
if(!GITHUB_KEY){
    console.error(`Access Token/Github key is missing`);
}

// node --experimental-fetch ./getRepos.js ORG
(async () => {
    const data = await getOrganizationRepos();
    await saveToFile(FILE_NAME, data);
})();