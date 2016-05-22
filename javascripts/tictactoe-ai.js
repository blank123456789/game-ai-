/*var canvas = document.getElementById("tictaccanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 600, 600);

ctx.beginPath();
ctx.fillStyle="#32EDF2";
ctx.fillRect(34.375,34.375,125,62.5);
ctx.stroke();
ctx.closePath();
*/

function Tile(x, y) {

	var x = x, y = y;

	var tile = Tile.BLANK;
	var anim = 0;

	if (tile == null) {
		(function() {
			var _c = document.createElement("canvas");
			_c.width = _c.height = 100;
			var _ctx = _c.getContext("2d");

			_ctx.fillStyle = "skyblue";
			_ctx.lineWidth = 4;
			_ctx.strokeStyle = "white";
			_ctx.lineCap = "round";

			// Blank
			_ctx.fillRect(0, 0, 100, 100);
			Tile.BLANK = new Image();
			Tile.BLANK.src = _c.toDataURL();

			// Nought
			_ctx.fillRect(0, 0, 100, 100);

			_ctx.beginPath();
			_ctx.arc(50, 50, 30, 0, 2*Math.PI);
			_ctx.stroke();

			Tile.NOUGHT = new Image();
			Tile.NOUGHT.src = _c.toDataURL();

			// Cross
			_ctx.fillRect(0, 0, 100, 100);

			_ctx.beginPath();
			_ctx.moveTo(20, 20);
			_ctx.lineTo(80, 80);
			_ctx.moveTo(80, 20);
			_ctx.lineTo(20, 80);
			_ctx.stroke();

			Tile.CROSS = new Image();
			Tile.CROSS.src = _c.toDataURL();
		})();
		tile = Tile.BLANK;
	}

	this.active = function() {
		return anim > 0;
	}

	this.equals = function(_tile) {
		return tile === _tile;
	}

	this.hasData = function() {
		return tile !== Tile.BLANK;
	}

	this.set = function(next) {
		tile = next;
	}

	this.flip = function(next) {
		tile = next;
		anim = 1;
	}

	this.update = function() {
		if (anim > 0) {
			anim -= 0.02;
		}
	}

	this.draw = function(ctx) {
		if (anim <= 0) {
			ctx.drawImage(tile, x, y);
			return;
		}

		var res = 2;
		var t = anim > 0.5 ? Tile.BLANK : tile;
		var p = -Math.abs(2*anim - 1) + 1;

		p *= p;

		for (var i = 0; i < 100; i += res) {

			var j = 50 - (anim > 0.5 ? 100 - i : i);

			ctx.drawImage(t, i, 0, res, 100,
				x + i - p*i + 50*p,
				y - j*p*0.2,
				res,
				100 + j*p*0.4
			);
		}
	}

}
