let click_status = true;
$(".my-dropdown-button").click(function(){
    /*
    ===== dropdown menu
        <a class="my-dropdown-button"  dropdown-menu-name="#profile" ></a>
        <div class="dropdown-child-buble" id="profile"></div>
        dropdown-child-buble : close when click out
    */
   click_status=false
    let menu_id = $(this).attr("dropdown-menu-name");
    $(menu_id).toggleClass('d-none')
    setTimeout(() => {
        click_status = true
    }, 1000);
})

$(window).click(function(){
    if(click_status){
        console.log("w")
        $(".dropdown-child-buble").addClass('d-none')
    }
})