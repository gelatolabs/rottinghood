import kaboom from "kaboom"

kaboom({
	width: 1280,
	height: 720
})

loadSprite("player", "sprites/player.png", {
	sliceX: 6,
	anims: {
		"idle": {
			from: 5,
			to: 5
		},
		"walk": {
			from: 0,
			to: 5,
			speed: 5,
			loop: true
		}
	}
})
loadSprite("follower", "sprites/follower.png", {
	sliceX: 4,
	anims: {
		"idle": {
			from: 3,
			to: 3
		},
		"walk": {
			from: 0,
			to: 3,
			speed: 4,
			loop: true
		}
	}
})
loadSprite("background", "sprites/background.png")
loadSprite("foreground", "sprites/foreground.png")
loadSprite("bed0", "sprites/bed0-0.png")
loadSprite("bed1", "sprites/bed1-0.png")
loadSprite("bed2", "sprites/bed2-0.png")
loadSprite("captcha", "sprites/captcha.png")
loadSprite("chest-back", "sprites/chest-back.png")
loadSprite("chest-closed", "sprites/chest-closed.png")
loadSprite("chest-open", "sprites/chest-open.png")
loadSprite("liver", "sprites/liver.png")
loadSprite("organ-0", "sprites/organ-0.png")
loadSprite("organ-1", "sprites/organ-1.png")
loadSprite("organ-2", "sprites/organ-2.png")
loadSprite("organ-3", "sprites/organ-3.png")
loadSprite("organ-4", "sprites/organ-4.png")
loadSprite("organ-5", "sprites/organ-5.png")
loadSprite("organ-6", "sprites/organ-6.png")
loadSprite("organ-7", "sprites/organ-7.png")
loadSprite("organ-8", "sprites/organ-8.png")
loadSprite("organ-9", "sprites/organ-9.png")
loadSprite("organ-10", "sprites/organ-10.png")
loadSprite("organ-11", "sprites/organ-11.png")
loadSprite("organ-12", "sprites/organ-12.png")
loadSprite("organ-13", "sprites/organ-13.png")
loadSprite("organ-14", "sprites/organ-14.png")
loadSprite("ribcage", "sprites/ribcage.png")
loadSprite("exit", "sprites/exit.png")
loadShaderURL("crt", null, "shaders/crt.frag")

const collisions = {
	"liver": new Polygon([
		vec2(66, -159),
		vec2(138, -149),
		vec2(170, -123),
		vec2(179, -65),
		vec2(162, -14),
		vec2(54, 59),
		vec2(9, 120),
		vec2(-15, 151),
		vec2(-61, 160),
		vec2(-122, 147),
		vec2(-147, 108),
		vec2(-180, -3),
		vec2(-166, -75),
		vec2(-112, -125),
		vec2(-18, -153),
		vec2(66, -159)
	]),
	"organ-0": new Polygon([
		vec2(13, -125),
		vec2(104, -70),
		vec2(111, 84),
		vec2(-17, 125),
		vec2(-82, 85),
		vec2(-111, 4),
		vec2(-54, -104),
		vec2(13, -125)
	]),
	"organ-1": new Polygon([
		vec2(-88, -203),
		vec2(-45, -111),
		vec2(24, -114),
		vec2(67, -83),
		vec2(136, 28),
		vec2(151, 103),
		vec2(40, 173),
		vec2(-54, 205),
		vec2(-113, 121),
		vec2(-138, 22),
		vec2(-125, -53),
		vec2(-104, -82),
		vec2(-139, -130),
		vec2(-155, -163),
		vec2(-88, -203)
	]),
	"organ-2": new Polygon([
		vec2(39, -127),
		vec2(9, -51),
		vec2(74, -60),
		vec2(107, -47),
		vec2(143, -61),
		vec2(140, -10),
		vec2(122, 57),
		vec2(77, 99),
		vec2(-1, 111),
		vec2(-59, 74),
		vec2(-78, 18),
		vec2(-94, -8),
		vec2(-132, -13),
		vec2(-146, -46),
		vec2(-111, -55),
		vec2(-101, -101),
		vec2(-63, -129),
		vec2(-11, -127),
		vec2(14, -153),
		vec2(39, -127)
	]),
	"organ-3": new Polygon([
		vec2(63, -108),
		vec2(148, 22),
		vec2(163, 81),
		vec2(144, 173),
		vec2(95, 222),
		vec2(23, 215),
		vec2(6, 246),
		vec2(-31, 232),
		vec2(-40, 195),
		vec2(-18, 185),
		vec2(-86, 142),
		vec2(-152, 63),
		vec2(-163, 10),
		vec2(-151, -23),
		vec2(-150, -95),
		vec2(-104, -135),
		vec2(-86, -179),
		vec2(-97, -206),
		vec2(-59, -241),
		vec2(-13, -237),
		vec2(-21, -211),
		vec2(48, -217),
		vec2(65, -177),
		vec2(63, -108)
	]),
	"organ-4": new Polygon([
		vec2(109, 155),
		vec2(179, -65),
		vec2(168, -113),
		vec2(130, -150),
		vec2(52, -162),
		vec2(-1, -131),
		vec2(-24, -83),
		vec2(-97, -77),
		vec2(-152, -51),
		vec2(-178, 0),
		vec2(-173, 57),
		vec2(-132, 109),
		vec2(-47, 149),
		vec2(37, 161),
		vec2(109, 155)
	]),
	"organ-5": new Polygon([
		vec2(262, -154),
		vec2(147, -132),
		vec2(93, -42),
		vec2(-48, 53),
		vec2(-98, 114),
		vec2(-122, 232),
		vec2(-182, 284),
		vec2(-262, 202),
		vec2(-267, 111),
		vec2(-242, 1),
		vec2(-111, -95),
		vec2(-17, -130),
		vec2(-13, -183),
		vec2(106, -273),
		vec2(226, -245),
		vec2(231, -195),
		vec2(260, -187),
		vec2(262, -154)
	]),
	"organ-6": new Polygon([
		vec2(-34, -2),
		vec2(95, -19),
		vec2(53, -156),
		vec2(139, -153),
		vec2(169, -32),
		vec2(154, 27),
		vec2(94, 60),
		vec2(-29, 95),
		vec2(-41, 132),
		vec2(-114, 164),
		vec2(-185, 65),
		vec2(-117, 19),
		vec2(-154, 9),
		vec2(-156, -39),
		vec2(-110, -63),
		vec2(-62, -48),
		vec2(-34, -2)
	]),
	"organ-7": new Polygon([
		vec2(-18, 48),
		vec2(103, -27),
		vec2(100, -72),
		vec2(14, -79),
		vec2(-80, -30),
		vec2(-109, -8),
		vec2(-108, 39),
		vec2(-18, 48)
	]),
	"organ-8": new Polygon([
		vec2(65, -9),
		vec2(108, 147),
		vec2(85, 194),
		vec2(7, 218),
		vec2(-101, 156),
		vec2(-152, 53),
		vec2(-146, -64),
		vec2(-98, -161),
		vec2(-16, -209),
		vec2(58, -204),
		vec2(94, -153),
		vec2(69, -80),
		vec2(151, -113),
		vec2(135, -75),
		vec2(65, -9)
	]),
	"organ-9": new Polygon([
		vec2(137, -134),
		vec2(-95, -56),
		vec2(-183, 15),
		vec2(-147, 116),
		vec2(-24, 137),
		vec2(46, 100),
		vec2(177, -93),
		vec2(173, -126),
		vec2(137, -134)
	]),
	"organ-10": new Polygon([
		vec2(33, -88),
		vec2(59, -48),
		vec2(146, -107),
		vec2(163, -79),
		vec2(111, -53),
		vec2(95, 14),
		vec2(82, 122),
		vec2(53, 124),
		vec2(62, 46),
		vec2(-56, 67),
		vec2(-131, 42),
		vec2(-163, -25),
		vec2(-127, -95),
		vec2(-72, -126),
		vec2(-4, -117),
		vec2(33, -88)
	]),
	"organ-11": new Polygon([
		vec2(-142, 170),
		vec2(17, 218),
		vec2(67, 68),
		vec2(86, 162),
		vec2(166, 153),
		vec2(119, 4),
		vec2(80, -51),
		vec2(148, -92),
		vec2(122, -167),
		vec2(57, -217),
		vec2(-54, -152),
		vec2(-47, -101),
		vec2(-143, 1),
		vec2(-150, 32),
		vec2(-116, 56),
		vec2(-65, 7),
		vec2(-142, 170)
	]),
	"organ-12": new Polygon([
		vec2(-7, 104),
		vec2(29, 105),
		vec2(121, 26),
		vec2(119, -67),
		vec2(80, -90),
		vec2(122, -122),
		vec2(72, -165),
		vec2(57, -117),
		vec2(-30, -133),
		vec2(-82, -117),
		vec2(-113, -50),
		vec2(-122, 30),
		vec2(-105, 48),
		vec2(-120, 72),
		vec2(-111, 91),
		vec2(-86, 73),
		vec2(-42, 96),
		vec2(-47, 114),
		vec2(-77, 149),
		vec2(-59, 167),
		vec2(-7, 104)
	]),
	"organ-13": new Polygon([
		vec2(-117, 6),
		vec2(-88, 10),
		vec2(6, -45),
		vec2(36, -116),
		vec2(84, -147),
		vec2(81, -176),
		vec2(141, -159),
		vec2(122, -133),
		vec2(140, -92),
		vec2(141, 12),
		vec2(100, 126),
		vec2(-5, 176),
		vec2(-77, 176),
		vec2(-121, 101),
		vec2(-119, 53),
		vec2(-141, 43),
		vec2(-117, 6)
	]),
	"organ-14": new Polygon([
		vec2(216, 14),
		vec2(-172, 135),
		vec2(-214, 125),
		vec2(-216, 35),
		vec2(-197, -40),
		vec2(-127, -114),
		vec2(-28, -134),
		vec2(64, -133),
		vec2(139, -89),
		vec2(208, -31),
		vec2(216, 14)
	]),
	"ribcage": new Polygon([
		vec2(-1, -193),
		vec2(178, -250),
		vec2(206, -204),
		vec2(229, -117),
		vec2(272, -11),
		vec2(238, 178),
		vec2(277, 202),
		vec2(229, 249),
		vec2(63, 149),
		vec2(-3, 177),
		vec2(-57, 145),
		vec2(-231, 249),
		vec2(-271, 193),
		vec2(-243, 185),
		vec2(-273, -16),
		vec2(-228, -124),
		vec2(-202, -213),
		vec2(-178, -250),
		vec2(-1, -193)
	])
}

scene("shelter", ({ beds, curBed }) => {
	usePostEffect()

	add([
		"parallax",
		sprite("background"),
		pos(0, 0),
		z(-1),
		{ speed: 370 }
	])
	add([
		"parallax",
		sprite("background"),
		pos(width(), 0),
		z(-1),
		{ speed: 370 }
	])
	add([
		"parallax",
		sprite("foreground"),
		pos(0, 0),
		z(2),
		{ speed: 250 }
	])
	add([
		"parallax",
		sprite("foreground"),
		pos(width(), 0),
		z(2),
		{ speed: 250 }
	])

	add(beds)

	const player = add([
		sprite("player"),
		pos(width() / 3, height() / 8 * 7),
		anchor("bot"),
		z(1),
		{ speed: 400 }
	])
	player.play("idle")

	const follower = add([
		sprite("follower"),
		pos(width() / 3 - 150, height() / 8 * 7),
		anchor("bot"),
		z(0),
		{ speed: 400 }
	])
	follower.play("idle")

	follower.onUpdate(() => {
		const distance = player.pos.sub(follower.pos)
		const dir = distance.unit()
		console.log(follower.pos.x)
		follower.flipX = dir.x < 0
		if (Math.abs(distance.x) > 230) {
			follower.move(dir.scale(follower.speed))
		}
	})

	function animWalk() {
		if (player.curAnim() !== "walk") {
			player.play("walk")
		}
		const distance = Math.abs(player.pos.sub(follower.pos).x)
		if (distance > 225 && follower.curAnim() !== "walk") {
			follower.play("walk")
		}
	}

	onKeyDown("left", () => {
		player.flipX = true
		if (player.pos.x > width() / 4) {
			player.move(-player.speed, 0)
		} else {
			get("parallax").forEach((child) => {
				child.move(child.speed, 0)
				if (child.pos.x >= width()) {
					child.pos.x -= width() * 2
				}
			})
			beds.children.forEach((child) => {
				child.move(child.speed, 0)
			})
		}
		if (follower.pos.x < width() / 4) {
			follower.pos.x = width() / 4 + 230
		}
		animWalk()
	})

	onKeyDown("right", () => {
		player.flipX = false
		if (player.pos.x < width() / 4 * 3) {
			player.move(player.speed, 0)
		} else {
			get("parallax").forEach((child) => {
				child.move(-child.speed, 0)
				if (child.pos.x <= -width()) {
					child.pos.x += width() * 2
				}
			})
			beds.children.forEach((child) => {
				child.move(-child.speed, 0)
			})
		}
		animWalk()
	})

	;["left", "right"].forEach((key) => {
		onKeyRelease(key, () => {
			if (!isKeyDown("left") && !isKeyDown("right")) {
				player.play("idle")
			}
			follower.play("idle")
		})
	})

	onKeyPress("o", () => {
		go("surgery", { beds: beds, curBed: 2 })
	})
})

scene("surgery", ({ beds, curBed }) => {
	usePostEffect("crt", { "u_flatness": 4 })

	let curDraggin = null
	function drag() {
		let mouseOffset = vec2(0)
		return {
			id: "drag",
			require: [ "pos", "area" ],
			pick() {
				curDraggin = this
				mouseOffset = mousePos().sub(this.pos)
				this.trigger("drag")
			},
			update() {
				if (curDraggin === this) {
					this.pos = mousePos().sub(mouseOffset)
					this.trigger("dragUpdate")
				}
			},
			onDrag(action) {
				return this.on("drag", action)
			},
			onDragUpdate(action) {
				return this.on("dragUpdate", action)
			},
			onDragEnd(action) {
				return this.on("dragEnd", action)
			}
		}
	}

	onUpdate(() => setCursor("default"))

	onMousePress(() => {
		if (curDraggin) {
			return
		}
		for (const organ of get("organ").reverse()) {
			if (organ.isHovering()) {
				organ.pick()
				break
			}
		}
	})
	onMouseRelease(() => {
		if (curDraggin) {
			curDraggin.trigger("dragEnd")
			curDraggin = null
		}
	})

	add([
		sprite("chest-back"),
		pos(5, 116)
	])
	const liver = add([
		sprite("liver"),
		pos(randi(450, 850), randi(250, 650)),
		area({ cursor: "pointer", shape: collisions["liver"], scale: 0.8 }),
		anchor("center"),
		drag(),
		"organ"
	])
	for (let i = 0; i <= 10; i++) {
		const o = randi(15)
		add([
			sprite("organ-" + o),
			pos(randi(450, 850), randi(250, 650)),
			area({ cursor: "pointer", shape: collisions["organ-" + o], scale: 0.8 }),
			anchor("center"),
			drag(),
			"organ"
		])
	}
	const ribcage = add([
		sprite("ribcage"),
		pos(622, 422),
		area({ cursor: "pointer", shape: collisions["ribcage"], scale: 0.8 }),
		anchor("center"),
		drag(),
		"organ",
        { removed: false }
	])
	get("organ").forEach((child) => {
		child.onDrag(() => {
			readd(child)
		})
		child.onDragUpdate(() => {
			setCursor("move")
		})
	})
	add([
		sprite("chest-open"),
		pos(5, 116)
	])
	add([
		sprite("captcha"),
		pos(0, 0)
	])

	add([
		pos(8, height() - 8),
		text("Surgery-o-tron 3000®"),
		anchor("botleft"),
		color(26, 115, 232)
	])

	const exit = add([
		sprite("exit"),
		pos(width() - 63, height() - 34),
		anchor("center"),
		area({ offset: vec2(-15, -15) })
	])
	exit.onHoverUpdate(() => {
		exit.scale = vec2(1.2)
		setCursor("pointer")
	})
	exit.onHoverEnd(() => {
		exit.scale = vec2(1)
	})
	exit.onClick(() => {
		go("shelter", { beds: beds, curBed: curBed })
	})

	//debug.inspect = true
})

scene("hide", (beds, curBed) => {
	
})

function start() {
	const beds = add([
		fixed()
	])
	for (let i = 1; i <= 10; i++) {
		const d = randi(3)
		beds.add([
			sprite("bed" + d),
			pos(400 + width() / 3 * i, height() / 4 * 3),
			anchor("bot"),
			{
				speed: 350,
				difficulty: d,
				done: false
			}
		])
	}

	go("shelter", { beds: beds, curBed: null })
}

start()
