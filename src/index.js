const { marked } = require('marked');

/**
 * Converts Markdown text to HTML.
 * @param {string} markdown - The Markdown text to convert.
 * @returns {string} The converted HTML.
 */
function markdownToHtml(markdown) {
  if (typeof markdown !== 'string') {
    throw new Error('Input must be a string');
  }
  return marked(markdown);
}

module.exports = markdownToHtml;
