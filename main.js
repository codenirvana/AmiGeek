var qIndex, index, aString, maxQ;
maxQ = 9;
qIndex = 0;
index = 0;
aString = "";

var ques = [
	"What kind of development you do?",
	"Your first program was?",	//skip
	"You believe in open source?",
	"You love to programming?", //skip
	"You have more interest in...",
	"Google vs Duck Duck Go", //skip
	"What will you prefer?",
	"Social Network vs Email", //skip
	"What Operating Systems Do You Use? "
];

var ans1 = [
	"Software",
	"Hello World",
	"Yes",
	"Yes",
	"Hardware",
	"Google",
	"PHP",
	"Social Network",
	"Windows"
];

var ans2 = [
	"Web",
	"Something else",
	"No",
	"Yes :)",
	"Software",
	"Duck Duck Go",
	"Python",
	"Email",
	"Linux"
];

var geekName = [
	"Linus Torvalds",
	"Dennis Ritchie",
	"Bill Gates",
	"Steve Jobs",
	"Steve Wozniak",
	"Mark Zuckerberg",
	"Tim Berners-Lee"
];

var geekInfo = [
	"Linus Benedict Torvalds is a Finnish American software engineer, who was the principal force behind the development of the Linux kernel that became the most popular kernel for operating systems.",
	"Dennis MacAlistair Ritchie was an American computer scientist. He created the C programming language and, with long-time colleague Ken Thompson, the Unix operating system.",
	"William Henry 'Bill' Gates III is an American business magnate, philanthropist, investor, computer programmer, and inventor.",
	"Steven Paul 'Steve' Jobs was an American entrepreneur, marketer, and inventor, who was the cofounder, chairman, and CEO of Apple Inc.",
	"Stephen Gary 'Steve' Wozniak, known as 'Woz', is an American inventor, electronics engineer, and computer programmer who co-founded Apple Computer with Steve Jobs and Ronald Wayne.",
	"Mark Elliot Zuckerberg is an American computer programmer and Internet entrepreneur. He is best known as one of five co-founders of the social networking website Facebook. Zuckerberg is the chairman and chief executive of Facebook, Inc.",
	"Sir Timothy John 'Tim' Berners-Lee, also known as TimBL, is an English computer scientist, best known as the inventor of the World Wide Web."
];

function redirect (url) {
	window.location = url;
}

function optionClick (ans) {
	if(qIndex%2==0){
		console.log(qIndex);
		aString+=ans;
		index++;
	}
	qIndex++;
	if(qIndex == maxQ){
		redirect("result.html?"+generateResult(aString));
	} else{
		generate();
	}
}

function generate () {
	var q = document.getElementById('ques');
	var a1 = document.getElementById('ans1');
	var a2 = document.getElementById('ans2');
	q.innerHTML=ques[qIndex];
	a1.value=ans1[qIndex];
	a2.value=ans2[qIndex];
}

function generateResult (answers) {
	if( answers=="11110" || answers=="11000" || answers=="01000" ) return 1;
	else if( answers=="11111" || answers=="01010" ) return 2;
	else if( answers=="10011" || answers=="00111" || answers=="00101" ) return 3;
	else if( answers=="10100" || answers=="00110" || answers=="00000" ) return 4;
	else if( answers=="10101" ) return 5;
	else if( answers=="11101" || answers=="10010" || answers=="01111" ) return 6;
	else return 7;
}

function showResult () {
	var query = window.location.search.substring(1); 
	var name = document.getElementById("geekName");
	var info = document.getElementById("geekInfo");
	var img = document.getElementById("geekImage");
	name.innerHTML = geekName[query-1];
	img.src = "img/"+query+".png";
	img.alt = geekName[query-1];
	info.innerHTML = geekInfo[query-1];
}