var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var info;
var timer;
var melanics_n = 0;
var nonmelanics_n = 0;
var total_n = 0;
var play = false; // could use this to differentiate between scene types

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('melanic', 'assets/melanic.png');
  this.load.image('nonmelanic', 'assets/nonmelanic.png');
  this.load.image('lichenless', 'assets/lichenless.png');
  this.load.image('lichen', 'assets/lichen.png');
}

function create ()
{
  this.add.image(400, 400, 'lichenless');

  melanics = this.physics.add.staticGroup();
  nonmelanics = this.physics.add.staticGroup();

  for (var i = 0, len = 11; i < len; i++) {
      melanic = melanics.create(
          Phaser.Math.RND.between(0, 800), Phaser.Math.RND.between(0, 800),
          'melanic');
      melanic.setInteractive()
      melanic.on('clicked', collectMelanic, this);
  }

  for (var i = 0, len = 11; i < len; i++) {
      nonmelanic = nonmelanics.create(
          Phaser.Math.RND.between(0, 800), Phaser.Math.RND.between(0, 800),
          'nonmelanic');
      nonmelanic.setInteractive()
      nonmelanic.on('clicked', collectNonMelanic, this);
  }

  this.input.on('gameobjectup', function (pointer, gameObject)
  {
      gameObject.emit('clicked', gameObject);
  }, this);

  info = this.add.text(10, 10, '', { font: '20px Arial', fill: '#87ceeb' });
  timer = this.time.addEvent({ delay: 20000, callback: nextRound, callbackScope: this });
}

function update ()
{
    info.setText(
        'melanics: ' + melanics_n +
        '    non-melanics: ' + nonmelanics_n +
        '\ntime remaining: ' + Math.floor(20000 - timer.getElapsed()) +
        '    total: ' + total_n);
}

function collectMelanic (melanic)
{
    melanic.off('clicked', collectMelanic);
    melanic.input.enabled = false;
    melanic.setVisible(false);
    melanics_n ++;
    total_n ++;
}

// TODO: Refactor this
function collectNonMelanic (nonmelanic)
{
    nonmelanic.off('clicked', collectNonMelanic);
    nonmelanic.input.enabled = false;
    nonmelanic.setVisible(false);
    nonmelanics_n ++;
    total_n ++;
}

function nextRound ()
{
    this.input.off('gameobjectup');
    // inter-round stuff here
    this.scene.restart();
}
