// 加 md5
fis.match('*.{js,css,png}', {
  useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// fis.match('*.less', {
//   // fis-parser-less 插件进行解析
//   parser: fis.plugin('less'),
//   // .less 文件后缀构建后被改成 .css 文件  所以引入一个 less 文件时，依然是 .less 后缀。
//   rExt: '.css'
// })

/**********************基于整个项目打包合并**********/
fis.match('::packager',{
  postpackager:fis.plugin('loader')
})

// fis.match('*.less', {
//   parser: fis.plugin('less'),
//   rExt: '.css'
// });

fis.match('*.{less,css}', {
  packTo: '/static/aio.css'
});

fis.match('*.js', {
  packTo: '/static/aio.js'
});
/*****************基于页面的打包方式*******************************/
// fis.match('::packager', {
//   postpackager: fis.plugin('loader', {
//     allInOne: true
//   })
// });
// fis.match('*.less', {
//   parser: fis.plugin('less'),
//   rExt: '.css'
// });

/***********************debug模式****************************/
fis.media('debug').match('*.{js,css,png}', {
  useHash: false,
  useSprite: false,
  optimizer: null
})