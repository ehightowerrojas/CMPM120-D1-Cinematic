class monk extends Phaser.Scene {
    preload() {
        // 'sky' is the key we use to refer to this image later
        this.load.image('Background', 'assets/Background.jpg');
        this.load.image('PrayingMonk', 'assets/PrayingMonk.png');
        this.load.image('Pen', 'assets/Pen.png')
    }

    create() {
        //Background 
        let b = this.add.image(675, 300, 'Background');
        b.displayWidth = 1300;

        //Moving Pen
        this.p = this.add.image(400, 175, 'Pen');

        this.tweens.add({
            targets: this.p,
            y: 100,               // Target Y position (up)
            duration: 1850,       // 2 seconds to move
            ease: 'Bounce',
            yoyo: true           // Move back to original Y        
        });


        console.log("man fuck you");
    }
    
    update() {
        if (this.p.x < 800) {
            this.p.x += 2;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1350,
    height: 600,
    scene: monk
};
const game = new Phaser.Game(config);