import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favColor: "Blue",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} />
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} />
                    <br/>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                            />
                        Is Friendly?
                    </label>

                    <br/>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onClick={this.handleChange}
                        /> Male
                    </label>

                    <br/>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onClick={this.handleChange}
                        /> Female
                    </label>

                    <br />
                    <label> Favourite color: </label>
                    <select value={this.state.favColor} name="favColor" onChange={this.handleChange} >
                        <option value="Blue">Blue</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                    </select>

                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <p> Other details: {this.state.description} </p>

                    <h2>You are a {this.state.gender}</h2>
                    <h2>Your favourite color is: {this.state.favColor}</h2>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default App;
