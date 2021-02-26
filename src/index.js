const core = require('@actions/core');
const exec = require('@actions/exec');

const version = core.getInput('version', {required: false}) || '0.3.5';
const token = core.getInput('token', {required: true});
(async () => {
    try {
        await exec.exec(`deno install -Afq --unstable https://x.nest.land/eggs@${version}/eggs.ts`)
        await exec.exec(`eggs link ${token}`)
        core.addPath(process.cwd()+'/bin');
    } catch (error) {
        core.setFailed(error.message);
    }
})();
