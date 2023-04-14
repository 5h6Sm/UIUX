// //페이지 로딩 후 실행된 수 있도록 onload에 함수지정
// window.onload = init;

// function init(){
//     let button = document.getElementById("addButton");
//     button.onclick = handleAddButtonClick;

//     let button2 = document.getElementById("deleteButton");
//     button2.onclick = function(e){
//         removeAll();
//     };
//     loadPlaylist();
// }

// function removeAll(){
//     if(confirm("모두 지울까요?")){
//         localStorage.clear();
//         let ul = document.getElementById("playlist");
//         ul.innerHTML = "";
//     }
// }

// function handleAddButtonClick(e){   

//     let songName = document.getElementById("songTextInput").value;
//     if(songName == ""){
//         alert("곡을 입력하세요 : ");
//     }else{
//         let playlistArray = getStoreArray("playlist");
//         playlistArray.push(songName);
//         localStorage.setItem("playlist", JSON.stringify(playlistArray));
//     }
//     // alert("songName : " + songName);
//     addSongList(playlistArray);
// }

// function loadPlaylist(){
//     let playlistArray = getStoreArray("playlist");

//     addSongList(playlistArray);

// }

// function getStoreArray(key){
//     let playlistArray = localStorage.getItem(key);
//     if(playlistArray == null || playlistArray == ""){
//         playlistArray = new Array();
//     }else{
//         playlistArray = JSON.parse(playlistArray);
//     }
//     return playlistArray;
// }

// function addSongList(songList){
//     let ul = document.getElementById("playlist");

//     for(let i = 0; i<songList.length; i++){
//         let li = document.createElement("li");
//         li.innerHTML = songList[i];
//         ul.appendChild(li);
//     }
    
// }

//페이지 로딩 후 실행될 수 있도록 onload에 함수 지정
// onload는 페이지가 로딩되면 실행되는 이벤트
// init 함수는 페이지가 로딩되면 실행되는 함수
// init 함수는 이벤트 핸들러를 등록하는 함수
window.onload = init;

function init() {
    //곡 추가버튼
    let button = document.getElementById("addButton");
    button.onclick = handleAddButtonClick;

    // 곡 삭제버튼
    let button2 = document.getElementById("deleteButton");
    button2.onclick = function(e) {
        removeAll();
    };

    loadPlaylist();
}

function removeAll() {
    if (confirm("모두 지울까요?")) {
        localStorage.clear();
        let ul = document.getElementById("playlist");
        ul.innerHTML = "";
    }
}

function handleAddButtonClick(e) {
    let songName = document.getElementById("songTextInput").value;

    if (songName == "") {
        alert("곡을 입력하세요.");
    } else {
        //localStorage에 넣기
        let playlistArray = getStoreArray("playlist");
        playlistArray.push(songName);
        localStorage.setItem("playlist", JSON.stringify(playlistArray));

        addSongList([songName]);
    }
    alert("songName : " + songName);
}

function loadPlaylist() {
    let playlistArray = getStoreArray("playlist");

    addSongList(playlistArray);
}

function addSongList(songlist) {
    let ul = document.getElementById("playlist");
    for (let i = 0; i < songlist.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = songlist[i];
        ul.appendChild(li);
    }
}

//return 값은 항상 배열로 나오게 해주기. 
function getStoreArray(key) {
    let playlistArray = localStorage.getItem(key);
    if (playlistArray == null || playlistArray == "") {
        playlistArray = new Array();
    } else {
        playlistArray = JSON.parse(playlistArray);
    }
    return playlistArray;
}