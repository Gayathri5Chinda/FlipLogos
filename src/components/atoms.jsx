// src/atoms.js
import { atom } from 'recoil';


export const cardsState = atom({
  key: 'cardsState', // Unique ID (with respect to other atoms/selectors)
  default: [
    { id: 1, logo: '/porsche.png', name: 'Porsche' ,flag: false},
    { id: 2, logo: '/lamborghini.png', name: 'lamborghini', flag: false},
    { id: 3, logo: '/audi.png', name: 'Audi' , flag: false},
    { id: 4, logo: '/ferrari.png', name: 'Ferrari' , flag: false},
    { id: 5, logo: '/chevrolet.png', name: 'chevrolet', flag: false},
    { id: 6, logo: '/ssc.png', name: 'ssc', flag: false},
    { id: 7, logo: '/ram.png', name: 'ram', flag: false},
    { id: 8, logo: '/fordmustang.jpeg', name: 'ford mustang', flag: false},
    { id: 9, logo: '/lincoln.png', name: 'lincoln', flag: false},
    { id: 10, logo: '/tesla.png', name: 'tesla', flag: false},
    { id: 11, logo: '/renault.png', name: 'renault', flag: false},
    { id: 12, logo: '/jaguar.png', name: 'jaguar', flag: false},
    { id: 13, logo: '/toyota.png', name: 'toyota', flag: false},
    { id: 14, logo: '/brammo.png', name: 'brammo', flag: false},
    { id: 15, logo: '/mahindra.png', name: 'mahindra', flag: false},
    { id: 16, logo: '/mecury.png', name: 'mercury', flag: false},
    { id: 17, logo: '/acura.jpeg', name: 'acura', flag: false},
    { id: 18, logo: '/hyundai.png', name: 'hyundai', flag: false},
    { id: 19, logo: '/skoda.jpeg', name: 'skoda', flag: false},
    { id: 20, logo: '/infiniti.png', name: 'infiniti', flag: false}
  ], // Default value (initial state)
});


export const scoreState = atom({
  key: 'scoreState', 
  default: 0, 
});


export const initialTimeState = atom({
  key: 'initialTimeState',
  default: 60, // Set the initial time
});

export const timeRemainingState = atom({
  key: 'timeRemainingState',
  default: 60, // Set the default value to the same as initialTime
});

export const isRunningState = atom({
  key: 'isRunningState',
  default: false,
});

export const isFlippingEnabledState = atom({
  key: 'isFlippingEnabledState',
  default: false,
});

export const answerState = atom({
  key: 'answerState', 
  default: {}, 
});