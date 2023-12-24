import React, {forwardRef, ForwardedRef} from 'react'

interface InputInterface {
  label: string
  textarea?: boolean | undefined
  type?: string | undefined
}
export const Input = forwardRef(({label, textarea, ...props }: InputInterface, ref:ForwardedRef<any>) => {

  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {textarea
        ? <input ref={ref} className={classes} {...props} />
        : <input ref={ref} className={classes} {...props} />
      }
    </p>
  )
})
