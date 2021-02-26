var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		mapOption = { 
		center: new kakao.maps.LatLng(36.337018, 127.396402), // 지도의 중심좌표
		level: 8 // 지도의 확대 레벨
	};
	  
	// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
	var map = new kakao.maps.Map(mapContainer, mapOption); 

	// 다각형 객체를 구성할 좌표배열입니다 
	var path = [
		new kakao.maps.LatLng(36.800402, 126.747277),
		new kakao.maps.LatLng(35.978056, 126.879342),
		new kakao.maps.LatLng(35.921456, 128.048502),
		new kakao.maps.LatLng(36.834606, 128.040733)
	];

	var hole = [
		new kakao.maps.LatLng( 36.48679951624792, 127.401505734422557 ),
		new kakao.maps.LatLng( 36.486049226720844, 127.40237162713332 ),
		new kakao.maps.LatLng( 36.454938878223771, 127.405831163027969 ),
		new kakao.maps.LatLng( 36.454913086274914, 127.406293960198425 ),
		new kakao.maps.LatLng( 36.456621594194388, 127.432131167208652 ),
		new kakao.maps.LatLng( 36.45653731526793, 127.433789891550063 ),
		new kakao.maps.LatLng( 36.455093612231479, 127.461559570045154 ),
		new kakao.maps.LatLng( 36.455337148641355, 127.461792823030507 ),
		new kakao.maps.LatLng( 36.477063983032316, 127.479871393181725 ),
		new kakao.maps.LatLng( 36.477209992550968, 127.480611007175185 ),
		new kakao.maps.LatLng( 36.475797777779924, 127.484231682529526 ),
		new kakao.maps.LatLng( 36.475624127318603, 127.484276108878149 ),
		new kakao.maps.LatLng( 36.454788546508105, 127.4960880025384 ),
		new kakao.maps.LatLng( 36.454906938055217, 127.496466457076238 ),
		new kakao.maps.LatLng( 36.454045572323665, 127.503596199912906 ),
		new kakao.maps.LatLng( 36.45370091965119, 127.503788845062303 ),
		new kakao.maps.LatLng( 36.425242915902892, 127.493767056357584 ),
		new kakao.maps.LatLng( 36.425064340446887, 127.493911769704724 ),
		new kakao.maps.LatLng( 36.420317939994945, 127.537435165052642 ),
		new kakao.maps.LatLng( 36.420122910383611, 127.537782791465531 ),
		new kakao.maps.LatLng( 36.419279196326549, 127.542280734579933 ),
		new kakao.maps.LatLng( 36.415857568692687, 127.541859988186459 ),
		new kakao.maps.LatLng( 36.408459615945418, 127.547072746796204 ),
		new kakao.maps.LatLng( 36.408454519716564, 127.547079511646345 ),
		new kakao.maps.LatLng( 36.399675947569705, 127.558165173147813 ),
		new kakao.maps.LatLng( 36.399856150629894, 127.558780101755346 ),
		new kakao.maps.LatLng( 36.399146540044811, 127.559192185325827 ),
		new kakao.maps.LatLng( 36.398218889535777, 127.55967899075192 ),
		new kakao.maps.LatLng( 36.395186783153783, 127.555080243484653 ),
		new kakao.maps.LatLng( 36.395147139365093, 127.554946370618424 ),
		new kakao.maps.LatLng( 36.38380225513675, 127.524804674233209 ),
		new kakao.maps.LatLng( 36.350352876459411, 127.519369033861693 ),
		new kakao.maps.LatLng( 36.34006990064799, 127.50134180998748 ),
		new kakao.maps.LatLng( 36.237953950681927, 127.492577201911246 ),
		new kakao.maps.LatLng( 36.196722891943928, 127.448716410825838 ),
		new kakao.maps.LatLng( 36.212892945867274, 127.407999299287226 ),
		new kakao.maps.LatLng( 36.262270950004201, 127.390257977696947 ),
		new kakao.maps.LatLng( 36.262586342451286, 127.359501949823681 ),
		new kakao.maps.LatLng( 36.218901292713738, 127.364197180150683 ),
		new kakao.maps.LatLng( 36.203158372814976, 127.323945834896264 ),
		new kakao.maps.LatLng( 36.220815369983029, 127.315641059137135 ),
		new kakao.maps.LatLng( 36.235293590921927, 127.283154792739694 ),
		new kakao.maps.LatLng( 36.264950186115414, 127.286506662279464 ),
		new kakao.maps.LatLng( 36.264895312282356, 127.286245818984312 ),
		new kakao.maps.LatLng( 36.276050581568803, 127.258771864840526 ),
		new kakao.maps.LatLng( 36.327249530257973, 127.259752743937142 ),
		new kakao.maps.LatLng( 36.3448265782094, 127.279126001120275 ),
		new kakao.maps.LatLng( 36.414603964631645, 127.282124282340817 ),
		new kakao.maps.LatLng( 36.421915039124464, 127.294269615813079 ),
		new kakao.maps.LatLng( 36.42219502183513, 127.294251687643083 ),
		new kakao.maps.LatLng( 36.422208976417835, 127.326316727046404 ),
		new kakao.maps.LatLng( 36.450273038128998, 127.355798576449189 ),
		new kakao.maps.LatLng( 36.499215976257155, 127.380081383128854 ),
		new kakao.maps.LatLng( 36.49953929874922, 127.380336548376675 ),
		new kakao.maps.LatLng( 36.499660645040414, 127.380966888682238 ),
		new kakao.maps.LatLng( 36.49992444824916, 127.382309673535261 ),
		new kakao.maps.LatLng( 36.500230690026456, 127.383854971043434 ),
		new kakao.maps.LatLng( 36.499444883432616, 127.385383738949642 ),
		new kakao.maps.LatLng( 36.498985556577466, 127.386263399997929 ),
		new kakao.maps.LatLng( 36.491956026199041, 127.395759885352035 ),
		new kakao.maps.LatLng( 36.491708392279001, 127.396140944656082 ),
		new kakao.maps.LatLng( 36.48679951624792, 127.401505734422557 )
	];

	// 다각형을 생성하고 지도에 표시합니다
	var polygon = new kakao.maps.Polygon({
		map: map,
		path: [path, hole], // 좌표 배열의 배열로 하나의 다각형을 표시할 수 있습니다
		strokeWeight: 2,
		strokeColor: '#5D5D5D',
		strokeOpacity: 0.8,
		fillColor: '#ddd',
		fillOpacity: 0.7 
	});
	  
	
	// 1 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
	var dongguPolygonPath = [
	    new kakao.maps.LatLng( 36.425242911269912, 127.493766778401124 ),
	    new kakao.maps.LatLng( 36.42506433684779, 127.493911492670691 ),
	    new kakao.maps.LatLng( 36.422473524131924, 127.514512553561232 ),
	    new kakao.maps.LatLng( 36.420317935559012, 127.537434887075918 ),
	    new kakao.maps.LatLng( 36.420122906450636, 127.537782513459092 ),
	    new kakao.maps.LatLng( 36.419279193161849, 127.542280457210936 ),
	    new kakao.maps.LatLng( 36.415857565503515, 127.541859712182017 ),
	    new kakao.maps.LatLng( 36.408459610946892, 127.547072468623639 ),
	    new kakao.maps.LatLng( 36.408454515558631, 127.547079233573143 ),
	    new kakao.maps.LatLng( 36.399675961089635, 127.558165095428421 ),
	    new kakao.maps.LatLng( 36.399856145869919, 127.558779824800837 ),
	    new kakao.maps.LatLng( 36.399146527798749, 127.559191907047904 ),
	    new kakao.maps.LatLng( 36.398218885167402, 127.559678713218801 ),
	    new kakao.maps.LatLng( 36.395186778656758, 127.555079966855104 ),
	    new kakao.maps.LatLng( 36.395147126420156, 127.554946093919966 ),
	    new kakao.maps.LatLng( 36.383802251753707, 127.524804398280864 ),
	    new kakao.maps.LatLng( 36.340069895630663, 127.501341531328777 ),
	    new kakao.maps.LatLng( 36.237953946661499, 127.492576923146373 ),
	    new kakao.maps.LatLng( 36.196722887604025, 127.44871613365747 ),
	    new kakao.maps.LatLng( 36.208082877301443, 127.422329798799325 ),
	    new kakao.maps.LatLng( 36.238193127537755, 127.442295366319854 ),
	    new kakao.maps.LatLng( 36.288608163656235, 127.427310370623871 ),
	    new kakao.maps.LatLng( 36.30132458346413, 127.455507905575345 ),
	    new kakao.maps.LatLng( 36.340927031789455, 127.414991837174227 ),
	    new kakao.maps.LatLng( 36.355021417939447, 127.427545592513084 ),
	    new kakao.maps.LatLng( 36.355463887857319, 127.427475598488797 ),
	    new kakao.maps.LatLng( 36.35682449708662, 127.430766539338421 ),
	    new kakao.maps.LatLng( 36.359109781392185, 127.432443840259936 ),
	    new kakao.maps.LatLng( 36.400268880520059, 127.45535273501828 ),
	    new kakao.maps.LatLng( 36.439373132166693, 127.492429658259468 ),
	    new kakao.maps.LatLng( 36.425242911269912, 127.493766778401124 )
	];

	// 지도에 표시할 다각형을 생성합니다
	var dongguPolygon = new kakao.maps.Polygon({
	    path:dongguPolygonPath, // 그려질 다각형의 좌표 배열입니다
	    strokeWeight: 1, // 선의 두께입니다
	    strokeColor: '#ddd', // 선의 색깔입니다
	    strokeOpacity: 0.01, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'longdash', // 선의 스타일입니다
	    fillColor: '#ddd', // 채우기 색깔입니다
	    fillOpacity: 0.01 // 채우기 불투명도 입니다
	});

	// 2 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
	var jungguPolygonPath = [
	    new kakao.maps.LatLng( 36.208082877301443, 127.422329798799325 ),
	    new kakao.maps.LatLng( 36.272178520173917, 127.372460159948261 ),
	    new kakao.maps.LatLng( 36.289179197901142, 127.370114455243737 ),
	    new kakao.maps.LatLng( 36.290059642904914, 127.369897175284095 ),
	    new kakao.maps.LatLng( 36.291944938546777, 127.372762779518837 ),
	    new kakao.maps.LatLng( 36.293287390158646, 127.373312879084082 ),
	    new kakao.maps.LatLng( 36.293284803511739, 127.373330433600671 ),
	    new kakao.maps.LatLng( 36.349631324405017, 127.403900139702415 ),
	    new kakao.maps.LatLng( 36.340927031789455, 127.414991837174227 ),
	    new kakao.maps.LatLng( 36.30132458346413, 127.455507905575345 ),
	    new kakao.maps.LatLng( 36.288608163656235, 127.427310370623871 ),
	    new kakao.maps.LatLng( 36.238193127537755, 127.442295366319854 ),
	    new kakao.maps.LatLng( 36.208082877301443, 127.422329798799325 ) 
	];

	// 지도에 표시할 다각형을 생성합니다
	var jungguPolygon = new kakao.maps.Polygon({
	    path:jungguPolygonPath, // 그려질 다각형의 좌표 배열입니다
	    strokeWeight: 1, // 선의 두께입니다
	    strokeColor: '#ddd', // 선의 색깔입니다
	    strokeOpacity: 0.01, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'longdash', // 선의 스타일입니다
	    fillColor: '#ddd', // 채우기 색깔입니다
	    fillOpacity: 0.01 // 채우기 불투명도 입니다
	});

	// 3 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
	var seoguPolygonPath = [
	    new kakao.maps.LatLng( 36.272178520173917, 127.372460159948261 ),
	    new kakao.maps.LatLng( 36.218901293107535, 127.364196900969077 ),
	    new kakao.maps.LatLng( 36.184055584700545, 127.331697567351526 ),
	    new kakao.maps.LatLng( 36.220815370603702, 127.315640781870286 ),
	    new kakao.maps.LatLng( 36.245570998733726, 127.28138837924314 ),
	    new kakao.maps.LatLng( 36.264235368291374, 127.291915685103447 ),
	    new kakao.maps.LatLng( 36.264241881022102, 127.291935217552847 ),
	    new kakao.maps.LatLng( 36.264320581422609, 127.29226170530319 ),
	    new kakao.maps.LatLng( 36.272970543989679, 127.31003418758425 ),
	    new kakao.maps.LatLng( 36.328755866594783, 127.335901602672024 ),
	    new kakao.maps.LatLng( 36.329044442744468, 127.335903148076909 ),
	    new kakao.maps.LatLng( 36.357996458642901, 127.358259432573121 ),
	    new kakao.maps.LatLng( 36.358701930277128, 127.35850356472568 ),
	    new kakao.maps.LatLng( 36.363982761733773, 127.365194377089153 ),
	    new kakao.maps.LatLng( 36.364129439969176, 127.365604269701791 ),
	    new kakao.maps.LatLng( 36.371877538551878, 127.37638389499368 ),
	    new kakao.maps.LatLng( 36.371961202095605, 127.377101137053842 ),
	    new kakao.maps.LatLng( 36.371318557845292, 127.387526668771642 ),
	    new kakao.maps.LatLng( 36.371289452147082, 127.387796649226502 ),
	    new kakao.maps.LatLng( 36.371497608323743, 127.392678537012912 ),
	    new kakao.maps.LatLng( 36.371406119115832, 127.392914441505582 ),
	    new kakao.maps.LatLng( 36.371405226887276, 127.392916742536485 ),
	    new kakao.maps.LatLng( 36.370856451726986, 127.393271910675267 ),
	    new kakao.maps.LatLng( 36.349631324405017, 127.403900139702415 ),
	    new kakao.maps.LatLng( 36.293284803511739, 127.373330433600671 ),
	    new kakao.maps.LatLng( 36.293287390158646, 127.373312879084082 ),
	    new kakao.maps.LatLng( 36.291944938546777, 127.372762779518837 ),
	    new kakao.maps.LatLng( 36.290059642904914, 127.369897175284095 ),
	    new kakao.maps.LatLng( 36.289179197901142, 127.370114455243737 ),
	    new kakao.maps.LatLng( 36.272178520173917, 127.372460159948261 )
	];

	// 지도에 표시할 다각형을 생성합니다
	var seoguPolygon = new kakao.maps.Polygon({
	    path:seoguPolygonPath, // 그려질 다각형의 좌표 배열입니다
	    strokeWeight: 1, // 선의 두께입니다
	    strokeColor: '#ddd', // 선의 색깔입니다
	    strokeOpacity: 0.01, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'longdash', // 선의 스타일입니다
	    fillColor: '#ddd', // 채우기 색깔입니다
	    fillOpacity: 0.01 // 채우기 불투명도 입니다
	});

	// 4 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
	var yuseongguPolygonPath = [
	    new kakao.maps.LatLng( 36.329044442744468, 127.335903148076909 ),
	    new kakao.maps.LatLng( 36.328755866594783, 127.335901602672024 ),
	    new kakao.maps.LatLng( 36.272970543989679, 127.31003418758425 ),
	    new kakao.maps.LatLng( 36.264320581422609, 127.29226170530319 ),
	    new kakao.maps.LatLng( 36.264241881022102, 127.291935217552847 ),
	    new kakao.maps.LatLng( 36.264688171465096, 127.291750874173943 ),
	    new kakao.maps.LatLng( 36.264963801690946, 127.291526537126856 ),
	    new kakao.maps.LatLng( 36.265412553150028, 127.29112601164293 ),
	    new kakao.maps.LatLng( 36.265508985273442, 127.290978428266015 ),
	    new kakao.maps.LatLng( 36.265666362569718, 127.290738672131056 ),
	    new kakao.maps.LatLng( 36.265720201080676, 127.290622525399229 ),
	    new kakao.maps.LatLng( 36.265795137785872, 127.290460561684469 ),
	    new kakao.maps.LatLng( 36.265486749984646, 127.287763387328852 ),
	    new kakao.maps.LatLng( 36.265367397348584, 127.287469612290153 ),
	    new kakao.maps.LatLng( 36.265171578602221, 127.287077319205935 ),
	    new kakao.maps.LatLng( 36.264949754239872, 127.28650629357351 ),
	    new kakao.maps.LatLng( 36.264814639450044, 127.285862606357298 ),
	    new kakao.maps.LatLng( 36.2647891326042, 127.285408775360182 ),
	    new kakao.maps.LatLng( 36.264768586524866, 127.284049577083408 ),
	    new kakao.maps.LatLng( 36.264789637960362, 127.283457858252333 ),
	    new kakao.maps.LatLng( 36.26486498881787, 127.282560732395197 ),
	    new kakao.maps.LatLng( 36.264928072010491, 127.282092373537978 ),
	    new kakao.maps.LatLng( 36.265364474552577, 127.280954950416003 ),
	    new kakao.maps.LatLng( 36.265890485913779, 127.279644720249394 ),
	    new kakao.maps.LatLng( 36.26608337326654, 127.279444403459124 ),
	    new kakao.maps.LatLng( 36.266384679979261, 127.279259984596109 ),
	    new kakao.maps.LatLng( 36.26706871619389, 127.278645478223197 ),
	    new kakao.maps.LatLng( 36.267405444418053, 127.278115681621117 ),
	    new kakao.maps.LatLng( 36.267715131776576, 127.27678188042816 ),
	    new kakao.maps.LatLng( 36.268128311364272, 127.275606413615876 ),
	    new kakao.maps.LatLng( 36.268997761455388, 127.274010529703546 ),
	    new kakao.maps.LatLng( 36.269376009140622, 127.273344372951428 ),
	    new kakao.maps.LatLng( 36.269782937948413, 127.272490920474127 ),
	    new kakao.maps.LatLng( 36.270135479805326, 127.271754525566877 ),
	    new kakao.maps.LatLng( 36.270507646466314, 127.271041541195103 ),
	    new kakao.maps.LatLng( 36.270808061578272, 127.270522915762626 ),
	    new kakao.maps.LatLng( 36.270884320429751, 127.270398210054609 ),
	    new kakao.maps.LatLng( 36.271131288318472, 127.269805144096466 ),
	    new kakao.maps.LatLng( 36.271397420549171, 127.269357208006468 ),
	    new kakao.maps.LatLng( 36.27168020949977, 127.268975877379077 ),
	    new kakao.maps.LatLng( 36.271884821567561, 127.268742773065881 ),
	    new kakao.maps.LatLng( 36.272561397272327, 127.267735177346168 ),
	    new kakao.maps.LatLng( 36.272824346428848, 127.267410216723491 ),
	    new kakao.maps.LatLng( 36.273401765385827, 127.266812245513293 ),
	    new kakao.maps.LatLng( 36.273824792685623, 127.266167991922288 ),
	    new kakao.maps.LatLng( 36.274085450896521, 127.265785228122894 ),
	    new kakao.maps.LatLng( 36.274360988038964, 127.26535231747701 ),
	    new kakao.maps.LatLng( 36.274688037517421, 127.264521184060129 ),
	    new kakao.maps.LatLng( 36.274790259463643, 127.264209386294979 ),
	    new kakao.maps.LatLng( 36.275282798599292, 127.262671585504563 ),
	    new kakao.maps.LatLng( 36.275380059707651, 127.262347057336413 ),
	    new kakao.maps.LatLng( 36.275772617415676, 127.260030245453294 ),
	    new kakao.maps.LatLng( 36.276373793110388, 127.258317371796139 ),
	    new kakao.maps.LatLng( 36.27647584471373, 127.258165528010721 ),
	    new kakao.maps.LatLng( 36.276996059738529, 127.257510435009451 ),
	    new kakao.maps.LatLng( 36.277364428959096, 127.257159853834565 ),
	    new kakao.maps.LatLng( 36.278642781232605, 127.255927588717483 ),
	    new kakao.maps.LatLng( 36.279098426027893, 127.255538642985201 ),
	    new kakao.maps.LatLng( 36.280039718011373, 127.254817532739352 ),
	    new kakao.maps.LatLng( 36.280244206740143, 127.254535939143523 ),
	    new kakao.maps.LatLng( 36.281057511786621, 127.254153406539089 ),
	    new kakao.maps.LatLng( 36.281339681869916, 127.254025113582074 ),
	    new kakao.maps.LatLng( 36.282023105856545, 127.253823112346609 ),
	    new kakao.maps.LatLng( 36.282038207332882, 127.253819933464669 ),
	    new kakao.maps.LatLng( 36.28236283647005, 127.253637879069842 ),
	    new kakao.maps.LatLng( 36.2832812062695, 127.252394398613475 ),
	    new kakao.maps.LatLng( 36.283500479537807, 127.252051814874434 ),
	    new kakao.maps.LatLng( 36.284773064544211, 127.250983267629977 ),
	    new kakao.maps.LatLng( 36.284807397218295, 127.250971277512193 ),
	    new kakao.maps.LatLng( 36.285273376673068, 127.250804792382596 ),
	    new kakao.maps.LatLng( 36.285501324502611, 127.250720943277955 ),
	    new kakao.maps.LatLng( 36.285722818179629, 127.25055632906971 ),
	    new kakao.maps.LatLng( 36.286410442106771, 127.249843410225793 ),
	    new kakao.maps.LatLng( 36.286619416283742, 127.249492447997255 ),
	    new kakao.maps.LatLng( 36.286667829588133, 127.249404552986277 ),
	    new kakao.maps.LatLng( 36.287013267223145, 127.248858029195006 ),
	    new kakao.maps.LatLng( 36.287118561800568, 127.248761597137161 ),
	    new kakao.maps.LatLng( 36.287510195962071, 127.248544412938529 ),
	    new kakao.maps.LatLng( 36.287987110728665, 127.248452723532381 ),
	    new kakao.maps.LatLng( 36.288994557978285, 127.248234769256683 ),
	    new kakao.maps.LatLng( 36.290959512575235, 127.246652706569066 ),
	    new kakao.maps.LatLng( 36.291094205871993, 127.246919514011353 ),
	    new kakao.maps.LatLng( 36.303093039982748, 127.259508398645877 ),
	    new kakao.maps.LatLng( 36.309933482944238, 127.258012002069421 ),
	    new kakao.maps.LatLng( 36.310073690481026, 127.258048849682652 ),
	    new kakao.maps.LatLng( 36.345916934279572, 127.278067937475853 ),
	    new kakao.maps.LatLng( 36.415499229487892, 127.287518748251472 ),
	    new kakao.maps.LatLng( 36.418684989807275, 127.291247959161879 ),
	    new kakao.maps.LatLng( 36.434481922293209, 127.340686005374693 ),
	    new kakao.maps.LatLng( 36.474108282026897, 127.363663034746921 ),
	    new kakao.maps.LatLng( 36.474172005196195, 127.363753220940282 ),
	    new kakao.maps.LatLng( 36.474816684677144, 127.363986432174841 ),
	    new kakao.maps.LatLng( 36.474926800437359, 127.363987337196079 ),
	    new kakao.maps.LatLng( 36.475942416574554, 127.36282580842493 ),
	    new kakao.maps.LatLng( 36.475914851134519, 127.36272126148576 ),
	    new kakao.maps.LatLng( 36.475979489023374, 127.362574909711554 ),
	    new kakao.maps.LatLng( 36.476001037128505, 127.362464263958472 ),
	    new kakao.maps.LatLng( 36.476068407899625, 127.362414419093241 ),
	    new kakao.maps.LatLng( 36.47609134720782, 127.362372861534467 ),
	    new kakao.maps.LatLng( 36.47615179281275, 127.36231246222556 ),
	    new kakao.maps.LatLng( 36.476160556711115, 127.362301868706027 ),
	    new kakao.maps.LatLng( 36.476280195178354, 127.362223958370691 ),
	    new kakao.maps.LatLng( 36.476340747994549, 127.362200640333782 ),
	    new kakao.maps.LatLng( 36.476453139306031, 127.362213256382418 ),
	    new kakao.maps.LatLng( 36.476602280653459, 127.362182414514123 ),
	    new kakao.maps.LatLng( 36.476736978072452, 127.362029755729566 ),
	    new kakao.maps.LatLng( 36.476688383386872, 127.361986293137846 ),
	    new kakao.maps.LatLng( 36.476657291525072, 127.361841792160234 ),
	    new kakao.maps.LatLng( 36.476717499255606, 127.361954357597739 ),
	    new kakao.maps.LatLng( 36.476775293669284, 127.361958275982374 ),
	    new kakao.maps.LatLng( 36.476811580472052, 127.361948176632438 ),
	    new kakao.maps.LatLng( 36.476822666915261, 127.361911606155985 ),
	    new kakao.maps.LatLng( 36.476888631860163, 127.361893254420423 ),
	    new kakao.maps.LatLng( 36.476986070747891, 127.361761870969673 ),
	    new kakao.maps.LatLng( 36.477003032143372, 127.361719770898034 ),
	    new kakao.maps.LatLng( 36.476957235289994, 127.361645990486309 ),
	    new kakao.maps.LatLng( 36.477023043261994, 127.361581431050354 ),
	    new kakao.maps.LatLng( 36.477108032370708, 127.361561919568317 ),
	    new kakao.maps.LatLng( 36.477198163513386, 127.361503797389588 ),
	    new kakao.maps.LatLng( 36.477317103019935, 127.361469132412239 ),
	    new kakao.maps.LatLng( 36.477370501914422, 127.361410272337309 ),
	    new kakao.maps.LatLng( 36.477504804262324, 127.361381112972296 ),
	    new kakao.maps.LatLng( 36.477543951174447, 127.361359970155789 ),
	    new kakao.maps.LatLng( 36.477634583718817, 127.361319727393408 ),
	    new kakao.maps.LatLng( 36.477683932476005, 127.36125050607815 ),
	    new kakao.maps.LatLng( 36.477809808679559, 127.361226258717664 ),
	    new kakao.maps.LatLng( 36.47786190134488, 127.361151459658515 ),
	    new kakao.maps.LatLng( 36.477929684875988, 127.361161780470027 ),
	    new kakao.maps.LatLng( 36.481697099575456, 127.36000324097742 ),
	    new kakao.maps.LatLng( 36.481759990111684, 127.359902126361163 ),
	    new kakao.maps.LatLng( 36.481823045320787, 127.359625527425237 ),
	    new kakao.maps.LatLng( 36.482099123403898, 127.359137282887559 ),
	    new kakao.maps.LatLng( 36.482145559735962, 127.359132182129898 ),
	    new kakao.maps.LatLng( 36.482163352773462, 127.359084448462411 ),
	    new kakao.maps.LatLng( 36.482165128202396, 127.359024310027422 ),
	    new kakao.maps.LatLng( 36.482233904462646, 127.35906335738305 ),
	    new kakao.maps.LatLng( 36.482317759410428, 127.359077447644552 ),
	    new kakao.maps.LatLng( 36.482384561586002, 127.359069104478266 ),
	    new kakao.maps.LatLng( 36.482450889515995, 127.359016159905693 ),
	    new kakao.maps.LatLng( 36.482522327061304, 127.358955546475869 ),
	    new kakao.maps.LatLng( 36.48249981640673, 127.358912659968013 ),
	    new kakao.maps.LatLng( 36.482554968660772, 127.358867650725884 ),
	    new kakao.maps.LatLng( 36.482564859800874, 127.358856859630691 ),
	    new kakao.maps.LatLng( 36.489110414092394, 127.365065621658999 ),
	    new kakao.maps.LatLng( 36.488420857617804, 127.368607769435442 ),
	    new kakao.maps.LatLng( 36.488446896385177, 127.368697173059914 ),
	    new kakao.maps.LatLng( 36.488539143385083, 127.368935238250572 ),
	    new kakao.maps.LatLng( 36.488578195494235, 127.369006991122035 ),
	    new kakao.maps.LatLng( 36.489590337849904, 127.368905226393551 ),
	    new kakao.maps.LatLng( 36.490157591815759, 127.370819513540368 ),
	    new kakao.maps.LatLng( 36.49054128406744, 127.371432742453095 ),
	    new kakao.maps.LatLng( 36.49088053562312, 127.371951135240721 ),
	    new kakao.maps.LatLng( 36.49137975881839, 127.372701072041437 ),
	    new kakao.maps.LatLng( 36.492537393258239, 127.374214093233235 ),
	    new kakao.maps.LatLng( 36.495619262824889, 127.377591136955402 ),
	    new kakao.maps.LatLng( 36.497652687427703, 127.378984941150392 ),
	    new kakao.maps.LatLng( 36.498269958417779, 127.379402917846448 ),
	    new kakao.maps.LatLng( 36.498727441485862, 127.379735466417955 ),
	    new kakao.maps.LatLng( 36.49953929874922, 127.380336548376675 ),
	    new kakao.maps.LatLng( 36.499660645040414, 127.380966888682238 ),
	    new kakao.maps.LatLng( 36.499924572526012, 127.382309541583737 ),
	    new kakao.maps.LatLng( 36.500230690026456, 127.383854971043434 ),
	    new kakao.maps.LatLng( 36.499444808597453, 127.385383729011807 ),
	    new kakao.maps.LatLng( 36.495294902081099, 127.391434300908244 ),
	    new kakao.maps.LatLng( 36.495239768065105, 127.391504483869497 ),
	    new kakao.maps.LatLng( 36.494896978089443, 127.391981247375838 ),
	    new kakao.maps.LatLng( 36.494230739016544, 127.392661816131323 ),
	    new kakao.maps.LatLng( 36.493939265996779, 127.392963332864085 ),
	    new kakao.maps.LatLng( 36.493563223735002, 127.393349118822925 ),
	    new kakao.maps.LatLng( 36.492452143509276, 127.395014807889808 ),
	    new kakao.maps.LatLng( 36.492075219019959, 127.395585180981939 ),
	    new kakao.maps.LatLng( 36.491956026199041, 127.395759885352035 ),
	    new kakao.maps.LatLng( 36.491706582484127, 127.39614272100404 ),
	    new kakao.maps.LatLng( 36.491663812485413, 127.396208663633757 ),
	    new kakao.maps.LatLng( 36.49140226679927, 127.396475880354558 ),
	    new kakao.maps.LatLng( 36.491173374104811, 127.396713104171639 ),
	    new kakao.maps.LatLng( 36.49099677582732, 127.396896931894915 ),
	    new kakao.maps.LatLng( 36.490929806800786, 127.396968843514031 ),
	    new kakao.maps.LatLng( 36.490210711610054, 127.397715426154548 ),
	    new kakao.maps.LatLng( 36.489838630062756, 127.398113434304619 ),
	    new kakao.maps.LatLng( 36.48910476571362, 127.398922394446288 ),
	    new kakao.maps.LatLng( 36.487983981374569, 127.400162620116632 ),
	    new kakao.maps.LatLng( 36.487149762235561, 127.401106898812372 ),
	    new kakao.maps.LatLng( 36.486799511658276, 127.401505456681122 ),
	    new kakao.maps.LatLng( 36.48604935237266, 127.402371248436964 ),
	    new kakao.maps.LatLng( 36.485483621796156, 127.403014105904688 ),
	    new kakao.maps.LatLng( 36.484721994427481, 127.403209674857408 ),
	    new kakao.maps.LatLng( 36.482569456708923, 127.403769253469676 ),
	    new kakao.maps.LatLng( 36.481114258138156, 127.404144125539531 ),
	    new kakao.maps.LatLng( 36.479829484613163, 127.404163245177088 ),
	    new kakao.maps.LatLng( 36.477509598210609, 127.404162401482822 ),
	    new kakao.maps.LatLng( 36.476567693193559, 127.404160316634091 ),
	    new kakao.maps.LatLng( 36.474863914947406, 127.403314817189568 ),
	    new kakao.maps.LatLng( 36.456034766481885, 127.402087930813138 ),
	    new kakao.maps.LatLng( 36.456030359723847, 127.40208033062072 ),
	    new kakao.maps.LatLng( 36.454894897776271, 127.400825979025328 ),
	    new kakao.maps.LatLng( 36.41530525648254, 127.419723944720531 ),
	    new kakao.maps.LatLng( 36.378612726400014, 127.409818983226117 ),
	    new kakao.maps.LatLng( 36.378259408928699, 127.409375378634081 ),
	    new kakao.maps.LatLng( 36.37624291504401, 127.403520013495921 ),
	    new kakao.maps.LatLng( 36.376081914451802, 127.402907316739316 ),
	    new kakao.maps.LatLng( 36.373672021818692, 127.39643809381873 ),
	    new kakao.maps.LatLng( 36.37351470217326, 127.395553479929148 ),
	    new kakao.maps.LatLng( 36.373341065854362, 127.394235748883887 ),
	    new kakao.maps.LatLng( 36.372126302278929, 127.392652856062398 ),
	    new kakao.maps.LatLng( 36.371414384132763, 127.392910813509445 ),
	    new kakao.maps.LatLng( 36.371405226887276, 127.392916742536485 ),
	    new kakao.maps.LatLng( 36.371406119115832, 127.392914441505582 ),
	    new kakao.maps.LatLng( 36.371497608323743, 127.392678537012912 ),
	    new kakao.maps.LatLng( 36.371289452147082, 127.387796649226502 ),
	    new kakao.maps.LatLng( 36.371318557845292, 127.387526668771642 ),
	    new kakao.maps.LatLng( 36.371961202095605, 127.377101137053842 ),
	    new kakao.maps.LatLng( 36.371877538551878, 127.37638389499368 ),
	    new kakao.maps.LatLng( 36.364129439969176, 127.365604269701791 ),
	    new kakao.maps.LatLng( 36.363982761733773, 127.365194377089153 ),
	    new kakao.maps.LatLng( 36.358701930277128, 127.35850356472568 ),
	    new kakao.maps.LatLng( 36.357996458642901, 127.358259432573121 ),
	    new kakao.maps.LatLng( 36.329044442744468, 127.335903148076909 )
	];

	// 지도에 표시할 다각형을 생성합니다
	var yuseongguPolygon = new kakao.maps.Polygon({
	    path:yuseongguPolygonPath, // 그려질 다각형의 좌표 배열입니다
	    strokeWeight: 1, // 선의 두께입니다
	    strokeColor: '#ddd', // 선의 색깔입니다
	    strokeOpacity: 0.01, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'longdash', // 선의 스타일입니다
	    fillColor: '#ddd', // 채우기 색깔입니다
	    fillOpacity: 0.01 // 채우기 불투명도 입니다
	});

	// 5 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
	var daedeokguPolygonPath = [
	    new kakao.maps.LatLng( 36.475797773648573, 127.484231405651016  ),
	    new kakao.maps.LatLng( 36.475624123312478, 127.484275831572305  ),
	    new kakao.maps.LatLng( 36.454788541498615, 127.496087725089652 ),
	    new kakao.maps.LatLng( 36.454906933713687, 127.496466179227539  ),
	    new kakao.maps.LatLng( 36.45404556747004, 127.503595921382271  ),
	    new kakao.maps.LatLng( 36.453700914719768, 127.503788566310732  ),
	    new kakao.maps.LatLng( 36.439373132166693, 127.492429658259468  ),
	    new kakao.maps.LatLng( 36.400268880520059, 127.45535273501828  ),
	    new kakao.maps.LatLng( 36.359109781392185, 127.432443840259936  ),
	    new kakao.maps.LatLng( 36.35682449708662, 127.430766539338421  ),
	    new kakao.maps.LatLng( 36.355463887857319, 127.427475598488797  ),
	    new kakao.maps.LatLng( 36.355021417939447, 127.427545592513084  ),
	    new kakao.maps.LatLng( 36.340927031789455, 127.414991837174227  ),
	    new kakao.maps.LatLng( 36.349631324405017, 127.403900139702415  ),
	    new kakao.maps.LatLng( 36.370856451726986, 127.393271910675267  ),
	    new kakao.maps.LatLng( 36.371414384132763, 127.392910813509445  ),
	    new kakao.maps.LatLng( 36.372126302278929, 127.392652856062398  ),
	    new kakao.maps.LatLng( 36.373341065854362, 127.394235748883887  ),
	    new kakao.maps.LatLng( 36.37351470217326, 127.395553479929148  ),
	    new kakao.maps.LatLng( 36.373672021818692, 127.39643809381873  ),
	    new kakao.maps.LatLng( 36.376081914451802, 127.402907316739316 ),
	    new kakao.maps.LatLng( 36.37624291504401, 127.403520013495921 ),
	    new kakao.maps.LatLng( 36.378259408928699, 127.409375378634081 ),
	    new kakao.maps.LatLng( 36.378612726400014, 127.409818983226117 ),
	    new kakao.maps.LatLng( 36.41530525648254, 127.419723944720531 ),
	    new kakao.maps.LatLng( 36.454894897776271, 127.400825979025328 ),
	    new kakao.maps.LatLng( 36.456030359723847, 127.40208033062072 ),
	    new kakao.maps.LatLng( 36.456034766481885, 127.402087930813138  ),
	    new kakao.maps.LatLng( 36.454938873017163, 127.405830886230731 ),
	    new kakao.maps.LatLng( 36.454913081511577, 127.406293681912288 ),
	    new kakao.maps.LatLng( 36.456621588782291, 127.432130889029651 ),
	    new kakao.maps.LatLng( 36.456537310065443, 127.43378961320785 ),
	    new kakao.maps.LatLng( 36.455093606878705, 127.461559291027029 ),
	    new kakao.maps.LatLng( 36.455337144589187, 127.461792546303258 ),
	    new kakao.maps.LatLng( 36.477063977620617, 127.479871115161146 ),
	    new kakao.maps.LatLng( 36.477209988014728, 127.480610729448387 ),
	    new kakao.maps.LatLng( 36.475797773648573, 127.484231405651016 ) 
	];

	// 지도에 표시할 다각형을 생성합니다
	var daedeokguPolygon = new kakao.maps.Polygon({
	    path:daedeokguPolygonPath, // 그려질 다각형의 좌표 배열입니다
	    strokeWeight: 1, // 선의 두께입니다
	    strokeColor: '#ddd', // 선의 색깔입니다
	    strokeOpacity: 0.01, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'longdash', // 선의 스타일입니다
	    fillColor: '#ddd', // 채우기 색깔입니다
	    fillOpacity: 0.01 // 채우기 불투명도 입니다
	});

	// 지도에 대전광역시를 구별로 나누어 표시합니다
	dongguPolygon.setMap(map);
	jungguPolygon.setMap(map);
	seoguPolygon.setMap(map);
	yuseongguPolygon.setMap(map);
	daedeokguPolygon.setMap(map);  
	// 다각형에 마우스다운 이벤트를 등록합니다 
	kakao.maps.event.addListener(dongguPolygon, 'mousedown', function() {
		$("left-menu").slideToggle(1000);
		$(".introContents").toggle(); 
		$("#city").val();
		$("#city").val("동구");
		testjson();
	});   
	kakao.maps.event.addListener(jungguPolygon, 'mousedown', function() {
		$("left-menu").slideToggle(1000);
		$(".introContents").toggle();
		$("#city").val();
		$("#city").val("중구");
		testjson();
	});   
	kakao.maps.event.addListener(seoguPolygon, 'mousedown', function() { 
		$("left-menu").slideToggle(1000);
		$(".introContents").toggle();
		$("#city").val();
		$("#city").val("서구");
		testjson();
	});   
	kakao.maps.event.addListener(yuseongguPolygon, 'mousedown', function() {
		$("left-menu").slideToggle(1000);
		$(".introContents").toggle(); 
		$("#city").val();
		$("#city").val("유성구");
		testjson();
	});   
	kakao.maps.event.addListener(daedeokguPolygon, 'mousedown', function() {
		$("left-menu").slideToggle(1000);
		$(".introContents").toggle(); 
		$("#city").val();
		$("#city").val("대덕구");
		testjson();
	});     
	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath1 = [
		new kakao.maps.LatLng(36.264952562870626, 127.28650283772849), 
		new kakao.maps.LatLng(36.26424778103431, 127.29192801367341), 
		new kakao.maps.LatLng(36.26432357984504, 127.29225657617519), 
		new kakao.maps.LatLng(36.2729730570564, 127.31002903127629), 
		new kakao.maps.LatLng(36.32891177126495, 127.33589695376509), 
		new kakao.maps.LatLng(36.35833978586452, 127.3583620673272), 
		new kakao.maps.LatLng(36.36405674708539, 127.36538286450639), 
		new kakao.maps.LatLng(36.37188309001822, 127.37637901685447), 
		new kakao.maps.LatLng(36.37197093053076, 127.3771009772982), 
		new kakao.maps.LatLng(36.37128557199422, 127.38780362693716), 
		new kakao.maps.LatLng(36.37149494593694, 127.39267710030857), 
		new kakao.maps.LatLng(36.37141307248001, 127.39291069913243), 
		new kakao.maps.LatLng(36.37861552754571, 127.40972198935118),
		new kakao.maps.LatLng(36.41684124878131, 127.41867808176303),
		new kakao.maps.LatLng(36.44308658114603, 127.38831399146541), 
		new kakao.maps.LatLng(36.45489772971251, 127.4008249419556), 
		new kakao.maps.LatLng(36.454941642061755, 127.40583110027674) 
	];

	// 지도에 표시할 선을 생성합니다
	var polyline1 = new kakao.maps.Polyline({
		path: linePath1, // 선을 구성하는 좌표배열 입니다
		strokeWeight: 2, // 선의 두께 입니다
		strokeColor: '#5D5D5D', // 선의 색깔입니다
		strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
		strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath2 = [
		new kakao.maps.LatLng(36.26227314676106, 127.39025462583487),
		new kakao.maps.LatLng(36.27213502711803, 127.37238842463121), 
		new kakao.maps.LatLng(36.29013037397541, 127.36991360614131), 
		new kakao.maps.LatLng(36.29196012080975, 127.37270525489377), 
		new kakao.maps.LatLng(36.291959982009445, 127.37274978241553), 
		new kakao.maps.LatLng(36.34959788214979, 127.40373798291184), 
		new kakao.maps.LatLng(36.37141307248001, 127.39291069913243)
	];

	// 지도에 표시할 선을 생성합니다
	var polyline2 = new kakao.maps.Polyline({
		path: linePath2, // 선을 구성하는 좌표배열 입니다
		strokeWeight: 2, // 선의 두께 입니다
		strokeColor: '#5D5D5D', // 선의 색깔입니다
		strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
		strokeStyle: 'solid' // 선의 스타일입니다
	});

	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath3 = [
		new kakao.maps.LatLng(36.212905303257614, 127.40798892953342), 
		new kakao.maps.LatLng(36.23819255181774, 127.44228886825773), 
		new kakao.maps.LatLng(36.2886053107907, 127.4273035066069), 
		new kakao.maps.LatLng(36.3013227487268, 127.45550683596157), 
		new kakao.maps.LatLng(36.34959788214979, 127.40373798291184) 
	];

	// 지도에 표시할 선을 생성합니다
	var polyline3 = new kakao.maps.Polyline({
		path: linePath3, // 선을 구성하는 좌표배열 입니다
		strokeWeight: 2, // 선의 두께 입니다
		strokeColor: '#5D5D5D', // 선의 색깔입니다
		strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
		strokeStyle: 'solid' // 선의 스타일입니다
	});
	// 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
	var linePath4 = [
		new kakao.maps.LatLng(36.425243791088214, 127.49376947289332), 
		new kakao.maps.LatLng(36.400258600086055, 127.4553366674433), 
		new kakao.maps.LatLng(36.35682556080772, 127.43075943250508), 
		new kakao.maps.LatLng(36.35546758860786, 127.4274709082935), 
		new kakao.maps.LatLng(36.35502576355719, 127.42754090898055), 
		new kakao.maps.LatLng(36.3402490083297, 127.41403497754855) 
	];

	// 지도에 표시할 선을 생성합니다
	var polyline4 = new kakao.maps.Polyline({
		path: linePath4, // 선을 구성하는 좌표배열 입니다
		strokeWeight: 2, // 선의 두께 입니다
		strokeColor: '#5D5D5D', // 선의 색깔입니다
		strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
		strokeStyle: 'solid' // 선의 스타일입니다
	});    
	// 지도에 선을 표시합니다 
	polyline1.setMap(map);  
	// 지도에 선을 표시합니다 
	polyline2.setMap(map); 
	// 지도에 선을 표시합니다 
	polyline3.setMap(map);
	// 지도에 선을 표시합니다 
	polyline4.setMap(map);  
	  
	// 마커를 표시할 위치입니다 
	var Yposition =  new kakao.maps.LatLng(36.364208684399344,127.33102896497279);
	// 마커를 생성합니다
	var Ymarker = new kakao.maps.Marker({
		position: Yposition
	});
	// 마커를 지도에 표시합니다.
	Ymarker.setMap(map);
	// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
	var YiwContent = '<div style="padding:5px;">유성구</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	// 인포윈도우를 생성합니다
	var Yinfowindow = new kakao.maps.InfoWindow({
		content : YiwContent
	});
	// 마커에 마우스오버 이벤트를 등록합니다
	kakao.maps.event.addListener(Ymarker, 'mouseover', function() {
		// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
		Yinfowindow.open(map, Ymarker);
	});
	// 마커에 마우스아웃 이벤트를 등록합니다
	kakao.maps.event.addListener(Ymarker, 'mouseout', function() {
		// 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
		Yinfowindow.close();
	});

	// 마커를 표시할 위치입니다 
	var Sposition =  new kakao.maps.LatLng(36.34736408942397, 127.37144017288158);
	// 마커를 생성합니다
	var Smarker = new kakao.maps.Marker({
		position: Sposition
	});
	// 마커를 지도에 표시합니다.
	Smarker.setMap(map);
	// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
	var SiwContent = '<div style="padding:5px;">서구</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	// 인포윈도우를 생성합니다
	var Sinfowindow = new kakao.maps.InfoWindow({
		content : SiwContent
	});
	// 마커에 마우스오버 이벤트를 등록합니다
	kakao.maps.event.addListener(Smarker, 'mouseover', function() {
		// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
		Sinfowindow.open(map, Smarker);
	});
	// 마커에 마우스아웃 이벤트를 등록합니다
	kakao.maps.event.addListener(Smarker, 'mouseout', function() {
		// 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
		Sinfowindow.close();
	});

	// 마커를 표시할 위치입니다 
	var Jposition =  new kakao.maps.LatLng(36.32147830341495, 127.41639677617046);
	// 마커를 생성합니다
	var Jmarker = new kakao.maps.Marker({
		position: Jposition
	});
	// 마커를 지도에 표시합니다.
	Jmarker.setMap(map);
	// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
	var JiwContent = '<div style="padding:5px;">중구</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	// 인포윈도우를 생성합니다
	var Jinfowindow = new kakao.maps.InfoWindow({
		content : JiwContent
	});
	// 마커에 마우스오버 이벤트를 등록합니다
	kakao.maps.event.addListener(Jmarker, 'mouseover', function() {
		// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
		Jinfowindow.open(map, Jmarker);
	});
	// 마커에 마우스아웃 이벤트를 등록합니다
	kakao.maps.event.addListener(Jmarker, 'mouseout', function() {
		// 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
		Jinfowindow.close();
	});

	// 마커를 표시할 위치입니다 
	var Dposition =  new kakao.maps.LatLng(36.336170673271575, 127.45978069471111);
	// 마커를 생성합니다
	var Dmarker = new kakao.maps.Marker({
		position: Dposition
	});
	// 마커를 지도에 표시합니다.
	Dmarker.setMap(map);
	// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
	var DiwContent = '<div style="padding:5px;">동구</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	// 인포윈도우를 생성합니다
	var Dinfowindow = new kakao.maps.InfoWindow({
		content : DiwContent
	});
	// 마커에 마우스오버 이벤트를 등록합니다
	kakao.maps.event.addListener(Dmarker, 'mouseover', function() {
		// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
		Dinfowindow.open(map, Dmarker);
	});
	// 마커에 마우스아웃 이벤트를 등록합니다
	kakao.maps.event.addListener(Dmarker, 'mouseout', function() {
		// 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
		Dinfowindow.close();
	});

	// 마커를 표시할 위치입니다 
	var Doposition =  new kakao.maps.LatLng(36.336170673271575, 127.45978069471111);
	// 마커를 생성합니다
	var Domarker = new kakao.maps.Marker({
		position: Doposition
	});
	// 마커를 지도에 표시합니다.
	Domarker.setMap(map);
	// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
	var DoiwContent = '<div style="padding:5px;">동구</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	// 인포윈도우를 생성합니다
	var Doinfowindow = new kakao.maps.InfoWindow({
		content : DoiwContent
	});
	// 마커에 마우스오버 이벤트를 등록합니다
	kakao.maps.event.addListener(Domarker, 'mouseover', function() {
		// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
		Doinfowindow.open(map, Domarker);
	});
	// 마커에 마우스아웃 이벤트를 등록합니다
	kakao.maps.event.addListener(Domarker, 'mouseout', function() {
		// 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
		Doinfowindow.close();
	});

	// 마커를 표시할 위치입니다 
	var Daeposition =  new kakao.maps.LatLng(36.37581733494455, 127.42203532570515);
	// 마커를 생성합니다
	var Daemarker = new kakao.maps.Marker({
		position: Daeposition
	});
	// 마커를 지도에 표시합니다.
	Daemarker.setMap(map);
	// 마커에 커서가 오버됐을 때 마커 위에 표시할 인포윈도우를 생성합니다
	var DaeiwContent = '<div style="padding:5px;">대덕구</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
	// 인포윈도우를 생성합니다
	var Daeinfowindow = new kakao.maps.InfoWindow({
		content : DaeiwContent
	});
	// 마커에 마우스오버 이벤트를 등록합니다
	kakao.maps.event.addListener(Daemarker, 'mouseover', function() {
		// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
		Daeinfowindow.open(map, Daemarker);
	});
	// 마커에 마우스아웃 이벤트를 등록합니다
	kakao.maps.event.addListener(Daemarker, 'mouseout', function() {
		// 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
		Daeinfowindow.close();
	});
	// 마우스 드래그와 모바일 터치를 이용한 지도 이동을 막는다
	map.setDraggable(false);		
	// 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
	map.setZoomable(false);

	var isDisabled = false;
