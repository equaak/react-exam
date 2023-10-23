// store.js
import { observable, action, makeObservable } from 'mobx'

class ApartmentStore {
    apartments = []

    constructor() {
        makeObservable(this, {
            apartments: observable,
            setApartments: action,
        })
    }

    setApartments(data) {
        this.apartments = data
        console.log(this.apartments)
    }
}

const apartmentStore = new ApartmentStore()

export { apartmentStore }
