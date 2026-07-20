import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
return (
<div className="book">
                            <Link to="/">
                                <figure className="book__img--wrapper">
                                    <img src={book.url}/>
                                </figure>
                            </Link>
                            <div className="book__title">
                                <Link to="/" className="book__title--link">
                                {book.title}
                                </Link>
                            </div>
                            {
                                new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon ="star" key={index}/>
                                )
                            }
                            {
                                !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt"/>
                            }
                            
                            <div className="book__price">
                               {book.salePrice ? (
                                <>
                                <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
                                {book.salePrice.toFixed(2)}
                                </>
                               ):(
                                <>${book.originalPrice.toFixed(2)}</>
                               )}
                            </div>
                        </div>
    );
};
export default Book;