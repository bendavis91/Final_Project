//doc ready function
$(function () {
    console.log("ready!");
    $("#textOutput").text(""); //erases any hard coded text in html

    //event listener in jq
    $("#btnSendText").on("click", function (e) {
        e.preventDefault();

        //variable to record the text inputed on screen
        var getInput = $("#textInput").val();

        //outputs the text recorded by getInput and appends it to the blank string 
        $("#textOutput")
            .append("<p>" + getInput + "</p>")
            .addClass("sentText");  //this class outputs text different from input

    });
    //Refreshes the page to reset output text
    $("#clearForm").on("click", function (e) {
        location.reload(true); //tried other methods but couldn't figure it out besides using this
    });

    //Keypress code to output as you type. I tried at this for a few hours and couldn't
    //figure out anything too fancy unfortunately.
    $("input#keyPressInput").keyup(function () {
        $(".output").text($(this).val()).addClass("sentText");
    });
});