import { writable } from 'svelte/store';

const DEFAULT_CONTACTS = [
    { name: "John", surname: "Doe", mail: "john.doe@email.com" },
    { name: "Alice", surname: "Wonderland", mail: "alice.wonderland@mail.com" }
]

const { subscribe, set,  update } = writable(DEFAULT_CONTACTS);

const addContact = contact =>  update(contacts => {
    return [...contacts, contact]
});

const reset = () => {
    set(DEFAULT_CONTACTS);
}

export default {
    subscribe,
    addContact,
    reset
}