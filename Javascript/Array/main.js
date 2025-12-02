// const arraySaya = ['1','2','3']
// console.log(arraySaya)

// const arrayKamu = []
// arrayKamu[0] = '1'
// arrayKamu[1] = '4'
// arrayKamu[2] = '3'

// console.log(arrayKamu)

// const arraySaya = ['buah1','buah2','buah3','buah4','buah5']
// const semangka = arraySaya.includes('buah4')

// console.log(semangka)
// if (semangka) {
//     const posisiBuah = arraySaya.indexOf('buah4')
//     const indexBefore = posisiBuah - 1
//     const indexAfter = posisiBuah + 1
//     const before = arraySaya[indexBefore]
//     const after = arraySaya[indexAfter]
//     console.log(`Buah sebelum semangka adalah buah ${before}`)
//     console.log(`Buah setelah semangka adalah buah ${after}`)
//     const buahAwal = arraySaya[0]
//     console.log(`Semangka ada di posisi ke ${posisiBuah}`)
//     const buahAkhir = arraySaya[arraySaya.length-1]
//     console.log(`Buah akhir adalah ${buahAkhir}`)
// } else {
//     console.log('Tidak tahu')
// }

// const arraySaya = []
// arraySaya['Buah1'] = '1'
// arraySaya['Buah2'] = '2'

// console.log(arraySaya)

// const arraySaya = ['buah1','buah2','buah3','buah4','buah5']
// const newArraySaya = Array.from(arraySaya)

// newArraySaya[0] = 'buah0'

// console.log({arraySaya})
// console.log({newArraySaya})

// const arrayKamu = [
//     'buah',
//     20,
//     {
//         tomato: function() {
//             console.log('ini Tomat')
//         }
//     },
//     ['eat','food']
// ]

// arrayKamu[2].tomato()

const arraySaya = ['🍕','🍔','🍿']
const arrayKamu = ['😶‍🌫️','🤣','😒']

const mergeArray = arraySaya.concat(arrayKamu)
console.log(mergeArray)