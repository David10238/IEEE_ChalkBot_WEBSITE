
function handleSubmission() {
    // use any type as it simplefies grabbing value
    const textbox: any = document.getElementById("message-input-box")!!
    let text: string = textbox.value

    // remove whitespace
    text = text.split(/\s+/).join('')

    if (text.length === 0) {
        console.log("text is emtpy")
        return
    }

    //must be alpha-numeric
    const regex = RegExp("^[a-zA-Z0-9]*$")
    if (!regex.test(text)) {
        console.log("text is not alpha-numeric")
        return
    }

    console.log(text)
}

export default function MessageInputColumn() {
    return (
        <div id="message-input-column">
            <div className="fill-width fill-height">
                <textarea id="message-input-box" />
            </div>
            <div className="fill-width">
                <button id="message-button" onClick={handleSubmission}>Run</button>
            </div>
        </div>
    )
}