import toast, { Toaster } from 'react-hot-toast'

export const toastError = (error) => {
    console.log(error)
    // console.log(typeof error?.response?.data?.message)
    if (typeof error?.response?.data?.message == 'string') toast.error(error?.response?.data?.message)
    // alert(error?.response?.data?.message)
    else if (typeof error?.message == 'string') toast.error(error.message)
    // alert(error.message)
    else if (typeof error == 'string') toast.error(error)
    // alert(error)
    // alert("ERROR")
    else toast.error('ERROR')
}
export const toastSuccess = (message) => {
    toast.success(message)
    // alert(message)
}
