export function arrayFromLenght(number) {
    return Array.from(new Array(number).keys().map(k => k+1))
}