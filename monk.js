class monk extends Phaser.Scene {
    preload() {
        // 'sky' is the key we use to refer to this image later
        this.load.image('Background', 'assets/Background.jpg');
        this.load.image('PrayingMonk', 'assets/PrayingMonk.png');
        this.load.image('Pen', 'assets/Pen.png')
    }

    create() {

        //--Intro--//
        //Background 
        this.b = this.add.image(675, 300, 'Background');
        this.b.displayWidth = 1350;

        //Moving Pen//
        this.p = this.add.image(400, 185, 'Pen');

        this.tweens.add({
            targets: this.p,
            y: 169,               
            duration: 3500,       
            ease: 'Bounce',
            yoyo: true           
        });
        
        //Fading Intro Text//
        let IntroText1 = this.add.text(195, 253, 'A',  { fontSize: '50px' });
        IntroText1.setColor('#000000');
        IntroText1.alpha = 0;

        this.tweens.add({
            targets: IntroText1,
            alpha: 1,
            duration: 1500,
            ease: 'Linear'
        });

        let IntroText2 = this.add.text(250, 253, 'really,',  { fontSize: '50px' });
        IntroText2.setColor('#000000');
        IntroText2.alpha = 0;

        this.tweens.add({
            targets: IntroText2,
            alpha: 1,
            duration: 2000,
            delay: 1500,
            ease: 'Linear'
        });

        let IntroText3 = this.add.text(465, 253, 'really',  { fontSize: '50px' });
        IntroText3.setColor('#000000');
        IntroText3.alpha = 0;

        this.tweens.add({
            targets: IntroText3,
            alpha: 1,
            duration: 2000,
            delay: 3000,
            ease: 'Linear'
        });

        let IntroText4 = this.add.text(670, 253, 'long',  { fontSize: '50px' });
        IntroText4.setColor('#000000');
        IntroText4.alpha = 0;

        this.tweens.add({
            targets: IntroText4,
            alpha: 1,
            duration: 1500,
            delay: 4500,
            ease: 'Linear'
        });

        let IntroText5 = this.add.text(810, 253, 'time',  { fontSize: '50px' });
        IntroText5.setColor('#000000');
        IntroText5.alpha = 0;

        this.tweens.add({
            targets: IntroText5,
            alpha: 1,
            duration: 1500,
            delay: 6000,
            ease: 'Linear'
        });

        let IntroText6 = this.add.text(948, 253, 'ago...',  { fontSize: '50px' });
        IntroText6.setColor('#000000');
        IntroText6.alpha = 0;

        this.tweens.add({
            targets: IntroText6,
            alpha: 1,
            duration: 1500,
            delay: 7100,
            ease: 'Linear'
        });
        //--Intro_End--//

        //--Letters_Falling--//
        this.tweens.add({
            targets: [IntroText1, IntroText2, IntroText3, IntroText4, IntroText5, IntroText6],
            scale: 1.25,
            duration: 30000,
            delay: 9000,
            ease: 'Power2'
        });

        this.tweens.add({
            targets: [IntroText1, IntroText2, IntroText3, IntroText4, IntroText5, IntroText6, this.p],
            y: 1100,
            duration: 9000,
            delay: 9000,
            ease: 'Linear'
        })
        //--Letters_Falling_End--//

        //--Three_Monk_Praying--//
        this.pm2 = this.add.image(500, 423, 'PrayingMonk');
        this.pm3 = this.add.image(850, 423, 'PrayingMonk');
        this.pm1 = this.add.image(675, 423, 'PrayingMonk');
        this.pm1.alpha = 0;
        this.pm2.alpha = 0;
        this.pm3.alpha = 0;

        this.tweens.add({
            targets: this.pm1,
            y: 400,
            scale: 1.3,
            alpha: 1,
            duration: 4700,
            delay: 9500,
            ease: 'EaseIn'
        });

        this.tweens.add({
            targets: [this.pm2, this.pm3],
            y: 400,
            scale: 1.1,
            alpha: .80,
            duration: 4700,
            delay: 9500,
            ease: 'EaseIn'
        });

        let SecondPhrase = this.add.text(260, 100, "There lived a clan of monks",  { fontSize: '50px' });
        SecondPhrase.setColor('#000000');
        SecondPhrase.alpha = 0;

        this.tweens.add({
            targets: SecondPhrase,
            y: 65,
            alpha: 1,
            scale: 1.05,
            duration: 4200,
            delay: 9500,
            ease: 'EaseIn'
        });

        //Background_Zoom
        this.tweens.add({
            targets: this.b,
            displayWidth: 4050,
            displayHeight: 2500,
            duration: 5450,
            delay: 9050,
            ease: 'EaseOut'
        })
        //--three_Monk_Praying_End--//

        //Next idea: monk moves to the right and the two behind him move to the left, then text appears, "but one stood out from the rest of the crowd, that monks name was wonhyo etc"

        console.log("hi hehe :)");
    }
    
    update() {
        if (this.p.x < 1375) {
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