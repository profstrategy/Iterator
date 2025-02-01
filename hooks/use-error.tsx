
// import { AxiosError } from "axios";
// import { useEffect } from "react";
// import { useToast } from "./use-toast";
// import { useGlobalStore } from "@/provider/error-provider";


// export const useError = () => {
//   const error = useGlobalStore((state) => state.error);
//   const { toast } = useToast();
//   useEffect(() => {
//     if (!error) return;

//     let description = "An unexpected error occurred";
//     const errorInstance = error instanceof AxiosError;

//     if (errorInstance) {
//       const statusCode = error.response?.status;

//       if (statusCode === 404) {
//         description = "we can't find what you are looking for!!!";
//       }

//       if (statusCode === 500) {
//         description = "Server error please try again!!!";
//       }

//       if (statusCode === 401) {
//         description =
//           "You are not authorized to view this page. Please logout and login again!!!";
//       }
//     }

//     toast({
//       title: `${errorInstance ? error.response?.status : "Error message"}`,
//       description: description,
//     });
//   }, [error, toast]);
// };
