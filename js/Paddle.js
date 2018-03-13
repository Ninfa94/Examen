const Paddle = function(player , color){
	const UP = -1
	const DOWN = 1
	const w = 30
	const h = 200
	const x = player === 1 ? 0 : width - w 
	const c = color
	let speed = 20
	let y = Math.floor(height /2) - Math.floor(h/2)
	let score = 0
	
	const getX = function (){
		return x
	}

	const getY = function(){
		return y
	}

	const getW = function(){
		return w
	}

	const getH = function(){
		return h
	}

	const edge = function(dir){
		return (dir ===  UP && y >= 0 ) ||
		(dir ===  DOWN && y + h <= height)
	}

	const draw = function(){
		rectMode(CORNER)
		fill(c)
		rect(x,y,w,h)
	}

	const move = function(dir){
		if(edge(dir))
		y += (speed * dir) 

	}

	const getScore = function (){
		return score
	}

	const updateScore = function (){
		score ++
	}

	return{
		draw,
		move,
		getX,
		getY,
		getW, 
		getH,
		getScore,
		updateScore,
	}
}


//hacer el hoky, que tenga porteria y aumente lo punteria y 
// la mitad de la cancha .