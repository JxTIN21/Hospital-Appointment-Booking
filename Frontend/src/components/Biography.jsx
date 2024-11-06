import React from "react";

const Biography = (imageUrl) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eius
          esse ullam animi! Nulla, possimus error, id similique quas iure,
          dolorem corporis quasi laboriosam harum rem? Cupiditate asperiores
          perferendis reiciendis placeat tenetur, laudantium, veritatis tempore
          fugiat consectetur iusto, repellat dolor modi? Harum minima sequi
          reprehenderit nam corrupti voluptates quidem. Explicabo!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit
          numquam rerum consequuntur deleniti corrupti laboriosam vel, velit
          corporis nemo quam autem iure in iste perferendis? Quae enim
          blanditiis quod praesentium deleniti, beatae voluptas officiis!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ducimus.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
