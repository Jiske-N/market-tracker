// // validation to be uncommented on deployment
// export function validatePassword(submission: string) {
//     const regex =
//         /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
//     if (!regex.test(String(submission))) {
//         return false;
//     } else {
//         return true;
//     }
// }

// temporary less annoying validation for development
export function validatePassword(submission: string) {
    if (submission.length < 5) {
        return false;
    } else {
        return true;
    }
}

export function validateEmail(submission: string) {
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (!regex.test(String(submission).toLowerCase())) {
        return false;
    } else {
        return true;
    }
}
