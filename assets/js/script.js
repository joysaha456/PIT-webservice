/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {

    // body bg none
    // for $('#pit-nav-pills')
    // $(function () {
    //     if ($('#pit-nav-pills').length) {
    //         $('body , .pit-wrapper').css({
    //             backgroundImage: 'none',
    //             backgroundColor: '#fff',
    //         });
    //     }
    // });

});



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


    // set active class $('#pit-nav-pills .nav-link') 
    // $(function () {
    //     $('#pit-nav-pills').on('click', '.nav-link[data-bs-toggle="pill"]', function () {
    //         $('#pit-nav-pills .nav-link').removeClass('active');
    //         $(this).addClass('active');
    //         if ($(this).closest('.dropdown').length) {
    //             $(this).closest('.dropdown').find('.dropdown-toggle').addClass('active');
    //             // $(this).closest('.dropdown').find('.dropdown-toggle').text($(this).text());
    //         } else {
    //             $(this).closest('.dropdown').find('.dropdown-toggle').removeClass('active');
    //         }
    //     })
    // });


    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });

});
