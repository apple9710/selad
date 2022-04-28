
var me = document.getElementsByClassName

$(document).ready(function() {
    const menu = $('.menu_child li')
    const menuBtn = $('.slide_open')
    const xBtn = $('.x_btn')
    const board = $('.first')
    const sideMenu = $('.slide_menu')
    console.log(board.length)
    xBtn.click(function(e){
        sideMenu.toggleClass('isActive')
    })
    menuBtn.click(function(e){
        sideMenu.toggleClass('isActive');
    })
    menu.click(function(e){

        $(this).toggleClass('active').siblings().removeClass('active');

    })
    
    
 menu.


})