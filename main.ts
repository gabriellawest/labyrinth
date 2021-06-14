namespace SpriteKind {
    export const StatusBar = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
    mySprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        music.baDing.play()
    }
    tiles.setTilemap(tilemap`level11`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    g1.setPosition(7, 8)
    g2.setPosition(13, 2)
    g3.setPosition(4, 3)
    g4.setPosition(1, 12)
    g1.follow(mySprite, 30)
    g2.follow(mySprite, 40)
    g3.follow(mySprite, 50)
    g4.follow(mySprite, 60)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e . . . . . 
        . . 7 7 7 e 4 4 e f f f . 
        . . 7 7 7 e 4 4 e f . . . 
        . . f 6 6 f e e . . . . . 
        . . . f f f f . . . . . . 
        . . . . f f f . . . . . . 
        `)
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        music.baDing.play()
    }
    tiles.setTilemap(tilemap`level8`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    g1.setPosition(7, 8)
    g2.setPosition(13, 2)
    g3.setPosition(4, 3)
    g4.setPosition(1, 12)
    g1.follow(mySprite, 30)
    g2.follow(mySprite, 40)
    g3.follow(mySprite, 50)
    g4.follow(mySprite, 60)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . . . e e e e e f . . 
        . f f f e 4 4 e 7 7 7 . . 
        . . . f e 4 4 e 7 7 7 . . 
        . . . . . e e f 6 6 f . . 
        . . . . . . f f f f . . . 
        . . . . . . f f f . . . . 
        `)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -100, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
    mySprite.setImage(img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    music.footstep.play()
    mySprite.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    for (let index = 0; index < 1; index++) {
        music.baDing.play()
    }
    game.showLongText("there's a gun in your pocket and you don't know how it got there. the barrel is rusted over but it shoots precisely, and it's seemingly perpetually loaded", DialogLayout.Bottom)
    game.showLongText("press A or B to shoot at ghosts", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level0`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    g1 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cb5b5c111cf....
        ....f1b1b155551b1b1f....
        ....fbfb555555bfbfbf....
        .........555555.........
        ...........555..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    g1.setPosition(8, 14)
    g1.setBounceOnWall(true)
    g2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cb7b7c111cf....
        ....f1b1b177771b1b1f....
        ....fbfb777777bfbfbf....
        .........777777.........
        ...........777..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    g2.setPosition(13, 2)
    g2.setBounceOnWall(true)
    g3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbebe1b1b1f....
        ....f1b1b1eeeebfbfbf....
        ....fbfbeeeeeee.........
        .........eeeee..........
        ..........eee...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    g3.setPosition(4, 3)
    g3.setBounceOnWall(true)
    g4 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    g4.setPosition(1, 5)
    g4.setBounceOnWall(true)
    g1.follow(mySprite, 20)
    g2.follow(mySprite, 30)
    g3.follow(mySprite, 40)
    g4.follow(mySprite, 50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let g4: Sprite = null
let g3: Sprite = null
let g2: Sprite = null
let g1: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`playerfront`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
