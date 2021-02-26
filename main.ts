input.onPinPressed(TouchPin.P0, function () {
    music.playMelody("B A C5 B A F G A ", 70)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # . . .
        # . . . .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        . . # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        # . . . .
        # # # . .
        . . # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # . .
        . # . . .
        . # . . .
        . # . . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    basic.showString("ROLL")
    music.playMelody("B A C5 B A G - G ", 120)
    basic.showNumber(randint(1, 10))
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("E E - E - E - - ", 120)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Surprised)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Yes)
    basic.showIcon(IconNames.Yes)
    basic.showString(".")
    basic.showString("..")
    basic.showString("...")
    basic.showString("?")
    basic.showString("?")
    basic.showString("!")
    basic.showString("You...")
    music.playMelody("F F G F E F E D ", 120)
    basic.showString("TBC.")
    music.playMelody("A G F E D C D C ", 120)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 6; index++) {
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Diamond)
    }
    basic.showIcon(IconNames.StickFigure)
    basic.showIcon(IconNames.StickFigure)
    basic.showString("Thanks")
})
input.onPinPressed(TouchPin.P1, function () {
    music.playMelody("A G B A - G - G ", 120)
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("E G A B A D G D ", 120)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # . #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # . # .
        . . # . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("C5 B A G A B C5 G ", 120)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # #
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # #
        . . # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # # . # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # # # # .
        # . . # .
        # # # # .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        # # # # .
        `)
    music.playMelody("C5 B A G A B C5 C5 ", 120)
    basic.showIcon(IconNames.QuarterNote)
    basic.showIcon(IconNames.EigthNote)
    basic.showIcon(IconNames.QuarterNote)
    basic.showIcon(IconNames.EigthNote)
    basic.showIcon(IconNames.QuarterNote)
    basic.showIcon(IconNames.EigthNote)
    music.playMelody("C5 A B G A F G E ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
    music.playMelody("G - - - - - - - ", 120)
})
basic.showString("Hi!")
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    . . . . .
    . . . # .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . #
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    # . # . #
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    # . # . #
    . . . . .
    # . # . #
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    # . # . #
    . . . . .
    # . # . #
    . . . . .
    # . # . #
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Begin.")
