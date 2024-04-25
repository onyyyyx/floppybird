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

draw
