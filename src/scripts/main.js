console.log("Welcome to the main module")

import { createPlan } from "./plan.js"
import { createAsparagus} from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato} from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'
import { usePlants } from './field.js'

const yearlyPlan = createPlan()

for (const plan of yearlyPlan) {
    console.log(yearlyPlan)
}

// const asparagusPlant = createAsparagus ()
// console.log(asparagusPlant)

// const cornPlant = createCorn ()
// console.log(cornPlant)

// const potatoPlant = createPotato ()
// console.log(potatoPlant)

// const soybeanPlant = createSoybean ()
// console.log(soybeanPlant)

// const sunflowerPlant = createSunflower ()
// console.log(sunflowerPlant)

// const wheatPlant = createWheat ()
// console.log(wheatPlant)

const usePlant = usePlants()
console.log(usePlant)