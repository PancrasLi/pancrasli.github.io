hexo.extend.filter.register('theme_inject', function(injects) {
    injects.head.raw('default', '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7633076101353582" crossorigin="anonymous"></script>');
    // injects.footer.raw('default', '<script async src="https://xxxxxx" crossorigin="anonymous"></script>');
});