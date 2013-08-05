$.fn.raccourcis = function (data, options) {

	var el = this;
	var css = options && options.css !== undefined ? options.css : 'padding: 0.1em 0.6em; border: 1px solid #ccc; font-size: 11px; font-family: Arial,Helvetica,sans-serif; background-color: #f7f7f7; color: #333; -moz-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset; -webkit-box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset; box-shadow: 0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; display: inline-block; margin: 0 0.1em; text-shadow: 0 1px 0 #fff; line-height: 1.4; white-space: nowrap;';
	var $style = css ? $('<style />', { text: 'kbd { ' + css + ' }' }).appendTo('head') : null;

	init = function () {
		if (!data[0].shortcuts) {
			return new Section(data);
		}

		for (var i = 0; i < data.length; i++) {
			new Section(data[i].shortcuts, data[i].section);
		}
	}();

	function Section(shortcuts, label) {
		init = function () {
			var $this = $('<table />').append($('<tbody />')).appendTo(el);

			if (label) {
				$('<thead />').append($('<tr />')).append($('<th />', { text: label }).prop('colspan', 2)).prependTo($this);
			}

			for (var i = 0; i < shortcuts.length; i++) {
				new Shortcut($this, shortcuts[i]);
			}
		}();
	}

	function Shortcut($section, shortcut) {
		init = function () {
			var $this = $('<tr />').append($('<td />', { text: shortcut.action })).appendTo($section);
			var $keys = options && !options.actionFirst ? $('<td />').prependTo($this) : $('<td />').appendTo($this);

			var keys = shortcut.keys
				.replace(/up/gi, '↑')
				.replace(/down/gi, '↓')
				.replace(/left/gi, '←')
				.replace(/right/gi, '→')
				.replace(/shift|maj/gi, '⇧')
				.replace(/command|cmd/gi, '⌘')
				.replace(/,\s|\s,\s|,/g, ' or ')
				.split(/[\s+]/g);

			for (var i = 0; i < keys.length; i++) {
				$(keys[i] != 'or' ? '<kbd />' : '<span />', { text: ' ' + keys[i] + ' ' }).appendTo($keys);
			}
		}();
	}

	return el;

};