import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import ClinicForm from "./components/form";


const ClinicFormPage = () => {
   
    return (
        <div>
            <Dialog open>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Adicionar clínica</DialogTitle>
                        <DialogDescription>
                            Adicione uma clínica para continuar.
                        </DialogDescription>
                    </DialogHeader>
                        <ClinicForm />
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ClinicFormPage;