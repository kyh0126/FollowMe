function kakaoserch(){

		var city = "대전" + $("#city").val()+" 갈만한 곳";
		$.ajax({
			method : "get",
			url : "https://dapi.kakao.com/v2/search/web",
			data : {query : city},
			headers : {Authorization : "KakaoAK 04881251da5eef1bfac8e06705918a6d"}
		})
		.done(function(msg){
			console.log(msg);
		})
	}
