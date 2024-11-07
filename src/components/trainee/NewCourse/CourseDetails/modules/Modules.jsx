import React from 'react'
import ModuleForm from '../Level/components/ModuleForm'

const Modules = () => {

  return (
    <div>
        <div className="flex flex-col items-start mb-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Modules</h1>
            <span className="text-gray-400">Add Your Modules here...</span>
      </div>
      <div className=" border-2 border-gray-600 rounded-md p-1 w-full max-w-4xl mx-auto mb-3">
        <div className="flex items-center">
          <input
            type="text" 
            placeholder="Add your modules Here..."
            className="flex-1 border-none outline-none p-2"
          />
          <button className="bg-gray-300 hover:bg-violet-500  font-bold py-2 px-4 rounded-md text-black text-xl"><img src="/plusicon.png" className='w-5 h-5' alt="" /></button>
        </div>
      </div>
      <ModuleForm/>
    </div>
  )
}

export default Modules