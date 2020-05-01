getActivity();

$(".save").on("click", saveActivity)

function saveActivity () {
savedHour= ($(this).attr("hour"));
$("#text" + savedHour).val()
console.log($("#text" + savedHour).val())
if($("#text" + savedHour).val()===""){
    alert("No activity to be saved")
}
else
localStorage.setItem("activity"+savedHour, $("#text" + savedHour).val())
}

function getActivity (){

    var activity9AM =localStorage.getItem("activity9AM")
    $("#text9AM").text(activity9AM)

    var activity10AM =localStorage.getItem("activity10AM")
    $("#text10AM").text(activity10AM)

    var activity11AM =localStorage.getItem("activity11AM")
    $("#text11AM").text(activity11AM)

    var activity12PM =localStorage.getItem("activity12PM")
    $("#text12PM").text(activity12PM)

    var activity1PM =localStorage.getItem("activity1PM")
    $("#text1PM").text(activity1PM)

    var activity2PM =localStorage.getItem("activity2PM")
    $("#text2PM").text(activity2PM)

    var activity3PM =localStorage.getItem("activity3PM")
    $("#text3PM").text(activity3PM)

    var activity4PM =localStorage.getItem("activity4PM")
    $("#text4PM").text(activity4PM)

    var activity5PM =localStorage.getItem("activity5PM")
    $("#text5PM").text(activity5PM) 
}

var time = new Date().getHours();
    if(time<9){
        $(".a").css("background-color", "#77dd77")
    }else if(time===9){
        $(".color9").css("background-color","#ff6961")
        $(".color10, .color11, .color12, .color13, .color14, .color15, .color16, .color17").css("background-color", "#77dd77")
    }else if(time===10){
        $(".color10").css("background-color","#ff6961")
        $(".color9").css("background-color", "#d3d3d3")
        $(".color11, .color12, .color13, .color14, .color15, .color16, .color17").css("background-color", "#77dd77")
    }else if(time===11){
        $(".color11").css("background-color","#ff6961")
        $(".color9, .color10").css("background-color", "#d3d3d3")
        $(".color12, .color13, .color14, .color15, .color16, .color17").css("background-color", "#77dd77")
    }else if(time===12){
        $(".color12").css("background-color","#ff6961")
        $(".color, .color10, .color11").css("background-color", "#d3d3d3")
        $(".color13, ..color14, .color15, .color16, .color17").css("background-color", "#77dd77")
    }else if(time===13){
        $(".color13").css("background-color","#ff6961")
        $(".color9, .color10, .color11, .color12").css("background-color", "#d3d3d3")
        $(".color14, .color15, .color16, .color17").css("background-color", "#77dd77")
    }else if(time===14){
        $(".color14").css("background-color","#ff6961")
        $(".class9, .class10, .class11, .class12, .class13").css("background-color", "#d3d3d3")
        $(".class15, .class16, .class17").css("background-color", "#77dd77")
    }else if(time===15){
        $(".color15").css("background-color","#ff6961")
        $(".class9, .class10, .class11, .class12, .class13, .class14").css("background-color", "#d3d3d3")
        $(".class16, .class17").css("background-color", "#77dd77")
    }else if(time===16){
        $(".color16").css("background-color","#ff6961")
        $(".class9, .class10, .class11, .class12, .class13, .class14, .class15").css("background-color", "#d3d3d3")
        $(".class17").css("background-color", "#77dd77")
    }else if(time===17){
        $(".color17").css("background-color","#ff6961")
    }else if (time>17){
        $(".a").css("background-color", "#d3d3d3")
    }





    $(".clear").on("click", deleteActivity)
   
    function deleteActivity(){
        localStorage.removeItem("activity9AM")
    }







// function saveActivity9AM(){
//     var text9AM = $("#text9AM").val();
//     localStorage.setItem("activity9AM", text9AM)
//    }
   


//    $(".save10").on("click", saveActivity10AM)


//    function saveActivity10AM(){
//        var text10AM = $("#text10AM").val();
//        localStorage.setItem("activity10AM", text10AM)
//       }














// var savedHour= ($(this).attr("hour"));
// var text = $("#text" + savedHour).val();