$(function($){
    "use strict"
    
    // Login control
    $("#loginAs-select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".log-box").not("#" + optionValue).hide();
                $("#" + optionValue).show();
            } else{
                $(".log-box").hide();
            }
        });
    }).change();
})