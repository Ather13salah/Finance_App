import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

function BaseAlertDialog({ children,title,description,onOpenChange,...props }) {
  return (
    <AlertDialog {...props}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription> {description}</AlertDialogDescription>
          <X
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => onOpenChange(false)}
          />
        </AlertDialogHeader>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default BaseAlertDialog;
