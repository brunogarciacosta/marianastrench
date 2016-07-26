var ScrollSpeedMonitor = (function()
{
    var self = this;

    function ScrollSpeedMonitor (callbackMethod)
    {
        callback = callbackMethod;

        $(window).scroll(function(e)
        {
            var scrollTop = $(this).scrollTop();
            didScroll(new Date().getTime(), scrollTop);
        });
    }

    var callback;
    var direction = 'unknown';
    var lastDate = -1;
    var lastScrollTop = -1;
	
	this.thisMinimumTrackingDelayInMs = 25;

    function didScroll (timeStamp, scrollTop)
    {
		if (lastDate + self.thisMinimumTrackingDelayInMs <= timeStamp)
		{
			var offset = Math.abs(scrollTop - lastScrollTop);
			var direction = getDirection(scrollTop);			
			var delayInMs = timeStamp - lastDate;
			var speedInPxPerMs = offset / delayInMs;

			if (speedInPxPerMs > 0)
			{
				
				callback(speedInPxPerMs, timeStamp, direction);
			}

			lastDate = timeStamp;
		}
    };

    function getDirection (scrollTop)
    {
        var currentScrollTop = lastScrollTop;
        lastScrollTop = scrollTop;

        if (currentScrollTop > -1)
        {
            if (currentScrollTop >= scrollTop)
            {
                return 'down';
            }

            return 'up';
        }

        return 'unknown';
    }

	function reset ()
	{
		direction = 'unknown';
		lastDate = -1;
		lastScrollTop = -1;
	}
	
    return ScrollSpeedMonitor;
}());




var scrollSpeedMonitor = new ScrollSpeedMonitor(function (speedInPxPerMs, timeStamp, newDirection)
{
    var SpeedInKmperHr = Math.floor( (  (  (speedInPxPerMs * 1000)  * 3) / 1000) * 3600 )
    $("#velocity").text( SpeedInKmperHr );
});
                                                


                                                












$(document).ready(function() {
                $(window).scroll(function() {
                    var d = $("#depth-counter");
                    var depth = Math.floor($(window).scrollTop() / 2);
                    var metric = $("#metric");
                    
                    if (depth > 1000) {
                        depth = depth / 1000;
                        d.text(Math.floor(depth));
                        metric.text("km");
                        
                    } else {
                        d.text(Math.floor(depth));
                        metric.text("m");
                    }
                });
            });

