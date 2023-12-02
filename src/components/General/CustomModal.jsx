import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function CustomModal({
  closeModal,
  isOpen,
  cusReq,
  isEditable,
  handleCancelButton,
  hadleUpdateButton,
}) {
  console.log(isEditable);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => null}>
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
                    <form className="flex flex-col gap-3">
                      {isEditable ? (
                        <>
                          <label htmlFor="image" className="font-semibold">
                            Image URL:{" "}
                          </label>
                          <input
                            type="text"
                            name="image"
                            id="image"
                            className="pl-2 border-2 border-blue-500 rounded-lg"
                            defaultValue={cusReq?.image}
                          />
                        </>
                      ) : (
                        <img
                          src={cusReq?.image}
                          alt="custom request image"
                          className="w-full h-64"
                        />
                      )}

                      <h1>
                        {" "}
                        <span className="font-semibold">Asset Name:</span>{" "}
                        {isEditable ? (
                          <>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              defaultValue={cusReq?.name}
                              className="px-1 border-2 border-blue-500 rounded-xl"
                            />
                          </>
                        ) : (
                          cusReq?.name
                        )}
                      </h1>
                      <h1>
                        {" "}
                        <span className="font-semibold">Price: </span>
                        {isEditable ? (
                          <>
                            <input
                              type="number"
                              name="name"
                              id="name"
                              defaultValue={cusReq?.price}
                              className="px-1 border-2 border-blue-500 rounded-xl"
                            />
                          </>
                        ) : (
                          "$" + cusReq?.price
                        )}
                      </h1>
                      <h1>
                        {" "}
                        <span className="font-semibold">Asset Type:</span>{" "}
                        {isEditable ? (
                          <>
                            <select
                              name="type"
                              id="type"
                              defaultValue={cusReq?.type}
                              className="px-1 border-2 border-blue-500 rounded-xl"
                            >
                              <option value="returnable">returnable</option>
                              <option value="non-returnable">
                                non-returnable
                              </option>
                            </select>
                          </>
                        ) : (
                          cusReq?.type
                        )}
                      </h1>
                      <h1>
                        {" "}
                        <span className="font-semibold">Why Needed:</span>{" "}
                        {isEditable ? (
                          <>
                            <input
                              type="text"
                              name="needed"
                              id="needed"
                              defaultValue={cusReq?.needed}
                              className="px-1 border-2 border-blue-500 rounded-xl"
                            />
                          </>
                        ) : (
                          cusReq?.needed
                        )}
                      </h1>

                      <h1>
                        {" "}
                        <span className="font-semibold">
                          Additional Info:
                        </span>{" "}
                        {isEditable ? (
                          <>
                            <input
                              type="text"
                              name="addInfo"
                              id="addInfo"
                              defaultValue={cusReq?.addInfo}
                              className="px-1 border-2 border-blue-500 rounded-xl"
                            />
                          </>
                        ) : (
                          cusReq?.addInfo
                        )}
                      </h1>

                      <h1>
                        {" "}
                        <span className="font-semibold">
                          Request Date:
                        </span>{" "}
                        {isEditable ? (
                          <>
                            <input
                              type="date"
                              name="date"
                              id="date"
                              defaultValue={cusReq?.date.split("T")[0]}
                              className="px-1 border-2 border-blue-500 rounded-xl"
                            />
                          </>
                        ) :
                        cusReq?.date.split("T")[0]
                        }
                      </h1>
                      <h1>
                        {" "}
                        <span className="font-semibold">Status:</span>{" "}
                        {isEditable ? (
                          <>
                            <>
                            <select
                              name="status"
                              id="status"
                              defaultValue={cusReq?.status}
                              className="px-1 border-2 border-blue-500 rounded-xl"
                            >
                              <option value="pending">pending</option>
                              <option value="approved">approved</option>
                              <option value="rejected">rejected</option>
                            
                            </select>
                          </>
                          </>
                        ) : (
                          cusReq?.status
                        )}
                      </h1>
                    </form>
                  </div>

                  <div className="mt-4 flex gap-3">
                    {isEditable ? (
                      <>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          // onClick={hadleSave}
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={handleCancelButton}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={hadleUpdateButton}
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
                      </>
                    )}
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
