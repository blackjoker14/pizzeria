const menu_list_array = ["Farm House", "Peppy Paneer", "Mexican Green Wave", "CHEESE N CORN",];




function getmenu(){
var htmldata="";
menu_list_array.sort();
        for (let i = 0; i < menu_list_array.length; i++) {
  htmldata += menu_list_array[i] + "<br>";
}
document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}
//works
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
        // use the sort function as - menu_list_array.sort();
        var htmldata="";
        for (let i = 0; i < menu_list_array.length; i++) {
            htmldata += "<img src='pizzaImg.png' width='100px'>"+menu_list_array[i] + "<br>";
          }
         
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
