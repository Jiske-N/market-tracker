export function checkPassword(submission: string) {
    if (submission.length < 8) {
        return false;
    } else {
        return true;
    }
}
