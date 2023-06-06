const settings = {
  "name": "generatepress-pro",
  "state": {
    "frontity": {
      "url": "https://graphicux/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/about-us/"
            ],
            [
              "Best Deals",
              "/category/travel/"
            ],
            [
              "Tools",
              "/tag/japan/"
            ],
            [
              "Contact",
              "/contact"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://tasksource.net/"
                }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
