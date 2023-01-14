// MathJax
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};
document$.subscribe(() => { 
  MathJax.typesetPromise()
})


// 自定义快捷键
keyboard$.subscribe(function(key) {
  if (key.mode === "global" && key.type === "x") {
    /* Add custom keyboard handler here */
    key.claim() 
  }
})

// 表的排序
document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})

