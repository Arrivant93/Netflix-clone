export function useformatRating(rating: string): string {
    // Regex pour extraire le nombre
    const ageMatch = rating.match(/\d+/);
    
    if (ageMatch) {
        // Si un nombre est trouvé, ajouter un "+"
        return `${ageMatch[0]}+`;
    }
    
    // Si pas de nombre trouvé, retourner la chaîne d'origine ou un message par défaut
    return rating;
}