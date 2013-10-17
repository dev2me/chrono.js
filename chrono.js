/*
 * Domain Public by Francesc Mallafre Lopez (2013) 
 * https://github.com/weisk/
 */
var Chrono = function(){

	var defaultSettings = { 
		timerElement:null,
		intervalSpan:10 
	};	

	var newdate = function() { 
		return (new Date().getTime());
	};
	
	var format = function(time) {
		var mili = ('00'+(time % 1000)).substr(-3);
		var secs = ('0'+(Math.floor(time/1000) % 60)).substr(-2);
		var mins = Math.floor(time/60000);
		return (mins+' : '+secs+' : '+mili);
	};

	var checkTime = function(that) {
		var difftime = newdate() - that.startTime;
		that.elapsed = difftime;
		var diffstr = format(difftime);
		$(that.settings.timerElement).val(diffstr);
	};
	
	return {
		init: function(opts){ 
			var opts = opts || {};
			this.settings = {};
			$.extend(this.settings,defaultSettings,opts);
			$(this.settings.timerElement).val('0 : 00 : 000');
			this.elapsed = 0;
			this.status = 0;
		},
		start: function() {
			if(typeof this.status=="undefined") this.init();
			this.status = 1;
			if(!this.startTime) {
				this.startTime = newdate();
				this.absoluteStart = this.startTime;
			}
			if(this.pauseTime) this.startTime += newdate() - this.pauseTime;
			var that = this;
			this.interval = setInterval(function(){ checkTime(that); },this.settings.intervalSpan);
		},
		pause: function() {
			if(typeof this.status!="undefined") {
				this.status = 0;
				if(this.interval) clearInterval(this.interval);
				this.pauseTime = newdate();
				this.absoluteEnd = this.pauseTime;
			}
		},
		stop: function() {
			this.pause()
		},
		reset: function() {
			if(typeof this.status!="undefined") {
				this.status = 0;
				if(this.interval) clearInterval(this.interval);
				if(this.startTime) delete this.startTime;
				if(this.pauseTime) delete this.pauseTime;
				$(this.settings.timerElement).val('0 : 00 : 000');
			}
		}
	}
}