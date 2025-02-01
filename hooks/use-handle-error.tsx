// "use client";
// import { useEffect } from "react";
// import { useGlobalError } from "@/provider/error-provider";


// // This HOC can be evoke inside a global app network call hook that we can create in the future
// export function useErrorHandling<T extends object>(useHook: () => T) {
//   return function useWrappedHook() {
//     const setError = useGlobalError((state) => state.setGetRequestError);
//     const result = useHook();

//     useEffect(() => {
//       if ("error" in result && result.error) {
//         const error = result.error;

//         console.log(error);
//         if (error instanceof Error) {
//           setError(error);
//         } else if (error && typeof error === "object" && "message" in error) {
//           setError(
//             new Error(
//               (error as any)?.message || "An unexpected error occurred",
//             ),
//           );
//         } else {
//           setError(new Error("An unexpected error occurred"));
//      }
//       }
//     }, [result, setError]);

//     return result;
//   };
// }
