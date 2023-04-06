$(document).ready(function() {
    $("#formOne").submit(function (event){
        const adjectiveInput = $("input#adjective").val();
        const accessoryInput = $("input#accessory").val();
        const placeInput = $("input#place").val();
        const personInput = $("input#person").val();
        const brandInput = $("input#brand").val();
        const itemsInput = $("input#items").val();
        const celebrityInput = $("input#celebrity").val();



        $(".adjective").text(adjectiveInput);
        $(".accessory").text(accessoryInput);
        $(".place").text(placeInput);
        $(".person").text(personInput);
        $(".brand").text(brandInput);
        $(".items").text(itemsInput);
        $(".celebrity").text(celebrityInput);



        $("#story").show();
   
        
        event.preventDefault();


    });
});