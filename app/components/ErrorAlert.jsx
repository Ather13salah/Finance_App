import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
function ErrorAlert({errorMessage}) {
  return (
    <Alert variant="destructive"  className="max-w-md m-4">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{errorMessage}</AlertDescription>
    </Alert>
  )
}

export default ErrorAlert
