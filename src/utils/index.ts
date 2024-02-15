import { Icons, BgImages } from "./images"


export const getSvgWeather = ({ Main, Description }: { Main: string, Description: string }) => {
    if (Icons.hasOwnProperty(Main)) {
        if (Icons[Main].hasOwnProperty(Description)) {
            return Icons[Main][Description]
        }
        else {
            return Icons[Main]['default']
        }
    }
    return Icons.Clear['default']
}
export const getRandomBgTheme = () => {
    return BgImages.BgSpace
}
export const getRandomBgLinear = (temp?: number) => {
    const gradients = [
        ['#ff7e5f', '#feb47b'],
        ['#ee0979', '#ff6a00'],
        ['#DCE35B', '#45B649'],
        ['#C33764', '#1D2671'],
        ['#4568DC', '#B06AB3'],
        // Colds
        ['#43C6AC', '#191654'],
        ['#44A08D', '#093637'],
        ['#093028', '#237A57'],
        ['#41295a', '#2F0743'],
        ['#43C6AC', '#191654'],
    ]
    if (temp) {
        // Hot weather :)
        if (temp > 15) { return gradients[Math.floor(Math.random() * gradients.length - 5)] }
        else { return gradients[Math.floor(5 + (Math.random() * gradients.length - 5))] }
    }
    return gradients[Math.floor(Math.random() * gradients.length)]
}
export const msToTime = (duration: number) => {
    const milliseconds = Math.floor((duration % 1000) / 100)
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    const hours_output = (hours < 10) ? "0" + String(hours) : hours;
    const minutes_output = (minutes < 10) ? "0" + minutes : minutes;
    const seconds_output = (seconds < 10) ? "0" + seconds : seconds;

    return hours_output + ":" + minutes_output + ":" + seconds_output;
}