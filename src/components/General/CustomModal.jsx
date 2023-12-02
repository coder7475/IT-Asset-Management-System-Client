import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function CustomModal({ closeModal, isOpen, cusReq }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Custom Request Details
                  </Dialog.Title>
                  <div className="mt-2">
                      <img src={cusReq?.image} alt="custom request image" className="w-full h-64"/>
                    
                    <h1>
                      {" "}
                      <span className="font-semibold">Asset Name:</span>{" "}
                      {cusReq?.name}
                    </h1>
                    <h1>
                      {" "}
                      <span className="font-semibold">Price: </span>{" "} $
                      {cusReq?.price}
                    </h1>
                    <h1>
                      {" "}
                      <span className="font-semibold">Asset Type:</span>{" "}
                      {cusReq?.type}
                    </h1>
                    <h1>
                      {" "}
                      <span className="font-semibold">Why Needed:</span>{" "}
                      {cusReq?.needed}
                    </h1>

                    <h1>
                      {" "}
                      <span className="font-semibold">Additional Info:</span>{" "}
                      {cusReq?.addInfo}
                    </h1>

                    <h1>
                      {" "}
                      <span className="font-semibold">Request Date:</span>{" "}
                      {cusReq?.date.split("T")[0]}
                    </h1>
                    <h1>
                      {" "}
                      <span className="font-semibold">Status:</span>{" "}
                      {cusReq?.status}
                    </h1>
                  </div>

                  <div className="mt-4 flex gap-3">
                  <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

CustomModal.propTypes = {
  closeModal: PropTypes.any,
  cusReq: PropTypes.any,
  isOpen: PropTypes.any,
};
