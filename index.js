const config = {
	"rules": {
		"require-author": "error",
		"require-description": "error",
		"require-engines": "error",
		"require-keywords": "error",
		"require-license": "error",
		"require-name": "error",
		"require-version": "error",
		"bin-type": " error",
		"bundledDependencies-type": "error"
		"config-type": " error",
		"description-type": "error",
		"devDependencies-type": "error",
		"directories-type": "error",
		"engines-type": "error",
		"files-type": "error",
		"homepage-type": "error",
		"keywords-type": "error",
		"license-type": "error",
		"main-type": "error",
		"man-type": "error",
		"name-type": "error",
		"optionalDependencies-type": "error",
		"os-type": "error",
		"peerDependencies-type": "error",
		"preferGlobal-type": "error",
		"private-type": "error",
		"repository-type": "error",
		"scripts-type": "error",
		"version-type": "error",
		"valid-values-author": ["error", [
			"Todd Matheson <tmatheson11186@gmail.com>",
			"Todd Matheson <tmatheson11186@gmail.com> (https://toddmath.com)",
			"toddmath",
			"Todd Matheson"
		]],
		"name-format": "error",
		"version-format": "error"
	}
}

{
	"name": "npm-package-json-lint",
	"version": "0.1.0",
	"description": "CLI app for linting package.json files.",
	"keywords": [
		"lint"
	],
	"homepage": "https://github.com/tclindner/npm-package-json-lint",
	"author": "Thomas Lindner",
	"repository": {
		"type": "git",
		"url": "https://github.com/tclindner/npm-package-json-lint"
	},
	"devDependencies": {
		"mocha": "^2.4.5"
	},
	"npmpackagejsonlint": {
		"rules": {
			"require-author": "error"
		}
	}
	}
}

module.exports = config;