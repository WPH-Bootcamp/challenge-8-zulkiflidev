// src/utils/helpers.ts
    
/**
 * Fungsi global untuk mengambil URL gambar secara dinamis dari folder assets
 * @param folder - Nama sub-folder di dalam assets
 * @param imageName - Nama file gambar (tanpa ekstensi .png)
 * @returns string URL gambar
 */

export const getImageUrl = (folder: string, imageName: string): string => {
 
    return new URL(`../assets/${folder}/${imageName}.png`, import.meta.url).href;
    
};