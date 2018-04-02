
var right = 0; // 正确个数
let i = 1; // 题目的序号

let data = [
	{
		result: 1,
		answer: " AI的全称是？",
		question: ["Artificial Intelligence","Artificial Intellectual","Artificial Intelligent","Artificial Internet"]
	},
	{
		result: 3,
		answer: "机器人能力标准不包括",
		question: ["智能","机能","动能","物理能"]
	},
	{
		result: 2,
		answer: "机器人三原则是谁提出来的?",
		question: ["平井一夫","阿西莫夫","森政弘","伊坂幸太郎"]
	},
	{
		result: 1,
		answer: "日本索尼公司推出的机器狗叫做",
		question: ["SIBO","AIBO","ASIBO","QRIO"]
	},
	{
		result: 4,
		answer: "我国是世界第几大能源生产和第几大能源消费国?",
		question: ["第二；第四","第三；第四","第四；第二","第三；第二"]
	},
	{
		result: 1,
		answer: "以下哪个手机没有语音助手",
		question: ["索尼","三星","苹果","小米"]
	},
	{
		result: 3,
		answer: "21世纪的主要能源是什么",
		question: ["潮汐能","核能","太阳能","水能"]
	},
	{
		result: 2,
		answer: "“人工智能”一词最早是什么是什么时候提出来的？",
		question: ["1948年","1956年","1973年","1988年"]
	},
	{
		result: 3,
		answer: "人工智能历史上第一个战胜人类的棋类游戏是？",
		question: ["国际象棋","围棋","西洋双陆棋","四国军棋"]
	},
	{
		result: 1,
		answer: ".机器学习中长期记忆单元的英文简称是？",
		question: [" LTM","LSTM","STM","ATM"]
	},
	{
		result: 1,
		answer: "亚里士多德常说 “自然界选择最短的道路”，这在机器学习中常被称作？",
		question: ["奥卡姆剃刀原理","没有免费的午餐","经验风险最小化原理","炼丹原理"]
	},
	{
		result: 1,
		answer: "卷积神经网络起源于哪个任务？",
		question: ["图像识别","机器翻译","个性化推荐","语音识别"]
	},
	{
		result: 1,
		answer: "OpenAI设计的人工智能在以下哪个电子游戏中击败了人类顶级玩家？",
		question: ["Dota","LoL","炉石传说","守望先锋"]
	},
	{
		result: 3,
		answer: "机器学习历史上著名算法SVM，从算法提出到算法标准化，经历了多少年迭代？",
		question: [" 10年","20年","30年","40年"]
	},
	{
		result: 1,
		answer: "人工智能之父艾伦.图灵在二战时期破解的密码机名称是？",
		question: ["Enigma","Sigaba","Typex","Siemens"]
	},
	{
		result: 1,
		answer: "现在在机器学习中常用的长短时记忆模型（Long Short Term Memory）是在哪一年提出的？",
		question: ["2017","2007","1997","1987"]
	},
	{
		result: 1,
		answer: "AlphaGo Zero比AlphaGo多了以下哪项技术的支持？",
		question: ["残差神经网络","生成式对抗网络","并行计算","增强学习"]
	},
	{
		result: 3,
		answer: ".以下哪部电影没有涉及人工智能题材？",
		question: ["鹰眼","她.Her","超体","机械公敌"]
	},
	{
		result: 1,
		answer: "“AI+”概念是由谁提出的？",
		question: ["邱楠","约翰.麦卡锡","田中孝明","艾伦·图灵"]
	},
	{
		result: 1,
		answer: "下列哪个缩写是自然语言处理的？",
		question: ["NLP","CNN","CAN","GAN"]
	},
	{
		result: 3,
		answer: " SHRDLU是Terry Winograd在（）写的？",
		question: ["哈佛大学","剑桥大学","麻省理工学院","牛津大学"]
	},
	{
		result: 3,
		answer: "以下哪个语音助手是微软家的？",
		question: ["Siri","waston","小冰","小爱"]
	},
	{
		result: 4,
		answer: "人工智能表现出了三种类型的创造力。以下不是人工智能表现出的创造力是？",
		question: ["组合型","探索型","变革型","创新型"]
	},
	{
		result: 1,
		answer: " 数字信号不随着时间变化信号，它是由（）",
		question: ["0或1","模拟","数字","字母"]
	},
	{
		result: 2,
		answer: "子询公众号推文中，第一期推荐算法介绍了几种算法？",
		question: ["2","3","4","5"]
	},
	{
		result: 1,
		answer: "第一起自动驾驶汽车致死事故是发生在（）",
		question: ["美国亚利桑那州","美国阿拉斯加州","美国加利福尼亚州","美国阿拉巴马州"]
	},
	{
		result: 1,
		answer: "能量守恒与转换定律又称热力学第（）定律。",
		question: ["一","二"," 三","四"]
	},
	{
		result: 2,
		answer: "《机器人总动员》是（ ）制作的",
		question: ["日本","美国"," 英国","法国"]
	},
	{
		result: 1,
		answer: "（）微软公司推出Microsoft Robotics Studio，机器人模块化、平台统一化的趋势越来越明显",
		question: ["2006","2007"," 2016","2017"]
	},
	{
		result: 4,
		answer: "子询AILab原创文案中（自拍真相之变脸滤镜）的滤镜贴图是用了什么技术（）",
		question: ["VR","NLP"," PHP","AR"]
	},
	{
		result: 3,
		answer: "推出中国首个智能投资机器人的公司是（）",
		question: ["百度","阿里","中科招商","九鼎投资"]
	},
	{
		result: 3,
		answer: "2018年3月6日，（）大学正式宣布成立人工智能学院？",
		question: ["清华大学","武汉大学"," 南京大学","浙江大学"]
	},
	{
		result: 1,
		answer: "国际上用户数仅次于比特币的第二大虚拟货币是（ ）",
		question: ["狗币","莱特币"," 以太币","火币"]
	},
	{
		result: 1,
		answer: "有自己的量子计算研究所的公司是()",
		question: ["百度","阿里"," 腾讯","Xmind"]
	}

];

let count = data.length;

// 从数组中取出指定个数且不重复的元素


$(function() {
	$(".content").hide();

	//let picture = $(".picture");
	let username = $(".username");
	let sports_piture = $(".sports_piture");
	
	let list = $(".list li");

	/*更改用户头像*/
	//let arrImg = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
	/*用户名称*/
	//let arrName = ["Awen","Tom","Jeery","Jack"];
	//let random = parseInt(Math.random()*(arrImg.length-1));

	//let imgSrc = "./images/"+arrImg[random];
	
	//picture.css({backgroundImage:"url("+imgSrc+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"5.6rem 5.6rem"})
	let paramter = window.location.search;
	console.log();
	// 用户名
	username.text(decodeURI(paramter.substr(1).split("=")[1]));

	/*倒计时效果 3-2-1*/
	changeImage();


	// 初始化选一次题目
	
	switchAnswer(data);

	
	$(".list li").click(function() {

		let _this = $(this);
		let isRight = _this.find("span").attr("data-res") == 'success';
		
		if(data.length > 0) {
			let temp = parseInt(Math.random()*(data.length-1)); // 重新产生随机数

			if(isRight) {
				_this.addClass("success");

				right++;
				console.log(right);
			} else {
				_this.addClass("error");
			}
			setTimeout(function() {
				switchAnswer(data,(_this.index()));
			},100);
		}

		// 这里判读我们题目是不是都结束了 data是80道题目
		if(data.length <= 0) {
			
			$(".content").hide();
				// 结束
				// 出现挑战失败的界面
			$(".page11").fadeIn();

		}
		count--; // 题目个数
	});

});
/**
* @parameter: dataTemp: 答题的数据
* @parameter: index: 用户点击的那个元素
* @parameter: dataRandom: 随机数--抽题目
*/

// function switchAnswer(dataTemp,dataRandom,index) { 15.09分
function switchAnswer(dataTemp,index) {
	// debugger;
	let serial_number = $(".serial_number").text("Q"+(i++));
	let dataRandom = parseInt(Math.random()*(data.length-1));
	
	let list = $(".list li");
	let dataNow = dataTemp[dataRandom];


	// 题目的序号
	
	let question_title = $(".question_title").text(dataNow.answer);;

	//先清除所有的样式
	list.removeClass("error success");

	for(let i=0; i< list.length; i++) {
		let tempContent = '';
		if((i+1) === data[dataRandom].result){
			tempContent = "<span data-res='success'>"+ dataNow.question[i] +"</span>";
		}else{
			tempContent = "<span data-res='error'>"+ dataNow.question[i] +"</span>";
		}

		list.eq(i).html(tempContent);

	}


	let temp = dataTemp[dataRandom].result; // 拿到正确答案

	data.splice(dataRandom,1); // 将这个元素删除
}

function countdownSecond() {
	let aim = 80;
	let startTime = aim; // 80s的时间
	let lastTime = 0; // 结束时间
	let timer;
	let flag = false; // 表示游戏结束的信号
	$(".second").text(startTime);

	clearInterval(timer);

	timer = setInterval(function() {
		$(".second").text(startTime--);
		// right 就是答题对的个数，少于那个总的个数
		if(startTime === 0 && right <= 80) { // 时间到了--清除定时器
			clearInterval(timer);
			$(".content").hide();
			// 结束
			// 出现挑战失败的界面
			$(".page11").fadeIn();
		}

		if(lastTime === 80) { // 说明80秒过了
			clearInterval(timer);
		}

		if(right.length === data.length-1) { // 题目全部答对 --清除定时器
			clearInterval(timer);
		}
		if(count === 0) {// 题目全部答完
			clearInterval(timer);
		}

		// 用时
		$("#nopasstime").text(aim-startTime);
		$("#questionsum").text(right);// 答对多少道题目
	}, 1000);

}



function changeImage() {
	let imgArr = ["./images/1.png","./images/2.png","./images/3.png"]
	//倒计时  改变图片的source
	let time = 2;
	let timer;
	clearInterval(timer);
	timer = setInterval(function() {
		$(".countdown").css("background-image", "url("+imgArr[time]+")");
		time--;
		//如果3秒过后，那就停止计时器
		if(time<-1) {
			time = 0;
			clearInterval(timer);

			$(".countdown").remove();
			$(".sports_piture").hide();
			$(".content").fadeIn();
			
			// 8秒钟走完 -- 开始换一次题目
			countdownSecond();
		}
	}, 1000);

	
}

/**
	1、 先走 图片的倒计时 3-2-1
	2、 在图片倒计时的函数后面街上countdownSecond() 倒计时 80s
	3、


	结束游戏的规则
	1、时间结束  从80->0
	2、在时间内，答完80道题目
	3、

*/