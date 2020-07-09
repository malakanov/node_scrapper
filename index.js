import cherio from "cherio"
import chalk from "chalk"
import {arrayFromLenght} from "./helpers/common"

const SITE = "https://auto.ru/catalog/cars/"
const PAGE = 8

(async function main(params) {
    try {
        for (const page of arrayFromLenght(8)){
            const url = `${SITE}${PAGE}`
            const pageContent = await getPageContent(url)

        }
        
    } catch (error) {
        console.log(chalk.red(`${error}`));
        
    }
    
})()

