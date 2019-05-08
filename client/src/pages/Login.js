import React, { Component } from "react";
import axios from "axios";
import Header from "../components/Header";
import InfoBar from "../components/InfoBar"
import Footer from "../components/Footer";
import LoginPage from "../components/LoginPage"
import "../scss/style.scss";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            cart: [],
            totalItems: 0,
            totalAmount: 0,
            term: "",
            cartBounce: false,
            modalActive: false
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleMobileSearch = this.handleMobileSearch.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    // Fetch Initial Set of Products from external API

    // Search by Keyword
    handleSearch(event) {
        this.setState({ term: event.target.value });
    }
    // Mobile Search Reset
    handleMobileSearch() {
        this.setState({ term: "" });
    }

    // Open Modal
    openModal(product) {
        this.setState({
            quickViewProduct: product,
            modalActive: true
        });
    }
    // Close Modal
    closeModal() {
        this.setState({
            modalActive: false
        });
    }

    render() {
        return (
            <div className="container">
                <Header
                    cartBounce={this.state.cartBounce}
                    total={this.state.totalAmount}
                    totalItems={this.state.totalItems}
                    cartItems={this.state.cart}
                    removeProduct={this.handleRemoveProduct}
                    handleSearch={this.handleSearch}
                    handleMobileSearch={this.handleMobileSearch}
                    handleCategory={this.handleCategory}
                    categoryTerm={this.state.category}
                    updateQuantity={this.updateQuantity}
                    productQuantity={this.state.moq}
                />
                <InfoBar />

                <LoginPage/>
                
                <Footer />
            </div>
        );
    }
};

export default Login;