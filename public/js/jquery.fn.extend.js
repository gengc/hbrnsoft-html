
(function($){
	
	$.fn.extend({
		getJson: function(url,params,func){
			var _this = $(this);
			var obj = $.ajax({
				url: url,    //请求的url地址
				type: "post",   //请求方式
				data: { "id": "value" },    //参数值
				dataType: "json",   //返回格式为json
				async: false, //请求是否异步，默认为异步，这也是ajax重要特性
				beforeSend: function() {
					//请求前的处理
				},
				success: function(req) {
					//请求成功时处理
					console.log(req);
					_this.val(req);
				},
				complete: function() {
					//请求完成的处理
				},
				error: function() {
					//请求出错处理
				}
			});
		},
		message: {
			alert : function(_d){
			alert(_d);
			 }
		}
	})
})( jQuery );
