//Fungsi buat mengambil URL gambar secara dinamis dari folder assets

export const getImageUrl = (folder: string, imageName: string): string => {
 
    return new URL(`../assets/${folder}/${imageName}.png`, import.meta.url).href;
    
};