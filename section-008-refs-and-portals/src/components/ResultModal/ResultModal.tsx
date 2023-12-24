import {ResultModalDialog} from "./css/ResultModalDialog.tsx";
import {forwardRef, ForwardedRef, useImperativeHandle, useState} from "react";
import

interface ResultModalPropsInterface {
  result: string;
  targetTime: number;
}

type ImperativeType = {
  yourOwnFunctionName: () => void;
}

export const ResultModal = forwardRef<ImperativeType, ResultModalPropsInterface>(
  (
    {result, targetTime},
    ref: ForwardedRef<any>,
  ) => {
    // const dialog = useRef<HTMLDialogElement>(null)

    useImperativeHandle(ref, () => {
      return {
        yourOwnFunctionName() {
          // dialog.current ? dialog.current.showModal() : undefined;
          setOpenDialog(true)
        }
      }
    })
    const [openDialog, setOpenDialog] = useState(false)

    return (
      <ResultModalDialog open={openDialog}>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime}</strong></p>
        <p>You stopped the time with <strong>X seconds left</strong></p>

        <form method="dialog">
          <button>Close</button>
        </form>
      </ResultModalDialog>
    )
  }
)
