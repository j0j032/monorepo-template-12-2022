export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeAllLongWords(str: string): string {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
        if (word.length > 2) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    });
    return capitalizedWords.join(' ');
}

