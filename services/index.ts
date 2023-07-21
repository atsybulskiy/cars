import { CarProps, FilterProps } from '@/types';

export const fetchCars = async (filters: FilterProps): Promise<CarProps[]> => {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers: HeadersInit = {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  let params = new URLSearchParams();

  manufacturer && params.append('make', manufacturer);
  year && params.append('year', String(year));
  model && params.append('model', model);
  limit && params.append('limit', String(limit));
  fuel && params.append('fuel_type', fuel);

  // Set the required headers for the API request
  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${params}`, {
    headers: headers
  });

  // Parse the response as JSON
  return await response.json();
};
