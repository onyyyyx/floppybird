function draw_block(y: number, x: number) {
    
    on = [0, 1, 2, 3, 4]
    _py.py_array_pop(on, _py.py_array_index(on, x))
    for (let j of on) {
        led.plot(j, y)
    }
}

function menu() {
    let i: number;
    led.setBrightness(0)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        `)
    while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
        i = 0
        while (i < 256) {
            led.setBrightness(i)
            basic.pause(1)
            if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                break
            }
            
            i += 1
        }
        i = 255
        while (i > -1) {
            led.setBrightness(i)
            basic.pause(1)
            if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                break
            }
            
            i += -1
        }
    }
    basic.clearScreen()
}

let on = []
let block = [-1, randint(0, 4)]
let sprite = game.createSprite(2, 4)
game.setLife(3)
while (game.life() > 0) {
    if (input.isGesture(Gesture.TiltLeft) && sprite.x() > 0) {
        sprite.change(LedSpriteProperty.X, -1)
    } else if (input.isGesture(Gesture.TiltRight) && sprite.x() < 4) {
        sprite.change(LedSpriteProperty.X, 1)
    }
    
    draw_block(block[0], block[1])
    block[0] += 1
    basic.pause(200)
}
