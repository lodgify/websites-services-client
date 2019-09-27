import { getJSON } from '@lodgify/fetch-helpers';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { RESOURCE_NAME } from './constants';

/**
 * @param  {number} websiteId
 * @param  {number} propertyId
 * @param  {string} languageCode
 * @return {Promise}
 */
export const get = (websiteId, propertyId, languageCode) => {
  const pathname = getPathname(websiteId, propertyId, languageCode);
  const url = getUrl(ORIGIN, pathname);

  return getJSON(url);
};

setFunctionName(get, RESOURCE_NAME);
