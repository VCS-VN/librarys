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
  const words = str?.split(' ');
  const capitalizedWords = words?.map(function (word) {
    return word?.charAt(0).toUpperCase() + word?.slice(1);
  });
  const capitalizedString = capitalizedWords?.join(' ');
  return capitalizedString;
}

export function isValidUUID(uuid) {
  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidPattern.test(uuid);
}
