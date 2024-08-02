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

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now

const navbar = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById('hoho'))
 
//trying append
ReactDOM.append(navbar, document.getElementById('hoho'))