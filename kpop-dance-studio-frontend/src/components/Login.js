import React from "react";
import "../css/Login.css";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        email: "",
        checked : "signin",
    };

    handleChange = (e) => {
        let { name, value } = e.target;
        console.log({ name, value });
        this.setState({
            [name]: value,
        });
    };

    handleTabChange = (e) => {
        
        let { value } = e.target;
        this.setState({
            checked: value,
        });
    
    }

    render() {
        return (
            <div>
                <div class="login-wrap">
                    <div class="login-html">
                        <input id="tab-1" type="radio" name="tab" class="sign-in" checked={this.state.checked == "signin"} value="signin" onClick={(e) => this.handleTabChange(e)}/><label for="tab-1" class="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" class="sign-up" checked={this.state.checked == "signup"} value="signup" onClick={(e) => this.handleTabChange(e)}/><label for="tab-2" class="tab">Sign Up</label>
                        <div class="login-form">
                            <form
                                onSubmit={(e) => this.props.handleLogin(e, this.state)}
                            >
                                <div class="sign-in-htm">
                                    <div class="group">
                                        <label for="user" class="label">Username</label>
                                        <input id="user" type="text" class="input" name="username"
                                            value={this.state.username}
                                            onChange={this.handleChange} />
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Password</label>
                                        <input id="pass" type="password" class="input" data-type="password" name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange} />
                                    </div>
                                    <div class="group">
                                        <input id="check" type="checkbox" class="check" checked/>
                                        <label for="check"><span class="icon"></span> Keep me Signed in</label>
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Sign In" />
                                    </div>

                                    <div class="hr"></div>
                                    <div class="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                    </div>
                                </div>
                            </form>
                            <div class="sign-up-htm">
                            <form onSubmit={(e) => this.props.handleSignup(e, this.state)}>
                                <div class="group">
                                    <label for="user" class="label">Username</label>
                                    <input id="user" type="text" class="input" name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Password</label>
                                    <input id="pass" type="password" class="input" name="password" data-type="password" 
                                        value={this.state.password}
                                        onChange={this.handleChange}/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Repeat Password</label>
                                    <input id="pass" type="password" class="input" data-type="password" />
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Email Address</label>
                                    <input id="pass" type="text" class="input" 
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}/>
                                </div>
                                <div class="group">
                                    <input type="submit" class="button" value="Sign Up" />
                                </div>
                                </form>
                                <div class="hr"></div>
                                <div class="foot-lnk">
                                    <label for="tab-1"><a>Already Member?</a></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;