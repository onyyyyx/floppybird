// def draw(y: int, x: int):
//     on=list(range(0,x))+list(range(x+1,5))
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
        for (i = 0; i < 256; i++) {
            led.setBrightness(i)
            basic.pause(1)
            if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                break
            }
            
        }
        for (i = 255; i > -1; i += -1) {
            led.setBrightness(i)
            basic.pause(1)
            if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
                break
            }
            
        }
    }
    basic.clearScreen()
}

menu()
