
function StateManager() {

	var state = {},
		next = null,
		active = null,
		anim = 0,
		right = false;

	this.active_name = null;

	this.add = function() {
		for (var i = arguments.length; i--;) {
			var arg = arguments[i];
			state[arg.name] = arg;
		}
	}
	this.set = function(name) {
		active = state[name];
		this.active_name = name;
	}
	this.get = function(name) {
		return state[name];
	}
	this.change = function(name, _right) {
		anim = 0;
		right = _right || false;
		next = name;
		this.active_name = name;
	}
	this.tick = function(ctx) {
		if (next) {
			if (anim <= 1) {
				anim += 0.02;
				
				active.update();
				state[next].update();

				var c1 = active.render(),
					c2 = state[next].render(),

					c1w = c1.width,
					c1h = c1.height,
					c2w = c2.width,
					c2h = c2.height,

					res = 2,

					p,
					t = anim;
				p = t < 0.5 ? 2*t*t : -2*(t*(t - 2)) - 1;

				if (right) {
					p = 1 - p;
					var t = c2;
					c2 = c1;
					c1 = t;
				}

				for (var i = 0; i < c1w; i += res) {
					ctx.drawImage(c1, i, 0, res, c1h,
						i - p*i,
						(c1w - i)*p*0.2,
						res,
						c1h - (c1w - i)*p*0.4
					);
				}
				p = 1 - p;
				for (var i = 0; i < c2w; i += res) {
					ctx.drawImage(c2, i, 0, res, c2h,
						i - (i - c2w)*p,
						i*p*0.2,
						res,
						c1h - i*p*0.4
					);
				}

			} else {
				active = state[next];
				next = false;
				active.update();
				active.render(ctx);
			}
		} else {
			active.update();
			active.render(ctx);
		}
	}
}

function Tile(x, y) {

	var x = x, y = y;

	var tile = Tile.BLANK;
	var anim = 0;

	if (tile == null) {
		(function() {
			var _c = document.createElement("canvas");
			_c.width = _c.height = 100;
			var _ctx = _c.getContext("2d");

			_ctx.fillStyle = "green";
			_ctx.lineWidth = 4;
			_ctx.strokeStyle = "red";
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
