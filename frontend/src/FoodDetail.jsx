import React from 'react'

const FoodDetail = () => {
  return (
    <div>
        <div className="imagecontainer">
            <div className="buttons">
                <div className="backbutton">back</div>
                <div className="likebutton">like</div>
            </div>
            <img />
        </div>

        <div className="detailscontainer">
            <div className="foodname">food name</div>
            <div className="restaurantname">restaurant</div>
            <div className="reviewdistance">review - distance</div>
            <div className="price">price</div>
            <div className="fooddescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quasi id libero facilis facere. Voluptatibus cupiditate distinctio autem in, excepturi placeat culpa? Similique, laudantium aliquam? Ut, est? Iure quibusdam rerum inventore fugiat. Incidunt porro repellendus esse sint dolore deleniti eaque eveniet amet iure, similique tenetur quaerat. Vitae porro dolor dolorum.</div>
        </div>

        <div className="buttonscontainerq">
            <div className="toyelp">yelp</div>
            <div className="topmap">map</div>
        </div>

    </div>
  )
}

export default FoodDetail