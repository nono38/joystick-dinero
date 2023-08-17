radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber <= -10) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, receivedNumber * (-1 * pourcentage))
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, receivedNumber * -1)
    } else if (receivedNumber >= 10) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, receivedNumber * pourcentage)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, receivedNumber)
    } else {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "plus") {
        pourcentage = pourcentage + 0.01
    } else if (receivedString == "moins") {
        pourcentage = pourcentage - 0.01
    }
})
radio.onReceivedValue(function (name, value) {
    if (value > 10) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, value * pourcentage)
    } else if (value < -10) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, value * -1)
    } else {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    }
})
let pourcentage = 0
radio.setGroup(1)
let VITESSE = 100
pourcentage = 0.9
basic.forever(function () {
	
})
