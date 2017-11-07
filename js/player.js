class Player {
    constructor() {
        this.hp = 100;
        this.gold = 100;
        this.buymode = false;
        this.dmg = 1;
    }

    reset() {
        this.hp = 100;
        this.gold = 100;
        this.buymode = true;
        wave = 0;

        alive.forEach(function(e) {
            stage.removeChild(e.shape);
            //u.remove(e.shape);
        })

        towers.forEach(function(t) {
            u.remove(t.tower);
        })

        enemies = [];
        towers = [];
        map.waves = [];
        map.counter = [];
        update();

    }
}