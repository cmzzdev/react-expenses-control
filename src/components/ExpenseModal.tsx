import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useBudget } from "../hooks/useBudget";
import ExpenseForm from "./ExpenseForm";

export default function ExpenseModal() {
  const { state, dispatch } = useBudget();
  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <button type="button" onClick={() => dispatch({ type: "show-modal" })}>
          <PlusCircleIcon className="w-16 h-16 text-blue-600 rounded-full" />
        </button>
      </div>
      <AnimatePresence>
        <Dialog
          open={state.modal}
          onClose={() => dispatch({ type: "close-modal" })}
          className="relative z-50"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30"
          />
          <DialogBackdrop className="fixed inset-0 bg-black/30" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel
              className="w-full max-w-lg space-y-4 border bg-white p-12 rounded-lg"
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ExpenseForm />
            </DialogPanel>
          </div>
        </Dialog>
      </AnimatePresence>
    </>
  );
}
