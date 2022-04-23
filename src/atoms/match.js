import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'boardgame-life'
})

export const matchState = atom({
  key: 'match',
  default: null,
  effects_UNSTABLE: [persistAtom]
})


/**
 * Match model
 * 
 * {
 *  key: 'aaaa-aaaa-aaaa',
 *  players: [
 *    {
 *      name: 'John Doe',
 *      color: 'green',
 *      money: 10000,
 *      job: 'unenployed',
 *      insurance: [
 *        'car',
 *        'house',
 *        'life'
 *      ],
 *      house: [
 *        { type: 'Apartamento', price: 29000 }
 *      ],
 *      children: [ 0, 0, 0 ]
 *    }
 *  ]
 * }
 * 
 * children: [boy, girl, total]
 */