import React, { Component } from "react";

class Feedback extends Component {

    state = {
        name: "",
        phone: "",
        category: "general",
        description: "",
        err: false,
        success: ""
    }

    baseState = this.state;


    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })

        if (this.state.name === "" || this.state.phone === "" || this.state.description === "") {
            this.setState({ err: true })
        } else {
            this.setState({ 
                name: "",
                phone: "",
                category: "general",
                description: "",
                err: false, 
                success: "Thanks "+this.state.name+", we will contact you soon",
            })

        }
    }

    cancelHandler = () => {
        this.setState(this.baseState);
    }

    render() {
        const { name, phone, category, description, err, success } = this.state;
        return (
            <>
                <form className="form__feedback">
                    {(err) ? (<p className="err">** All the fields are required</p>) : ""}
                    {(success) ? (<p className="success">{success}</p>) : ""}
                    <fieldset className="form__view">
                        <legend className="form__title">SEND US YOUR MESSAGE</legend>
                        <input
                            className="form__control"
                            placeholder="Full Name"
                            type="text"
                            name="name"
                            value={name || ""}
                            onChange={this.changeHandler}
                        />
                        <input
                            className="form__control"
                            placeholder="Phone"
                            type="tel"
                            name="phone"
                            value={phone || ""}
                            onChange={this.changeHandler}
                        />
                        <select
                            className="form__control"
                            type="text"
                            name="category"
                            value={category || ""}
                            onChange={this.changeHandler} >
                            <option value="general">General Questions</option>
                            <option value="managment">Managment</option>
                            <option value="finance">Finance</option>
                            <option value="policy">Policy</option>
                            <option value="IT and data">IT and Data</option>
                        </select>
                        <textarea
                            className="form__control form__textarea"
                            placeholder="Tell us more about your subject"
                            type="text"
                            name="description"
                            value={description || ""}
                            onChange={this.changeHandler}
                        />

                        <button className="btn btn--dark" type="submit" onClick={this.submitHandler}>Submit</button>
                        <button className="btn btn--dark" type="reset" onClick={this.cancelHandler}>Cancel</button>
                    </fieldset>

                </form>
            </>
        )
    }
}

export default Feedback;