import React from 'react'


function Nav() {
  return (
    <nav className='flex bg-yellow-500 m-0 max-sm:w-32'>
        <ul className="flex justify-center space-x-6 m-0">
        <li><a href="" class="text-black font-bold hover:text-gray-700">ALL CATEGORIES</a></li>
            <li><a href="" class="text-black font-bold hover:text-gray-700">TODAY DEALS</a></li>
            <li><a href="#" class="text-black font-bold hover:text-gray-700">ELECTRONICS</a></li>
            <li><a href="#" class="text-black font-bold hover:text-gray-700">CLOTHINGS</a></li>
            <li><a href="#" class="text-black font-bold hover:text-gray-700">COMPUTERS</a></li>
            <li><a href="#" class="text-black font-bold hover:text-gray-700">FURNITURES</a></li>
            <li><a href="#" class="text-black font-bold hover:text-gray-700">MOM & BABY</a></li>
            <li><a href="#" class="text-black font-bold hover:text-gray-700">BOOKS & MORE</a></li>
        </ul>
    </nav>
      )
}
export default Nav  