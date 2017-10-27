var xxx = 8;
setInterval(function(){
	if(xxx%16 == 0){
		for(var i = 0; i < $(".nickname_text.ng-binding").length; i ++){
			if($($(".nickname_text.ng-binding")[i]).html() == "490活动群"){
				$($(".nickname_text.ng-binding")[i]).click();
			}
		}
		var hour = new Date().getHours();
		var msg = "";
		if(hour == 8){
			msg = "@所有人\n\n现在时间：" + new Date().toLocaleString() + "[太阳][太阳]\n"
				+ "美好的一天开始咯![调皮][调皮]\n"
				+ "去好友朋友圈查看并复制【袜子广告】到自己的朋友圈,从现在开始。。。[奸笑][奸笑]\n"
				+ "自动发送(8:00-21:00)";
		}
		if(hour >= 9 && hour <= 20){
			msg = '@所有人\n\n' + new Date().toLocaleString() + '\n' + '该去好友朋友圈查看并复制【袜子广告】到自己的朋友圈了;\n(每隔4小时自动发送)';
		}
		var appElement = document.querySelector('[ng-controller=chatSenderController]');
		var $scope = angular.element(appElement).scope();
		$scope.editAreaCtn = msg;
		$scope.sendTextMessage();
	}
	console.log(new Date().toLocaleString());
	console.log(xxx);
	xxx ++;
},900000);

/*
or
$('.edit_area').html(msg);
$(".edit_area").trigger($.Event("keydown", { keyCode: 13,ctrlKey: true}));
$('.btn_send').click();
*/