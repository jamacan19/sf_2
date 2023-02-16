led.enable(false)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
