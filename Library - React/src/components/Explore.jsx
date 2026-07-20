import React from 'react';

const Explore = () => {
    return (
        <div>
<section id ="explore">
    <div className="container">
        <div className="row row__column">
            <h2>
                Explore more <span className="purple"> Books </span>
            </h2>
            <link to="/books">
            <button className="btn">Explore books</button>
            </link>

        </div>
    </div>
</section>
        </div>
    );
}

export default Explore;