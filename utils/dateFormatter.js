// utils/dateFormatter.js
class DateFormatter {
    static format(date) {
        if (!date) return '';
        const formatter = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
        return formatter.format(new Date(date));
    }
}

module.exports = DateFormatter;