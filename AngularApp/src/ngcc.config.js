module.exports = {
    packages: {
      'ngx-openlayers': {
        ignorableDeepImportMatchers: [
          /ol\//,
        ]
      },
    },
};