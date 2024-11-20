import { X } from "lucide-react";
import React from "react";

export function MessageDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpen}
        className="bg-navBg-light dark:bg-navBg-dark text-black dark:text-white px-10 py-2 rounded-lg font-semibold text-base cursor-pointer hover:text-green-800 hover:bg-gray-200 shadow-lg"
      >
        Send your message
      </button>

      {/* Dialog */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOpen}
        >
          <div
            className="w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dialog
          >
            {/* Close Button */}
            <button
              onClick={handleOpen}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
            >
              <X />
            </button>

            {/* Dialog Content */}
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Write the message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className=" flex  text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="flex text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Message"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={handleOpen}
                  className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-100 dark:hover:bg-red-800 dark:border-red-500 dark:text-red-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-lg hover:bg-green-100 dark:hover:bg-green-800 dark:border-green-500 dark:text-green-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageDialog;
