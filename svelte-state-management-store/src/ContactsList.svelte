<script>
import contacts from "./store/contacts";
</script>

<div id="contactList">
    { #each $contacts as contact }
        <p>{contact.name} {contact.surname}</p>
        <p>{contact.mail} </p>
        <hr/>
    { /each }
</div>