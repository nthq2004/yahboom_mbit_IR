/*
Copyright (C): 2020, Shenzhen Yahboom Tech
modified by chengengyue
*/

/**
 * IR remote
 */
//% icon="\uf1eb" weight=19 color=50
namespace Mbit_IR {

    /**
    * initialization
    */
    //% blockId=Mbit_IR_init
    //% blockGap=20 weight=90
    //% block="connect ir receiver to %pin"
    //% shim=Mbit_IR::init
    export function init(pin: Pins): void {
      return
    }
  
    /**
    * button pushed.
    */
    //% blockId=Mbit_IR_received_event
    //% blockGap=20 weight=89
    //% block="on |%btn| button pressed"
    //% shim=Mbit_IR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body:Action): void {
      return
    }
  
    //% blockId=Mbit_IR_format
    //% blockGap=20 weight=90
    //% block="get IR format(NEC AHEA SONY)"
    //% shim=Mbit_IR::getFormat
    export function getFormat(): number {

    } 
    //% blockId=Mbit_IR_syscode1
    //% blockGap=20 weight=90
    //% block="get syscode1"
    //% shim=Mbit_IR::getSysCode1
    export function getSysCode1(): number {

    }
    //% blockId=Mbit_IR_syscode2
    //% blockGap=20 weight=90
    //% block="get syscode2"
    //% shim=Mbit_IR::getSysCode2
    export function getSysCode2(): number {

    }
    //% blockId=Mbit_IR_btncode1
    //% blockGap=20 weight=90
    //% block="get btncode1"
    //% shim=Mbit_IR::getBtnCode1
    export function getBtnCode1(): number {

    } 
    //% blockId=Mbit_IR_btncode2
    //% blockGap=20 weight=90
    //% block="get btncode2"
    //% shim=Mbit_IR::getBtnCode2
    export function getBtnCode2(): number {

    }   
  }
  