raccourcis.js
=============

Simple library for showing your keyboard shortcuts.

Requirements: jQuery 1.6+

##How to start

```html
<body>
	<div id="raccourcis"></div>
	<script src="raccourcis.min.js"></script>
	<script>$('#raccourcis').raccourcis(myShortcuts);</script>
</body>
```

##Defining shortcuts

###Supported shortcuts

* Single key: `'A'`
* Combination: `'ctrl+A'`
* Sequence: `'ctrl A'`
* Multiple shortcuts: `'A, ctrl+A, shift A'`

###Create a simple list

Pass in parameter an array of shortcuts. A shortcut is an object with 2 keys (`keys` and `action`).

```javascript
var myShortcuts = [
	{ keys: 'N', action: 'New tweet' },
	{ keys: 'ctrl+A', action: 'Accueil' },
	{ keys: 'command shift S', action: 'Search' },
	{ keys: 'space, up', action: 'Jump' },
	{ keys: 'up up down down left right left right B A enter', action: 'The dance of the Unicorn' } 
];

$('#raccourcis').raccourcis(myShortcuts);
```

###Create a list with sections

Pass in parameter an array of objects with 2 keys (`section` and `shortcuts`). The key `shortscuts` is an array of shortcuts.

```javascript
var myShortcuts = [
	{ section: 'Single keys', shortcuts: [
		{ keys: 'T', action: 'New tweet' },
		{ keys: 'E', action: 'New email' }
	]},
	{ section: 'Combinations', shortcuts: [
		{ keys: 'ctrl+A', action: 'Accueil' },
		{ keys: 'alt P', action: 'Profile' }
	]},
	{ section: 'Symbols', shortcuts: [
		{ keys: 'command shift S', action: 'Search' },
		{ keys: 'shift+D', action: 'Delete message' }
	]},
	{ section: 'Multiple shortcuts', shortcuts: [
		{ keys: 'space, up', action: 'Jump' }
	]},
	{ section: 'Konami code', shortcuts: [
		{ keys: 'up up down down left right left right B A enter', action: 'The dance of the Unicorn' }
	]}	
];

$('#raccourcis').raccourcis(myShortcuts);
```

###Works fine with the others libraries

Raccourcis.js, [mousetrap](https://github.com/ccampbell/mousetrap) and [keymaster](https://github.com/madrobby/keymaster) use the same syntax, so you can variabilize your shortcuts:

```javascript
var KS_ACCUEIL = 'ctrl+shift+A';
// raccourcis.js
$('#raccourcis').raccourcis([{ keys: KS_ACCUEIL, action: 'Accueil' }]);
// mousetrap
Mousetrap.bind(KS_ACCUEIL, function () { alert('you pressed ctrl+shift+A!') });
// keymaster
key(KS_ACCUEIL, function () { alert('you pressed ctrl+shift+A!') });
```

##Options

```javascript
$('#raccourcis').raccourcis(myShortcuts, options);
```

The second parameter is an object with optional keys:

* **css**: customizes the `<kbd>` style : `{ css: 'border: 1px dotted #2c77ba; padding: 1px 5px; margin: 3px;' }`
* **symbols**: replaces some keys with their symbols : `{ symbols: true }`
	* up : ↑
	* down : ↓
	* left : ←
	* right : →
	* shift, maj : ⇧
	* command, cmd : ⌘
* **actionFirst**: reverses keys and action : `{ actionFirst: true }`

To remove the default style, use  `{ css: null }`. Then you can customize with `#raccourcis kbd { ... }` in your css.

You can also manipulate the css and other things by chaining: `$('#raccourcis').raccourcis(myShortcuts).find('td').css(...);`.


