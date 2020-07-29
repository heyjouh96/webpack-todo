import Handlebars from 'handlebars/runtime';

Handlebars.registerHelper("upper", function (text) {
  return text.toUpperCase();
});

Handlebars.registerHelper("click", function (fn) {
  console.log('->', fn);
  return fn();
});