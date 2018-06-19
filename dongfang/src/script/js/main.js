require.config({
	baseUrl:'../script/lib/',//基本路径,每一模块都要添加路径
	paths:{//不允许添加扩展名
		'jquery':'jquery.min'
	}
});
require(["../script/js/index.js","../script/js/lunbo.js","../script/js/recommendbanner.js"]);
require(["../script/js/groupbanner.js","../script/js/foodbanner.js","../script/js/tab.js","../script/js/louti.js"])