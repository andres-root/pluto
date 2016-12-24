

class Engine {
	constructor() {
		this.canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext('2d');
		this.entities = [];
		this._deferredKill: [];
		this.factory = {
			Entity: Entity,
			Enemy: Enemy
		};
	}

	setup() {
		this.canvas.width = 1200;
		this.canvas.height = 720;
		this.ctx.beginPath();
		this.ctx.rect(0, 0, canvas.width, canvas.height);
		this.ctx.fillStyle = 'black';
		this.ctx.fill();
	}

	spawnEntity(typename) {
		var entity = new (this.factory[typename])();
		this.entities.push[entity];

		return entity;
	}

	update() {
		for (var i = 0; i < this.entities.length; i++) {
			let entity = this.entities[i];
			if (!entity) {
				entity.update();
			} else {
				this._deferredKill.push(entity);
			}

			// Remove all killed entities
			for (var i = 0; i < this._deferredKill.length; i++) {
				this.entities = this.entities.filter((value) => value != this._deferredKill[i]);
			}

			this._deferredKill = [];
	}
}


class Entity {
	constructor(x, y, w, h) {
		this.position = {x: 0, y: 0};
		this.size = {w: 0, h: 0};
		this._killed = false;
		this.currSpriteName = null;
		this.zindex = 0;
	}

	update() {}

	draw() {
		if (this.currSpriteName) {
			// Draw Sprite
		}
	}


}

class Enemy extends Entity {

	constructor(x, y, w, h) {
		super(x, y, w, h);
		this.life = 1;
	}
	
	kill() {
		console.log('You killed the enemy!');
	}

	update() {
		if (this.life <= 0) {
			this.kill();
			return;
		}
	}
}

var game = new Engine();
game.setup();

var enemy = game.spawnEntity('Enemy');

