import './App.css'


export default function Box(prop) {

    return (
        <div className="container">
            <div className="box">
                {prop.children}
            </div>
        
        </div>

    )
}