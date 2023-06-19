const settings = {
  "name": "generatepress-pro",
  "state": {
    "frontity": {
      "url": "https://graphicux.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://graphicux.com"
                }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
