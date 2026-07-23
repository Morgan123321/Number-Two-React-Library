import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";


const Book = ({ book }) => {
return (
<div className="book">
                            <Link to="/books/1">
                                <figure className="book__img--wrapper">
                                    <img src={book.url}/>
                                </figure>
                            </Link>
                            <div className="book__title">
                                <Link to="/" className="book__title--link">
                                {book.title}
                                </Link>
                            </div>
                            <Rating rating={book.rating}/>
                           <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
                        </div>
    );
};
export default Book;