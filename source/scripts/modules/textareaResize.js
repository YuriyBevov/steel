import autosize from '../plugins/autosize.js'

export const resize = function () {
  autosize(document.querySelectorAll('textarea'));
}();
