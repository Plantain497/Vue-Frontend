import { format, fromUnixTime } from 'date-fns';

export const convertTimeStampToDate = timestamp => {
	return fromUnixTime(timestamp);
};

export const convertTimeStampToFormattedDate = timestamp => {
	return format(convertTimeStampToDate(timestamp), 'PPP');
};

export const convertDateToFormattedDate = date => {
	return format(date, 'PPP');
};
