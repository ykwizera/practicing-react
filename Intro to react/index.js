ReactDOM.render( <p><h1>hello, everyone</h1>this is a paragraph from react codes</p>, document.getElementById('root'))
ReactDOM.render( 
<ul>Trying to create lists using react<li>one</li><li>two</li></ul>, 
document.getElementById('hehe')
)

function MainContent () {
    return (
        <h1> I am learning react</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
        
    </div>,
    document.getElementById("haha")
)