import { useState } from "react";

const colors = ['Red', 'Greed', 'Blue', 'Orange', 'Olive', 'Cyan'];
function Navbar() {
  const [color, setColor] = useState('Olive');
  return (
    <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {
                colors.map(color => <button key={color} className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
                    onClick={() => setColor(color.toLowerCase())}
                    style={{backgroundColor: color.toLowerCase()}}
                    >color</button>)

            }
        </div>
    </div>
  )
}

export default Navbar;