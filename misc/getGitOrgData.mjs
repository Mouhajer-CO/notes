import fs from 'fs';

const GITHUB_KEY = process.env.GITHUB_KEY;
const ORGANIZATION = process.argv[2];
const PER_PAGE = 100;

const ORG_DATA = { "repos": [], "members": [], "teams": [] };
const headers = { 'headers': { 'Authorization': `Bearer ${GITHUB_KEY}` } };

const filterRepos = (repos = [], key = 'clone_url') => repos.map( (r) => r[key] );
const saveToFile = async (fileName, data) => {
    await fs.promises.writeFile(fileName, JSON.stringify(data))
        .then(() => console.log(`Saved data to ${fileName}.`))
        .catch(err => console.error(`Error while saving data to ${fileName}: ${err.message}`));
}

const getGitOrgData = async (what, page = 1) => {
    const repoUrl = `https://api.github.com/orgs/${ORGANIZATION}/${what}?page=${page}&per_page=${PER_PAGE}`;
    return await fetch( repoUrl , headers )
        .then( jsonData => jsonData.json() )
        .then( async data => {
            console.log(`Get ${what} from ${ORGANIZATION}, page ${page}, retrieved ${data?.length}`);
            if(data?.length) {
                ORG_DATA[what] = ORG_DATA[what].concat(data); // filterRepos(data));
                await getGitOrgData(what, page + 1);
            }
        })
        .catch( error => {
            console.error(`getGitOrgData error: ${error.message}`);
        })
};

// node --experimental-fetch ./getGitOrgData.mjs <YOUR_ORG>
(async () => {
    if(ORGANIZATION && GITHUB_KEY){
        const fileName = `./repos/${ORGANIZATION}.json`;
        for ( const getWhat of Object.keys(ORG_DATA)) {
            await getGitOrgData(getWhat);
        }
        await saveToFile(fileName, ORG_DATA);
    }

    if(!ORGANIZATION){
        console.error(`GitHub organization is missing`);
    }
    if(!GITHUB_KEY){
        console.error(`Access Token/Github key is missing`);
    }
})();