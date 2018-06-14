import React, { Component } from 'react';
import FormErrors from './FormErros';
import FormErrors1 from './FormErrors1';
import axios from 'axios';


class AddCategori extends Component {
    constructor (props) {
        super(props);
        this.state = {
            category:'',
            model:'',
            weigth: 1,
            formErrors1:{category:'',model:'',weigth:''},
            categoryValid:false,
            modelValid:false,
            weigthValid:false,
            formValid1: false,
           
          email: '',
          password: '',
          formErrors: {email: '', password: ''},       
          emailValid: false,
          passwordValid: false,
          formValid: false
        }
      }

    handleSubmit=(event)=> {
        event.preventDefault();
        alert("radi2");
        const telefon = {
                categoryName: this.state.category,
                // model: this.state.model,
                // weigth:this.state.weigth 
        }

        axios.post('https://mobile-shop-ee9e0.firebaseio.com/categories.json',telefon)
        .then(res=>console.log(res))
        .catch(error=>console.log(error)); 

      }

      handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value)});
      }

      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        let fieldValidationErrors1 = this.state.formErrors1;
        let categoryValid= this.state.categoryValid;
        let modelValid= this.state.modelValid;
        let weigthValid=this.state.weigthValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
            case 'category':
            categoryValid= value.length >= 5;
            fieldValidationErrors1.category = categoryValid ? '': 'popuni kategoriju sa najmanje 5 slova';
            break;
            case 'model':
            modelValid= value.length >= 5;
            fieldValidationErrors1.model = modelValid ? '': 'popuni model sa najmanje 5 slova';
            break;
            case 'weigth':
            weigthValid= value > 50 && value <600;
            fieldValidationErrors1.weigth = weigthValid ? '': 'tezina mora da bude izmedju 50 i 600';
            break;
          default:
            break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        formErrors1:fieldValidationErrors1,
                        categoryValid: categoryValid,
                        modelValid:modelValid,
                        weigthValid:weigthValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid,
            formValid1:this.state.categoryValid && this.state.modelValid && this.state.weigthValid});
      }
      
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
     }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit} className="demoForm">
                 <div className="panel panel-default">
                    <FormErrors1 formErrors={this.state.formErrors1} />
                 </div>
                 <div className={`form-group
                    ${this.errorClass(this.state.formErrors1.category)}`}>
                   { console.log(this.state.formErrors1.category)}
                        <label>
                        Category Name:  <input type="text" className="form-control" value={this.state.categoryName} name="category" 
                        onChange={(event) => this.handleUserInput(event)}/>
                        </label>
                   </div> 
                   <div className={`form-group
                    ${this.errorClass(this.state.formErrors1.model)}`}>
                       { console.log(this.state.formErrors1.model)}
                    <label>
                      Model:  <input type="text" className="form-control" value={this.state.modelName} name="model" 
                      onChange={(event) => this.handleUserInput(event)}/>
                    </label>
                    </div>
                    <div className={`form-group
                    ${this.errorClass(this.state.formErrors1.weigth)}`}>
                       { console.log(this.state.formErrors1.weigth)}
                    <label>
                        Weigth: <input type="number" className="form-control" value={this.state.modelWeigth} name="weigth" 
                        onChange={(event) => this.handleUserInput(event)}/>
                    </label>
                    </div>
                     <div> 
                    <button type="submit" className="btn btn-primary" 
                        // disabled={!this.state.formValid1}
                        >Submit</button>
                    </div>
                </form>
                {/* --------------------------------------------------------------------------------------- */}

                <div className="panel panel-default">
               
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <form className="demoForm">
                    <h2>Sign up</h2>
              
                    <div className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"
                        name="email" 
                        value={this.state.email}
                        onChange={(event) => this.handleUserInput(event)} />
                    </div>
                
                    <div className={`form-group
                 ${this.errorClass(this.state.formErrors.password)}`}>
                        <label htmlFor="password">Password</label>
                        <input type="passwor" className="form-control"
                        name="password" 
                        value={this.state.password}
                        onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <button type="submit" className="btn btn-primary" 
                      disabled={!this.state.formValid}>Sign up</button>
                </form>
            </div>
        );
    }
}

export default AddCategori;