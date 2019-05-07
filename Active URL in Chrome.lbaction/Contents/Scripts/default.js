const SCRIPTS_DIR = '~/Library/Mobile Documents/com~apple~CloudDocs/Florian/Scripts';

function run(argument) {
	const url = LaunchBar.executeAppleScriptFile(`${SCRIPTS_DIR}/get-chrome-url.scpt`);
	LaunchBar.debugLog(`Active URL in Google Chrome: ${url}`);
	if (!url || url.length === 0) {
		return [{ title: 'No active URL in Google Chrome'}];
	}
	return [{ title : url }];
}					
