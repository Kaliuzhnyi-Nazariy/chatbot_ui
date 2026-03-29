import toast from "react-hot-toast";

export const toastSuccess = (text: string) => {
  return toast.success(text, {
    style: {
      background: `var(--green100)`,
      color: "white",
    },
    iconTheme: {
      primary: `var(--green200)`,
      secondary: "#fff",
    },
  });
};
