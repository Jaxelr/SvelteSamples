<script>
import contacts from "./store/contacts";

let name = "";
let surname = "";
let mail = "";

const submitContact = () => {
    contacts.addContact({name, surname, mail});

    name = surname = mail = "";
}
</script>

<div id="contactForm">
    <input type="text" bind:value={name} placeholder="Insert Name">
    <input type="text" bind:value={surname} placeholder="Insert Surname">
    <input type="email" bind:value={mail} placeholder="Insert mail" />
	<input type="submit" on:click={submitContact} value="Add" />
	<input type="submit" on:click={contacts.reset} value="Reset" />
</div>