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
loadSprite("bed-0-0", "sprites/bed-0-0.png")
loadSprite("bed-0-1", "sprites/bed-0-1.png")
loadSprite("bed-0-2", "sprites/bed-0-2.png")
loadSprite("bed-1-0", "sprites/bed-1-0.png")
loadSprite("bed-1-1", "sprites/bed-1-1.png")
loadSprite("bed-1-2", "sprites/bed-1-2.png")
loadSprite("bed-2-0", "sprites/bed-2-0.png")
loadSprite("bed-2-1", "sprites/bed-2-1.png")
loadSprite("bed-2-2", "sprites/bed-2-2.png")
loadSprite("checkmark", "sprites/checkmark.png")
loadSprite("ui-operate", "sprites/ui-operate.png")
loadSprite("ui-scalpel", "sprites/ui-scalpel.png")
loadSprite("ui-forceps", "sprites/ui-forceps.png")
loadSprite("ui-stapler", "sprites/ui-stapler.png")
loadSprite("scalpel", "sprites/scalpel.png")
loadSprite("forceps", "sprites/forceps.png")
loadSprite("stapler", "sprites/stapler.png")
loadSprite("ice", "sprites/ice.png")
loadSprite("captcha", "sprites/captcha.png")
loadSprite("chest-back", "sprites/chest-back.png")
loadSprite("chest-closed", "sprites/chest-closed.png")
loadSprite("chest-open-0-0", "sprites/chest-open-0-0.png")
loadSprite("chest-open-0-1", "sprites/chest-open-0-1.png")
loadSprite("chest-open-0-2", "sprites/chest-open-0-2.png")
loadSprite("chest-open-1-0", "sprites/chest-open-1-0.png")
loadSprite("chest-open-1-1", "sprites/chest-open-1-1.png")
loadSprite("chest-open-1-2", "sprites/chest-open-1-2.png")
loadSprite("chest-open-2-0", "sprites/chest-open-2-0.png")
loadSprite("chest-open-2-1", "sprites/chest-open-2-1.png")
loadSprite("chest-open-2-2", "sprites/chest-open-2-2.png")
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

loadSound("crt", "audio/crt.ogg")
loadSound("scalpel", "audio/scalpel.ogg")
loadSound("forceps", "audio/forceps.ogg")
loadSound("stapler", "audio/stapler.ogg")
loadSound("cut", "audio/cut.ogg")
loadSound("yoink-0", "audio/yoink-0.ogg")
loadSound("yoink-1", "audio/yoink-1.ogg")
loadSound("yoink-2", "audio/yoink-2.ogg")
loadSound("drop", "audio/drop.ogg")
loadSound("confirmation", "audio/confirmation.ogg")
loadSound("staple", "audio/staple.ogg")

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

	onUpdate(() => setCursor("default"))

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
		area(),
		anchor("bot"),
		z(1),
		{ speed: 400 }
	])
	player.play("idle")

	const uiOperate = add([
		sprite("ui-operate"),
		scale(0.4),
		pos(width(), height()),
		area(),
		anchor("top"),
		"uiOperate",
		{ bed: 0 }
	])

	player.onCollideUpdate("bed", (bed) => {
		if (!bed.done) {
			uiOperate.pos = [bed.pos.x, bed.pos.y - 528]

			const bedIdx = beds.children.findIndex(obj => obj.id === bed.id)
			uiOperate.bed = bedIdx

			if (isKeyDown("space")) {
				go("surgery", { beds: beds, curBed: bedIdx })
			}
		}
	})
	player.onCollideEnd("bed", () => {
		uiOperate.pos = [width(), height()]
	})

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
		follower.flipX = dir.x < 0
		if (Math.abs(distance.x) > 230) {
			follower.move(dir.scale(follower.speed))
		}
	})

	if (curBed !== null) {
		player.pos.x = beds.children[curBed].pos.x
		follower.pos.x = beds.children[curBed].pos.x - 150
	}

	function animWalk() {
		if (player.curAnim() !== "walk") {
			player.play("walk")
		}
		const distance = Math.abs(player.pos.sub(follower.pos).x)
		if (distance > 225 && follower.curAnim() !== "walk") {
			follower.play("walk")
		}
	}

	;["left", "right"].forEach((key) => {
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

		onKeyRelease(key, () => {
			if (!isKeyDown("left") && !isKeyDown("right")) {
				player.play("idle")
			}
			follower.play("idle")
		})
	})

	onKeyPress("`", () => {
		debug.inspect = true
	})
})

scene("surgery", ({ beds, curBed }) => {
	usePostEffect("crt", { "u_flatness": 4 })
	play("crt")

	const difficulty = beds.children[curBed].difficulty
	const variant = beds.children[curBed].variant

	onUpdate(() => setCursor("default"))

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

	for (let i = 0; i <= (difficulty == 0 ? 8 : difficulty == 1 ? 20 : 40); i++) {
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

	const chestOpen = add([
		sprite("chest-open-" + difficulty + "-" + variant),
		pos(5, 116),
		area()
	])

	chestOpen.onClick(() => {
		if (stapler.active && liver.isColliding(ice)) {
			add([
				sprite("chest-closed"),
				pos(5, 116)
			])
			play("staple")
			wait(1, () => {
				const doneBed = beds.children[curBed]
				doneBed.done = true
				doneBed.add([
					sprite("checkmark"),
					pos(0, -490),
					anchor("center")
				])
				go("shelter", { beds: beds, curBed: curBed })
			})
		}
	})

	const chestClosed = add([
		sprite("chest-closed"),
		pos(5, 116),
		area({ shape: new Rect(vec2(100, 200), 300, 400) })
	])

	const incision = []
	onDraw(() => {
		incision.forEach((pts) => {
			drawLines({
				width: 8,
				color: rgb(255, 0, 0),
				pts: pts,
			})
		})
	})

	const cut = play("cut", {
		loop: true,
		paused: true
	})
	chestClosed.onUpdate(() => {
		if (scalpel.active) {
			if (isMousePressed()) {
				incision.push([])
				cut.paused = false
			}
			if (isMouseDown() && isMouseMoved() && incision.length > 0) {
				incision[incision.length - 1].push(mousePos())
			}
			if (isMouseReleased()) {
				if (incision.flat().length >= 10) {
					incision.length = 0
					destroy(chestClosed)
				}
			}
		}
	})

	add([
		sprite("captcha"),
		pos(0, 0),
		z(1)
	])

	const ice = add([
		sprite("ice"),
		pos(50, height() / 2),
		anchor("center"),
		area()
	])

	const scalpel = add([
		sprite("scalpel"),
		pos(width(), 0),
		anchor("botleft"),
		z(2),
		{ active: false }
	])
	const forceps = add([
		sprite("forceps"),
		pos(width(), 0),
		anchor("botleft"),
		z(2),
		{ active: false }
	])
	const stapler = add([
		sprite("stapler"),
		pos(width(), 0),
		anchor("botleft"),
		z(2),
		{ active: false }
	])
	scalpel.onUpdate(() => {
		if (scalpel.active) {
			scalpel.pos = mousePos()
		}
	})
	forceps.onUpdate(() => {
		if (forceps.active) {
			forceps.pos = mousePos()
		}
	})
	stapler.onUpdate(() => {
		if (stapler.active) {
			stapler.pos = mousePos()
		}
	})

	const uiScalpel = add([
		sprite("ui-scalpel"),
		pos(width() - 184, 130),
		area(),
		z(1)
	])
	const uiForceps = add([
		sprite("ui-forceps"),
		pos(width() - 184, 300),
		area(),
		z(1)
	])
	const uiStapler = add([
		sprite("ui-stapler"),
		pos(width() - 184, 470),
		area(),
		z(1)
	])
	uiScalpel.onClick(() => {
		scalpel.active = true
		forceps.active = false
		stapler.active = false
		forceps.pos = [width(), 0]
		stapler.pos = [width(), 0]
		play("scalpel")
	})
	uiForceps.onClick(() => {
		forceps.active = true
		scalpel.active = false
		stapler.active = false
		scalpel.pos = [width(), 0]
		stapler.pos = [width(), 0]
		play("forceps")
	})
	uiStapler.onClick(() => {
		stapler.active = true
		scalpel.active = false
		forceps.active = false
		scalpel.pos = [width(), 0]
		forceps.pos = [width(), 0]
		play("stapler")
	})

	add([
		pos(8, height() - 8),
		text("Surgery-o-tron 3000®"),
		anchor("botleft"),
		color(26, 115, 232),
		z(1)
	])

	const exit = add([
		sprite("exit"),
		pos(width() - 63, height() - 34),
		anchor("center"),
		area({ offset: vec2(-15, -15) }),
		z(1)
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

	let curDraggin = null
	function drag() {
		let mouseOffset = vec2(0)
		return {
			id: "drag",
			require: [ "pos", "area" ],
			pick() {
				if (!chestClosed.exists() && forceps.active) {
					curDraggin = this
					mouseOffset = mousePos().sub(this.pos)
					this.trigger("drag")
					play("yoink-" + randi(3))
				}
			},
			update() {
				if (curDraggin === this && !chestClosed.exists() && forceps.active) {
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
		cut.paused = true
		if (curDraggin) {
			if (curDraggin == liver && liver.isColliding(ice)) {
				play("confirmation")
			}

			curDraggin.trigger("dragEnd")
			curDraggin = null
			play("drop")
		}
	})
})

scene("hide", (beds, curBed) => {
	
})

function start() {
	const beds = add([
		fixed()
	])
	for (let i = 1; i <= 10; i++) {
		const d = randi(3)
		const v = randi(3)
		beds.add([
			sprite("bed-" + d + "-" + v),
			pos(400 + width() / 3 * i, height() / 4 * 3),
			area(),
			anchor("bot"),
			"bed",
			{
				speed: 350,
				difficulty: d,
				variant: v,
				grade: d == 0 ? 3 : d == 1 ? 4 : 5,
				done: false
			}
		])
	}

	go("shelter", { beds: beds, curBed: null })
}

start()
