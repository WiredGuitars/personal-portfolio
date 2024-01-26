import { FormData } from "@/components/Contact";
import toast from "react-hot-toast";

export default async function sendEmail(data: FormData) {
  const apiEndpoint = "/api/email";

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }

    const responseData = await response.json();
    toast.success(responseData.message);
  } catch (err) {
    toast.error((err as Error).message || "An error occurred");
  }
}
