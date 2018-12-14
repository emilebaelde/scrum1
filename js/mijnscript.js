$(document).ready(function(){
    $(function() {
        $('#s1_persoonlijk').show();
        $('#s1_shared').hide();
        $('#s1_algemeen').hide();
        $('#s1_options').change(function(){
            $('.s1_task_content').hide();
            $('#' + $(this).val()).show();
        });
    });
});



