import * as crypto from 'crypto';
export function randomString(length = 10) {
  return crypto.randomBytes(64).toString('hex').substring(0, length);
}

export function convertToSlug(string: string) {
  string = string.replace(/[^\w\s-]/g, '');

  string = string.replace(/\s+/g, '-');

  string = string.toLowerCase();

  return string;
}

export function capitalizeWords(str: string) {
  let words = str?.split(' ');
  let capitalizedWords = words?.map(function (word) {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  });
  let capitalizedString = capitalizedWords?.join(' ');
  return capitalizedString;
}
