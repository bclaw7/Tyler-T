import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from "../Button";

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 py-5 mx-auto text-center text-warning">
                    <h1>your cart is empty</h1>
                    <Link to="/">
                        <ButtonContainer>merch store</ButtonContainer>
                    </Link>
                </div>
            </div>
        </div>
    )
}
