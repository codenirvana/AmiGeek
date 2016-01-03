var data = {
	questions: [{
			question: "What kind of development you do?",
			options: [ "Software" , "Web" ]
		}, {
			question: "Your first program was?",
			options: [ "Hello World" , "Something else" ]
		}, {
			question: "You believe in open source?",
			options: [ "Yes" , "No" ]
		}, {
			question: "You love to programming?",
			options: [ "Yes" , "Yes :)" ]
		}, {
			question: "You have more interest in...",
			options: [ "Hardware" , "Software" ]
		}, {
			question: "Google vs Duck Duck Go",
			options: [ "Google" , "Duck Duck Go" ]
		}, {
			question: "What will you prefer?",
			options: [ "PHP" , "Python" ]
		}, {
			question: "Social Network vs Email",
			options: [ "Social Network" , "Email" ]
		}, {
			question: "What Operating Systems Do You Use?",
			options: [ "Windows", "Linux" ]
		}],
	geeks: [
		{
			name: "Linus Torvalds",
			info: "Linus Benedict Torvalds is a Finnish American software engineer, who was the principal force behind the development of the Linux kernel that became the most popular kernel for operating systems."
		}, {
			name: "Dennis Ritchie",
			info: "Dennis MacAlistair Ritchie was an American computer scientist. He created the C programming language and, with long-time colleague Ken Thompson, the Unix operating system."
		}, {
			name: "Bill Gates",
			info: "William Henry 'Bill' Gates III is an American business magnate, philanthropist, investor, computer programmer, and inventor."
		}, {
			name: "Steve Jobs",
			info: "Steven Paul 'Steve' Jobs was an American entrepreneur, marketer, and inventor, who was the cofounder, chairman, and CEO of Apple Inc."
		}, {
			name: "Steve Wozniak",
			info: "Stephen Gary 'Steve' Wozniak, known as 'Woz', is an American inventor, electronics engineer, and computer programmer who co-founded Apple Computer with Steve Jobs and Ronald Wayne."
		}, {
			name: "Mark Zuckerberg",
			info: "Mark Elliot Zuckerberg is an American computer programmer and Internet entrepreneur. He is best known as one of five co-founders of the social networking website Facebook. Zuckerberg is the chairman and chief executive of Facebook, Inc."
		}, {
			name: "Tim Berners-Lee",
			info: "Sir Timothy John 'Tim' Berners-Lee, also known as TimBL, is an English computer scientist, best known as the inventor of the World Wide Web."
		}]
};

var qIndex = 0,
	index = 0,
	aString = "",
	maxQ = 9,
	q = document.getElementById('ques'),
	opt1 = document.getElementById('opt1'),
	opt2 = document.getElementById('opt2');

function generate(){
	q.innerHTML= data.questions[qIndex].question;
	opt1.value= data.questions[qIndex].options[0];
	opt2.value= data.questions[qIndex].options[1];
}

function optionClick(ans) {
	if(qIndex%2==0){
		aString+=ans;
		index++;
	}
	qIndex++;
	if(qIndex == maxQ){
		redirect( "result.html?" + generateResult(aString) );
	} else{
		generate();
	}
}

function generateResult(answers) {
	if( answers=="11110" || answers=="11000" || answers=="01000" ) return 0;
	else if( answers=="11111" || answers=="01010" ) return 1;
	else if( answers=="10011" || answers=="00111" || answers=="00101" ) return 2;
	else if( answers=="10100" || answers=="00110" || answers=="00000" ) return 3;
	else if( answers=="10101" ) return 4;
	else if( answers=="11101" || answers=="10010" || answers=="01111" ) return 5;
	else return 6;
}

function showResult() {
	var id = window.location.search.substring(1);
	var Geeks = data.geeks;
	var totalGeeks = Object.keys(Geeks).length - 1;
	if( id > totalGeeks || id < 0 || !id ) redirect("index.html");
	var name = document.getElementById("geekName");
	var info = document.getElementById("geekInfo");
	var img = document.getElementById("geekImage");
	name.innerHTML = Geeks[id].name;
	img.src = "img/"+id+".png";
	img.alt =Geeks[id].name;
	info.innerHTML = Geeks[id].info;
}

function redirect(url) {
	window.location = url;
}
