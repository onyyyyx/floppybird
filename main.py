def draw(y: int, x: int):
    on=list(range(0,x))+list(range(x+1,5))

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
        for i in range(256):
            led.set_brightness(i)
            basic.pause(1)
            if input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B): break
        for i in range(255,-1,-1):
            led.set_brightness(i)
            basic.pause(1)
            if input.button_is_pressed(Button.A) or input.button_is_pressed(Button.B): break
    basic.clear_screen()

menu()