$(document).ready(function(){
    $(".menu").click(function(){
        let id = $(this).prop('id');
        let split = id.split('_');
        let id_menu = split[1];

        $(".menu").removeClass('aktif');
        $("#menu_"+id_menu).addClass('aktif');

        

        $("#isi_1").slideUp();
        $("#isi_2").slideUp();
        $("#isi_3").slideUp();
        $("#isi_4").slideUp();
        $("#isi_5").slideUp();
        $("#isi_"+id_menu).slideToggle("slow");
    });
});