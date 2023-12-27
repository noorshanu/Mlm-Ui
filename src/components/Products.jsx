import React from "react";

const Cards = ({
  iconSrc,
  title,
  description,
  price,
  gstPrice,
  TotalPrice,
}) => (
  <div className="card-p  ">
    <div>
      {/* <img src={iconSrc} alt="" /> */}
      <img src="images/prodimg.png" alt="" />
    </div>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className=" flex justify-between items-center">
        <h3>{price}</h3>
        <p>with GST {gstPrice}</p>
      </div>

      <div className=" flex justify-between items-center">
        <h3>MRP Price inc GST</h3>
        <p>{TotalPrice}</p>
      </div>
    </div>
  </div>
);

function Products() {
  return (
    <section className=" py-4 sm:py-14">
      <div className="container-wrapper">
        <div>
          <h1 className=" text-[50px] font-bold text-black text-center my-2">
            Our Products
          </h1>
        </div>

        <div className="flex justify-between items-center gap-4 py-4">
          <Cards
            title="Regular Mattress"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />
        </div>


        <div className="flex justify-between items-center gap-4 py-4">
          <Cards
            title="Regular Mattress"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
