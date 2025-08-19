import react from 'react'

const Modal = ({children,isOpen,onClose,title ,hideHeader}) => {
    return 
    <div className="fixed inset-0 z-50 flex justify-center item-center w-full h-full bg-black/40">
        {/* Modal Content */}
        <div className={`relative flex flex-col bg-white shadow-lg rounded-lg overflow`}>
            {/* Modal Header */}
            {!hideHeader && (
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>
                </div>
            )}
            <button 
              type="button"
              className=""
              onClick={onClose}
            >
                <svg
                   className=""
                   aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 14 14"
                >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d = "M1 1l6 6n0 0l6 6M7 7l6-6M7 7l-6 6"
                />
               </svg>
            </button>
            {/* Modal body (ScrollTable)*/}
            <div className="">
                {children}
            </div>
        </div>
    </div>
}

export default Modal;