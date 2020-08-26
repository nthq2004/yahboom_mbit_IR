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

    export function getFormat(): number {
      return fmt;
    } 
    //% blockId=Mbit_IR_syscode1
    //% blockGap=20 weight=90
    //% block="get syscode1"

    export function getSysCode1(): number {
      return buf[0];
    }
    //% blockId=Mbit_IR_syscode2
    //% blockGap=20 weight=90
    //% block="get syscode2"

    export function getSysCode2(): number {
     return buf[1];
    }
    //% blockId=Mbit_IR_btncode1
    //% blockGap=20 weight=90
    //% block="get btncode1"

    export function getBtnCode1(): number {
     return buf[2];
    } 
    //% blockId=Mbit_IR_btncode2
    //% blockGap=20 weight=90
    //% block="get btncode2"
    export function getBtnCode2(): number {
     return buf[3];
    }   
  }
  