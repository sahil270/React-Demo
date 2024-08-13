const colors = ["Red", "Green", "Blue", "Orange", "Olive", "Cyan"];
function Navbar() {
  // const [color, setColor] = useState("Olive");
  return (
    <div className='flex flex-wrap justify-start top-0 px-2'>
      <div className='flex flex-wrap justify-start gap-3 shadow-lg px-3 py-2 rounded-3xl'>
        {colors.map((color) => (
          <button
            key={color}
            className='outline-none px-4 py-1 text-white rounded-full shadow-lg'
            onClick={() => setColor(color.toLowerCase())}
            style={{ backgroundColor: color.toLowerCase() }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

function setColor(color) {
  let elem = document.getElementsByTagName("body")[0];
  elem.style.backgroundColor = color;
}

export default Navbar;
