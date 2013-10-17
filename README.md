chrono.js
=========

Simple time counter / chronometer by [weisk](https://github.com/weisk/)

# Description

chrono.js is a simple Javascript library to add real time tracking on your web app.


## Usage

Include the source code of chrono.js, and instantiate a new Chrono like this:

```
var timer = new Chrono();
```
OR
```
window.timer = new Chrono();
```

Then you can init the Chrono object with two optional settings: 
* `timerElement`: a CSS Selector which will reflect the time as it passes,
* `intervalSpan`: the frequency in milliseconds the timer will be updated at

```
timer.init({
	timerElement: '#clock',
	intervalSpan: 10
});
```

## Properties

* `status`: 1 (timer is running), 0 (timer is paused/stopped) .
* `absoluteStart`: Absolute time in Date() format from which the Chrono first started.
* `absoluteEnd`: Absolute time in Date() format from which the Chrono last stopped.
* `elapsed`: Elapsed time in Milliseconds.
* `startTime`: Last time in Date() format Chrono was started.
* `pauseTime`: Last time in Date() format Chrono was paused.

## Methods

* `init([opts])`: Initialize the Chrono object setting the optional settings.
* `start()`: Start tracking time.
* `pause()`: Pause tracking time.
* `stop()`: Same as pause().
* `reset()`: Reset Chrono timer.
