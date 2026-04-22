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
        let b = this.add.image(675, 300, 'Background');
        b.displayWidth = 1300;

        //Moving Pen//
        this.p = this.add.image(400, 185, 'Pen');

        this.tweens.add({
            targets: this.p,
            y: 175,               
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

        //--Zoom_To_Suspense--//
        this.tweens.add({
            targets: [IntroText1, IntroText2, IntroText3, IntroText4, IntroText5, IntroText6, this.p],
            scale: 1.5,
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
        //--New_Scene--//
        let BodyText = this.add.text(215, 300, "That monk's name",  { fontSize: '50px' });
        BodyText.setColor('#000000');
        BodyText.alpha = 0;

        this.tweens.add({
            targets: BodyText,
            alpha: 1,
            scale: 1.3,
            duration: 2000,
            delay: 11000,
            ease: 'EaseOut'
        })


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