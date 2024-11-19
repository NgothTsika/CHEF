import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export function MessageDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        className="bg- px-10 py-2 rounded-lg   bg-navBg-light dark:bg-navBg-dark dark:text-white text-black p-2 font-semibold text-base cursor-pointer hover:text-green-800 hover:bg-gray-200 shadow-lg "
      >
        send your message
      </Button>
      <div className="flex flex-col  justify-center items-center ">
        <Dialog
          open={open}
          handler={handleOpen}
          className="w-96  fixed bottom-28 right-4 md:right-[27rem] bg-primaryText-dark dark:bg-primaryText-light dark:text-primaryText-dark text-primaryText-light shadow-lg shadow-gray-500/40"
        >
          <div className="flex items-center justify-between ">
            <DialogHeader className="flex flex-col items-start ">
              {" "}
            </DialogHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <DialogBody>
            <Typography className="mb-7 -mt-7 " color="gray" variant="lead">
              Write the message
            </Typography>
            <div className="grid gap-6">
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Username
              </Typography>
              <Input
                placeholder="Username"
                className="dark:text-primaryText-light"
              />
              <Typography className="-mb-1" color="blue-gray" variant="h6">
                Message
              </Typography>
              <Textarea
                placeholder="Message"
                className="max-w-6xl dark:text-primaryText-light"
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2 mt-10">
            <Button
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="text-red-500"
            >
              cancel
            </Button>
            <Button
              variant="gradient"
              color="gray"
              onClick={handleOpen}
              className="text-green-500 py-2 px-3 rounded-lg"
            >
              send message
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
export default MessageDialog;
