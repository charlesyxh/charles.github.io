enum AlertLevel {
    info,
    warning,
    error
}

function getAlertSubscribers(level: AlertLevel) {
    var emails = new Array<string>();

    switch (level) {
        case AlertLevel.info:
            emails.push('cst@domain.com');
            break;
        case AlertLevel.warning:
            emails.push('development@domain.com');
            emails.push('sysadmin@domain.com');
            break;
        case AlertLevel.error:
            emails.push('development@domain.com');
            emails.push('sysadmin@domain.com');
            emails.push('management@domain.com');
            break;
        default:
            throw new Error('Invalid argument!');
    }

    return emails;
}

console.log(getAlertSubscribers(AlertLevel.info));
console.log(getAlertSubscribers(AlertLevel.warning));
console.log(getAlertSubscribers(AlertLevel.error));