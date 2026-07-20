import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Book = ({ book }) => {
return (
<div className="book">
                            <link to="/">
                                <figure className="book__img--wrapper">
                                    <img src={book.url}/>
                                </figure>
                            </link>
                            <div className="book__title">
                                <link to="/" className="book__title--link">
                                {book.title}
                                </link>
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