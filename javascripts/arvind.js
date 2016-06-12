var ui = {};
ui.switchViewTo = function(turn) {

    
    function _switch(_turn) {
        ui.currentView = "#" + _turn;
        $(ui.currentView).fadeIn("fast");

        if(_turn === "ai")
            ui.startRobotFlickering();
    }

    if(ui.intialControlsVisible) {
       
        ui.intialControlsVisible = false;

        $('.intial').fadeOut({
            duration : "slow",
            done : function() {
                _switch(turn);
            }
        });
    }
    else {
        
        $(ui.currentView).fadeOut({
            duration: "fast",
            done: function() {
                _switch(turn);
            }
        });
    }
};
ui.insertAt = function(indx, symbol) {
           vif(!targetCell.hasClass('occupied')) {
        targetCell.html(symbol);
        
        targetCell.addClass('occupied');
    }
}
