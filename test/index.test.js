const markdownToHtml = require('../src/index');

test('converts basic Markdown to HTML', () => {
  const markdown = '# Hello World';
  const html = '<h1>Hello World</h1>\n';
  expect(markdownToHtml(markdown)).toEqual(html);
});

test('converts Markdown links to HTML', () => {
  const markdown = '[Mohit Github](https://www.github.com/Mohit5Upadhyay)';
  const html = '<p><a href="https://www.github.com/Mohit5Upadhyay">Mohit Github</a></p>\n';
  expect(markdownToHtml(markdown)).toEqual(html);
});

test('throws an error for non-string input', () => {
  expect(() => markdownToHtml(42)).toThrow('Input must be a string');
});
