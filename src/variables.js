const core    = require( '@actions/core' );
const toolkit = require( 'actions-js-toolkit' );

const AUTO_CREATE_NEW_BRANCH = toolkit.input.tobool( core.getInput( 'AUTO_CREATE_NEW_BRANCH' ) );
const COMMIT_EACH_FILE       = toolkit.input.tobool( core.getInput( 'COMMIT_EACH_FILE' ) );
const DRY_RUN                = toolkit.input.tobool( core.getInput( 'DRY_RUN' ) );
const PULL_REQUEST           = toolkit.input.tobool( core.getInput( 'PULL_REQUEST' ) );
const SKIP_CI                = toolkit.input.tobool( core.getInput( 'SKIP_CI' ) );
const GITHUB_TOKEN           = core.getInput( 'GITHUB_TOKEN' );
const RAW_REPOSITORIES       = core.getInput( 'REPOSITORIES' );
const COMMIT_MESSAGE         = core.getInput( 'COMMIT_MESSAGE' );
const RAW_WORKFLOW_FILES     = core.getInput( 'WORKFLOW_FILES' );
const WORKFLOW_FILES_DIR     = core.getInput( 'WORKFLOW_FILES_DIR' );
const REPOSITORIES           = RAW_REPOSITORIES.split( '\n' );
const WORKFLOW_FILES         = RAW_WORKFLOW_FILES.split( '\n' );
const GITHUB_WORKSPACE       = toolkit.input.env( 'GITHUB_WORKSPACE' );
const WORKSPACE              = toolkit.path.dirname( toolkit.path.dirname( GITHUB_WORKSPACE ) ) + '/workflow-sync/';

module.exports = {
	GIT_USER: 'Sync bot',
	GIT_EMAIL: '54212639+mo-auto@users.noreply.github.com',
	AUTO_CREATE_NEW_BRANCH,
	COMMIT_EACH_FILE,
	DRY_RUN,
	GITHUB_TOKEN,
	RAW_REPOSITORIES,
	PULL_REQUEST,
	RAW_WORKFLOW_FILES,
	WORKFLOW_FILES_DIR,
	REPOSITORIES,
	WORKFLOW_FILES,
	WORKSPACE,
	GITHUB_WORKSPACE,
	SKIP_CI,
	COMMIT_MESSAGE
};
