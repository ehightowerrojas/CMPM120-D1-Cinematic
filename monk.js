class monk extends Phaser.Scene {
    preload() {
        // 'sky' is the key we use to refer to this image later
        this.load.image('Background', 'assets/Background.jpg');
        this.load.image('PrayingMonk', 'assets/PrayingMonk.png');
        this.load.image('AwesomeMonk', 'assets/AwesomeMonk.png');
        this.load.image('Wonhyo', 'assets/Wonhyo.png');
        this.load.image('FBackground', 'assets/FinalBackground.jpg');
        this.load.image('Pen', 'assets/Pen.png');
        this.load.audio('Music', 'assets/music.mp3');
        this.load.audio('Twinkle', 'assets/twinkle.mp3');
        this.load.image('Arrow', 'assets/Arrow.png');
    }

    create() {

        //--Intro--//
        //Background & Music Player
        this.b = this.add.image(675, 300, 'Background');
        this.b.displayWidth = 1350;
        
        const muh = this.add.container(0, 0);
        this.mu = this.add.rectangle(220, 464, 500, 45, 0x000000);
        let MusicStart = this.add.text(17, 450, 'Click Anywhere for Music', { fontSize: '30px'});


        muh.add([this.mu, MusicStart])
        
        this.input.on('pointerdown', (pointer) => {
            console.log('click');
            this.tweens.add({
                targets: muh,
                x: -500,
                duration: 900,
                ease: 'Linear'
            });
        });
  

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
        let IntroText1 = this.add.text(195, 253, 'A', { fontSize: '50px' });
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
        //--Intro End--//

        //--Letters Falling--//
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
        });
        //--Letters Falling End--//

        //--Three Monk Praying--//
        //Monks Praying
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

        //Second Phrase
        let SecondPhrase = this.add.text(295, 100, "There lived a clan of monks",  { fontSize: '50px' });
        SecondPhrase.setColor('#000000');
        SecondPhrase.alpha = 0;

        this.tweens.add({
            targets: SecondPhrase,
            y: 65,
            alpha: 1,
            scale: .92,
            duration: 4700,
            delay: 9500,
            ease: 'EaseIn'
        });

        //Background Zoom
        this.tweens.add({
            targets: this.b,
            displayWidth: 4050,
            displayHeight: 2500,
            duration: 5450,
            delay: 9050,
            ease: 'EaseOut'
        });
        //--Three Monk Praying End--//

        //--Iso Monk--//
        //Iso Phrase
        let IsoPhrase = this.add.text(15, 240, "But there was always one that\nstood out among the rest...", { fontSize: '39px'});
        IsoPhrase.setColor('#000000');
        IsoPhrase.alpha = 0;

        this.tweens.add({
            targets: IsoPhrase,
            x: 40,
            alpha: 1,
            scale: 1.05,
            duration: 2300,
            delay: 17000,
            ease: 'EaseIn'
        });

        //Iso Monk
        this.tweens.add({
            targets: SecondPhrase,
            x: -1200,
            alpha: 0,
            duration: 2300,
            delay: 17000,
            ease: 'EaseIn'

        })
        this.tweens.add({
            targets: this.pm1,
            x: 1000,
            scale: 1.6,
            duration: 2300,
            delay: 17000,
            ease: 'EaseIn'
        });

        this.tweens.add({
            targets: [this.pm2, this.pm3],
            x: -200,
            alpha: 0,
            duration: 2050,
            delay: 17000,
            ease: 'EaseIn'
        });
        //--Iso Monk End--//

        //--Awesome Background--//
        this.bb = this.add.rectangle(675, -350, 25, 700, 0x000000);

        this.tweens.add({
            targets: this.bb,
            y: 300,
            duration: 800,
            delay: 21500
        });

        this.tweens.add({
            targets: this.bb,
            displayWidth: 1350,
            duration: 900,
            delay: 22300

        });

        //Monk Transition lol
        this.ab = this.add.image(675, 300, 'AwesomeMonk');
        this.ab.alpha = 0;

        this.tweens.add({
            targets: this.ab,
            alpha: 1,
            duration: 1800,
            delay: 23100

        });

        let AmazingPhrase = this.add.text(150, 15, "He was a monk of amazing discipline and power", { fontSize: '39px'});
        AmazingPhrase.alpha = 0;   

        this.tweens.add({
            targets: AmazingPhrase,
            alpha: 1,
            duration: 2300,
            delay: 23100,
            ease: 'EaseIn'
        });
        //--Awesome Background End--//

        //--Build Up Moment--//
        this.tweens.add({
            targets: [AmazingPhrase, this.ab],
            x: 675,
            y: 300,
            scale: 0,
            duration: 2500,
            delay: 25600,
            ease: 'EaseIn'  
        });

        let MomentPhrase = this.add.text(-10, 270, "This is the story of...", { fontSize: '75px'});
        let MomentPhrase2 = this.add.text(-30, 270, "This is the story of...", { fontSize: '75px'});
        let MomentPhrase3 = this.add.text(-70, 270, "This is the story of...", { fontSize: '75px'});
        MomentPhrase.alpha = 0;
        MomentPhrase2.alpha = 0;
        MomentPhrase3.alpha = 0;
        MomentPhrase.scale = 1.5;
        MomentPhrase2.scale = 1.3;
        MomentPhrase3.scale = 1.1;


        this.tweens.add({
            targets: [MomentPhrase, MomentPhrase2, MomentPhrase3],
            x: 150,
            scale: 1,
            alpha: 1,
            duration: 2500,
            delay: 25600,
            ease: 'EaseIn'
        });
        //--Build Up Moment End--//

        //--Wonhyo Screen--//
        this.f = this.add.image(675, 300, 'FBackground');

        this.tweens.add({
            targets: [MomentPhrase, MomentPhrase2, MomentPhrase3],
            x: -1100,
            duration: 1000,
            delay: 30000
        });

        this.w = this.physics.add.image(1600, 300, 'Wonhyo');
        this.w.body.setAllowGravity(false);
        this.w.scale = 1.8;

        this.tweens.add({
            targets: this.w,
            x: 675,
            duration: 1000,
            delay: 30000
        });

        this.bbb = this.add.rectangle(-675, 385, 1350, 65, 0x000000);
        this.bbb.alpha = 0.65;

        this.tweens.add({
            targets: this.bbb,
            x: 675,
            duration: 1000,
            delay: 31200,
            ease: 'Power2'
        });

        let FinalPhrase = this.add.text(1700, 370, "The monk that could deflect it all!", { fontSize: '30px'});
        FinalPhrase.alpha = 0;

        this.tweens.add({
            targets: FinalPhrase,
            x: 350,
            alpha: 1,
            duration: 1000,
            delay: 31200,
            ease: 'Power2'
        });   

        this.f.displayWidth = 1350;
        this.f.displayHeight = 600;
        this.f.alpha = 0;

        this.tweens.add({
            targets: this.f,
            alpha: .75,
            duration: 1000,
            delay: 31300
        });

        let Music1 = this.sound.add('Music', { loop: false });
        let Music2 = this.sound.add('Twinkle', { loop: false });
        Music1.play();
        Music2.play();

        //Arrow Deflect Stuff//
        this.a1 = this.physics.add.image(-675, -300, 'Arrow');
        this.a2 = this.physics.add.image(675, 300, 'Arrow');
        this.a1.scale = 0.2;
        this.a2.scale = 0.2;
        this.a1.body.setAllowGravity(false);
        this.a2.body.setAllowGravity(false);
        this.a1.setAngle(30);
        this.a2.setAngle(-40);
        this.a2.alpha = 0;

        this.tweens.add({
            targets: this.a1,
            x: 675,
            y: 300,
            duration: 500,
            delay: 31800
        });

        this.tweens.add({
            targets: this.a2,
            alpha: 1,
            duration: 0,
            delay: 32300
        });

        this.tweens.add({
            targets: this.a2,
            x: 1100,
            y: -300,
            setAngle: -40,
            duration: 500,
            delay: 32301
        });

        this.physics.add.overlap(this.w, this.a1, (obj1, obj2) => {
            obj2.destroy();
        }, null, this);

        //--Wonhyo Screen End--//

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
    physics: {
        default: 'arcade', // This must be set to 'arcade'
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },

    scene: monk

};
const game = new Phaser.Game(config);