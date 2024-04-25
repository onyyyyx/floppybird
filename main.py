def draw(y, x):
    on=list(range(0,x))+list(range(x+1,5))
    for i in on:
        led.plot(y, i)

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

draw(2,2)