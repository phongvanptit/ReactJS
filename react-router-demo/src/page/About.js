import { Component } from "react";
import { LanguageContext } from "./LanguageContext";

class About extends Component {
    static contextType = LanguageContext;
    constructor(props) {
        super(props);
        this.state = {
            language: "vi"
        }
    }
    render() {
        const language = this.context;
        console.log(language)
        // return <div><p>This is About page</p><a href="/users">Goto User</a></div>
        // Used If-Else construct
        // if (language === "en") {
        //     return (
        //         <div>
        //             <p>This is About page</p>
        //             <button onClick={() => { window.history.pushState(null, null, "/users"); window.location.reload() }}>Goto User</button>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             <p>Đây là trang About</p>
        //             <button onClick={() => { window.history.pushState(null, null, "/users"); window.location.reload() }}>Đi đến trang User</button>
        //         </div>
        //     )
        // }

        // Use && operator
        return (
            <div>
                {language === "vi" ?
                    <div>
                        <p>Đây là trang About</p>
                        <button onClick={() => { window.history.pushState(null, null, "/users"); window.location.reload() }}>Đi đến trang User</button>
                    </div>
                    :
                    <div> <p>This is About page</p>
                        <button onClick={() => { window.history.pushState(null, null, "/users"); window.location.reload() }}>Goto User</button>
                    </div>}

                {/* {language === "vi" && <div>
                    <p>Le thanh nghi, Ha Noi</p>
                    <button>Chỉ đường</button>
                </div>} */}
            </div>
        )

    }
} export default About;