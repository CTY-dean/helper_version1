function ifsthtrue () {
    if (num == 4 || num < 1) {
        num = 0
    }
    do_it()
}
input.onButtonPressed(Button.A, function () {
    if (check == 0) {
        num += -1
        ifsthtrue()
    }
})
function campus (c: number) {
    if (c >= 0 && c < 30) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (c >= 30 && c < 60) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (c >= 60 && c < 120) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
    }
    if (c >= 120 && c < 150) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    }
    if (c >= 150 && c < 210) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (c >= 210 && c < 240) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
    if (c >= 240 && c < 300) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
    }
    if (c >= 300 && c < 330) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    light_turn = 1
    get_out = 1
    light_turn = 1
    do_it()
})
function light3 (light_: number) {
    if (get_out == 0) {
        led.plotBrightness(2, 1, light_)
        led.plotBrightness(1, 2, light_)
        led.plotBrightness(2, 3, light_)
        led.plotBrightness(3, 2, light_)
    }
}
input.onButtonPressed(Button.AB, function () {
    get_out = 0
    light_turn = 0
    check = 1
    while (get_out == 0) {
        if (num == 0) {
            basic.clearScreen()
            while (light_turn == 0) {
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
            }
        } else if (num == 1) {
            campus(input.compassHeading())
        } else if (num == 2) {
            basic.showNumber(input.lightLevel())
        } else {
            basic.showNumber(input.temperature())
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (check == 0) {
        num += 1
        ifsthtrue()
    }
})
function do_it () {
    if (num == 0) {
        basic.showLeds(`
            . . # . .
            # . # . #
            # . # . #
            # . . . #
            . # # # .
            `)
    } else if (num == 1) {
        basic.showLeds(`
            . # # # .
            # . . # #
            # . # . #
            # . . . #
            . # # # .
            `)
    } else if (num == 2) {
        basic.showLeds(`
            # # # # #
            . # # # .
            # . # . #
            . . . . .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . # #
            . # . # #
            # . . . .
            # . . . .
            . # . . .
            `)
    }
}
let get_out = 0
let num = 0
let check = 0
let light_turn = 0
basic.clearScreen()
basic.showString("")
light_turn = 1
check = 0
num = 0
get_out = 0
do_it()
basic.forever(function () {
    if (get_out == 1) {
        check = 0
    }
})
