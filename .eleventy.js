module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy("assets");
  return {
    pathPrefix: "/howto-11ty/"
  }
};

