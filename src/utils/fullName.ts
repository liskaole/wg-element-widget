import { ElementI } from "../store/ElementModel"

export const fullName = (name: ElementI['name'], elementNumber: ElementI['elementNumber']) => {
    return name + ' ' + elementNumber
}