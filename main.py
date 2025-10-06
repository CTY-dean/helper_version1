def on_button_pressed_a():
    global num
    if check == 0:
        num += -1
        ifsthtrue()
input.on_button_pressed(Button.A, on_button_pressed_a)

def campus(c: number):
    if c >= 0 and c < 30:
        basic.show_leds("""
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            """)
    if c >= 30 and c < 60:
        basic.show_leds("""
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            """)
    if c >= 60 and c < 120:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            """)
    if c >= 120 and c < 150:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            """)
    if c >= 150 and c < 210:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            """)
    if c >= 210 and c < 240:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            """)
    if c >= 240 and c < 300:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            """)
    if c >= 300 and c < 330:
        basic.show_leds("""
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            """)
def ifsthtrue():
    global num
    if num == 4 or num < 1:
        num = 0
    do_it()
    return 0

def on_logo_pressed():
    global get_out
    basic.clear_screen()
    get_out = 1
    do_it()
    get_out = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_ab():
    global time, check
    time = 0
    check = 1
    while get_out == 0:
        if num == 0:
            basic.clear_screen()
            while True:
                light2()
        elif num == 1:
            campus(input.compass_heading())
        elif num == 2:
            basic.show_number(input.light_level())
        else:
            basic.show_number(input.temperature())
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global num
    if check == 0:
        num += 1
        ifsthtrue()
input.on_button_pressed(Button.B, on_button_pressed_b)

def light3(light_: number):
    if get_out == 1:
        led.plot_brightness(2, 1, light_)
        led.plot_brightness(1, 2, light_)
        led.plot_brightness(2, 3, light_)
        led.plot_brightness(3, 2, light_)
    return 0
def light2():
    light3(0)
    basic.pause(200)
    light3(51)
    basic.pause(200)
    light3(102)
    basic.pause(200)
    light3(153)
    basic.pause(200)
    light3(204)
    basic.pause(1000)
    light3(153)
    basic.pause(200)
    light3(102)
    basic.pause(200)
    light3(51)
    basic.pause(200)
    light3(0)
    basic.pause(1000)
def do_it():
    if num == 0:
        basic.show_leds("""
            . . # . .
            # . # . #
            # . # . #
            # . . . #
            . # # # .
            """)
    elif num == 1:
        basic.show_leds("""
            . # # # .
            # . . # #
            # . # . #
            # . . . #
            . # # # .
            """)
    elif num == 2:
        basic.show_leds("""
            # # # # #
            . # # # .
            # . # . #
            . . . . .
            . # # # .
            """)
    else:
        basic.show_leds("""
            . . . # #
            . # . # #
            # . . . .
            # . . . .
            . # . . .
            """)
    return 0
time = 0
get_out = 0
num = 0
check = 0
basic.clear_screen()
basic.show_string("")
check = 0
num = 0
get_out = 0
do_it()

def on_forever():
    global check
    if get_out == 1:
        check = 0
basic.forever(on_forever)
