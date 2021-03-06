import { getJSON } from '@lodgify/fetch-helpers';
import { getQueryString } from '@lodgify/get-query-string';

import { ORIGIN } from '../constants';
import { getUrl } from '../utils/getUrl';
import { setFunctionName } from '../utils/setFunctionName';

import { getPathname } from './utils/getPathname';
import { RESOURCE_NAME } from './constants';

/**
 * @param  {Object} query
 * @param  {string} query.addOns
 * @param  {string} query.endDate
 * @param  {number} query.numberOfGuests
 * @param  {string} query.promotionCode
 * @param  {string} query.startDate
 * @param  {number} websiteId
 * @param  {string} [languageCode]
 * @param  {number} [propertyId]
 * @return {Promise}
 */
export const get = (
  { addOns, endDate, numberOfGuests, promotionCode, startDate },
  websiteId,
  languageCode,
  propertyId
) => {
  const pathname = getPathname(websiteId, languageCode, propertyId);
  const queryString = getQueryString({
    AddOns: addOns,
    Arrival: startDate,
    Departure: endDate,
    People: numberOfGuests,
    PromotionCode: promotionCode,
  });
  const url = getUrl(ORIGIN, pathname, queryString);

  return getJSON(url);
};

setFunctionName(get, RESOURCE_NAME);
