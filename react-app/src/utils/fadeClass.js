export function fadeClass(status) {
    switch (status) {
        case 'entering':
            return 'fade';
        case 'entered':
            return 'fade show';
        case 'exiting':
            return 'fade';
        case 'exited':
            return 'fade';
    }
}