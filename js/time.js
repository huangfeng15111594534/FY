

var hour = new Date().getHours();
var timeStr=null;
if (hour>=23) {
	timeStr='晚上了，'
	
} else if(hour>=17){
	timeStr='傍晚好，'
	
}else if(hour>=13){
	timeStr='下午好，'
	
}else if(hour>=11){
	timeStr='中午好，'
	
}else if(hour>=8){
	timeStr='上午好，'
	
}else if(hour>=5){
	timeStr='早上好，'
	
}else if(hour>=0){
	timeStr='夜深了，'
	
}



