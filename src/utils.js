export function generatePhotoFilenames(prefix, count, extension) {
    const filenames = [];
    for (let i = 1; i <= count; i++) {
      filenames.push(`${prefix}${i}.${extension}`);
    }
    return filenames;
  }