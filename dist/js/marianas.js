var ScrollSpeedMonitor=function(){function t(t){e=t,$(window).scroll(function(t){var n=$(this).scrollTop();o((new Date).getTime(),n)})}function o(t,o){if(i+r.thisMinimumTrackingDelayInMs<=t){var l=Math.abs(o-c),a=n(o),u=t-i,f=l/u;f>0&&e(f,t,a),i=t}}function n(t){var o=c;return c=t,o>-1?o>=t?"down":"up":"unknown"}var e,r=this,i=-1,c=-1;return this.thisMinimumTrackingDelayInMs=25,t}(),scrollSpeedMonitor=new ScrollSpeedMonitor(function(t,o,n){var e=Math.floor(1e3*t*3/1e3*3600);$("#velocity").text(e)});$(document).ready(function(){$(window).scroll(function(){var t=$("#depth-counter"),o=Math.floor($(window).scrollTop()/3),n=$("#metric");o>1e3?(o/=1e3,t.text(Math.floor(o)),n.text("km")):(t.text(Math.floor(o)),n.text("m"))})});