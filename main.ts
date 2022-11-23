let item = 0
let Pixel = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    Pixel.setPixelColor(item, neopixel.colors(NeoPixelColors.Red))
    if (item < 24) {
        item += 1
        Pixel.show()
        Pixel.clear()
    } else if (item >= 24) {
        item = 0
    }
})
