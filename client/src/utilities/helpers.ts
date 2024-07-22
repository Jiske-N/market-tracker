export function validatePassword(submission: string) {
    const regex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!regex.test(String(submission))) {
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
