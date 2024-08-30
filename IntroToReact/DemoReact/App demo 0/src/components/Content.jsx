const Content = (props) => {
    const pageContent = props.paragraphs;
    console.log('content:', pageContent)
    return (
        <div>
            <p style={{color: 'white'}}>{pageContent}</p>
        </div>
    )
}

export default Content;

