import React from 'react'
import redhighlight from '../src/image/redhighlight.jpg';


function Accounting() {
  return (

    <div>

<div className="relative text-center py-8">
  <h1 className="font-abc text-8xl text-black-1000 font-bold">
    <span className="relative inline-block">
      <span
        className="absolute inset-0 transform -skew-x-6 -skew-y-3"
        style={{
          backgroundImage: `url(${redhighlight})`,
          backgroundSize: 'contain',
          backgroundPosition: 'absolute',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
          opacity: 1,
          display: 'block',
        }}
      ></span>
      <span className="relative text-black-1000">Accountants waste time</span>
    </span>
  </h1>
  <p className="mt-4 font-abc text-7xl text-black-600 font-bold">
    working the <span className="underline decoration-sky-500">old way</span>!
  </p>
</div>

<div className="text-center text-black-400 text-4xl leading-relaxed">
  <b>Odoo is a modern accounting software.</b> So clean that you will <br />
  experience work differently and avoid the frustration of slow interfaces,<br />
  overflowing email inboxes, and endless data.




</div>
 



    </div> //final
  )
}

export default Accounting
