import { CarProps, FilterProps } from '@/types';

export const fetchCars = async (filters: FilterProps): Promise<CarProps[]> => {
  const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers: HeadersInit = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  // Create a URLSearchParams object
  let params = new URLSearchParams();

  // Check if parameters are defined and add them
  if (manufacturer !== undefined) params.append('make', manufacturer);
  if (year !== undefined) params.append('year', String(year));
  if (model !== undefined) params.append('model', model);
  if (limit !== undefined) params.append('limit', String(limit));
  if (fuel !== undefined) params.append('fuel_type', fuel);

  // Set the required headers for the API request
  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${params}`, {
    headers: headers
  });

  // Parse the response as JSON
  return await response.json();
};
