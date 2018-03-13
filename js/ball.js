const Ball = function () {
	const r = 20
	let x = width / 2
	let y = height / 2
	let speedX = 20 * randomDirection()
	let speedY = 2 * randomDirection()

	const resert = function(){
		x = Math.floor(width/2)
		y = Math.floor(height/2)

		speedX *=randomDirection()
		speedY *=randomDirection()
	}

	const draw = function (){
		ellipseMode(CENTER)
		fill('#e84ea5')
		noStroke()
		ellipse(x, y, r * 2, r * 2)
	}

	const move = function (){

		x += speedX
		y += speedY
		edges()
	}

	function randomDirection(){
		return Math.round(Math.random()) * 2 - 1
	}

	const edges = function (){
		if(y  + r >= height || y - r <= 0)
			speedY *= -1	
	}

	const checkScore = function (){
		if(x - r <= 0){
			resert()
			return 2
		}

		if(x + r >= width){
			resert()
			return 1
		}
		return 0
	}

	const collision = function(player){
			let dx = Math.abs(x - player.getX() - player.getW()/2)
			let dy = Math.abs(y - player.getY() - player.getH()/2)

			if(dx > player.getW() / 2 + r || dy > player.getH() / 2 + r)
				return false

			if(dx <= player.getW() / 2 || dy <= player.getH() / 2){
				speedX *= -1
				return true
			}
		}

	return{
		draw,
		move,
		collision,
		checkScore,
	}
}