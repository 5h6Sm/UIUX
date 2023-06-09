// window.onload = init;

// var lastReportTime = "";

// function init() {
// 	var interval = setInterval(handleRefresh, 3000);
// 	handleRefresh();
// }

// function handleRefresh(){
// 	console.log("here");
// 	var url = "http://gumball.wickedlysmart.com" +
// 	"?callback=updateSales" +
// 	"&lastreporttime=" + lastReportTime +
// 	"&random=" + (new Date()).getTime();

// 	var newScriptElement = document.createElement("script");
// 	newScriptElement.setAttribute("src", url);
// 	newScriptElement.setAttribute("id", "json");
// 	var oldScriptElement = document.getElementById("json");
// 	var head = document.getElementsByTagName("head")[0];
// 	if(oldScriptElement == null){
// 		head.appendChild(newScriptElement);
// 	}
// 	else{
// 		head.replaceChild(newScriptElement, oldScriptElement);
// 	}
// }

// function getSales() {
//     var url = "sales.json";
// 	var request = new XMLHttpRequest();
// 	request.open("GET", url);
// 	request.onload = function(){
// 		if(request.status == 200){
// 			updateSales(request.responseText);
// 		}
// 	};
// 	request.send(null);
// }

// function updateSales(responseText) {
//     var salesDiv = document.getElementById("sales");
// 	var sales = JSON.parse(responseText);
// 	for(var i = 0; i<sales.length; i++){
// 		var sale = sales[i];
// 		var div = document.createElement("div");
// 		div.setAttribute("class", "saleItem");
// 		div.innerHTML = sale.name + "에서 검볼을 " + sale.sales + "개 팔았습니다.";
// 		if(salesDiv.childElementCount == 0){
// 			salesDiv.appendChild(div);
// 		}else{
// 			salesDiv.insertBefore(div, salesDiv.firstChild);
// 		}
// 	}
// 	if(sales.length>0){
// 		lastReportTime = sales[sales.length-1].time;
// 	}
	
// 	// for(var i = 0; i< sales.length; i++){
// 	// 	var sale = sales[i];
// 	// 	var div = document.createElement("div");
// 	// 	div.setAttribute("class", "saleItem");
// 	// 	div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
// 	// 	salesDiv.appendChild(div);
// 	// }
// }
/* mightygumball.js */
/*
 * JSON 파일의 내용을 JSONP로 가져옴
 * 3초마다 업데이트 됨
 *
 */

var lastReportTime = 0;

window.onload = init;
//추가1
function init() {
   var interval = setInterval(handleRefresh, 3000);
   handleRefresh();
}

function handleRefresh() {
   console.log("here");
   var url = "http://gumball.wickedlysmart.com" + "?callback=updateSales"
      + "&lastreporttime=" + lastReportTime;
      + "&random=" + (new Date()).getTime;
   var newScriptElement = document.createElement("script");
   newScriptElement.setAttribute("src", url);
   newScriptElement.setAttribute("id", "jsonp");
   var oldScriptElement = document.getElementById("jsonp");
   var head = document.getElementsByTagName("head")[0];
   if (oldScriptElement == null) {
      head.appendChild(newScriptElement);
   }
   else {
      head.replaceChild(newScriptElement, oldScriptElement);
   }
   //updateSales 
}
//추가2
function updateSales(sales) {
   var salesDiv = document.getElementById("sales");
   for (var i = 0; i < sales.length; i++) {
      var sale = sales[i];
      var div = document.createElement("div");
      div.setAttribute("class", "saleItem");
      div.innerHTML = sale.name + "에서 검볼을 " + sale.sales + "개 팔았습니다";
      // salesDiv.appendChild(div)
      if (salesDiv.childElementCount == 0) {
         salesDiv.appendChild(div);
      }
      else {
         salesDiv.insertBefore(div, salesDiv.firstChild);
      }
   }
   if (sales.length > 0) {
      lastReportTime = sales[sales.length - 1].time;
   }
}

