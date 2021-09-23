const fiveSense = {
    Sense: ['sight', 'hearing', 'touch', 'taste', 'smell'],
    quality: ['terrible sense','bad sense','good sense','great sense'],
    advice: ['nothing to do','go to check', 'enjoy it'],
}

const genRandom = num => {
    return Math.floor((Math.random) * num)
}

// sense array
let personalSense = []

for(let sen in fiveSense) {
    let selecSens = genRandom(fiveSense[sen].length)

    switch(sen) {
        case 'Sense' : 
            personalSense.push(`Your sense of ${fiveSense[sen][selecSens]}`)
        break

        case 'quality' :
            personalSense.push(`You have a ${fiveSene[sen][selecSens]}`)
        break

        case 'advice':
            personalSense.push(`I advise you to ${fiveSense[sen][slecSens]}`)
        break

        default:
            personalSense.push('I can not help you.')

    }
}

const peopleSense = (five) => {
    const people = personalSense.join('/n')
    console.log(people)
}

peopleSense(personalSense);

