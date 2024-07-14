
$(document).ready(function () {
    $("#box1").click(() => {
        $(".service_image").css("background-image", "url('/images/2-2.png')");
        $("#box1").addClass("btn2");
        $("#box2, #box3").removeClass("btn2");
    });

    $("#box2").click(() => {
        $(".service_image").css("background-image", "url('/images/image.png')");
        $("#box2").addClass("btn2");
        $("#box1, #box3").removeClass("btn2");
    });

    $("#box3").click(() => {
        $(".service_image").css("background-image", "url('/images/3-2.png')");
        $("#box3").addClass("btn2");
        $("#box2, #box1").removeClass("btn2");
    });

    
    // $(".img1").hover(() => {
    //     $("#imgs1").css("display", "none");
    //     $(".img1_content").css("display", "flex")
    // }, ()=>{

    //     $("#imgs1").css("display", "");
    //     $(".img1_content").css("display", "none")
    // })

      $(".img1").hover(() => {
       $(".img1").addClass("add");
    }, ()=>{

        $(".img1").removeClass("add");
    })

    
    $(".img2").hover(() => {
        $(".img2").addClass("add");
     }, ()=>{
 
         $(".img2").removeClass("add");
     })

     
     $(".img3").hover(() => {
        $(".img3").addClass("add");
     }, ()=>{
 
         $(".img3").removeClass("add");
     })

     
     $(".img4").hover(() => {
        $(".img4").addClass("add");
     }, ()=>{
 
         $(".img4").removeClass("add");
     })

     
     $(".img5").hover(() => {
        $(".img5").addClass("add");
     }, ()=>{
 
         $(".img5").removeClass("add");
     })

     


});

function toggle() {
    var blur = document.getElementById("blur");
    blur.classList.toggle('active');
    var popup = document.getElementById("popup");
    popup.classList.toggle('active');
    var body = document.body;
    body.style.overflow = "hidden";
}