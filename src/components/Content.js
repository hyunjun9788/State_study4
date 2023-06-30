function Content(props) {
    return (
        <>
            <div>공백 제외:{props.text.excludeSpace}</div>
            <div>공백 포함:{props.text.totalLength}</div>
            <div>단어:{props.text.word}</div>
            <div>줄:{props.text.line}</div>
        </>
    )
}

export default Content