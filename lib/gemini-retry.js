// lib/gemini-retry.js
// Gemini'nin "şu an yoğunum, sonra dene" (503) hatalarını kullanıcıya
// hiç göstermeden, kısa bir bekleme ile arka planda otomatik tekrar dener.

export async function generateWithRetry(model, contents, maxRetries = 3) {
  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await model.generateContent(contents);
    } catch (error) {
      lastError = error;
      const isOverloaded =
        error?.status === 503 ||
        (typeof error?.message === "string" &&
          (error.message.includes("503") ||
            error.message.includes("overloaded") ||
            error.message.includes("UNAVAILABLE")));

      // Geçici yoğunluk dışındaki hatalarda hemen fırlat, tekrar denemeye değmez.
      if (!isOverloaded || attempt === maxRetries) {
        throw lastError;
      }

      // Üstel artan bekleme: 1s, 2s, 4s...
      const delayMs = 1000 * 2 ** attempt;
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError;
}