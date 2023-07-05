
const Navbar = () => {
  return (
    <nav className="">
      <div className=" flex-grow flex bg-white border-gray-200 dark:bg-gray-900 p-5">
        <p className="font-bold text-lg">🌴 Java Bistro</p>
        <div className="ml-auto flex items-center">
        <p>0121 XXXXXXX</p>
        <a className="ml-3 font-bold text-orange-600">Contact Us</a>
      </div>
        </div>
        <div className="px-5 py-1 dark:bg-gray-700 relative">
          <ul className="flex justify-center">
            <li className="mr-5">
              <a className="text-gray-900 dark:text-white">Home</a>
            </li>
            <li className="mr-5">
              <a className="text-gray-900 dark:text-white">Menu</a>
            </li>
            <li className="mr-5">
              <a className="text-gray-900 dark:text-white">Blog</a>
            </li>
            <li className="mr-5">
              <a className="text-gray-900 dark:text-white">About Us</a>
            </li>
          </ul>
        </div>

    </nav>
  )
}

export default Navbar

//Task
//create a background color for the bar
//logo on the left
//contact details and a contact us link on the right
//another tab beneath the main header for the other relevant links