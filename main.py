def draw_block(y: number, x: number):
    global on
    on = [0, 1, 2, 3, 4]
    on.pop(on.index(x))
    for j in on:
        led.plot(j, y)
    for i in range(5):
        let.unplot(i,y-1)
def menu():
    led.set_brightness(0)
    basic.show_leds("""
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        """)
    while not (input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B)):
        i = 0
        while i < 256:
            led.set_brightness(i)
            basic.pause(1)
            if input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
                break
            i += 1
        i = 255
        while i > -1:
            led.set_brightness(i)
            basic.pause(1)
            if input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B):
                break
            i += -1
    basic.clear_screen()
on = []
block = [-1, randint(0, 4)]
sprite = game.create_sprite(2, 4)
game.set_life(3)
while game.life() > 0:
    if input.is_gesture(Gesture.TILT_LEFT) and sprite.x() > 0:
        sprite.change(LedSpriteProperty.X, -1)
    elif input.is_gesture(Gesture.TILT_RIGHT) and sprite.x() < 4:
        sprite.change(LedSpriteProperty.X, 1)
    draw_block(block[0], block[1])
    if block[0]>4:
        block = [0, randint(0, 4)]
    block[0]+=1
    basic.pause(200)