$(document).ready(function(){
 
    function showingMenu(){
        $('.menu-items').toggleClass('hidden');
    }

    $('.menu-container').on('click', function(e){
        e.preventDefault();
        showingMenu();
    })

    $('.menu-container').mouseover(function(){
        showingMenu();
    })

    $('.menu-container').mouseout(function(){
        showingMenu();
    })

    $(document).on('click', '.delete-item', function(e){
        e.preventDefault();
        $(this).closest('li').remove();
    })

});