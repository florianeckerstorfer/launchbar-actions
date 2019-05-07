const SCRIPTS_DIR = '~/Library/Mobile Documents/com~apple~CloudDocs/Florian/Scripts';

function run(argument) {
	const url = LaunchBar.executeAppleScriptFile(`${SCRIPTS_DIR}/get-safari-url.scpt`);
	LaunchBar.debugLog(`Active URL in Safari: ${url}`);
	if (!url || url.length === 0) {
		return [{ title: 'No active URL in Safari'}];
	}
	return [{ title : url }];
}					
