Reveal.initialize({
  controls: false,
  progress: true,
  history: true,
  center: false,
  overview: true,
  slideNumber: 'c/t',

  transition: 'none', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [
    {
      src: '/js/vendor/classList.js', condition: function () {
      return !document.body.classList;
    }
    },
    {
      src: 'js/vendor/highlight/highlight.js',
      async: true,
      condition: function () {
        return !!document.querySelector('pre code');
      },
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    },
    {src: 'js/vendor/notes/notes.js', async: true}
  ]
});


WebFontConfig = {
  google: {families: ['Open+Sans:400,600,700,300:latin']}
};
(function () {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();