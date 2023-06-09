window.onload = init;

function init() {
	getSales();
}

function getSales() {
    var url = "bookstore.json";
	var request = new XMLHttpRequest();
	request.open("GET", url);
	request.onload = function(){
		if(request.status == 200){
			updateSales(request.responseText);
		}
	};
	request.send(null);
}

function updateSales(responseText) {
    var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(responseText);
	for(var i = 0; i< sales.length; i++){
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + "[저자명 : " + sale.author + 
	"] 은 " + sale.sales + "권을 팔았습니다.";
		salesDiv.appendChild(div);
	}
}