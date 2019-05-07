// LaunchBar Action Script

function runWithString(argument) {
	if (!argument || argument.length === 0) {
		return [{title: `Search NPM`}];
	}
	
	const result = HTTP.getJSON(`https://api.npms.io/v2/search/suggestions?q=${argument}&size=10`);
	if (!result || result.error !== undefined || !result.data || result.data.length === 0) {
		return [{
			title: `Search NPM for ${argument}`,
			url: `https://www.npmjs.com/search?q=${argument}`
		}];
	}
	
	return result.data.map((resultItem) => {
		const package = resultItem.package;
		const isExactMatch = package.name.toLowerCase() === argument.toLowerCase();
		const item = { 
			title: package.name, 
			subtitle: package.description, 
			alwaysShowsSubtitle: true, 
			url: package.links.npm,
			icon: 'npmjs.png'
		};
		if (isExactMatch) {
			item.badge = 'exact';
		}
		if (resultItem.score && resultItem.score.final) {
			item.label = `Score ${Math.round(resultItem.score.final * 100)}%`;
		}
		return item;
	});
}
