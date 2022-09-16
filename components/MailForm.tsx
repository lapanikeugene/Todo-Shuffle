

const EmailForm = () =>{

    return <form action="https://formsubmit.co/63ad0ec9469d917ec9a8d742fe69388b" method="POST">
    <textarea name="name" required></textarea>
    <input type="email" name="email" hidden={true} value={"something.from@shuffltodo.com"}></input>
    <button type="submit" className="button-submit">Send</button>
</form>

}

export default EmailForm