import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
const newHandler = {
  name: "categoryOrPostType",
  priority: 19,
  pattern: "/(.*)?/:slug", 
  func: async ({ route, params, state, libraries }) => {
    // 1. try with category.
    console.log(route)
    try {
      if(route.includes("/author/")){
        const author = libraries.source.handlers.find(
          handler => handler.name == "author"
        );
        await author.func({ route, params, state, libraries });
      }else{
      const category = libraries.source.handlers.find(
        handler => handler.name == "category"
      );
      await category.func({ route, params, state, libraries });
    }
   } catch (e) {
      // It's not a category
      const postType = libraries.source.handlers.find(
        handler => handler.name == "post type"
      );
      
      await postType.func({ link: route, params, state, libraries });
    }
  }
};
const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     * In Frontity, any package can add React components to the site.
     * We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
    },
  },
  libraries: {
    source: {
      handlers: [newHandler]
    },
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};

export default marsTheme;
