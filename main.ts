enum RadioMessage {
    message1 = 49434,
    hello = 49337
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(randNum1)
    basic.pause(1000)
    if (receivedNumber >= randNum1) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.A, function () {
    randNum1 = randint(1, 6)
    radio.sendNumber(randNum1)
    basic.showNumber(randNum1)
})
let randNum1 = 0
radio.setGroup(1)
