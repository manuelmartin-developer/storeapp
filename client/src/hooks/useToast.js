import Swal from "sweetalert2";

export const Toast = Swal.mixin({
    toast: true,
    position: "bottom",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });