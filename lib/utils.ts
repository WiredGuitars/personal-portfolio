import { FormData } from "@/components/Contact"
import toast from "react-hot-toast"

export const validateString = (value:unknown, maxLength: number) => {
    if (!value || typeof value !== "string" || value.length > maxLength) {
        return false
    }
    return true
}

export const getErrorMessage = (error: unknown): string => {
    let message: string
            
    if (error instanceof Error){
        message = error.message
        
    } else if (error && typeof error === 'object' && 'message' in error)
      {
    message = String(error.message)
} else if (typeof error === "string"){
    message = error
}else{
    message = "Unknown error"
}


return message
}

export async function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';
  
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        // Handle non-successful responses
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
      }
  
      const responseData = await response.json();
      toast.success(responseData.message);
    } catch (err) {
      toast.error((err as Error).message || 'An error occurred');
    }
  }
  