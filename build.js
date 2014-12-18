// add `optimize=none` to skip script optimization (useful during debugging).

({
    baseUrl: "./",
    mainConfigFile: "./main.js",
    name: "main",
    include: ['bower_components/requirejs/require.js'],
    out: "main.full.js",

    optimize: "uglify2",
    skipDirOptimize: false,
    generateSourceMaps: true,
    findNestedDependencies: true,
    preserveLicenseComments: false,

    onBuildWrite: function (moduleName, path, singleContents) {
    return singleContents.replace(/jsx!/g, '');
    }
})
