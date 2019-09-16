$(".stream-nav").on("click", function() {
       var allStreamsCardsSelector = ".card";
       var allStreamCardsSelector = "." + this.id + "-card";

       $("allStreamsCardsSelector").removeClass("card-highlight");
       $("allStreamCardsSelector").addClass("card-highlight");
});