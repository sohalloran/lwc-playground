({
    doInit : function( cmp, evt, h ) {
        var i = 0;
        var interval = window.setInterval(
            $A.getCallback(function() {
                var value = i++;
                cmp.set("v.counter", value);
                window.location.reload();
            }), 10000
        );     
    },
})